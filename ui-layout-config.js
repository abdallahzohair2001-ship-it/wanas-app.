/**
 * WANAS UI Layout & Safe Area Configuration
 * إعدادات تخطيط الواجهات ومناطق الأمان والهوية البصرية لونس
 */

const UI_LAYOUT_CONFIG = {
  theme: {
    mode: "Dark",
    backgroundColor: "#000000", // الوضع الداكن النقي المطلوب
    primaryColor: "#D4AF37"     // النقطة الذهبية
  },
  typography: {
    fontFamily: "Cairo",
    direction: "rtl"
  },
  screenLayout: {
    safeAreaPadding: "مراعاة مساحات الشاشة العلوية والسفلية (Safe Area)",
    thumbFriendlyNavigation: "شريط تنقل سفلي مصمم لراحة الإبهام"
  }
};

module.exports = UI_LAYOUT_CONFIG;
