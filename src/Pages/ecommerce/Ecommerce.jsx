import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Package,
  Box,
  CreditCard,
  CircleCheckBig,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Ecommerce = () => {
  const navigate = useNavigate();

  const {t} = useTranslation()
  const {section1} = t("ecom")
  const {section2} = t("ecom")
  const {section3} = t("ecom")

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false, 
      mirror: true, 
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ================= SECTION 1: HERO ================= */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT HERO TEXT */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🛒</div>
              <div>
                <h1 className="text-5xl font-bold text-white">{section1.title}</h1>
                <p className="text-xl text-yellow-400">{section1.line1}</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
            {section1.line2}
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
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

          {/* RIGHT IMAGE + YELLOW BADGE */}
          <div
            className="relative flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="E-commerce"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
              style={{ maxHeight: 420 }}
            />

            {/* yellow badge overlapping image */}
            <div
              className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-24"
              data-aos="zoom-in"
            >
              <ShoppingCart className="w-6 h-6 text-gray-900" />
              <div className="text-center">
                <span className="block text-sm font-semibold leading-tight">Smart</span>
                <span className="block text-sm font-semibold leading-tight">Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURES GRID ================= */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">
            {section2.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {section2.line}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{section2.cards.title1}</h3>
              <p className="text-gray-300">
              {section2.cards.line1}
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{section2.cards.title2}</h3>
              <p className="text-gray-300">
              {section2.cards.line2}
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{section2.cards.title3}</h3>
              <p className="text-gray-300">
              {section2.cards.line3}
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{section2.cards.title4}</h3>
              <p className="text-gray-300">
              {section2.cards.line4}
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{section2.cards.title5}</h3>
              <p className="text-gray-300">
              {section2.cards.line5}
              </p>
            </div>

            {/* Card 6 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{section2.cards.title6}</h3>
              <p className="text-gray-300">
              {section2.cards.line6}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: BENEFITS + CTA (with individual text animation) ================= */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left list with per-item AOS */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-8">   {section3.title1}</h2>

            <div className="space-y-6">
              {[
                 section3.line1,
                 section3.line2,
                 section3.line3,
                 section3.line4,
                 section3.line5,
                 section3.line6,
              ].map((txt, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right CTA card */}
          <div
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900 shadow-xl"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-6">{section3.title2}</h3>
            <p className="text-lg mb-6">
            {section3.line7}
            </p>

            <div className="space-y-4">
              {[
                section3.line8,
                section3.line9,
                section3.line10,
              ].map((txt, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-left"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-900">{txt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              {section3.button}
            </button>
          </div>
        </div>
      </section>

      {/* small spacer before footer (footer exists separately) */}
      <div className="h-8" />
    </div>
  );
};

export default Ecommerce;
