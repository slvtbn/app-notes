export default function LabeledInput({
  label,
  name,
  id,
  type,
  className1,
  className2,
  placeholder,
  onChange,
  value,
}) {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={label} className={`text-white text-[18px] font-[500] ${className1} `}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={` p-[12px] rounded-[8px] outline-none mt-[10px] text-[14px] ${className2}  `}
        />
      </div>
    </>
  );
}
