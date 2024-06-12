import { Link, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // 로그아웃 로직 필요
    navigate("/");
  };
  return (
    <div>
      {location.pathname === "/home" ? (
        <nav>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/profile">내 프로필</Link>
            </li>
            <li>
              <button onClick={handleLogout}>로그아웃</button>
            </li>
          </ul>
        </nav>
      ) : null}
      <main>{children}</main>
    </div>
  );
};

export default Layout;

// const StNaviBar = styled.div`
//   background-color: rgb(51, 51, 51);
//   color: white;
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   width: calc(100% - 2rem);
//   top: 0px;
//   z-index: 1000;
//   max-width: 1240px;
// `;
