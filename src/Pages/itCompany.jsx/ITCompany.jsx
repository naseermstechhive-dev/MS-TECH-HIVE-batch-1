import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Monitor,
  Users,
  BarChart3,
  FileText,
  Calendar,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const ITCompany = () => {
  const { mode } = useContext(GlobalContext);

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900 font-extrabold" : "text-white font-bold",
    heroSub: mode ? "text-yellow-600" : "text-yellow-400",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-100" : "bg-gray-900",
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
    emoji: "💻",
    title: "IT Company",
    subtitle: "Tech Project Solutions",
    description:
      "Enhance your IT operations with comprehensive project dashboards, client communication portals, team collaboration tools, and resource management systems.",
    imageUrl:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "IT Company",
    imageStyle: { maxHeight: 460 },
    imageClassName: "max-[600px]:max-w-md max-[400px]:max-w-[95%]",
  };

  const heroBadge = {
    Icon: Monitor,
    text1: "Smart",
    text2: "Projects",
    containerClassName:
      "p-4 space-y-1 max-[600px]:w-20 max-[600px]:p-3 max-[350px]:w-16 max-[350px]:p-2",
    iconClassName:
      "w-6 h-6 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4",
  };

  const features = [
    { Icon: Monitor, title: "Project Dashboards", desc: "Comprehensive project management dashboards with real-time progress tracking and team collaboration." },
    { Icon: Users, title: "Client Portals", desc: "Dedicated client communication portals with project updates, document sharing, and feedback systems." },
    { Icon: BarChart3, title: "Resource Management", desc: "Team allocation, skill tracking, and resource optimization for maximum project efficiency." },
    { Icon: FileText, title: "Documentation Systems", desc: "Automated documentation generation, version control, and knowledge base management." },
    { Icon: Calendar, title: "Sprint Planning", desc: "Agile project management with sprint planning, backlog management, and velocity tracking." },
    { Icon: Clock, title: "Time Tracking", desc: "Automated time tracking, billing integration, and productivity analytics for teams." },
  ];

  const benefitsList = [
    "Improve project delivery times by 40%",
    "Enhance client communication and satisfaction",
    "Automate time tracking and billing processes",
    "Optimize team resource allocation",
    "Streamline development workflows",
    "Increase team productivity by 35%",
  ];

  const ctaContent = {
    title: "Ready to Scale Your IT Operations?",
    description:
      "Join successful IT companies that have improved project delivery and client satisfaction with our management solutions.",
    list: [
      "Custom setup for your development methodology",
      "Team training and integration support",
      "API integrations with existing tools",
    ],
    buttonText: "Schedule Consultation",
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Complete IT Project Management Platform"
        subtitle="Streamline development workflows, enhance client relationships, and optimize team productivity"
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Code Better, Deliver Faster"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default ITCompany;