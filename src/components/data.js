import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BanknotesIcon,
  HomeModernIcon,
  SparklesIcon,
  GlobeAmericasIcon,
  ArrowRightOnRectangleIcon,
  LeafIcon,
  HandThumbUpIcon,
  ChartBarIcon
} from "@heroicons/react/24/solid";


import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import imageWomensHealth from "../../public/img/benefit-two.png";
import imageEconomicJustice from "../../public/img/benefit-one.png";

// Example for Women’s Health
const womensHealthToolkit = {
  title: "Toolkit: Women's Health",
  desc: "Why focusing on women’s health & safety matters for your community.",
  image: imageWomensHealth,
  bullets: [
    {
      title: "Keep Women Safe",
      desc: "Ensures women get emergency medical care—fast, with no delays.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Unites the Community",
      desc: "Brings voices together around compassion and care.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Grounded in Faith",
      desc: "Helps you advocate using principles and texts shared across faiths.",
      icon: <HeartIcon />,
    },
  ],
};

const economicJusticeToolkit= {
  title: "How This Helps",
  desc: "Why economic justice matters for your community.",
  image: imageEconomicJustice,
  bullets: [
    {
      title: "Builds Stability",
      desc: "Helps ensure everyone—seniors, families, workers—can meet their basic needs.",
      icon: <HomeModernIcon />,
    },
    {
      title: "Puts Faith Into Action",
      desc: "Connects your values to real-life support for people facing economic hardship.",
      icon: <BanknotesIcon />,
    },
    {
      title: "Grows Opportunity",
      desc: "Guides your group to take practical steps like food drives, resource sharing, and job support.",
      icon: <ChartBarIcon />,
    },
  ],
};

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {womensHealthToolkit, economicJusticeToolkit, benefitOne, benefitTwo};
