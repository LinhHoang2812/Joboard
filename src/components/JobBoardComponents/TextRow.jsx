const TextRow = ({ label, type, name, defaultValue }) => {
  return (
    <div className="flex  flex-col gap-y-2">
      <label htmlFor={name} className="font-semibold text-gray-500 capitalize">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="border-[2px] border-gray-200 bg-gray-100 rounded-lg px-5 py-2 focus:outline-none shadow-lg shadow-gray-50 capitalize"
      />
    </div>
  );
};
export default TextRow;
