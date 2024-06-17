import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    dispatch(logout());
  }

  return children;
};

export default PrivateRoute;
