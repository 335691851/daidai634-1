const ASSETS = {
  hero: "./assets/ai-cloud-hero.png",
};

const i18n = {
  zh: {
    siteTitle: "中国AI云底座厂商分析",
    tagline: "阿里云、火山引擎、腾讯云产品序列与AI能力对比",
    updated: "资料核验：2026-07-01",
    switchLang: "English",
    oldPage: "旧版页面",
    primaryCta: "进入AI能力对比",
    secondaryCta: "查看体验维度",
    officialSource: "官方来源",
    sourceNote: "内容基于厂商官网、产品页、官方文档和体验入口整理；能力、价格和产品边界以官方实时信息为准。",
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
    pages: {
      home: ["中国AI云底座厂商分析", "从商业、技术、产品、体验四个视角拆解三家云厂商的AI底座能力。"],
      vendors: ["厂商定位总览", "把三家厂商放在同一个坐标系里观察：谁强在平台，谁强在体验，谁强在生态连接。"],
      ai: ["AI能力对比", "围绕模型、智能体、训练精调、多模态、企业工程化五个核心能力展开。"],
      products: ["产品序列对比", "AI云底座不是单一模型API，而是计算、数据、模型、平台、安全和行业方案的组合。"],
      business: ["商业分析", "比较三家厂商的市场打法、生态资源、客户路径、交付能力和采购风险。"],
      technology: ["技术分析", "从接入层、应用层、模型层、训练推理层、数据层、基础设施层拆解技术底座。"],
      experience: ["体验对比", "从官网入口、模型体验、API上手、控制台、文档、企业治理六个角度看真实使用感。"],
      scenarios: ["场景选型", "面向企业知识库、智能体、模型训练、内容生成、行业私有化等场景给出选型建议。"],
    },
    labels: {
      overview: "总览",
      vendorMap: "厂商定位速览",
      radar: "AI能力雷达",
      liveSignals: "动态能力扫描",
      architecture: "AI云底座架构图",
      report: "深度分析报告",
      gallery: "官方实图与图例",
      matrix: "对比矩阵",
      productStack: "产品序列地图",
      experienceScore: "体验评分",
      scenario: "场景建议",
      source: "资料来源",
      keyFinding: "关键判断",
      decision: "选型结论",
    },
  },
  en: {
    siteTitle: "China AI Cloud Foundation Vendors Analysis",
    tagline: "AI product portfolio and capability comparison across Alibaba Cloud, Volcano Engine and Tencent Cloud",
    updated: "Reviewed: 2026-07-01",
    switchLang: "中文",
    oldPage: "Legacy page",
    primaryCta: "View AI capability map",
    secondaryCta: "Compare experience",
    officialSource: "Official sources",
    sourceNote: "Based on official product pages, documentation and experience portals. Official pages remain authoritative.",
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
    pages: {
      home: ["China AI Cloud Foundation Vendors Analysis", "A dark-tech research site comparing AI platforms, cloud portfolios, business positioning and developer experience."],
      vendors: ["Vendor Positioning", "A shared map for understanding the different center of gravity of each vendor."],
      ai: ["AI Capability Comparison", "Model access, agent building, fine-tuning, multimodal services and enterprise AI engineering."],
      products: ["Product Portfolio", "AI cloud foundation is a stack of compute, data, models, platforms, security and industry solutions."],
      business: ["Business Analysis", "Positioning, ecosystem leverage, customer path, delivery capability and procurement risks."],
      technology: ["Technology Analysis", "API, agent, model, inference, data and infrastructure layers."],
      experience: ["Experience Comparison", "Entry clarity, model trial speed, API onboarding, console completeness, documentation and governance."],
      scenarios: ["Scenario Selection", "Recommendations for knowledge base, agents, training, content generation and private deployment."],
    },
    labels: {
      overview: "Overview",
      vendorMap: "Vendor map",
      radar: "AI capability radar",
      liveSignals: "Live capability scan",
      architecture: "AI foundation architecture",
      report: "Detailed analysis report",
      gallery: "Official visuals and diagrams",
      matrix: "Comparison matrix",
      productStack: "Product stack map",
      experienceScore: "Experience score",
      scenario: "Scenario guidance",
      source: "Sources",
      keyFinding: "Key finding",
      decision: "Decision note",
    },
  },
};

const sourceLinks = [
  { zh: "阿里云百炼产品页", en: "Alibaba Cloud Model Studio / Bailian", href: "https://www.aliyun.com/product/bailian" },
  { zh: "阿里云百炼官方文档", en: "Model Studio documentation", href: "https://www.alibabacloud.com/help/zh/model-studio/what-is-model-studio" },
  { zh: "阿里云人工智能平台PAI", en: "Alibaba Cloud PAI", href: "https://www.aliyun.com/product/pai" },
  { zh: "PAI产品架构文档", en: "PAI architecture documentation", href: "https://www.alibabacloud.com/help/zh/pai/product-overview/service-architecture" },
  { zh: "火山方舟产品页", en: "Volcano Engine Ark", href: "https://www.volcengine.com/product/ark" },
  { zh: "火山方舟官方文档", en: "Ark documentation", href: "https://www.volcengine.com/docs/82379" },
  { zh: "豆包大模型产品页", en: "Doubao models", href: "https://www.volcengine.com/product/doubao" },
  { zh: "火山方舟体验中心", en: "Ark experience center", href: "https://www.volcengine.com/experience/ark" },
  { zh: "腾讯云TokenHub", en: "Tencent Cloud TokenHub", href: "https://cloud.tencent.com/product/tokenhub" },
  { zh: "腾讯云TokenHub文档", en: "TokenHub documentation", href: "https://cloud.tencent.com/document/product/1823" },
  { zh: "腾讯云TI-ONE", en: "Tencent Cloud TI-ONE", href: "https://cloud.tencent.com/product/tione" },
  { zh: "腾讯云智能体开发平台ADP", en: "Agent Development Platform", href: "https://cloud.tencent.com/product/adp" },
];

