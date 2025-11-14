import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  ShoppingCart,
  Utensils,
  Users,
  ChartNoAxesColumnIncreasing,
  Calendar,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const Restaurant = () => {
  const { mode } = useContext(GlobalContext);

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900" : "text-white",
    heroSub: mode ? "text-yellow-600" : "text-yellow-400",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-200" : "bg-gray-800",
    cardBg: mode ? "bg-gray-300" : "bg-gray-700",
    cardHover: mode ? "hover:bg-gray-400" : "hover:bg-gray-600",
    cardTitle: mode ? "text-gray-900" : "text-white",
    cardDesc: mode ? "text-gray-700" : "text-gray-300",
    listText: mode ? "text-gray-700" : "text-gray-300",
    ctaBg: mode
      ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
      : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900",
  };

  const heroContent = {
    emoji: "🍽️",
    title: "Restaurant",
    subtitle: "Food Service Automation",
    description:
      "Optimize your restaurant operations with comprehensive order management, billing systems, table tracking, and kitchen automation.",
    imageUrl:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Restaurant",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: Utensils,
    text1: "Smart",
    text2: "Kitchen",
    containerClassName: "w-20 -bottom-6", // Specific class
    iconClassName: "w-10 h-10",
  };

  const features = [
    { Icon: ShoppingCart, title: "Order Management System", desc: "Streamlined dine-in, takeaway & delivery order handling." },
    { Icon: Utensils, title: "Kitchen Automation", desc: "Digital kitchen displays & automated prep-time tracking." },
    { Icon: Users, title: "Table Management", desc: "Reservation tools, waitlist automation & seating optimization." },
    { Icon: ChartNoAxesColumnIncreasing, title: "POS & Billing", desc: "Integrated POS, inventory tracking & instant billing." },
    { Icon: Calendar, title: "Staff Scheduling", desc: "Automated shift planning, attendance & task assignment." },
    { Icon: Clock, title: "Delivery Tracking", desc: "Real-time delivery tracking & customer status updates." },
  ];

  const benefitsList = [
    "Reduce order processing time by 45%",
    "Minimize food waste with smart inventory",
    "Optimize table turnover and seating",
    "Automate takeaway & delivery workflows",
    "Track staff productivity with analytics",
    "Increase customer satisfaction ratings",
  ];

  const ctaContent = {
    title: "Ready to Transform Your Restaurant?",
    description:
      "Join restaurants that have boosted efficiency, reduced delays and improved customer satisfaction.",
    list: [
      "Custom setup based on your restaurant type",
      "Staff onboarding & training",
      "24/7 dedicated technical support",
    ],
    buttonText: "Schedule Demo",
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Complete Restaurant Management Suite"
        subtitle="Automate order taking, billing, seating, kitchen operations & more."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Serve Success, Not Just Food"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Restaurant;