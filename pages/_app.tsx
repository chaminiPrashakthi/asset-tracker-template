import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/sort-button.css";
import "../styles/token-list.css";

import { theme } from "@/ui";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <div style={{ backgroundColor: "black" }}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
