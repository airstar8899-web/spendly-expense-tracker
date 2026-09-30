const CATEGORIES = [
  "Food",
  "Transport",
  "Data",
  "Skincare",
  "Groceries",
  "Relocation plans",
  "Miscellaneous",
];

const BudgetOverview = ({ transactions = [] }) => {
  const monthLabel = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const spentByCategory = CATEGORIES.map((cat) => {
    const spent = transactions
      .filter((t) => t.type === "expense" && t.category === cat)
      .reduce((sum, t) => sum + t.amount, 0);
    return { category: cat, spent };
  });

  const total = spentByCategory.reduce((sum, c) => sum + c.spent, 0);
  const maxSpent = Math.max(...spentByCategory.map((c) => c.spent), 1);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800">Budget Overview</h2>
      <p className="text-sm text-gray-400 mb-6">{monthLabel}</p>

      <div className="space-y-5">
        {spentByCategory.map(({ category, spent }) => (
          <div key={category}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">{category}</span>
              <span className="text-gray-500">₦{spent.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-[#935073]"
                style={{ width: `${(spent / maxSpent) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
        <span className="font-semibold text-gray-800">Total</span>
        <span className="font-bold text-gray-800">
          ₦{total.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default BudgetOverview;
