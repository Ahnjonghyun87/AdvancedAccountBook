import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "../GlobalStyles";
import Layout from "../components/Layout";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/LoginPage";
import SignInPage from "../pages/Login/SignInPage";

const router = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default router;
