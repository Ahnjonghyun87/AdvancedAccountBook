import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../lib/api/auth";

const SignInPage = () => {
  const navigate = useNavigate();

  const [logInID, setLogInId] = useState("");
  const [password, setPassWord] = useState("");
  const [nickName, setNickName] = useState("");

  const onAddUser = async () => {
    if (logInID.length < 4 || logInID.length > 10) {
      alert("아이디는 4~10글자여야 합니다.");
      return;
    } else if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4~15글자여야 합니다.");
      return;
    } else if (nickName.length < 1 || nickName.length > 10) {
      alert("닉네임은 1~10글자여야 합니다.");
      return;
    }

    const response = await register({
      id: logInID,
      password: password,
      nickname: nickName,
    });
    console.log("회원가입 api 응답 :", response);
    if (response) {
      confirm("회원가입이 완료 되었습니다!");
      navigate("/");
    }
  };

  // if (response) {
  //   alert("회원가입이 완료되었습니다!");
  //   navigate("/");
  // }
  //if문은 조건이 완료시에 로그인 화면으로 돌아가 사용자가 로그인 하게끔.

  //   const newUser = ({ id, password, nickName }) => {
  //     setNewUser((prev) => {
  //       [...prev, newUser];
  //     });
  //   };
  // }; ==> 이렇게 todo에서 썻던 방식은 필요없고 api에서 가져오는 방식 필요

  const onSubmit = (e) => {
    e.preventDefault();
    onAddUser();
  };

  return (
    <StSignInForm onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="로그인아이디(4~10글자 이내)"
        minLength={4}
        maxLength={10}
        required
        onChange={(e) => setLogInId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호(4~15글자 이내)"
        minLength={4}
        maxLength={15}
        required
        onChange={(e) => setPassWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="닉네임(1~10글자 이내)"
        minLength={1}
        maxLength={10}
        required
        onChange={(e) => setNickName(e.target.value)}
      />
      <StButton>회원가입</StButton>
      <StLink to="/">로그인</StLink>
    </StSignInForm>
  );
};
//온클릭에 onAddUder가 맞는지 onSubmit이 맞는지..//
// 회원가입이 제대로 됐으면 얼럿과 함께 home.jsx이동로직 필요할듯 //

export default SignInPage;

// 아이디는 4~10글자로, 비밀번호는 4~15글자로, 닉네임은 1~10글자로 제한하세요.  --> 해야 함!

const StSignInForm = styled.form`
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
`;

const StLink = styled(Link)`
  width: 100%;
  padding: 10px;
  background-color: rgb(0, 123, 255);
  font-size: 13px;
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  display: block;

  &:hover {
    background-color: rgb(0, 102, 204);
  }
`;

const StButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(0, 123, 255);
  font-size: 13px;
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  display: block;

  &:hover {
    background-color: rgb(0, 102, 204);
  }
`;
