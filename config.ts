import type { CommonServerOptions } from "vite"

export const SERVER_HOST = "127.0.0.1"
export const SERVER_PORT = 6246
export const SERVER_ROUTE = "/api"
export const PROXY_CONFIG = {
  [SERVER_ROUTE]: `http://${SERVER_HOST}:${SERVER_PORT}/`
} as CommonServerOptions["proxy"]