const vendors = [
  {
    id: "aliyun",
    color: "#00d5ff",
    name: { zh: "阿里云", en: "Alibaba Cloud" },
    short: { zh: "企业级全栈AI云底座", en: "Enterprise full-stack AI cloud" },
    position: {
      zh: "以云基础设施、数据平台和企业级AI平台为主轴，百炼承担大模型应用构建入口，PAI承接训练、部署和工程化。",
      en: "Cloud infrastructure, data platforms and enterprise AI platforms form its backbone; Bailian handles LLM apps and PAI supports training and engineering.",
    },
    tags: {
      zh: ["百炼", "通义千问/Qwen", "PAI", "RAG", "智能体", "OpenAI兼容API", "企业治理"],
      en: ["Bailian", "Qwen", "PAI", "RAG", "Agents", "OpenAI-compatible API", "Governance"],
    },
    products: {
      zh: ["ECS/GPU计算", "ACK容器", "百炼", "PAI", "MaxCompute", "DataWorks", "PolarDB", "AnalyticDB", "云安全中心"],
      en: ["ECS/GPU", "ACK", "Bailian", "PAI", "MaxCompute", "DataWorks", "PolarDB", "AnalyticDB", "Security Center"],
    },
    scores: { model: 92, agent: 88, data: 94, infra: 95, governance: 93, experience: 86 },
    images: [
      {
        title: { zh: "百炼平台官方文档图", en: "Model Studio official documentation visual" },
        kind: { zh: "平台能力图", en: "Platform visual" },
        src: "https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6710872271/p824099.png",
        href: "https://www.alibabacloud.com/help/zh/model-studio/what-is-model-studio",
      },
      {
        title: { zh: "PAI产品架构官方图", en: "PAI official architecture visual" },
        kind: { zh: "架构实图", en: "Architecture" },
        src: "https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3413424071/p753240.png",
        href: "https://www.alibabacloud.com/help/zh/pai/product-overview/service-architecture",
      },
      {
        title: { zh: "PAI产品页功能图", en: "PAI product page visual" },
        kind: { zh: "产品功能", en: "Product feature" },
        src: "https://img.alicdn.com/imgextra/i1/O1CN01RPB3OY1dOYq8iDJZ9_!!6000000003726-2-tps-1792-936.png",
        href: "https://www.aliyun.com/product/pai",
      },
    ],
  },
  {
    id: "volc",
    color: "#7c5cff",
    name: { zh: "火山引擎", en: "Volcano Engine" },
    short: { zh: "体验驱动的大模型应用底座", en: "Experience-led LLM application foundation" },
    position: {
      zh: "以火山方舟、豆包大模型和字节系业务实践为核心，突出模型体验、推理、评测、精调和快速应用验证。",
      en: "Ark, Doubao models and ByteDance-style practice drive model trial, inference, evaluation, fine-tuning and fast validation.",
    },
    tags: {
      zh: ["火山方舟", "豆包大模型", "模型体验中心", "评测", "精调", "推理服务", "应用制作坊"],
      en: ["Ark", "Doubao", "Experience center", "Evaluation", "Fine-tuning", "Inference", "App workshop"],
    },
    products: {
      zh: ["云服务器", "GPU计算", "对象存储", "火山方舟", "veMLP", "数据库", "大数据", "内容与视频技术"],
      en: ["Cloud server", "GPU", "Object storage", "Ark", "veMLP", "Database", "Big data", "Content and video tech"],
    },
    scores: { model: 91, agent: 86, data: 83, infra: 84, governance: 80, experience: 94 },
    images: [
      {
        title: { zh: "火山方舟产品页官方资源图", en: "Ark official product resource visual" },
        kind: { zh: "产品资源", en: "Product asset" },
        src: "https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_2781e7adcbfb6de5c4b8888357699d4a.jpeg",
        href: "https://www.volcengine.com/product/ark",
      },
      {
        title: { zh: "火山引擎产品页视觉图", en: "Volcano Engine official visual" },
        kind: { zh: "官方实图", en: "Official visual" },
        src: "https://lf3-starry.byteimg.com/obj/starry/image/4d3spn43xev_e5dba60a-2dbc-423c-9822-242e0eb936b2.jpeg",
        href: "https://www.volcengine.com/product/ark",
      },
      {
        title: { zh: "火山方舟功能展示图", en: "Ark feature visual" },
        kind: { zh: "功能图", en: "Feature visual" },
        src: "https://lf3-starry.byteimg.com/obj/starry/image/soyzoq5o3jh_c846d21a-0360-4894-b302-3d0141f92ea3.webp",
        href: "https://www.volcengine.com/experience/ark",
      },
    ],
  },
  {
    id: "tencent",
    color: "#25f0a5",
    name: { zh: "腾讯云", en: "Tencent Cloud" },
    short: { zh: "模型服务与产业应用连接底座", en: "Model service and industry app foundation" },
    position: {
      zh: "以TokenHub统一模型入口、TI-ONE训推平台和智能体开发平台ADP为核心，强调混元、第三方模型、RAG、多智能体和插件生态。",
      en: "TokenHub, TI-ONE and ADP connect Hunyuan, third-party models, RAG, multi-agent workflows and plugin ecosystems.",
    },
    tags: {
      zh: ["TokenHub", "腾讯混元", "TI-ONE", "ADP", "RAG", "多智能体", "插件/MCP"],
      en: ["TokenHub", "Hunyuan", "TI-ONE", "ADP", "RAG", "Multi-agent", "Plugin/MCP"],
    },
    products: {
      zh: ["CVM/GPU", "TKE容器", "TokenHub", "TI-ONE", "ADP", "TDSQL", "COS", "音视频与安全"],
      en: ["CVM/GPU", "TKE", "TokenHub", "TI-ONE", "ADP", "TDSQL", "COS", "Media and security"],
    },
    scores: { model: 89, agent: 92, data: 86, infra: 88, governance: 87, experience: 88 },
    images: [
      {
        title: { zh: "TokenHub文档官方图", en: "TokenHub official documentation visual" },
        kind: { zh: "模型服务图", en: "Model service" },
        src: "https://qcloudimg.tencent-cloud.cn/image/document/f208cecc46391afc50f91ebe38b9b13a.png",
        href: "https://cloud.tencent.com/document/product/1823",
      },
      {
        title: { zh: "TokenHub功能流程图", en: "TokenHub function workflow visual" },
        kind: { zh: "功能流程", en: "Workflow" },
        src: "https://qcloudimg.tencent-cloud.cn/image/document/2c239da1efdad1de781f6b36dc95f6a8.png",
        href: "https://cloud.tencent.com/document/product/1823",
      },
      {
        title: { zh: "腾讯云TokenHub产品页图", en: "Tencent Cloud TokenHub product visual" },
        kind: { zh: "产品实图", en: "Product visual" },
        src: "https://qcloudimg.tencent-cloud.cn/raw/66bbf0ce0482201db48d0f004de3caa6.png",
        href: "https://cloud.tencent.com/product/tokenhub",
      },
    ],
  },
];

