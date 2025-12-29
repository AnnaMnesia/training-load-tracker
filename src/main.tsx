import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

/**
 * Global browser reset
 * Intentional replacement for index.css (which is deleted)
 */
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
