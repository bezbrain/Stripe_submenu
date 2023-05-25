import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

export const headerLinks = [
  {
    id: 1,
    linkName: "Products",
    subLinkname: [
      {
        label: "Payment",
        icon: <FaCreditCard />,
      },
      {
        label: "Terminal",
        icon: <FaCreditCard />,
      },
      {
        label: "Connect",
        icon: <FaCreditCard />,
      },
    ],
  },
  {
    id: 2,
    linkName: "Developers",
    subLinkname: [
      {
        label: "Plugins",
        icon: <FaBook />,
      },
      { label: "Libraries", icon: <FaBook /> },
      {
        label: "Help",
        icon: <FaBook />,
      },
      {
        label: "Billing",
        icon: <FaBook />,
      },
    ],
  },
  {
    id: 3,
    linkName: "Company",
    subLinkname: [
      {
        label: "About",
        icon: <FaBriefcase />,
      },
      {
        label: "Customers",
        icon: <FaBriefcase />,
      },
    ],
  },
];
