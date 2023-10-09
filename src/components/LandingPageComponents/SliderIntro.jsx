import Slider from "react-slick";
import { workFlow } from "../../utils/data";
import { GrNext, GrPrevious } from "react-icons/gr";
const SliderIntro = () => {
  const settings = {
    className: "slider-div",
    initialSlide: 0,
    slidesToShow: 3.2,
    slidesToScroll: 3,
    swipeToSlide: true,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };
  return (
    <section className="py-20 pl-10 md:pl-[7rem]">
      <h4 className="mb-4 text-lg  md:text-xl ">Joboard in action</h4>
      <h3 className="mb-[4rem] text-xl font-semibold md:text-3xl">
        Workflow for your job search and job application
      </h3>
      <Slider {...settings}>
        {workFlow.map(({ title, text, icon, color }) => (
          <article
            key={title}
            className="w-[100%] h-[260px]   shadow-lg  !border-0 shadow-gray-250 rounded-lg hover:shadow-gray-300 "
          >
            <div
              className="p-4 rounded-t-lg   h-[40px]"
              style={{ backgroundColor: color }}
            >
              <div
                className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-md text-2xl"
                style={{ color }}
              >
                {icon}
              </div>
            </div>
            <div className="px-[1rem] py-[2rem] flex flex-col !gap-y-[1rem]">
              <h5>{title}</h5>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};
export default SliderIntro;

export const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",

        top: "-3rem",
        right: "3rem",
        background: "#f5f5f4",
        position: "absolute",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <GrNext />
    </div>
  );
};

export const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        width: "2rem",
        height: "2rem",
        background: "#f5f5f4",
        top: "-3rem",
        right: "6rem",
        left: "auto",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        color: "red",
      }}
      onClick={onClick}
    >
      <GrPrevious style={{}} />
    </div>
  );
};
