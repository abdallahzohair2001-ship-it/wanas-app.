/**
 * WANAS Audio Rooms System - نظام المجالس الصوتية في ونس
 * إدارة الغرف الصوتية، المتحدثين، والمستمعين بجودة عالية
 */

const AUDIO_ROOMS_CONFIG = {
  roomFeatures: {
    maxSpeakers: 10,
    allowRaisingHand: true,
    audioQuality: "High Definition",
    backgroundSoundControl: true
  },
  roles: {
    host: "المضيف (إدارة الغرفة والتحكم بالميكروفونات)",
    speaker: "متحدث (مشاركة الصوت داخل المجلس)",
    listener: "مستمع (استماع تفاعلي مع إمكانية طلب المداخلة)"
  }
};

module.exports = AUDIO_ROOMS_CONFIG;
