import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직 필요
    navigate("/");
  };
  return (
    <div>
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
