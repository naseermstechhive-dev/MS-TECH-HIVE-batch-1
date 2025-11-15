import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobalContext } from './../../context/Context';
import { useTranslation } from "react-i18next";
import { industries } from "../../data/industries";

import { useNavigate } from "react-router-dom";
import {
  Zap,
  TrendingUp,
  Briefcase,
  Award,
  ArrowRight,
  Building2,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Construction,
  Laptop,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,    
      mirror: false,
      easing: "ease-out",
    });

    AOS.refresh();
  }, [mode]);

  const heroBg = mode ? "from-white via-gray-100 to-white" : "from-gray-900 via-gray-800 to-gray-900";
  const heroText = mode ? "text-gray-900" : "text-white";
  const heroSubText = mode ? "text-gray-700 font-medium" : "text-gray-300";
  const whyBg = mode ? "bg-gray-100" : "bg-gray-800";
  const whyHeadingText = mode ? "text-gray-900" : "text-white";
  const whySubText = mode ? "text-gray-700 font-medium" : "text-gray-300";
  const whyCardBg = mode ? "bg-white" : "bg-gray-700";
  const whyCardHover = mode ? "hover:bg-gray-50" : "hover:bg-gray-600";
  const whyCardText = mode ? "text-gray-700 font-medium" : "text-gray-300";
  const industriesBg = mode ? "bg-white" : "bg-gray-900";
  const industriesHeadingText = mode ? "text-gray-900" : "text-white";
  const industriesSubText = mode ? "text-gray-700 font-medium" : "text-gray-300";
  const industriesCardBg = mode ? "bg-gray-100" : "bg-gray-800";
  const industriesCardHover = mode ? "hover:bg-gray-200" : "hover:bg-gray-700";
  const industriesLabelText = mode ? "font-semibold" : "font-medium";
  const readyPText = mode ? "text-gray-700 font-medium" : "text-gray-800";

  return (
    <div className={mode ? "bg-white text-gray-900" : "bg-gray-900 text-white"}>

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className={`relative bg-gradient-to-br ${heroBg} py-20 px-4 sm:px-6 lg:px-8`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="space-y-4">

              {/* Responsive Title */}
              <h1
                className={`
                text-[34px]
                sm:text-[38px]
                md:text-[45px]
                lg:text-6xl 
                font-bold leading-tight ${heroText}
                `}
                data-aos="zoom-in"
              >
                {t("home.heroTitle1")}
                <br />
                <span
                  className="text-[#facc15]"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                 {t("home.heroTitle2")}
                </span>
              </h1>

              {/* Responsive Paragraph */}
              <p
                className={`
                text-lg
                sm:text-xl 
                ${heroSubText} 
                max-w-lg
                `}
                data-aos="fade-up"
                data-aos-delay="300"
              >
               {t("home.heroSubtitle")}
              </p>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
              >
                {t("home.exploreServices")} <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#facc15] text-[#facc15] font-semibold rounded-lg hover:bg-[#facc15] hover:text-gray-900 transition-colors"
              >
                {t("home.getStarted")} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side Image/Card */}
          <div
            className="
            relative 
            w-full 
            h-64 sm:h-80 md:h-96 
            bg-gradient-to-br from-[#facc15] to-[#ca8a04] 
            rounded-2xl 
            flex items-center justify-center
          "
            data-aos="fade-left"
          >
            <div className="text-6xl sm:text-7xl md:text-8xl animate-turtle">🐢</div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-yellow-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* REMOVED INLINE TURTLE STYLE → NOW IN index.css */}

      {/* ---------------- WHY CHOOSE SECTION ---------------- */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${whyBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className={`text-[28px] sm:text-[32px] md:text-4xl font-bold mb-4 ${whyHeadingText}`}>
             {t("home.whyChooseTitle")}
            </h2>

            <p className={`text-lg sm:text-xl ${whySubText} max-w-3xl mx-auto`}>
              {t("home.whyChooseSubtitle")}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#facc15] mb-3" />,
                title: t("home.why1Title"),
                desc: t("home.why1Desc"),
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#facc15] mb-3" />,
                title: t("home.why2Title"),
                desc: t("home.why2Desc"),
              },
              {
                icon: <Briefcase className="w-8 h-8 text-[#facc15] mb-3" />,
                title: t("home.why3Title"),
                desc: t("home.why3Desc"),
              },
              {
                icon: <Award className="w-8 h-8 text-[#facc15] mb-3" />,
                title: t("home.why4Title"),
                desc: t("home.why4Desc"),
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className={`
                  ${whyCardBg}
                  p-8 rounded-xl 
                  ${whyCardHover}
                  transition-colors group 
                  hover:scale-110 transform duration-300
                `}
              >
                {item.icon}
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                <p className={whyCardText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES SECTION ---------------- */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${industriesBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className={`text-[28px] sm:text-[32px] md:text-4xl font-bold ${industriesHeadingText} mb-4`}>
              {t("home.industriesTitle")}
            </h2>

            <p className={`text-lg sm:text-xl ${industriesSubText} max-w-3xl mx-auto`}>
             {t("home.industriesSubtitle")}
            </p>
          </div>

          {/* Icons grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {industries.slice(0, 6).map((item, i) => (
              <div
                key={item.key}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                onClick={() => navigate(item.link)}
                className={`
                  ${industriesCardBg}
                  p-6 rounded-xl text-center 
                  ${industriesCardHover}
                  hover:scale-105 transition-all cursor-pointer
                `}
              >
                <div className="text-[#facc15]">
                  {
                    item.key === "hospital" ? (
                      <Building2 className="w-8 h-8 mx-auto mb-3" />
                    ) : item.key === "school" ? (
                      <GraduationCap className="w-8 h-8 mx-auto mb-3" />
                    ) : item.key === "college" ? (
                      <GraduationCap className="w-8 h-8 mx-auto mb-3" />
                    ) : item.key === "restaurant" ? (
                      <Utensils className="w-8 h-8 mx-auto mb-3" />
                    ) : item.key === "office" ? (
                      <Briefcase className="w-8 h-8 mx-auto mb-3" />
                    ) : item.key === "retailShop" ? (
                      <ShoppingBag className="w-8 h-8 mx-auto mb-3" />
                    ) : item.key === "construction" ? (
                      <Construction className="w-8 h-8 mx-auto mb-3" />
                    ) : item.key === "itCompany" ? (
                      <Laptop className="w-8 h-8 mx-auto mb-3" />
                    ) : null
                  }
                </div>

                <h3 className={`text-sm sm:text-base md:text-lg ${industriesLabelText}`}>
                  {t(`industries.${item.key}`)}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="zoom-in">
            <button
              onClick={() => navigate("/industries")}
              className="inline-flex items-center px-6 py-3 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
            >
              {t("home.viewAllIndustries")} <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- READY TO TRANSFORM SECTION ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r to-[#ca8a04] from-[#facc15] text-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-4xl font-bold mb-4" data-aos="zoom-in">
            {t("home.readyTitle")}
          </h2>

          <p
            className={`text-lg sm:text-xl ${readyPText} mb-8`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
           {t("home.readySubtitle")}
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
           {t("home.startJourney")} <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;