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
import { useTranslation } from "react-i18next";

const Hospital = () => {
  const { mode } = useContext(GlobalContext);
  const { t } = useTranslation();

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
    title: t("industries.hospital"),
    subtitle: t("hospitalPage.subtitle"),
    description: t("hospitalPage.description"),
    imageUrl:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Hospital",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: Clock,
    text1: t("hospitalPage.badge.text1"),
    text2: t("hospitalPage.badge.text2"),
    containerClassName: "p-4 -bottom-6 text-center",
    iconClassName: "mx-auto",
  };

  const features = [
    { Icon: User, title: t("hospitalPage.features.0.title"), desc: t("hospitalPage.features.0.desc") },
    { Icon: Calendar, title: t("hospitalPage.features.1.title"), desc: t("hospitalPage.features.1.desc") },
    { Icon: FileText, title: t("hospitalPage.features.2.title"), desc: t("hospitalPage.features.2.desc") },
    { Icon: CreditCard, title: t("hospitalPage.features.3.title"), desc: t("hospitalPage.features.3.desc") },
    { Icon: Shield, title: t("hospitalPage.features.4.title"), desc: t("hospitalPage.features.4.desc") },
    { Icon: BarChart3, title: t("hospitalPage.features.5.title"), desc: t("hospitalPage.features.5.desc") },
  ];

  const benefitsList = [
    t("hospitalPage.benefits.0"),
    t("hospitalPage.benefits.1"),
    t("hospitalPage.benefits.2"),
    t("hospitalPage.benefits.3"),
    t("hospitalPage.benefits.4"),
    t("hospitalPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("hospitalPage.cta.title"),
    description: t("hospitalPage.cta.description"),
    list: [
      t("hospitalPage.cta.list.0"),
      t("hospitalPage.cta.list.1"),
      t("hospitalPage.cta.list.2"),
    ],
    buttonText: t("hospitalPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("hospitalPage.subtitle")}
        subtitle={t("hospitalPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("hospitalPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Hospital;