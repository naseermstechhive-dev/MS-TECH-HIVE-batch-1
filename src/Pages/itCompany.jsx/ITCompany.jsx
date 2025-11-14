// src/pages/ITCompany.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Monitor,
  Users,
  BarChart3,
  FileText,
  Calendar,
  Clock,
  CircleCheckBig,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../context/Context";

const ITCompany = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext); 
  
  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const heroBg = mode
    ? "bg-gradient-to-br from-white to-gray-100"
    : "bg-gradient-to-br from-gray-900 to-gray-800";
  const heroTitle = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const heroSub = mode ? "text-yellow-600" : "text-yellow-400";
  const heroDesc = mode ? "text-gray-700" : "text-gray-300";

  const sectionBg = mode ? "bg-gray-100" : "bg-gray-900";
  const cardBg = mode ? "bg-gray-300" : "bg-gray-700";
  const cardHover = mode ? "hover:bg-gray-400" : "hover:bg-gray-600";
  const cardTitle = mode ? "text-gray-900" : "text-white";
  const cardDesc = mode ? "text-gray-700" : "text-gray-300";

  const listText = mode ? "text-gray-700" : "text-gray-300";

  const rightBoxBg = mode
    ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
    : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900";

  const {t} = useTranslation()
  const {section1} = t("it")
  const {section2} = t("it")
  const {section3} = t("it")

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const onScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>
      {/* ================= SECTION 1: HERO ================= */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 ${heroBg} max-[350px]:py-12 max-[350px]:px-2 max-[600px]:py-16 max-[600px]:px-3`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-[600px]:gap-8 max-[350px]:gap-6">
          {/* left side */}
          <div className="space-y-8 max-[600px]:space-y-6 max-[350px]:space-y-4" data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6 max-[600px]:space-x-2 max-[350px]:space-x-1">
              <div className="text-5xl max-[600px]:text-4xl max-[350px]:text-3xl">💻</div>
              <div>
                <h1 className={`text-5xl ${heroTitle} max-[600px]:text-4xl max-[350px]:text-3xl`}>{section1.title}</h1>
                <p className={`text-xl ${heroSub} max-[600px]:text-lg max-[350px]:text-base`}> {section1.line1}</p>
              </div>
            </div>

            <p className={`text-xl leading-relaxed mb-0 ${heroDesc} max-[600px]:text-lg max-[350px]:text-base max-[350px]:leading-relaxed`}>
                         {section1.line2}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-[600px]:gap-3 max-[350px]:gap-2" data-aos="fade-up">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2 max-[350px]:text-sm"
              >
                 {section1.button1}
              </button>

              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2 max-[350px]:text-sm"
              >
              {section1.button2}
              </button>
            </div>
          </div>

          {/* right side image + yellow badge */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="IT Company"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover max-[600px]:max-w-md max-[400px]:max-w-[95%]"
              style={{ maxHeight: 460 }}
            />

            {/* yellow badge overlapping image (Monitor icon) */}
            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-24 max-[600px]:w-20 max-[600px]:p-3 max-[350px]:w-16 max-[350px]:p-2 max-[400px]:-left-2"
              data-aos="zoom-in"
            >
              <Monitor className="w-6 h-6 text-gray-900 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4" />
              <div className="font-bold max-[600px]:text-sm max-[350px]:text-xs">Smart</div>
              <div className="text-sm max-[600px]:text-xs max-[350px]:text-[10px]">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURES GRID ================= */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg} max-[350px]:py-12 max-[350px]:px-2 max-[600px]:py-16 max-[600px]:px-3`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-[600px]:mb-12 max-[350px]:mb-8" data-aos="fade-up">
            <h2 className={`text-4xl font-bold mb-4 ${heroTitle} max-[600px]:text-3xl max-[350px]:text-2xl`}> {section2.title}</h2>
            <p className={`${heroDesc} text-xl max-w-3xl mx-auto max-[600px]:text-lg max-[350px]:text-base`}>
             {section2.line}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-[600px]:gap-6 max-[350px]:gap-4">
            {/* Card 1 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <Monitor className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${cardTitle} max-[600px]:text-lg max-[350px]:text-base`}>{section2.cards.title1}</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                {section2.cards.line1}
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <Users className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${cardTitle} max-[600px]:text-lg max-[350px]:text-base`}>{section2.cards.title2}</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
               {section2.cards.line2}
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <BarChart3 className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${cardTitle} max-[600px]:text-lg max-[350px]:text-base`}>{section2.cards.title3}</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                      {section2.cards.line3}
              </p>
            </div>

            {/* Card 4 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <FileText className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${cardTitle} max-[600px]:text-lg max-[350px]:text-base`}>{section2.cards.title4}</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
              {section2.cards.line4}
              </p>
            </div>

            {/* Card 5 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <Calendar className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${cardTitle} max-[600px]:text-lg max-[350px]:text-base`}>{section2.cards.title5}</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
               {section2.cards.line5}
              </p>
            </div>

            {/* Card 6 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <Clock className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${cardTitle} max-[600px]:text-lg max-[350px]:text-base`}>{section2.cards.title6}</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
              {section2.cards.line6}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: BENEFITS + CTA ================= */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg} max-[350px]:py-12 max-[350px]:px-2 max-[600px]:py-16 max-[600px]:px-3`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-[600px]:gap-8 max-[350px]:gap-6">
          {/* Left list */}
          <div data-aos="fade-right">
            <h2 className={`text-4xl font-bold mb-8 ${heroTitle} max-[600px]:text-3xl max-[350px]:text-2xl`}>{section3.title1}</h2>

            <div className="space-y-4 max-[600px]:space-y-3 max-[350px]:space-y-2">
              {[
                section3.line1,
           section3.line2,
           section3.line3,
           section3.line4,
           section3.line5,
           section3.line6,
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 max-[600px]:space-x-2 max-[350px]:space-x-1"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4" />
                  <span className={`text-lg ${listText} max-[600px]:text-base max-[350px]:text-sm`}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className={`${rightBoxBg} p-8 rounded-2xl text-gray-900 shadow-xl max-[600px]:p-6 max-[350px]:p-4`} data-aos="zoom-in">
            <h3
              className="text-2xl font-bold mb-6 max-[600px]:text-xl max-[350px]:text-lg max-[350px]:mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
                  {section3.title2}
            </h3>

            <p
              className="text-lg mb-6 max-[600px]:text-base max-[350px]:text-sm max-[350px]:mb-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
               {section3.line7}
            </p>

            <div className="space-y-4 max-[600px]:space-y-3 max-[350px]:space-y-2">
              {[
                  section3.line8,
          section3.line9,
          section3.line10,
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 max-[600px]:space-x-2 max-[350px]:space-x-1"
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0 max-[600px]:w-4 max-[600px]:h-4 max-[350px]:w-3 max-[350px]:h-3" />
                  <span className="text-gray-900 max-[600px]:text-sm max-[350px]:text-xs">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors max-[600px]:px-6 max-[600px]:py-2.5 max-[350px]:px-4 max-[350px]:py-2 max-[350px]:text-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
                {section3.button}
            </button>
          </div>
        </div>
      </section>

      {/* small spacer before footer area (footer exists separately) */}
      <div className="h-8 max-[350px]:h-4" />
    </div>
  );
};

export default ITCompany;