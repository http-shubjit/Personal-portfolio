import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scss from "vite-plugin-scss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), scss()],
  build: {
    rollupOptions: {
      external: ["framer-motion", "@emailjs/browser"],
    },
  },
});
