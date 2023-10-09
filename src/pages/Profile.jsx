import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/features/userSlice";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";
import { getJobs } from "../redux/features/allJobsSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  const { interviewJobs } = useSelector((store) => store.allJobs);
  useEffect(() => {
    if (!interviewJobs) {
      dispatch(getJobs());
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    dispatch(updateUser(data));
  };
  return (
    <div className="px-5 py-20 md:px-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-x-10  ">
      <div className="flex flex-col h-full w-full items-center">
        <form
          className="pt-10 pb-20 px-5 bg-white flex flex-col gap-y-10"
          onSubmit={handleOnSubmit}
        >
          <div className="flex flex-col xl:flex-row  gap-5">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-semibold text-gray-500">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={user.name}
                className=" border-[2px] border-gray-200 bg-gray-100 rounded-lg px-5 py-2 focus:outline-none shadow-lg shadow-gray-50"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="lastName" className="font-semibold text-gray-500">
                Your Last Name
              </label>
              <input
                id="lastNname"
                type="text"
                name="lastName"
                placeholder="insert your last name"
                defaultValue={
                  user.lastName !== "lastName" ? user.lastName : null
                }
                className=" border-[2px] border-gray-200 bg-gray-100 rounded-lg px-5 py-2 focus:outline-none shadow-lg shadow-gray-50"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="font-semibold text-gray-500">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              defaultValue={user.email}
              className=" border-[2px] border-gray-200 bg-gray-100 rounded-lg px-5 py-2 focus:outline-none shadow-lg shadow-gray-50"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="location" className="font-semibold text-gray-500">
              Your Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="insert your city"
              defaultValue={user.location !== "my city" ? user.location : null}
              className=" border-[2px] border-gray-200 bg-gray-100 rounded-lg px-5 py-2 focus:outline-none shadow-lg shadow-gray-50"
            />
          </div>
          {isLoading && <ClipLoader color="#c476e3" />}
          <button
            type="submit"
            className="w-fit px-5 py-1 bg-gradient-to-r bg-gray-100 from-purple-400 to-purple-600 rounded-lg text-white"
          >
            Save changes
          </button>
        </form>
      </div>
      <div className="hidden lg:flex flex-col gap-y-5">
        <h2 className="text-xl text-gray-500 font-semibold">
          Scheduled Interviews
        </h2>
        {interviewJobs && (
          <div className="py-5 flex flex-col gap-y-5">
            {interviewJobs.map(({ id, company, position }) => (
              <article key={id}>
                <div className="flex gap-x-4 items-center">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full bg-purple-500 text-lg text-white">
                    {company.charAt(0)}
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <h3 className=" text-gray-700 font-semibold">{position}</h3>

                    <p className="text-sm text-gray-500">{company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
