import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </>
  );
}

export default App;
