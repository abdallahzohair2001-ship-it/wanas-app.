/**
 * WANAS Tabs Configuration - إعدادات وربط تبويبات ونس
 * يربط بين كل تبويب والملف البرمجي الخاص به
 */

const TABS_CONFIG = {
  version: "1.0.0",
  defaultTab: "home",
  mappings: {
    home: {
      file: "posts-advanced-features.js",
      description: "عرض المنشورات والقصص والفيض الإخباري"
    },
    video: {
      file: "live-video-streaming.js",
      description: "عرض الفيديوهات القصيرة (9:16) والبث المباشر"
    },
    rooms: {
      file: "audio-rooms.js",
      description: "إدارة المجالس الصوتية التفاعلية"
    },
    wanas: {
      file: "chats-bag.js",
      description: "الدردشات الخاصة وحقيبة ونس"
    },
    profile: {
      file: "profile-management.js",
      description: "إدارة الملف الشخصي، الإعدادات، والشارات"
    }
  }
};

module.exports = TABS_CONFIG;
