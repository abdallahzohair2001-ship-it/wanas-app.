/**
 * WANAS Settings & Privacy System - نظام الإعدادات والخصوصية في ونس
 * إدارة إعدادات الحساب، الخصوصية، والتحكم بالأمان
 */

const SETTINGS_PRIVACY_CONFIG = {
  privacyControls: {
    profileVisibility: "تحكم في ظهور الملف الشخصي (الكل، المتابعون، فقط أنا)",
    activityStatus: "إدارة ظهور حالة النشاط ومتواجد الآن",
    blockAndMute: "إدارة قائمة المستخدمين المحظورين والمكتومين"
  },
  generalSettings: {
    themeMode: "الوضع الداكن النقي (#000000) بشكل افتراضي دائم",
    language: "اللغة العربية مع دعم اتجاه RTL والخط (Cairo)",
    notificationsControl: "تخصيص كامل للتنبيهات والأصوات"
  }
};

module.exports = SETTINGS_PRIVACY_CONFIG;
