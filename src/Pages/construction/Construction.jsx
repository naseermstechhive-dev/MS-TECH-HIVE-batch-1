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
import { useTranslation } from "react-i18next";

const Construction = () => {
  const { mode } = useContext(GlobalContext);
  const { t } = useTranslation();

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
    title: t("industries.construction"),
    subtitle: t("constructionPage.subtitle"),
    description: t("constructionPage.description"),
    imageUrl:
      "https://www.gannestonconstruction.com/wp-content/uploads/2022/09/5-types-of-building-construction-ganneston-construction.jpg",
    imageAlt: "Construction",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: HardHat,
    text1: t("constructionPage.badge.text1"),
    text2: t("constructionPage.badge.text2"),
    containerClassName: "px-6 py-4 -bottom-6",
    iconClassName: "w-7 h-7",
  };

  const features = [
    {
      Icon: HardHat,
      title: t("constructionPage.features.0.title"),
      desc: t("constructionPage.features.0.desc"),
    },
    {
      Icon: Users,
      title: t("constructionPage.features.1.title"),
      desc: t("constructionPage.features.1.desc"),
    },
    {
      Icon: Calendar,
      title: t("constructionPage.features.2.title"),
      desc: t("constructionPage.features.2.desc"),
    },
    {
      Icon: ChartNoAxesColumnIncreasing,
      title: t("constructionPage.features.3.title"),
      desc: t("constructionPage.features.3.desc"),
    },
    {
      Icon: FileText,
      title: t("constructionPage.features.4.title"),
      desc: t("constructionPage.features.4.desc"),
    },
    {
      Icon: Clock,
      title: t("constructionPage.features.5.title"),
      desc: t("constructionPage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("constructionPage.benefits.0"),
    t("constructionPage.benefits.1"),
    t("constructionPage.benefits.2"),
    t("constructionPage.benefits.3"),
    t("constructionPage.benefits.4"),
    t("constructionPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("constructionPage.cta.title"),
    description: t("constructionPage.cta.description"),
    list: [
      t("constructionPage.cta.list.0"),
      t("constructionPage.cta.list.1"),
      t("constructionPage.cta.list.2"),
    ],
    buttonText: t("constructionPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("constructionPage.subtitle")}
        subtitle={t("constructionPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("constructionPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Construction;