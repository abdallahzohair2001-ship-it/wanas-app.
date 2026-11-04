// WANAS Notifications & Alerts System - نظام الإشعارات والتنبيهات في ونس
const NOTIFICATIONS_ALERTS_CONFIG = {
  notificationTypes: [
    { category: "المجالس الصوتية", description: "تنبيه عند بدء مجلس لمُتابع أو دعوة للانضمام كمتحدث" },
    { category: "التفاعلات والمنشورات", description: "إشعارات الإعجابات، التفاعلات التسعة، والتعليقات الجديدة" },
    { category: "الونسة الخاصة", description: "تنبيهات الرسائل الفورية، رسائل مفتاح الوقت، والصورة لمرة واحدة" },
    { category: "الصلاة والهواء", description: "تنبيه نظام هدوء الصلاة وكتم الإشعارات المؤقت وقت الأذان" }
  ],
  settings: "إمكانية التحكم الكامل في تخصيص أو كتم إشعارات كل قسم على حدة بكل سهولة."
};

module.exports = NOTIFICATIONS_ALERTS_CONFIG;
