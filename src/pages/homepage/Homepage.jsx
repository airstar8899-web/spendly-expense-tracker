import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, Plus, TrendingDown, TrendingUp, ArrowUpRight, Bell, Settings, LogOut, CreditCard, PieChart } from 'lucide-react';
import Button from '../../components/reusable/button/Button';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F4E9] text-[#502D55] font-sans">
      {/* Top Navigation Bar */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-[#F6DBC0]/50">
        <div className="flex items-center gap-3">
          <span className="p-2.5 bg-[#502D55] text-[#F8F4E9] rounded-2xl shadow-sm">
            <Wallet className="w-5 h-5" />
          </span>
          <div>
            <h1 className="font-bold text-lg text-[#502D55] tracking-tight">Finora</h1>
            <p className="text-xs text-[#6B3F63]">Welcome back, Temitayo</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 text-[#6B3F63] hover:text-[#502D55] bg-[#F6DBC0]/30 hover:bg-[#F6DBC0]/60 rounded-xl transition">
            <Bell className="w-4 h-4" />
          </button>
          <button className="p-2.5 text-[#6B3F63] hover:text-[#502D55] bg-[#F6DBC0]/30 hover:bg-[#F6DBC0]/60 rounded-xl transition">
            <Settings className="w-4 h-4" />
          </button>
          <button 
            onClick={() => navigate('/signin')}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 bg-[#502D55]/10 text-[#502D55] hover:bg-[#502D55] hover:text-[#F8F4E9] rounded-xl transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {/* Quick Actions & Overview Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-[#502D55]">Financial Overview</h2>
            <p className="text-sm text-[#6B3F63]">Here is how your budget is looking this month.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              // onClick={() => navigate('/add-expense')}
              className="flex items-center gap-2 bg-[#502D55] text-[#F8F4E9] px-5 py-3 rounded-2xl font-semibold hover:bg-[#6B3F63] transition shadow-md text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Expense
            </Button>
          </div>
        </div>

        {/* Financial Summary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Total Balance / Outflow */}
          <div className="bg-[#502D55] text-[#F8F4E9] p-6 rounded-3xl shadow-lg relative overflow-hidden space-y-4 border border-[#6B3F63]">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6DBC0]">Total Spent (Sept)</span>
              <span className="p-2 bg-[#6B3F63] text-[#F6DBC0] rounded-xl">
                <TrendingDown className="w-4 h-4" />
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold">#1,245.80</h3>
              <p className="text-xs text-[#F6DBC0] mt-1">Of #2,000.00 monthly limit</p>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-[#6B3F63] h-2 rounded-full overflow-hidden">
              <div className="bg-[#F6DBC0] h-full rounded-full w-[62%]" />
            </div>
          </div>

          {/* Card 2: Remaining Budget */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#F6DBC0]/60 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B3F63]">Remaining Budget</span>
              <span className="p-2 bg-[#F6DBC0]/40 text-[#502D55] rounded-xl">
                <PieChart className="w-4 h-4" />
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-[#502D55]">#754.20</h3>
              <p className="text-xs text-[#6B3F63] mt-1">6 days left in cycle</p>
            </div>
            <div className="text-xs font-medium text-[#935073] flex items-center gap-1 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#935073]"></span> On track with savings goal
            </div>
          </div>

          {/* Card 3: Daily Average */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#F6DBC0]/60 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B3F63]">Daily Average</span>
              <span className="p-2 bg-[#F6DBC0]/40 text-[#502D55] rounded-xl">
                <CreditCard className="w-4 h-4" />
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-[#502D55]">#51.90</h3>
              <p className="text-xs text-[#6B3F63] mt-1">-4% compared to last month</p>
            </div>
            <div className="text-xs font-medium text-[#6B3F63] pt-2">
              Based on 24 recorded transactions
            </div>
          </div>

        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#F6DBC0]/60 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-[#502D55]">Recent Activity</h3>
            <button className="text-xs font-semibold text-[#935073] hover:underline">
              View all history
            </button>
          </div>

          <div className="space-y-3">
            
            {/* Transaction Item */}
            <div className="flex items-center justify-between p-4 bg-[#F8F4E9]/60 rounded-2xl border border-[#F6DBC0]/40 hover:bg-[#F8F4E9] transition">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#6B3F63] text-[#F6DBC0] rounded-xl">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#502D55]">Grocery Store Run</h4>
                  <p className="text-xs text-[#6B3F63]">Today, 2:45 PM · Food & Groceries</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-sm text-[#502D55]">-#64.20</span>
                <p className="text-[10px] text-[#6B3F63]">Completed</p>
              </div>
            </div>

            {/* Transaction Item */}
            <div className="flex items-center justify-between p-4 bg-[#F8F4E9]/60 rounded-2xl border border-[#F6DBC0]/40 hover:bg-[#F8F4E9] transition">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#6B3F63] text-[#F6DBC0] rounded-xl">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#502D55]">Cloud Hosting Server</h4>
                  <p className="text-xs text-[#6B3F63]">Yesterday · Software & Tech</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-sm text-[#502D55]">-#19.99</span>
                <p className="text-[10px] text-[#6B3F63]">Completed</p>
              </div>
            </div>

            {/* Transaction Item */}
            <div className="flex items-center justify-between p-4 bg-[#F8F4E9]/60 rounded-2xl border border-[#F6DBC0]/40 hover:bg-[#F8F4E9] transition">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#935073] text-[#F8F4E9] rounded-xl">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#502D55]">Freelance Client Payout</h4>
                  <p className="text-xs text-[#6B3F63]">Sep 22, 2026 · Income</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-sm text-emerald-700">+#850.00</span>
                <p className="text-[10px] text-[#6B3F63]">Deposited</p>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default Homepage;