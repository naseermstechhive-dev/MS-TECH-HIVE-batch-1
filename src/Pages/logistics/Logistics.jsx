// src/pages/Logistics.jsx
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Truck,
  MapPin,
  Package,
  BarChart3,
  Users,
  Clock,
  CircleCheckBig,
} from "lucide-react";

import { GlobalContext } from "../../context/Context";

const Logistics = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext);

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";

  const heroBg = mode
    ? "bg-gradient-to-br from-white to-gray-100"
    : "bg-gradient-to-br from-gray-900 to-gray-800";

  const heroTitle = mode ? "text-gray-900" : "text-white";
  const heroSub = mode ? "text-yellow-600" : "text-yellow-400";
  const heroDesc = mode ? "text-gray-700" : "text-gray-300";

  const featureSectionBg = mode ? "bg-gray-200" : "bg-gray-900";
  const cardBg = mode ? "bg-gray-300" : "bg-gray-700";
  const cardHover = mode ? "hover:bg-gray-400" : "hover:bg-gray-600";
  const cardText = mode ? "text-gray-900" : "text-white";
  const cardDesc = mode ? "text-gray-700" : "text-gray-300";

  const listText = mode ? "text-gray-700" : "text-gray-300";

  const rightBoxBg = mode
    ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
    : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900";

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 120,
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>

      {/* ========================================================= */}
      {/* ===================== SECTION 1: HERO ===================== */}
      {/* ========================================================= */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 ${heroBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🚚</div>
              <div>
                <h1 className={`text-5xl font-bold ${heroTitle}`}>Logistics</h1>
                <p className={`text-xl ${heroSub}`}>Transportation Solutions</p>
              </div>
            </div>

            <p className={`text-xl leading-relaxed ${heroDesc}`}>
              Optimize your logistics operations with comprehensive fleet
              management, route optimization, delivery tracking, and warehouse
              management systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Get Started Today
              </button>

              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                View All Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE + BADGE */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Logistics"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
            />

            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg text-center space-y-1 w-24"
              data-aos="zoom-in"
            >
              <MapPin className="w-6 h-6 text-gray-900 mx-auto" />
              <span className="block text-sm font-semibold">Smart</span>
              <span className="block text-sm font-semibold">Routes</span>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* ==================== SECTION 2: FEATURES ================= */}
      {/* ========================================================= */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${featureSectionBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${heroTitle}`}>
            Complete Logistics Management Suite
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${heroDesc}`}>
            From fleet management to last-mile delivery, optimize every aspect
            of your logistics operations.
          </p>
        </div>

        {/* GRID (6 CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Truck className="w-8 h-8 text-yellow-400" />,
              title: "Fleet Management",
              desc: "Vehicle tracking, maintenance scheduling, and driver management.",
            },
            {
              icon: <MapPin className="w-8 h-8 text-yellow-400" />,
              title: "Route Optimization",
              desc: "AI-powered route planning for fast & fuel-efficient delivery.",
            },
            {
              icon: <Package className="w-8 h-8 text-yellow-400" />,
              title: "Shipment Tracking",
              desc: "Real-time tracking with customer notifications.",
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
              title: "Analytics Dashboard",
              desc: "KPIs, delivery analytics & efficiency insights.",
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: "Driver Management",
              desc: "Driver schedules, performance & communication.",
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title: "Delivery Automation",
              desc: "Automated dispatch & delivery scheduling.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${cardText}`}>{item.title}</h3>
              <p className={`${cardDesc}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================= */}
      {/* ==================== SECTION 3: BENEFITS ================= */}
      {/* ========================================================= */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${pageBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div data-aos="fade-right">
            <h2 className={`text-4xl font-bold mb-8 ${heroTitle}`}>
              Deliver Excellence Every Mile
            </h2>

            <div className="space-y-5">
              {[
                "Reduce delivery times by 40%",
                "Optimize fuel consumption & routes",
                "Improve customer satisfaction",
                "Automate dispatch & scheduling",
                "Real-time package & fleet tracking",
                "Cut operational costs by 25%",
              ].map((txt, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="flex items-center space-x-3"
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400" />
                  <span className={`text-lg ${listText}`}>{txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CTA BOX */}
          <div className={`${rightBoxBg} p-8 rounded-2xl shadow-xl`} data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Fleet?</h3>

            <p className="text-lg mb-6">
              Join top logistics companies using automation to improve delivery speed
              and reduce operational costs.
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Custom solution for your fleet size",
                "Driver training + mobile app support",
                "24/7 monitoring & assistance",
              ].map((txt, i) => (
                <div key={i} data-aos="fade-left" data-aos-delay={i * 120} className="flex items-center space-x-3">
                  <CircleCheckBig className="w-5 h-5 text-gray-900" />
                  <span className="text-gray-900 font-medium">{txt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Schedule Demo
            </button>
          </div>

        </div>
      </section>

      <div className="h-10" />
    </div>
  );
};

export default Logistics;