const capabilityRows = [
  {
    zh: ["统一模型入口", "百炼模型广场接入通义千问及第三方模型，适合企业统一管理模型调用。", "火山方舟模型仓库与豆包模型体系更突出试用和推理服务。", "TokenHub聚合混元与第三方模型，强调统一API入口和多类型模型。"],
    en: ["Unified model access", "Bailian model marketplace with Qwen and third-party models.", "Ark model hub and Doubao model family emphasize trial and inference.", "TokenHub aggregates Hunyuan and third-party models through unified access."],
  },
  {
    zh: ["智能体与应用构建", "百炼覆盖智能体、RAG、应用编排和工作流，适合企业知识库与业务应用。", "火山方舟突出应用制作、模型体验、推理、评测与精调闭环。", "ADP支持RAG、多智能体、流程编排、插件和MCP生态。"],
    en: ["Agent and app building", "Bailian covers agents, RAG, app orchestration and workflows.", "Ark emphasizes app workshop, model trial, inference, evaluation and fine-tuning.", "ADP supports RAG, multi-agent orchestration, plugins and MCP."],
  },
  {
    zh: ["训练、精调与评测", "PAI支撑训练、部署、推理和AI工程化，百炼补齐模型应用层精调。", "方舟将评测、精调、推理和体验放在同一产品路径中。", "TI-ONE覆盖数据接入、训练、模型管理与模型服务。"],
    en: ["Training and evaluation", "PAI supports training, deployment, inference and AI engineering.", "Ark connects evaluation, fine-tuning, inference and experience.", "TI-ONE covers data access, training, model management and service deployment."],
  },
  {
    zh: ["多模态能力", "通义体系覆盖文本、视觉、语音和多模态应用能力。", "豆包体系覆盖文本、视觉、语音、图像等多模态入口。", "TokenHub覆盖文本、图像、视频、3D、代码生成与视觉理解等类别。"],
    en: ["Multimodal capability", "Qwen ecosystem covers text, vision, voice and multimodal apps.", "Doubao covers text, vision, voice and image generation scenarios.", "TokenHub covers text, image, video, 3D, code generation and visual understanding."],
  },
  {
    zh: ["企业工程化", "阿里云在账号、资源、网络、安全、数据治理和云产品联动上更完整。", "火山引擎的优势在于从体验到验证路径短，适合快速PoC。", "腾讯云适合连接智能体、模型服务和微信/音视频/行业应用生态。"],
    en: ["Enterprise engineering", "Alibaba Cloud has strong resource, network, security and data governance integration.", "Volcano Engine shines in fast trial-to-PoC loops.", "Tencent Cloud connects agent, model and WeChat/media/industry ecosystems."],
  },
];

const productRows = [
  ["云基础设施", "ECS、GPU实例、ACK容器、专有网络", "云服务器、GPU资源、容器、对象存储", "CVM、GPU实例、TKE容器、VPC"],
  ["AI平台", "百炼、PAI、模型服务、AI应用构建", "火山方舟、veMLP、模型体验中心、推理服务", "TokenHub、TI-ONE、智能体开发平台ADP"],
  ["模型体系", "通义千问/Qwen，兼容多模型接入", "豆包大模型，强调体验、推理和多模态", "腾讯混元，TokenHub聚合多模型"],
  ["数据与大数据", "MaxCompute、DataWorks、AnalyticDB、湖仓与治理", "实时数仓、湖仓、数据开发、内容数据能力", "EMR、数据湖、TBDS、数据开发和分析"],
  ["数据库与向量能力", "PolarDB、RDS、Lindorm、向量检索能力", "RDS、veDB、缓存、搜索与向量相关能力", "TDSQL、CDB、Redis、向量数据库与搜索能力"],
  ["安全与合规", "云安全中心、RAM、日志审计、合规与专有云能力", "安全、风控、内容安全、账号与资源管理", "安全中心、零信任、访问管理、合规治理"],
  ["行业方案", "金融、制造、政企、零售、互联网", "内容、消费、汽车、互联网、营销增长", "金融、政企、游戏、媒体、微信生态"],
];

