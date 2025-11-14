import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Truck,
  MapPin,
  Package,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const Logistics = () => {
  const { mode } = useContext(GlobalContext);

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900" : "text-white",
    heroSub: mode ? "text-yellow-600" : "text-yellow-400",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-200" : "bg-gray-900",
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
    emoji: "🚚",
    title: "Logistics",
    subtitle: "Transportation Solutions",
    description:
      "Optimize your logistics operations with comprehensive fleet management, route optimization, delivery tracking, and warehouse management systems.",
    imageUrl:
      "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Logistics",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: MapPin,
    text1: "Smart",
    text2: "Routes",
    containerClassName: "px-6 py-4 space-y-1 text-center",
    iconClassName: "w-6 h-6 mx-auto",
  };

  const features = [
    { Icon: Truck, title: "Fleet Management", desc: "Vehicle tracking, maintenance scheduling, and driver management." },
    { Icon: MapPin, title: "Route Optimization", desc: "AI-powered route planning for fast & fuel-efficient delivery." },
    { Icon: Package, title: "Shipment Tracking", desc: "Real-time tracking with customer notifications." },
    { Icon: BarChart3, title: "Analytics Dashboard", desc: "KPIs, delivery analytics & efficiency insights." },
    { Icon: Users, title: "Driver Management", desc: "Driver schedules, performance & communication." },
    { Icon: Clock, title: "Delivery Automation", desc: "Automated dispatch & delivery scheduling." },
  ];

  const benefitsList = [
    "Reduce delivery times by 40%",
    "Optimize fuel consumption & routes",
    "Improve customer satisfaction",
    "Automate dispatch & scheduling",
    "Real-time package & fleet tracking",
    "Cut operational costs by 25%",
  ];

  const ctaContent = {
    title: "Ready to Optimize Your Fleet?",
    description:
      "Join top logistics companies using automation to improve delivery speed and reduce operational costs.",
    list: [
      "Custom solution for your fleet size",
      "Driver training + mobile app support",
      "24/7 monitoring & assistance",
    ],
    buttonText: "Schedule Demo",
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Complete Logistics Management Suite"
        subtitle="From fleet management to last-mile delivery, optimize every aspect of your logistics operations."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Deliver Excellence Every Mile"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Logistics;