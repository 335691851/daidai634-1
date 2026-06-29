const state = {
  employees: [],
  departments: [],
  cycles: [],
  reviews: [],
  selectedEmployeeId: null,
  selectedReviewId: null,
  activeView: "people",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error || "请求失败");
  }
  return payload;
}

function formData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function fillForm(form, data) {
  Object.entries(data || {}).forEach(([key, value]) => {
    if (form.elements[key]) {
      form.elements[key].value = value ?? "";
    }
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function statusBadge(status) {
  const tone = status === "离职" ? "danger" : status === "试用期" || status === "草稿" ? "warn" : "good";
  return `<span class="badge ${tone}">${status || "-"}</span>`;
}

function ratingBadge(rating) {
  const tone = ["卓越", "优秀"].includes(rating) ? "good" : ["待提升", "不达标"].includes(rating) ? "danger" : "";
  return `<span class="badge ${tone}">${rating || "-"}</span>`;
}

function renderMetrics(summary) {
  $("#metrics").innerHTML = [
    ["在职员工", summary.activeEmployees],
    ["试用期", summary.probation],
    ["考评记录", summary.reviews],
    ["绩效均分", Number(summary.avgScore).toFixed(2)],
  ]
    .map(([label, value]) => `<article class="metric"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
}

function renderEmployeeFilters() {
  const selected = $("#departmentFilter").value;
  $("#departmentFilter").innerHTML = `<option value="">全部部门</option>${state.departments
    .map((department) => `<option ${department === selected ? "selected" : ""}>${department}</option>`)
    .join("")}`;
}

function renderEmployeeOptions() {
  const options = state.employees
    .filter((employee) => employee.status !== "离职")
    .map((employee) => `<option value="${employee.id}">${employee.employee_no} ${employee.name}</option>`)
    .join("");
  $("#reviewForm [name='employee_id']").innerHTML = options;
}

function renderCycleOptions() {
  const options = state.cycles.map((cycle) => `<option value="${cycle.id}">${cycle.name}</option>`).join("");
  $("#cycleFilter").innerHTML = `<option value="">全部周期</option>${options}`;
  $("#reviewForm [name='cycle_id']").innerHTML = options;
}

function renderEmployees() {
  $("#employeeCount").textContent = `${state.employees.length} 人`;
  $("#employeeRows").innerHTML = state.employees
    .map(
      (employee) => `
        <tr data-id="${employee.id}" class="${employee.id === state.selectedEmployeeId ? "selected" : ""}">
          <td>${employee.employee_no}</td>
          <td><strong>${employee.name}</strong></td>
          <td>${employee.department}</td>
          <td>${employee.position}</td>
          <td>${statusBadge(employee.status)}</td>
          <td>${employee.avg_score ? Number(employee.avg_score).toFixed(2) : "-"}</td>
        </tr>
      `
    )
    .join("");
  $$("#employeeRows tr").forEach((row) => row.addEventListener("click", () => selectEmployee(Number(row.dataset.id))));
  renderEmployeeOptions();
}

function renderReviews() {
  $("#reviewCount").textContent = `${state.reviews.length} 条`;
  $("#reviewRows").innerHTML = state.reviews
    .map(
      (review) => `
        <tr data-id="${review.id}" class="${review.id === state.selectedReviewId ? "selected" : ""}">
          <td><strong>${review.employee_name}</strong><br><span>${review.employee_no} · ${review.position}</span></td>
          <td>${review.department}</td>
          <td>${review.cycle_name}</td>
          <td>${Number(review.overall_score).toFixed(2)}</td>
          <td>${ratingBadge(review.rating)}</td>
          <td>${statusBadge(review.status)}</td>
        </tr>
      `
    )
    .join("");
  $$("#reviewRows tr").forEach((row) => row.addEventListener("click", () => selectReview(Number(row.dataset.id))));
}

async function loadSummary() {
  renderMetrics(await api("/api/summary"));
}

async function loadEmployees() {
  const params = new URLSearchParams({
    q: $("#employeeSearch").value.trim(),
    department: $("#departmentFilter").value,
    status: $("#statusFilter").value,
  });
  const payload = await api(`/api/employees?${params.toString()}`);
  state.employees = payload.employees;
  state.departments = payload.departments;
  renderEmployeeFilters();
  renderEmployees();
}

async function loadCycles() {
  const payload = await api("/api/cycles");
  state.cycles = payload.cycles;
  renderCycleOptions();
}

async function loadReviews() {
  const params = new URLSearchParams();
  if ($("#cycleFilter").value) {
    params.set("cycle_id", $("#cycleFilter").value);
  }
  const payload = await api(`/api/reviews?${params.toString()}`);
  state.reviews = payload.reviews;
  renderReviews();
}

async function selectEmployee(id) {
  state.selectedEmployeeId = id;
  const payload = await api(`/api/employees/${id}`);
  fillForm($("#employeeForm"), payload.employee);
  renderEmployees();
}

function newEmployee() {
  state.selectedEmployeeId = null;
  $("#employeeForm").reset();
  $("#employeeForm [name='status']").value = "在职";
  $("#employeeForm [name='employment_type']").value = "全职";
  renderEmployees();
}

function selectReview(id) {
  state.selectedReviewId = id;
  const review = state.reviews.find((item) => item.id === id);
  fillForm($("#reviewForm"), review);
  updateScorePreview();
  renderReviews();
}

function newReview() {
  state.selectedReviewId = null;
  $("#reviewForm").reset();
  $("#reviewForm [name='status']").value = "草稿";
  ["goals_score", "competency_score", "values_score"].forEach((field) => {
    $("#reviewForm").elements[field].value = "3";
  });
  if (state.cycles[0]) {
    $("#reviewForm [name='cycle_id']").value = state.cycles[0].id;
  }
  updateScorePreview();
  renderReviews();
}

function updateScorePreview() {
  const form = $("#reviewForm");
  const goals = Number(form.elements.goals_score.value || 3);
  const competency = Number(form.elements.competency_score.value || 3);
  const values = Number(form.elements.values_score.value || 3);
  const score = goals * 0.45 + competency * 0.35 + values * 0.2;
  const rating = score >= 4.6 ? "卓越" : score >= 4 ? "优秀" : score >= 3.2 ? "达标" : score >= 2.4 ? "待提升" : "不达标";
  $("#scorePreview").textContent = `${score.toFixed(2)} ${rating}`;
}

async function saveEmployee(event) {
  event.preventDefault();
  const data = formData(event.currentTarget);
  const id = data.id;
  delete data.id;
  if (id) {
    await api(`/api/employees/${id}`, { method: "PUT", body: JSON.stringify(data) });
    showToast("员工档案已更新");
  } else {
    await api("/api/employees", { method: "POST", body: JSON.stringify(data) });
    showToast("员工档案已创建");
  }
  await refreshAll();
}

async function saveReview(event) {
  event.preventDefault();
  const data = formData(event.currentTarget);
  const id = data.id;
  delete data.id;
  if (id) {
    await api(`/api/reviews/${id}`, { method: "PUT", body: JSON.stringify(data) });
    showToast("考评记录已更新");
  } else {
    await api("/api/reviews", { method: "POST", body: JSON.stringify(data) });
    showToast("考评记录已保存");
  }
  await refreshAll();
}

async function markEmployeeLeft() {
  const id = $("#employeeForm").elements.id.value;
  if (!id) {
    showToast("请先选择员工");
    return;
  }
  await api(`/api/employees/${id}`, { method: "DELETE" });
  showToast("已标记为离职");
  await refreshAll();
}

async function saveCycle(event) {
  event.preventDefault();
  const form = event.currentTarget;
  await api("/api/cycles", { method: "POST", body: JSON.stringify(formData(form)) });
  $("#cycleDialog").close();
  form.reset();
  showToast("绩效周期已创建");
  await refreshAll();
}

function switchView(view) {
  state.activeView = view;
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  $$(".view").forEach((item) => item.classList.remove("active"));
  $(`#${view}View`).classList.add("active");
  $("#viewTitle").textContent = view === "people" ? "人员主数据" : "绩效考评";
  $("#addEmployeeBtn").style.display = view === "people" ? "inline-flex" : "none";
}

async function refreshAll() {
  await loadSummary();
  await loadCycles();
  await loadEmployees();
  await loadReviews();
}

function bindEvents() {
  $$(".nav-item").forEach((item) => item.addEventListener("click", () => switchView(item.dataset.view)));
  $("#refreshBtn").addEventListener("click", refreshAll);
  $("#addEmployeeBtn").addEventListener("click", newEmployee);
  $("#clearEmployeeBtn").addEventListener("click", newEmployee);
  $("#markLeftBtn").addEventListener("click", markEmployeeLeft);
  $("#employeeForm").addEventListener("submit", saveEmployee);
  $("#reviewForm").addEventListener("submit", saveReview);
  $("#clearReviewBtn").addEventListener("click", newReview);
  $("#openCycleBtn").addEventListener("click", () => $("#cycleDialog").showModal());
  $("#cycleForm").addEventListener("submit", saveCycle);
  $("#employeeSearch").addEventListener("input", debounce(loadEmployees, 220));
  $("#departmentFilter").addEventListener("change", loadEmployees);
  $("#statusFilter").addEventListener("change", loadEmployees);
  $("#cycleFilter").addEventListener("change", loadReviews);
  ["goals_score", "competency_score", "values_score"].forEach((field) => {
    $("#reviewForm").elements[field].addEventListener("input", updateScorePreview);
  });
}

function debounce(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

async function boot() {
  bindEvents();
  await refreshAll();
  if (state.employees[0]) {
    await selectEmployee(state.employees[0].id);
  }
  newReview();
}

boot().catch((error) => showToast(error.message));
