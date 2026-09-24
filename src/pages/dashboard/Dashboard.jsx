import { useState, useEffect } from "react";
import SummaryCard from "../../components/reusable/card/SummaryCard";
import QuickAction from "../../components/reusable/card/QuickAction";

const STORAGE_KEY = "SPENDLY!";

const Dashboard = () => {
  const [transactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  // function addTransaction(tx) {
  //   setTransactions((prev) => [...prev, tx]);
  // }

  const total = transactions
    .filter((t) => t.type === "total")
    .reduce((total, t) => total + t.amount, 0);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);

  const balance = income - expenses;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Transaction"
          amount={`₦${total.toLocaleString()}`}
          className="bg-white shadow-sm"
        />
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
          title="Balance"
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
    </>
  );
};

export default Dashboard;
