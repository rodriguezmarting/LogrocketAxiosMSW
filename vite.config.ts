import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// used for dev/preview commands to fix CORS requests w/o plugin required
const corsProxy = {
  "/api": {
    target: "https://api-turin.digitalsales-sandbox.hagerty.com", // comment out for targeting local dev
    // target: 'https://localhost:7097', // uncomment for targeting local dev
    changeOrigin: true,
    secure: false,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: corsProxy,
  },
  preview: {
    proxy: corsProxy,
  },
});
