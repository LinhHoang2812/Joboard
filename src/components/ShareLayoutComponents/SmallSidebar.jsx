import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import { setSidebarOpen } from "../../redux/features/userSlice";
import { RiCloseFill } from "react-icons/ri";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(setSidebarOpen());
  };
  return (
    <div
      className={
        isSidebarOpen
          ? "p-5 flex flex-col  items-center md:hidden bg-white fixed w-[90%] h-[90%] top-[2rem] left-[5%] z-10 rounded-xl shadow-lg shadow-gray-400"
          : "hidden"
      }
    >
      <Logo style={{ width: "30%" }} />
      <NavLinks toggleSidebar={toggle} />
      <button
        className="absolute  top-4 right-4 text-3xl  text-purple-700"
        onClick={() => {
          dispatch(setSidebarOpen());
        }}
      >
        <RiCloseFill />
      </button>
    </div>
  );
};
export default SmallSidebar;
