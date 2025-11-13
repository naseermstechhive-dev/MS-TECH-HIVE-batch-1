import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  Calendar,
  MessageSquare,
  FileText,
  ChartNoAxesColumnIncreasing,
  Shield,
  CircleCheckBig,
  Clock,
} from "lucide-react";

const School = () => {
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
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
        data-aos="fade-up"
      >
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          data-aos="fade-up"
        >
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🎓</div>
              <div>
                <h1 className="text-5xl font-bold text-white">School</h1>
                <p className="text-xl text-yellow-400">
                  Education Management Solutions
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Revolutionize your school's operations with automated attendance
              tracking, parent communication portals, and comprehensive
              administrative management systems.
            </p>

            <div className="flex flex-wrap gap-4" data-aos="fade-up">
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

          {/* Right Image with Vertical Real-time Updates */}
          <div
            className="relative flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            <img
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="School"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover h-[500px]"
            />
            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-28"
              data-aos="zoom-in"
            >
              <Clock className="w-8 h-8 text-gray-900" />
              <div className="text-center">
                <span className="block text-sm font-bold leading-tight">
                  Real-time
                </span>
                <span className="block text-sm font-semibold leading-tight">
                  Updates
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Section 2: Features Grid ---------------- */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
        data-aos="fade-up"
      >
        <div
          className="max-w-7xl mx-auto text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete School Management System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline every aspect of school administration with our
            comprehensive automation platform.
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
              title: "Student Management",
              desc: "Comprehensive student profiles, enrollment tracking, and academic progress monitoring.",
            },
            {
              icon: <Calendar className="w-8 h-8 text-yellow-400" />,
              title: "Attendance Tracking",
              desc: "Automated attendance systems with real-time notifications to parents and administrators.",
            },
            {
              icon: <MessageSquare className="w-8 h-8 text-yellow-400" />,
              title: "Parent Communication Portal",
              desc: "Direct communication channels between teachers, parents, and administrators.",
            },
            {
              icon: <FileText className="w-8 h-8 text-yellow-400" />,
              title: "Grade Management",
              desc: "Digital gradebooks, report card generation, and academic performance tracking.",
            },
            {
              icon: (
                <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />
              ),
              title: "Academic Analytics",
              desc: "Insights into student performance, attendance patterns, and school metrics.",
            },
            {
              icon: <Shield className="w-8 h-8 text-yellow-400" />,
              title: "Safety & Security",
              desc: "Student check-in/out systems and emergency communication protocols.",
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
              Enhance Educational Excellence
            </h2>
            <div className="space-y-4">
              {[
                "Reduce administrative tasks by 50%",
                "Improve parent engagement by 75%",
                "Automate attendance and grade reporting",
                "Streamline teacher-parent communication",
                "Real-time academic progress tracking",
                "Enhanced school safety protocols",
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
              Transform Your School Today
            </h3>
            <p className="text-lg mb-6">
              Join progressive schools that have modernized their operations
              with our education management solutions.
            </p>

            <div className="space-y-4">
              {[
                "Personalized demo for your school",
                "Staff training and support",
                "Gradual implementation plan",
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

export default School;
