const TransactionList = ({ transactions }) => {
  return (
    <div className="w-full">
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="px-5 py-4 text-left text-sm font-medium text-gray-600">
                  Description
                </th>
                <th className="px-5 py-4 text-left text-sm font-medium text-gray-600">
                  Category
                </th>
                <th className="px-5 py-4 text-left text-sm font-medium text-gray-600">
                  Type
                </th>
                <th className="px-5 py-4 text-right text-sm font-medium text-gray-600">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4 text-sm text-gray-600">
                      {transaction.date}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-800">
                      {transaction.description}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {transaction.category}
                    </td>

                    <td className="px-5 py-4 text-sm capitalize text-gray-600">
                      {transaction.type}
                    </td>

                    <td
                      className={`px-5 py-4 text-right text-sm font-semibold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}₦
                      {Number(transaction.amount).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-5 py-10 text-center text-sm text-gray-500"
                  >
                    No transactions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile */}
      <div className="space-y-3 md:hidden">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-gray-800">
                    {transaction.description}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {transaction.category}
                  </p>
                </div>

                <p
                  className={`shrink-0 text-sm font-semibold ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}₦
                  {Number(transaction.amount).toLocaleString()}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="text-xs text-gray-500">
                  {transaction.date}
                </span>

                <span className="text-xs capitalize text-gray-500">
                  {transaction.type}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-10 text-center text-sm text-gray-500">
            No transactions yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionList;