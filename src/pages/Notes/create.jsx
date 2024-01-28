import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabeledInput from "../../components/molecules/LabeledInput";
import LabeledMemo from "../../components/molecules/LabeledMemo";
import Button from "../../components/molecules/Button";
// import { addNotes } from "../services/notesServices";

export default function AddNotes() {
  // const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   title: "",
  //   notes: "",
  // });

  // const handleOnChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await addNotes(formData);
  //     navigate("/notes");
  //     console.log("Catatan berhasil ditambahkan", response);
  //   } catch (e) {
  //     console.log("Catatan gagal ditambahkan", e);
  //   }
  // };
  return (
    <>
      <div>
        <div className=" text-[#618264] text-[20px] font-[600] mb-[20px]  ">
          Tulis Catatan mu disini!
        </div>

        <div className="w-1/2 flex flex-col gap-[12px] mt-[50px]">
          <form>
            <LabeledInput
              label="Title"
              type="text"
              name="title"
              id="title"
              placeholder="Tambahkan Judul"
              className1="text-black"
              className2="bg-[#E1F0DA]"
              // value={formData.title}
              // onChange={handleOnChange}
            />
            <LabeledMemo
              label="Notes"
              name="notes"
              id="notes"
              className1="text-black"
              className2="bg-[#E1F0DA]"
              // value={formData.notes}
              // onChange={handleOnChange}
            />

            <Button type="submit" name="Simpan" className="w-1/2 mt-[40px] " />
          </form>
        </div>
      </div>
    </>
  );
}
