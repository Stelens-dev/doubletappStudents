import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.sass";

createRoot(
  document.getElementById("root") ?? document.createElement("div")
).render(<App />);
