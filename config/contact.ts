/**
 * ============================================================
 * 【这是什么数据】门店信息 + 「联系我们」区块文案 + 预约表单文案。
 *   - store：门店地址、电话、营业时间（页面展示 + JSON-LD 结构化数据用）
 *   - contactSection：Contact 区块的眉题 / 标题 / 引导文案
 *   - form：预约表单的选项、字段标签、占位符、校验错误文案、
 *     提交按钮、隐私说明、提交成功页文案
 * 【在哪里被使用】
 *   - components/Contact.tsx（store + contactSection + form）
 *   - components/Footer.tsx（store 的地址 / 电话 / 营业时间）
 *   - app/page.tsx 首页 JSON-LD（store 的电话 / 地址 / 营业时间）
 *   - app/blog/[slug]/page.tsx 文章页 CTA 区的电话链接
 * 【修改时注意什么】
 *   - 门店信息在 4 个地方使用，改一处全站生效 —— 这是特性不是 bug
 *   - 电话有三个字段（phoneDisplay 页面显示 / phoneHref 链接跳转 /
 *     phoneIntl JSON-LD 国际格式），改号码时三个都要同步
 *   - 营业时间有三个字段（hoursLine 完整展示 / hoursShort 页脚简版 /
 *     hoursOpen+hoursClose JSON-LD 的 24 小时制），改营业时间时同步
 *   - 地址导航：改 mapKeyword 可调搜索词；拿到经纬度后填入 store.geo，
 *     storeMapUrl 会自动从「关键词搜索」切换为「精确定位」
 *   - 表单校验规则（正则）在 Contact.tsx 的 validate() 里，属代码逻辑；
 *     这里只放校验失败时显示的错误文案
 * ============================================================
 */

/** 门店信息 */
export const store = {
  /** 完整地址（Contact 区块展示） */
  addressLine: "仙桃一中可丽超市负一楼",
  /** 简版地址（页脚 / JSON-LD 用） */
  addressShort: "仙桃一中 · 可丽超市负一楼",
  /** 页面显示的电话号码 */
  phoneDisplay: "135-1720-6661",
  /** 电话链接的 href（tel: 协议） */
  phoneHref: "tel:13517206661",
  /** 国际格式电话（JSON-LD 结构化数据用） */
  phoneIntl: "+86-135-1720-6661",
  /** 完整营业时间文案（Contact 区块展示） */
  hoursLine: "每日 8:30 – 20:30",
  /** 简版营业时间文案（页脚展示） */
  hoursShort: "每日 8:30 – 20:30",
  /** 开门时间 24 小时制（JSON-LD 用） */
  hoursOpen: "08:30",
  /** 关门时间 24 小时制（JSON-LD 用） */
  hoursClose: "20:30",
  /** 地图导航搜索词（建议「市 + 学校/街道 + 店铺名」，提高定位准确率） */
  mapKeyword: "仙桃市第一中学可丽超市",
  /**
   * 门店经纬度（可选）：填写后导航直接定位到店门口（storeMapUrl 自动切换），
   * 留空则按 mapKeyword 搜索。坐标用高德坐标拾取器获取：
   * https://lbs.amap.com/tools/picker（格式 "lng,lat"，如 "113.454,30.367"）
   */
  geo: { lng: "", lat: "" },
};

/**
 * 高德导航链接（components/Contact.tsx 与 Footer.tsx 的地址点击跳转）。
 * 手机端自动唤起高德 App；有 geo 坐标时定位到店门口，无坐标时按关键词搜索。
 * 想换百度/腾讯地图时改这里的 URL 模板即可。
 */
export const storeMapUrl =
  store.geo.lng && store.geo.lat
    ? `https://uri.amap.com/marker?position=${store.geo.lng},${store.geo.lat}&name=${encodeURIComponent(store.addressShort)}`
    : `https://uri.amap.com/search?keyword=${encodeURIComponent(store.mapKeyword)}&view=map`;

/** 「联系我们」区块文案 */
export const contactSection = {
  eyebrow: "Visit Us",
  titleLines: ["欢迎到店，", "喝杯茶再验光"],
  subtitle:
    "预约后到店免排队，验光全程约 30 分钟。不方便到店？电话预约我们为您安排。",
  /** 信息条目的小标签（地址 / 时间 / 电话三行） */
  labels: {
    address: "门店地址",
    hours: "营业时间",
    phone: "联系电话",
    /** 地址右侧的「导航」提示文字 */
    mapHint: "导航",
  },
};

/** 预约表单配置 */
export const form = {
  /** 预约类型下拉选项（第一项「请选择」为占位提示，由组件渲染） */
  serviceOptions: [
    "学生验光配镜",
    "近视防控咨询",
    "时尚太阳镜选购",
    "老花镜验配",
    "视力复查",
  ],
  /** 表单标题与引导文案 */
  heading: "预约免费验光",
  subHeading: "填写以下信息，我们将为您安排专属验光时段。",
  /** 字段标签（* 号由组件渲染） */
  labels: {
    name: "您的称呼",
    phone: "手机号码",
    service: "预约类型",
    remark: "备注（选填）",
  },
  /** 占位符文案 */
  placeholders: {
    name: "如：李女士 / 张同学",
    phone: "用于与您确认到店时间",
    service: "请选择",
    remark: "如：方便到店的时间、特殊情况说明",
  },
  /** 校验失败的错误文案（校验规则在 Contact.tsx） */
  validation: {
    name: "请填写您的称呼（至少 2 个字）",
    phone: "请填写 11 位有效的手机号码",
    service: "请选择预约类型",
  },
  /** 提交按钮两种状态 */
  submit: "提交预约",
  submitting: "正在提交…",
  /** 提交按钮下方隐私说明 */
  privacy: "提交即表示同意我们通过电话与您联系，您的信息仅用于本次预约。",
  /** 提交成功页 */
  success: {
    title: "预约提交成功",
    desc: "感谢您的信任，门店工作人员将在 1 个工作日内与您电话确认到店时间。",
    again: "再预约一次",
  },
};
