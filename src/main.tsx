import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LogRocket from "logrocket";
import { worker } from "./mocks/browser";
import { QueryClient, QueryClientProvider } from "react-query";

LogRocket.init("hgwci9/mswswaggerissue");

worker.start();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
