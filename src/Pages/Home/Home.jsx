import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobalContext } from './../../context/Context';

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
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext);

  const {t} = useTranslation()
  const {line1,line2} = t("description")
  const {section1} = t("home")
  const {section2} = t("home")
  const {section3} = t("home")
  const {section4}= t("home")
  // console.log(section1.title1);

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
                Automate Work.
                <br />
                <span
                  className="text-[#facc15]"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  Accelerate Growth.
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
                Transform your business operations with intelligent automation
                solutions tailored for your industry.
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
                {section1.button1} <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#facc15] text-[#facc15] font-semibold rounded-lg hover:bg-[#facc15] hover:text-gray-900 transition-colors"
              >
                {section1.button2} <ArrowRight className="w-5 h-5" />
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
              Why Choose MS Tech Hive?
            </h2>

            <p className={`text-lg sm:text-xl ${whySubText} max-w-3xl mx-auto`}>
              We combine cutting-edge technology with industry expertise to deliver solutions that drive real results.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#facc15] mb-3" />,
                title:section2.cards.c1.title,
                desc: section2.cards.c1.line,

              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#facc15] mb-3" />,
                title:section2.cards.c2.title,
                desc: section2.cards.c2.line,
              },
              {
                icon: <Briefcase className="w-8 h-8 text-[#facc15] mb-3" />,
                title:section2.cards.c3.title,
                desc: section2.cards.c3.line,
              },
              {
                icon: <Award className="w-8 h-8 text-[#facc15] mb-3" />,
                title:section2.cards.c4.title,
                desc: section2.cards.c4.line,
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
              Industries We Serve
            </h2>

            <p className={`text-lg sm:text-xl ${industriesSubText} max-w-3xl mx-auto`}>
              Specialized automation solutions across multiple industries
            </p>
          </div>

          {/* Icons grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Building2 className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3" />, label: "Healthcare" },
              { icon: <GraduationCap className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3" />, label: "Education" },
              { icon: <Utensils className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3" />, label: "Restaurant" },
              { icon: <ShoppingBag className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3" />, label: "Retail" },
              { icon: <Construction className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3" />, label: "Construction" },
              { icon: <Laptop className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3" />, label: "IT Company" },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                onClick={() => navigate(`/${item.label.toLowerCase()}`)}
                className={`
                  ${industriesCardBg}
                  p-6 rounded-xl text-center 
                  ${industriesCardHover}
                  hover:scale-105 transition-all cursor-pointer
                `}
              >
                <div className="text-[#facc15]">{item.icon}</div>
                <h3 className={`text-sm sm:text-base md:text-lg ${industriesLabelText}`}>{item.label}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="zoom-in">
            <button
              onClick={() => navigate("/industries")}
              className="inline-flex items-center px-6 py-3 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
            >
              {section3.button}<ArrowRight className="ml-2 w-5 h-5" />
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
            Ready to Transform Your Business?
          </h2>

          <p
            className={`text-lg sm:text-xl ${readyPText} mb-8`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join hundreds of businesses that have accelerated their growth with
            our automation solutions.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            {section4.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;