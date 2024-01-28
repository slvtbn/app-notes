import LabeledInput from "../../components/molecules/LabeledInput";
import LabeledMemo from "../../components/molecules/LabeledMemo";
import Button from "../../components/molecules/Button";

export default function EditNotes() {
  return (
    <>
      <div>
        <div className=" text-[#618264] text-[20px] font-[600] mb-[20px]  ">
          Update catatan mu segera!
        </div>

        <div className="w-1/2 flex flex-col gap-[12px] mt-[50px]">
          <LabeledInput
            label="Title"
            type="text"
            name="title"
            id="title"
            placeholder="Tambahkan Judul"
            className1="text-black"
            className2="bg-[#E1F0DA]"
          />
          <LabeledMemo
            label="Notes"
            name="title"
            id="title"
            className1="text-black"
            className2="bg-[#E1F0DA]"
          />

          <Button name="Simpan" className="w-1/2 mt-[40px] " />
        </div>
      </div>
    </>
  );
}
