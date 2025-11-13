import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: false,
      mirror: true, 
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Message sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      company: "",
      industry: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* ---------------- HERO SECTION ---------------- */}
      <div className="text-center py-16 px-6" data-aos="fade-up">
        <h1 className="text-6xl font-bold text-white mb-6" data-aos="zoom-in">
          Get In Touch
        </h1>

        <p
          className="text-xl text-gray-300 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ready to automate your work and accelerate your growth? Let's discuss how we can help transform your business.
        </p>
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ---------------- LEFT: CONTACT INFO ---------------- */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-slate-800 rounded-3xl p-10">
              <h2 className="text-4xl font-bold text-white mb-10" data-aos="zoom-in">
                Contact Information
              </h2>

              <div className="space-y-8">

                {/* Email */}
                <div className="flex items-start space-x-5" data-aos="fade-up">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg mb-1">Email</div>
                    <div className="text-gray-400 text-base">info@mstechhive.com</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-5" data-aos="fade-up" data-aos-delay="150">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg mb-1">Phone</div>
                    <div className="text-gray-400 text-base">+91 9032223352</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-5" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg mb-1">Address</div>
                    <a
                      href="https://maps.app.goo.gl/xuJKp9urXsuoBeab9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-500 transition-colors text-base"
                    >
                      View Our Location
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-5" data-aos="fade-up" data-aos-delay="450">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg mb-1">Business Hours</div>
                    <div className="text-gray-400 text-base">Mon - Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ---------------- RIGHT: FORM ---------------- */}
          <div
            className="bg-slate-800 rounded-3xl p-10"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-4xl font-bold text-white mb-10" data-aos="zoom-in">
              Send Us a Message
            </h2>

            <div className="space-y-6">

              {/* Full Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div data-aos="fade-up">
                  <label className="block text-white text-sm font-medium mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-5 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="150">
                  <label className="block text-white text-sm font-medium mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

              </div>

              {/* Company + Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div data-aos="fade-up">
                  <label className="block text-white text-sm font-medium mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-5 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="150">
                  <label className="block text-white text-sm font-medium mb-3">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
                  >
                    <option value="">Select your industry</option>
                    <option value="Hospital">Hospital</option>
                    <option value="School">School</option>
                    <option value="College">College</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Office">Office</option>
                    <option value="Retail Shop">Retail Shop</option>
                    <option value="Construction">Construction</option>
                    <option value="Logistics">Logistics</option>
                    <option value="IT Company">IT Company</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Clinic / Lab">Clinic / Lab</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div data-aos="fade-up" data-aos-delay="250">
                <label className="block text-white text-sm font-medium mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or automation needs..."
                  className="w-full px-5 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center px-8 py-5 bg-yellow-500 text-slate-900 font-bold text-lg rounded-xl hover:bg-yellow-400 transition-colors group"
                data-aos="zoom-in"
              >
                <span>Send Message</span>
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- WHY CHOOSE US ---------------- */}
        <div className="mt-16 bg-yellow-500 rounded-3xl p-12" data-aos="fade-up">
          <h3 className="text-4xl font-bold text-slate-900 mb-8" data-aos="zoom-in">
            Why Choose Us?
          </h3>

          <div className="space-y-5">
            {[
              "Industry-specific expertise across 12+ sectors",
              "Proven track record of successful implementations",
              "24/7 support and maintenance",
              "Custom solutions tailored to your needs",
            ].map((text, i) => (
              <div
                className="flex items-center space-x-4"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <svg
                  className="w-7 h-7 text-slate-900 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-slate-900 text-lg font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;