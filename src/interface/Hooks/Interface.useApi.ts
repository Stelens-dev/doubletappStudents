interface ReqI {
  method: "GET" | "HEAD" | "PUT" | "PATCH" | "POST" | "DELETE",
  body?: "null",
  headers?: {
    [name: string]: string
  }
}

export type { ReqI };