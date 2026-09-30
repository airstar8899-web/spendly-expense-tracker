import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  KeyRound,
  ServerOff,
  ArrowRight,
} from "lucide-react";

const Security = () => {
  const navigate = useNavigate();

  const securityPillars = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All financial figures are encrypted on your local device before touching any synchronization layer.",
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Zero Data Monetization",
      description: "We never sell, rent, or trade your transactional history with third-party advertisers or data brokers.",
    },
    {
      icon: <ServerOff className="w-6 h-6" />,
      title: "No Bank Credentials Stored",
      description: "Spendly operates strictly as a privacy-focused budget manager without demanding invasive bank logins.",
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      title: "Biometric & Passcode Lock",
      description: "Secure your mobile and desktop web views with native PIN codes or Touch/Face ID authentication.",
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
          <button onClick={() => navigate("/features")} className="hover:text-[#502D55] transition">
            Features
          </button>
          <button onClick={() => navigate("/analytics")} className="hover:text-[#502D55] transition">
            Analytics
          </button>
          <button onClick={() => navigate("/security")} className="text-[#502D55] font-bold transition">
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

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F6DBC0]/60 text-[#502D55] rounded-full text-xs font-bold tracking-wide border border-[#F6DBC0]">
          <ShieldCheck className="w-3.5 h-3.5" />
          Privacy First Architecture
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#502D55]">
          Your financial records belong exclusively to you.
        </h1>
        <p className="text-lg text-[#6B3F63] max-w-2xl mx-auto leading-relaxed">
          Security isn't an afterthought at Spendly. We built our entire architecture around strict user privacy and data ownership.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {securityPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-[#F8F4E9] p-8 rounded-3xl border border-[#F6DBC0] shadow-sm flex items-start gap-5"
          >
            <div className="p-3.5 bg-[#502D55] text-[#F6DBC0] rounded-2xl shrink-0">
              {pillar.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#502D55]">{pillar.title}</h3>
              <p className="text-sm text-[#6B3F63] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Security;