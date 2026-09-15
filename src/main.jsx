import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { logResourceSummary, mark, startRuntimeObservers } from "./utils/performance";

mark("app-start");
const stopPerformanceObservers = startRuntimeObservers();
window.addEventListener("load", () => {
  mark("window-load");
  setTimeout(() => {
    console.info("[perf] Runtime resource summary");
    logResourceSummary();
    stopPerformanceObservers();
  }, 0);
}, { once: true });

createRoot(document.getElementById("root")).render(<App />);