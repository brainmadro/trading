import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  define: {
    'process.env': process.env,
  },

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        crypto: resolve(__dirname, "src/crypto/index.html")
      }
    }
  }
});
