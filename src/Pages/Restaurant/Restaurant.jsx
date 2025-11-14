import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./../../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShoppingCart,
  Utensils,
  Users,
  ChartNoAxesColumnIncreasing,
  Calendar,
  Clock,
  CircleCheckBig,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Restaurant = () => {
  const navigate = useNavigate();

  const {t} = useTranslation()
  const {section1} = t("rest")
  const {section2} = t("rest")
  const {section3} = t("rest")

  const { mode } = useContext(GlobalContext);

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const heroBg = mode
    ? "bg-gradient-to-br from-white to-gray-100"
    : "bg-gradient-to-br from-gray-900 to-gray-800";

  const heroTitle = mode ? "text-gray-900" : "text-white";
  const heroSub = mode ? "text-yellow-600" : "text-yellow-400";
  const heroDesc = mode ? "text-gray-700" : "text-gray-300";

  const sectionBg = mode ? "bg-gray-200" : "bg-gray-800";
  const cardBg = mode ? "bg-gray-300" : "bg-gray-700";
  const cardHover = mode ? "hover:bg-gray-400" : "hover:bg-gray-600";
  const cardText = mode ? "text-gray-900" : "text-white";
  const cardDesc = mode ? "text-gray-700" : "text-gray-300";

  const listText = mode ? "text-gray-700" : "text-gray-300";

  const rightBoxBg = mode
    ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
    : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900";

  /* ---------------- AOS INIT ---------------- */
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${pageBg}`}>

      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${heroBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl" data-aos="zoom-in">🍽️</div>
              <div>
                <h1 className={`text-5xl font-bold max-[500px]:text-4xl ${heroTitle}`} data-aos="fade-up">
                 {section1.title}
                </h1>
                <p className={`text-xl ${heroSub}`} data-aos="fade-up" data-aos-delay="100">
                   {section1.line1}
                </p>
              </div>
            </div>

            <p
              className={`text-xl leading-relaxed mb-8 ${heroDesc}`}
              data-aos="fade-up"
              data-aos-delay="150"
            >
                      {section1.line2}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                   {section1.button1}
              </button>

              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                   {section1.button2}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
              data-aos="zoom-in"
              data-aos-delay="200"
            />

            <div
              className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center w-20"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Utensils className="w-10 h-10 mb-1 text-gray-900" />
              <span className="text-sm font-bold">Smart</span>
              <span className="text-sm font-semibold">Kitchen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: FEATURES ---------------- */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${heroTitle}`} data-aos="fade-up">
            {section2.title}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${heroDesc}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {section2.line}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <ShoppingCart className="w-8 h-8 text-yellow-400" />,
               title: section2.cards.title1,
              desc: section2.cards.line1,
            },
            {
              icon: <Utensils className="w-8 h-8 text-yellow-400" />,
              title: section2.cards.title2,
                desc: section2.cards.line2,
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: section2.cards.title3,
                desc:section2.cards.line3,
            },
            {
              icon: (
                <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />
              ),
              title: section2.cards.title4,
              desc: section2.cards.line4,
            },
            {
              icon: <Calendar className="w-8 h-8 text-yellow-400" />,
              title:section2.cards.title5,
              desc: section2.cards.line5,
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title:section2.cards.title6,
                desc: section2.cards.line6,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group`}
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className={`text-xl font-semibold mb-3 ${cardText}`}>{item.title}</h3>
              <p className={`${cardDesc}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 3: TRANSFORMATION ---------------- */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${pageBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div data-aos="fade-right">
            <h2 className={`text-4xl font-bold mb-8 ${heroTitle}`} data-aos="fade-up">
              {section3.title1}
            </h2>

            <div className="space-y-4">
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
                  className="flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400" />
                  <span className={`text-lg ${listText}`}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className={`${rightBoxBg} p-8 rounded-2xl shadow-xl`}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-6" data-aos="fade-up">
             {section3.title2}
            </h3>

            <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="100">
               {section3.line7}
            </p>

            <div className="space-y-3 mb-6">
              {[
                 section3.line8,
                section3.line9,
                section3.line10,
              ].map((text, i) => (
                <div
                  className="flex items-center space-x-3"
                  key={i}
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-6 h-6 text-gray-900" />
                  <span className="text-gray-900 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
             {section3.button}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Restaurant;