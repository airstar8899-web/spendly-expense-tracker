import { useState, useEffect } from "react";
import SummaryCard from "../../components/reusable/card/SummaryCard";
import QuickAction from "../../components/reusable/card/QuickAction";

const STORAGE_KEY = "SPENDLY!";

const Dashboard = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(tx) {
    setTransactions((prev) => [...prev, tx]);
  }

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="min-h-screen bg-[#F8F8FC] p-6">
      <h1 className="text-2xl font-bold">Good Morning, Airstar</h1>
      <p className="text-gray-500 mt-1">Here's your financial overview</p>

      <div className="mt-6 rounded-3xl bg-[#502D55] p-6 text-white">
        <p className="text-sm text-white/70">Total Balance</p>
        <h2 className="mt-2 text-3xl font-bold">₦{balance.toLocaleString()}</h2>
        <p className="mt-4 text-sm text-white/70">Available balance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <SummaryCard
          title="Income"
          amount={`₦${income.toLocaleString()}`}
          className="bg-white shadow-sm"
        />
        <SummaryCard
          title="Expenses"
          amount={`₦${expenses.toLocaleString()}`}
          className="bg-white shadow-sm"
        />
        <SummaryCard
          title="Savings"
          amount={`₦${balance.toLocaleString()}`}
          className="bg-white shadow-sm"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <QuickAction
            icon="＋"
            title="Add Income"
            onClick={() => alert("Add Income clicked")}
          />
          <QuickAction
            icon="−"
            title="Add Expense"
            onClick={() => alert("Add Expense clicked")}
          />
          <QuickAction
            icon="↔"
            title="Transfer"
            onClick={() => alert("Transfer clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
