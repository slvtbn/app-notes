import Cookies from 'js-cookie';
import Api from './api';

export const addNotes = async (notesData) => {
  try {
    const response = await Api.post(`/api/notes/`, notesData);
    return response.data;
  } catch (e) {
    console.log('Gagal menambah catatan');
    throw e;
  }
};

export const getNotes = async () => {
  const getCookie = Cookies.get('ci_session');

  await Api.get(`/api/notes/`, {
    headers: {
      Cookie: getCookie,
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};
