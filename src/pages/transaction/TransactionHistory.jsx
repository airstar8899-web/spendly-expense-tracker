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

  function handleAddTransaction(newTransaction) {
    setTransactions((prev) => [newTransaction, ...prev]);
  }

  return (
    <div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default TransactionHistory;
