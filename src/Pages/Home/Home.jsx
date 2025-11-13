import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  
  const {t} = useTranslation()
  const {line1,line2} = t("description")
  const {section1} = t("home")
  const {section2} = t("home")
  const {section3} = t("home")
  const {section4}= t("home")

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,       
      mirror: true,     
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white">

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight" data-aos="zoom-in">
                Automate Work.
                <br />
                <span className="text-[#facc15]" data-aos="zoom-in" data-aos-delay="200">
                  Accelerate Growth.
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg" data-aos="fade-up" data-aos-delay="300">
                Transform your business operations with intelligent automation
                solutions tailored for your industry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
              >
                {section1.button1}<ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#facc15] text-[#facc15] font-semibold rounded-lg hover:bg-[#facc15] hover:text-gray-900 transition-colors"
              >
                {section1.button2}<ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side Animated Card */}
          <div
            className="relative w-full h-96 bg-gradient-to-br from-[#facc15] to-[#ca8a04] rounded-2xl flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="text-8xl animate-turtle">🐢</div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Turtle animation */}
      <style>
        {`
          @keyframes turtleMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(25px); }
          }
          .animate-turtle {
            animation: turtleMove 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* ---------------- WHY CHOOSE SECTION ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose MS Tech Hive?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver solutions that drive real results.
            </p>
          </div>

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
                className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group hover:scale-110 transform duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES SECTION ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {section3.line}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Building2 className="w-10 h-10 mx-auto mb-3" />, label: section3.card.one },
              { icon: <GraduationCap className="w-10 h-10 mx-auto mb-3" />, label: section3.card.two },
              { icon: <Utensils className="w-10 h-10 mx-auto mb-3" />, label: section3.card.three },
              { icon: <ShoppingBag className="w-10 h-10 mx-auto mb-3" />, label: section3.card.four },
              { icon: <Construction className="w-10 h-10 mx-auto mb-3" />, label: section3.card.five },
              { icon: <Laptop className="w-10 h-10 mx-auto mb-3" />, label: section3.card.six },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                onClick={() => navigate(`/${item.label.toLowerCase()}`)}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-[#facc15] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium">{item.label}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="zoom-in">
            <button
              onClick={() => navigate("/industries")}
              className="inline-flex items-center px-6 py-3 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
            >            {section3.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- READY TO TRANSFORM SECTION ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r text-gray-900 to-[#ca8a04] from-[#facc15]"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" data-aos="zoom-in">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl text-gray-800 mb-8" data-aos="fade-up" data-aos-delay="200">
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