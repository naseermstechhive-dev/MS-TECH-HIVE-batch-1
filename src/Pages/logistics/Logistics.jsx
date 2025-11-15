import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Truck,
  MapPin,
  Package,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";
import { useTranslation } from "react-i18next";

const Logistics = () => {
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
    sectionBg: mode ? "bg-gray-200" : "bg-gray-900",
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
    emoji: "🚚",
    title: t("industries.logistics"),
    subtitle: t("logisticsPage.subtitle"),
    description: t("logisticsPage.description"),
    imageUrl:
      "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Logistics",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: MapPin,
    text1: t("logisticsPage.badge.text1"),
    text2: t("logisticsPage.badge.text2"),
    containerClassName: "px-6 py-4 space-y-1 text-center",
    iconClassName: "w-6 h-6 mx-auto",
  };

  const features = [
    {
      Icon: Truck,
      title: t("logisticsPage.features.0.title"),
      desc: t("logisticsPage.features.0.desc"),
    },
    {
      Icon: MapPin,
      title: t("logisticsPage.features.1.title"),
      desc: t("logisticsPage.features.1.desc"),
    },
    {
      Icon: Package,
      title: t("logisticsPage.features.2.title"),
      desc: t("logisticsPage.features.2.desc"),
    },
    {
      Icon: BarChart3,
      title: t("logisticsPage.features.3.title"),
      desc: t("logisticsPage.features.3.desc"),
    },
    {
      Icon: Users,
      title: t("logisticsPage.features.4.title"),
      desc: t("logisticsPage.features.4.desc"),
    },
    {
      Icon: Clock,
      title: t("logisticsPage.features.5.title"),
      desc: t("logisticsPage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("logisticsPage.benefits.0"),
    t("logisticsPage.benefits.1"),
    t("logisticsPage.benefits.2"),
    t("logisticsPage.benefits.3"),
    t("logisticsPage.benefits.4"),
    t("logisticsPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("logisticsPage.cta.title"),
    description: t("logisticsPage.cta.description"),
    list: [
      t("logisticsPage.cta.list.0"),
      t("logisticsPage.cta.list.1"),
      t("logisticsPage.cta.list.2"),
    ],
    buttonText: t("logisticsPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("logisticsPage.subtitle")}
        subtitle={t("logisticsPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("logisticsPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Logistics;