import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Store from "./stores/index.ts";
import { Provider } from "react-redux";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
