import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import AuthLayouts from "./auth/AuthLayouts.jsx";
import Login from "./auth/Login.jsx";
import Registation from "./auth/Registation.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

const queryClient = new QueryClient();

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "authlayouts",
    element: <AuthLayouts />,
    children: [
      {
        path: "/authlayouts/login",
        element : <Login/>
      },
      {
        path:'/authlayouts/registation',
        element: <Registation/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(

  <ContextProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={route}></RouterProvider>
  </QueryClientProvider>
  </ContextProvider>

);

