import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Palette, Code, Zap, TrendingUp, BarChart, Users } from "lucide-react";
import { GlobalContext } from './../../context/Context';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function ServicesPage() {
  const {t} = useTranslation();
  const { mode } = useContext(GlobalContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,   
      mirror: false,
      easing: "ease-out",
    });

    AOS.refresh();
  }, [mode]);

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";

  const heroTitle = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const heroSub = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const cardBg = mode ? "bg-gray-100" : "bg-gray-800";
  const cardHover = mode ? "hover:bg-gray-200" : "hover:bg-gray-700";
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardText = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const sectionHeading = mode ? "text-gray-900 font-bold" : "text-white font-bold";
  const sectionText = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const ctaBoxBg = mode ? "bg-gray-100" : "bg-gray-900";
  const ctaTextMain = mode ? "text-gray-900 font-extrabold" : "text-gray-100 font-bold";
  const ctaTextSub = mode ? "text-gray-800 font-medium" : "text-gray-300";

  return (
    <div className={`min-h-screen ${pageBg}`}>

      {/* ---------------- MAIN PAGE CONTENT ---------------- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1
              className={`text-5xl mb-6 max-[400px]:text-4xl ${heroTitle}`}
              data-aos="zoom-in"
            >
              {t("services.heroTitle")}
            </h1>

            <p
              className={`text-xl max-w-3xl mx-auto ${heroSub}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("services.heroSubtitle")}
            </p>
          </div>

          {/* ------------------------ CONTENT START ------------------------ */}
          <div className="space-y-16">

            {/* ---------------- Design & Branding Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <h2
                  className={`text-3xl mb-4 ${sectionHeading}`}
                  data-aos="fade-up"
                >
                  {t("services.designBrandingTitle")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {num === 1 ? t("services.designWeb") :
                       num === 2 ? t("services.designGraphic") :
                       t("services.designBrandIdentity") }
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
                      {num === 1 && t("services.designWebDesc")}
                      {num === 2 && t("services.designGraphicDesc")}
                      {num === 3 && t("services.designBrandIdentityDesc")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Marketing & Ads ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>{t("services.marketingTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {
                        num === 1 ? t("services.marketingSeo") :
                        num === 2 ? t("services.marketingSocial") :
                        num === 3 ? t("services.marketingAiAds"):
                        t("services.marketingLanding")
                      }
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
                      {
                        num === 1 ? t("services.marketingSeoDesc") :
                        num === 2 ? t("services.marketingSocialDesc") :
                        num === 3 ? t("services.marketingAiAdsDesc") :
                        t("services.marketingLandingDesc")
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Automation Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>{t("services.automationTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  t("services.autoWhatsapp"),
                  t("services.autoLead"),
                  t("services.autoSocial")
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {text}
                    </h3>
                    <p className={`${cardText} leading-relaxed`}>
                      {i === 0 && t("services.autoWhatsappDesc")}
                      {i === 1 && t("services.autoLeadDesc")}
                      {i === 2 && t("services.autoSocialDesc")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Analytics Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>{t("services.analyticsTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  t("services.analyticsCampaign"),
                  t("services.analyticsBilling")
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {text}
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
                      {i === 0
                        ? t("services.analyticsCampaignDesc")
                        : t("services.analyticsBillingDesc")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Dev & Hosting ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>{t("services.devHostingTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  t("services.devMobile"),
                  t("services.devHosting"),
                  t("services.evIntegrations")
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {text}
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
                      {i === 0
                        ? t("services.devMobileDesc")
                        : i === 1
                        ? t("services.devHostingDesc")
                        : t("services.devIntegrationsDesc")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Onboarding ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>{t("services.onboardingTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  data-aos="zoom-in"
                  className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">1</span>
                  </div>

                  <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                    {t("services.onboardDemo")}
                  </h3>

                  <p className={`${cardText} leading-relaxed`}>
                    {t("services.onboardDemoDesc")}
                  </p>
                </div>
              </div>
            </div>

          </div>
          {/* ------------------------ CONTENT END ------------------------ */}

        </div>
      </div>

      {/* -------------------------- CTA FIXED -------------------------- */}
      <div className="w-full flex justify-center mt-20 px-4" data-aos="fade-up">
        <div className={`w-full ${ctaBoxBg} max-w-7xl mx-auto py-10 rounded-2xl flex justify-center`}>
          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12 w-full"
            data-aos="zoom-in"
          >
            <h2 className={`text-3xl mb-4 ${ctaTextMain}`}>
              {t("services.ctaTitle")}
            </h2>

            <p className={`text-xl mb-8 max-w-2xl mx-auto ${ctaTextSub}`}>
              {t("services.ctaSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                {t("services.ctaContact")}
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                {t("services.ctaLearnMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ServicesPage;