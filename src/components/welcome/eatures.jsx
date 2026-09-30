import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  PieChart,
  Zap,
  Tag,
  Calendar,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Features = () => {
  const navigate = useNavigate();

  const featureList = [
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Smart Budgeting",
      description:
        "Set monthly limits across customized categories and get soft alerts before you overspend.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Instant Expense Logging",
      description:
        "Log a transaction in under 3 seconds with minimal taps and automated category tagging.",
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Custom Categories",
      description:
        "Organize your finances your way with flexible, color-coded tags and labels.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Recurring Bills Tracker",
      description:
        "Never miss a subscription or recurring utility bill with scheduled projections.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Sync",
      description:
        "Access your records instantly across all your devices without lag or delay.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Private & Offline First",
      description:
        "Your data remains locally secure and encrypted, keeping financial details confidential.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#efece5] text-[#502D55] font-sans selection:bg-[#F6DBC0] selection:text-[#502D55]">
      {/* Navbar */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div 
          onClick={() => navigate("/")} 
          className="px-4 md:px-6 flex items-center justify-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#502D55] flex items-center justify-center text-white text-sm font-bold">
            S
          </div>
          <span className="hidden md:inline text-lg font-bold text-[#502D55]">
            Spendly
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#6B3F63] font-medium">
          <button onClick={() => navigate("/features")} className="text-[#502D55] font-bold transition">
            Features
          </button>
          <button onClick={() => navigate("/analytics")} className="hover:text-[#502D55] transition">
            Analytics
          </button>
          <button onClick={() => navigate("/security")} className="hover:text-[#502D55] transition">
            Security
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/signin")}
            className="text-sm font-medium text-[#502D55] hover:text-[#6B3F63] px-4 py-2 transition"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="text-sm font-semibold bg-[#502D55] text-[#F8F4E9] px-5 py-2.5 rounded-full hover:bg-[#6B3F63] transition shadow-sm"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F6DBC0]/60 text-[#502D55] rounded-full text-xs font-bold tracking-wide border border-[#F6DBC0]">
          <Zap className="w-3.5 h-3.5" /> Built for Simplicity
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#502D55]">
          Everything you need to track money seamlessly.
        </h1>
        <p className="text-lg text-[#6B3F63] max-w-2xl mx-auto leading-relaxed">
          Designed without noisy ads, unnecessary upsells, or bloated dashboards. Just pure, clean financial clarity.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((item, index) => (
          <div
            key={index}
            className="bg-[#F8F4E9] p-8 rounded-3xl border border-[#F6DBC0] shadow-sm hover:shadow-md transition space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#502D55] text-[#F6DBC0] flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#502D55]">{item.title}</h3>
            <p className="text-sm text-[#6B3F63] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#502D55] text-[#F8F4E9] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#6B3F63]">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold">Ready to streamline your budget?</h2>
            <p className="text-[#F6DBC0] text-sm">
              Start tracking expenses in under two minutes with zero commitment required.
            </p>
          </div>
          <button
            onClick={() => navigate("/signup")}
            className="flex items-center gap-2 bg-[#F6DBC0] text-[#502D55] px-7 py-4 rounded-full font-bold hover:bg-white transition shadow-lg shrink-0"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;