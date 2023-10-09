import SearchForm from "../components/JobSearchComponents/SearchForm";
import { useGetAdzunaJobsQuery } from "../api/AdzunaApi";
import { useLoaderData } from "react-router-dom";
import SubSearchForm from "../components/JobSearchComponents/SubSearchForm";
import AdzunaJob from "../components/JobSearchComponents/AdzunaJob";
import Pagination from "../components/JobSearchComponents/Pagination";
import ClipLoader from "react-spinners/ClipLoader";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const what = new URLSearchParams(url.search).get("what") || "";
  const where = new URLSearchParams(url.search).get("where") || "";
  const sort_by = new URLSearchParams(url.search).get("sort_by") || "";
  const page = new URLSearchParams(url.search).get("page") || 1;
  const contract = new URLSearchParams(url.search).get("contract") || false;
  const start = new URLSearchParams(url.search).get("start") || 1;
  const max = new URLSearchParams(url.search).get("max") || 8;
  return {
    what,
    where,
    sort_by,
    page,
    contract: JSON.parse(contract),
    start: parseInt(start),
    max: parseInt(max),
  };
};
const SearchJobsPage = () => {
  const { what, where, sort_by, page, contract, start, max } = useLoaderData();
  const { data: adzunaJobs, isFetching } = useGetAdzunaJobsQuery({
    page,
    what,
    where,
    sort_by,
    contract,
  });

  return (
    <div className="px-5 py-20 md:px-10  flex flex-col justify-center gap-y-10 min-h-screen ">
      <SearchForm what={what} where={where} />
      <SubSearchForm
        totalJobs={adzunaJobs?.count}
        contract={contract}
        sort_by={sort_by}
      />
      {isFetching ? (
        <ClipLoader
          color="#bd6fca"
          size={80}
          cssOverride={{
            marginLeft: "50%",
            translateX: "-50%",
            marginRight: "5rem",
          }}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {adzunaJobs &&
              adzunaJobs.results.map((job) => (
                <AdzunaJob {...job} key={job.id} />
              ))}
          </div>
          <Pagination
            totalJobs={adzunaJobs?.count}
            currentPage={page}
            start={start}
            max={max}
          />
        </>
      )}
    </div>
  );
};
export default SearchJobsPage;
