import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/ShareLayoutComponents/Navbar";
import BigSidebar from "../components/ShareLayoutComponents/BigSidebar";
import SmallSidebar from "../components/ShareLayoutComponents/SmallSidebar";
import ClipLoader from "react-spinners/ClipLoader";

const ShareLayout = () => {
  const loading = useNavigation().state === "loading";

  return (
    <main className="grid grid-cols-1 md:grid-cols-[auto_1fr] ">
      <BigSidebar />
      <SmallSidebar />

      <div className="relative bg-purple-50  overflow-hidden">
        <Navbar />
        {loading ? (
          <ClipLoader
            color="#bd6fca"
            size={80}
            cssOverride={{
              marginLeft: "50%",
              translateX: "-50%",
              marginRight: "10rem",
            }}
          />
        ) : (
          <Outlet />
        )}
      </div>
    </main>
  );
};
export default ShareLayout;
