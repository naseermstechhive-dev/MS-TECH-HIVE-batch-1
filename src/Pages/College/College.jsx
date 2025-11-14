import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Users,
  GraduationCap,
  ChartNoAxesColumnIncreasing,
  Calendar,
  FileText,
  CreditCard,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const College = () => {
  const { mode } = useContext(GlobalContext);

  // 1. Define Theme
  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900 font-extrabold" : "text-white font-bold",
    heroSub: mode ? "text-yellow-600" : "text-yellow-400",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-200" : "bg-gray-800", // Different from Clinic
    cardBg: mode ? "bg-gray-300" : "bg-gray-700",
    cardHover: mode ? "hover:bg-gray-400" : "hover:bg-gray-600",
    cardTitle: mode ? "text-gray-900" : "text-white",
    cardDesc: mode ? "text-gray-700" : "text-gray-300",
    listText: mode ? "text-gray-700" : "text-gray-300",
    ctaBg: mode
      ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
      : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900",
  };

  // 2. Define AOS Options
  const aosOptions = {
    duration: 950,
    mirror: false,
  };

  // 3. Define Content
  const heroContent = {
    emoji: "🏛️",
    title: "College",
    subtitle: "Higher Education Solutions",
    description:
      "Modernize college operations with smart admissions, analytics, dashboards, and automated administrative workflows.",
    imageUrl:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "College",
    imageClassName: "object-cover", // No fixed height
  };

  const heroBadge = {
    Icon: ChartNoAxesColumnIncreasing,
    text1: "Smart",
    text2: "Analytics",
  };

  const features = [
    { Icon: Users, title: "Admission Management", desc: "Automated document verification, application processing, and workflows." },
    { Icon: GraduationCap, title: "Student Dashboards", desc: "Student portals with course registration, grades, and academic progress." },
    { Icon: ChartNoAxesColumnIncreasing, title: "Analytics & Reporting", desc: "Advanced student performance analytics and institutional insights." },
    { Icon: Calendar, title: "Course Management", desc: "Automated faculty assignment, scheduling, and resources." },
    { Icon: FileText, title: "Academic Records", desc: "Digital transcripts, degree verification, academic history tracking." },
    { Icon: CreditCard, title: "Fee Management", desc: "Automated fee collection, scholarships, and financial aid processing." },
  ];

  const benefitsList = [
    "Reduce admission processing time by 60%",
    "Automate course registration & scheduling",
    "Improve student engagement with dashboards",
    "Streamline fee collection & financial aid",
    "Generate academic performance reports",
    "Enhance decision-making with analytics",
  ];

  const ctaContent = {
    title: "Ready for Digital Transformation?",
    description:
      "Join colleges that modernized admissions, academics, and operations.",
    list: [
      "Tailored solution for your institution",
      "Faculty & staff training included",
      "Step-by-step implementation",
    ],
    buttonText: "Schedule Consultation",
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Comprehensive College Management Platform"
        subtitle="Manage admissions, courses, analytics, academic records and more."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Elevate Higher Education Standards"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default College;