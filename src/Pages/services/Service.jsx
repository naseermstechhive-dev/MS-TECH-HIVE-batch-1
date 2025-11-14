import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Palette, Code, Zap, TrendingUp, BarChart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

function ServicesPage() {

  const {t} = useTranslation()
  const {section1} = t("serv")
  const {section2} = t("serv")
  const {section3} = t("serv")
  // const {section4}= t("serv")

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,    
      mirror: true,   
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* ---------------- MAIN PAGE CONTENT ---------------- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-white mb-6" data-aos="zoom-in">
              {section1.title}
            </h1>

            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {section1.line}
            </p>
          </div>

          {/* ------------------------ CONTENT START ------------------------ */}
          <div className="space-y-16">

            {/* ---------------- Design & Branding Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
                    <Palette className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
                  {section2.title1}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {num === 1 ? section2.card1.title1 :
                       num === 2 ? section2.card1.title2 :
                       section2.card1.title3}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {num === 1 && section2.card1.line1}
                      {num === 2 && section2.card1.line2}
                      {num === 3 && section2.card1.line3}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Marketing & Ads ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-green-600 to-green-800">
                    <TrendingUp className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">{section2.title2}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {
                        num === 1 ? section2.card3.title1:
                        num === 2 ?section2.card3.title2 :
                        num === 3 ? section2.card3.title3 :
                        section2.card3.title4
                      }
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {
                        num === 1 ? section2.card2.line1 :
                        num === 2 ? section2.card2.line2 :
                        num === 3 ? section2.card2.line3 :
                        section2.card2.line4
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Automation Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800">
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">{section2.title3}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  section2.card3.title1,
                  section2.card3.title2,
                  section2.card3.title3
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {text}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {i === 0 && section2.card3.line1}
                      {i === 1 && section2.card3.line2}
                      {i === 2 && section2.card3.line3}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Analytics Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-red-600 to-red-800">
                    <BarChart className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">{section2.title4}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  section2.card4.title1,
                  section2.card4.title2
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {text}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {i === 0
                        ? section2.card4.line1
                        : section2.card4.line2}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Dev & Hosting ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800">
                    <Code className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
                {section2.title5}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  section2.card5.title1,
                  section2.card5.title2,
                  section2.card5.title3
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {text}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {i === 0
                        ? section2.card5.line1
                        : i === 1
                        ? section2.card5.line2
                        : section2.card5.line3}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Onboarding ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-800">
                    <Users className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">{section2.title6}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {section2.card6.title1}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                  {section2.card6.line1}
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
        <div className="w-full bg-gray-900 max-w-7xl mx-auto py-10 rounded-2xl flex justify-center">
          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12 w-full"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {section3.title}
            </h2>

            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            {section3.line}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                {section3.button1}
              </a>

              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                {section3.button2}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ServicesPage;