import Login from "../LoginComponent/Login";
import Main from "../Main/Main";
import Product from "../Product/Product";
import "./Styles/App.css";
import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AuthProvider from "../AuthProvider/AuthProvider";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  function fallbackRender({ error }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <ErrorBoundary fallbackRender={fallbackRender}>
                  <Main />
                </ErrorBoundary>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
