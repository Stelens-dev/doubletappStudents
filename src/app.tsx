import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  }
]);

export const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};