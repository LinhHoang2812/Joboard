import { useSelector } from "react-redux";
import Logo from "../Logo";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <aside
      className={
        isSidebarOpen
          ? "hidden h-screen  ml-0  w-[180px] pt-5  bg-white md:flex md:flex-col md:gap-y-10 ease-in-out duration-500"
          : "hidden h-screen ml-[-180px]  w-[180px] pt-5   bg-white md:flex md:flex-col md:gap-y-10 ease-in-out duration-500"
      }
    >
      <Logo style={{ width: "80%" }} />
      <NavLinks />
    </aside>
  );
};
export default BigSidebar;
