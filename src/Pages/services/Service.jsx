import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Palette, Code, Zap, TrendingUp, BarChart, Users } from "lucide-react";

function ServicesPage() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,    
      mirror: true,   
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* ---------------- MAIN PAGE CONTENT ---------------- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-white mb-6" data-aos="zoom-in">
              Our Services
            </h1>

            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Comprehensive technology solutions designed to automate your work and
              accelerate your growth across all business functions.
            </p>
          </div>

          {/* ------------------------ CONTENT START ------------------------ */}
          <div className="space-y-16">

            {/* ---------------- Design & Branding Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
                    <Palette className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
                  Design & Branding
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {num === 1 ? "Web Designing" :
                       num === 2 ? "Graphic Designing" :
                       "Branding & Visual Identity"}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {num === 1 && "Modern, responsive websites that convert visitors into customers"}
                      {num === 2 && "Creative visual solutions for all your branding needs"}
                      {num === 3 && "Complete brand identity packages that make you stand out"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Marketing & Ads ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-green-600 to-green-800">
                    <TrendingUp className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">Marketing & Ads</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {
                        num === 1 ? "SEO" :
                        num === 2 ? "Social Media Marketing" :
                        num === 3 ? "AI-Powered Ad Generator" :
                        "No-Code Landing Page Builder"
                      }
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {
                        num === 1 ? "Boost your search rankings and organic traffic" :
                        num === 2 ? "Engage your audience across all social platforms" :
                        num === 3 ? "Create high-converting ads with artificial intelligence" :
                        "Build professional landing pages without coding"
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Automation Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800">
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">Automation</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "WhatsApp CRM Automation",
                  "Lead Nurturing Workflow",
                  "Social Media Content Automation"
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {text}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {i === 0 && "Automate customer interactions through WhatsApp"}
                      {i === 1 && "Convert leads into customers with automated sequences"}
                      {i === 2 && "Schedule and automate your social media presence"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Analytics Section ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-red-600 to-red-800">
                    <BarChart className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">Analytics</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Campaign Performance Dashboards",
                  "Client Portal & Billing Tools"
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {text}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {i === 0
                        ? "Real-time insights into your marketing campaigns"
                        : "Streamlined client management and billing solutions"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Dev & Hosting ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800">
                    <Code className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
                  Dev & Hosting
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Mobile App Development",
                  "Domain Hosting",
                  "Custom Integrations"
                ].map((text, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {text}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {i === 0
                        ? "Native and cross-platform mobile applications"
                        : i === 1
                        ? "Reliable hosting solutions for your websites"
                        : "Connect your tools and automate workflows"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Onboarding ---------------- */}
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
                  <div className="p-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-800">
                    <Users className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">Onboarding</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    Interactive Product Demos
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Engaging demos that showcase your product's value
                  </p>
                </div>
              </div>
            </div>

          </div>
          {/* ------------------------ CONTENT END ------------------------ */}

        </div>
      </div>

      {/* -------------------------- CTA FIXED -------------------------- */}
      <div className="w-full flex justify-center mt-20 px-4" data-aos="fade-up">
        <div className="w-full bg-gray-900 max-w-7xl mx-auto py-10 rounded-2xl flex justify-center">
          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12 w-full"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help automate your work and accelerate your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </a>

              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ServicesPage;