import { resolve } from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: "melkiads",
      fileName: "main",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-jss"],
      
    },
  },
  plugins: [react()],
});
