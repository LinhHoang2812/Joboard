const FormRow = ({ type, name, placeholder, defaultValue }) => {
  return (
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="p-1 border-[2px] w-[90%] text-sm border-gray-200 my-3 bg-gray-100 hover:bg-gray-200"
    />
  );
};
export default FormRow;
