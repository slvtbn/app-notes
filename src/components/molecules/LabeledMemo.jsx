export default function LabeledMemo({ label, name, id, value, className1, className2 }) {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={label} className={`text-white text-[18px] font-[500] ${className1} `}>
          {label}
        </label>
        <textarea
          name={name}
          id={id}
          className={`outline-none h-[150px] p-[12px] rounded-[8px] text-[14px] ${className2}  `}
        >
          {value}
        </textarea>
      </div>
    </>
  );
}
