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
import { useTranslation } from "react-i18next";

const Office = () => {
  const { mode } = useContext(GlobalContext);
  const { t } = useTranslation();

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
    title: t("industries.office"),
    subtitle: t("officePage.subtitle"),
    description: t("officePage.description"),
    imageUrl:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Office",
    imageClassName: "h-[450px]",
  };

  const heroBadge = {
    Icon: ChartNoAxesColumnIncreasing,
    text1: t("officePage.badge.text1"),
    text2: t("officePage.badge.text2"),
    containerClassName: "w-28 h-28",
    iconClassName: "w-8 h-10",
  };

  const features = [
    {
      Icon: Users,
      title: t("officePage.features.0.title"),
      desc: t("officePage.features.0.desc"),
    },
    {
      Icon: FileText,
      title: t("officePage.features.1.title"),
      desc: t("officePage.features.1.desc"),
    },
    {
      Icon: Calendar,
      title: t("officePage.features.2.title"),
      desc: t("officePage.features.2.desc"),
    },
    {
      Icon: ChartNoAxesColumnIncreasing,
      title: t("officePage.features.3.title"),
      desc: t("officePage.features.3.desc"),
    },
    {
      Icon: Shield,
      title: t("officePage.features.4.title"),
      desc: t("officePage.features.4.desc"),
    },
    {
      Icon: Clock,
      title: t("officePage.features.5.title"),
      desc: t("officePage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("officePage.benefits.0"),
    t("officePage.benefits.1"),
    t("officePage.benefits.2"),
    t("officePage.benefits.3"),
    t("officePage.benefits.4"),
    t("officePage.benefits.5"),
  ];

  const ctaContent = {
    title: t("officePage.cta.title"),
    description: t("officePage.cta.description"),
    list: [
      t("officePage.cta.list.0"),
      t("officePage.cta.list.1"),
      t("officePage.cta.list.2"),
    ],
    buttonText: t("officePage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("officePage.subtitle")}
        subtitle={t("officePage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("officePage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Office;