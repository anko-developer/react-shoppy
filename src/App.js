import { Outlet } from "react-router-dom";
import ShoppyHeader from "./components/ShoppyHeader/ShoppyHeader";
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <ShoppyHeader />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
