import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function Providers({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );
  return (
    <QueryClientProvider client={client} contextSharing={true}>
      {children}
    </QueryClientProvider>
  );
}

export default Providers;
