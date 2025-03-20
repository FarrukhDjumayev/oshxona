import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./pages/Login/Login";
import {StrictMode} from "react"
import RootGirgitton from "./pages/Girgitton/Root";
import Oshpaz from "./pages/Oshpaz/oshpaz";
import Menu from "./pages/Girgitton/Menu";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<App />}>
          <Route path="/girgitton" element={<RootGirgitton/>} />
          <Route path="/client/:client_id" element={<Menu/>} />
          <Route path="/oshpaz" element={<Oshpaz/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,   
);
