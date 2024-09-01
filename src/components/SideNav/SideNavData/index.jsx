import {
  FaHome,
  FaUserAlt,
  FaUsers,
  FaFileAlt,
  FaUserFriends,
  FaClipboardList,
  FaListUl,
  FaStore,
  FaMobileAlt,
  FaChartBar,
  FaPlug,
  FaCommentDots,
} from "react-icons/fa";

const sideNavData = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    name: "Admin",
    link: "/admin",
    icon: <FaUserAlt />, 
  },
  {
    id: 3,
    name: "Users",
    link: "/users",
    icon: <FaUsers />, 
  },
  {
    id: 4,
    name: "Users Reports",
    link: "/users-reports",
    icon: <FaFileAlt />, 
  },
  {
    id: 5,
    name: "User Group",
    link: "/user-group",
    icon: <FaUserFriends />, 
  },
  {
    id: 6,
    name: "Licenses",
    link: "/licenses",
    icon: <FaClipboardList />,
  },
  {
    id: 7,
    name: "Menu Management",
    link: "/menu-management",
    icon: <FaListUl />, 
  },
  {
    id: 8,
    name: "Stores",
    link: "/stores",
    icon: <FaStore />, 
  },
  {
    id: 9,
    name: "Devices",
    link: "/devices",
    icon: <FaMobileAlt />, 
  },
  {
    id: 10,
    name: "Analytics",
    link: "/analytics",
    icon: <FaChartBar />, 
  },
  {
    id: 11,
    name: "Integrations",
    link: "/integrations",
    icon: <FaPlug />, 
  },
  {
    id: 12,
    name: "Send Feedback",
    link: "/send-feedback",
    icon: <FaCommentDots />, 
  },
];

export default sideNavData;
