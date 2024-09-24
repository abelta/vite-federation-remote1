import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote1',
      exposes: {
        './App': './src/App',
      },
      remotes: {
        host: 'http://localhost:4999/assets/remoteEntry.js',
      },
      shared: [
        'react',
        'react-dom',
        '@casl/ability',
        '@casl/react',
        'zustand',
        'react-router-dom',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
