import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Monitor,
  Users,
  BarChart3,
  FileText,
  Calendar,
  Clock,
  CircleCheckBig,
} from "lucide-react";

const ITCompany = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false, 
      mirror: true, 
    });

    const onScroll = () => {
      AOS.refresh(); 
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ================= SECTION 1: HERO ================= */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left side */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">💻</div>
              <div>
                <h1 className="text-5xl font-bold text-white">IT Company</h1>
                <p className="text-xl text-yellow-400">
                  Tech Project Solutions
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              Enhance your IT operations with comprehensive project dashboards,
              client communication portals, team collaboration tools, and
              resource management systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
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

          {/* right side image + yellow badge */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="IT Company"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
              style={{ maxHeight: 460 }}
            />

            {/* yellow badge overlapping image (Monitor icon) */}
            <div
              className="absolute -bottom-8 -left-6 bg-yellow-500 text-gray-900 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-24"
              data-aos="zoom-in"
            >
              <Monitor className="w-6 h-6 text-gray-900" />
              <div className="font-bold">Smart</div>
              <div className="text-sm">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURES GRID ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete IT Project Management Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline development workflows, enhance client relationships, and optimize team productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Project Dashboards</h3>
              <p className="text-gray-300">
                Comprehensive project management dashboards with real-time progress tracking and team collaboration.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Client Portals</h3>
              <p className="text-gray-300">
                Dedicated client communication portals with project updates, document sharing, and feedback systems.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Resource Management</h3>
              <p className="text-gray-300">
                Team allocation, skill tracking, and resource optimization for maximum project efficiency.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Documentation Systems</h3>
              <p className="text-gray-300">
                Automated documentation generation, version control, and knowledge base management.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sprint Planning</h3>
              <p className="text-gray-300">
                Agile project management with sprint planning, backlog management, and velocity tracking.
              </p>
            </div>

            {/* Card 6 */}
            <div
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Time Tracking</h3>
              <p className="text-gray-300">
                Automated time tracking, billing integration, and productivity analytics for teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: BENEFITS + CTA ================= */}
<section
  className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
  data-aos="fade-up"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left list */}
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold text-white mb-8">
        Code Better, Deliver Faster
      </h2>

      <div className="space-y-4">
        {[
          "Improve project delivery times by 40%",
          "Enhance client communication and satisfaction",
          "Automate time tracking and billing processes",
          "Optimize team resource allocation",
          "Streamline development workflows",
          "Increase team productivity by 35%",
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

    {/* Right CTA */}
    <div
      className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900 shadow-xl"
      data-aos="zoom-in"
    >
      <h3
        className="text-2xl font-bold mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Ready to Scale Your IT Operations?
      </h3>

      <p
        className="text-lg mb-6"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Join successful IT companies that have improved project delivery and
        client satisfaction with our management solutions.
      </p>

      <div className="space-y-4">
        {[
          "Custom setup for your development methodology",
          "Team training and integration support",
          "API integrations with existing tools",
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
        className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Schedule Consultation
      </button>
    </div>
  </div>
</section>

      {/* small spacer before footer area (footer exists separately) */}
      <div className="h-8" />
    </div>
  );
};

export default ITCompany;
