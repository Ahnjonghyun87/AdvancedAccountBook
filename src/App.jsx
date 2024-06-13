import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import { getUserInfo } from "./lib/api/auth";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import PrivateRoute from "./shared/PrivateRoute";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo().then((response) => {
      if (response) {
        setUser({
          userId: response.id,
          nickname: response.nickname,
          avatar: response.avatar,
        });
      }
    });
  }, []);

  console.log("로그인된 유저 정보:", user);

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
                  <Home setPosts={setPosts} />
                </PrivateRoute>
              }
            />
            <Route
              path="/detail/:id"
              element={
                <PrivateRoute>
                  <Detail setPosts={setPosts} />
                </PrivateRoute>
              }
            />
            <Route path="/signIn" element={<SignUpPage />} />
            <Route path="/" element={<LoginPage setUser={setUser} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
