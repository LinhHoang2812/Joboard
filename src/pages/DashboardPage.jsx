import { useDispatch, useSelector } from "react-redux";
import { getJobs, getStats } from "../redux/features/allJobsSlice";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useEffect } from "react";

const DashboardPage = () => {
  const { stats, monthlyApplications, jobs } = useSelector(
    (store) => store.allJobs
  );
  const COLORS = ["#908fe2", "#a2cbc3"];
  const data = [
    {
      type: "full-time",
      count: jobs?.filter((job) => job.jobType === "full-time").length || 0,
    },
    {
      type: "part-time",
      count: jobs?.filter((job) => job.jobType === "part-time").length || 0,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    if (!stats || !monthlyApplications) {
      dispatch(getStats());
    }
  }, []);
  useEffect(() => {
    if (!jobs) {
      dispatch(getJobs());
    }
  }, []);

  return (
    <div className="py-20 px-5 md:px-10 flex flex-col gap-y-20">
      <div className="grid grid-col-1 lg:grid-cols-3 gap-x-16 gap-y-10">
        <div className="px-10 py-5 rounded-md bg-white border-b-8 border-b-yellow-400 flex flex-col gap-y-5">
          <div className="flex justify-between items-center ">
            <span className="text-5xl font-medium leading-loose text-yellow-400">
              {stats?.pending}
            </span>
            <div className="text-4xl text-yellow-400 p-5 bg-yellow-100 rounded-md">
              <FaSuitcaseRolling />
            </div>
          </div>
          <p>Pending Applications</p>
        </div>

        <div className="px-10 py-5 rounded-md bg-white border-b-8 border-b-blue-400 flex flex-col gap-y-5">
          <div className="flex justify-between items-center ">
            <span className="text-5xl font-medium leading-loose text-blue-400">
              {stats?.interview}
            </span>
            <div className="text-4xl text-blue-400 p-5 bg-blue-100 rounded-md">
              <FaCalendarCheck />
            </div>
          </div>
          <p>Interview Applications</p>
        </div>
        <div className="px-10 py-5 rounded-md bg-white border-b-8 border-b-red-400 flex flex-col gap-y-5">
          <div className="flex justify-between items-center ">
            <span className="text-5xl font-medium leading-loose text-red-400">
              {stats?.declined}
            </span>
            <div className="text-4xl text-red-400 p-5 bg-red-100 rounded-md">
              <FaBug />
            </div>
          </div>
          <p>Declined Applications</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-10 ">
        <div className="px-1 md:px-5 pt-10 flex flex-col gap-y-10 bg-white rounded-md">
          <h3 className="text-xl md:text-4xl md:leading-loose font-medium text-center text-gray-500">
            Monthly Applications
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={monthlyApplications || []}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="px-1 md:px-5 pt-10 flex flex-col gap-y-10 bg-white rounded-md">
          <h3 className="text-xl md:text-4xl md:leading-loose font-medium text-center text-gray-500">
            Job Type
          </h3>
          <ResponsiveContainer width="100%">
            <PieChart width={300} height={300}>
              <Pie data={data} fill="#8884d8" dataKey="count" label>
                {data.map((entry, index) => (
                  <Cell
                    name={entry.type}
                    fill={COLORS[index % COLORS.length]}
                    key={index}
                  />
                ))}
              </Pie>
              <Legend layout="horizontal" verticalAlign="top" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
