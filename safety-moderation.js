// WANAS Safety, Blocking & Moderation System - نظام الأمان والحظر والبلاغات في ونس
const SAFETY_MODERATION_CONFIG = {
  blockingAndMuting: {
    blockUser: "حظر المستخدم (يمنع تماماً ظهور محتوياته أو التواصل معه، ويظهر باللون الأحمر)",
    muteUser: "كتم المستخدم (إخفاء منشوراته ومحتواه دون إلغاء الصداقة)",
    hideContent: "إخفاء منشورات محددة أو الإبلاغ عنها"
  },
  reportingSystem: {
    reasons: ["محتوى غير لائق", "إزعاج أو مضايقة", "معلومات مضللة", "انتهاك حقوق الملكية"],
    action: "مراجعة البلاغات من قِبل فريق الإشراف واتخاذ الإجراء اللازم فوراً"
  }
};

module.exports = SAFETY_MODERATION_CONFIG;

