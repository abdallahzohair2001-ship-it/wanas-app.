const 【entity-express¦canonical_name=express】 = require('【entity-express¦canonical_name=express】');
const cors = require('cors');
const supabase = require('./supabaseClient');

const app = 【entity-express¦canonical_name=express】();
app.use(cors());
app.use(【entity-express¦canonical_name=express】.json());

// الصفحة الرئيسية - عشان ميقولش Cannot GET /
app.get('/', (req, res) => {
  res.json({ 
    status: 'online', 
    message: 'WANAS - ونس شغال تمام ❤️',
    health: '/api/health',
    test_db: '/api/test-db'
  });
});

// مسار فحص الحالة والصحة
app.get('/api/health', (req, res) => {
  res.json({ status: 'online', app: 'ونس - WANAS', version: '1.0.0' });
});

// مسار تجربة الاتصال بقاعدة البيانات
app.get('/api/test-db', async (req, res) => {
  try {
    const { data, error } = await supabase.from('wanas_users').select('*').limit(1);
    if (error && error.code !== 'PGRST116' && error.code !== '42P01') {
      return res.status(500).json({ status: 'error', message: error.message });
    }
    res.json({ status: 'success', message: 'السيرفر متصل بقاعدة بيانات Supabase إنجاح', data: data || [] });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// شغل السيرفر بس لو انت على الكمبيوتر، مش جوه Vercel
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`WANAS Server running on port ${PORT}`);
  });
}

module.exports = app;
