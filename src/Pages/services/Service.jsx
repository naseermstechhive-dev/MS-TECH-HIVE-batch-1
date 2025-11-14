import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Palette, Code, Zap, TrendingUp, BarChart, Users } from "lucide-react";
import { GlobalContext } from './../../context/Context';

function ServicesPage() {
  const { mode } = useContext(GlobalContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,   
      mirror: false,
      easing: "ease-out",
    });

    AOS.refresh();
  }, [mode]);

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";

  const heroTitle = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const heroSub = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const cardBg = mode ? "bg-gray-100" : "bg-gray-800";
  const cardHover = mode ? "hover:bg-gray-200" : "hover:bg-gray-700";
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardText = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const sectionHeading = mode ? "text-gray-900 font-bold" : "text-white font-bold";
  const sectionText = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const ctaBoxBg = mode ? "bg-gray-100" : "bg-gray-900";
  const ctaTextMain = mode ? "text-gray-900 font-extrabold" : "text-gray-100 font-bold";
  const ctaTextSub = mode ? "text-gray-800 font-medium" : "text-gray-300";

  return (
    <div className={`min-h-screen ${pageBg}`}>

      {/* ---------------- MAIN PAGE CONTENT ---------------- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1
              className={`text-5xl mb-6 max-[400px]:text-4xl ${heroTitle}`}
              data-aos="zoom-in"
            >
              Our Services
            </h1>

            <p
              className={`text-xl max-w-3xl mx-auto ${heroSub}`}
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
                <h2
                  className={`text-3xl mb-4 ${sectionHeading}`}
                  data-aos="fade-up"
                >
                  Design & Branding
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {num === 1 ? "Web Designing" :
                       num === 2 ? "Graphic Designing" :
                       "Branding & Visual Identity"}
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
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
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>Marketing & Ads</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((num, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{num}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {
                        num === 1 ? "SEO" :
                        num === 2 ? "Social Media Marketing" :
                        num === 3 ? "AI-Powered Ad Generator" :
                        "No-Code Landing Page Builder"
                      }
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
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
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>Automation</h2>
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
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {text}
                    </h3>
                    <p className={`${cardText} leading-relaxed`}>
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
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>Analytics</h2>
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
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {text}
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
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
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>Dev & Hosting</h2>
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
                    className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>

                    <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                      {text}
                    </h3>

                    <p className={`${cardText} leading-relaxed`}>
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
                <h2 className={`text-3xl mb-4 ${sectionHeading}`}>Onboarding</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  data-aos="zoom-in"
                  className={`${cardBg} p-8 rounded-xl transition-all duration-300 hover:scale-105 ${cardHover} group`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">1</span>
                  </div>

                  <h3 className={`text-xl mb-3 group-hover:text-yellow-400 transition-colors ${cardTitle}`}>
                    Interactive Product Demos
                  </h3>

                  <p className={`${cardText} leading-relaxed`}>
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
        <div className={`w-full ${ctaBoxBg} max-w-7xl mx-auto py-10 rounded-2xl flex justify-center`}>
          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12 w-full"
            data-aos="zoom-in"
          >
            <h2 className={`text-3xl mb-4 ${ctaTextMain}`}>
              Ready to Get Started?
            </h2>

            <p className={`text-xl mb-8 max-w-2xl mx-auto ${ctaTextSub}`}>
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