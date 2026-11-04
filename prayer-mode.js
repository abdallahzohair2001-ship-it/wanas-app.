// WANAS Prayer Quiet Mode - نظام هدوء الصلاة ومواقيت الصلاة في ونس
const PRAYER_MODE_CONFIG = {
  enabled: true,
  description: "ونس بيسكت شوية وقت الصلاة - اختياري",
  calculations: [
    "الهيئة المصرية العامة للكتاب",
    "رابطة العالم الإسلامي",
    "أم القرى",
    "دبي"
  ],
  defaultDurationMinutes: 20,
  prayers: ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"]
};

module.exports = PRAYER_MODE_CONFIG;
