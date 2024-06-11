import React from "react";
import { Navigate } from "react-router-dom";

const SignInPage = () => {
  return (
    <SigninPageContainer>
      <input type="text">로그인 아이디</input>
      <input type="text">비밀번호</input>
      <input type="text">닉네임</input>
      <button>회원가입</button>
      <button onClick={() => Navigate("/logIn")}>로그인</button>
    </SigninPageContainer>
  );
};

export default SignInPage;

// 아이디는 4~10글자로, 비밀번호는 4~15글자로, 닉네임은 1~10글자로 제한하세요.
