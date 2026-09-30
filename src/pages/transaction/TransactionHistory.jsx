import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import TransactionForm from "../../components/ui/transactionform/TransactionForm";
import TransactionList from "../../components/ui/transactionlist/TransactionList";

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

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  function handleSaveTransaction(transaction) {
    setTransactions((prev) => {
      const exists = prev.some((t) => t.id === transaction.id);
      if (exists) {
        return prev.map((t) => (t.id === transaction.id ? transaction : t));
      }
      return [transaction, ...prev];
    });
    setEditingTransaction(null);
    setShowModal(false);
  }

  function handleDeleteTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  function handleEditTransaction(transaction) {
    setEditingTransaction(transaction);
    setShowModal(true);
  }

  function handleOpenAddModal() {
    setEditingTransaction(null);
    setShowModal(true);
  }

  function handleCancelEdit() {
    setEditingTransaction(null);
    setShowModal(false);
  }

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      !search ||
      t.description?.toLowerCase().includes(search.toLowerCase()) ||
      t.category?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = !activeCategory || t.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="sticky top-0 z-40 bg-[#F8F8FC] py-2 mb-6">
        <hr className="border-gray-200 mb-5" />
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold">Transaction History</h1>
            <p className="text-sm text-[#6b6b7a] mt-1">
              Manage and track all your income and expenses
            </p>
          </div>
          <button
            onClick={handleOpenAddModal}
            className="bg-[#684C6B] text-white px-4 py-1 rounded-full font-semibold text-sm hover:bg-[#57405a] flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
          >
            <span className="text-base">+</span> Add Item
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="relative mb-4">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-full pl-9 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#935073]/30 focus:border-[#935073]"
          />
        </div>

        <p className="text-sm font-medium text-gray-700 mb-2">Categories</p>
        <div className="flex flex-wrap justify-start gap-2">
          {" "}
          <button
            onClick={() => setActiveCategory("")}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              activeCategory === ""
                ? "bg-[#502D55] text-white border-[#502D55]"
                : "border-gray-200 text-gray-600 hover:bg-[#F8F4E9]"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-[#502D55] text-white border-[#502D55]"
                  : "border-gray-200 text-gray-600 hover:bg-[#F8F4E9]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <TransactionList
        transactions={filteredTransactions}
        onDelete={handleDeleteTransaction}
        onEdit={handleEditTransaction}
      />

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCancelEdit}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition"
              aria-label="Close"
            >
              <X size={12} />
            </button>

            <TransactionForm
              key={editingTransaction ? editingTransaction.id : "new"}
              onSave={handleSaveTransaction}
              editingTransaction={editingTransaction}
              onCancelEdit={handleCancelEdit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
