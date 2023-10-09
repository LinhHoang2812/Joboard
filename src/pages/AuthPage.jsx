import note from "../assets/images/note.svg";
import entries from "../assets/images/new_entries.svg";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/features/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((store) => store.user);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (data.name) {
      dispatch(registerUser(data));
      return;
    }
    dispatch(loginUser(data));
  };
  return (
    <main className="h-screen relative flex justify-center items-center">
      <img
        src={note}
        className="hidden md:block absolute left-0 bottom-0 w-[20rem] -z-1 "
      />
      <img
        src={entries}
        className="hidden md:block absolute right-0 bottom-0 w-[20rem] -z-1"
      />
      <form
        className="relative bg-white py-20 px-5 w-[60%] lg:w-[35%] max-w-[500px] rounded-lg shadow-lg shadow-gray-300 flex flex-col  items-center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Logo style={{ width: "60%", marginBottom: "2rem" }} />
        {isLoading && <ClipLoader color="#c476e3" />}
        <Outlet />
      </form>
    </main>
  );
};
export default AuthPage;
