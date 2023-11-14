import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import NoteState from "./context/NoteState";
import { router } from "./routes";
import { GlobalProvider } from "./context/GlobalProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
