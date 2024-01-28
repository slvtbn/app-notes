import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Api from '../../services/api';
import { getNotes } from '../../services/notesServices';

export default function AllNotes() {
  const [notes, setNotes] = useState([]);

  // Cookies.get('ci_session');

  const getCookie = Cookies.get('ci_session');

  const fetchData = async () => {
    await Api.get(`/api/notes/`, {
      headers: {
        Cookie: `${getCookie}`,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).then((response) => {
      console.log(response);
      setNotes(response.data.data);
      return response;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className=" text-[#618264] text-[20px] font-[600] mb-[20px]  ">
        All Notes
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Notes</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">
                  {note.note_id}
                </td>
                <td className="py-2 px-4 border-b text-center"></td>
                <td className="py-2 px-4 border-b text-center">Title</td>
                <td className="py-2 px-4 border-b text-center">
                  Ini notes dari user wkwkwk
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
