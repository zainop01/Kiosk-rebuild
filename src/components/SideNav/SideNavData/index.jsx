
import { HiOutlineDotsCircleHorizontal, HiUsers  } from "react-icons/hi";
import { RiBookletLine } from "react-icons/ri";
import { TbReportSearch , TbDevices2  } from "react-icons/tb";
import { IoLayers } from "react-icons/io5";
import { PiIdentificationCardLight } from "react-icons/pi";
import { MdOutlineRestaurantMenu , MdOutlineThumbsUpDown } from "react-icons/md";
import { BiLogoPlayStore } from "react-icons/bi";
import { CgLoadbarSound } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";

const sideNavData = [
  {
    name: 'Home',
    icon: <HiOutlineDotsCircleHorizontal />,
    collapse: false,
    path: '/',
  },
  {
    name: 'Admin',
    icon: <RiBookletLine />,
    collapse: true,
    items: [
      {
        name: 'Users',
        path: '/admin',
      },
      {
        name: 'Brands',
        path: '/admin/brands',
      },
      {
        name: 'License',
        path: '/admin/licenses',
        collapse: false,
      },
    ],
  },
  {
    name: 'Users',
    icon: <HiUsers  />,
    collapse: false,
    path: '/users',
  },
  {
    name: 'Users Reports',
    icon: <TbReportSearch />,
    collapse: false,
    path: '/users-reports',
  },
  {
    name: 'User Group',
    path: '/',
    icon: <IoLayers />,
    collapse: true,
    items: [
      {
        name: 'Group Overview',
        path: '/group-overview',
      },
      {
        name: 'Group Settings',
        path: '/group-settings',
      },
      {
        name: 'Group Report',
        path: '/group-report',
      },
    ],
  },
  {
    name: 'Licenses',
    path: '/',
    icon: <PiIdentificationCardLight />,
    collapse: true,
    items: [
      {
        name: 'License Overview',
        path: '/license-overview',
      },
      {
        name: 'License Report',
        path: '/license/report',
      },
    ],
  },
  {
    name: 'Menu Management',
    path: '/',
    icon: <MdOutlineRestaurantMenu />,
    collapse: true,
    items: [
      {
        name: 'Data',
        path: '/menu-management/data',
      },
      {
        name: 'Category',
        path: '/menu-management/category',
      },
      {
        name: 'Sub Category',
        path: '/menu-management/sub-category',
      },
      {
        name: 'Product',
        path: '/menu-management/product',
      },
    ],
  },
  {
    name: 'Stores',
    path: '/',
    icon: <BiLogoPlayStore />,
    collapse: true,
    items: [
      {
        name: 'Store Overview',
        path: '/stores/overview',
      },
      {
        name: 'Store Report',
        path: '/stores/report',
      },
    ],
  },
  {
    name: 'Devices',
    path: '/',
    icon: <TbDevices2 />,
    collapse: true,
    items: [
      {
        name: 'Devices Overview',
        path: '/devices/overview',
      },
      {
        name: 'Device Report',
        path: '/devices/report',
      },
    ],
  },
  {
    name: 'Analytics',
    icon: <CgLoadbarSound />,
    collapse: false,
    path: '/analytics',
  },
  {
    name: 'Integrations',
    icon: <RxDashboard />,
    collapse: false,
    path: '/integrations',
  },
  {
    name: 'Send Feedback',
    icon: <MdOutlineThumbsUpDown  />,
    collapse: false,
    path: '/send-feedback',
  },
];

export default sideNavData;
