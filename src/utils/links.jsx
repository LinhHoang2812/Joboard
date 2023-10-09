import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "job search",
    path: "/search",
    icon: <FaWpforms />,
  },
  {
    id: 2,
    text: "dashboard",
    path: "/dashboard",
    icon: <IoBarChartSharp />,
  },
  {
    id: 3,
    text: "job board",
    path: "/",
    icon: <MdQueryStats />,
  },

  {
    id: 4,
    text: "profile",
    path: "/profile",
    icon: <ImProfile />,
  },
];

export default links;
