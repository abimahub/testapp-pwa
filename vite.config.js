import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "/src/assets/react.svg",
            sizes: "35x35",
            type: "image/svg",
            purpose: "any maskable"
          }
        ]
      }
      //registerType: "autoUpdate",
      //workbox: {
      //  clientsClaim: true,
     //   skipWaiting: true,
     // },
     // devOptions: {
      //  enabled: true,
     // },
    }),
  ],
});
