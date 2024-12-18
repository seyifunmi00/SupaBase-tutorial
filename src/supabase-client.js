import {createClient} from "@supabase/supabase-js";


const supabaseUrl = 'https://vptjikiptxoevgqntljh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdGppa2lwdHhvZXZncW50bGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MTIzOTEsImV4cCI6MjA1MDA4ODM5MX0.xxDN7bzi8jun9WDcBPAZ4OXXSgM4sV2Ke5BCCeJ-KMQ';

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
