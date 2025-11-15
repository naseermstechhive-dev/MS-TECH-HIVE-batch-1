import React, { useEffect, useState, useContext } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobalContext } from "../../context/Context";
import { useTranslation } from "react-i18next";

function Contact() {
  const { mode } = useContext(GlobalContext);
  const {t} = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: false,
      mirror: false,
    });

    AOS.refresh();
  }, [mode]);

  const pageBg = mode ? "bg-white text-gray-900" : "bg-slate-900 text-white";
  const sectionBg = mode ? "bg-white" : "bg-slate-900";
  const cardBg = mode ? "bg-gray-100" : "bg-slate-800";
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardText = mode ? "text-gray-700 font-medium" : "text-gray-300";
  const labelText = mode ? "text-gray-900 font-medium" : "text-white font-medium";
  const inputBg = mode ? "bg-gray-100 text-gray-900 border-gray-300" : "bg-slate-700 text-white border-slate-600";
  const placeholderText = mode ? "placeholder-gray-500" : "placeholder-gray-500";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

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
    <div className={`min-h-screen transition-colors ${pageBg}`}>

      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className={`text-center py-16 px-6 transition-colors ${sectionBg}`}
        data-aos="fade-up"
      >
        <h1
          className="text-4xl sm:text-6xl font-bold mb-6 max-[600px]:text-3xl"
          data-aos="zoom-in"
        >
          {t("contact.heroTitle")}
        </h1>

        <p
          className={`text-lg sm:text-xl max-w-4xl mx-auto ${cardText}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("contact.heroSubtitle")}
        </p>
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ---------------- CONTACT INFO ---------------- */}
          <div className="space-y-8" data-aos="fade-right">
            <div className={`rounded-3xl p-10 transition-colors ${cardBg}`}>

              <h2
                className={`text-3xl sm:text-4xl font-bold mb-10 ${cardTitle}`}
                data-aos="zoom-in"
              >
                {t("contact.infoTitle")}
              </h2>

              <div className="space-y-8">

                {/* EMAIL */}
                <div className="flex items-start space-x-5" data-aos="fade-up">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Mail className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className={`text-lg mb-1 ${cardTitle}`}>{t("contact.emailLabel")}</div>
                    <div className={`${cardText}`}>info@mstechhive.com</div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start space-x-5" data-aos="fade-up" data-aos-delay="150">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Phone className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className={`text-lg mb-1 ${cardTitle}`}>{t("contact.phoneLabel")}</div>
                    <div className={`${cardText}`}>+91 9032223352</div>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start space-x-5" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className={`text-lg mb-1 ${cardTitle}`}>{t("contact.addressLabel")}</div>

                    <a
                      href="https://maps.app.goo.gl/xuJKp9urXsuoBeab9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardText} hover:text-yellow-500 transition-colors`}
                    >
                      {t("contact.locationLink")}
                    </a>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start space-x-5" data-aos="fade-up" data-aos-delay="450">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Clock className="w-7 h-7 text-slate-900" />
                  </div>
                  <div>
                    <div className={`text-lg mb-1 ${cardTitle}`}>{t("contact.businessHours")}</div>
                    <div className={`${cardText}`}>{t("contact.businessTiming")}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ---------------- FORM ---------------- */}
          <div
            className={`rounded-3xl p-10 transition-colors ${cardBg}`}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-10 ${cardTitle}`} data-aos="zoom-in">
              {t("contact.formTitle")}
            </h2>

            <div className="space-y-6">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div data-aos="fade-up">
                  <label className={`block text-sm mb-3 ${labelText}`}>{t("contact.fullNameLabel")}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-yellow-500 focus:outline-none ${inputBg} ${placeholderText}`}
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="150">
                  <label className={`block text-sm mb-3 ${labelText}`}>{t("contact.emailLabelForm")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-yellow-500 focus:outline-none ${inputBg} ${placeholderText}`}
                  />
                </div>

              </div>

              {/* COMPANY + INDUSTRY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div data-aos="fade-up">
                  <label className={`block text-sm mb-3 ${labelText}`}>{t("contact.companyLabel")}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={`w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-yellow-500 focus:outline-none ${inputBg} ${placeholderText}`}
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="150">
                  <label className={`block text-sm mb-3 ${labelText}`}>{t("contact.industryLabel")}</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-yellow-500 focus:outline-none ${inputBg}`}
                  >
                    <option value="">{t("contact.industryPlaceholder")}</option>
                    <option>Hospital</option>
                    <option>School</option>
                    <option>College</option>
                    <option>Restaurant</option>
                    <option>Office</option>
                    <option>Retail Shop</option>
                    <option>Construction</option>
                    <option>Logistics</option>
                    <option>IT Company</option>
                    <option>E-commerce</option>
                    <option>Clinic / Lab</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div data-aos="fade-up" data-aos-delay="250">
                <label className={`block text-sm mb-3 ${labelText}`}>{t("contact.messageLabel")}</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder= {t("contact.messagePlaceholder")}
                  className={`w-full px-5 py-4 rounded-xl border resize-none focus:ring-2 focus:ring-yellow-500 focus:outline-none ${inputBg} ${placeholderText}`}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center px-8 py-5 bg-yellow-500 text-slate-900 font-bold text-lg rounded-xl hover:bg-yellow-400 transition-colors group"
                data-aos="zoom-in"
              >
                <span>{t("contact.sendButton")}</span>
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* ---------------- WHY CHOOSE US ---------------- */}
        <div
          className="mt-16 bg-yellow-500 rounded-3xl p-12"
          data-aos="fade-up"
        >
          <h3
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8"
            data-aos="zoom-in"
          >
           {t("contact.whyChooseTitle")}
          </h3>

          <div className="space-y-5">
            {[
              t("contact.why1"),
              t("contact.why2"),
              t("contact.why3"),
              t("contact.why4"),
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