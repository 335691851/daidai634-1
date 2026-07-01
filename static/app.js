const site = {
  zh: {
    title: "中国AI云底座厂商分析",
    subtitle: "阿里云、火山引擎、腾讯云产品序列与AI能力对比",
    intro:
      "以公开官方资料为依据，从AI能力、产品序列、商业、技术和体验五个维度，观察中国主流云厂商如何构建企业级AI云底座。",
    updated: "资料核验：2026-07-01",
    language: "English",
    oldPage: "旧版页面",
    nav: [
      ["home", "首页", "index.html"],
      ["vendors", "厂商总览", "vendors.html"],
      ["ai", "AI能力", "ai-capabilities.html"],
      ["products", "产品序列", "products.html"],
      ["business", "商业分析", "business.html"],
      ["technology", "技术分析", "technology.html"],
      ["experience", "体验", "experience.html"],
      ["scenarios", "场景选型", "scenarios.html"],
    ],
    heroCta: "查看AI能力对比",
    heroAlt: "深色AI云底座分析背景图",
    sourceTitle: "官方来源与依据",
    sourceNote: "页面内容基于三家厂商官网、产品页和官方文档整理；具体能力与价格以官方页面实时信息为准。",
  },
  en: {
    title: "China AI Cloud Foundation Vendors Analysis",
    subtitle: "Alibaba Cloud, Volcano Engine and Tencent Cloud AI capability comparison",
    intro:
      "A public-source analysis of China's major cloud vendors across AI platforms, product portfolios, business positioning, technical foundation and developer experience.",
    updated: "Reviewed: 2026-07-01",
    language: "中文",
    oldPage: "Legacy page",
    nav: [
      ["home", "Home", "index.html"],
      ["vendors", "Vendors", "vendors.html"],
      ["ai", "AI Capabilities", "ai-capabilities.html"],
      ["products", "Products", "products.html"],
      ["business", "Business", "business.html"],
      ["technology", "Technology", "technology.html"],
      ["experience", "Experience", "experience.html"],
      ["scenarios", "Scenarios", "scenarios.html"],
    ],
    heroCta: "View AI capability map",
    heroAlt: "Dark AI cloud foundation analysis background",
    sourceTitle: "Official Sources",
    sourceNote:
      "This site summarizes official product pages and documentation. Capabilities and pricing may change; official pages remain authoritative.",
  },
};

const sources = [
  ["Alibaba Cloud Model Studio / Bailian", "https://www.aliyun.com/product/bailian"],
  ["Alibaba Cloud Model Studio documentation", "https://www.alibabacloud.com/help/zh/model-studio/what-is-model-studio"],
  ["Alibaba Cloud PAI", "https://www.aliyun.com/product/pai"],
  ["Alibaba Cloud PAI architecture", "https://www.alibabacloud.com/help/zh/pai/product-overview/service-architecture"],
  ["Volcano Engine Ark", "https://www.volcengine.com/product/ark"],
  ["Volcano Engine Ark documentation", "https://www.volcengine.com/docs/82379"],
  ["Volcano Engine Doubao models", "https://www.volcengine.com/product/doubao"],
  ["Volcano Engine Ark experience center", "https://www.volcengine.com/experience/ark"],
  ["Tencent Cloud TokenHub", "https://cloud.tencent.com/product/tokenhub"],
  ["Tencent Cloud TokenHub documentation", "https://cloud.tencent.com/document/product/1823"],
  ["Tencent Cloud TI-ONE", "https://cloud.tencent.com/product/tione"],
  ["Tencent Cloud Agent Development Platform", "https://cloud.tencent.com/product/adp"],
];

