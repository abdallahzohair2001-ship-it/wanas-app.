// WANAS UI Layout & Navigation Configuration - إعدادات التخطيط والشريطين العلوي والسفلي
const UI_LAYOUT_CONFIG = {
  direction: "RTL",
  safeArea: {
    top: "مراعاة مساحة شريط الحالة (Status Bar) والنوتش",
    bottom: "مراعاة مساحة أزرار النظام السفلية (Gesture Bar)"
  },
  bottomNavigationBar: {
    alignment: "من اليمين لليسار لراحة الإبهام الأيمن",
    tabs: [
      { position: 1, name: "الرئيسية", route: "/home", align: "أقصى اليمين" },
      { position: 2, name: "فيديو", route: "/video", align: "اليمين الوسط" },
      { position: 3, name: "المجالس", route: "/rooms", align: "المنتصف (Audio Rooms)" },
      { position: 4, name: "الونسة", route: "/chats", align: "اليسار الوسط" },
      { position: 5, name: "الملف", route: "/profile", align: "أقصى اليسار" }
    ]
  },
  topHeaderBar: {
    logo: "شعار W مع النقطة الذهبية الثابتة",
    actions: ["الإشعارات", "طلبات الصداقة", "وضع هدوء الصلاة"]
  }
};

module.exports = UI_LAYOUT_CONFIG;
