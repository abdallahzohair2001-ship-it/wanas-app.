// WANAS Main Navigation Tabs - التبويبات الرئيسية لتطبيق ونس
const MAIN_TABS = {
  layoutDirection: "RTL",
  navigationBar: [
    {
      tabIndex: 1,
      name: "الرئيسية",
      route: "/home",
      purpose: "الأخبار، القصص، المنشور السريع، كبسولات الصباح"
    },
    {
      tabIndex: 2,
      name: "فيديو",
      route: "/video",
      purpose: "الفيديوهات القصيرة والطويلة بتمرير رأسي"
    },
    {
      tabIndex: 3,
      name: "المجالس",
      route: "/rooms",
      purpose: "المجالس الصوتية المباشرة (في المنتصف)"
    },
    {
      tabIndex: 4,
      name: "الونسة",
      route: "/chats",
      purpose: "المحادثات الخاصة والجماعية وركن الونسة"
    },
    {
      tabIndex: 5,
      name: "الملف",
      route: "/profile",
      purpose: "الملف الشخصي، ركني، والإعدادات"
    }
  ]
};

module.exports = MAIN_TABS;
