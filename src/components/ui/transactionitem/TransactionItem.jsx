const TransactionItem = ({ transactions = [] }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
        <p className="text-sm text-gray-500 mt-1">Your latest income and expenses</p>
      </div>

      {transactions.length === 0 ? (
        <div className="p-10 text-center text-gray-400">No transactions yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-100">
                <th className="px-5 py-3 font-medium">Description</th> 
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 text-gray-700">
                    {t.description || "No description"}
                  </td> 
                  <td className="px-5 py-3 text-gray-500">{t.category}</td>
                  <td className="px-5 py-3 text-gray-500">{t.date}</td>
                  <td
                    className={`px-5 py-3 text-right font-semibold ${
                      t.type === "income" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {t.type === "income" ? "+" : "-"}₦{Number(t.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionItem;