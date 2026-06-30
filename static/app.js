const STORAGE_KEY = "flowcrm-demo-customers";

const stages = ["新线索", "需求确认", "方案报价", "合同推进", "已成交"];

const stageClass = {
  新线索: "new",
  需求确认: "discovery",
  方案报价: "quote",
  合同推进: "contract",
  已成交: "won",
};

const demoCustomers = [
  {
    id: crypto.randomUUID(),
    name: "星河制造集团",
    contact: "李明",
    industry: "智能制造",
    stage: "合同推进",
    owner: "Sophia",
    amount: 286000,
    nextAction: "2026-07-02",
    note: "采购负责人认可方案，等待法务确认服务条款。",
    createdAt: "2026-06-15",
  },
  {
    id: crypto.randomUUID(),
    name: "云岭零售连锁",
    contact: "周妍",
    industry: "新零售",
    stage: "方案报价",
    owner: "Kevin",
    amount: 124000,
    nextAction: "2026-07-04",
    note: "重点关注门店线索分配和会员复购分析。",
    createdAt: "2026-06-18",
  },
  {
    id: crypto.randomUUID(),
    name: "北辰教育科技",
    contact: "陈思远",
    industry: "教育科技",
    stage: "需求确认",
    owner: "Mia",
    amount: 78000,
    nextAction: "2026-07-01",
    note: "需要把招生线索、试听预约和转化率打通。",
    createdAt: "2026-06-20",
  },
  {
    id: crypto.randomUUID(),
    name: "海川物流",
    contact: "王珂",
    industry: "物流供应链",
    stage: "新线索",
    owner: "Leo",
    amount: 56000,
    nextAction: "2026-07-05",
    note: "来自官网咨询，尚未完成预算确认。",
    createdAt: "2026-06-24",
  },
  {
    id: crypto.randomUUID(),
    name: "长宁医疗中心",
    contact: "赵安",
    industry: "医疗服务",
    stage: "已成交",
    owner: "Sophia",
    amount: 198000,
    nextAction: "2026-07-08",
    note: "合同已签，准备客户成功交接和上线计划。",
    createdAt: "2026-06-08",
  },
];

const state = {
  customers: [],
  view: "dashboard",
  search: "",
  stage: "",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadCustomers() {
  const raw = localStorage.getItem(STORAGE_KEY);
  state.customers = raw ? JSON.parse(raw) : demoCustomers;
  saveCustomers();
}

function saveCustomers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.customers));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function bySearch(customer) {
  const text = `${customer.name} ${customer.contact} ${customer.industry} ${customer.owner}`.toLowerCase();
  return text.includes(state.search.toLowerCase());
}

function byStage(customer) {
  return !state.stage || customer.stage === state.stage;
}

function filteredCustomers() {
  return state.customers.filter((customer) => bySearch(customer) && byStage(customer));
}

function stageBadge(stage) {
  return `<span class="badge ${stageClass[stage] || ""}">${stage}</span>`;
}

function renderIcons() {
  const fallbackIcons = {
    "layout-dashboard": "▦",
    users: "◎",
    "kanban-square": "▤",
    "cloud-upload": "↑",
    search: "⌕",
    "rotate-ccw": "↻",
    plus: "+",
    x: "×",
    save: "✓",
  };

  $$("[data-icon]").forEach((target) => {
    const iconName = target.dataset.icon;
    const icon = window.lucide?.icons?.[iconName];
    target.innerHTML = icon
      ? icon.toSvg({
          width: 18,
          height: 18,
          "stroke-width": 2,
          "aria-hidden": "true",
        })
      : fallbackIcons[iconName] || "";
  });
}

function renderMetrics() {
  const totalAmount = state.customers.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const activeDeals = state.customers.filter((item) => item.stage !== "已成交").length;
  const wonAmount = state.customers
    .filter((item) => item.stage === "已成交")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const owners = new Set(state.customers.map((item) => item.owner)).size;

  $("#metrics").innerHTML = [
    ["客户总数", state.customers.length, "可本地新增和保存"],
    ["进行中商机", activeDeals, "线索到合同全流程"],
    ["预计金额", formatCurrency(totalAmount), `已成交 ${formatCurrency(wonAmount)}`],
    ["销售负责人", owners, "演示团队协作视角"],
  ]
    .map(
      ([label, value, hint]) => `
        <article class="metric">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${hint}</small>
        </article>
      `
    )
    .join("");
}

