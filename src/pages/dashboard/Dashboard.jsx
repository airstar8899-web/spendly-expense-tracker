import { useState, useEffect } from "react";
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import SummaryCard from "../../components/reusable/card/SummaryCard";
import QuickAction from "../../components/reusable/card/QuickAction";
import TransactionList from "../../components/ui/transactionlist/TransactionList";

const STORAGE_KEY = "SPENDLY!";

const Dashboard = () => {
  const [transactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

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

      <div className="mt-8">
        <TransactionList
          transactions={recentTransactions}
          title="Latest Activity"
          subtitle="Your most recent transactions"
        />
      </div>
    </>
  );
};

export default Dashboard;
