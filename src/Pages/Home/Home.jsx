// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  TrendingUp,
  Briefcase,
  Award,
  ArrowRight,
  Building2,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Construction,
  Laptop,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Automate Work.
                <br />
                <span className="text-[#facc15]">Accelerate Growth.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Transform your business operations with intelligent automation
                solutions tailored for your industry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#facc15] text-[#facc15] font-semibold rounded-lg hover:bg-[#facc15] hover:text-gray-900 transition-colors"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

         {/* Right Side Animated Card */}
          <div className="relative w-full h-96 bg-gradient-to-br from-[#facc15] to-[#ca8a04] rounded-2xl flex items-center justify-center">
            <div className="text-8xl animate-turtle">🐢</div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Turtle animation */}
      <style>
        {`
          @keyframes turtleMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(25px); }
          }
          .animate-turtle {
            animation: turtleMove 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* ---------------- WHY CHOOSE SECTION ---------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose MS Tech Hive?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to
              deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#facc15] mb-3" />,
                title: "Automation Excellence",
                desc: "Streamline your workflows with cutting-edge automation solutions",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#facc15] mb-3" />,
                title: "Growth Acceleration",
                desc: "Scale your business operations with intelligent technology",
              },
              {
                icon: <Briefcase className="w-8 h-8 text-[#facc15] mb-3" />,
                title: "Industry Expertise",
                desc: "Specialized solutions for 12+ different industries",
              },
              {
                icon: <Award className="w-8 h-8 text-[#facc15] mb-3" />,
                title: "Proven Results",
                desc: "Delivering measurable outcomes for our clients",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors group hover:scale-110 transform duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES SECTION ---------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized automation solutions across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Building2 className="w-10 h-10 mx-auto mb-3" />, label: "Healthcare" },
              { icon: <GraduationCap className="w-10 h-10 mx-auto mb-3" />, label: "Education" },
              { icon: <Utensils className="w-10 h-10 mx-auto mb-3" />, label: "Restaurant" },
              { icon: <ShoppingBag className="w-10 h-10 mx-auto mb-3" />, label: "Retail" },
              { icon: <Construction className="w-10 h-10 mx-auto mb-3" />, label: "Construction" },
              { icon: <Laptop className="w-10 h-10 mx-auto mb-3" />, label: "IT Company" },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(`/${item.label.toLowerCase()}`)}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-[#facc15] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium">{item.label}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/industries")}
              className="inline-flex items-center px-6 py-3 bg-[#facc15] text-gray-900 font-semibold rounded-lg hover:bg-[#ca8a04] transition-colors"
            >
              View All Industries <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- READY TO TRANSFORM SECTION ---------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#facc15] to-[#ca8a04] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join hundreds of businesses that have accelerated their growth with
            our automation solutions.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
