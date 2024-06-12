import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../lib/api/auth";

const LoginPage = ({ loginAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logInID, setLogInId] = useState("");
  const [password, setPassWord] = useState("");

  const handleLogIn = async () => {
    console.log("id", logInID);
    console.log("password:", password);
    const response = await login({ id: logInID, password: password });
    console.log("로그인 api 응답값:", response);

    if (response) {
      dispatch(loginAuth()); // 로그인 성공 시 loginAuth 액션 디스패치
      navigate("/home");
    } else {
      alert("로그인 실패. 다시 시도해주세요.");
    }
  };

  return (
    <StLoginForm>
      <input
        type="text"
        placeholder="로그인아이디"
        onChange={(e) => setLogInId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setPassWord(e.target.value)}
      />
      <button onClick={handleLogIn}>로그인</button>
      <button onClick={() => navigate("/signIn")}>회원가입</button>
    </StLoginForm>
  );
};

//인풋에 비밀번호를 쓸 때 *로 보이게 하기

export default LoginPage;

//로그인창에서는 회원가입 버튼을 클릭하면 회원가입창으로, 회원가입창에서는 로그인 버튼을 누르면 로그인창으로 이동 되도록 구현해 보세요.

const StLoginForm = styled.div`
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
