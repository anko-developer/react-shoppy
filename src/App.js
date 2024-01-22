import { Outlet } from "react-router-dom";
import ShoppyHeader from "./components/ShoppyHeader/ShoppyHeader";
import { AuthContextProvider } from "./components/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <ShoppyHeader />
      <Outlet />
    </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
