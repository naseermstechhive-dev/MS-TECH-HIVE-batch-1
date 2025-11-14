import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Activity,
  FileText,
  Users,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const ClinicLab = () => {
  const { mode } = useContext(GlobalContext);

  // 1. Define Theme
  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900" : "text-white",
    heroSub: mode ? "text-yellow-700" : "text-yellow-400",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-100" : "bg-gray-900",
    cardBg: mode ? "bg-gray-200" : "bg-gray-700",
    cardHover: mode ? "hover:bg-gray-300" : "hover:bg-gray-600",
    cardTitle: mode ? "text-gray-900" : "text-white",
    cardDesc: mode ? "text-gray-700" : "text-gray-300",
    listText: mode ? "text-gray-700" : "text-gray-300",
    ctaBg: mode
      ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
      : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900",
  };

  // 2. Define Content
  const heroContent = {
    emoji: "🔬",
    title: "Clinic / Lab",
    subtitle: "Laboratory Management Solutions",
    description:
      "Modernize your clinic and laboratory operations with comprehensive sample tracking, automated lab reports, patient record management, and result processing systems.",
    imageUrl:
      "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Clinic Lab",
    imageClassName: "h-[450px]", // Keep specific class
  };

  const heroBadge = {
    Icon: Activity,
    text1: "Smart",
    text2: "Lab",
  };

  const features = [
    { Icon: Activity, title: "Sample Tracking", desc: "Comprehensive specimen tracking from collection to analysis with barcode integration." },
    { Icon: FileText, title: "Lab Reports", desc: "Automated report generation, digital delivery, and result verification systems." },
    { Icon: Users, title: "Patient Records", desc: "Secure patient data management with medical history and test result integration." },
    { Icon: BarChart3, title: "Result Management", desc: "Digital result processing, quality control, and automated notifications to physicians." },
    { Icon: Shield, title: "Compliance Management", desc: "Regulatory compliance tracking, audit trails, and quality assurance protocols." },
    { Icon: Clock, title: "Workflow Automation", desc: "Streamlined lab workflows, appointment scheduling, and equipment management." },
  ];

  const benefitsList = [
    "Reduce sample processing time by 50%",
    "Eliminate manual report generation",
    "Improve result accuracy and reliability",
    "Streamline patient communication",
    "Ensure regulatory compliance",
    "Optimize lab equipment utilization",
  ];

  const ctaContent = {
    title: "Ready to Modernize Your Lab?",
    description:
      "Join leading clinics and laboratories that have improved efficiency and accuracy with our comprehensive management solutions.",
    list: [
      "Custom integration with existing equipment",
      "Staff training and system certification",
      "Compliance support and validation",
    ],
    buttonText: "Schedule Consultation",
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Advanced Laboratory Information System"
        subtitle="Streamline laboratory operations with intelligent sample tracking, automated reporting, and comprehensive quality management"
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Precision in Every Process"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default ClinicLab;