/** @type {import('vite').UserConfig} */
import { resolve } from "path";
import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        parentSelector: resolve(__dirname, "parentSelector/index.html"),
      },
    },
  },
  plugins: [liveReload("./**/*.html")],
});