const vendors = [
  {
    id: "aliyun",
    accent: "#00d5ff",
    name: { zh: "阿里云", en: "Alibaba Cloud" },
    role: { zh: "云基础设施与企业AI平台型厂商", en: "Infrastructure-scale cloud and enterprise AI platform vendor" },
    thesis: {
      zh: "百炼更像企业级大模型应用构建入口，PAI承接模型训练、部署与工程化，适合已经在阿里云生态内沉淀数据和业务系统的企业。",
      en: "Model Studio / Bailian acts as the enterprise LLM application layer, while PAI supports model training, deployment and AI engineering.",
    },
    ai: ["百炼", "通义千问 / Qwen", "PAI", "RAG / Agent / Workflow", "OpenAI兼容API"],
    products: ["ECS / GPU计算", "PAI", "MaxCompute", "AnalyticDB", "PolarDB", "安全与合规"],
    experience: { zh: "文档体系成熟，平台入口完整，企业账号与资源治理链路较强。", en: "Mature documentation, complete platform entry points and strong enterprise governance flow." },
    image:
      "https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6710872271/p824099.png",
    links: [
      ["百炼", "https://www.aliyun.com/product/bailian"],
      ["PAI", "https://www.aliyun.com/product/pai"],
      ["产品列表", "https://www.aliyun.com/product/list"],
    ],
    scores: { model: 92, agent: 88, data: 93, infra: 95, experience: 84 },
  },
  {
    id: "volc",
    accent: "#7c5cff",
    name: { zh: "火山引擎", en: "Volcano Engine" },
    role: { zh: "大模型产品体验与业务场景驱动型厂商", en: "Model experience and scenario-driven AI cloud vendor" },
    thesis: {
      zh: "火山方舟聚焦模型体验、推理、评测与精调，叠加豆包大模型和字节系业务实践，适合追求快速试用、快速集成和内容/消费场景创新的团队。",
      en: "Ark emphasizes model experience, inference, evaluation and fine-tuning, combined with Doubao models and ByteDance practice.",
    },
    ai: ["火山方舟", "豆包大模型", "模型体验中心", "评测 / 精调", "推理服务"],
    products: ["云服务器", "对象存储", "veMLP", "数据库", "大数据", "视频与内容技术"],
    experience: { zh: "体验入口突出，模型试用和开发者路径短，适合从体验快速进入验证。", en: "Strong trial experience and short path from model testing to prototype validation." },
    image: "",
    links: [
      ["火山方舟", "https://www.volcengine.com/product/ark"],
      ["豆包大模型", "https://www.volcengine.com/product/doubao"],
      ["体验中心", "https://www.volcengine.com/experience/ark"],
    ],
    scores: { model: 91, agent: 84, data: 82, infra: 84, experience: 93 },
  },
  {
    id: "tencent",
    accent: "#25f0a5",
    name: { zh: "腾讯云", en: "Tencent Cloud" },
    role: { zh: "模型服务、智能体平台与产业连接型厂商", en: "Model service, agent platform and industry-connection vendor" },
    thesis: {
      zh: "TokenHub强调统一大模型入口，TI-ONE承担训推平台，智能体开发平台补齐RAG、多智能体和插件生态，适合微信生态、内容协作和产业客户场景。",
      en: "TokenHub provides a unified model access layer, TI-ONE supports training/inference and ADP adds RAG, multi-agent and plugin workflows.",
    },
    ai: ["TokenHub", "腾讯混元", "TI-ONE", "智能体开发平台ADP", "多模态模型服务"],
    products: ["CVM / GPU", "TKE", "TDSQL", "COS", "大数据", "安全与音视频"],
    experience: { zh: "产品入口清晰，模型聚合与智能体平台结合度高，适合应用开发和行业集成。", en: "Clear product entries with a strong combination of model aggregation and agent development." },
    image:
      "https://qcloudimg.tencent-cloud.cn/image/document/f208cecc46391afc50f91ebe38b9b13a.png",
    links: [
      ["TokenHub", "https://cloud.tencent.com/product/tokenhub"],
      ["TI-ONE", "https://cloud.tencent.com/product/tione"],
      ["智能体开发平台", "https://cloud.tencent.com/product/adp"],
    ],
    scores: { model: 89, agent: 91, data: 86, infra: 88, experience: 86 },
  },
];

