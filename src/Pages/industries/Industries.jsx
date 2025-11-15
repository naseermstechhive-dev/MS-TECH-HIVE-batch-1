// src/pages/industries/Industries.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import { GlobalContext } from "./../../context/Context";
import { useTranslation } from "react-i18next";

const Industries = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext);
  const industries = [
  {
    key: "hospital",
    title: t("industries.hospital"),
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🏥",
    desc:
      t("allIndustries.hospital.desc"),
    features: t("allIndustries.hospital.features", { returnObjects: true }),
    link: "/hospital",
  },
  {
    key: "school",
    title: t("industries.school"),
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🎓",
    desc:
      t("allIndustries.school.desc"),
    features: t("allIndustries.school.features", { returnObjects: true }),
    link: "/school",
  },
  {
    key: "college",
    title: t("industries.college"),
    image:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🏛️",
    desc:
      t("allIndustries.college.desc"),
    features: t("allIndustries.college.features", { returnObjects: true }),
    link: "/college",
  },
  {
    key: "restaurant",
    title: t("industries.restaurant"),
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🍽️",
    desc:
      t("allIndustries.restaurant.desc"),
    features: t("allIndustries.restaurant.features", { returnObjects: true }),
    link: "/restaurant",
  },
  {
    key: "office",
    title: t("industries.office"),
    image:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "💼",
    desc:
      t("allIndustries.office.desc"),
    features: t("allIndustries.office.features", { returnObjects: true }),
    link: "/office",
  },
  {
    key: "retail",
    title: t("industries.retailShop"),
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🛍️",
    desc:
      t("allIndustries.retail.desc"),
    features: t("allIndustries.retail.features", { returnObjects: true }),
    link: "/retail-shop",
  },
  {
    key: "construction",
    title: t("industries.construction"),
    image:
      "https://www.gannestonconstruction.com/wp-content/uploads/2022/09/5-types-of-building-construction-ganneston-construction.jpg",
    emoji: "🏗️",
    desc:
      t("allIndustries.construction.desc"),
    features: t("allIndustries.construction.features", { returnObjects: true }),
    link: "/construction",
  },
  {
    key: "logistics",
    title: t("industries.logistics"),
    image:
      "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🚚",
    desc:
      t("allIndustries.logistics.desc"),
    features: t("allIndustries.logistics.features", { returnObjects: true }),
    link: "/logistics",
  },
  {
    key: "it",
    title: t("industries.itCompany"),
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "💻",
    desc:
      t("allIndustries.it.desc"),
    features: t("allIndustries.it.features", { returnObjects: true }),
    link: "/it-company",
  },
  {
    key: "ecommerce",
    title: t("industries.ecommerce"),
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🛒",
    desc:
      t("allIndustries.ecommerce.desc"),
    features: t("allIndustries.ecommerce.features", { returnObjects: true }),
    link: "/e-commerce",
  },
  {
    key: "clinic",
    title: t("industries.clinicLab"),
    image:
      "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1200",
    emoji: "🔬",
    desc:
      t("allIndustries.clinic.desc"),
    features: t("allIndustries.clinic.features", { returnObjects: true }),
    link: "/clinic-lab",
  },
];

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const headingTitle = mode ? "text-gray-900 font-extrabold" : "text-white font-bold";
  const headingSub = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const cardBg = mode ? "bg-gray-100" : "bg-gray-800";
  const cardHover = mode ? "hover:bg-gray-200" : "hover:bg-gray-700";
  const cardTitle = mode ? "text-gray-900 font-semibold" : "text-white font-semibold";
  const cardDesc = mode ? "text-gray-700 font-medium" : "text-gray-300";

  const featureText = mode ? "text-gray-700 font-medium" : "text-gray-400";

  const ctaBg = "bg-gradient-to-r from-yellow-600 to-yellow-500";
  const ctaTitle = "text-gray-900 font-bold";
  const ctaSub = "text-gray-800";
  const ctaBtn = mode ? "bg-gray-900 text-white" : "bg-gray-900 text-white";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>
      {/* Main content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className={`text-5xl md:text-6xl mb-6 ${headingTitle}`}>
              {t("industriesPage.heroTitle")}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${headingSub}`}>
              {t("industriesPage.heroSubtitle")}
            </p>
          </div>

          {/* Industry cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, idx) => {
              const delay = 100 + idx * 100;
              return (
                <div
                  key={item.key}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group ${cardBg} ${cardHover}`}
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4 text-4xl">{item.emoji}</div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className={`text-2xl mb-3 ${cardTitle}`}>
                      {item.title}
                    </h3>
                    <p className={`mb-4 leading-relaxed ${cardDesc}`}>{item.desc}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-3">{t("industriesPage.keyFeatures")}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.features.map((f, i) => (
                          <div key={i} className={`text-sm ${featureText}`}>
                            • {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(item.link)}
                      className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                    >
                      {t("industriesPage.learnMore")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={`mt-20 text-center ${ctaBg} rounded-2xl p-12`}
            data-aos="fade-up"
          >
            <h2 className={`text-3xl md:text-4xl mb-4 ${ctaTitle}`}>
              {t("industriesPage.ctaTitle")}
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${ctaSub}`}>
              {t("industriesPage.ctaSubtitle")}
            </p>

            <button
              onClick={() => navigate("/contact")}
              className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors ${ctaBtn}`}
            >
              {t("industriesPage.ctaButton")}
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Industries;