
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // نستخدم './' لضمان أن جميع الروابط في ملفات الـ HTML والـ CSS تكون نسبية
  base: './', 
  define: {
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY || '')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // إعدادات إضافية لضمان استقرار الملفات المخرجة
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  }
});
