import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * APPLICATION ENTRY POINT
 * -----------------------
 * Mounts the React application to the DOM.
 * Ensure "root" exists in index.html.
 */
createRoot(document.getElementById("root")!).render(<App />);
