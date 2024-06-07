import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/api": {
        target: "https://chat-app-mern-ndou.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
