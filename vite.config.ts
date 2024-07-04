import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { PROXY_CONFIG } from "./config"

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  base: "./",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    target: "esnext",
  },
  server: {
    host: "0.0.0.0",
    port: 6245,
    proxy: PROXY_CONFIG
  },
  preview: {
    host: "127.0.0.1",
    port: 6245,
    proxy: PROXY_CONFIG
  },
  plugins: [react()]
})
