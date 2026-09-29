import { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type,
      amount: Number(amount),
      category,
      date,
      description,
    };

    if (onAddTransaction) {
      onAddTransaction(newTransaction);
    }

    console.log("New Transaction:", newTransaction);

    setType("expense");
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl rounded-2xl bg-[#F8F4E9] p-5 shadow-lg sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#502D55] sm:text-3xl">
          Add a Transaction
        </h2>

        <p className="mt-2 text-sm text-[#502D55]/70">
          Keep track of your income and expenses
        </p>
      </div>

      <div className="mb-5">
        <label className="mb-2 block font-semibold text-[#502D55]">
          Type
        </label>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setType("income")}
            className={`rounded-lg border px-4 py-3 font-medium transition ${
              type === "income"
                ? "border-[#502D55] bg-[#502D55] text-[#F8F4E9]"
                : "border-[#935073]/40 bg-transparent text-[#502D55] hover:bg-[#F6DBC0]"
            }`}
          >
            Income
          </button>

          <button
            type="button"
            onClick={() => setType("expense")}
            className={`rounded-lg border px-4 py-3 font-medium transition ${
              type === "expense"
                ? "border-[#935073] bg-[#935073] text-[#F8F4E9]"
                : "border-[#935073]/40 bg-transparent text-[#502D55] hover:bg-[#F6DBC0]"
            }`}
          >
            Expense
          </button>
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="amount"
          className="mb-2 block font-semibold text-[#502D55]"
        >
          Amount
        </label>

        <input
          id="amount"
          type="number"
          min="0"
          placeholder="₦ 0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-lg border border-[#935073]/30 bg-white p-3 text-[#502D55] outline-none transition focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="category"
            className="mb-2 block font-semibold text-[#502D55]"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-[#935073]/30 bg-white p-3 text-[#502D55] outline-none focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20"
          >
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Data">Data</option>
            <option value="Skincare">Skincare</option>
            <option value="Groceries">Groceries</option>
            <option value="Relocation plans">Relocation plans</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-2 block font-semibold text-[#502D55]"
          >
            Date
          </label>

          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-[#935073]/30 bg-white p-3 text-[#502D55] outline-none focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20"
          />
        </div>
      </div>

      <div className="my-5">
        <label
          htmlFor="description"
          className="mb-2 block font-semibold text-[#502D55]"
        >
          Description{" "}
          <span className="font-normal text-[#502D55]/60">
            (Optional)
          </span>
        </label>

        <textarea
          id="description"
          rows="4"
          placeholder="e.g. Groceries, Salary, Transport..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full resize-none rounded-lg border border-[#935073]/30 bg-white p-3 text-[#502D55] outline-none focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20"
        />

      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#935073] py-3 font-semibold text-[#F8F4E9] transition hover:bg-[#502D55] focus:outline-none focus:ring-2 focus:ring-[#935073] focus:ring-offset-2"
      >
        + Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;