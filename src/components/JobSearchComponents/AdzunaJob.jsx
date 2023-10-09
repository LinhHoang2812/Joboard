import adzunaLogo from "../../assets/images/adzuna_logo.jpg";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/features/jobSlice";
const AdzunaJob = ({
  contract_time,
  location,
  title,
  company,
  redirect_url,
  description,
  created,
}) => {
  const dispatch = useDispatch();
  const [isReadmore, setReadmore] = useState(false);
  const navigate = useNavigate();
  const createPendingJob = () => {
    const data = {
      position: title,
      company: company.display_name,
      jobLocation: location.display_name,
      jobType:
        contract_time === "full_time"
          ? "full-time"
          : contract_time === "part_time"
          ? "part-time"
          : "full-time",
      status: "pending",
    };
    dispatch(createJob(data));
    navigate("/");
  };
  return (
    <article className=" rounded-lg border-[2px] border-gray-200 shadow-md shadow-gray-50 bg-white">
      <header className="p-2 px-4  flex flex-col items-start  lg:flex-row lg:items-center gap-2 lg:justify-between border-b-[1px] border-gray-200">
        <div className="flex gap-x-4 items-center">
          {company?.display_name && (
            <div className="flex justify-center items-center w-10 h-10 rounded-md bg-purple-500 text-lg text-white">
              {company.display_name.charAt(0)}
            </div>
          )}

          <div className="flex flex-col gap-y-1">
            <h3 className=" text-gray-700 font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{company.display_name}</p>
          </div>
        </div>

        <div className="grid gap-x-1 grid-cols-[1fr_1fr_auto] items-center min-w-[116px] max-w-[120px]">
          <Link to="https://www.adzuna.it" className="text-sm md:text-base">
            Jobs
          </Link>
          <span> by</span>
          <img src={adzunaLogo} className="w-[100%]" />
        </div>
      </header>
      {/* <div>{description.slice(0, 100)}</div> */}
      <div className="p-2 px-4 grid grid-cols-2 gap-5 ">
        <div className="flex items-center gap-x-4 text-gray-400 text-lg">
          <FaLocationArrow />{" "}
          <p className="text-gray-700 capitalize text-sm">
            {" "}
            {location.display_name}
          </p>
        </div>
        <div className="flex items-center gap-x-4 text-gray-400 text-lg">
          <FaCalendarAlt />{" "}
          <p className="text-gray-700 capitalize text-sm">
            {moment(created).format("MMM Do, YYYY")}
          </p>
        </div>
        {contract_time && (
          <div className="flex items-center gap-x-4 text-gray-400 text-lg">
            <FaBriefcase />{" "}
            <p className="text-gray-700 capitalize text-sm">{contract_time}</p>
          </div>
        )}
      </div>
      <div className="px-4 py-2 text-sm text-gray-700">
        <p>
          {description.slice(0, 250)}...
          <Link
            className="text-blue-700 leading-loose text-sm"
            onClick={() => setReadmore(!isReadmore)}
            to={redirect_url}
          >
            Read more
          </Link>
        </p>
      </div>
      <div className="px-4 py-4 flex gap-x-4">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <button
                className="px-2 py-1 text-purple-800 text-sm bg-purple-200 rounded-md shadow-md shadow-purple-200 "
                onClick={createPendingJob}
              >
                Add to joboard
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="p-2 text-xs text-purple-800 rounded-lg bg-purple-100 w-[150px] text-center">
                Add to your job board as pending job application
                <Tooltip.Arrow className="fill-purple-100" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Link
          to={redirect_url}
          className="px-2 py-1 text-emerald-800 text-sm rounded-md shadow-md shadow-emerald-100"
          style={{ backgroundColor: "#D1E7DD" }}
          target="_blank"
        >
          Apply
        </Link>
      </div>
    </article>
  );
};
export default AdzunaJob;
