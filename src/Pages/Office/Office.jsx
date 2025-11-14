import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  FileText,
  Calendar,
  ChartNoAxesColumnIncreasing,
  Shield,
  Clock,
  CircleCheckBig,
} from "lucide-react";
import { GlobalContext } from "../../context/Context";

const Office = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext);

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const heroBg = mode
    ? "bg-gradient-to-br from-white to-gray-100"
    : "bg-gradient-to-br from-gray-900 to-gray-800";
  const heroTitle = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const heroSub = mode ? "text-yellow-600" : "text-yellow-400";
  const heroDesc = mode ? "text-gray-700" : "text-gray-300";

  const featuresSectionBg = mode ? "bg-gray-100" : "bg-gray-800";
  const cardBg = mode ? "bg-gray-200" : "bg-gray-700";
  const cardHover = mode ? "hover:bg-gray-300" : "hover:bg-gray-600";
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardDesc = mode ? "text-gray-700" : "text-gray-300";

  const rightBoxBg = mode
    ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
    : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>

      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 ${heroBg}`}
        data-aos="fade-up"
      >
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          {/* Left Side */}
          <div data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6" data-aos="fade-up">
              <div className="text-5xl" data-aos="zoom-in">🏢</div>
              <div>
                <h1
                  className={`text-5xl ${heroTitle}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Office
                </h1>
                <p
                  className={`text-xl ${heroSub}`}
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Corporate Automation Solutions
                </p>
              </div>
            </div>

            <p
              className={`text-xl leading-relaxed mb-8 ${heroDesc}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Transform your office operations with comprehensive HR systems,
              document management, task automation, and employee productivity
              tools.
            </p>

            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="250"
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

          {/* Right Image with Smart Workflows */}
          <div
            className="relative flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Office"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover h-[450px]"
              data-aos="zoom-in"
            />
            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center w-23 h-28"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <ChartNoAxesColumnIncreasing className="w-8 h-10 mb-1 text-gray-900" />
              <span className="text-sm font-bold leading-tight">Smart</span>
              <span className="text-sm font-semibold leading-tight">Workflows</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: FEATURES ---------------- */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${featuresSectionBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2
            className={`text-4xl font-bold mb-4 ${mode ? "text-gray-900" : "text-white"}`}
            data-aos="fade-up"
          >
            Modern Office Management Platform
          </h2>
          <p
            className={`text-xl ${mode ? "text-gray-700" : "text-gray-300"} max-w-3xl mx-auto`}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Digitize and automate your office operations for maximum efficiency
            and productivity.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {[
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: "HR Management System",
              desc: "Comprehensive employee management, payroll processing, and performance tracking automation.",
            },
            {
              icon: <FileText className="w-8 h-8 text-yellow-400" />,
              title: "Document Management",
              desc: "Digital document storage, automated workflows, and secure file sharing systems.",
            },
            {
              icon: <Calendar className="w-8 h-8 text-yellow-400" />,
              title: "Task Automation",
              desc: "Streamlined project management, automated task assignment, and progress tracking.",
            },
            {
              icon: <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />,
              title: "Analytics Dashboard",
              desc: "Real-time insights into productivity metrics, employee performance, and operational efficiency.",
            },
            {
              icon: <Shield className="w-8 h-8 text-yellow-400" />,
              title: "Employee Portals",
              desc: "Self-service portals for leave management, expense reporting, and benefits administration.",
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title: "Time Tracking",
              desc: "Automated time and attendance tracking with integrated payroll processing.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-all group hover:scale-105`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className={`text-xl mb-3 ${cardTitle}`}>{item.title}</h3>
              <p className={`${cardDesc}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 3: DIGITAL WORKPLACE ---------------- */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${mode ? "bg-white" : "bg-gray-900"}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className={`text-4xl font-bold mb-8 ${mode ? "text-gray-900" : "text-white"}`} data-aos="fade-up">
              Build a Smarter Workplace
            </h2>
            <div className="space-y-4">
              {[
                "Reduce administrative overhead by 60%",
                "Automate repetitive office tasks",
                "Improve employee productivity tracking",
                "Streamline HR processes and payroll",
                "Enhance document security and access",
                "Create better workplace collaboration",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className={`${mode ? "text-gray-700" : "text-gray-300"} text-lg`}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className={`${rightBoxBg} p-8 rounded-2xl shadow-xl`} data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-6">Ready to Go Digital?</h3>
            <p className="text-lg mb-6">
              Join forward-thinking companies that have transformed their office
              operations with intelligent automation.
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Customized solution for your office size",
                "Employee training and change management",
                "Ongoing support and system updates",
              ].map((text, i) => (
                <div className="flex items-center space-x-3" key={i} data-aos="fade-left" data-aos-delay={i * 120}>
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Office;