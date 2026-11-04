/**
 * WANAS Central Server - السيرفر المركزي المتكامل لتطبيق ونس
 * يربط كافة موديولات المنصة (التبويبات، المجالس، الدردشات، العملات، والخصوصية)
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// استيراد كافة إعدادات ونظم منصة ونس
const themeConfig = require('./wanas-theme.json');
const uiLayout = require('./ui-layout-config.js');
const tabsConfig = require('./tabs.config.js');
const audioRooms = require('./audio-rooms.js');
const chatsBag = require('./chats-bag.js');
const postsAdvanced = require('./posts-advanced-features.js');
const liveVideo = require('./live-video-streaming.js');
const wCoinEconomy = require('./w-coin-economy.js');
const verificationBadges = require('./verification-badges.js');
const notificationsAlerts = require('./notifications-alerts.js');
const settingsPrivacy = require('./settings-privacy.js');
const healthCheck = require('./integration-health-check.js');

app.use(express.json());

// نقطة البداية واختبار صحة النظام الشامل
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: "منصة ونس تعمل بكفاءة تامة 100%",
    systemStatus: healthCheck,
    activeTheme: uiLayout.theme,
    timestamp: new Date().toISOString()
  });
});

// مسار جلب إعدادات التبويبات والهوية البصرية
app.get('/api/config/tabs', (req, res) => {
  res.status(200).json({
    tabs: tabsConfig,
    layout: uiLayout
  });
});

// بدء تشغيل السيرفر المركزي
app.listen(PORT, () => {
  console.log(`WANAS Server is running successfully on port ${PORT} with Pure Black theme (#000000)`);
});

module.exports = app;
