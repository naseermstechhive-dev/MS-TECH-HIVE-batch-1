// src/pages/industries/Industries.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import { GlobalContext } from "./../../context/Context";

const industries = [
  {
    key: "hospital",
    title: "Hospital",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🏥",
    desc:
      "Streamline patient management, appointments, and medical records with automated workflows.",
    features: ["Patient Registration", "Appointment Scheduling", "Medical Records", "Billing Systems"],
    link: "/hospital",
  },
  {
    key: "school",
    title: "School",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🎓",
    desc:
      "Automate attendance tracking, parent communication, and administrative tasks.",
    features: ["Student Attendance", "Parent Portal", "Grade Management", "Communication Tools"],
    link: "/school",
  },
  {
    key: "college",
    title: "College",
    image:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🏛️",
    desc:
      "Comprehensive admission management, analytics dashboards, and student portals.",
    features: ["Admission Management", "Student Dashboards", "Analytics", "Course Management"],
    link: "/college",
  },
  {
    key: "restaurant",
    title: "Restaurant",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🍽️",
    desc:
      "Optimize order management, billing systems, and table tracking operations.",
    features: ["Order Management", "POS Systems", "Table Tracking", "Kitchen Automation"],
    link: "/restaurant",
  },
  {
    key: "office",
    title: "Office",
    image:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "💼",
    desc:
      "Transform HR processes and automate daily administrative workflows.",
    features: ["HR Management", "Task Automation", "Document Management", "Employee Portals"],
    link: "/office",
  },
  {
    key: "retail",
    title: "Retail Shop",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🛍️",
    desc:
      "Manage inventory, point-of-sale systems, and customer relationships efficiently.",
    features: ["Inventory Management", "POS Systems", "Customer CRM", "Sales Analytics"],
    link: "/retail-shop",
  },
  {
    key: "construction",
    title: "Construction",
    image:
      "https://www.gannestonconstruction.com/wp-content/uploads/2022/09/5-types-of-building-construction-ganneston-construction.jpg",
    emoji: "🏗️",
    desc:
      "Track projects, manage worker schedules, and monitor progress in real-time.",
    features: ["Project Tracking", "Worker Management", "Progress Monitoring", "Resource Planning"],
    link: "/construction",
  },
  {
    key: "logistics",
    title: "Logistics",
    image:
      "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🚚",
    desc:
      "Optimize fleet management, route planning, and delivery tracking systems.",
    features: ["Fleet Management", "Route Optimization", "Delivery Tracking", "Warehouse Management"],
    link: "/logistics",
  },
  {
    key: "it",
    title: "IT Company",
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "💻",
    desc:
      "Enhance project management with dashboards and client communication portals.",
    features: ["Project Dashboards", "Client Portals", "Team Collaboration", "Resource Management"],
    link: "/it-company",
  },
  {
    key: "ecommerce",
    title: "E-commerce",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🛒",
    desc:
      "Integrate CRM systems, chatbots, and comprehensive analytics platforms.",
    features: ["Customer CRM", "AI Chatbots", "Sales Analytics", "Order Management"],
    link: "/e-commerce",
  },
  {
    key: "clinic",
    title: "Clinic / Lab",
    image:
      "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🔬",
    desc:
      "Streamline sample tracking, lab reports, and patient communication.",
    features: ["Sample Tracking", "Lab Reports", "Patient Records", "Result Management"],
    link: "/clinic-lab",
  },
];

const Industries = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext);

  /** ---------------- THEME VARIABLES ---------------- */
  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const headingTitle = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const headingSub = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const cardBg = mode ? "bg-gray-100" : "bg-gray-800";
  const cardHover = mode ? "hover:bg-gray-200" : "hover:bg-gray-700";
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardDesc = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const featureText = mode ? "text-gray-700 font-medium" : "text-gray-400";

  const ctaBg = "bg-gradient-to-r from-yellow-600 to-yellow-500";
  const ctaTitle = "text-gray-900 font-bold";
  const ctaSub = "text-gray-800";
  const ctaBtn = mode ? "bg-gray-900 text-white" : "bg-gray-900 text-white";

  /** ---------------- AOS INIT ---------------- */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>
      {/* Main content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className={`text-5xl md:text-6xl mb-6 ${headingTitle}`}>
              Industries We Serve
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${headingSub}`}>
              Specialized automation solutions tailored to your industry.
            </p>
          </div>

          {/* Industry cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, idx) => {
              const delay = 100 + idx * 100;
              return (
                <div
                  key={item.key}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group ${cardBg} ${cardHover}`}
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4 text-4xl">{item.emoji}</div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className={`text-2xl mb-3 ${cardTitle}`}>
                      {item.title}
                    </h3>
                    <p className={`mb-4 leading-relaxed ${cardDesc}`}>{item.desc}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-3">KEY FEATURES:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.features.map((f, i) => (
                          <div key={i} className={`text-sm ${featureText}`}>
                            • {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(item.link)}
                      className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={`mt-20 text-center ${ctaBg} rounded-2xl p-12`}
            data-aos="fade-up"
          >
            <h2 className={`text-3xl md:text-4xl mb-4 ${ctaTitle}`}>
              Don't See Your Industry?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${ctaSub}`}>
              We work with businesses across many sectors. Let's discuss your needs!
            </p>

            <button
              onClick={() => navigate("/contact")}
              className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors ${ctaBtn}`}
            >
              Get Custom Solution
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Industries;