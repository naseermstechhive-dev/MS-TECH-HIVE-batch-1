// src/pages/Logistics.jsx
import React, { useEffect } from "react";
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

const Logistics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,   
      mirror: true,  
      offset: 120,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* ========================================================= */}
      {/* ===================== SECTION 1: HERO ===================== */}
      {/* ========================================================= */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🚚</div>
              <div>
                <h1 className="text-5xl font-bold text-white">Logistics</h1>
                <p className="text-xl text-yellow-400">Transportation Solutions</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              Optimize your logistics operations with comprehensive fleet
              management, route optimization, delivery tracking, and warehouse
              management systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* RIGHT IMAGE + SMART BADGE */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Logistics"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
            />

            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-24"
              data-aos="zoom-in"
            >
              <MapPin className="w-6 h-6 text-gray-900" />
              <div className="text-center">
                <span className="block text-sm font-semibold leading-tight">Smart</span>
                <span className="block text-sm font-semibold leading-tight">Routes</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* ==================== SECTION 2: FEATURES ================= */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Logistics Management Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From fleet management to last-mile delivery, optimize every aspect
              of your logistics operations.
            </p>
          </div>

          {/* GRID (6 CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8 text-yellow-400" />,
                title: "Fleet Management",
                desc:
                  "Comprehensive vehicle tracking, maintenance scheduling, and driver management systems.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-yellow-400" />,
                title: "Route Optimization",
                desc:
                  "AI-powered route planning for maximum efficiency, reduced fuel costs, and faster deliveries.",
              },
              {
                icon: <Package className="w-8 h-8 text-yellow-400" />,
                title: "Shipment Tracking",
                desc:
                  "Real-time package tracking with customer notifications and delivery confirmations.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
                title: "Analytics Dashboard",
                desc:
                  "Performance metrics, delivery analytics, and operational efficiency reporting.",
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-400" />,
                title: "Driver Management",
                desc:
                  "Driver scheduling, performance tracking, and communication systems.",
              },
              {
                icon: <Clock className="w-8 h-8 text-yellow-400" />,
                title: "Delivery Automation",
                desc:
                  "Automated delivery scheduling, dispatch management, and customer communication.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ==================== SECTION 3: BENEFITS ================= */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT LIST */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-8">
              Deliver Excellence Every Mile
            </h2>

            <div className="space-y-6">
              {[
                "Reduce delivery times by 40%",
                "Optimize fuel consumption and routes",
                "Improve customer satisfaction scores",
                "Automate dispatch and scheduling",
                "Real-time package and fleet tracking",
                "Reduce operational costs by 25%",
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

          {/* RIGHT CTA CARD */}
          <div
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900 shadow-xl"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-6">
              Ready to Optimize Your Fleet?
            </h3>

            <p className="text-lg mb-6">
              Join logistics companies that have reduced costs and improved
              delivery times with our comprehensive solutions.
            </p>

            <div className="space-y-4">
              {[
                "Custom solution for your fleet size",
                "Driver training and mobile app support",
                "24/7 monitoring and support",
              ].map((txt, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-left"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-900 text-lg">{txt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
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