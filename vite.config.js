import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'production' ? '/repo的名稱/' : '/',
  plugins: [react()],
});
