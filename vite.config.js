import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/StarWars/",
  build: {
    outDir: "dist",
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
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
      "@store": "/src/store",
      "@context": "/src/context",
    },
  },
});
