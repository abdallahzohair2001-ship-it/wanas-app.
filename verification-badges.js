// WANAS Verification & Badges System - نظام التوثيق والشارات الملونة في ونس
const VERIFICATION_BADGES_CONFIG = {
  badgeTypes: [
    { id: "official", name: "الشارة الرسمية الموثقة", color: "#F0C95A", description: "للشخصيات العامة والعلامات التجارية" },
    { id: "creator", name: "صانع محتوى مميز", color: "#FF9800", description: "للمؤثرين وأصحاب الفيديوهات الرائجة" },
    { id: "moderator", name: "مشرف مجلس", color: "#4CAF50", description: "لمدراء المجالس الصوتية والمجتمعات" },
    { id: "vip", name: "عضو ذهبي (VIP)", color: "#E91E63", description: "المشتركين في باقات الونس الخاصة" }
  ],
  displayLocation: "تظهر بجوار اسم المستخدم في البروفايل، المنشورات، المجالس، والتعليقات بدقة."
};

module.exports = VERIFICATION_BADGES_CONFIG;
