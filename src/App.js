import { Outlet } from "react-router-dom";
import ShoppyHeader from "./components/ShoppyHeader/ShoppyHeader";

function App() {
  return (
    <>
      <ShoppyHeader />
      <Outlet />
    </>
  );
}

export default App;
