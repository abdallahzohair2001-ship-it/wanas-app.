// WANAS Chats & Bag System - نظام الونسة الخاصة والحقيبة في ونس
const CHATS_BAG_CONFIG = {
  features: {
    bagAttachments: [
      "صورة", "كاميرا", "فيديو", "ملف (PDF/DOCX)",
      "موقعي", "جهة اتصال", "صوت", "استفتاء", "ختم"
    ],
    specialMessages: {
      timeKey: "رسالة مفتاح الوقت (تتفتح في وقت محدد)",
      disappearing: "رسالة مؤقتة تختفي بعد ساعة أو يوم",
      viewOnce: "صورة أو فيديو لمرة واحدة مع مؤقت تنازلي"
    },
    sealsAndStickers: "صانع الأختام (ختم كامل، مفرغ، أو قص حر مع ختم بصوت)"
  }
};

module.exports = CHATS_BAG_CONFIG;
