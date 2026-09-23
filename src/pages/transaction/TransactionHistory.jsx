import TransactionForm from "../../components/ui/transactionform/TransactionForm";
import TransactionList from "../../components/ui/transactionlist/TransactionList";

const TransactionHistory = () => {
  return (
    <div>
      <TransactionForm />
      <TransactionList />
    </div>
  );
};

export default TransactionHistory;