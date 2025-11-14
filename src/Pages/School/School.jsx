import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Users,
  Calendar,
  MessageSquare,
  FileText,
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

const School = () => {
  const { mode } = useContext(GlobalContext);

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900 font-extrabold" : "text-white font-bold",
    heroSub: mode
      ? "text-yellow-600 font-semibold"
      : "text-yellow-400 font-medium",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-200" : "bg-gray-800",
    cardBg: mode ? "bg-gray-300" : "bg-gray-700",
    cardHover: mode ? "hover:bg-gray-400" : "hover:bg-gray-600",
    cardTitle: mode ? "text-gray-900 font-semibold" : "text-white font-semibold",
    cardDesc: mode ? "text-gray-700" : "text-gray-300",
    listText: mode ? "text-gray-700" : "text-gray-300",
    ctaBg: mode
      ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
      : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900",
  };

  const aosOptions = {
    duration: 950,
    mirror: false,
  };

  const heroContent = {
    emoji: "🎓",
    title: "School",
    subtitle: "Education Management Solutions",
    description:
      "Revolutionize your school operations with automated attendance, communication, analytics, and complete education management.",
    imageUrl:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "School",
    imageClassName: "h-[500px]",
  };

  const heroBadge = {
    Icon: Clock,
    text1: "Real-time",
    text2: "Updates",
    containerClassName: "px-6 py-4 space-y-1 w-28 text-center",
  };

  const features = [
    { Icon: Users, title: "Student Management", desc: "Profiles, enrollment tracking, academic progress monitoring." },
    { Icon: Calendar, title: "Attendance Tracking", desc: "Automated attendance with real-time parent notifications." },
    { Icon: MessageSquare, title: "Parent Communication", desc: "Instant communication between teachers and parents." },
    { Icon: FileText, title: "Grade Management", desc: "Digital gradebooks, report cards, and academic tracking." },
    { Icon: ChartNoAxesColumnIncreasing, title: "Academic Analytics", desc: "Track performance, attendance patterns, and school analytics." },
    { Icon: Shield, title: "Safety & Security", desc: "Check-in/out systems with emergency communication tools." },
  ];

  const benefitsList = [
    "Reduce administrative tasks by 50%",
    "Improve parent engagement by 75%",
    "Automate attendance & grade reporting",
    "Streamline teacher-parent communication",
    "Real-time progress tracking",
    "Better school safety protocols",
  ];

  const ctaContent = {
    title: "Transform Your School Today",
    description:
      "Join modern schools using our automation solutions for education.",
    list: [
      "Personalized demo for your school",
      "Full staff training included",
      "Step-by-step implementation",
    ],
    buttonText: "Schedule Demo",
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Complete School Management System"
        subtitle="Manage every part of school operations with ease and automation."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Enhance Educational Excellence"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default School;