const capabilityRows = [
  {
    name: { zh: "统一模型入口", en: "Unified model access" },
    aliyun: "百炼模型广场、通义千问及第三方模型",
    volc: "火山方舟模型仓库、豆包模型体系",
    tencent: "TokenHub聚合混元及第三方模型",
  },
  {
    name: { zh: "智能体与应用构建", en: "Agent and app building" },
    aliyun: "智能体、应用、工作流、RAG",
    volc: "应用实验、推理、评测与精调链路",
    tencent: "ADP支持RAG、多智能体、流程编排、插件/MCP",
  },
  {
    name: { zh: "训练与精调", en: "Training and fine-tuning" },
    aliyun: "PAI + 百炼精调能力",
    volc: "方舟精调、评测、推理闭环",
    tencent: "TI-ONE训练、模型管理、模型服务",
  },
  {
    name: { zh: "多模态", en: "Multimodal" },
    aliyun: "文本、视觉、语音、多模态应用能力",
    volc: "豆包视觉、语音、图像等多模态模型入口",
    tencent: "TokenHub覆盖文本、图像、视频、3D、代码、视觉理解",
  },
  {
    name: { zh: "企业工程化", en: "Enterprise engineering" },
    aliyun: "账号、资源、网络、安全、数据治理链路成熟",
    volc: "模型体验到业务验证路径短",
    tencent: "模型服务、智能体和产业应用集成顺畅",
  },
];

const productRows = [
  ["云基础设施", "ECS / GPU / ACK", "云服务器 / GPU / 容器", "CVM / GPU / TKE"],
  ["AI平台", "百炼、PAI", "火山方舟、veMLP", "TokenHub、TI-ONE、ADP"],
  ["模型体系", "通义千问 / Qwen", "豆包大模型", "腾讯混元"],
  ["数据与大数据", "MaxCompute、DataWorks、AnalyticDB", "湖仓、实时数仓、数据开发", "EMR、Data Lake、TBDS、数据开发"],
  ["数据库", "PolarDB、RDS、Lindorm", "RDS、veDB、缓存", "TDSQL、CDB、Redis、向量能力"],
  ["安全治理", "云安全中心、访问控制、合规", "安全、风控、内容安全", "安全中心、零信任、合规治理"],
  ["行业方案", "金融、制造、政企、零售", "内容、消费、汽车、互联网", "金融、政企、游戏、媒体、微信生态"],
];

const businessCards = [
  ["商业定位", "阿里云偏云基础设施与企业AI全栈；火山引擎偏模型体验与业务创新；腾讯云偏产业连接和应用生态。"],
  ["生态杠杆", "阿里云连接云市场与企业IT系统；火山引擎连接字节系内容与模型体验；腾讯云连接微信、游戏、音视频和产业互联网。"],
  ["采购逻辑", "成熟企业通常关注治理、成本、专属部署与数据安全；创新团队更关注模型效果、API易用性和试用速度。"],
  ["风险点", "AI能力变化速度快，选型时应以PoC指标、合同SLA、数据合规和长期成本为核心验证项。"],
];

const technologyLayers = [
  ["接入层", "API网关、OpenAI兼容接口、SDK、控制台、体验中心"],
  ["应用层", "Agent、RAG、Workflow、插件/MCP、多智能体、企业知识库"],
  ["模型层", "通义千问、豆包、混元及第三方模型；文本、图像、语音、视频、代码"],
  ["训练推理层", "模型精调、评测、压测、弹性推理、模型服务、灰度发布"],
  ["数据层", "对象存储、湖仓、向量检索、数据库、大数据开发、数据治理"],
  ["基础设施层", "GPU/CPU计算、容器、网络、安全、可观测、成本管理"],
];

const experienceRows = [
  ["官网入口清晰度", 86, 92, 88],
  ["模型体验速度", 84, 95, 87],
  ["API上手难度", 86, 90, 88],
  ["控制台完整度", 91, 84, 87],
  ["文档可检索性", 90, 82, 88],
  ["企业治理链路", 93, 80, 86],
];

const scenarios = [
  ["企业级知识库 / RAG", "阿里云、腾讯云", "关注数据治理、知识库、权限、私有网络和长期运维。"],
  ["快速模型试用 / 创新原型", "火山引擎", "体验中心和模型验证路径短，适合先看效果再做工程化。"],
  ["大模型应用开发平台", "三家均可", "阿里百炼偏企业全栈，火山方舟偏体验验证，腾讯TokenHub+ADP偏应用集成。"],
  ["模型训练与精调", "阿里云PAI、腾讯TI-ONE、火山方舟", "要重点比较数据格式、训练成本、评测闭环、部署路径。"],
  ["微信生态 / 内容协作", "腾讯云", "如果应用需要连接腾讯生态、音视频、IM或行业应用，腾讯云更顺。"],
  ["制造 / 金融 / 政企私有化", "阿里云、腾讯云", "重点验证合规、专属部署、专线、账号治理、审计和交付团队能力。"],
];

