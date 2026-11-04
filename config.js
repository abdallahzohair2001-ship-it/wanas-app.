/**
* WANAS API Frontend Configuration
* ربط واجهة التطبيق الأمامية بالسيرفر المركزي السحابي
*/
const WANAS_CONFIG = {
  API_BASE_URL: window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : 'https://wanas-app.vercel.app',
  appName: 'ونس - WANAS',
  version: '1.0.0',
  theme: 'Pure Black (#000000)'
};
window.WANAS_CONFIG = WANAS_CONFIG;
