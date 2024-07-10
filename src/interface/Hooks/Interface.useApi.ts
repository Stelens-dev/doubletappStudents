type ActionPromise<T> = T | Promise<T>;

interface ReqI {
  method: "GET" | "HEAD" | "PUT" | "PATCH" | "POST" | "DELETE",
  body?: "null",
  headers?: {
    [name: string]: string
  }
}

export type { ReqI, ActionPromise };