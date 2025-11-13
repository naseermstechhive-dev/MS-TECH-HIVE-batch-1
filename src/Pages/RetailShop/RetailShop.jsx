import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShoppingCart,
  Package,
  CreditCard,
  Users,
  ChartNoAxesColumnIncreasing,
  Clock,
  CircleCheckBig,
} from "lucide-react";

const RetailShop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,     // allow repeated animations while scrolling
      mirror: true,    // animate elements when scrolling past them in both directions
      offset: 120,
    });
    // refresh AOS on update (useful if content sizes change)
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section
        data-aos="fade-up"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🛍️</div>
              <div>
                <h1 className="text-5xl font-bold text-white">Retail Shop</h1>
                <p className="text-xl text-yellow-400">Retail Management Solutions</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Modernize your retail operations with comprehensive inventory management,
              POS systems, customer relationship tools, and sales analytics platforms.
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

          {/* Right - Image + Smart badge */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Retail"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-1 w-24">
              <ShoppingCart className="w-8 h-8 text-gray-900 font-extrabold" />
              <div className="text-center">
                <span className="block text-sm font-semibold leading-tight">Smart</span>
                <span className="block text-sm font-semibold leading-tight">Retail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: FEATURES GRID ---------------- */}
      <section data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Complete Retail Management System</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From inventory to customer relationships, manage every aspect of your retail business efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Package className="w-8 h-8 text-yellow-400" />,
              title: "Inventory Management",
              desc: "Real-time stock tracking, automated reordering, and comprehensive product catalog management.",
            },
            {
              icon: <CreditCard className="w-8 h-8 text-yellow-400" />,
              title: "Point of Sale Systems",
              desc: "Modern POS terminals with payment processing, receipt generation, and transaction tracking.",
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-400" />,
              title: "Customer Management",
              desc: "CRM integration with customer profiles, purchase history, and loyalty program management.",
            },
            {
              icon: <ChartNoAxesColumnIncreasing className="w-8 h-8 text-yellow-400" />,
              title: "Sales Analytics",
              desc: "Comprehensive sales reporting, trend analysis, and performance metrics dashboard.",
            },
            {
              icon: <ShoppingCart className="w-8 h-8 text-yellow-400" />,
              title: "E-commerce Integration",
              desc: "Seamless online and offline sales integration with unified inventory management.",
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title: "Staff Management",
              desc: "Employee scheduling, performance tracking, and sales commission automation.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

     {/* ---------------- SECTION 3: BENEFITS + CTA BOX ---------------- */}
<section data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left - bullets */}
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold text-white mb-8">Retail Excellence Made Simple</h2>

      <div className="space-y-4">
        {[
          "Reduce inventory management time by 50%",
          "Automate stock reordering and alerts",
          "Improve customer retention with CRM",
          "Streamline checkout and payment processes",
          "Generate detailed sales and profit reports",
          "Optimize staff scheduling and performance",
        ].map((text, i) => (
          <div
            key={i}
            className="flex items-center space-x-3"
            data-aos="fade-up"
            data-aos-delay={i * 120}  // individual text animation
          >
            <CircleCheckBig className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <span className="text-gray-300 text-lg">{text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right - yellow callout */}
    <div
      className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-gray-900 shadow-xl"
      data-aos="fade-left"
    >
      <h3 className="text-2xl font-bold mb-6">Boost Your Retail Success</h3>

      <p className="text-lg mb-6">
        Join successful retailers who have increased efficiency and customer satisfaction
        with our management solutions.
      </p>

      <div className="space-y-4 mb-6">
        {[
          "Tailored setup for your store type",
          "Staff training and system onboarding",
          "Ongoing support and maintenance",
        ].map((text, i) => (
          <div
            key={i}
            className="flex items-center space-x-3"
            data-aos="fade-left"
            data-aos-delay={i * 120}   // staggered AOS for CTA list
          >
            <CircleCheckBig className="w-5 h-5 text-gray-900 flex-shrink-0" />
            <span className="text-gray-900 text-lg">{text}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/contact")}
        className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
      >
        Schedule Demo
      </button>
    </div>

  </div>
</section>

    </div>
  );
};

export default RetailShop;
