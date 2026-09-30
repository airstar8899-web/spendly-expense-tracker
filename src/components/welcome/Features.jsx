import React from "react";
import {
  PieChart,
  CreditCard,
  Tag,
  Calendar,
  Zap,
  Lock,
} from "lucide-react";

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

const Features = () => {
  return (
    <section id="features" className="scroll-mt-24 pt-20 pb-24 border-t border-[#F6DBC0]/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F6DBC0]/60 text-[#502D55] rounded-full text-xs font-bold tracking-wide border border-[#F6DBC0]">
            <Zap className="w-3.5 h-3.5" /> Built for Simplicity
          </div>
          <h2 className="text-4xl font-extrabold text-[#502D55]">
            Everything you need to track money seamlessly.
          </h2>
          <p className="text-base text-[#6B3F63]">
            Designed without noisy ads, unnecessary upsells, or bloated dashboards. Just pure, clean financial clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Features;