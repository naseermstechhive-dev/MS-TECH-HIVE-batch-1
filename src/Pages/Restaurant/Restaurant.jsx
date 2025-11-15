import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  ShoppingCart,
  Utensils,
  Users,
  ChartNoAxesColumnIncreasing,
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

const Restaurant = () => {
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

  const heroContent = {
    emoji: "🍽️",
    title: t("industries.restaurant"),
    subtitle: t("restaurantPage.subtitle"),
    description: t("restaurantPage.description"),
    imageUrl:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Restaurant",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: Utensils,
    text1: t("restaurantPage.badge.text1"),
    text2: t("restaurantPage.badge.text2"),
    containerClassName: "w-20 -bottom-6",
    iconClassName: "w-10 h-10",
  };

  const features = [
    {
      Icon: ShoppingCart,
      title: t("restaurantPage.features.0.title"),
      desc: t("restaurantPage.features.0.desc"),
    },
    {
      Icon: Utensils,
      title: t("restaurantPage.features.1.title"),
      desc: t("restaurantPage.features.1.desc"),
    },
    {
      Icon: Users,
      title: t("restaurantPage.features.2.title"),
      desc: t("restaurantPage.features.2.desc"),
    },
    {
      Icon: ChartNoAxesColumnIncreasing,
      title: t("restaurantPage.features.3.title"),
      desc: t("restaurantPage.features.3.desc"),
    },
    {
      Icon: Calendar,
      title: t("restaurantPage.features.4.title"),
      desc: t("restaurantPage.features.4.desc"),
    },
    {
      Icon: Clock,
      title: t("restaurantPage.features.5.title"),
      desc: t("restaurantPage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("restaurantPage.benefits.0"),
    t("restaurantPage.benefits.1"),
    t("restaurantPage.benefits.2"),
    t("restaurantPage.benefits.3"),
    t("restaurantPage.benefits.4"),
    t("restaurantPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("restaurantPage.cta.title"),
    description: t("restaurantPage.cta.description"),
    list: [
      t("restaurantPage.cta.list.0"),
      t("restaurantPage.cta.list.1"),
      t("restaurantPage.cta.list.2"),
    ],
    buttonText: t("restaurantPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("restaurantPage.subtitle")}
        subtitle={t("restaurantPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("restaurantPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Restaurant;