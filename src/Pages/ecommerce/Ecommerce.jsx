import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Package,
  Box,
  CreditCard,
  CircleCheckBig,
  Users,
} from "lucide-react";
import { GlobalContext } from "../../context/Context";

const Ecommerce = () => {
  const navigate = useNavigate();
  const { mode } = useContext(GlobalContext); 

  const pageBg = mode ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const heroBg = mode
    ? "bg-gradient-to-br from-white to-gray-100"
    : "bg-gradient-to-br from-gray-900 to-gray-800";
  const heroTitle = mode ? "text-gray-900" : "text-white";
  const heroSub = mode ? "text-yellow-700" : "text-yellow-400";
  const heroDesc = mode ? "text-gray-700" : "text-gray-300";

  const sectionBg = mode ? "bg-gray-100" : "bg-gray-900";
  const cardBg = mode ? "bg-gray-200" : "bg-gray-700";
  const cardHover = mode ? "hover:bg-gray-300" : "hover:bg-gray-600";
  const cardTitle = mode ? "text-gray-900" : "text-white";
  const cardDesc = mode ? "text-gray-700" : "text-gray-300";

  const listText = mode ? "text-gray-700" : "text-gray-300";
  const ctaBg = mode
    ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
    : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900";

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors ${pageBg}`}>
      {/* ================= SECTION 1: HERO ================= */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 max-[350px]:py-12 max-[350px]:px-2 max-[600px]:py-16 max-[600px]:px-3 ${heroBg}`}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-[600px]:gap-8 max-[350px]:gap-6">
          {/* LEFT HERO TEXT */}
          <div className="space-y-8 max-[600px]:space-y-6 max-[350px]:space-y-4" data-aos="fade-right">
            <div className="flex items-center space-x-4 mb-6 max-[600px]:space-x-2 max-[350px]:space-x-1">
              <div className="text-5xl max-[600px]:text-4xl max-[350px]:text-3xl">🛒</div>
              <div>
                <h1 className={`text-5xl font-bold max-[600px]:text-4xl max-[350px]:text-3xl ${heroTitle}`}>
                  E-commerce
                </h1>
                <p className={`text-xl max-[600px]:text-lg max-[350px]:text-base ${heroSub}`}>
                  Online Business Solutions
                </p>
              </div>
            </div>

            <p className={`text-xl leading-relaxed max-[600px]:text-lg max-[350px]:text-base max-[350px]:leading-relaxed ${heroDesc}`}>
              Supercharge your e-commerce operations with integrated CRM systems,
              AI-powered chatbots, comprehensive analytics, and automated order
              management platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-[600px]:gap-3 max-[350px]:gap-2" data-aos="fade-up">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2 max-[350px]:text-sm"
              >
                Get Started Today
              </button>

              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors max-[600px]:px-6 max-[600px]:py-3 max-[350px]:px-4 max-[350px]:py-2 max-[350px]:text-sm"
              >
                View All Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE + YELLOW BADGE (badge position preserved) */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="E-commerce"
              className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover max-[600px]:max-w-md max-[400px]:max-w-[95%]"
              style={{ maxHeight: 420 }}
            />

            {/* badge - position kept exactly */}
            <div
              className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-24 max-[600px]:w-20 max-[600px]:px-3 max-[600px]:py-2 max-[350px]:w-16 max-[350px]:px-2 max-[350px]:py-1.5 max-[400px]:-left-2"
              data-aos="zoom-in"
            >
              <ShoppingCart className="w-6 h-6 text-gray-900 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4" />
              <div className="text-center">
                <span className="block text-sm font-semibold leading-tight max-[600px]:text-xs max-[350px]:text-[10px]">Smart</span>
                <span className="block text-sm font-semibold leading-tight max-[600px]:text-xs max-[350px]:text-[10px]">Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURES GRID ================= */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg} max-[350px]:py-12 max-[350px]:px-2 max-[600px]:py-16 max-[600px]:px-3`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-[600px]:mb-12 max-[350px]:mb-8" data-aos="fade-up">
            <h2 className={`text-4xl font-bold mb-4 max-[600px]:text-3xl max-[350px]:text-2xl max-[350px]:mb-3 ${heroTitle}`}>
              Complete E-commerce Automation Suite
            </h2>
            <p className={`text-xl text-center max-w-3xl mx-auto max-[600px]:text-lg max-[350px]:text-base ${heroDesc}`}>
              From customer acquisition to order fulfillment, optimize every aspect of your online business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-[600px]:gap-6 max-[350px]:gap-4">
            {/* Card 1 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <Users className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 max-[600px]:text-lg max-[350px]:text-base max-[350px]:mb-2 ${cardTitle}`}>Customer CRM</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                Comprehensive customer relationship management with purchase history, preferences, and segmentation.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <MessageSquare className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 max-[600px]:text-lg max-[350px]:text-base max-[350px]:mb-2 ${cardTitle}`}>AI Chatbots</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                Intelligent chatbots for customer support, order tracking, and personalized product recommendations.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <BarChart3 className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 max-[600px]:text-lg max-[350px]:text-base max-[350px]:mb-2 ${cardTitle}`}>Sales Analytics</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                Advanced analytics dashboard with sales metrics, conversion tracking, and customer insights.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <ShoppingCart className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 max-[600px]:text-lg max-[350px]:text-base max-[350px]:mb-2 ${cardTitle}`}>Order Management</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                Automated order processing, inventory synchronization, and fulfillment tracking systems.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <Package className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 max-[600px]:text-lg max-[350px]:text-base max-[350px]:mb-2 ${cardTitle}`}>Inventory Integration</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                Real-time inventory management with automatic restocking alerts and supplier integration.
              </p>
            </div>

            {/* Card 6 */}
            <div
              className={`${cardBg} p-8 rounded-xl ${cardHover} transition-colors group max-[600px]:p-6 max-[350px]:p-4`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 max-[600px]:mb-3 max-[350px]:mb-2">
                <CreditCard className="w-8 h-8 text-yellow-400 max-[600px]:w-7 max-[600px]:h-7 max-[350px]:w-6 max-[350px]:h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 max-[600px]:text-lg max-[350px]:text-base max-[350px]:mb-2 ${cardTitle}`}>Payment Automation</h3>
              <p className={`${cardDesc} max-[600px]:text-sm max-[350px]:text-xs`}>
                Secure payment processing, subscription management, and automated billing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: BENEFITS + CTA (with individual text animation) ================= */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg} max-[350px]:py-12 max-[350px]:px-2 max-[600px]:py-16 max-[600px]:px-3`} data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-[600px]:gap-8 max-[350px]:gap-6">
          {/* left list with per-item AOS */}
          <div data-aos="fade-right">
            <h2 className={`text-4xl font-bold mb-8 max-[600px]:text-3xl max-[350px]:text-2xl max-[350px]:mb-6 ${heroTitle}`}>
              Sell Smarter, Grow Faster
            </h2>

            <div className="space-y-6 max-[600px]:space-y-4 max-[350px]:space-y-3">
              {[
                "Increase conversion rates by 45%",
                "Automate customer support with AI chatbots",
                "Improve inventory management efficiency",
                "Enhance customer retention and loyalty",
                "Streamline order fulfillment processes",
                "Generate detailed sales and customer insights",
              ].map((txt, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 max-[600px]:space-x-2 max-[350px]:space-x-1"
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4" />
                  <span className={`text-lg ${listText} max-[600px]:text-base max-[350px]:text-sm`}>{txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right CTA card */}
          <div className={`${ctaBg} p-8 rounded-2xl text-gray-900 shadow-xl max-[600px]:p-6 max-[350px]:p-4`} data-aos="zoom-in">
            <h3 className="text-2xl font-bold mb-6 max-[600px]:text-xl max-[350px]:text-lg max-[350px]:mb-4">Ready to Scale Your Online Store?</h3>
            <p className="text-lg mb-6 max-[600px]:text-base max-[350px]:text-sm max-[350px]:mb-4">
              Join successful e-commerce businesses that have increased sales and improved customer satisfaction with our automation solutions.
            </p>

            <div className="space-y-4 max-[600px]:space-y-3 max-[350px]:space-y-2">
              {[
                "Platform integration with your existing store",
                "Custom chatbot training for your products",
                "Analytics setup and team training",
              ].map((txt, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 max-[600px]:space-x-2 max-[350px]:space-x-1"
                  data-aos="fade-left"
                  data-aos-delay={i * 120}
                >
                  <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0 max-[600px]:w-4 max-[600px]:h-4 max-[350px]:w-3 max-[350px]:h-3" />
                  <span className="text-gray-900 max-[600px]:text-sm max-[350px]:text-xs">{txt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors max-[600px]:px-6 max-[600px]:py-2.5 max-[350px]:px-4 max-[350px]:py-2 max-[350px]:text-sm"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* small spacer before footer (footer exists separately) */}
      <div className="h-8 max-[350px]:h-4" />
    </div>
  );
};

export default Ecommerce;