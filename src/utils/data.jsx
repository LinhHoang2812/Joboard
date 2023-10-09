import {
  FaFolder,
  FaSearch,
  FaLeaf,
  FaTasks,
  FaCloud,
  FaBook,
} from "react-icons/fa";

export const workFlow = [
  {
    title: "Job Management",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dignissim nibh. Curabitur mollis dolor tortor.",
    icon: <FaFolder />,
    color: "#fdba74",
  },
  {
    title: "Job Hub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dignissim nibh. Curabitur mollis dolor tortor.",
    icon: <FaSearch />,
    color: "#60a5fa",
  },
  {
    title: "Job Status",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dignissim nibh.",
    icon: <FaLeaf />,
    color: "#86efac",
  },
  {
    title: "Job Analysis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dignissim nibh. Curabitur mollis dolor tortor.",
    icon: <FaTasks />,
    color: "#fcd34d",
  },
  {
    title: "Save Jobs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dignissim nibh. Curabitur mollis dolor tortor.",
    icon: <FaCloud />,
    color: "#7dd3fc",
  },
  {
    title: "Kanban Board",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dignissim nibh. Curabitur mollis dolor tortor.",
    icon: <FaBook />,
    color: "#f472b6",
  },
];

export const reviews = [
  {
    user: "John",
    position: "Intern at ABC Inc.",
    generalText:
      "75% of users are happy with Joboard as it simplies their job searching management",
    review:
      "I used [Joboard] everyday when I was looking for my internship, it really keeps all my job applications in place and boots the all the process.",
  },
  {
    user: "Anna",
    position: "University student",
    generalText:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tincidunt leo nibh, a tempus odio tincidunt nec.",
    review:
      "Aenean condimentum cursus erat in eleifend. Quisque tristique ullamcorper neque placerat egestas. Maecenas lacus sapien, ornare quis enim in, hendrerit lobortis lorem.",
  },
  {
    user: "Dexter",
    position: "Graduate",
    generalText:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tincidunt leo nibh, a tempus odio tincidunt nec.",
    review:
      "Aenean condimentum cursus erat in eleifend. Quisque tristique ullamcorper neque placerat egestas.",
  },
];

export const footerContent = [
  {
    title: "About Joboard",
    desc: "Donec a eros arcu. Nullam luctus at risus pretium commodo. ",
  },
  {
    title: "Jobs",
    desc: "Donec a eros arcu. Nullam luctus at risus pretium commodo. ",
  },
  {
    title: "Apps",
    desc: "Donec a eros arcu. Nullam luctus at risus pretium commodo. ",
  },
  {
    title: "Contact us",
    desc: "Donec a eros arcu. Nullam luctus at risus pretium commodo. ",
  },
];
