import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import { getUserInfo } from "./lib/api/auth";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import PrivateRoute from "./shared/PrivateRoute";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = React.useState(null);

  // getUserInfo를 사용하는 로직 추가
  React.useEffect(() => {
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
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout user={user} setUser={setUser}>
          <Routes>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home user={user} />
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
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile setUser={setUser} user={user} />
                </PrivateRoute>
              }
            />
            <Route path="/signIn" element={<SignUpPage />} />
            <Route path="/" element={<LoginPage setUser={setUser} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