const reports = {
  home: [
    ["结论一：三家厂商的AI云底座不是同质化竞争", "阿里云更像企业IT和云基础设施上的AI操作系统，火山引擎更像从模型体验和业务创新切入的AI加速器，腾讯云则更强调模型服务与产业应用生态连接。"],
    ["结论二：AI能力不能只看模型名称", "企业真正落地时，还要同时看模型API、智能体、RAG、数据治理、向量检索、训练精调、弹性推理、成本监控、安全审计和交付团队。"],
    ["结论三：体验入口会影响PoC速度", "火山方舟在体验中心和模型试用路径上更直接；阿里云的优势在企业治理和云产品联动；腾讯云在TokenHub、ADP与产业应用连接上更适合应用团队。"],
  ],
  vendors: [
    ["阿里云：适合已有云资源和数据资产的企业", "如果企业已经在阿里云上沉淀数据、数据库、网络和安全体系，百炼与PAI能更自然地进入现有IT治理框架。"],
    ["火山引擎：适合快速验证模型效果和内容创新", "火山方舟与豆包大模型更适合以体验为起点，快速完成模型效果验证、应用原型和内容/消费场景探索。"],
    ["腾讯云：适合产业应用、智能体和生态连接", "TokenHub、TI-ONE和ADP组合适合应用开发团队，尤其是需要连接腾讯生态、音视频、IM或行业场景时。"],
  ],
  ai: [
    ["模型层：统一入口比单个模型更重要", "企业会同时使用自研模型、第三方模型、专属模型和多模态模型，因此统一模型入口、鉴权、限流、计费和监控能力会直接影响工程复杂度。"],
    ["应用层：Agent、RAG、Workflow正在成为标配", "三家厂商都在从模型服务走向应用构建平台，差异主要体现在编排能力、插件生态、知识库治理和开发者体验上。"],
    ["工程层：评测、精调、部署和成本控制决定长期价值", "大模型PoC成功不等于生产落地成功，评测体系、灰度发布、可观测、专属部署和成本治理才是企业级AI项目的关键。"],
  ],
  products: [
    ["产品序列决定AI项目上限", "模型平台只是入口，真正的AI云底座需要计算、对象存储、数据库、大数据、容器、安全、监控和行业组件共同支撑。"],
    ["阿里云产品矩阵更完整", "阿里云的优势在云基础设施、大数据、数据库和企业治理产品的整体协同，适合复杂IT环境。"],
    ["火山与腾讯更适合应用牵引", "火山引擎更适合内容、消费和模型体验驱动的业务，腾讯云更适合和微信、音视频、游戏、政企产业应用结合。"],
  ],
  business: [
    ["采购不应只比token价格", "企业需要综合比较模型质量、上下文长度、并发、延迟、私有化、数据合规、SLA、支持服务和迁移成本。"],
    ["生态能力影响交付速度", "阿里云生态更偏企业IT与云市场，火山引擎更偏内容增长和模型体验，腾讯云更偏产业互联网与社交/音视频生态。"],
    ["商业风险集中在锁定效应和成本治理", "使用厂商高级编排能力能提升效率，但也可能增加迁移成本；应尽量在API、数据格式、评测集和Prompt资产上保留可迁移性。"],
  ],
  technology: [
    ["技术底座要看六层结构", "接入层、应用层、模型层、训练推理层、数据层和基础设施层缺一不可，任一层短板都会影响生产稳定性。"],
    ["数据和知识库是企业AI的分水岭", "企业AI不是只调用模型，而是把权限、数据质量、知识更新、向量检索和审计串起来。"],
    ["可观测和安全会成为大模型平台的核心能力", "当模型进入业务流程后，调用链、成本、质量、越权访问、敏感信息和审计都需要平台化治理。"],
  ],
  experience: [
    ["体验入口决定第一轮试用效率", "官网入口、体验中心、示例代码和控制台路径越短，业务团队越容易完成第一次PoC。"],
    ["文档和控制台决定第二轮工程效率", "当项目进入API接入、鉴权、部署和监控阶段，文档结构、错误提示和控制台一致性会影响开发速度。"],
    ["企业治理决定第三轮生产效率", "生产落地后，账号体系、权限、成本、日志、审计和资源管理会成为持续运维的核心。"],
  ],
  scenarios: [
    ["知识库/RAG优先看数据治理", "如果企业文档多、权限复杂、知识更新频繁，应优先验证数据接入、知识库权限、向量检索和审计能力。"],
    ["内容生成优先看模型体验和多模态", "如果目标是营销、短视频、图像、文案、客服或内容生产，模型效果、体验中心和多模态API更关键。"],
    ["行业私有化优先看合规和交付", "金融、政企、制造等场景要重点验证专有网络、私有化、专属资源、SLA和本地交付团队能力。"],
  ],
};

const scenarioCards = [
  ["企业知识库/RAG", "优先：阿里云、腾讯云", "验证点：数据治理、知识库权限、向量检索、审计、私有网络。"],
  ["快速模型试用", "优先：火山引擎", "验证点：体验中心、模型效果、API样例、推理延迟、试用额度。"],
  ["智能体平台", "优先：腾讯云、阿里云", "验证点：多智能体、插件/MCP、流程编排、企业知识库。"],
  ["模型训练与精调", "优先：阿里云PAI、腾讯TI-ONE、火山方舟", "验证点：数据格式、训练成本、评测闭环、模型部署。"],
  ["内容与营销生成", "优先：火山引擎、腾讯云", "验证点：多模态、内容安全、音视频能力、素材工作流。"],
  ["金融/政企/制造", "优先：阿里云、腾讯云", "验证点：合规、专属部署、账号治理、日志审计、交付能力。"],
];

function lang() {
  const rootLang = document.querySelector("#pageRoot")?.dataset.lang;
  if (rootLang === "en") return "en";
  return localStorage.getItem("ai-cloud-lang") === "en" ? "en" : "zh";
}

