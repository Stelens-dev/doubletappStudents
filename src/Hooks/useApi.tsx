import { useCallback, useState } from "react";
import { ReqI } from "../interface/Hooks/Interface.useApi";
// import { StudentsInterface } from "../interface/api/Interface.Students";

type ActionPromise<T> = T | Promise<T>;

export const useApi = () => {
  const [error, setError] = useState<null | string | Error>(null);
  const request = useCallback(async (url: string, options: ReqI) => {
    try {
      const response: Promise<Response> = fetch(url, {
        method: options.method,
        headers: options.headers,
        body: options.body
      });

      const data: ActionPromise<object> | undefined = (await response).json();
      
      return data;
    } catch (error) {
      let message: Error | string = "Error request";
      if (error instanceof Error) {
        message = error.message;
      }
      setError(message);
    }
  }, []);

  return { request, error };
};