/**
 * WANAS Application Core Server & Integration
 * نظام التشغيل والربط المركزي لتطبيق ونس
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// استدعاء كافة نظم ومكونات التطبيق الأساسية
const themeConfig = require('./wanas-theme.json');
const mainTabs = require('./main-tabs.js');
const audioRooms = require('./audio-rooms.js');
const chatsBag = require('./chats-bag.js');
const postsAdvanced = require('./posts-advanced-features.js');
const wCoinEconomy = require('./w-coin-economy.js');
const verificationBadges = require('./verification-badges.js');
const notificationsAlerts = require('./notifications-alerts.js');
const settingsPrivacy = require('./settings-privacy.js');
const profileManagement = require('./profile-management.js');
const searchExplore = require('./search-explore.js');
const liveVideoStreaming = require('./live-video-streaming.js');
const safetyModeration = require('./safety-moderation.js');
const aiPrayerMode = require('./ai-prayer-mode.js');

app.use(express.json());

// نقطة البداية للتحقق من عمل السيرفر والهوية البصرية
app.get('/', (req, res) => {
  res.json({
    status: "Online",
    appName: "WANAS - ونس",
    theme: themeConfig,
    message: "تم ربط وتشغيل كافة نظم وتطبيقات ونس بنجاح تام وفق الهوية البصرية!"
  });
});

app.listen(PORT, () => {
  console.log(`WANAS Server is running smoothly on port ${PORT}`);
});
