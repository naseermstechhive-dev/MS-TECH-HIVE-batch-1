import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  ShoppingCart,
  Package,
  CreditCard,
  Users,
  ChartNoAxesColumnIncreasing,
  Clock,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";
import { useTranslation } from "react-i18next";

const RetailShop = () => {
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
    emoji: "🛍️",
    title: t("industries.retailShop"),
    subtitle: t("retailShopPage.subtitle"),
    description: t("retailShopPage.description"),
    imageUrl:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Retail",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: ShoppingCart,
    text1: t("retailShopPage.badge.text1"),
    text2: t("retailShopPage.badge.text2"),
    containerClassName: "px-6 py-4 -bottom-6 space-y-1",
  };

  const features = [
    {
      Icon: Package,
      title: t("retailShopPage.features.0.title"),
      desc: t("retailShopPage.features.0.desc"),
    },
    {
      Icon: CreditCard,
      title: t("retailShopPage.features.1.title"),
      desc: t("retailShopPage.features.1.desc"),
    },
    {
      Icon: Users,
      title: t("retailShopPage.features.2.title"),
      desc: t("retailShopPage.features.2.desc"),
    },
    {
      Icon: ChartNoAxesColumnIncreasing,
      title: t("retailShopPage.features.3.title"),
      desc: t("retailShopPage.features.3.desc"),
    },
    {
      Icon: ShoppingCart,
      title: t("retailShopPage.features.4.title"),
      desc: t("retailShopPage.features.4.desc"),
    },
    {
      Icon: Clock,
      title: t("retailShopPage.features.5.title"),
      desc: t("retailShopPage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("retailShopPage.benefits.0"),
    t("retailShopPage.benefits.1"),
    t("retailShopPage.benefits.2"),
    t("retailShopPage.benefits.3"),
    t("retailShopPage.benefits.4"),
    t("retailShopPage.benefits.5"),
  ];

  const ctaContent = {
    title: t("retailShopPage.cta.title"),
    description: t("retailShopPage.cta.description"),
    list: [
      t("retailShopPage.cta.list.0"),
      t("retailShopPage.cta.list.1"),
      t("retailShopPage.cta.list.2"),
    ],
    buttonText: t("retailShopPage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("retailShopPage.subtitle")}
        subtitle={t("retailShopPage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("retailShopPage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default RetailShop;