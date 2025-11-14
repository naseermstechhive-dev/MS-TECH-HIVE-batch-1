import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Clock,
  User,
  Calendar,
  FileText,
  CreditCard,
  Shield,
  BarChart3,
  CircleCheckBig,
} from "lucide-react";
import { GlobalContext } from "../../context/Context";

const Hospital = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext);

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const heroBg = mode
    ? "bg-gradient-to-br from-white to-gray-100"
    : "bg-gradient-to-br from-gray-900 to-gray-800";

  const heroTitle = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const heroSub = mode ? "text-yellow-600 font-semibold" : "text-[#facc15] font-medium";
  const heroDesc = mode ? "text-gray-700" : "text-gray-300";

  const cardSectionBg = mode ? "bg-gray-100" : "bg-gray-800";
  const smallCardBg = mode ? "bg-gray-200" : "bg-gray-700";
  const smallCardHover = mode ? "hover:bg-gray-300" : "hover:bg-gray-600";
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardDesc = mode ? "text-gray-700" : "text-gray-300";

  const listText = mode ? "text-gray-700" : "text-gray-300";

  const rightBoxBg =
    mode
      ? "bg-gradient-to-br from-yellow-400 to-yellow-300 text-gray-900"
      : "bg-gradient-to-br from-[#facc15] to-[#ca8a04] text-gray-900";

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      mirror: false,
      once: false,
    });

    AOS.refresh();
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>

      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 ${heroBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div data-aos="fade-right">
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4" data-aos="fade-up">
                <div className="text-5xl" data-aos="zoom-in">🏥</div>

                <div>
                  <h1
                    className={`text-5xl max-[500px]:text-4xl ${heroTitle}`}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Hospital
                  </h1>

                  <p
                    className={`text-xl ${heroSub}`}
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    Healthcare Automation Solutions
                  </p>
                </div>
              </div>
            </div>

            <p
              className={`text-xl leading-relaxed mb-8 ${heroDesc}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Transform your hospital operations with advanced automation:
              patient management, appointments, EMR, and billing systems.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-4 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
              >
                Get Started Today
              </button>

              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center px-8 py-4 border-2 border-[#facc15] text-[#facc15] font-semibold rounded-lg hover:bg-[#facc15] hover:text-gray-900 transition-colors"
              >
                View All Services
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hospital"
              className="rounded-2xl shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            />

            {/* Badge */}
            <div
              className="absolute -bottom-6 -left-6 bg-[#facc15] text-gray-900 p-4 rounded-xl shadow-xl w-24 text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Clock className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: COMPREHENSIVE SOLUTIONS ---------------- */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${cardSectionBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 ${heroTitle}`}
              data-aos="fade-up"
            >
              Comprehensive Hospital Solutions
            </h2>

            <p
              className={`text-xl ${heroDesc}`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our automation platform supports all healthcare workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="w-8 h-8 text-yellow-500" />,
                title: "Patient Management System",
                desc: "Automate patient registration, medical history tracking, and more.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-yellow-500" />,
                title: "Appointment Scheduling",
                desc: "Smart doctor appointments, reminders, and conflict-free scheduling.",
              },
              {
                icon: <FileText className="w-8 h-8 text-yellow-500" />,
                title: "Electronic Medical Records",
                desc: "Secure, real-time, cloud-accessible EMR platform.",
              },
              {
                icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
                title: "Billing & Insurance",
                desc: "Automated billing, insurance claim verification, and payment tracking.",
              },
              {
                icon: <Shield className="w-8 h-8 text-yellow-500" />,
                title: "HIPAA Compliance",
                desc: "Fully compliant & encrypted patient data protection.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
                title: "Analytics Dashboard",
                desc: "Monitor patient flow, revenue, and KPIs in real time.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${smallCardBg} p-8 rounded-xl ${smallCardHover} transition-all hover:scale-105`}
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className={`text-xl mb-3 ${cardTitle}`}>{item.title}</h3>
                <p className={`${cardDesc}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: TRANSFORM OPERATIONS ---------------- */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${pageBg}`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div data-aos="fade-right">
            <h2
              className={`text-4xl font-bold mb-8 ${heroTitle}`}
              data-aos="fade-up"
            >
              Transform Your Hospital Operations
            </h2>

            <div className="space-y-4">
              {[
                "Reduce patient wait times by 40%",
                "Eliminate scheduling conflicts",
                "Automate insurance verification",
                "Streamline discharge processes",
                "Improve patient satisfaction scores",
                "Reduce administrative overhead by 30%",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-500" />
                  <span className={`text-lg ${listText}`}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BOX */}
          <div
            className={`${rightBoxBg} p-8 rounded-2xl shadow-xl`}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3
              className="text-2xl font-bold mb-4"
              data-aos="fade-up"
            >
              Ready to Get Started?
            </h3>

            <p
              className="text-lg mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join hundreds of healthcare facilities already using our automation suite.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Free consultation & analysis",
                "Custom implementation plan",
                "Training & dedicated support",
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
              data-aos-delay="200"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospital;
