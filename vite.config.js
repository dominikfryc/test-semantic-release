import { defineConfig } from "vite";
import { extname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";

export default defineConfig({
  build: {
    lib: {
      entry: Object.fromEntries(
        glob
          .sync("src/**/*.ts")
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
    rollupOptions: {
      output: [
        {
          assetFileNames: "assets/[name][extname]",
          entryFileNames: "[name].js",
        },
      ],
    },
    target: "esnext",
    sourcemap: true,
  },
});
