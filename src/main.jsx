import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body.jsx";
import RestroDetail from "./components/RestroDetail";
import Cart from "./components/Cart/Cart.jsx";
import ChAdress from "./components/Cart/ChAdress.jsx";
import CartLayout from "./components/Cart/CartLayout.jsx";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "restaurants/:resid",
        element: <RestroDetail />,
      },
      {
        path: "cart",
        element: <CartLayout />,
        children: [
          { index: true, element: <Cart /> },
          {
            path: "choose-address",
            element: <ChAdress />,
          },
          {
            path: "add-address",
            element: <h1>ADD ADDRESS</h1>,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerConfig} />
);
