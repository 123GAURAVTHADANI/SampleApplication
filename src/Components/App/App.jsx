import Login from "../LoginComponent/Login";
import Main from "../Main/Main";
import Product from "../Product/Product";
import "./Styles/App.css";
import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AuthProvider from "../AuthProvider/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} /> 
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
