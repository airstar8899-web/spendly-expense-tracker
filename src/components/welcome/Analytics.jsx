import React from "react";
import { BarChart3, CheckCircle2, ArrowDownRight } from "lucide-react";

const Analytics = () => {
  return (
    <section id="analytics" className="scroll-mt-24 pt-20 pb-24 border-t border-[#F6DBC0]/60">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F6DBC0]/60 text-[#502D55] rounded-full text-xs font-bold tracking-wide border border-[#F6DBC0]">
            <BarChart3 className="w-3.5 h-3.5" /> Financial Intelligence
          </div>
          <h2 className="text-4xl font-extrabold text-[#502D55]">
            Turn daily transactions into actionable insights.
          </h2>
          <p className="text-lg text-[#6B3F63] leading-relaxed">
            Understand where every dollar goes. Spendly automatically groups spendings, computes weekly averages, and projects month-end balances.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-[#6B3F63] font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#935073]" /> Automatic category distribution breakdown
            </div>
            <div className="flex items-center gap-3 text-sm text-[#6B3F63] font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#935073]" /> Month-over-month savings trajectory
            </div>
            <div className="flex items-center gap-3 text-sm text-[#6B3F63] font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#935073]" /> Custom date range comparisons
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-[#502D55] text-[#F8F4E9] p-8 rounded-3xl shadow-2xl border border-[#6B3F63] space-y-6">
            <div className="flex justify-between items-center border-b border-[#6B3F63] pb-4">
              <div>
                <p className="text-xs text-[#F6DBC0] uppercase tracking-wider font-bold">Monthly Spending Overview</p>
                <h3 className="text-2xl font-extrabold text-[#F8F4E9] mt-1">#1,245.80</h3>
              </div>
              <span className="flex items-center text-xs font-semibold bg-[#935073] text-[#F8F4E9] px-3 py-1 rounded-full">
                <ArrowDownRight className="w-3.5 h-3.5 mr-1" /> 12% lower than Aug
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-[#F8F4E9]">Housing & Utilities</span>
                  <span className="text-[#F6DBC0]">#520.00 (41%)</span>
                </div>
                <div className="w-full bg-[#6B3F63] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#F6DBC0] h-full rounded-full w-[41%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-[#F8F4E9]">Groceries & Dining</span>
                  <span className="text-[#F6DBC0]">#380.50 (30%)</span>
                </div>
                <div className="w-full bg-[#6B3F63] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#935073] h-full rounded-full w-[30%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-[#F8F4E9]">Subscriptions & SaaS</span>
                  <span className="text-[#F6DBC0]">#145.30 (12%)</span>
                </div>
                <div className="w-full bg-[#6B3F63] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#F6DBC0]/70 h-full rounded-full w-[12%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;