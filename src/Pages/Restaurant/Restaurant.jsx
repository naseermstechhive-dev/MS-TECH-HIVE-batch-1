import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const Restaurant = () => {
  const navigate = useNavigate();

  // Initialize AOS (continuous animations)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
        data-aos="fade-up"
      >
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🍽️</div>
              <div>
                <h1 className="text-5xl font-bold text-white">Restaurant</h1>
                <p className="text-xl text-yellow-400">
                  Food Service Automation
                </p>
              </div>
            </div>

            <p
              className="text-xl text-gray-300 leading-relaxed mb-8"
              data-aos="fade-up"
            >
              Optimize your restaurant operations with comprehensive order
              management, billing systems, table tracking, and kitchen
              automation solutions.
            </p>

            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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

          {/* Right Image with Smart Kitchen Badge */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
            />
            <div
              className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center w-20 h-30"
              data-aos="zoom-in"
            >
              <Utensils className="w-10 h-10 mb-1 text-gray-900" />
              <span className="text-sm font-bold leading-tight">Smart</span>
              <span className="text-sm font-semibold leading-tight">
                Kitchen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: FEATURES ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Restaurant Management Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From order taking to customer satisfaction, automate every aspect of
            your restaurant operations.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          {[
            {
              icon: <ShoppingCart className="w-8 h-8 text-yellow-400" />,
              title: "Order Management System",
              desc: "Streamlined order processing from dine-in, takeout, and delivery with real-time kitchen coordination.",
            },
            {
              icon: <Utensils className="w-8 h-8 text-yellow-400" />,
              title: "Kitchen Automation",
              desc: "Digital kitchen displays, prep time tracking, and automated order prioritization for optimal efficiency.",
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: "Table Management",
              desc: "Smart table tracking, reservation management, and seating optimization with waitlist automation.",
            },
            {
              icon: (
                <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />
              ),
              title: "POS & Billing Systems",
              desc: "Integrated point-of-sale with inventory tracking, payment processing, and automated billing.",
            },
            {
              icon: <Calendar className="w-8 h-8 text-yellow-400" />,
              title: "Staff Scheduling",
              desc: "Automated staff scheduling, shift management, and performance tracking systems.",
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title: "Delivery Tracking",
              desc: "Real-time delivery management with driver tracking and customer notifications.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
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
      </section>

      {/* ---------------- SECTION 3: TRANSFORMATION ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-8">
              Serve Success, Not Just Food
            </h2>
            <div className="space-y-4">
              {[
                "Reduce order processing time by 45%",
                "Minimize food waste with smart inventory",
                "Optimize table turnover and seating",
                "Automate delivery and pickup orders",
                "Track staff performance and scheduling",
                "Increase customer satisfaction scores",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-6">
              Ready to Transform Your Restaurant?
            </h3>
            <p className="text-lg mb-6">
              Join successful restaurants that have increased efficiency and
              customer satisfaction with our automation solutions.
            </p>

            <div className="space-y-4">
              {[
                "Custom setup for your restaurant type",
                "Staff training and onboarding",
                "24/7 technical support",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-900">{text}</span>
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
    </div>
  );
};

export default Restaurant;
