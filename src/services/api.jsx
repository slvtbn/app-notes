import axios from 'axios';
import Cookies from 'js-cookie';

const Api = axios.create({
  // set endpoint Api
  baseURL: 'http://62.72.13.124',

  // set header
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.statusCode) {
      // remove token
      Cookies.remove('ci_session');
      Cookies.remove('group_id');

      // redirect "/login"
      window.location = '/login';
    } else {
      return Promise.reject(error);
    }
  }
);

export default Api;
