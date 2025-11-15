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
import { useTranslation } from "react-i18next";

const ITCompany = () => {
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
    title: t("industries.itCompany"),
    subtitle: t("itCompanyPage.subtitle"),
    description: t("itCompanyPage.description"),
    imageUrl:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "IT Company",
    imageStyle: { maxHeight: 460 },
    imageClassName: "max-[600px]:max-w-md max-[400px]:max-w-[95%]",
  };

  const heroBadge = {
    Icon: Monitor,
    text1: t("itCompanyPage.badge.text1"),
    text2: t("itCompanyPage.badge.text2"),
    containerClassName:
      "p-4 space-y-1 max-[600px]:w-20 max-[600px]:p-3 max-[350px]:w-16 max-[350px]:p-2",
    iconClassName:
      "w-6 h-6 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4",
  };

  const features = [
    {
      Icon: Monitor,
      title: t("itCompanyPage.features.0.title"),
      desc: t("itCompanyPage.features.0.desc"),
    },
    {
      Icon: Users,
      title: t("itCompanyPage.features.1.title"),
      desc: t("itCompanyPage.features.1.desc"),
    },
    {
      Icon: BarChart3,
      title: t("itCompanyPage.features.2.title"),
      desc: t("itCompanyPage.features.2.desc"),
    },
    {
      Icon: FileText,
      title: t("itCompanyPage.features.3.title"),
      desc: t("itCompanyPage.features.3.desc"),
    },
    {
      Icon: Calendar,
      title: t("itCompanyPage.features.4.title"),
      desc: t("itCompanyPage.features.4.desc"),
    },
    {
      Icon: Clock,
      title: t("itCompanyPage.features.5.title"),
      desc: t("itCompanyPage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("itCompanyPage.benefits.0"),
    t("itCompanyPage.benefits.1"),
    t("itCompanyPage.benefits.2"),
    t("itCompanyPage.benefits.3"),
    t("itCompanyPage.benefits.4"),
    t("itCompanyPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("itCompanyPage.cta.title"),
    description: t("itCompanyPage.cta.description"),
    list: [
      t("itCompanyPage.cta.list.0"),
      t("itCompanyPage.cta.list.1"),
      t("itCompanyPage.cta.list.2"),
    ],
    buttonText: t("itCompanyPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("itCompanyPage.subtitle")}
        subtitle={t("itCompanyPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("itCompanyPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default ITCompany;