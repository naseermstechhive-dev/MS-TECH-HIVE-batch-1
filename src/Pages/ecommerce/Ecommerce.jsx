import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Package,
  CreditCard,
  Users,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";
import { useTranslation } from "react-i18next";

const Ecommerce = () => {
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
    emoji: "🛒",
    title: t("industries.ecommerce"),
    subtitle: t("ecommercePage.subtitle"),
    description: t("ecommercePage.description"),
    imageUrl:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "E-commerce",
    imageStyle: { maxHeight: 420 },
    imageClassName: "max-[600px]:max-w-md max-[400px]:max-w-[95%]",
  };

  const heroBadge = {
    Icon: ShoppingCart,
    text1: t("ecommercePage.badge.text1"),
    text2: t("ecommercePage.badge.text2"),
    containerClassName:
      "px-6 py-4 -bottom-6 space-y-1 max-[600px]:w-20 max-[600px]:px-3 max-[600px]:py-2 max-[350px]:w-16 max-[350px]:px-2 max-[350px]:py-1.5",
    iconClassName:
      "w-6 h-6 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4",
  };

  const features = [
    {
      Icon: Users,
      title: t("ecommercePage.features.0.title"),
      desc: t("ecommercePage.features.0.desc"),
    },
    {
      Icon: MessageSquare,
      title: t("ecommercePage.features.1.title"),
      desc: t("ecommercePage.features.1.desc"),
    },
    {
      Icon: BarChart3,
      title: t("ecommercePage.features.2.title"),
      desc: t("ecommercePage.features.2.desc"),
    },
    {
      Icon: ShoppingCart,
      title: t("ecommercePage.features.3.title"),
      desc: t("ecommercePage.features.3.desc"),
    },
    {
      Icon: Package,
      title: t("ecommercePage.features.4.title"),
      desc: t("ecommercePage.features.4.desc"),
    },
    {
      Icon: CreditCard,
      title: t("ecommercePage.features.5.title"),
      desc: t("ecommercePage.features.5.desc"),
    },
  ];

  const benefitsList = [
    t("ecommercePage.benefits.0"),
    t("ecommercePage.benefits.1"),
    t("ecommercePage.benefits.2"),
    t("ecommercePage.benefits.3"),
    t("ecommercePage.benefits.4"),
    t("ecommercePage.benefits.5"),
  ];

  const ctaContent = {
    title: t("ecommercePage.cta.title"),
    description: t("ecommercePage.cta.description"),
    list: [
      t("ecommercePage.cta.list.0"),
      t("ecommercePage.cta.list.1"),
      t("ecommercePage.cta.list.2"),
    ],
    buttonText: t("ecommercePage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("ecommercePage.subtitle")}
        subtitle={t("ecommercePage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("ecommercePage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Ecommerce;