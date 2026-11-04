// WANAS Core Server - خادم تطبيق ونس الأساسي
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    app: "WANAS - ونس",
    status: "Online",
    message: "مرحباً بك في الخادم الرسمي لتطبيق ونس. مساحة آمنة للأنس والاجتماع."
  }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`WANAS Server is running on port ${PORT}`);
});