function text(value, current = lang()) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") return value[current] || value.zh || value.en || "";
  return value || "";
}

function setLang(next) {
  localStorage.setItem("ai-cloud-lang", next);
  render();
}

function pageId() {
  return document.querySelector("#pageRoot")?.dataset.page || "home";
}

function section(title, label, body, intro = "") {
  return `
    <section class="section reveal">
      <div class="section-heading centered-heading">
        <p class="eyebrow">${label}</p>
        <h2>${title}</h2>
        ${intro ? `<p>${intro}</p>` : ""}
      </div>
      ${body}
    </section>
  `;
}

function header(current, l) {
  const copy = i18n[l];
  document.querySelector("#siteHeader").innerHTML = `
    <header class="site-header">
      <a class="brand" href="./index.html">
        <span class="brand-mark">AI</span>
        <span>
          <strong>${copy.siteTitle}</strong>
          <small>${copy.updated}</small>
        </span>
      </a>
      <nav class="site-nav" aria-label="${l === "zh" ? "主导航" : "Primary navigation"}">
        ${copy.nav
          .map(([id, label, href]) => `<a class="nav-link ${id === current ? "active" : ""}" href="./${href}">${label}</a>`)
          .join("")}
      </nav>
      <div class="header-actions">
        <button class="lang-toggle" type="button" id="langToggle">${copy.switchLang}</button>
        <a class="old-link" href="./old/">${copy.oldPage}</a>
      </div>
    </header>
  `;
  document.querySelector("#langToggle").addEventListener("click", () => setLang(l === "zh" ? "en" : "zh"));
}

