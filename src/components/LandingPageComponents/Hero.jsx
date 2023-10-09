import waveImg from "../../assets/images/wave.svg";
import heroImg from "../../assets/images/hero.svg";
import { Form } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="pt-[3rem] px-10 md:px-[7rem] min-h-[90vh] bg-no-repeat bg-cover grid grid-cols-1  gap-10 lg:grid-cols-2  lg:pt-20 "
      style={{
        backgroundImage: `url(${waveImg}), linear-gradient(60deg, rgb(98, 81, 196), rgb(222, 190, 243)) `,
      }}
    >
      <div>
        <h1 className="text-2xl text-center font-extrabold tracking-wide leading-loose text-white lg:text-3xl lg:text-left lg:leading-loose">
          Joboard brings all your tasks of job searching, job tracking, and
          analysis together.
        </h1>
        <p className="my-5 text-lg text-center font-bold tracking-wide lg:text-xl lg:text-left text-white">
          Keep everything in the same place.
        </p>
        <Form
          action="/auth/signup"
          className="flex flex-col gap-5  md:flex-row md:justify-center xl:justify-start"
        >
          <input
            type="email"
            name="email"
            placeholder="email"
            className="hidden p-2 outline-none outline-0 rounded-md  md:block md:focus:outline-white lg:w-[60%] xl:w-auto"
          />
          <button
            type="submit"
            className="py-2 px-4 ] text-white rounded-md bg-indigo-600 hover:bg-indigo-800 lg:w-[40%] xl:w-auto"
          >
            Sign up - it's free
          </button>
        </Form>
      </div>
      <img src={heroImg} className="ml-[-3rem] h-[25rem] md:ml-0 " />
    </section>
  );
};
export default Hero;
