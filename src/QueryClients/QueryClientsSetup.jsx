import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Children } from "react";

const queryClient = new QueryClient();

const QueryClientSetup = () => {
  return (
    <QueryClientProvider client={queryClient}>{Children}</QueryClientProvider>
  );
};

export default QueryClientSetup;
