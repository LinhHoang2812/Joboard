import * as Tabs from "@radix-ui/react-tabs";
import { useMediaQuery } from "react-responsive";
import boards from "../../assets/images/boards.svg";
import dashboard from "../../assets/images/dashboard.svg";
import jobSearch from "../../assets/images/jobSearch.svg";
import Slider from "react-slick";
const TabIntro = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <section className="pb-10 px-10 md:px-[7rem] bg-gradient-to-b from-white to-purple-100 ">
      <h4 className="mb-4 text-lg  md:text-xl ">Joboard 101</h4>
      <h3 className="mb-4 text-xl font-semibold md:text-3xl">
        A productivity Powerhouse
      </h3>
      <p className="md:w-[50%] text-lg leading-loose">
        Simple, flexible, and powerful. All it takes are boards, lists, and
        cards to get a clear view of job application process.
      </p>
      {isMobile ? (
        <Slider {...settings}>
          <div className="!flex flex-col gap-8 ">
            <img src={boards} className="h-[20rem]" />
            <div className="flex flex-col gap-y-4 rounded-md p-4  border-l-4 bg-white border-indigo-500 shadow-lg shadow-gray-300">
              <h5 className="text-lg font-medium ">Boards</h5>
              <p className="text-left text-md">
                Joboard boards keeps your work application organized. In a
                glance, we can see all the applications from "I want to apply
                for this job" to "Wow, I got the offer"
              </p>
            </div>
          </div>
          <div className="!flex flex-col gap-8 ">
            <img src={jobSearch} className="h-[20rem] ml-4" />
            <div className="flex flex-col gap-y-4 rounded-md p-4  border-l-4 bg-white border-indigo-500 shadow-lg shadow-gray-300">
              <h5 className="text-lg font-medium ">Job Search</h5>
              <p className="text-left text-md">
                Search for any job that you are interested in any location
              </p>
            </div>
          </div>

          <div className="!flex flex-col gap-8">
            <img src={dashboard} className="h-[20rem]" />
            <div className="flex flex-col gap-y-4 rounded-md p-4  border-l-4 bg-white border-indigo-500 shadow-lg shadow-gray-300">
              <h5 className="text-lg font-medium ">Dashboard</h5>
              <p className="text-left text-md">
                Yes! We generate dashboard of your applications so that you can
                easily view the result of your job search
              </p>
            </div>
          </div>
        </Slider>
      ) : (
        <Tabs.Root
          defaultValue="tab-1"
          className="py-10 md:grid md:grid-cols-[1.5fr_2fr] md:gap-[5rem]"
        >
          <Tabs.List className="md:flex md:flex-col md:gap-y-5">
            <Tabs.Trigger
              value="tab-1"
              className="flex flex-col gap-y-4 rounded-md p-4 border-l-8 border-transparent data-[state=active]:bg-white  data-[state=active]:border-indigo-500 data-[state=active]:shadow-lg data-[state=active]:shadow-gray-300"
            >
              <h5 className="text-lg font-medium ">Boards</h5>
              <p className="text-left text-md">
                Joboard boards keeps your work application organized. In a
                glance, we can see all the applications from "I want to apply
                for this job" to "Wow, I got the offer"
              </p>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab-2"
              className="flex flex-col gap-y-4 rounded-md p-4 border-l-8 border-transparent data-[state=active]:bg-white   data-[state=active]:border-indigo-500 data-[state=active]:shadow-lg data-[state=active]:shadow-gray-300"
            >
              <h5 className="text-lg font-medium ">Job Search</h5>
              <p className="text-left text-md">
                Search for any job that you are interested in any location
              </p>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab-3"
              className="flex flex-col gap-y-4 rounded-md p-4  border-l-8 border-transparent data-[state=active]:bg-white  data-[state=active]:border-indigo-500 data-[state=active]:shadow-lg data-[state=active]:shadow-gray-300"
            >
              <h5 className="text-lg font-medium ">Dashboard</h5>
              <p className="text-left text-md">
                Yes! We generate dashboard of your applications so that you can
                easily view the result of your job search
              </p>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab-1">
            <img src={boards} className="h-[27rem]" />
          </Tabs.Content>
          <Tabs.Content value="tab-2">
            <img src={jobSearch} className="h-[27rem]" />
          </Tabs.Content>
          <Tabs.Content value="tab-3">
            <img src={dashboard} className="mt-12 h-[27rem]" />
          </Tabs.Content>
        </Tabs.Root>
      )}
    </section>
  );
};
export default TabIntro;
