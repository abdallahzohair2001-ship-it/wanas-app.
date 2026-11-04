/**
 * WANAS Splash & Onboarding UI System
 * نظام شاشة الترحيب والاستقبال لتطبيق ونس
 */

const ONBOARDING_SPLASH_CONFIG = {
  splashScreen: {
    backgroundColor: "#000000", // الوضع الداكن النقي
    logo: "شعار W مع النقطة الذهبية المميزة",
    fontFamily: "Cairo",
    duration: "ثانيتان مع انتقال سلس للتبويب الرئيسي"
  },
  onboardingSlides: [
    {
      title: "أهلاً بك في ونس",
      description: "منصتك المجتمعية المتكاملة للتواصل الراقي والمشاركة الحية."
    },
    {
      title: "المجالس الصوتية والونسة",
      description: "شارك في المجالس الصوتية وتواصل بكل أمان وخصوصية تامة."
    },
    {
      title: "منشورات وقصص نابضة بالحياة",
      description: "عبر عن نفسك بأحدث قوالب النشر والفيديوهات القصيرة (9:16)."
    }
  ]
};

module.exports = ONBOARDING_SPLASH_CONFIG;
