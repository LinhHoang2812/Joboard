import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import { FaBarsStaggered } from "react-icons/fa6";
import Hero from "../components/LandingPageComponents/Hero";
import TabIntro from "../components/LandingPageComponents/TabIntro";
import SliderIntro from "../components/LandingPageComponents/SliderIntro";
import FeaturesIntro from "../components/LandingPageComponents/FeaturesIntro";
import Quote from "../components/LandingPageComponents/Quote";
import Footer from "../components/LandingPageComponents/Footer";
import { useState } from "react";

const LandingPage = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="pl-4 block md:flex md:items-center justify-between gap-8 bg-white ">
        <div className="pr-4 py-2 flex items-center justify-between">
          <Logo style={{ width: "25%" }} />
          <FaBarsStaggered
            className="md:hidden text-xl hover:cursor-pointer text-purple-500"
            onClick={() => setNavbarOpen(!isNavbarOpen)}
          />
        </div>
        <div
          className={
            isNavbarOpen
              ? "pb-5 flex flex-col gap-y-5 md:flex-row md:pb-0 self-stretch"
              : "pb-5 hidden md:flex md:flex-row md:pb-0 self-stretch"
          }
        >
          <button className="border-0 hover:cursor-pointer  ">
            <NavLink
              to="/auth/login"
              s
              className="px-4 first-line:no-underline text-lg "
            >
              Log in
            </NavLink>
          </button>
          <button className="px-4 border-0 hover:cursor-pointer text-lg md:text-white md:bg-indigo-600 md:hover:bg-indigo-800  ">
            <NavLink to="/auth/signup" className="no-underline">
              Get Joboard for free
            </NavLink>
          </button>
        </div>
      </nav>
      <Hero />
      <TabIntro />
      <SliderIntro />
      <FeaturesIntro />
      <Quote />
      <Footer />
    </>
  );
};
export default LandingPage;
