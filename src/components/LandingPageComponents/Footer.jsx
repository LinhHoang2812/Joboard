import { Form } from "react-router-dom";
import bg from "../../assets/images/footer_bg.svg";
import {
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";

import { footerContent } from "../../utils/data";
import Logo from "../Logo";
const Footer = () => {
  return (
    <section>
      <div
        className="py-20 px-10 md:px-[7rem] bg-no-repeat bg-cover flex flex-col justify-center gap-10"
        style={{
          backgroundImage: `url(${bg}), linear-gradient(60deg, #8b5cf6, #e9d5ff) `,
        }}
      >
        <h1 className="text-2xl text-center font-extrabold tracking-wide leading-loose text-white lg:text-3xl  lg:leading-loose">
          Get started with Joboard today
        </h1>

        <Form
          action="/auth"
          className=" mx-auto flex flex-col gap-5  md:flex-row md:justify-center"
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
      <div className=" bg-slate-700">
        <div className="py-5 px-10 md:px-[7rem] grid gap-2 grid-cols-1 lg:grid-cols-5 lg:gap-5 items-center ">
          {/* <h2 className="text-3xl md:4xl font-bold text-white">Joboard</h2> */}
          <Logo style={{ width: "80%" }} />
          {footerContent.map(({ title, desc }) => (
            <div
              key={title}
              className="py-5 lg:p-5 flex flex-col gap-y-1 text-white lg:gap-y-5 lg:hover:bg-slate-500 hover:cursor-pointer hover:underline lg:hover:no-underline"
            >
              <h3>{title}</h3>
              <h4 className="text-sm md:text-md">{desc}</h4>
            </div>
          ))}
        </div>
        <div className="mx-4  h-[1px] bg-slate-400" />
        <div className="py-5 px-10 md:px-[7rem] grid gap-7 grid-cols-1 lg:grid-cols-[2fr_1fr] lg:gap-5 items-center ">
          <div className="flex flex-col gap-5 lg:flex-row  text-xs  text-white ">
            <p className="hover:underline hover:cursor-pointer">
              Your privacy choice
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Privacy policy
            </p>
            <p className="hover:underline hover:cursor-pointer">Terms</p>
            <p className="hover:underline hover:cursor-pointer">
              Copyright © {new Date().getFullYear()} Linh Hoang
            </p>
          </div>
          <div className="flex gap-x-5 text-4xl text-white md:justify-end">
            <TiSocialFacebookCircular className="hover:cursor-pointer" />
            <TiSocialLinkedinCircular className="hover:cursor-pointer" />
            <TiSocialTwitterCircular className="hover:cursor-pointer" />
            <TiSocialYoutubeCircular className="hover:cursor-pointer" />
            <TiSocialInstagramCircular className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
