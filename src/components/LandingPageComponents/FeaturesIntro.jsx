import bg1 from "../../assets/images/bg1.svg";
import jobs from "../../assets/images/jobs.svg";
import complete from "../../assets/images/complete.svg";
import { BiCalendar, BiNews } from "react-icons/bi";
const FeaturesIntro = () => {
  return (
    <section
      className="h-[1000px] pt-[5rem] bg-no-repeat bg-cover md:h-[850px] "
      style={{
        backgroundImage: `url(${bg1}), linear-gradient(60deg, #7c3aed, #fbcfe8) `,
      }}
    >
      <div className=" flex flex-col gap-[2rem] md:gap-[4rem] items-center">
        <header>
          <h3 className="text-2xl font-medium text-white mb-4  md:text-3xl text-center">
            {" "}
            See job search management in a whole new way.
          </h3>
        </header>
        <div className="bg-white w-[90%] md:w-[80%] md:h-[350px] rounded-md grid grid-cols-1 justify-items-center md:grid-cols-2 gap-5 p-10 shadow-lg shadow-gray-300">
          <img src={jobs} className="h-[200px] md:h-[300px]" />
          <div className="flex flex-col gap-y-5">
            <div className="flex gap-x-4 ">
              <BiNews className="text-3xl text-purple-300" />
              <h4 className="text-xl font-medium">
                Catch up with new job postings
              </h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam, aliquid! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam, aliquid!
            </p>
          </div>
        </div>
        <div className="bg-white  w-[90%] md:w-[80%] md:h-[350px] rounded-md grid  grid-cols-1 justify-items-center md:grid-cols-2 gap-5 p-10 shadow-lg shadow-gray-300">
          <div className="flex flex-col gap-y-5">
            <div className="flex gap-x-4 ">
              <BiCalendar className="text-3xl text-purple-300" />
              <h4 className="text-xl font-medium">
                Stay on top of job application process{" "}
              </h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam, aliquid! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam, aliquid!
            </p>
          </div>
          <img src={complete} className="h-[200px] md:h-[290px]" />
        </div>
      </div>
    </section>
  );
};
export default FeaturesIntro;
