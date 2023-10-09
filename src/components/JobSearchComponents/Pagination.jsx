import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
const Pagination = ({ totalJobs, currentPage, max, start }) => {
  const totalPages = Math.ceil(totalJobs / 50) || 0;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleValueChange = (value) => {
    let params = {};
    setSearchParams((prev) => {
      for (const [key, value] of prev.entries()) {
        params = { ...params, [key]: value };
      }

      return {
        ...params,
        page: value,
        start: value === 1 ? 1 : start,
        max: value === 1 ? 8 : max,
      };
    });
  };

  const handlePrevious = () => {
    let params = {};

    setSearchParams((prev) => {
      for (const [key, value] of prev.entries()) {
        params = { ...params, [key]: value };
      }

      return {
        ...params,
        start: start - 3,
        max: max - 3 < 8 ? 8 : max - 3,
        page: max - 4,
      };
    });
  };
  const handleNext = () => {
    let params = {};
    setSearchParams((prev) => {
      for (const [key, value] of prev.entries()) {
        params = { ...params, [key]: value };
      }

      return {
        ...params,
        start: start + 3,
        max: max + 3 > totalJobs ? totalJobs : max + 3 > 30 ? 30 : max + 3,
        page: max + 1,
      };
    });
  };

  return (
    <div className="py-10 ">
      <div className="flex justify-center text-gray-700 gap-x-5">
        {totalPages > 1 && (
          <button
            className={
              parseInt(currentPage) === 1
                ? "text-white w-8 h-8 bg-gray-600 rounded-full "
                : ""
            }
            onClick={() => handleValueChange(1)}
          >
            1
          </button>
        )}
        {start > 1 && (
          <button
            onClick={() => {
              handlePrevious();
            }}
          >
            <HiOutlineDotsHorizontal />
          </button>
        )}

        {Array.from(
          { length: totalPages > max ? max - 1 : totalPages - 1 },
          (_, index) => index + 2
        ).map((value) => {
          if (value > start) {
            return (
              <button
                key={value}
                className={
                  parseInt(currentPage) === value
                    ? "text-white w-8 h-8 bg-gray-600 rounded-full "
                    : ""
                }
                onClick={() => {
                  handleValueChange(value);
                }}
              >
                {value}
              </button>
            );
          }
        })}
        {max < totalPages && max < 30 && (
          <button onClick={handleNext}>
            <HiOutlineDotsHorizontal />
          </button>
        )}
      </div>
    </div>
  );
};
export default Pagination;
