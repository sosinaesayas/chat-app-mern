// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist', 
//     sourcemap: true,
//   },
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://chat-app-mern-ndou.onrender.com",
//         changeOrigin: true,
//         secure: true,
//       },
//     },
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
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
