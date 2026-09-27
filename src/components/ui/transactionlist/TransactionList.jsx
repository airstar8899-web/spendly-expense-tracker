const TransactionList = ({
  transactions = [],
  title = "Recent Transactions",
  subtitle = "All your income and expenses in one place",
}) => {
  return (
    <section className="mt-8 w-full rounded-2xl bg-white p-5 shadow-lg sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#502D55] sm:text-3xl">
          {title}
        </h2>

        <p className="mt-1 text-sm text-[#502D55]/60 sm:text-base">
          {subtitle}
        </p>
      </div>

      {/* Empty state */}
      {transactions.length === 0 ? (
        <div className="rounded-xl bg-[#F8F4E9] p-8 text-center">
          <p className="text-[#502D55]/60">No transactions yet.</p>
        </div>
      ) : (
        /* Transaction list */
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="rounded-xl border border-[#935073]/20 bg-white p-4 transition hover:shadow-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-[#502D55]">
                    {transaction.description || "No description"}
                  </h3>

                  <p className="mt-1 text-sm text-[#502D55]/60">
                    {transaction.category}
                  </p>

                  <p className="mt-1 text-xs text-[#502D55]/50">
                    {transaction.date}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p
                    className={`text-lg font-bold ${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₦
                    {Number(transaction.amount).toLocaleString()}
                  </p>

                  <span className="text-sm capitalize text-[#502D55]/60">
                    {transaction.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TransactionList;
