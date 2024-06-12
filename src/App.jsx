import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import PrivateRoute from "./shared/PrivateRoute";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/detail/:id"
              element={
                <PrivateRoute>
                  <Detail />
                </PrivateRoute>
              }
            />
            <Route path="/signIn" element={<SignUpPage />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
