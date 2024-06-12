import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import SignInPage from "./pages/Login/SignInPage";
import PrivateRoute from "./shared/privateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/signIn" element={<SignInPage />} />
          <Route
            path="/"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route element={<Layout />}>
            <Route
              path="/home"
              element={
                <PrivateRoute
                  element={Home}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/detail/:id"
              element={
                <PrivateRoute
                  element={Detail}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
