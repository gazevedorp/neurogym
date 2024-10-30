import { createClient } from '@supabase/supabase-js';

// Substitua pelos seus valores
const supabaseUrl = 'https://nrstpnadlmueyxunvhno.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yc3RwbmFkbG11ZXl4dW52aG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMTE2MDUsImV4cCI6MjA0NDg4NzYwNX0.xjYVvhnV1UuRMlyfw0eH0oLXUxGPI2pHFW99qiW6pWA'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;