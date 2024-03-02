import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/papes/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@api": `${path.resolve(__dirname, "./src/apis/")}`,
      "@fb": `${path.resolve(__dirname, "./src/firebase/")}`,
      "@route": `${path.resolve(__dirname, "./src/routes/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@slices": `${path.resolve(__dirname, "./src/stores/slices/")}`,
      "@pictures": `${path.resolve(__dirname, "./src/pictures/")}`,
      "@stores": `${path.resolve(__dirname, "./src/stores/")}`,
      "@admin": `${path.resolve(__dirname, "./src/papes/admin/")}`,
      // "@firebase": `${path.resolve(__dirname, "./src/firebase/")}`,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/styleAll.scss";',
      },
    },
  },
});
