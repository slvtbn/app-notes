import CardNotes from "../../components/molecules/card-notes";
import Button from "../../components/molecules/Button";
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <>
      <div className=" text-[#618264] text-[20px] font-[600] mb-[20px]  ">My Notes</div>
      <div className="fixed bottom-10 right-10 ">
        <Link to="/notes/add">
          <Button name="+ Tulis note mu" className="shadow-xl" />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-[18px]">
        <CardNotes title="Halo" notes="Ini cuma sekedar tes notes saja ya" />
        <CardNotes title="Halo" notes="Ini cuma sekedar tes notes saja ya" />
        <CardNotes title="Halo" notes="Ini cuma sekedar tes notes saja ya" />
        <CardNotes title="Halo" notes="Ini cuma sekedar tes notes saja ya" />
        <CardNotes title="Halo" notes="Ini cuma sekedar tes notes saja ya" />
        <CardNotes title="Halo" notes="Ini cuma sekedar tes notes saja ya" />
      </div>
    </>
  );
}
