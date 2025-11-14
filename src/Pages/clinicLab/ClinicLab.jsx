import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Activity,
  FileText,
  Users,
  BarChart3,
  Shield,
  Clock,
  CircleCheckBig,
} from "lucide-react";
import { GlobalContext } from "../../context/Context";



const ClinicLab = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext); 

  // Color groups
  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const heroBg = mode
    ? "bg-gradient-to-br from-white to-gray-100"
    : "bg-gradient-to-br from-gray-900 to-gray-800";

  const heroTitle = mode ? "text-gray-900" : "text-white";
  const heroSub = mode ? "text-yellow-700" : "text-yellow-400";
  const heroDesc = mode ? "text-gray-700" : "text-gray-300";

  const sectionBg = mode ? "bg-gray-100" : "bg-gray-900";
  const cardBg = mode ? "bg-gray-200" : "bg-gray-700";
  const cardHover = mode ? "hover:bg-gray-300" : "hover:bg-gray-600";
  const cardTitle = mode ? "text-gray-900" : "text-white";
  const cardDesc = mode ? "text-gray-700" : "text-gray-300";

  const listText = mode ? "text-gray-700" : "text-gray-300";
  const ctaBg = mode
    ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
    : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900";

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const onScroll = () => AOS.refresh();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>
      {/* ================= SECTION 1: HERO ================= */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 ${heroBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl max-[600px]:text-4xl max-[350px]:text-3xl">
                🔬
              </div>

              <div>
                <h1
                  className={`text-5xl font-bold max-[600px]:text-4xl max-[350px]:text-3xl ${heroTitle}`}
                >
                  Clinic / Lab
                </h1>
                <p
                  className={`text-xl max-[600px]:text-lg max-[350px]:text-base ${heroSub}`}
                >
                  Laboratory Management Solutions
                </p>
              </div>
            </div>

            <p
              className={`text-xl max-[600px]:text-lg max-[350px]:text-base leading-relaxed ${heroDesc}`}
            >
              Modernize your clinic and laboratory operations with comprehensive
              sample tracking, automated lab reports, patient record management,
              and result processing systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8" data-aos="fade-up">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2"
              >
                Get Started Today
              </button>

              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2"
              >
                View All Services
              </button>
            </div>
          </div>

          {/* Right Image + Badge (NO POSITION CHANGE) */}
          <div
            className="relative flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            <img
              src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Clinic Lab"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover h-[450px]"
            />

            {/* Badge - EXACT SAME POSITION */}
            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center w-24 max-[400px]:-left-2"
              data-aos="zoom-in"
            >
              <Activity className="w-8 h-8 mb-1 text-gray-900 max-[600px]:w-6 max-[600px]:h-6" />
              <span className="text-sm font-bold leading-tight max-[600px]:text-xs max-[350px]:text-[10px]">
                Smart
              </span>
              <span className="text-sm font-semibold leading-tight max-[600px]:text-xs max-[350px]:text-[10px]">
                Lab
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURES ================= */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2
            className={`text-4xl font-bold max-[600px]:text-3xl max-[350px]:text-2xl mb-4 ${heroTitle}`}
          >
            Advanced Laboratory Information System
          </h2>

          <p
            className={`text-xl max-[600px]:text-lg max-[350px]:text-base ${heroDesc} max-w-3xl mx-auto`}
          >
            Streamline laboratory operations with intelligent sample tracking,
            automated reporting, and comprehensive quality management
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Activity className="w-8 h-8 text-yellow-400" />,
              title: "Sample Tracking",
              desc: "Comprehensive specimen tracking from collection to analysis with barcode integration.",
            },
            {
              icon: <FileText className="w-8 h-8 text-yellow-400" />,
              title: "Lab Reports",
              desc: "Automated report generation, digital delivery, and result verification systems.",
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: "Patient Records",
              desc: "Secure patient data management with medical history and test result integration.",
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
              title: "Result Management",
              desc: "Digital result processing, quality control, and automated notifications to physicians.",
            },
            {
              icon: <Shield className="w-8 h-8 text-yellow-400" />,
              title: "Compliance Management",
              desc: "Regulatory compliance tracking, audit trails, and quality assurance protocols.",
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title: "Workflow Automation",
              desc: "Streamlined lab workflows, appointment scheduling, and equipment management.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3
                className={`text-xl font-semibold max-[600px]:text-lg max-[350px]:text-base mb-3 ${cardTitle}`}
              >
                {item.title}
              </h3>

              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: BENEFITS + CTA ================= */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* BENEFITS */}
          <div data-aos="fade-right">
            <h2
              className={`text-4xl font-bold max-[600px]:text-3xl max-[350px]:text-2xl mb-8 ${heroTitle}`}
            >
              Precision in Every Process
            </h2>

            <div className="space-y-6">
              {[
                "Reduce sample processing time by 50%",
                "Eliminate manual report generation",
                "Improve result accuracy and reliability",
                "Streamline patient communication",
                "Ensure regulatory compliance",
                "Optimize lab equipment utilization",
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0 max-[600px]:w-5 max-[600px]:h-5" />
                  <span
                    className={`${listText} text-lg max-[600px]:text-base max-[350px]:text-sm`}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA BOX */}
          <div
            className={`${ctaBg} p-8 rounded-2xl shadow-xl max-[600px]:p-6 max-[350px]:p-4`}
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold max-[600px]:text-xl max-[350px]:text-lg mb-6">
              Ready to Modernize Your Lab?
            </h3>

            <p className="text-lg max-[600px]:text-base max-[350px]:text-sm mb-6">
              Join leading clinics and laboratories that have improved efficiency
              and accuracy with our comprehensive management solutions.
            </p>

            <div className="space-y-4 max-[600px]:space-y-3 max-[350px]:space-y-2">
              {[
                "Custom integration with existing equipment",
                "Staff training and system certification",
                "Compliance support and validation",
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-left"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-5 h-5 text-gray-900 max-[600px]:w-4 max-[600px]:h-4" />
                  <span className="text-gray-900 max-[600px]:text-sm max-[350px]:text-xs">
                    {t}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors max-[600px]:px-6 max-[600px]:py-2.5 max-[350px]:px-4 max-[350px]:py-2"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </div>
  );
};

export default ClinicLab;