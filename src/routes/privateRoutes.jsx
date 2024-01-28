import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export const AdminPrivateRoute = () => {
  const getCookie = Cookies.get('ci_session');
  const getGroup = Cookies.get('group_id');

  // eslint-disable-next-line eqeqeq
  const credential = getCookie != null && getGroup == '1';
  return credential ? <Outlet /> : <Navigate to="/login" replace />;
};

export const ClientPrivateRoute = () => {
  const getCookie = Cookies.get('ci_session');
  const getGroup = Cookies.get('group_id');

  // eslint-disable-next-line eqeqeq
  const credential = getCookie != null && getGroup == '3';
  return credential ? <Outlet /> : <Navigate to="/login" replace />;
};
