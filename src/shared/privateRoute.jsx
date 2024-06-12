import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  element: Component,
  isPublic = false,
  isAuthenticated,
}) => {
  console.log("🚀 ~  isAuthenticated: 실행되고 싶어용", isAuthenticated);
  if (isPublic) {
    return isAuthenticated ? <Navigate to="/home" /> : <Component />;
  }
  return isAuthenticated ? <Component /> : <Navigate to="/signin" />;
};

export default PrivateRoute;

// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ element: Component, isPublic = false }) => {
//   const isLogin = useAuthStore((state) => state.isLogin);

//   if (isPublic) {
//     return isLogin ? <Navigate to="home" /> : element;
//     return isLogin ? element : <Navigate to="/signin" />
//   }

// export default PrivateRoute;
