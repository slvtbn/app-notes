export default function Button({ name, className, type }) {
  return (
    <>
      <button
        type={type}
        className={`bg-[#5f814f] text-white text-[14px] font-[500] p-[12px] rounded-[8px] tracking-widest hover:bg-[#99BC85] ${className} `}
      >
        {name}
      </button>
    </>
  );
}
