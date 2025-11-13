import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HardHat,
  Users,
  Calendar,
  ChartNoAxesColumnIncreasing,
  FileText,
  Clock,
  CircleCheckBig,
} from "lucide-react";

const Construction = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🏗️</div>
              <div>
                <h1 className="text-5xl font-bold text-white">Construction</h1>
                <p className="text-xl text-yellow-400">
                  Project Management Solutions
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Revolutionize your construction projects with comprehensive
              tracking systems, worker management, progress monitoring, and
              resource planning automation.
            </p>

            <div className="flex flex-wrap gap-4">
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

          {/* Right - Image + Smart badge */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://www.gannestonconstruction.com/wp-content/uploads/2022/09/5-types-of-building-construction-ganneston-construction.jpg"
              alt="Construction"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-28">
              <HardHat className="w-6 h-6 text-gray-900" />
              <div className="text-center">
                <span className="block text-sm font-semibold leading-tight">
                  Smart
                </span>
                <span className="block text-sm font-semibold leading-tight">
                  Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: FEATURE GRID ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Construction Management Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build better projects with intelligent tracking, resource
            management, and real-time progress monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <HardHat className="w-8 h-8 text-yellow-400" />,
              title: "Project Tracking",
              desc: "Comprehensive project management with milestone tracking, progress monitoring, and deadline management.",
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: "Worker Management",
              desc: "Digital worker logs, attendance tracking, and skill-based task assignment systems.",
            },
            {
              icon: <Calendar className="w-8 h-8 text-yellow-400" />,
              title: "Resource Planning",
              desc: "Equipment scheduling, material tracking, and resource allocation optimization.",
            },
            {
              icon: (
                <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />
              ),
              title: "Progress Monitoring",
              desc: "Real-time project dashboards with visual progress tracking and performance analytics.",
            },
            {
              icon: <FileText className="w-8 h-8 text-yellow-400" />,
              title: "Documentation Management",
              desc: "Digital blueprints, permits, inspection reports, and compliance documentation.",
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title: "Time & Cost Tracking",
              desc: "Automated time tracking, cost management, and budget monitoring systems.",
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

      {/* ---------------- SECTION 3: BENEFITS ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Build Smarter, Not Harder
            </h2>
            <div className="space-y-4">
              {[
                "Reduce project delays by 35%",
                "Improve worker productivity tracking",
                "Automate compliance and safety reporting",
                "Streamline equipment and material management",
                "Real-time project progress visibility",
                "Optimize resource allocation and costs",
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

          {/* Right */}
          <div
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900 shadow-xl"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-6">
              Ready to Modernize Your Projects?
            </h3>
            <p className="text-lg mb-6">
              Join construction companies that have improved project efficiency
              and reduced delays with our management solutions.
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Custom solution for your project types",
                "Team training and system implementation",
                "Field support and mobile access",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3"
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                >
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
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

export default Construction;
