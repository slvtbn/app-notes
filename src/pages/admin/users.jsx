import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import DeleteIcon from '../../components/atoms/delete-icon';

const base_url = 'http://62.72.13.124';

export default function Users() {
  const [users, setUsers] = useState();
  const getCookie = Cookies.get('ci_session');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/api/users/`, {
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        });
        setUsers(response.data);
        console.log(response.data);
      } catch (e) {
        console.log('Gagal mengambil data user', e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" text-[#618264] text-[20px] font-[600] mb-[20px]  ">
        All Users
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          {/* <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b text-center">user.id</td>
                <td className="py-2 px-4 border-b text-center">user.name</td>
                <td className="py-2 px-4 border-b text-center">user.username</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className=" text-white px-2 py-1 rounded ml-2">
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </>
  );
}
