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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={route}></RouterProvider>
  </QueryClientProvider>
);

<BrowserRouter>
  <Routes>
    <Route path="/" element={<h1>Home</h1>}>
      <Route path="home2" element={<h2>home 2</h2>} />
    </Route>

    <Route path="/authlayout" element={<h1>Auth layouts</h1>}>
      <Route path="login" element={<h1>Login</h1>} />
      <Route path="registation" element={<h2>Registation</h2>}></Route>
    </Route>
  </Routes>
</BrowserRouter>;
