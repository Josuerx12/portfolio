import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/projetos",
        element: <Projects />,
      },
      {
        path: "/contato",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
