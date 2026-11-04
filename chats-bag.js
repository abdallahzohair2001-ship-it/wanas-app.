/**
 * WANAS Chats & Wanas Bag System - نظام حقيبة ونس والدردشات الخاصة
 * إدارة الرسائل الفورية، الوسائط، والدردشات الفردية والجماعية بأمان تام
 */

const CHATS_BAG_CONFIG = {
  chatFeatures: {
    endToEndEncryption: true,
    mediaSharing: "دعم إرسال الصور، الفيديوهات، والرسائل الصوتية",
    messageStatus: " مؤشرات القراءة والاستلام",
    pureBlackTheme: "متوافق كلياً مع الوضع الداكن النقي #000000"
  },
  bagCategories: {
    privateChats: "الدردشات الثنائية الخاصة",
    communityChats: "مراسلات المجالس والمجموعات",
    savedMessages: "حقيبة المحفوظات والرسائل المعلقة"
  }
};

module.exports = CHATS_BAG_CONFIG;
