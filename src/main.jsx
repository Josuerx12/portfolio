import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.sass";
import "./i18n/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Error from "./Routes/Error.jsx";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Projects from "./Routes/Projects.jsx";
import Contact from "./Routes/Contact.jsx";

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
