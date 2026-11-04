const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://nvolxlcaqnemxjoqxssst.supabase.co';
const supabaseKey = 'sb_secret_qjfw25sEYCJP8zVSVGAk4Q_UdewD44c';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
