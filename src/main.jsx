import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizInfoContextProvider from "./context/QuizInfoContext";
import QuizScoreContextProvider from "./context/QuizScoreContext";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import About from "./routes/about";
import Index from "./routes/Index";
import Form from "./routes/Form";
import Play from "./routes/Play";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/play",
        element: <Play />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizScoreContextProvider>
      <QuizInfoContextProvider>
        <RouterProvider router={router} />
      </QuizInfoContextProvider>
    </QuizScoreContextProvider>
  </React.StrictMode>
);
