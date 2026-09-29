import { useState, useEffect } from "react";
import TransactionForm from "../../components/ui/transactionform/TransactionForm";
import TransactionList from "../../components/ui/transactionlist/TransactionList";

const STORAGE_KEY = "SPENDLY!";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((previousTransactions) => [
      newTransaction,
      ...previousTransactions,
    ]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <TransactionForm
        onAddTransaction={handleAddTransaction}
      />

      <TransactionList
        transactions={transactions}
      />
    </div>
  );
};

export default TransactionHistory;