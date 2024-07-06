interface ReqInterface {
  method: "GET" | "HEAD" | "PUT" | "PATCH" | "POST" | "DELETE",
  body?: "null",
  headers?: {
    [name: string]: string
  }
}

export type { ReqInterface };