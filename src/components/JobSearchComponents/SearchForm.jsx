import { Form, useSearchParams } from "react-router-dom";

const SearchForm = ({ what, where }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    let params = {};
    setSearchParams((prev) => {
      for (const [key, value] of prev.entries()) {
        params = { ...params, [key]: value };
      }

      return { ...params, ...data };
    });
  };
  return (
    <Form
      className="px-8 py-16 flex flex-col items-center gap-5 md:flex-row bg-white rounded-lg hover:shadow-lg hover:shadow-gray-200"
      // onSubmit={handleSubmit}
    >
      <input
        type="search"
        name="what"
        placeholder="Search by keyword"
        defaultValue={what}
        className="w-[90%] border-[2px] border-gray-200  rounded-lg px-5 py-2 focus:outline-none shadow-lg shadow-gray-50"
      />
      <input
        type="search"
        name="where"
        placeholder="City in Italy ex: Bologna"
        defaultValue={where}
        className="w-[90%] border-[2px] border-gray-200  rounded-lg px-5 py-2 focus:outline-none shadow-lg shadow-gray-50"
      />

      <button
        type="submit"
        className="w-fit px-5 py-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg text-white"
      >
        Search
      </button>
    </Form>
  );
};
export default SearchForm;
