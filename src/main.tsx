import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "./index.css";
import CartProvider from "@/store/cart-provider.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <CartProvider>
      <App />
    </CartProvider>
    </QueryClientProvider>
);
