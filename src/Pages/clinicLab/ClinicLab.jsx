import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Lucide Icons
import {
  Activity,
  FileText,
  Users,
  BarChart3,
  ClipboardList,
  Shield,
  Clock,
  CircleCheckBig,
} from "lucide-react";

const ClinicLab = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          {/* Left */}
          <div data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🔬</div>
              <div>
                <h1 className="text-5xl font-bold text-white">Clinic / Lab</h1>
                <p className="text-xl text-yellow-400">
                  Laboratory Management Solutions
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              Modernize your clinic and laboratory operations with comprehensive
              sample tracking, automated lab reports, patient record management,
              and result processing systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

          {/* Right Image + Yellow Badge */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Clinic Lab"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover h-[450px]"
            />

            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center w-24"
              data-aos="zoom-in"
            >
              <Activity className="w-8 h-8 mb-1 text-gray-900" />
              <span className="text-sm font-bold leading-tight">Smart</span>
              <span className="text-sm font-semibold leading-tight">Lab</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURES ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            Advanced Laboratory Information System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline laboratory operations with intelligent sample tracking,
            automated reporting, and comprehensive quality management
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          data-aos="fade-up"
        >
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
      </section>

      {/* ================= SECTION 3: BENEFITS + CTA ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left – Benefits */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-8">
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
                  <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Yellow CTA Box */}
          <div
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900 shadow-xl"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-6">
              Ready to Modernize Your Lab?
            </h3>

            <p className="text-lg mb-6">
              Join leading clinics and laboratories that have improved efficiency
              and accuracy with our comprehensive management solutions.
            </p>

            <div className="space-y-4">
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
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-900">{t}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-8" />
    </div>
  );
};

export default ClinicLab;
