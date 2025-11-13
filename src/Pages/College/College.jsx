import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  GraduationCap,
  ChartNoAxesColumnIncreasing,
  Calendar,
  FileText,
  CreditCard,
  CircleCheckBig,
} from "lucide-react";

const College = () => {
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ---------------- Section 1: Hero ---------------- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          data-aos="fade-up"
        >
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🏛️</div>
              <div>
                <h1 className="text-5xl font-bold text-white">College</h1>
                <p className="text-xl text-yellow-400">
                  Higher Education Solutions
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Modernize your college operations with comprehensive admission
              management, student dashboards, analytics, and automated
              administrative processes.
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

          {/* Right Image with Smart Analytics Badge */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="College"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
            />
            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center w-24"
              data-aos="zoom-in"
            >
              <ChartNoAxesColumnIncreasing className="w-8 h-8 mb-1 text-gray-900" />
              <span className="text-sm font-bold leading-tight">Smart</span>
              <span className="text-sm font-semibold leading-tight">
                Analytics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Section 2: Features ---------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div
          className="max-w-7xl mx-auto text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive College Management Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From admissions to graduation, manage every aspect of your
            institution with intelligent automation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          {[
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: "Admission Management",
              desc: "Streamlined application processing, document verification, and enrollment workflows.",
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
              title: "Student Dashboards",
              desc: "Comprehensive student portals for course registration, grades, and academic progress.",
            },
            {
              icon: (
                <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />
              ),
              title: "Analytics & Reporting",
              desc: "Advanced analytics for student performance, enrollment trends, and institutional metrics.",
            },
            {
              icon: <Calendar className="w-8 h-8 text-yellow-400" />,
              title: "Course Management",
              desc: "Automated scheduling, faculty assignment, and classroom resource management.",
            },
            {
              icon: <FileText className="w-8 h-8 text-yellow-400" />,
              title: "Academic Records",
              desc: "Digital transcripts, degree verification, and academic history management.",
            },
            {
              icon: <CreditCard className="w-8 h-8 text-yellow-400" />,
              title: "Fee Management",
              desc: "Automated fee collection, scholarship processing, and financial aid distribution.",
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

      {/* ---------------- Section 3: Benefits ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-8">
              Elevate Higher Education Standards
            </h2>
            <div className="space-y-4">
              {[
                "Reduce admission processing time by 60%",
                "Automate course registration and scheduling",
                "Improve student engagement with digital portals",
                "Streamline fee collection and financial aid",
                "Generate comprehensive academic reports",
                "Enhance institutional decision-making with analytics",
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
              Ready for Digital Transformation?
            </h3>
            <p className="text-lg mb-6">
              Join leading colleges that have revolutionized their operations
              with our comprehensive management solutions.
            </p>

            <div className="space-y-4">
              {[
                "Tailored solution for your institution",
                "Faculty and staff training programs",
                "Phased implementation approach",
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
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default College;