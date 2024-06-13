import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/api/auth";
import { logout } from "../redux/slices/authSlice";

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //로그인 안되어 있으면 public area로 보냄
  useEffect(() => {
    getUserInfo().then((response) => {
      if (response) {
        setUser({
          userId: response.id,
          nickname: response.nickname,
          avatar: response.avatar,
        });
      } else {
        setUser(null);
        navigate("/");
        localStorage.clear();
      }
    });
  }, []);

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };
  return (
    <>
      {location.pathname === "/home" ? (
        <StNav>
          <StUl>
            <StLink to="/home">HOME</StLink>
            <Link to="/profile">내 프로필</Link>
          </StUl>

          <StUl>
            <StUserProfile>
              {user && (
                <>
                  <StUserAvatar src={user.avatar} alt="User Avatar" />
                  <StUserName>{user.nickname}</StUserName>
                </>
              )}
            </StUserProfile>
            <li>
              <button onClick={handleLogout}>로그아웃</button>
            </li>
          </StUl>
        </StNav>
      ) : null}
      <StMain>{children}</StMain>
    </>
  );
};

export default Layout;

const StMain = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  box-sizing: initial;
`;

const StNav = styled.nav`
  background-color: rgb(51, 51, 51);
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0px;
  z-index: 100;
  position: sticky;
`;

const StLink = styled(Link)`
  color: #ffffff;
`;

const StUl = styled.ul`
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    color: #ffffff;
  }

  button {
    background-color: rgb(255, 77, 77);
    color: #ffffff;
    padding: 8px 12px;
  }
`;

const StUserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const StUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const StUserName = styled.span`
  color: white;
  margin-right: 20px;
`;
