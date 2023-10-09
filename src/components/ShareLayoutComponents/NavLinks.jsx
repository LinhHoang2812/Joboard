import { NavLink } from "react-router-dom";
import links from "../../utils/links";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../redux/features/userSlice";

const NavLinks = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  return (
    <div className="h-full grid grid-cols-1  items-center pt-10 md:pt-16">
      {links.map(({ id, path, icon, text }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) => {
            if (isActive) {
              dispatch(setActivePage(text));
            }
            return isActive
              ? "flex flex-col items-center gap-y-1 text-transparent bg-clip-text capitalize font-semibold"
              : "flex flex-col items-center gap-y-1 text-gray-500 capitalize";
          }}
          onClick={toggleSidebar}
        >
          <div className="w-[50px] h-[50px] text-lg md:text-2xl rounded-full flex justify-center items-center bg-purple-300 text-white">
            {icon}
          </div>
          <div className="text-xs md:text-sm bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            {text}
          </div>
        </NavLink>
      ))}
    </div>
  );
};
export default NavLinks;
