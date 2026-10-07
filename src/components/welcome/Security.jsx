import React from "react";
import { ShieldCheck, Lock, EyeOff, KeyRound, ServerOff } from "lucide-react";

const securityPillars = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "End-to-End Encryption",
    description:
      "All financial figures are encrypted on your local device before touching any synchronization layer.",
  },
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: "Zero Data Monetization",
    description:
      "We never sell, rent, or trade your transactional history with third-party advertisers or data brokers.",
  },
  {
    icon: <ServerOff className="w-6 h-6" />,
    title: "No Bank Credentials Stored",
    description:
      "Spendly operates strictly as a privacy-focused budget manager without demanding invasive bank logins.",
  },
  {
    icon: <KeyRound className="w-6 h-6" />,
    title: "Biometric & Passcode Lock",
    description:
      "Secure your mobile and desktop web views with native PIN codes or Touch/Face ID authentication.",
  },
];

const Security = () => {
  return (
    <section id="security" className="scroll-mt-24 pt-20 pb-24 border-t border-[#F6DBC0]/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F6DBC0]/60 text-[#502D55] rounded-full text-xs font-bold tracking-wide border border-[#F6DBC0]">
            <ShieldCheck className="w-3.5 h-3.5" /> Privacy First Architecture
          </div>
          <h2 className="text-4xl font-extrabold text-[#502D55]">
            Your financial records belong exclusively to you.
          </h2>
          <p className="text-base text-[#6B3F63]">
            Security isn't an afterthought at Spendly. We built our entire architecture around strict user privacy and data ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Security;