import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./common/AppLayout";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { MainContextProvider } from "./context/MainContext";

function App() {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Shop />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <MainContextProvider>
      <RouterProvider router={allRoutes} />;
    </MainContextProvider>
  );
}

export default App;
