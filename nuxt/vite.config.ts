import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import {visualizer} from  "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "tsconfig.build.json",
      cleanVueFileName: true,
    }),
    visualizer()
  ],
  build: {
    sourcemap: true,
    lib: {
      name: "YeFormNuxt",
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vue", "tailwindcss"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: { alias: { "@": resolve(__dirname, "src") } },
});
