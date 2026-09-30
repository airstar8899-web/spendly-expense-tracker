import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  PieChart,
  TrendingDown,
  CheckCircle2,
} from "lucide-react";

import Features from "./Features";
import Analytics from "./Analytics";
import Security from "./Security";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#efece5] text-[#502D55] font-sans selection:bg-[#F6DBC0] selection:text-[#502D55] scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#efece5]/80 backdrop-blur-md border-b border-[#F6DBC0]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 rounded-lg bg-[#502D55] flex items-center justify-center text-white text-sm font-bold">
              S
            </div>
            <span className="hidden md:inline text-lg font-bold text-[#502D55]">
              Spendly
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#6B3F63] font-medium">
            <a href="#features" className="hover:text-[#502D55] transition">
              Features
            </a>
            <a href="#analytics" className="hover:text-[#502D55] transition">
              Analytics
            </a>
            <a href="#security" className="hover:text-[#502D55] transition">
              Security
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/signin")}
              className="text-sm font-medium text-[#502D55] hover:text-[#6B3F63] px-4 py-2 transition cursor-pointer"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-sm font-semibold bg-[#502D55] text-[#F8F4E9] px-5 py-2.5 rounded-full hover:bg-[#6B3F63] transition shadow-sm cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F6DBC0]/60 text-[#502D55] rounded-full text-xs font-bold tracking-wide border border-[#F6DBC0]">
            <PieChart className="w-3.5 h-3.5" />
            Minimalist Expense Tracking
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#502D55]">
            Master your money, without the clutter.
          </h1>

          <p className="text-lg text-[#6B3F63] max-w-xl leading-relaxed">
            Spendly helps you effortlessly log expenses, monitor monthly cash
            flow, and keep your financial goals in sharp focus through a calm,
            distraction-free interface.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => navigate("/signup")}
              className="flex items-center gap-2 bg-[#502D55] text-[#F8F4E9] px-7 py-4 rounded-full font-semibold hover:bg-[#6B3F63] transition shadow-lg group cursor-pointer"
            >
              Create free account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="flex items-center gap-2 bg-white border border-[#F6DBC0] text-[#502D55] px-7 py-4 rounded-full font-semibold hover:bg-[#F6DBC0]/20 transition shadow-sm cursor-pointer"
            >
              Sign into dashboard
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-xs text-[#6B3F63] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#935073]" /> Completely
              private
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#935073]" /> Zero setup
              friction
            </span>
          </div>
        </div>

        {/* Right Column: Expense Dashboard Mockup Card */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#502D55] via-[#935073] to-[#F6DBC0] rounded-4xl blur-xl opacity-30"></div>

          <div className="bg-[#502D55] text-[#F8F4E9] p-7 rounded-3xl shadow-2xl border border-[#6B3F63] space-y-6 relative">
            {/* Top Balance Card Widget */}
            <div className="space-y-2 bg-[#6B3F63]/50 p-4 rounded-2xl border border-[#935073]/40">
              <div className="flex justify-between items-center text-xs text-[#F6DBC0] font-medium tracking-wider uppercase">
                <span>September Outflow</span>
                <span className="bg-[#935073] text-[#F8F4E9] px-2 py-0.5 rounded-full font-bold text-[10px]">
                  Active
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#F8F4E9]">
                  #1,245.80
                </span>
                <span className="text-xs text-[#F6DBC0]">/ #2,000 budget</span>
              </div>
              <div className="w-full bg-[#502D55] h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-[#F6DBC0] h-full rounded-full w-[62%]" />
              </div>
            </div>

            {/* Recent Transactions List */}
            <div className="space-y-3 pt-1">
              <div className="text-xs font-bold text-[#F6DBC0] uppercase tracking-wider flex items-center justify-between">
                <span>Recent Expenses</span>
                <span className="text-[11px] text-[#F8F4E9]/70">View all</span>
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center py-2.5 px-3.5 bg-[#6B3F63]/40 rounded-xl border border-[#935073]/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#935073]/40 rounded-lg text-[#F6DBC0]">
                      <TrendingDown className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-[#F8F4E9]">
                        Grocery Store
                      </p>
                      <p className="text-[11px] text-[#F6DBC0]">
                        Today, 2:45 PM
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-[#F6DBC0] text-sm">
                    -#64.20
                  </span>
                </div>

                <div className="flex justify-between items-center py-2.5 px-3.5 bg-[#6B3F63]/40 rounded-xl border border-[#935073]/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#935073]/40 rounded-lg text-[#F6DBC0]">
                      <TrendingDown className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-[#F8F4E9]">
                        Cloud Hosting
                      </p>
                      <p className="text-[11px] text-[#F6DBC0]">Yesterday</p>
                    </div>
                  </div>
                  <span className="font-bold text-[#F6DBC0] text-sm">
                    -#19.99
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Security Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#F8F4E9] text-[#502D55] p-3.5 rounded-2xl shadow-xl border border-[#F6DBC0] flex items-center gap-3">
              <div className="p-2 bg-[#502D55] text-[#F6DBC0] rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold">End-to-End Secure</p>
                <p className="text-[#6B3F63]">Your records stay private</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Sub-Sections */}
      <Features />
      <Analytics />
      <Security />

      {/* Bottom CTA Banner */}
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
            className="flex items-center gap-2 bg-[#F6DBC0] text-[#502D55] px-7 py-4 rounded-full font-bold hover:bg-white transition shadow-lg shrink-0 cursor-pointer"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Welcome;