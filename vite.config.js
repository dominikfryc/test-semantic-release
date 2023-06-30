import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: fileURLToPath(new URL("src/index.ts", import.meta.url)),
      name: "Diffix",
      fileName: "index",
    },
  },
});
