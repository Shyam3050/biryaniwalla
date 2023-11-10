import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/body.jsx";
import RestroDetail from "./components/RestroDetail";
import Cart from "./components/Cart/Cart.jsx";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestroDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <h1>about component</h1>,
      },
    ],
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerConfig} />
);
