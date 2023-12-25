import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Routes/ErrorPage";
import Dashboard from "./Routes/Applications/Dashboard";
import Todo from "./Routes/Applications/TodoApp/TodoApp";
import ContactsApp from "./Routes/Applications/ContactsApp/ContactsApp";
import RegexApp from "./Routes/Applications/RegexApp/RegexApp";
import ProjectsApp from "./Routes/Applications/ProjectsApp/ProjectsApp";
import PaginationApp from "./Routes/Applications/PaginationApp/PaginationApp";
import ReactHooksApp from "./Routes/Applications/ReactHooksApp/ReactHooksApp";
import CustomHookApp from "./Routes/Applications/CustomHookApp/CustomHookApp";
import FormsApp from "./Routes/Applications/FormsApp/FormsApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "applications",
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
      {
        path: "paginationApp",
        element: <PaginationApp />,
      },
      {
        path: "reactHooksApp",
        element: <ReactHooksApp />,
      },
      {
        path: "customHookApp",
        element: <CustomHookApp />,
      },
      {
        path: "formsApp",
        element: <FormsApp />,
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
