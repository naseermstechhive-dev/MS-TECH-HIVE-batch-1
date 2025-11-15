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
import { useTranslation } from "react-i18next";

const ClinicLab = () => {
  const { mode } = useContext(GlobalContext);
  const { t } = useTranslation();

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

  const heroContent = {
    emoji: "🔬",
    title: t("industries.clinicLab"),
    subtitle: t("clinicLabPage.subtitle"),
    description: t("clinicLabPage.description"),
    imageUrl:
      "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Clinic Lab",
    imageClassName: "h-[450px]",
  };

  const heroBadge = {
    Icon: Activity,
    text1: t("clinicLabPage.badge.text1"),
    text2: t("clinicLabPage.badge.text2"),
  };

  const features = [
    {
      Icon: Activity,
      title: t("clinicLabPage.features.0.title"),
      desc: t("clinicLabPage.features.0.desc"),
    },
    {
      Icon: FileText,
      title: t("clinicLabPage.features.1.title"),
      desc: t("clinicLabPage.features.1.desc"),
    },
    {
      Icon: Users,
      title: t("clinicLabPage.features.2.title"),
      desc: t("clinicLabPage.features.2.desc"),
    },
    {
      Icon: BarChart3,
      title: t("clinicLabPage.features.3.title"),
      desc: t("clinicLabPage.features.3.desc"),
    },
    {
      Icon: Shield,
      title: t("clinicLabPage.features.4.title"),
      desc: t("clinicLabPage.features.4.desc"),
    },
    {
      Icon: Clock,
      title: t("clinicLabPage.features.5.title"),
      desc: t("clinicLabPage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("clinicLabPage.benefits.0"),
    t("clinicLabPage.benefits.1"),
    t("clinicLabPage.benefits.2"),
    t("clinicLabPage.benefits.3"),
    t("clinicLabPage.benefits.4"),
    t("clinicLabPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("clinicLabPage.cta.title"),
    description: t("clinicLabPage.cta.description"),
    list: [
      t("clinicLabPage.cta.list.0"),
      t("clinicLabPage.cta.list.1"),
      t("clinicLabPage.cta.list.2"),
    ],
    buttonText: t("clinicLabPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("clinicLabPage.subtitle")}
        subtitle={t("clinicLabPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("clinicLabPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default ClinicLab;