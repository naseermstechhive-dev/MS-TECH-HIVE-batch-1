import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShoppingCart,
  Package,
  CreditCard,
  Users,
  ChartNoAxesColumnIncreasing,
  Clock,
  CircleCheckBig,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const RetailShop = () => {
  const navigate = useNavigate();

  const {t} = useTranslation()
  const {section1} = t("retl")
  const {section2} = t("retl")
  const {section3} = t("retl")

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,    
      mirror: true,    
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section
        data-aos="fade-up"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🛍️</div>
              <div>
                <h1 className="text-5xl font-bold text-white"> {section1.title}</h1>
                <p className="text-xl text-yellow-400">{section1.line1}</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {section1.line2}
            </p>

            <div className="flex flex-wrap gap-4">
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

          {/* Right - Image + Smart badge */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Retail"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-24">
              <ShoppingCart className="w-8 h-8 text-gray-900 font-extrabold" />
              <div className="text-center">
                <span className="block text-sm font-semibold leading-tight">Smart</span>
                <span className="block text-sm font-semibold leading-tight">Retail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: FEATURES GRID ---------------- */}
      <section data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{section2.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {section2.line}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Package className="w-8 h-8 text-yellow-400" />,
              title: section2.cards.title1,
              desc: section2.cards.line1,
            },
            {
              icon: <CreditCard className="w-8 h-8 text-yellow-400" />,
              title: section2.cards.title2,
              desc: section2.cards.line2,
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: section2.cards.title3,
              desc:section2.cards.line3,
            },
            {
              icon: <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />,
              title: section2.cards.title4,
              desc: section2.cards.line4,
            },
            {
              icon: <ShoppingCart className="w-8 h-8 text-yellow-400" />,
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
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

     {/* ---------------- SECTION 3: BENEFITS + CTA BOX ---------------- */}
<section data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left - bullets */}
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold text-white mb-8">   {section3.title1}</h2>

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
            data-aos-delay={i * 120}  // individual text animation
          >
            <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <span className="text-gray-300 text-lg">{text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right - yellow callout */}
    <div
      className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900 shadow-xl"
      data-aos="fade-left"
    >
      <h3 className="text-2xl font-bold mb-6">{section3.title2}</h3>

      <p className="text-lg mb-6">
      {section3.line7}
      </p>

      <div className="space-y-4 mb-6">
        {[
           section3.line8,
           section3.line9,
           section3.line10,
        ].map((text, i) => (
          <div
            key={i}
            className="flex items-center space-x-3"
            data-aos="fade-left"
            data-aos-delay={i * 120}   // staggered AOS for CTA list
          >
            <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
            <span className="text-gray-900 text-lg">{text}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/contact")}
        className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
      >
        {section3.button}
      </button>
    </div>

  </div>
</section>

    </div>
  );
};

export default RetailShop;
