import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  console.log(">>user", user);
  if (!user.token) return <Navigate to="/login" />;
  return <Outlet />;
};
export default PrivateRoute;
