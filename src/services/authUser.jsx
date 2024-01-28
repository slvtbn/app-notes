import axios from "axios";

const base_url = "http://62.72.13.124";

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${base_url}/api/users/`);
    return response;
  } catch (e) {
    console.log("Gagal mengambil data user", e);
    throw e;
  }
};