function footer(l) {
  const copy = i18n[l];
  document.querySelector("#siteFooter").innerHTML = `
    <footer class="site-footer">
      <div>
        <strong>${copy.siteTitle}</strong>
        <p>${copy.sourceNote}</p>
      </div>
      <div class="footer-links">
        ${sourceLinks.slice(0, 8).map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${text(item, l)}</a>`).join("")}
      </div>
    </footer>
  `;
}

function pageHero(page, l) {
  const copy = i18n[l];
  const [title, desc] = copy.pages[page];
  return `
    <section class="page-hero">
      <div class="page-hero-glow"></div>
      <p class="eyebrow">${copy.updated}</p>
      <h1>${title}</h1>
      <p>${desc}</p>
    </section>
  `;
}

function homeHero(l) {
  const copy = i18n[l];
  return `
    <section class="hero">
      <div class="hero-media"><img src="${ASSETS.hero}" alt="${copy.siteTitle}" /></div>
      <div class="hero-content">
        <p class="eyebrow">${copy.updated}</p>
        <h1>${copy.siteTitle}</h1>
        <p class="hero-lede">${copy.tagline}</p>
        <p class="hero-subcopy">${copy.pages.home[1]}</p>
        <div class="hero-actions">
          <a class="primary-button" href="./ai-capabilities.html">${copy.primaryCta}</a>
          <a class="secondary-button" href="./experience.html">${copy.secondaryCta}</a>
        </div>
      </div>
      <div class="hero-orbit" aria-hidden="true">
        <span></span><span></span><span></span><i></i>
      </div>
      <div class="signal-panel">
        <span>${l === "zh" ? "AI云底座实时扫描" : "AI foundation live scan"}</span>
        <strong>3 × 6 × 7</strong>
        <small>${l === "zh" ? "厂商 × 技术层 × 分析页面" : "vendors × tech layers × analysis pages"}</small>
      </div>
    </section>
  `;
}

function dynamicConsole(l) {
  const lines =
    l === "zh"
      ? ["模型服务入口同步中", "智能体编排能力扫描", "RAG与知识库链路分析", "训练/精调/评测能力对齐", "体验入口与API路径检测", "商业与技术风险加权"]
      : ["Syncing model service entries", "Scanning agent orchestration", "Analyzing RAG and knowledge flows", "Aligning training and evaluation", "Testing API onboarding paths", "Weighting business and tech risk"];
  return `
    <div class="tech-console">
      <div class="console-head"><span></span><span></span><span></span><b>${l === "zh" ? "能力扫描控制台" : "Capability scan console"}</b></div>
      <div class="console-lines">
        ${lines.map((line, index) => `<p style="--delay:${index * 120}ms"><span>0${index + 1}</span>${line}<i></i></p>`).join("")}
      </div>
    </div>
  `;
}

function metrics(l) {
  const rows =
    l === "zh"
      ? [
          ["3", "核心厂商", "阿里云、火山引擎、腾讯云"],
          ["6", "技术层级", "接入、应用、模型、训推、数据、基础设施"],
          ["7", "主题页面", "总览、AI、产品、商业、技术、体验、选型"],
          ["12+", "官方来源", "产品页、文档、体验中心与产品图"],
        ]
      : [
          ["3", "Vendors", "Alibaba Cloud, Volcano Engine, Tencent Cloud"],
          ["6", "Tech layers", "Access, app, model, training, data, infrastructure"],
          ["7", "Pages", "Overview, AI, products, business, technology, experience, scenarios"],
          ["12+", "Sources", "Product pages, docs, portals and official visuals"],
        ];
  return `<section class="metric-grid">${rows.map(([n, title, desc]) => `<article class="metric-card"><strong>${n}</strong><span>${title}</span><p>${desc}</p></article>`).join("")}</section>`;
}

function vendorCards(l, compact = false) {
  return `
    <div class="vendor-grid ${compact ? "compact" : ""}">
      ${vendors
        .map(
          (v) => `
            <article class="vendor-card" style="--accent:${v.color}">
              <div class="vendor-topline"><span class="vendor-dot"></span><span>${text(v.short, l)}</span></div>
              <h3>${text(v.name, l)}</h3>
              <p>${text(v.position, l)}</p>
              <img class="vendor-image" src="${v.images[0].src}" alt="${text(v.images[0].title, l)}" loading="lazy" />
              <div class="tag-cloud">${text(v.tags, l).map((tag) => `<span>${tag}</span>`).join("")}</div>
              <div class="vendor-links">
                ${v.images.slice(0, 2).map((img) => `<a href="${img.href}" target="_blank" rel="noreferrer">${text(img.kind, l)}</a>`).join("")}
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function radar(l) {
  const labels =
    l === "zh"
      ? { model: "模型", agent: "智能体", data: "数据", infra: "算力", governance: "治理", experience: "体验" }
      : { model: "Model", agent: "Agent", data: "Data", infra: "Infra", governance: "Governance", experience: "Experience" };
  return `
    <div class="radar-grid">
      ${vendors
        .map(
          (v) => `
            <article class="radar-card" style="--accent:${v.color}">
              <h3>${text(v.name, l)}</h3>
              ${Object.entries(v.scores)
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

function report(page, l) {
  const rows = reports[page] || reports.home;
  const copy = i18n[l];
  return `
    <div class="report-grid">
      ${rows
        .map(
          ([title, body], index) => `
            <article class="report-card">
              <span>${copy.labels.keyFinding} 0${index + 1}</span>
              <h3>${l === "zh" ? title : translateReportTitle(title)}</h3>
              <p>${l === "zh" ? body : translateReportBody(page, index)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function translateReportTitle(title) {
  const map = {
    "结论一：三家厂商的AI云底座不是同质化竞争": "Finding 1: The vendors are not homogeneous",
    "结论二：AI能力不能只看模型名称": "Finding 2: AI capability is more than model names",
    "结论三：体验入口会影响PoC速度": "Finding 3: Experience portals affect PoC speed",
  };
  return map[title] || "Analysis point";
}

function translateReportBody(page, index) {
  const fallback = [
    "The comparison should cover model API, agents, RAG, data governance, inference, monitoring, cost and delivery capability.",
    "Enterprise AI projects require platform engineering, governance and operational controls in addition to model quality.",
    "Use the report as a PoC hypothesis and validate against official pricing, SLA, latency and governance requirements.",
  ];
  return fallback[index] || fallback[0];
}

function gallery(l, filter = "all") {
  const all = vendors.flatMap((v) =>
    v.images.map((img) => ({
      ...img,
      vendor: text(v.name, l),
      color: v.color,
    }))
  );
  const selected =
    filter === "vendors" ? all.slice(0, 6) : filter === "experience" ? all.filter((item) => text(item.kind, l).includes(l === "zh" ? "产品" : "Product") || text(item.kind, l).includes(l === "zh" ? "功能" : "Feature")).slice(0, 6) : all;
  return `
    <div class="visual-grid">
      ${selected
        .map(
          (img) => `
            <a class="visual-card" href="${img.href}" target="_blank" rel="noreferrer" style="--accent:${img.color}">
              <img src="${img.src}" alt="${text(img.title, l)}" loading="lazy" />
              <div>
                <span>${img.vendor} · ${text(img.kind, l)}</span>
                <strong>${text(img.title, l)}</strong>
              </div>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function capabilityTable(l) {
  return `
    <div class="matrix-wrap">
      <table class="matrix-table">
        <thead>
          <tr>
            <th>${l === "zh" ? "能力维度" : "Capability"}</th>
            <th>${l === "zh" ? "阿里云" : "Alibaba Cloud"}</th>
            <th>${l === "zh" ? "火山引擎" : "Volcano Engine"}</th>
            <th>${l === "zh" ? "腾讯云" : "Tencent Cloud"}</th>
          </tr>
        </thead>
        <tbody>
          ${capabilityRows
            .map((row) => {
              const cells = row[l];
              return `<tr>${cells.map((cell, index) => `<td>${index === 0 ? `<strong>${cell}</strong>` : cell}</td>`).join("")}</tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function productTable(l) {
  return `
    <div class="matrix-wrap">
      <table class="matrix-table">
        <thead>
          <tr>
            <th>${l === "zh" ? "产品层" : "Product layer"}</th>
            <th>${l === "zh" ? "阿里云" : "Alibaba Cloud"}</th>
            <th>${l === "zh" ? "火山引擎" : "Volcano Engine"}</th>
            <th>${l === "zh" ? "腾讯云" : "Tencent Cloud"}</th>
          </tr>
        </thead>
        <tbody>
          ${productRows.map((row) => `<tr>${row.map((cell, i) => `<td>${i === 0 ? `<strong>${cell}</strong>` : cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function productStack(l) {
  return `
    <div class="stack-map">
      ${vendors
        .map(
          (v) => `
            <article class="stack-card" style="--accent:${v.color}">
              <h3>${text(v.name, l)}</h3>
              <div>${text(v.products, l).map((item) => `<span>${item}</span>`).join("")}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function architecture(l) {
  const layers =
    l === "zh"
      ? [
          ["接入层", "API网关、SDK、OpenAI兼容接口、控制台、体验中心"],
          ["应用层", "Agent、RAG、Workflow、插件/MCP、多智能体、企业知识库"],
          ["模型层", "通义千问、豆包、混元及第三方模型；文本、图像、语音、视频、代码"],
          ["训练推理层", "模型精调、评测、压测、弹性推理、灰度发布、模型服务"],
          ["数据层", "对象存储、湖仓、向量检索、数据库、大数据开发、数据治理"],
          ["基础设施层", "GPU/CPU计算、容器、网络、安全、可观测、成本管理"],
        ]
      : [
          ["Access", "API gateway, SDK, OpenAI-compatible APIs, console and experience center"],
          ["Application", "Agent, RAG, workflow, plugins/MCP, multi-agent and enterprise knowledge base"],
          ["Model", "Qwen, Doubao, Hunyuan and third-party models across modalities"],
          ["Training & inference", "Fine-tuning, evaluation, benchmark, elastic inference and model service"],
          ["Data", "Object storage, lakehouse, vector search, databases and governance"],
          ["Infrastructure", "GPU/CPU compute, container, network, security, observability and cost"],
        ];
  return `
    <div class="architecture">
      ${layers
        .map(
          ([title, desc], index) => `
            <article class="layer-card" style="--delay:${index * 80}ms">
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

function experienceMatrix(l) {
  const rows = [
    ["官网入口清晰度", 86, 92, 88],
    ["模型体验速度", 84, 95, 87],
    ["API上手难度", 86, 90, 88],
    ["控制台完整度", 91, 84, 87],
    ["文档可检索性", 90, 82, 88],
    ["企业治理链路", 93, 80, 86],
  ];
  const names = l === "zh" ? ["阿里云", "火山引擎", "腾讯云"] : ["Alibaba", "Volcano", "Tencent"];
  return `
    <div class="experience-list">
      ${rows
        .map(
          ([name, ali, volc, tencent]) => `
            <article class="experience-row">
              <h3>${l === "zh" ? name : experienceNameEn(name)}</h3>
              ${[
                [names[0], ali, vendors[0].color],
                [names[1], volc, vendors[1].color],
                [names[2], tencent, vendors[2].color],
              ]
                .map(
                  ([vendor, value, color]) => `
                    <div class="experience-meter" style="--accent:${color}">
                      <span>${vendor}</span><div><i style="width:${value}%"></i></div><b>${value}</b>
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

function experienceNameEn(name) {
  return {
    官网入口清晰度: "Entry clarity",
    模型体验速度: "Model trial speed",
    API上手难度: "API onboarding",
    控制台完整度: "Console completeness",
    文档可检索性: "Documentation searchability",
    企业治理链路: "Enterprise governance path",
  }[name];
}

function scenarioGrid(l) {
  return `
    <div class="scenario-grid">
      ${scenarioCards
        .map(
          ([title, pick, reason]) => `
            <article class="scenario-card">
              <span>${l === "zh" ? pick : "Recommended path"}</span>
              <h3>${l === "zh" ? title : scenarioTitleEn(title)}</h3>
              <p>${l === "zh" ? reason : scenarioReasonEn(title)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function scenarioTitleEn(title) {
  return {
    "企业知识库/RAG": "Enterprise knowledge base / RAG",
    快速模型试用: "Fast model trial",
    智能体平台: "Agent platform",
    模型训练与精调: "Training and fine-tuning",
    内容与营销生成: "Content and marketing generation",
    "金融/政企/制造": "Finance, public sector and manufacturing",
  }[title];
}

function scenarioReasonEn(title) {
  return {
    "企业知识库/RAG": "Validate data governance, permissions, vector search, auditing and private networking.",
    快速模型试用: "Validate trial center, model quality, API samples, inference latency and trial quota.",
    智能体平台: "Validate multi-agent flows, plugins, MCP, workflow orchestration and knowledge base integration.",
    模型训练与精调: "Validate data format, training cost, evaluation loop and deployment workflow.",
    内容与营销生成: "Validate multimodal capability, content safety, media tools and asset workflow.",
    "金融/政企/制造": "Validate compliance, dedicated deployment, account governance, audit logs and delivery capability.",
  }[title];
}

function sources(l) {
  const copy = i18n[l];
  return section(
    copy.officialSource,
    copy.labels.source,
    `<div class="source-grid">${sourceLinks
      .map((item) => `<a class="source-card" href="${item.href}" target="_blank" rel="noreferrer">${text(item, l)}<span>↗</span></a>`)
      .join("")}</div>`,
    copy.sourceNote
  );
}

function pageHome(l) {
  const copy = i18n[l];
  return `
    ${homeHero(l)}
    ${metrics(l)}
    ${section(copy.labels.liveSignals, copy.labels.overview, dynamicConsole(l), l === "zh" ? "把厂商、产品、能力、体验和选型风险做成一张动态扫描图。" : "A live-style console for vendors, products, capabilities, experience and risk signals.")}
    ${section(copy.labels.vendorMap, copy.labels.overview, vendorCards(l, true), l === "zh" ? "首页先给出三家厂商的定位差异，避免只看模型名称。" : "The homepage starts from positioning instead of model names.")}
    ${section(copy.labels.radar, copy.labels.matrix, radar(l), l === "zh" ? "评分为分析性估计，用于表达相对强弱，不代表官方排名。" : "Scores are analytical estimates for relative comparison, not official rankings.")}
    ${section(copy.labels.report, copy.labels.keyFinding, report("home", l), l === "zh" ? "以下报告内容会贯穿各分页面，用于补足商业、技术、产品和体验解读。" : "The following report blocks expand the business, technical, product and experience reading.")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l, "vendors"), l === "zh" ? "采用厂商官方产品页、文档页和动态资源中的实图；架构图为站点自制图例。" : "Official visuals are sourced from product pages, docs and official assets; architecture diagrams are site-made.")}
    ${section(copy.labels.architecture, copy.labels.matrix, architecture(l), l === "zh" ? "AI云底座的关键不是单点模型，而是六层能力联动。" : "The foundation is a six-layer operating system, not a single model API.")}
    ${sources(l)}
  `;
}

function pageVendors(l) {
  const copy = i18n[l];
  return `
    ${pageHero("vendors", l)}
    ${section(copy.labels.vendorMap, copy.labels.overview, vendorCards(l), l === "zh" ? "三家厂商的定位各有重心：阿里云重全栈，火山重体验，腾讯重生态连接。" : "Alibaba is full-stack, Volcano is experience-led and Tencent is ecosystem-connected.")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l, "vendors"), l === "zh" ? "每张图均链接回厂商官方页面或文档。" : "Each visual links back to the official page or documentation.")}
    ${section(copy.labels.report, copy.labels.keyFinding, report("vendors", l), "")}
    ${section(copy.labels.radar, copy.labels.matrix, radar(l), "")}
    ${sources(l)}
  `;
}

function pageAI(l) {
  const copy = i18n[l];
  return `
    ${pageHero("ai", l)}
    ${section(copy.labels.matrix, copy.labels.radar, capabilityTable(l), l === "zh" ? "把模型入口、智能体、训推、多模态、工程化放在同一张表里比较。" : "A single matrix across model access, agents, training, multimodal and engineering.")}
    ${section(copy.labels.radar, copy.labels.matrix, radar(l), "")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l), l === "zh" ? "补充三家厂商AI平台、文档和产品功能图。" : "Visual references for AI platforms, docs and product features.")}
    ${section(copy.labels.report, copy.labels.keyFinding, report("ai", l), "")}
    ${sources(l)}
  `;
}

function pageProducts(l) {
  const copy = i18n[l];
  return `
    ${pageHero("products", l)}
    ${section(copy.labels.productStack, copy.labels.matrix, productStack(l), l === "zh" ? "按厂商展开AI云底座相关产品序列。" : "Vendor-by-vendor product stack map.")}
    ${section(copy.labels.matrix, copy.labels.productStack, productTable(l), "")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l, "vendors"), l === "zh" ? "产品页面和文档图帮助用户理解平台边界。" : "Official product and documentation visuals clarify platform boundaries.")}
    ${section(copy.labels.report, copy.labels.keyFinding, report("products", l), "")}
    ${sources(l)}
  `;
}

function pageBusiness(l) {
  const copy = i18n[l];
  return `
    ${pageHero("business", l)}
    ${section(copy.labels.report, copy.labels.keyFinding, report("business", l), l === "zh" ? "商业分析重点不是谁模型最多，而是谁能更快、更稳、更可控地进入企业采购链路。" : "Business analysis focuses on procurement readiness, not only model count.")}
    ${section(copy.labels.vendorMap, copy.labels.decision, vendorCards(l, true), "")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l, "vendors"), "")}
    ${sources(l)}
  `;
}

function pageTechnology(l) {
  const copy = i18n[l];
  return `
    ${pageHero("technology", l)}
    ${section(copy.labels.architecture, copy.labels.matrix, architecture(l), l === "zh" ? "从六层技术架构看三家厂商AI底座是否能支撑生产级应用。" : "A six-layer lens for production-grade AI foundation.")}
    ${section(copy.labels.radar, copy.labels.matrix, radar(l), "")}
    ${section(copy.labels.report, copy.labels.keyFinding, report("technology", l), "")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l), "")}
    ${sources(l)}
  `;
}

function pageExperience(l) {
  const copy = i18n[l];
  return `
    ${pageHero("experience", l)}
    ${section(copy.labels.experienceScore, copy.labels.matrix, experienceMatrix(l), l === "zh" ? "体验评分用于表达试用、接入、文档和治理路径的相对感受。" : "Experience scores reflect relative trial, onboarding, documentation and governance paths.")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l, "experience"), l === "zh" ? "体验页面重点展示官方平台入口和产品功能图。" : "Experience page highlights official platform entries and product visuals.")}
    ${section(copy.labels.report, copy.labels.keyFinding, report("experience", l), "")}
    ${sources(l)}
  `;
}

function pageScenarios(l) {
  const copy = i18n[l];
  return `
    ${pageHero("scenarios", l)}
    ${section(copy.labels.scenario, copy.labels.decision, scenarioGrid(l), l === "zh" ? "以下建议适合作为PoC假设，最终仍需用真实业务数据验证。" : "Use these as PoC hypotheses and validate with real business data.")}
    ${section(copy.labels.matrix, copy.labels.radar, capabilityTable(l), "")}
    ${section(copy.labels.report, copy.labels.keyFinding, report("scenarios", l), "")}
    ${section(copy.labels.gallery, copy.labels.source, gallery(l, "vendors"), "")}
    ${sources(l)}
  `;
}

const renderers = {
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
  const l = lang();
  const p = pageId();
  document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  header(p, l);
  document.querySelector("#pageRoot").innerHTML = renderers[p](l);
  footer(l);
  revealOnScroll();
  animateNumbers();
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal, .metric-card, .vendor-card, .visual-card, .report-card").forEach((node) => observer.observe(node));
}

function animateNumbers() {
  document.querySelectorAll(".metric-card strong").forEach((node) => {
    node.animate([{ transform: "translateY(10px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }], {
      duration: 600,
      easing: "ease-out",
    });
  });
}

function startParticles() {
  const canvas = document.querySelector("#particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 96 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00075,
    vy: (Math.random() - 0.5) * 0.00075,
    r: Math.random() * 1.8 + 0.45,
  }));

  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  }

  function draw() {
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;
      const x = p.x * width;
      const y = p.y * height;
      ctx.beginPath();
      ctx.arc(x, y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = index % 3 === 0 ? "rgba(37,240,165,.7)" : index % 3 === 1 ? "rgba(0,213,255,.58)" : "rgba(124,92,255,.52)";
      ctx.fill();
      for (let j = index + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = (q.x - p.x) * width;
        const dy = (q.y - p.y) * height;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 145 * devicePixelRatio) {
          ctx.strokeStyle = `rgba(0,213,255,${0.16 - (dist / (145 * devicePixelRatio)) * 0.13})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(q.x * width, q.y * height);
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
