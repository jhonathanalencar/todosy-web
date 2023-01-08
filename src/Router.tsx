import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "account",
          children: [
            {
              path: "/account/login",
              element: <Login />,
            },
            {
              path: "/account/register",
              element: <SignUp />,
            },
          ],
        },
      ],
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