const englishExtras = {
  businessCards: [
    ["Positioning", "Alibaba Cloud leans toward full-stack enterprise cloud and AI; Volcano Engine emphasizes model experience and rapid validation; Tencent Cloud connects AI services with industry ecosystems."],
    ["Ecosystem leverage", "Alibaba connects enterprise IT and cloud marketplace; Volcano connects ByteDance-style model/product practice; Tencent connects WeChat, media, gaming and industry internet."],
    ["Procurement logic", "Large enterprises care about governance, data security, SLA and long-term cost; innovation teams care about model quality and API speed."],
    ["Risks", "AI capabilities change fast. Run PoC tests against quality, latency, cost, governance and deployment constraints."],
  ],
  productRows: [
    ["Cloud infrastructure", "ECS / GPU / ACK", "Cloud server / GPU / container", "CVM / GPU / TKE"],
    ["AI platform", "Bailian, PAI", "Ark, veMLP", "TokenHub, TI-ONE, ADP"],
    ["Model family", "Qwen", "Doubao", "Hunyuan"],
    ["Data and big data", "MaxCompute, DataWorks, AnalyticDB", "Lakehouse, realtime warehouse, data development", "EMR, data lake, TBDS"],
    ["Database", "PolarDB, RDS, Lindorm", "RDS, veDB, cache", "TDSQL, CDB, Redis, vector capabilities"],
    ["Security", "Security Center, RAM, compliance", "Security, risk control, content safety", "Security Center, Zero Trust, compliance"],
    ["Industries", "Finance, manufacturing, public sector, retail", "Content, consumer, auto, internet", "Finance, public sector, gaming, media, WeChat ecosystem"],
  ],
};

function getLang() {
  const root = document.querySelector("#pageRoot");
  const requested = new URLSearchParams(location.search).get("lang");
  return requested || root?.dataset.lang || localStorage.getItem("ai-cloud-lang") || "zh";
}

function setLang(lang) {
  localStorage.setItem("ai-cloud-lang", lang);
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  render();
}

function local(value, lang) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") return value[lang] || value.zh || "";
  return value;
}

function header(page, lang) {
  const copy = site[lang];
  const nav = copy.nav
    .map(
      ([id, label, href]) => `
        <a class="nav-link ${id === page ? "active" : ""}" href="./${href}">
          <span>${label}</span>
        </a>
      `
    )
    .join("");
  document.querySelector("#siteHeader").innerHTML = `
    <header class="site-header">
      <a class="brand" href="./index.html" aria-label="${copy.title}">
        <span class="brand-mark">AI</span>
        <span>
          <strong>${copy.title}</strong>
          <small>${copy.updated}</small>
        </span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">${nav}</nav>
      <div class="header-actions">
        <button class="lang-toggle" type="button" id="langToggle">${copy.language}</button>
        <a class="old-link" href="./old/">${copy.oldPage}</a>
      </div>
    </header>
  `;
  document.querySelector("#langToggle").addEventListener("click", () => setLang(lang === "en" ? "zh" : "en"));
}

function footer(lang) {
  const copy = site[lang];
  document.querySelector("#siteFooter").innerHTML = `
    <footer class="site-footer">
      <div>
        <strong>${copy.title}</strong>
        <p>${copy.sourceNote}</p>
      </div>
      <div class="footer-links">
        ${sources.slice(0, 6).map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
      </div>
    </footer>
  `;
}

function sourceBlock(lang) {
  const copy = site[lang];
  return `
    <section class="section sources-section">
      <div class="section-heading">
        <p class="eyebrow">${lang === "en" ? "Evidence" : "依据"}</p>
        <h2>${copy.sourceTitle}</h2>
        <p>${copy.sourceNote}</p>
      </div>
      <div class="source-grid">
        ${sources
          .map(([label, href]) => `<a class="source-card" href="${href}" target="_blank" rel="noreferrer">${label}<span>↗</span></a>`)
          .join("")}
      </div>
    </section>
  `;
}

