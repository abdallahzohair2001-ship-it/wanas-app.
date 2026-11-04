// WANAS Audio Rooms System - نظام المجالس الصوتية في ونس
const AUDIO_ROOMS_CONFIG = {
  technology: "LiveKit SDK (In-app WebRTC)",
  features: {
    noExternalRedirects: true, // صفر خروج من التطبيق
    handRaiseQueue: true, // نظام رفع اليد وطلب الكلام
    speakerTimer: "كرسي الكلام (مؤقت للمتحدث)",
    reactions: "تفاعلات إيموجي عائمة وتصفيق صوتي",
    recording: "تسجيل المجلس بإذن المضيف وزر إيقاف/تشغيل"
  },
  roles: ["مضيف (Host)", "مشرف/معاون (Mod)", "متحدث (Speaker)", "مستمع (Listener)"],
  uiDesign: {
    cardRadius: 20,
    speakerAvatarSize: 72,
    hostAvatarSize: 84,
    listenerAvatarSize: 44
  }
};

module.exports = AUDIO_ROOMS_CONFIG;
