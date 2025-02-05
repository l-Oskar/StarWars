import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@ui": "/src/components/UI",
      "@containers": "/src/containers",
      "@constants": "/src/constants",
      "@hoc-helpers": "/src/hoc-helpers",
      "@hooks": "/src/hooks",
      "@routes": "/src/routes",
      "@services": "/src/services",
      "@static": "/src/static",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
});
