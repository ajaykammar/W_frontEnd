import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

import { Provider } from "react-redux";
import store from "./features/store.js";

const queryClient = new QueryClient({});

// import { dexiePersister } from "./customPersister.js";

// // Initialize QueryClient
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1 * 60 * 1000, // 5 minutes
//       cacheTime: 3 * 24 * 60 * 60 * 1000, // 3 days
//       refetchOnWindowFocus: false,
//       retry: false, // Retry failed requests 2 times before falling back to cache
//     },
//   },
// });

// // Enable persistence using Dexie
// persistQueryClient({
//   queryClient,
//   persister: dexiePersister,
//   maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
