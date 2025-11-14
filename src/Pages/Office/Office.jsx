import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Users,
  FileText,
  Calendar,
  ChartNoAxesColumnIncreasing,
  Shield,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const Office = () => {
  const { mode } = useContext(GlobalContext);
   const navigate = useNavigate();
  const {t} = useTranslation()
  const {section1} = t("ofc")
  const {section2} = t("ofc")
  const {section3} = t("ofc")

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900 font-extrabold" : "text-white font-bold",
    heroSub: mode ? "text-yellow-600" : "text-yellow-400",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-100" : "bg-gray-800",
    cardBg: mode ? "bg-gray-200" : "bg-gray-700",
    cardHover: mode ? "hover:bg-gray-300" : "hover:bg-gray-600",
    cardTitle: mode ? "text-gray-900 font-semibold" : "text-white font-semibold",
    cardDesc: mode ? "text-gray-700" : "text-gray-300",
    listText: mode ? "text-gray-700" : "text-gray-300",
    ctaBg: mode
      ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
      : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900",
  };

  const heroContent = {
    emoji: "🏢",
    title: "Office",
    subtitle: "Corporate Automation Solutions",
    description:
      "Transform your office operations with comprehensive HR systems, document management, task automation, and employee productivity tools.",
    imageUrl:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Office",
    imageClassName: "h-[450px]",
  };

  const heroBadge = {
    Icon: ChartNoAxesColumnIncreasing,
    text1: "Smart",
    text2: "Workflows",
    containerClassName: "w-28 h-28", // Specific size
    iconClassName: "w-8 h-10",
  };

  const features = [
    { Icon: Users, title: "HR Management System", desc: "Comprehensive employee management, payroll processing, and performance tracking automation." },
    { Icon: FileText, title: "Document Management", desc: "Digital document storage, automated workflows, and secure file sharing systems." },
    { Icon: Calendar, title: "Task Automation", desc: "Streamlined project management, automated task assignment, and progress tracking." },
    { Icon: ChartNoAxesColumnIncreasing, title: "Analytics Dashboard", desc: "Real-time insights into productivity metrics, employee performance, and operational efficiency." },
    { Icon: Shield, title: "Employee Portals", desc: "Self-service portals for leave management, expense reporting, and benefits administration." },
    { Icon: Clock, title: "Time Tracking", desc: "Automated time and attendance tracking with integrated payroll processing." },
  ];

  const benefitsList = [
    "Reduce administrative overhead by 60%",
    "Automate repetitive office tasks",
    "Improve employee productivity tracking",
    "Streamline HR processes and payroll",
    "Enhance document security and access",
    "Create better workplace collaboration",
  ];

  const ctaContent = {
    title: "Ready to Go Digital?",
    description:
      "Join forward-thinking companies that have transformed their office operations with intelligent automation.",
    list: [
      "Customized solution for your office size",
      "Employee training and change management",
      "Ongoing support and system updates",
    ],
    buttonText: "Schedule Consultation",
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Modern Office Management Platform"
        subtitle="Digitize and automate your office operations for maximum efficiency and productivity."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Build a Smarter Workplace"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Office;