/**
 * WANAS Main Navigation Tabs System - نظام التبويبات الرئيسية في ونس
 * يلتزم بترتيب راحة الإبهام واتجاه RTL
 */

const MAIN_TABS_CONFIG = {
  navigationLayout: "RTL (من اليمين إلى اليسار لراحة الإبهام)",
  tabsOrder: [
    { id: "home", name: "الرئيسية", position: "أقصى اليمين", icon: "home-icon" },
    { id: "video", name: "فيديو", position: "الثاني من اليمين", icon: "video-icon" },
    { id: "rooms", name: "المجالس", position: "المنتصف", icon: "mic-icon" },
    { id: "wanas", name: "الونسة", position: "الثاني من اليسار", icon: "chat-icon" },
    { id: "profile", name: "الملف", position: "أقصى اليسار", icon: "profile-icon" }
  ],
  styling: {
    fontFamily: "Cairo",
    theme: "Pure Black #000000"
  }
};

module.exports = MAIN_TABS_CONFIG;
