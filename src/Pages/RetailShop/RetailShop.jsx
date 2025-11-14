import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  ShoppingCart,
  Package,
  CreditCard,
  Users,
  ChartNoAxesColumnIncreasing,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const RetailShop = () => {
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

  const aosOptions = { offset: 120 };

  const heroContent = {
    emoji: "🛍️",
    title: "Retail Shop",
    subtitle: "Retail Management Solutions",
    description:
      "Modernize your retail operations with comprehensive inventory management, POS systems, CRM tools, and sales analytics.",
    imageUrl:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Retail",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: ShoppingCart,
    text1: "Smart",
    text2: "Retail",
    containerClassName: "px-6 py-4 -bottom-6 space-y-1",
  };

  const features = [
    { Icon: Package, title: "Inventory Management", desc: "Real-time stock tracking & automated reordering." },
    { Icon: CreditCard, title: "Point of Sale Systems", desc: "Modern POS setups with secure payments." },
    { Icon: Users, title: "Customer Management", desc: "CRM with profiles, history & loyalty programs." },
    { Icon: ChartNoAxesColumnIncreasing, title: "Sales Analytics", desc: "Track trends & KPIs with smart dashboards." },
    { Icon: ShoppingCart, title: "E-commerce Integration", desc: "Unified inventory for online + offline sales." },
    { Icon: Clock, title: "Staff Management", desc: "Scheduling, performance & commission tracking." },
  ];

  const benefitsList = [
    "Reduce inventory management time by 50%",
    "Automate purchase orders & stock alerts",
    "Improve customer retention with CRM",
    "Streamline checkout & payment flow",
    "Generate detailed sales & profit reports",
    "Optimize staff scheduling & performance",
  ];

  const ctaContent = {
    title: "Boost Your Retail Success",
    description:
      "Join retailers who increased efficiency and customer satisfaction with automation.",
    list: [
      "Tailored setup for your store type",
      "Staff training + onboarding",
      "24/7 support & maintenance",
    ],
    buttonText: "Schedule Demo",
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Complete Retail Management System"
        subtitle="From inventory to customer relationships — manage everything with ease."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Retail Excellence Made Simple"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default RetailShop;