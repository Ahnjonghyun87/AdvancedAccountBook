import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    } else {
      alert("회원가입이 완료되었습니다!");
      navigate("/home");
    }

    const response = await register({
      id: logInID,
      password: password,
      nickname: nickName,
    });
    console.log("api응답값,", response);
  };
  //   const newUser = ({ id, password, nickName }) => {
  //     setNewUser((prev) => {
  //       [...prev, newUser];
  //     });
  //   };
  // };
  //api호출해야 하는 부분이라함

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
      <StLink to="#" onClick={onSubmit}>
        회원가입
      </StLink>
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

const StLink = styled.button`
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
