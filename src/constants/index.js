import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const storeItems = [
  "Mac",
  "Iphone",
  "Ipad",
  "Apple_Watch",
  "Airpods",
  "AirTags",
  "Apple_TV",
  "HomePod",
  "Accessories",
];

export const storeBox = [
  {
    title: "iPhone 17 Pro",
    desc: "All out Pro.",
    price: "From ₹134900.00**",
    img: "/assets/images/iphone17.jpeg",
    clss: true,
  },
  {
    title: "MacBook Pro 14",
    desc: "Supercharged by M5.",
    price: "From ₹169900.00**",
    img: "/assets/images/mac-store.jpeg",
    clss: true,
  },
  {
    title: "iPhone Air",
    desc: "The thinnest iPhone ever.",
    price: "From 119900.00**",
    img: "/assets/images/thin.jpeg",
    clss: false,
  },
  {
    title: "iPad Pro",
    desc: "Mmmmmm. Power.",
    price: "From 99900.00**",
    img: "/assets/images/ipad-store.jpeg",
    clss: true,
  },
  {
    title: "Apple Watch SE 3",
    desc: "Walk it. Talk it. Track it. Love it.",
    price: "From 25900.00**",
    img: "/assets/images/s3.jpeg",
    clss: false,
  },
  {
    title: "AirPods Pro 3",
    desc: "The world's best in-ear Active Noise Cancellation",
    price: "From 25900.00**",
    img: "/assets/images/airpod.jpeg",
    clss: false,
  },
];
