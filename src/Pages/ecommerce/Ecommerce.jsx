import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import {
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Package,
  CreditCard,
  Users,
} from "lucide-react";
import {
  PageWrapper,
  IndustryHero,
  FeaturesGrid,
  BenefitsCtaSection,
} from "../../components/Reusable/IndustryPageComponents";

const Ecommerce = () => {
  const { mode } = useContext(GlobalContext);

  const theme = {
    pageBg: mode ? "bg-white text-gray-900" : "bg-gray-900 text-white",
    heroBg: mode
      ? "bg-gradient-to-br from-white to-gray-100"
      : "bg-gradient-to-br from-gray-900 to-gray-800",
    heroTitle: mode ? "text-gray-900" : "text-white",
    heroSub: mode ? "text-yellow-700" : "text-yellow-400",
    heroDesc: mode ? "text-gray-700" : "text-gray-300",
    sectionBg: mode ? "bg-gray-100" : "bg-gray-900",
    cardBg: mode ? "bg-gray-200" : "bg-gray-700",
    cardHover: mode ? "hover:bg-gray-300" : "hover:bg-gray-600",
    cardTitle: mode ? "text-gray-900" : "text-white",
    cardDesc: mode ? "text-gray-700" : "text-gray-300",
    listText: mode ? "text-gray-700" : "text-gray-300",
    ctaBg: mode
      ? "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900"
      : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900",
  };

  const heroContent = {
    emoji: "🛒",
    title: "E-commerce",
    subtitle: "Online Business Solutions",
    description:
      "Supercharge your e-commerce operations with integrated CRM systems, AI-powered chatbots, comprehensive analytics, and automated order management platforms.",
    imageUrl:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "E-commerce",
    imageStyle: { maxHeight: 420 }, // Specific style
    imageClassName: "max-[600px]:max-w-md max-[400px]:max-w-[95%]", // Specific class
  };

  const heroBadge = {
    Icon: ShoppingCart,
    text1: "Smart",
    text2: "Commerce",
    containerClassName:
      "px-6 py-4 -bottom-6 space-y-1 max-[600px]:w-20 max-[600px]:px-3 max-[600px]:py-2 max-[350px]:w-16 max-[350px]:px-2 max-[350px]:py-1.5",
    iconClassName:
      "w-6 h-6 max-[600px]:w-5 max-[600px]:h-5 max-[350px]:w-4 max-[350px]:h-4",
  };

  const features = [
    { Icon: Users, title: "Customer CRM", desc: "Comprehensive customer relationship management with purchase history, preferences, and segmentation." },
    { Icon: MessageSquare, title: "AI Chatbots", desc: "Intelligent chatbots for customer support, order tracking, and personalized product recommendations." },
    { Icon: BarChart3, title: "Sales Analytics", desc: "Advanced analytics dashboard with sales metrics, conversion tracking, and customer insights." },
    { Icon: ShoppingCart, title: "Order Management", desc: "Automated order processing, inventory synchronization, and fulfillment tracking systems." },
    { Icon: Package, title: "Inventory Integration", desc: "Real-time inventory management with automatic restocking alerts and supplier integration." },
    { Icon: CreditCard, title: "Payment Automation", desc: "Secure payment processing, subscription management, and automated billing systems." },
  ];

  const benefitsList = [
    "Increase conversion rates by 45%",
    "Automate customer support with AI chatbots",
    "Improve inventory management efficiency",
    "Enhance customer retention and loyalty",
    "Streamline order fulfillment processes",
    "Generate detailed sales and customer insights",
  ];

  const ctaContent = {
    title: "Ready to Scale Your Online Store?",
    description:
      "Join successful e-commerce businesses that have increased sales and improved customer satisfaction with our automation solutions.",
    list: [
      "Platform integration with your existing store",
      "Custom chatbot training for your products",
      "Analytics setup and team training",
    ],
    buttonText: "Schedule Demo",
  };

  return (
    <PageWrapper pageBg={theme.pageBg}>
      <IndustryHero theme={theme} content={heroContent} badge={heroBadge} />
      <FeaturesGrid
        theme={theme}
        title="Complete E-commerce Automation Suite"
        subtitle="From customer acquisition to order fulfillment, optimize every aspect of your online business"
        features={features}
      />
      <BenefitsCtaSection
        theme={theme}
        benefitsTitle="Sell Smarter, Grow Faster"
        benefitsList={benefitsList}
        cta={ctaContent}
      />
    </PageWrapper>
  );
};

export default Ecommerce;