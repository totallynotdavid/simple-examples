import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/simple-examples/",
  root: path.resolve(__dirname, "src"),
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  build: {
    target: "esnext",
    outDir: path.resolve(__dirname, "build"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
