import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),       // Enables React support
    tailwindcss(), // Enables Tailwind v4 plugin
  ],
});
