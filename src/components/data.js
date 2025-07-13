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


import imageLGBTQ from "../../public/img/benefit-one.png";
import imageImmigrants from "../../public/img/benefit-two.png";
import imageWomensHealth from "../../public/img/benefit-two.png";
import imageEconomicJustice from "../../public/img/benefit-one.png";
import imageEnvironment from "../../public/img/benefit-one.png";

const environmentToolkit = {
  title: "Toolkit: Environmental Stewardship",
  desc: "Faith-based resources for protecting creation, responding to climate anxiety, and leaving the world better for those who come after us.",
  image: imageEnvironment,
  bullets: [
    {
      title: "Protects Creation",
      desc: "Simple actions your group can take to care for the earth.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Links Faith to Action",
      desc: "Faith-rooted reasons for environmental stewardship.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Builds a Legacy",
      desc: "Inspires your community to leave the world better for future generations.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

// Example for Women’s Health
const womensHealthToolkit = {
  title: "Toolkit: Women's Health",
  desc: "Practical tools and guidance to help faith communities ensure every woman can access safe, urgent medical care and compassion: no matter the circumstance.",
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
  title: "Toolkit: Economic Justice",
  desc: "Resources for supporting the dignity and basic needs of every person—so no one in your community is left behind.",
  image: imageEconomicJustice,
  bullets: [
    {
      title: "Builds Stability",
      desc: "Helps ensure everyone can meet their basic needs: seniors, families, workers, immigrants, all",
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

const lgbtqToolkit = {
  title: "Toolkit: LGBTQI+ Inclusion",
  desc: "Faith-rooted ways to build a community where LGBTQI individuals are welcomed, valued, and safe to be themselves.",
  image: imageLGBTQ,
  bullets: [
    {
      title: "Welcomes All",
      desc: "Creates an environment where LGBTQI individuals know they belong without judgement.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Strengthens Community",
      desc: "Shows your group lives out faith values of love and respect.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Shares Stories and Support",
      desc: "Equips you with language, scripture, and actions to be visibly inclusive.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const immigrantsToolkit = {
  title: "Toolkit: Welcoming Immigrants, Refugees, & Asylum Seekers",
  desc: "Scripture-inspired guidance to welcome newcomers, offer hospitality, and advocate for justice and safety for all.",
  image: imageImmigrants,
  bullets: [
    {
      title: "Welcomes the Stranger",
      desc: "Practical steps to make immigrants, refugees, or asylum seekers feel safe and supported.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Celebrates Diversity",
      desc: "Enriches your community through interfaith and intercultural connection.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Connects to Tradition",
      desc: "Draws on scripture and teachings about hospitality and justice for all.",
      icon: <SunIcon />,
    },
  ],
};


export {immigrantsToolkit, environmentToolkit, womensHealthToolkit, economicJusticeToolkit, lgbtqToolkit};
