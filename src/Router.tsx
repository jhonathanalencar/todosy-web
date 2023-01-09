import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { getListsQuery, Home, Login, SignUp, ErrorBoundary } from "./pages";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: getListsQuery,
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
      errorElement: <ErrorBoundary />,
    },
  ]);

  return <RouterProvider router={router} />;
}
