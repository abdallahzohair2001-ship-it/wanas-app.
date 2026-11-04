const express = require('express');
const cors = require('cors');
const supabase = require('./supabaseClient');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'WANAS - ونس شغال تمام',
    health: '/api/health',
    test_db: '/api/test-db'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'online', app: 'ونس - WANAS', version: '1.0.0' });
});

app.get('/api/test-db', async (req, res) => {
  try {
    const { data, error } = await supabase.from('wanas_users').select('*').limit(1);
    if (error && error.code !== 'PGRST116' && error.code !== '42P01') {
      return res.status(500).json({ status: 'error', message: error.message });
    }
    res.json({ status: 'success', message: 'السيرفر متصل بقاعدة بيانات Supabase', data: data || [] });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`WANAS Server running on port ${PORT}`);
  });
}

module.exports = app;
