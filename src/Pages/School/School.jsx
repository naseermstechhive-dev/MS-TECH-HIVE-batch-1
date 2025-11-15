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
import { useTranslation } from "react-i18next";

const School = () => {
  const { mode } = useContext(GlobalContext);
  const { t } = useTranslation();

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900 font-extrabold" : "text-white font-bold",
    heroSub: mode ? "text-yellow-600 font-semibold" : "text-yellow-400 font-medium",
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
    title: t("industries.school"),
    subtitle: t("schoolPage.subtitle"),
    description: t("schoolPage.description"),
    imageUrl:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "School",
    imageClassName: "h-[500px]",
  };

  const heroBadge = {
    Icon: Clock,
    text1: t("schoolPage.badge.text1"),
    text2: t("schoolPage.badge.text2"),
    containerClassName: "px-6 py-4 space-y-1 w-28 text-center",
  };

  const features = [
    { Icon: Users, title: t("schoolPage.features.0.title"), desc: t("schoolPage.features.0.desc") },
    { Icon: Calendar, title: t("schoolPage.features.1.title"), desc: t("schoolPage.features.1.desc") },
    { Icon: MessageSquare, title: t("schoolPage.features.2.title"), desc: t("schoolPage.features.2.desc") },
    { Icon: FileText, title: t("schoolPage.features.3.title"), desc: t("schoolPage.features.3.desc") },
    { Icon: ChartNoAxesColumnIncreasing, title: t("schoolPage.features.4.title"), desc: t("schoolPage.features.4.desc") },
    { Icon: Shield, title: t("schoolPage.features.5.title"), desc: t("schoolPage.features.5.desc") },
  ];

  const benefitsList = [
    t("schoolPage.benefits.0"),
    t("schoolPage.benefits.1"),
    t("schoolPage.benefits.2"),
    t("schoolPage.benefits.3"),
    t("schoolPage.benefits.4"),
    t("schoolPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("schoolPage.cta.title"),
    description: t("schoolPage.cta.description"),
    list: [
      t("schoolPage.cta.list.0"),
      t("schoolPage.cta.list.1"),
      t("schoolPage.cta.list.2"),
    ],
    buttonText: t("schoolPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("schoolPage.subtitle")}
        subtitle={t("schoolPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("schoolPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default School;