function renderCustomerList() {
  const customers = filteredCustomers().sort((a, b) => Number(b.amount) - Number(a.amount));
  $("#customerList").innerHTML = customers.length
    ? customers
        .map(
          (customer) => `
            <article class="customer-card">
              <div>
                <h3>${customer.name}</h3>
                <p>${customer.industry} · ${customer.contact} · 负责人 ${customer.owner}</p>
                <div class="customer-meta">
                  ${stageBadge(customer.stage)}
                  <span>下次跟进 ${customer.nextAction}</span>
                </div>
              </div>
              <div class="amount">${formatCurrency(customer.amount)}</div>
            </article>
          `
        )
        .join("")
    : `<article class="task-card"><h3>没有匹配的客户</h3><p>调整搜索关键词或阶段筛选后再试。</p></article>`;
}

function renderTasks() {
  const upcoming = state.customers
    .filter((customer) => customer.stage !== "已成交")
    .sort((a, b) => a.nextAction.localeCompare(b.nextAction))
    .slice(0, 5);

  $("#taskList").innerHTML = upcoming
    .map(
      (customer, index) => `
        <article class="task-card">
          <header>
            <h3>${customer.name}</h3>
            <span class="priority">${index === 0 ? "优先" : customer.nextAction}</span>
          </header>
          <p>${customer.note || "补充下一步跟进记录。"}</p>
        </article>
      `
    )
    .join("");
}

function renderCustomerTable() {
  const customers = filteredCustomers();
  $("#customerCount").textContent = `${customers.length} 个客户`;
  $("#customerRows").innerHTML = customers
    .map(
      (customer) => `
        <tr>
          <td><strong>${customer.name}</strong><small>${customer.contact}</small></td>
          <td>${customer.industry}</td>
          <td>${stageBadge(customer.stage)}</td>
          <td>${customer.owner}</td>
          <td>${formatCurrency(customer.amount)}</td>
          <td>${customer.nextAction}</td>
        </tr>
      `
    )
    .join("");
}

function renderDealBoard() {
  $("#dealBoard").innerHTML = stages
    .map((stage) => {
      const deals = state.customers.filter((customer) => customer.stage === stage && bySearch(customer));
      const amount = deals.reduce((sum, deal) => sum + Number(deal.amount || 0), 0);
      return `
        <section class="kanban-column">
          <header>
            <h2>${stage}</h2>
            <span class="count-pill">${deals.length}</span>
          </header>
          <div class="deal-stack">
            ${
              deals.length
                ? deals
                    .map(
                      (deal) => `
                        <article class="deal-card">
                          <strong>${deal.name}</strong>
                          <span>${deal.owner} · ${formatCurrency(deal.amount)}</span>
                          <span>${deal.note || "暂无备注"}</span>
                        </article>
                      `
                    )
                    .join("")
                : `<article class="deal-card"><strong>暂无商机</strong><span>${formatCurrency(amount)}</span></article>`
            }
          </div>
        </section>
      `;
    })
    .join("");
}

function render() {
  renderMetrics();
  renderCustomerList();
  renderTasks();
  renderCustomerTable();
  renderDealBoard();
  renderIcons();
}

function switchView(view) {
  state.view = view;
  $$(".nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  $$(".view").forEach((section) => section.classList.remove("is-active"));
  $(`#${view}View`).classList.add("is-active");
  $("#pageTitle").textContent =
    view === "dashboard" ? "客户增长工作台" : view === "customers" ? "客户档案" : "商机推进看板";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function openCustomerDialog() {
  const form = $("#customerForm");
  form.reset();
  form.elements.nextAction.value = new Date(Date.now() + 86400000 * 3).toISOString().slice(0, 10);
  $("#customerDialog").showModal();
}

function saveCustomer(event) {
  event.preventDefault();
  const submitter = event.submitter;
  if (submitter?.value === "cancel") {
    $("#customerDialog").close();
    return;
  }

  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.customers.unshift({
    id: crypto.randomUUID(),
    ...data,
    amount: Number(data.amount),
    createdAt: new Date().toISOString().slice(0, 10),
  });
  saveCustomers();
  $("#customerDialog").close();
  render();
  showToast("客户已保存，刷新页面后仍会保留。");
}

function resetData() {
  state.customers = demoCustomers.map((customer) => ({ ...customer, id: crypto.randomUUID() }));
  saveCustomers();
  state.search = "";
  state.stage = "";
  $("#globalSearch").value = "";
  $("#stageFilter").value = "";
  render();
  showToast("演示数据已重置。");
}

function bindEvents() {
  $$(".nav-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
  $("#globalSearch").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    render();
  });
  $("#stageFilter").addEventListener("change", (event) => {
    state.stage = event.target.value;
    render();
  });
  $("#openCustomerDialog").addEventListener("click", openCustomerDialog);
  $("#customerForm").addEventListener("submit", saveCustomer);
  $("#resetDataBtn").addEventListener("click", resetData);
}

loadCustomers();
bindEvents();
render();
