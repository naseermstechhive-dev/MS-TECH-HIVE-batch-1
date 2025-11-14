import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  HardHat,
  Users,
  Calendar,
  ChartNoAxesColumnIncreasing,
  FileText,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const Construction = () => {
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
    emoji: "🏗️",
    title: "Construction",
    subtitle: "Project Management Solutions",
    description:
      "Revolutionize your construction projects with comprehensive tracking systems, worker management, progress monitoring, and resource planning automation.",
    imageUrl:
      "https://www.gannestonconstruction.com/wp-content/uploads/2022/09/5-types-of-building-construction-ganneston-construction.jpg",
    imageAlt: "Construction",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: HardHat,
    text1: "Smart",
    text2: "Projects",
    containerClassName: "px-6 py-4 -bottom-6", // Custom class
    iconClassName: "w-7 h-7",
  };

  const features = [
    { Icon: HardHat, title: "Project Tracking", desc: "Milestone tracking, progress monitoring, and deadline management." },
    { Icon: Users, title: "Worker Management", desc: "Digital worker logs, attendance tracking, and skill-based assignments." },
    { Icon: Calendar, title: "Resource Planning", desc: "Equipment scheduling, material tracking, and allocation optimization." },
    { Icon: ChartNoAxesColumnIncreasing, title: "Progress Monitoring", desc: "Dashboards with real-time visuals and performance analytics." },
    { Icon: FileText, title: "Documentation", desc: "Permits, blueprints, reports, and compliance documentation." },
    { Icon: Clock, title: "Time & Cost Tracking", desc: "Track labor, budget, and expenses automatically." },
  ];

  const benefitsList = [
    "Reduce project delays by 35%",
    "Improve worker productivity tracking",
    "Automate safety & compliance reporting",
    "Streamline equipment and material management",
    "Real-time project visibility",
    "Optimize resource allocation & costs",
  ];

  const ctaContent = {
    title: "Ready to Modernize Your Projects?",
    description:
      "Join construction companies boosting project efficiency with automation.",
    list: [
      "Custom solution for your project types",
      "Team training & onboarding",
      "Mobile access & field support",
    ],
    buttonText: "Schedule Consultation",
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Construction Management Platform"
        subtitle="Build better projects with intelligent tracking, resource management, and real-time progress monitoring."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Build Smarter, Not Harder"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Construction;