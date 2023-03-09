import { Bookmark, Book } from "react-feather";
const { v4: uuidv4 } = require("uuid");
export const SidebarContent = [
  {
    id: uuidv4(),
    label: "Combo",
    image:
      "https://image.winudf.com/v2/image1/Y29tLmNvbWJvYXBwZGVsaXZlcnkuYXBwX3NjcmVlbl8wXzE1OTk5MTgyNDRfMDE5/screen-0.jpg?fakeurl=1&type=.webp",
    href: "/combo",
  },
  {
    id: uuidv4(),
    label: "Ná CNC Việt Nam",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJAYp3xl075YImjrM2JBKqsTvE0UedEd8tA&usqp=CAU",
    href: "/na-cnc-vietnam",
  },
  {
    id: uuidv4(),
    label: "Ná Tàu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJAYp3xl075YImjrM2JBKqsTvE0UedEd8tA&usqp=CAU",
    href: "/na-tau",
  },
];
export const SidebarContentFromCategory = [
  {
    id: uuidv4(),
    label: "Dây precise",
    image: "https://cf.shopee.vn/file/2fc0dab700bb4f5320d8a6dafb6c0af8",
    children: [
      {
        id: uuidv4(),
        title: "Dây precise (0.5)",
        href: "/day-precise/0.5",
      },
      {
        id: uuidv4(),
        title: "Dây precise (0.65)",
        href: "/day-precise/0.65",
      },
    ],
  },
  {
    id: uuidv4(),
    label: "Dây Hunter",
    image: "https://cf.shopee.vn/file/2fc0dab700bb4f5320d8a6dafb6c0af8",
    children: [
      {
        id: uuidv4(),
        title: "Dây Hunter (0.5)",
        href: "/#",
      },
      {
        id: uuidv4(),
        title: "Dây Hunter (0.65)",
        href: "#",
      },
    ],
  },
  {
    id: uuidv4(),
    label: "Phụ Kiện",
    image:
      "https://vn-live-01.slatic.net/p/0bb29f19f07aa1c42593610fe8462d69.jpg",
    children: [
      {
        id: uuidv4(),
        title: "Đồ hít bi",
        href: "/#",
      },
      {
        id: uuidv4(),
        title: "Túi đựng ná",
        href: "#",
      },
      {
        id: uuidv4(),
        title: "Da",
        href: "#",
      },
      {
        id: uuidv4(),
        title: "Bia Tập bắn",
        href: "#",
      },
      {
        id: uuidv4(),
        title: "Vòng cao su chống trơn",
        href: "#",
      },
      {
        id: uuidv4(),
        title: "Dây buộc ná cao su ",
        href: "#",
      },
      {
        id: uuidv4(),
        title: "Túi đựng  ",
        href: "#",
      },
    ],
  },
];