function hero(lang) {
  const copy = site[lang];
  return `
    <section class="hero">
      <div class="hero-media">
        <img src="./assets/ai-cloud-hero.png" alt="${copy.heroAlt}" />
      </div>
      <div class="hero-content">
        <p class="eyebrow">${copy.updated}</p>
        <h1>${copy.title}</h1>
        <p class="hero-lede">${copy.intro}</p>
        <div class="hero-actions">
          <a class="primary-button" href="./ai-capabilities.html">${copy.heroCta}</a>
          <a class="secondary-button" href="./experience.html">${lang === "en" ? "Compare experience" : "查看体验对比"}</a>
        </div>
      </div>
      <div class="signal-panel">
        <span>${lang === "en" ? "AI foundation signal" : "AI云底座信号"}</span>
        <strong>3 × 6 × 5</strong>
        <small>${lang === "en" ? "vendors, capability layers, decision dimensions" : "厂商、能力层、决策维度"}</small>
      </div>
    </section>
  `;
}

function metricGrid(lang) {
  const items =
    lang === "en"
      ? [
          ["3", "Vendors", "Alibaba Cloud, Volcano Engine, Tencent Cloud"],
          ["5", "AI dimensions", "Model, agent, data, infrastructure, experience"],
          ["7", "Analysis pages", "Business, technology, products and scenarios"],
          ["12+", "Official sources", "Product pages and documentation"],
        ]
      : [
          ["3", "核心厂商", "阿里云、火山引擎、腾讯云"],
          ["5", "AI能力维度", "模型、智能体、数据、算力、体验"],
          ["7", "分析页面", "商业、技术、产品、场景完整展开"],
          ["12+", "官方来源", "产品页、文档、体验入口"],
        ];
  return `<section class="metric-grid">${items.map(([value, label, hint]) => `<article class="metric-card"><strong>${value}</strong><span>${label}</span><p>${hint}</p></article>`).join("")}</section>`;
}

