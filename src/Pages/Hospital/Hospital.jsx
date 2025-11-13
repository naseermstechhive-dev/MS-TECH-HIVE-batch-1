import React, { useEffect } from "react";
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

const Hospital = () => {
  const navigate = useNavigate();

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
    <div className="bg-gray-900 text-white">
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
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-5xl">🏥</div>
                <div>
                  <h1 className="text-5xl font-bold text-white">Hospital</h1>
                  <p className="text-xl text-[#facc15] font-medium">
                    Healthcare Automation Solutions
                  </p>
                </div>
              </div>
            </div>

            <p
              className="text-xl text-gray-300 leading-relaxed mb-8"
              data-aos="fade-up"
            >
              Transform your hospital operations with comprehensive automation
              solutions for patient management, appointments, medical records,
              and billing systems.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="100"
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

          {/* Right Content */}
          <div className="relative" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hospital Emergency"
              className="rounded-2xl shadow-2xl"
            />

            {/* 24/7 Support badge */}
            <div
              className="absolute -bottom-6 -left-6 bg-[#facc15] text-gray-900 p-4 rounded-xl shadow-xl w-24 text-center"
              data-aos="zoom-in"
            >
              <Clock className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: COMPREHENSIVE SOLUTIONS ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Hospital Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our hospital automation platform covers every aspect of healthcare
              operations.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {[
              {
                icon: <User className="w-8 h-8 text-[#facc15]" />,
                title: "Patient Management System",
                desc: "Comprehensive patient registration, medical history tracking, and profile management with automated workflows.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-[#facc15]" />,
                title: "Appointment Scheduling",
                desc: "Intelligent scheduling system with automated reminders, doctor availability, and conflict resolution.",
              },
              {
                icon: <FileText className="w-8 h-8 text-[#facc15]" />,
                title: "Electronic Medical Records",
                desc: "Secure, searchable EMR system with real-time updates and multi-device accessibility.",
              },
              {
                icon: <CreditCard className="w-8 h-8 text-[#facc15]" />,
                title: "Billing & Insurance",
                desc: "Automated billing processes, insurance claim management, and payment tracking systems.",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#facc15]" />,
                title: "HIPAA Compliance",
                desc: "Full compliance with healthcare regulations and secure data handling protocols.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-[#facc15]" />,
                title: "Analytics Dashboard",
                desc: "Real-time insights into patient flow, revenue metrics, and operational efficiency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group hover:scale-110 transform duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
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

      {/* ---------------- SECTION 3: TRANSFORM OPERATIONS ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-8">
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
                  <CircleCheckBig className="w-6 h-6 text-[#facc15]" />
                  <span className="text-gray-300 text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            className="bg-gradient-to-br from-[#facc15] to-[#ca8a04] p-8 rounded-2xl text-gray-900 shadow-xl"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Join hundreds of healthcare facilities that have transformed their
              operations with our automation solutions.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Free consultation and system analysis",
                "Custom implementation plan",
                "Training and ongoing support",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-6 h-6 text-gray-900" />
                  <span className="text-gray-900 text-lg">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
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