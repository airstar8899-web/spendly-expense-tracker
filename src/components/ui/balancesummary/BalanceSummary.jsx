import { useState } from "react";
import { Wallet, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

const STORAGE_KEY = "SPENDLY!";

const BalanceSummary = () => {
  const [transactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-sm text-gray-500">Current Balance</p>
        <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
          <Wallet size={18} />
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-3">₦{balance.toLocaleString()}</h2>
      <p className="text-xs text-gray-400 mt-1">Available balance</p>

      {/* Income vs Expense breakdown */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
            <ArrowUpCircle size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-400">Income</p>
            <p className="text-sm font-semibold text-gray-800">
              ₦{income.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
            <ArrowDownCircle size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-400">Expenses</p>
            <p className="text-sm font-semibold text-gray-800">
              ₦{expenses.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;
