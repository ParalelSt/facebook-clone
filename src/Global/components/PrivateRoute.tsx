import { Navigate, Outlet } from "react-router-dom";

export interface PrivateRouteProps {
  isAuthenticated: boolean;
}

function PrivateRoute({ isAuthenticated }: PrivateRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
