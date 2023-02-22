import { QueryClientProvider } from "@tanstack/react-query";

import { GlobalStyle } from "./styles/global";
import { queryClient } from "./services/queryClient";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  );
};
