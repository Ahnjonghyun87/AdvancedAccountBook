import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInPage = () => {
  const Navigate = useNavigate();
  return (
    <StSignInPageContainer>
      <input type="text">로그인 아이디</input>
      <input type="text">비밀번호</input>
      <input type="text">닉네임</input>
      <button>회원가입</button>
      <button onClick={() => Navigate("/logIn")}>로그인</button>
    </StSignInPageContainer>
  );
};

export default SignInPage;

// 아이디는 4~10글자로, 비밀번호는 4~15글자로, 닉네임은 1~10글자로 제한하세요.

const StSignInPageContainer = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 8px;

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: rgb(0, 123, 255);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;
