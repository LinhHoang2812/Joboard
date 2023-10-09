import Slider from "react-slick";
import quote from "../../assets/images/quote.svg";
import { SampleNextArrow, SamplePrevArrow } from "./SliderIntro";
import { reviews } from "../../utils/data";
const Quote = () => {
  const settings = {
    className: "slider-quote",
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: false,
          dots: true,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };
  return (
    <section className="pt-[15rem] px-10 pb-20 md:px-[7rem] flex flex-col gap-y-10 bg-gradient-to-b from-white via-violet-50 to-white">
      <header>
        <h4 className="mb-4 text-lg  md:text-xl ">What our customers say</h4>
      </header>
      <Slider
        {...settings}
        className="!flex rounded-lg shadow-lg shadow-gray-300"
      >
        {reviews.map(({ user, review, position, generalText }) => (
          <div
            key={user}
            className="!grid grid-cols-1 lg:grid-cols-[2fr_1fr] h-full "
          >
            <div
              className="px-10 pt-10  pb-5 lg:pb-20 flex flex-col gap-y-20 bg-no-repeat"
              style={{
                backgroundImage: `url(${quote})`,
              }}
            >
              <blockquote className="text-xl md:text-2xl md:leading-loose">
                {review}
              </blockquote>

              <div>
                <div className="w-[200px] !h-[1px] bg-gray-500 mb-4" />
                <h3>{user}</h3>
                <p>{position}</p>
              </div>
            </div>
            <div className="p-10 self-stretch text-xl tracking-wide font-semibold leading-loose text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-lg lg:text-2xl  lg:tracking-wide lg:leading-loose lg:rounded-l-none lg:rounded-r-lg">
              {generalText}
            </div>
          </div>
        ))}
      </Slider>
      <p className="pt-20 text-xl md:text-2xl text-center tracking-wide">
        Join Joboard to get your manage your job seeking smoothly.
      </p>
    </section>
  );
};
export default Quote;
