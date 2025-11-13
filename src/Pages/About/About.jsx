import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Target, Eye, Lightbulb, Heart, Award, Users } from "lucide-react";

function AboutPage() {
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

      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            data-aos="zoom-in"
          >
            About MS Tech Hive
          </h1>

          <p
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Empowering businesses with intelligent automation solutions since 2020
          </p>
        </div>
      </div>

      {/* ---------------- MISSION + VISION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          {/* Mission */}
          <div
            className="bg-gray-800 rounded-3xl p-10"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              To help businesses across industries automate their workflows and
              accelerate growth through innovative technology solutions. We believe
              that every business deserves access to cutting-edge tools that drive
              efficiency and success.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-gray-800 rounded-3xl p-10"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              To become the leading provider of automation solutions globally,
              transforming how businesses operate and helping them achieve
              unprecedented levels of efficiency and productivity.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- STATS SECTION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-0">
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-12 md:p-16"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

              {[
                { value: "500+", text: "Projects Completed" },
                { value: "12", text: "Industries Served" },
                { value: "50+", text: "Happy Clients" },
                { value: "5", text: "Years Experience" },
              ].map((item, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-900 font-semibold text-lg">
                    {item.text}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* ---------------- VALUES SECTION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-aos="zoom-in"
            >
              Our Values
            </h2>

            <p
              className="text-xl text-gray-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              { Icon: Lightbulb, title: "Innovation" },
              { Icon: Heart, title: "Customer First" },
              { Icon: Award, title: "Excellence" },
              { Icon: Users, title: "Collaboration" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-2xl p-8 text-center"
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="flex justify-center mb-6">
                  <item.Icon className="w-10 h-10 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.title === "Innovation" &&
                    "We constantly explore new technologies to deliver cutting-edge solutions."}

                  {item.title === "Customer First" &&
                    "Your success is our priority — we build long-lasting relationships."}

                  {item.title === "Excellence" &&
                    "We maintain the highest standards in all aspects of our work."}

                  {item.title === "Collaboration" &&
                    "We work closely with our clients as trusted partners."}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ---------------- OUR STORY SECTION ---------------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-12"
            data-aos="zoom-in"
          >
            Our Story
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            {[
              "MS Tech Hive was founded with a simple yet powerful vision: to make advanced automation technology accessible to businesses of all sizes.",
              "We recognized that many businesses were struggling with repetitive tasks and inefficient processes. We set out to change that with intelligent automation solutions that unlock growth.",
              "Today, we're proud to have transformed hundreds of businesses. Our commitment to innovation and customer success continues to drive us every day.",
            ].map((text, i) => (
              <p
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                {text}
              </p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutPage;