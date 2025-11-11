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

export const navLists = ["Store", "Mac", "iPad", "Support"];

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

export const storeBox1 = [
  {
    title: "iPhone 17 Pro",
    desc1: "All out Pro.",
    desc2: "From ₹134900.00**",
    img: "/assets/images/iphone17.jpeg",
    clss: true,
  },
  {
    title: "MacBook Pro 14",
    desc1: "Supercharged by M5.",
    desc2: "From ₹169900.00**",
    img: "/assets/images/mac-store.jpeg",
    clss: true,
  },
  {
    title: "iPhone Air",
    desc1: "The thinnest iPhone ever.",
    desc2: "From 119900.00**",
    img: "/assets/images/thin.jpeg",
    clss: false,
  },
  {
    title: "iPad Pro",
    desc1: "Mmmmmm. Power.",
    desc2: "From 99900.00**",
    img: "/assets/images/ipad-store.jpeg",
    clss: true,
  },
  {
    title: "Apple Watch SE 3",
    desc1: "Walk it. Talk it. Track it. Love it.",
    desc2: "From 25900.00**",
    img: "/assets/images/s3.jpeg",
    clss: false,
  },
  {
    title: "AirPods Pro 3",
    desc1: "The world's best in-ear Active Noise Cancellation",
    desc2: "From 25900.00**",
    img: "/assets/images/airpod.jpeg",
    clss: false,
  },
];
export const storeBox2 = [
  {
    title: "Shop with a Specialist over video.",
    desc1: "Choose your next device in guided, one-way video session",
    desc2: "",
    img: "/assets/images/store/phone2.jpeg",
    clss: false,
  },
  {
    title: "Shop one on one with a Specialist online.",
    desc1: "",
    desc2: "apple specialist",
    img: "/assets/images/store/specialist.jpeg",
    clss: false,
  },
  {
    title: "Explore Apple Intelligence",
    desc1: "Come and try it for yourself ina free session at Apple Store.",
    desc2: "Today at apple",
    img: "/assets/images/store/today.jpeg",
    clss: false,
  },
  {
    title: "Join free sessions at your Apple Store",
    desc1:
      "Learn aboout the layesy features and how to go further with your Apple devices.",
    desc2: "Today at apple",
    img: "/assets/images/store/today2.jpeg",
    clss: false,
  },
  {
    title: "Set up your new device with help from a Specialist.",
    desc1:
      "Ley us guide you through data transfer, the latest features and more, in an online, one-to-one session.",
    desc2: "Personal setup",
    img: "/assets/images/store/personal.jpeg",
    clss: false,
  },
  {
    title: "Need support? Our teams are here for you.",
    desc1: "",
    desc2: "watch and learn",
    img: "/assets/images/store/human.jpeg",
    clss: false,
  },
];

export const macBox = [
  {
    type: "laptops",
    title: 'MacBook Air 13" and 15" ',
    desc1: "M4 chip",
    desc2: "Strikingly thin and fast so you work, play or create anywhere.",
    price: "From ₹99900.00** or ₹149830.00/mo. for 6 mo.*",
    img: "/assets/images/mac/mac-laptop.jpg",
  },
  {
    type: "laptops",
    title: 'MacBook Pro 14" and 16" ',
    desc1: "M5, M4 Pro or M4 Max chip",
    desc2: "The most advanced Mac laptops for demanding workflows.",
    price: "From ₹169900.00** or ₹26650.00/mo. for 6 mo.*",
    img: "/assets/images/mac/mac-mac.jpg",
  },
  {
    type: "desktops",
    title: "iMac",
    desc1: "M4 chip",
    desc2: "A stunning all-in-one desktop for creativity and productivity.",
    price: "From ₹134900.00** or ₹21650.00/mo. for 6 mo.*",
    img: "/assets/images/mac/mac-desktop.jpg",
  },
  {
    type: "displays",
    title: "Studio",
    desc1: "",
    desc2: "A 5K Retina display with stellar camera and audio.",
    price: "From ₹159900.00** or ₹27907.00/mo. for 6 mo.*",
    img: "/assets/images/mac/mac-display.jpg",
  },
];

export const ipadBox1 = [
  {
    title: "iPad Pro",
    desc: "The ultimate iPad experience with the most advanced technology",
    price: "From ₹99900.00** or ₹15983.00/mo. for 6 mo.**",
    img: "/assets/images/ipad/image-1.jpg",
  },
  {
    title: "iPad Air",
    desc: "Serious performance in a thin and light design.",
    price: "From ₹59900.00** or ₹9317.00/mo. for 6 mo.**",
    img: "/assets/images/ipad/image-2.jpg",
  },
  {
    title: "iPad",
    desc: "The colourful, all-screen iPad for the things you do every day.",
    price: "From ₹34900.00** or ₹5317.00/mo. for 6 mo.**",
    img: "/assets/images/ipad/image-3.jpg",
  },
  {
    title: "iPad mini",
    desc: "The full iPad experience in an ultra-portable design.",
    price: "From ₹49900.00** or ₹7817.00/mo. for 6 mo.**",
    img: "/assets/images/ipad/image-4.jpg",
  },
];

export const ipadBox2 = [
  {
    title: "iPad and iPhone",
    desc: "iPad and iPhone are designed to work seamlessly together. Start something on one device and pick it up on the other with Handoff.",
    image: "assets/images/ipad/image-5.jpg",
  },
  {
    title: "iPad and Mac",
    desc: "iPad and Mac are designed to form the ultimate creative setup. Use Sidecar to mirror or extend your Mac display, or use Universal Control to move content seamlessly.",
    image: "assets/images/ipad/image-6.jpg",
  },
  {
    title: "iPad and Apple Watch",
    desc: "Stay connected and healthy with Apple Watch. View your fitness stats or control playback on your iPad easily.",
    image: "assets/images/ipad/image-7.jpg",
  },
];

export const tabs = ["All products", "Laptops", "Desktops", "Displays"];
