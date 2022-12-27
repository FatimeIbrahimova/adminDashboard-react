import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/route";
import './App.css';

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
