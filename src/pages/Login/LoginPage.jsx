import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const Navigate = useNavigate();
  return (
    <StLoginPageContainer>
      <input type="text">로그인 아이디</input>
      <input type="text">비밀번호</input>
      <button>로그인</button>
      <button onClick={() => Navigate("/signIn")}>회원가입</button>
    </StLoginPageContainer>
  );
};

export default LoginPage;

//로그인창에서는 회원가입 버튼을 클릭하면 회원가입창으로, 회원가입창에서는 로그인 버튼을 누르면 로그인창으로 이동 되도록 구현해 보세요.

const StLoginPageContainer = styled.div`
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
