import EditIcon from "../atoms/edit-icon";
import DeleteIcon from "../atoms/delete-icon";
import { Link } from "react-router-dom";

export default function CardNotes({ title, notes }) {
  return (
    <>
      <div className="bg-[#E1F0DA] h-[200px] rounded-[8px] shadow-lg p-[24px] relative ">
        <h1 className="text-[#79AC78] text-[18px] font-[600] mb-[12px]">{title}</h1>
        <p className="text-[14px]">{notes}</p>
        <div className="absolute  bottom-[24px] flex gap-[12px] right-[24px] ">
          <Link to="/notes/edit">
            <EditIcon />
          </Link>
          <Link to="/notes/delete">
            <DeleteIcon />
          </Link>
        </div>

        {/* <DeleteIcon /> */}
      </div>
    </>
  );
}
