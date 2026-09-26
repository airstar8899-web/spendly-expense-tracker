import {useState} from "react";
import TransactionForm from "../../components/ui/transactionform/TransactionForm";
import TransactionList from "../../components/ui/transactionlist/TransactionList";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
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