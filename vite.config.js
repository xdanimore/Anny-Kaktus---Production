import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Anny Kactus",
        short_name: "AnnyKactus",
        description: "Tienda virtual de plantas decorativas",
        theme_color: "#4baf56",
        icons: [
          {
            src: "/src/assets/favicon.ico",
            sizes: "192x192",
            type: "image/svg+xml",
          },
        ],
      },
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: { globPatterns: ["**/*.{js,css,html,ico,png,svg}"] },
    }),
  ],
});
