/**
 * WANAS Notifications & Alerts System - نظام الإشعارات والتنبيهات في ونس
 * إدارة التنبيهات الفورية للمجالس، الرسائل، والتفاعلات
 */

const NOTIFICATIONS_ALERTS_CONFIG = {
  notificationTypes: {
    audioRooms: "تنبيهات بدء المجالس والدعوات للانضمام",
    socialInteractions: "إشعارات الإعجابات، التعليقات، والإشارات (Mentions)",
    directMessages: "تنبيهات الرسائل الفورية وحقيبة ونس",
    systemAlerts: "الإعلانات الرسمية والتحديثات الأمنية"
  },
  deliverySettings: {
    pushNotifications: "دعم الإشعارات الفورية للهواتف الذكية",
    inAppAlerts: "تنبيهات بصرية داخل الواجهات متوافقة مع الوضع الداكن"
  }
};

module.exports = NOTIFICATIONS_ALERTS_CONFIG;
