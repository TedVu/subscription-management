import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import FullReload from "vite-plugin-full-reload";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslint(), FullReload(["src/**/*.vue"])],
});
