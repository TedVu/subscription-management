import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import FullReload from "vite-plugin-full-reload";

// https://vitejs.dev/config/
export default defineConfig({
    // hot reload vue files
    plugins: [vue(), eslint(), FullReload(["src/**/*.{vue,ts}"])],
});
