import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleCheckBig } from "lucide-react";
import { GlobalContext } from './../../context/Context';
import { useTranslation } from "react-i18next";

export const PageWrapper = ({ pageBg, aosOptions, children }) => {
  const {mode} = useContext(GlobalContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      ...aosOptions,
    });

    const onScroll = () => AOS.refresh();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [aosOptions, mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>
      {children}
      {/* Spacer at the bottom */}
      <div className="h-8" />
    </div>
  );
};

export const IndustryHero = ({ theme, content, badge }) => {
  const navigate = useNavigate();
  const { Icon: BadgeIcon } = badge;
  const {t} = useTranslation();

  return (
    <section
      className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme.heroBg}`}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div data-aos="fade-right">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-5xl max-[600px]:text-4xl max-[350px]:text-3xl">
              {content.emoji}
            </div>
            <div>
              <h1
                className={`text-5xl font-bold max-[600px]:text-4xl max-[350px]:text-3xl ${theme.heroTitle}`}
              >
                {content.title}
              </h1>
              <p
                className={`text-xl max-[600px]:text-lg max-[350px]:text-base ${theme.heroSub}`}
              >
                {content.subtitle}
              </p>
            </div>
          </div>

          <p
            className={`text-xl max-[600px]:text-lg max-[350px]:text-base leading-relaxed ${theme.heroDesc}`}
          >
            {content.description}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            data-aos="fade-up"
          >
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2"
            >
             {t("industryBtn.getStartedToday")}
            </button>
            <button
              onClick={() => navigate("/services")}
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2"
            >
             {t("industryBtn.viewAllServices")}
            </button>
          </div>
        </div>

        {/* Right Image + Badge */}
        <div
          className="relative flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <img
            src={content.imageUrl}
            alt={content.imageAlt}
            style={content.imageStyle || {}}
            className={`rounded-2xl shadow-2xl w-full max-w-2xl object-cover ${
              content.imageClassName || "h-[450px]"
            }`}
          />

          {/* Badge */}
          <div
            className={`absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center w-24 max-[400px]:-left-2 ${
              badge.containerClassName || ""
            }`}
            data-aos="zoom-in"
          >
            <BadgeIcon
              className={`w-8 h-8 mb-1 text-gray-900 max-[600px]:w-6 max-[600px]:h-6 ${
                badge.iconClassName || ""
              }`}
            />
            <span className="text-sm font-bold leading-tight max-[600px]:text-xs max-[350px]:text-[10px]">
              {badge.text1}
            </span>
            <span className="text-sm font-semibold leading-tight max-[600px]:text-xs max-[350px]:text-[10px]">
              {badge.text2}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesGrid = ({ theme, title, subtitle, features }) => {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          className={`text-4xl font-bold max-[600px]:text-3xl max-[350px]:text-2xl mb-4 ${theme.heroTitle}`}
        >
          {title}
        </h2>
        <p
          className={`text-xl max-[600px]:text-lg max-[350px]:text-base ${theme.heroDesc} max-w-3xl mx-auto`}
        >
          {subtitle}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className={`${theme.cardBg} p-8 rounded-xl ${theme.cardHover} transition-colors group`}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              <item.Icon className="w-8 h-8 text-yellow-400" />
            </div>
            <h3
              className={`text-xl font-semibold max-[600px]:text-lg max-[350px]:text-base mb-3 ${theme.cardTitle}`}
            >
              {item.title}
            </h3>
            <p
              className={`${theme.cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const BenefitsCtaSection = ({
  theme,
  benefitsTitle,
  benefitsList,
  cta,
}) => {
  const navigate = useNavigate();

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* BENEFITS */}
        <div data-aos="fade-right">
          <h2
            className={`text-4xl font-bold max-[600px]:text-3xl max-[350px]:text-2xl mb-8 ${theme.heroTitle}`}
          >
            {benefitsTitle}
          </h2>
          <div className="space-y-6">
            {benefitsList.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center space-x-3"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0 max-[600px]:w-5 max-[600px]:h-5" />
                <span
                  className={`${theme.listText} text-lg max-[600px]:text-base max-[350px]:text-sm`}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BOX */}
        <div
          className={`${theme.ctaBg} p-8 rounded-2xl shadow-xl max-[600px]:p-6 max-[350px]:p-4`}
          data-aos="zoom-in"
        >
          <h3 className="text-2xl font-bold max-[600px]:text-xl max-[350px]:text-lg mb-6">
            {cta.title}
          </h3>
          <p className="text-lg max-[600px]:text-base max-[350px]:text-sm mb-6">
            {cta.description}
          </p>
          <div className="space-y-4 max-[600px]:space-y-3 max-[350px]:space-y-2">
            {cta.list.map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-3"
                data-aos="fade-left"
                data-aos-delay={i * 120}
              >
                <CircleCheckBig className="w-5 h-5 text-gray-900 max-[600px]:w-4 max-[600px]:h-4" />
                <span className="text-gray-900 max-[600px]:text-sm max-[350px]:text-xs">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors max-[600px]:px-6 max-[600px]:py-2.5 max-[350px]:px-4 max-[350px]:py-2"
          >
            {cta.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};