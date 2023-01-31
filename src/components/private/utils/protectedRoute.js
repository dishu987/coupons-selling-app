import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, redirectPath = '/landing' }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
