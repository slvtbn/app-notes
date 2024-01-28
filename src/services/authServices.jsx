import Cookies from 'js-cookie';
import Api from './api';

export const register = async (userData) => {
  await Api.post(`/api/register`, userData)
    .then((response) => {
      const status = response.status;
      const data = response.data.data;

      console.log(status);

      return { status: status, data: data };
    })
    .catch((error) => {
      const status = error.response.status;

      return status;
    });
};

export const login = async (userData) => {
  await Api.post(`/api/login`, userData)
    .then((response) => {
      const getCookie = response.data.ci_session;
      const getGroup = response.data.data.group_id;

      const status = response.status;
      const data = response.data.data;

      Cookies.set('ci_session', getCookie);
      Cookies.set('group_id', getGroup);

      return { status: status, data: data };
    })
    .catch((error) => {
      const status = error.response.status;

      console.log(status);

      return status;
    });
};

export const logout = async () => {
  try {
    await Api.post(`/api/logout`);

    Cookies.remove('ci_session');
    Cookies.remove('group_id');

    console.log('Logout Successfull');
    window.alert('Logout Successfully');
  } catch (e) {
    console.log('Failed to Logout', e);
    throw e;
  }
};
