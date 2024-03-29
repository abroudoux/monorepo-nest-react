import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import path from "path";

export default defineConfig({
  envPrefix: "REACT_APP_",
  build: {
    outDir: "dist"
  },
  plugins: [
    react(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    host: true,
    port: 5001,
    watch: {
      usePolling: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:5002",
        changeOrigin: true
      }
    }
  }
});