function vendorCards(lang, compact = false) {
  return `
    <div class="vendor-grid ${compact ? "compact" : ""}">
      ${vendors
        .map(
          (vendor) => `
            <article class="vendor-card" style="--accent:${vendor.accent}">
              <div class="vendor-topline">
                <span class="vendor-dot"></span>
                <span>${local(vendor.role, lang)}</span>
              </div>
              <h3>${local(vendor.name, lang)}</h3>
              <p>${local(vendor.thesis, lang)}</p>
              ${vendor.image ? `<img class="vendor-image" src="${vendor.image}" alt="${local(vendor.name, lang)} official product visual" loading="lazy" />` : `<div class="vendor-visual-fallback"><span>${local(vendor.name, lang)}</span><i></i><i></i><i></i></div>`}
              <div class="tag-cloud">
                ${vendor.ai.map((item) => `<span>${item}</span>`).join("")}
              </div>
              <div class="vendor-links">
                ${vendor.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function capabilityRadar(lang) {
  const labels =
    lang === "en"
      ? { model: "Models", agent: "Agents", data: "Data", infra: "Infra", experience: "Experience" }
      : { model: "模型", agent: "智能体", data: "数据", infra: "算力", experience: "体验" };
  return `
    <div class="radar-grid">
      ${vendors
        .map(
          (vendor) => `
            <article class="radar-card" style="--accent:${vendor.accent}">
              <h3>${local(vendor.name, lang)}</h3>
              ${Object.entries(vendor.scores)
                .map(
                  ([key, value]) => `
                    <div class="score-row">
                      <span>${labels[key]}</span>
                      <div class="score-track"><i style="width:${value}%"></i></div>
                      <b>${value}</b>
                    </div>
                  `
                )
                .join("")}
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function capabilityTable(lang) {
  return `
    <div class="matrix-wrap">
      <table class="matrix-table">
        <thead>
          <tr>
            <th>${lang === "en" ? "Capability" : "能力维度"}</th>
            <th>Alibaba Cloud</th>
            <th>Volcano Engine</th>
            <th>Tencent Cloud</th>
          </tr>
        </thead>
        <tbody>
          ${capabilityRows
            .map(
              (row) => `
                <tr>
                  <td><strong>${local(row.name, lang)}</strong></td>
                  <td>${row.aliyun}</td>
                  <td>${row.volc}</td>
                  <td>${row.tencent}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function productTable(lang) {
  const rows = lang === "en" ? englishExtras.productRows : productRows;
  return `
    <div class="matrix-wrap">
      <table class="matrix-table product-table">
        <thead>
          <tr>
            <th>${lang === "en" ? "Product layer" : "产品层"}</th>
            <th>${lang === "en" ? "Alibaba Cloud" : "阿里云"}</th>
            <th>${lang === "en" ? "Volcano Engine" : "火山引擎"}</th>
            <th>${lang === "en" ? "Tencent Cloud" : "腾讯云"}</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<strong>${cell}</strong>` : cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function architecture(lang) {
  return `
    <div class="architecture">
      ${technologyLayers
        .map(
          ([title, desc], index) => `
            <article class="layer-card" style="--delay:${index * 70}ms">
              <span>0${index + 1}</span>
              <h3>${title}</h3>
              <p>${desc}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function businessGrid(lang) {
  const cards = lang === "en" ? englishExtras.businessCards : businessCards;
  return `<div class="analysis-grid">${cards.map(([title, text]) => `<article class="analysis-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
}

function experienceMatrix(lang) {
  const names = lang === "en" ? ["Dimension", "Alibaba", "Volcano", "Tencent"] : ["体验维度", "阿里云", "火山引擎", "腾讯云"];
  return `
    <div class="experience-list">
      ${experienceRows
        .map(
          ([name, ali, volc, tencent]) => `
            <article class="experience-row">
              <h3>${name}</h3>
              ${[
                ["阿里云", ali, "#00d5ff"],
                ["火山引擎", volc, "#7c5cff"],
                ["腾讯云", tencent, "#25f0a5"],
              ]
                .map(
                  ([vendor, value, color]) => `
                    <div class="experience-meter" style="--accent:${color}">
                      <span>${vendor}</span>
                      <div><i style="width:${value}%"></i></div>
                      <b>${value}</b>
                    </div>
                  `
                )
                .join("")}
            </article>
          `
        )
        .join("")}
    </div>
    <div class="experience-entry">
      ${vendors
        .map(
          (vendor) => `
            <article class="entry-card" style="--accent:${vendor.accent}">
              <h3>${local(vendor.name, lang)}</h3>
              <p>${local(vendor.experience, lang)}</p>
              <div class="vendor-links">${vendor.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function scenarioGrid(lang) {
  return `<div class="scenario-grid">${scenarios.map(([title, pick, reason]) => `<article class="scenario-card"><span>${pick}</span><h3>${title}</h3><p>${reason}</p></article>`).join("")}</div>`;
}

function section(title, eyebrow, body, lang, intro = "") {
  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
        ${intro ? `<p>${intro}</p>` : ""}
      </div>
      ${body}
    </section>
  `;
}

function pageHome(lang) {
  return `
    ${hero(lang)}
    ${metricGrid(lang)}
    ${section(
      lang === "en" ? "Vendor positioning" : "厂商定位速览",
      "VENDOR MAP",
      vendorCards(lang, true),
      lang,
      lang === "en" ? "Three vendors are not interchangeable: each has a different center of gravity." : "三家不是同一种云：各自AI云底座的重心不同。"
    )}
    ${section(
      lang === "en" ? "AI capability radar" : "AI能力雷达",
      "AI RADAR",
      capabilityRadar(lang),
      lang,
      lang === "en" ? "Scores are analytical estimates based on official product coverage and experience paths." : "评分是基于官方产品覆盖、能力完整度和体验路径的分析性估计。"
    )}
    ${section(lang === "en" ? "Foundation architecture" : "AI云底座架构图", "ARCHITECTURE", architecture(lang), lang)}
    ${sourceBlock(lang)}
  `;
}

function pageVendors(lang) {
  return `
    ${section(lang === "en" ? "Vendor overview" : "厂商总览", "VENDORS", vendorCards(lang), lang, lang === "en" ? "Official product visuals and links are included where stable." : "稳定可用的官方产品实图与入口链接已放在厂商卡片中。")}
    ${section(lang === "en" ? "Capability radar" : "能力雷达", "SIGNAL", capabilityRadar(lang), lang)}
    ${sourceBlock(lang)}
  `;
}

function pageAI(lang) {
  return `
    ${section(lang === "en" ? "AI capability comparison" : "AI能力对比", "AI CAPABILITIES", capabilityTable(lang), lang, lang === "en" ? "The core comparison focuses on model access, agents, fine-tuning, multimodal support and enterprise engineering." : "本页重点比较模型入口、智能体、精调、多模态和企业工程化能力。")}
    ${section(lang === "en" ? "Capability radar" : "能力雷达", "RADAR", capabilityRadar(lang), lang)}
    ${sourceBlock(lang)}
  `;
}

function pageProducts(lang) {
  return `
    ${section(lang === "en" ? "Product portfolio comparison" : "产品序列对比", "PRODUCT STACK", productTable(lang), lang, lang === "en" ? "A cloud foundation is not only the LLM API; data, compute, security and operations matter." : "AI云底座不只是大模型API，计算、数据、安全和运维同样决定落地质量。")}
    ${sourceBlock(lang)}
  `;
}

function pageBusiness(lang) {
  return `
    ${section(lang === "en" ? "Business analysis" : "商业分析", "BUSINESS", businessGrid(lang), lang)}
    ${section(lang === "en" ? "Vendor thesis" : "厂商商业重心", "POSITIONING", vendorCards(lang, true), lang)}
    ${sourceBlock(lang)}
  `;
}

function pageTechnology(lang) {
  return `
    ${section(lang === "en" ? "Technical foundation" : "技术分析", "TECH STACK", architecture(lang), lang, lang === "en" ? "The strongest AI cloud foundation is an end-to-end system from API access to compute, data and governance." : "真正的AI云底座，是从API接入、应用编排、模型服务、训练推理、数据治理到算力安全的一体化系统。")}
    ${section(lang === "en" ? "AI engineering signals" : "AI工程化信号", "ENGINEERING", capabilityRadar(lang), lang)}
    ${sourceBlock(lang)}
  `;
}

function pageExperience(lang) {
  return `
    ${section(lang === "en" ? "Experience comparison" : "体验对比", "EXPERIENCE", experienceMatrix(lang), lang, lang === "en" ? "Experience is measured by entry clarity, model trial speed, API onboarding, console completeness and documentation." : "体验维度关注入口清晰度、模型试用速度、API上手、控制台完整度、文档检索和企业治理链路。")}
    ${sourceBlock(lang)}
  `;
}

function pageScenarios(lang) {
  return `
    ${section(lang === "en" ? "Scenario selection" : "场景选型", "DECISION", scenarioGrid(lang), lang, lang === "en" ? "Use these recommendations as PoC hypotheses, not final procurement conclusions." : "以下建议适合作为PoC假设，而不是最终采购结论。")}
    ${section(lang === "en" ? "Comparison matrix" : "能力矩阵", "MATRIX", capabilityTable(lang), lang)}
    ${sourceBlock(lang)}
  `;
}

const pageRenderers = {
  home: pageHome,
  vendors: pageVendors,
  ai: pageAI,
  products: pageProducts,
  business: pageBusiness,
  technology: pageTechnology,
  experience: pageExperience,
  scenarios: pageScenarios,
};

function render() {
  const root = document.querySelector("#pageRoot");
  const page = root?.dataset.page || "home";
  const lang = getLang() === "en" ? "en" : "zh";
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  header(page, lang);
  root.innerHTML = pageRenderers[page](lang);
  footer(lang);
  animateCounters();
}

function animateCounters() {
  document.querySelectorAll(".metric-card strong").forEach((node) => {
    node.animate(
      [
        { transform: "translateY(8px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ],
      { duration: 520, easing: "ease-out" }
    );
  });
}

function startParticles() {
  const canvas = document.querySelector("#particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 72 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0006,
    vy: (Math.random() - 0.5) * 0.0006,
    r: Math.random() * 1.6 + 0.4,
  }));

  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  }

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(11, 18, 32, 0.18)";
    ctx.fillRect(0, 0, w, h);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;
      const x = p.x * w;
      const y = p.y * h;
      ctx.beginPath();
      ctx.arc(x, y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = index % 3 === 0 ? "rgba(37,240,165,.62)" : index % 3 === 1 ? "rgba(0,213,255,.52)" : "rgba(124,92,255,.46)";
      ctx.fill();

      for (let j = index + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = (q.x - p.x) * w;
        const dy = (q.y - p.y) * h;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 * devicePixelRatio) {
          ctx.strokeStyle = `rgba(0,213,255,${0.14 - dist / (150 * devicePixelRatio) * 0.12})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(q.x * w, q.y * h);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

render();
startParticles();
