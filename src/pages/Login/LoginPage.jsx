import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <input type="text">로그인 아이디</input>
      <input type="text">비밀번호</input>
      <button>로그인</button>
      <button onClick={() => Navigate("/signIn")}>회원가입</button>
    </LoginPageContainer>
  );
};

export default LoginPage;

//로그인창에서는 회원가입 버튼을 클릭하면 회원가입창으로, 회원가입창에서는 로그인 버튼을 누르면 로그인창으로 이동 되도록 구현해 보세요.
