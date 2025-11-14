import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Target, Eye, Lightbulb, Heart, Award, Users } from "lucide-react";
import { GlobalContext } from "../../context/Context";

function AboutPage() {

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
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardText = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const sectionBg = mode ? "bg-white" : "bg-gray-900";

  const statsNum = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const statsLabel = mode ? "text-gray-900 font-semibold" : "text-gray-300 font-medium";

  const storyBg = mode ? "bg-gray-200" : "bg-gray-800";
  const storyText = mode ? "text-gray-700 font-medium" : "text-gray-300";

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>

      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className={`py-20 px-4 sm:px-6 lg:px-8 text-center ${sectionBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl mb-6 max-[400px]:text-3xl ${heroTitle}`}
            data-aos="zoom-in"
          >
            {section1.title1}
          </h1>

          <p
            className={`text-lg sm:text-xl max-w-4xl mx-auto ${heroSub}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
           {section1.line1}
          </p>
        </div>
      </div>

      {/* ---------------- MISSION + VISION ---------------- */}
      <div className={`px-4 sm:px-6 lg:px-8 py-12 transition-colors ${sectionBg}`}>
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-aos="fade-up"
        >

          {/* Mission */}
          <div
            className={`${cardBg} rounded-3xl p-8 sm:p-10 transition-colors`}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-yellow-400" />
              <h2 className={`text-2xl sm:text-3xl ${cardTitle}`}>Our Mission</h2>
            </div>

            <p className={`text-lg leading-relaxed ${cardText}`}>
              To help businesses across industries automate workflows and accelerate
              growth through innovative technology solutions.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`${cardBg} rounded-3xl p-8 sm:p-10 transition-colors`}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-10 h-10 text-yellow-400" />
              <h2 className={`text-2xl sm:text-3xl ${cardTitle}`}>Our Vision</h2>
            </div>

            <p className={`text-lg leading-relaxed ${cardText}`}>
              To become the leading provider of automation solutions globally,
              transforming how businesses operate and achieve success.
            </p>
          </div>

        </div>
      </div>

      {/* ---------------- STATS SECTION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-0">
        <div className="max-w-7xl mx-auto">

          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-10 sm:p-14 md:p-16"
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
                  <div className={`text-4xl sm:text-5xl md:text-6xl mb-2 ${statsNum}`}>
                    {item.value}
                  </div>
                  <div className={`text-base sm:text-lg ${statsLabel}`}>
                    {item.text}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* ---------------- VALUES SECTION ---------------- */}
      <div className={`px-4 sm:px-6 lg:px-8 py-20 ${sectionBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl mb-4 ${heroTitle}`}
              data-aos="zoom-in"
            >
              {section3.title}
            </h2>

            <p
              className={`text-lg sm:text-xl ${heroSub}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {section3.line}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[  
              { Icon: Lightbulb, title: "Innovation" },
              { Icon: Heart, title: "Customer First" },
              { Icon: Award, title: "Excellence" },
              { Icon: Users, title: "Collaboration" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${cardBg} rounded-2xl p-8 text-center transition-colors`}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="flex justify-center mb-6">
                  <item.Icon className="w-10 h-10 text-yellow-400" />
                </div>

                <h3 className={`text-xl sm:text-2xl mb-4 ${cardTitle}`}>
                  {item.title}
                </h3>

                <p className={`leading-relaxed ${cardText}`}>
                  {item.title === "Innovation" &&
                    "We explore new technologies to deliver cutting-edge solutions."}

                  {item.title === "Customer First" &&
                    "Your success is our priority — we build long-term relationships."}

                  {item.title === "Excellence" &&
                    "We maintain the highest standards in everything we do."}

                  {item.title === "Collaboration" &&
                    "We work closely with clients as trusted partners."}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ---------------- OUR STORY SECTION ---------------- */}
      <div className={`px-4 sm:px-6 lg:px-8 py-20 transition-colors ${storyBg}`}>
        <div className="max-w-5xl mx-auto text-center">

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl mb-12 ${heroTitle}`}
            data-aos="zoom-in"
          >
            {section4.title}
          </h2>

          <div className={`space-y-6 sm:space-y-8 ${storyText} leading-relaxed text-base sm:text-lg`}>
            {[
              "MS Tech Hive was founded with a simple yet powerful vision: to make advanced automation accessible to every business.",
              "We recognized that many companies were stuck with repetitive tasks and inefficient processes. Automation unlocks growth.",
              "Today, we're proud to have transformed hundreds of businesses — and our journey has just begun.",
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