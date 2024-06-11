import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import SignInPage from "./pages/Login/SignInPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/signIn" element={SignInPage} />
          <Route path="/logIn" element={LoginPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
