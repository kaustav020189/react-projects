import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Routes/ErrorPage";
import Dashboard from "./Routes/Dashboard";
import Todo from "./Routes/TodoApp";
import ContactsApp from "./Routes/ContactsApp";
import RegexApp from "./Routes/RegexApp";
import ProjectsApp from "./Routes/ProjectsApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "todoApp",
        element: <Todo />,
      },
      {
        path: "contactsApp",
        element: <ContactsApp />,
      },
      {
        path: "regexApp",
        element: <RegexApp />,
      },
      {
        path: "projectsApp",
        element: <ProjectsApp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
