import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (
            id.includes('react-dom') ||
            id.includes('/react/') ||
            id.includes('react/jsx') ||
            id.includes('scheduler')
          )
            return 'react-vendor'
          if (id.includes('@chakra-ui') || id.includes('@emotion')) return 'chakra-vendor'
          if (
            id.includes('framer-motion') ||
            id.includes('motion-dom') ||
            id.includes('motion-utils')
          )
            return 'motion-vendor'
          if (id.includes('@tanstack')) return 'router-vendor'
          return 'vendor'
        },
      },
    },
  },
})
