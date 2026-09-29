import { useState, useEffect } from "react";
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import SummaryCard from "../../components/reusable/card/SummaryCard";
import QuickAction from "../../components/reusable/card/QuickAction";
import TransactionItem from "../../components/ui/transactionitem/TransactionItem";
import BudgetOverview from "../../components/ui/budgetoverview/BudgetOverview";

const STORAGE_KEY = "SPENDLY!";
const CATEGORIES = [
  "Food",
  "Transport",
  "Data",
  "Skincare",
  "Groceries",
  "Relocation plans",
  "Miscellaneous",
];

const Dashboard = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  function openModal(type) {
    setModalType(type);
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
    setShowModal(true);
  }

  function handleQuickSubmit(e) {
    e.preventDefault();
    if (!amount || !category || !date) {
      alert("Please fill in all fields.");
      return;
    }
    const newTransaction = {
      id: Date.now(),
      type: modalType,
      amount: Number(amount),
      category,
      date,
      description,
    };
    setTransactions((prev) => [newTransaction, ...prev]);
    setShowModal(false);
  }

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;
  const recentTransactions = transactions.slice(0, 5);

  return (
    <>
      <hr className="border-gray-200 mb-4" />

      <div className="mb-6 sticky top-0 z-40 bg-[#F8F8FC] py-4">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>

        <p className="text-sm text-gray-500 mt-1">
          Here's your financial overview at a glance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Transaction"
          amount={transactions.length}
          subtitle="Transactions recorded"
          icon={<Wallet size={18} />}
        />
        <SummaryCard
          title="Income"
          amount={`₦${income.toLocaleString()}`}
          subtitle="This month"
          icon={<TrendingUp size={18} />}
          trend={
            <>
              <TrendingUp size={14} /> Increase
            </>
          }
          trendColor="text-green-500"
        />
        <SummaryCard
          title="Expenses"
          amount={`₦${expenses.toLocaleString()}`}
          subtitle="This month"
          icon={<TrendingDown size={18} />}
          trend={
            <>
              <TrendingDown size={14} /> Decrease
            </>
          }
          trendColor="text-red-500"
        />
        <SummaryCard
          title="Balance"
          amount={`₦${balance.toLocaleString()}`}
          subtitle="Available balance"
          icon={<PiggyBank size={18} />}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <QuickAction
            icon="＋"
            title="Add Income"
            onClick={() => openModal("income")}
          />
          <QuickAction
            icon="−"
            title="Add Expense"
            onClick={() => openModal("expense")}
          />
          <QuickAction
            icon="↔"
            title="Transfer"
            onClick={() => openModal("expense")}
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransactionItem transactions={recentTransactions} />
        </div>
        <BudgetOverview transactions={transactions} />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleQuickSubmit}
            className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-[#502D55] mb-4">
              Add {modalType === "income" ? "Income" : "Expense"}
            </h3>

            <label className="block text-sm text-[#502D55] mb-1 font-medium">
              Amount
            </label>
            <input
              type="number"
              min="0"
              placeholder="₦ 0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#935073]/30"
            />

            <label className="block text-sm text-[#502D55] mb-1 font-medium">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#935073]/30"
            >
              <option value="">Select category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <label className="block text-sm text-[#502D55] mb-1 font-medium">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#935073]/30"
            />

            <label className="block text-sm text-[#502D55] mb-1 font-medium">
              Description{" "}
              <span className="font-normal text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Groceries, Salary..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#935073]/30"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-lg bg-[#502D55] text-white font-semibold hover:bg-[#3f2244]"
              >
                Add {modalType === "income" ? "Income" : "Expense"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Dashboard;
