import { FaBarsStaggered } from "react-icons/fa6";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import * as Avatar from "@radix-ui/react-avatar";
import { logoutUser, setSidebarOpen } from "../../redux/features/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { activePage } = useSelector((store) => store.user);

  return (
    <nav className="sticky p-5 md:pr-10 top-0 left-0 bg-white flex justify-between items-center">
      <FaBarsStaggered
        className="text-2xl md:text-3xl text-purple-400 hover:cursor-pointer"
        onClick={() => {
          dispatch(setSidebarOpen());
        }}
      />
      <h2 className="hidden md:block text-3xl capitalize font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {activePage}
      </h2>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="focus:outline-none ">
          <Avatar.Root className="w-[40px] h-[40px] rounded-full bg-purple-700 flex justify-center items-center hover:cursor-pointer ">
            <Avatar.Fallback className="uppercase text-lg text-white leading-loose">
              {user.name.charAt(0)}{" "}
              {user.lastName !== "lastName" && user.lastName.charAt(0)}
            </Avatar.Fallback>
          </Avatar.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal className="">
          <DropdownMenu.Content
            className="mt-2 px-5 py-1 text-white bg-purple-400 text-sm rounded-md hover:cursor-pointer"
            onClick={() => dispatch(logoutUser())}
          >
            Log out
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
};
export default Navbar;
