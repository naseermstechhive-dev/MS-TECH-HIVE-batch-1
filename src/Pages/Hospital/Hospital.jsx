import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Clock,
  User,
  Calendar,
  FileText,
  CreditCard,
  Shield,
  BarChart3,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const Hospital = () => {
  const { mode } = useContext(GlobalContext);

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900 font-extrabold" : "text-white font-bold",
    heroSub: mode ? "text-yellow-600 font-semibold" : "text-[#facc15] font-medium",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-100" : "bg-gray-800",
    cardBg: mode ? "bg-gray-200" : "bg-gray-700",
    cardHover: mode ? "hover:bg-gray-300" : "hover:bg-gray-600",
    cardTitle: mode ? "text-gray-900 font-semibold" : "text-white font-semibold",
    cardDesc: mode ? "text-gray-700" : "text-gray-300",
    listText: mode ? "text-gray-700" : "text-gray-300",
    ctaBg: mode
      ? "bg-gradient-to-br from-yellow-400 to-yellow-300 text-gray-900"
      : "bg-gradient-to-br from-[#facc15] to-[#ca8a04] text-gray-900",
  };

  const heroContent = {
    emoji: "🏥",
    title: "Hospital",
    subtitle: "Healthcare Automation Solutions",
    description:
      "Transform your hospital operations with advanced automation: patient management, appointments, EMR, and billing systems.",
    imageUrl:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Hospital",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: Clock,
    text1: "24/7",
    text2: "Support",
    containerClassName: "p-4 -bottom-6 text-center",
    iconClassName: "mx-auto",
  };

  const features = [
    { Icon: User, title: "Patient Management System", desc: "Automate patient registration, medical history tracking, and more." },
    { Icon: Calendar, title: "Appointment Scheduling", desc: "Smart doctor appointments, reminders, and conflict-free scheduling." },
    { Icon: FileText, title: "Electronic Medical Records", desc: "Secure, real-time, cloud-accessible EMR platform." },
    { Icon: CreditCard, title: "Billing & Insurance", desc: "Automated billing, insurance claim verification, and payment tracking." },
    { Icon: Shield, title: "HIPAA Compliance", desc: "Fully compliant & encrypted patient data protection." },
    { Icon: BarChart3, title: "Analytics Dashboard", desc: "Monitor patient flow, revenue, and KPIs in real time." },
  ];

  const benefitsList = [
    "Reduce patient wait times by 40%",
    "Eliminate scheduling conflicts",
    "Automate insurance verification",
    "Streamline discharge processes",
    "Improve patient satisfaction scores",
    "Reduce administrative overhead by 30%",
  ];

  const ctaContent = {
    title: "Ready to Get Started?",
    description:
      "Join hundreds of healthcare facilities already using our automation suite.",
    list: [
      "Free consultation & analysis",
      "Custom implementation plan",
      "Training & dedicated support",
    ],
    buttonText: "Schedule Consultation",
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Comprehensive Hospital Solutions"
        subtitle="Our automation platform supports all healthcare workflows."
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Transform Your Hospital Operations"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Hospital;