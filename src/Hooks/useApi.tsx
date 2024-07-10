import { useCallback, useState } from "react";
import { ActionPromise, ReqI } from "../interface/Hooks/Interface.useApi";

export const useApi = () => {
  const [error, setError] = useState<null | string | Error>(null);
  const request = useCallback(async (url: string, options: ReqI) => {
    try {
      // Задаем нужные параметры и отправляем при помощи fetch запрос
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