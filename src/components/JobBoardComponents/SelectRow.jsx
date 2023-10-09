const SelectRow = ({ label, name, options, defaultValue }) => {
  return (
    <div className="flex  flex-col gap-y-2">
      <label htmlFor={name} className="font-semibold text-gray-500 capitalize">
        {label}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="h-[45px] border-b-[2px] border-gray-200 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} className="">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectRow;
