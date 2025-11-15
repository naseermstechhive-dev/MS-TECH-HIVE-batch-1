import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  Users,
  GraduationCap,
  ChartNoAxesColumnIncreasing,
  Calendar,
  FileText,
  CreditCard,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";
import { useTranslation } from "react-i18next";

const College = () => {
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

  const aosOptions = {
    duration: 950,
    mirror: false,
  };

  const heroContent = {
    emoji: "🏛️",
    title: t("industries.college"),
    subtitle: t("collegePage.subtitle"),
    description: t("collegePage.description"),
    imageUrl:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "College",
    imageClassName: "object-cover",
  };

  const heroBadge = {
    Icon: ChartNoAxesColumnIncreasing,
    text1: t("collegePage.badge.text1"),
    text2: t("collegePage.badge.text2"),
  };

  const features = [
    { Icon: Users, title: t("collegePage.features.0.title"), desc: t("collegePage.features.0.desc") },
    { Icon: GraduationCap, title: t("collegePage.features.1.title"), desc: t("collegePage.features.1.desc") },
    { Icon: ChartNoAxesColumnIncreasing, title: t("collegePage.features.2.title"), desc: t("collegePage.features.2.desc") },
    { Icon: Calendar, title: t("collegePage.features.3.title"), desc: t("collegePage.features.3.desc") },
    { Icon: FileText, title: t("collegePage.features.4.title"), desc: t("collegePage.features.4.desc") },
    { Icon: CreditCard, title: t("collegePage.features.5.title"), desc: t("collegePage.features.5.desc") },
  ];

  const benefitsList = [
    t("collegePage.benefits.0"),
    t("collegePage.benefits.1"),
    t("collegePage.benefits.2"),
    t("collegePage.benefits.3"),
    t("collegePage.benefits.4"),
    t("collegePage.benefits.5"),
  ];

  const ctaContent = {
    title: t("collegePage.cta.title"),
    description: t("collegePage.cta.description"),
    list: [
      t("collegePage.cta.list.0"),
      t("collegePage.cta.list.1"),
      t("collegePage.cta.list.2"),
    ],
    buttonText: t("collegePage.cta.button"),
  };

  return (
    <PageWrapper pageBg={theme.pageBg} aosOptions={aosOptions}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />

      <FeaturesGrid
        theme={theme}
        title={t("collegePage.subtitle")}
        subtitle={t("collegePage.description")}
        features={features}
      />

      <BenefitsCtaSection
        theme={theme}
        benefitsTitle={t("collegePage.cta.title")}
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default College;