import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInPage = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };
  // const [logInID, setLogInId] = useState("");
  // const [password, setPassWord] = useState("")
  // const [nickName, setNickName] = useState("")
  // const [newUser, setNewUser] = useState([]);

  // const onChangeId = () => {
  //   setLogInId
  // }

  return (
    <StSignInForm onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="로그인아이디(4~10글자 이내)"
        minLength={4}
        maxLength={10}
        required
      />
      <input
        type="password"
        placeholder="비밀번호(4~15글자 이내)"
        minLength={4}
        maxLength={15}
        required
      />
      <input
        type="text"
        placeholder="닉네임(1~10글자 이내)"
        minLength={1}
        maxLength={10}
        required
      />
      <StLink to="/home">회원가입</StLink>
      <StLink to="/">로그인</StLink>
    </StSignInForm>
  );
};
// 회원가입이 제대로 됐으면 얼럿과 함께 home.jsx이동로직 필요할듯 //

export default SignInPage;

// 아이디는 4~10글자로, 비밀번호는 4~15글자로, 닉네임은 1~10글자로 제한하세요.  --> 해야 함!

const StSignInForm = styled.div`
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
