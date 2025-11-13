import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Target, Eye, Lightbulb, Heart, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

function AboutPage() {

  const {t} = useTranslation()
  const {section1} = t("abt")
  const {section2} = t("abt")
  const {section3} = t("abt")
  const {section4}= t("abt")

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

      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            data-aos="zoom-in"
          >
            {section1.title1}
          </h1>

          <p
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
           {section1.line1}
          </p>
        </div>
      </div>

      {/* ---------------- MISSION + VISION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          {/* Mission */}
          <div
            className="bg-gray-800 rounded-3xl p-10"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">{section1.title2}</h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
            {section1.line2}
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-gray-800 rounded-3xl p-10"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">{section1.title3}</h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
            {section1.line3}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- STATS SECTION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-0">
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-12 md:p-16"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

              {[
                { value: "500+", text: section2.line1 },
                { value: "12", text: section2.line2 },
                { value: "50+", text: section2.line3 },
                { value: "5", text: section2.line4 },
              ].map((item, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-900 font-semibold text-lg">
                    {item.text}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* ---------------- VALUES SECTION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-aos="zoom-in"
            >
              {section3.title}
            </h2>

            <p
              className="text-xl text-gray-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {section3.line}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              { Icon: Lightbulb, title: section3.cards.title1 },
              { Icon: Heart, title: section3.cards.title2 },
              { Icon: Award, title: section3.cards.title3 },
              { Icon: Users, title: section3.cards.title4 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-2xl p-8 text-center"
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="flex justify-center mb-6">
                  <item.Icon className="w-10 h-10 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.title === section3.cards.title1  &&
                    section3.cards.line1}

                  {item.title === section3.cards.title2  &&
                    section3.cards.line2}

                  {item.title === section3.cards.title3  &&
                    section3.cards.line3}

                  {item.title === section3.cards.title4  &&
                    section3.cards.line4}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ---------------- OUR STORY SECTION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-12"
            data-aos="zoom-in"
          >
            {section4.title}
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            {[
              section4.line1,
              section4.line2,
              section4.line3
            ].map((text, i) => (
              <p
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                {text}
              </p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutPage;