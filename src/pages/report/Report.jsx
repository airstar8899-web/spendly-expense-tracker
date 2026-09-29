import { useState } from "react";
import { Download } from "lucide-react";

import Card from "../../components/reusable/card/Card";
import Button from "../../components/reusable/button/Button";

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const Report = () => {
  const [transactions] = useState(() => {
    const saved = localStorage.getItem("SPENDLY!");
    return saved ? JSON.parse(saved) : [];
  });

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const categoryColors = {
    Food: "#502D55",
    Transport: "#935073",
    Data: "#C98FA6",
    Skincare: "#F0C9A8",
    Groceries: "#502D55",
    "Relocation plans": "#935073",
    Miscellaneous: "#C98FA6",
  };

  const categoryData = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((categories, transaction) => {
      const existingCategory = categories.find(
        (item) => item.name === transaction.category,
      );

      if (existingCategory) {
        existingCategory.value += transaction.amount;
      } else {
        categories.push({
          name: transaction.category,
          value: transaction.amount,
          fill: categoryColors[transaction.category] || "#935073",
        });
      }

      return categories;
    }, []);

  const spendingData = Array.from({ length: 12 }, (_, index) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (11 - index));

    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    const year = date.getFullYear();

    const spent = transactions
      .filter((transaction) => {
        if (transaction.type !== "expense") return false;

        const transactionDate = new Date(transaction.date);

        return (
          transactionDate.getMonth() === date.getMonth() &&
          transactionDate.getFullYear() === year
        );
      })
      .reduce((total, transaction) => total + transaction.amount, 0);

    return {
      month,
      spent,
    };
  });

  const highestExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (highest, transaction) => {
        return transaction.amount > highest.amount ? transaction : highest;
      },
      { amount: 0 },
    );

  const topCategory = categoryData.reduce(
    (top, category) => {
      return category.value > top.value ? category : top;
    },
    { name: "None", value: 0 },
  );

  const spendingByDay = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((days, transaction) => {
      const date = transaction.date;

      if (days[date]) {
        days[date] += transaction.amount;
      } else {
        days[date] = transaction.amount;
      }

      return days;
    }, {});

  const mostExpensiveDay = Object.entries(spendingByDay).reduce(
    (highest, [date, amount]) => {
      return amount > highest.amount ? { date, amount } : highest;
    },
    { date: "", amount: 0 },
  );

  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const previousMonthDate = new Date();
  previousMonthDate.setMonth(currentMonth - 1);

  const currentMonthSpending = transactions
    .filter((transaction) => {
      if (transaction.type !== "expense") return false;

      const date = new Date(transaction.date);

      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    })
    .reduce((total, transaction) => total + transaction.amount, 0);

  const previousMonthSpending = transactions
    .filter((transaction) => {
      if (transaction.type !== "expense") return false;

      const date = new Date(transaction.date);

      return (
        date.getMonth() === previousMonthDate.getMonth() &&
        date.getFullYear() === previousMonthDate.getFullYear()
      );
    })
    .reduce((total, transaction) => total + transaction.amount, 0);

  const monthlyChange =
    previousMonthSpending > 0
      ? ((currentMonthSpending - previousMonthSpending) /
          previousMonthSpending) *
        100
      : null;

  const handleExportCSV = () => {
    const headers = ["Date", "Type", "Category", "Amount", "Description"];

    const rows = transactions.map((transaction) => [
      transaction.date,
      transaction.type,
      transaction.category,
      transaction.amount,
      transaction.description,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "spendly-report.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Report Header */}
      <div className="sticky top-0 z-40 bg-[#F8F8FC] py-2 mb-6">
        <hr className="border-gray-200 mb-5" />
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800">
              Reports & Analytics
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Analyze your spending patterns and track your budget.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => alert("PDF export is not available yet.")}
            className="flex items-center gap-2 rounded-lg border border-[#502D55] px-4 py-2 text-sm font-medium text-[#502D55] hover:bg-[#F6DBC0]"
          >
            <Download size={16} />
            PDF
          </Button>

          <Button
            onClick={handleExportCSV}
            className="flex items-center gap-2 rounded-lg bg-[#502D55] px-4 py-2 text-sm font-medium text-white hover:bg-[#935073]"
          >
            <Download size={16} />
            CSV
          </Button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Expenses by Category */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#502D55]">
            Expenses by Category
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            See where your money is going.
          </p>

          {/* Responsive chart area */}
          <div className="relative mt-4 h-85">
            {categoryData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={105}
                    paddingAngle={3}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  />

                  <Tooltip
                    formatter={(value) => `₦${value.toLocaleString()}`}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    }}
                  />

                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center pt-9 text-sm text-gray-500 ">
                No expense data yet.
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#502D55]">
                ₦{expenses.toLocaleString()}
              </span>

              <span className="text-xs text-gray-500 pt-10">Total spent</span>
            </div>
          </div>
        </div>

        {/* Spending Snapshot */}
        <Card className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#502D55]">
            Spending Snapshot
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            A quick look at your spending habits.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Highest Single Expense */}
            <div className="rounded-xl bg-[#F8F4E9] p-4">
              <p className="text-sm text-gray-500">Highest Single Expense</p>

              <p className="mt-2 text-xl font-bold text-[#502D55]">
                {highestExpense.amount > 0
                  ? `₦${highestExpense.amount.toLocaleString()}`
                  : "No data"}
              </p>

              {highestExpense.category && (
                <p className="mt-1 text-xs text-gray-500">
                  {highestExpense.category}
                </p>
              )}
            </div>

            {/* Top Spending Category */}
            <div className="rounded-xl bg-[#F8F4E9] p-4">
              <p className="text-sm text-gray-500">Top Spending Category</p>

              <p className="mt-2 text-xl font-bold text-[#502D55]">
                {topCategory.name === "None" ? "No data" : topCategory.name}
              </p>

              {topCategory.value > 0 && (
                <p className="mt-1 text-xs text-gray-500">
                  ₦{topCategory.value.toLocaleString()} spent
                </p>
              )}
            </div>

            {/* Most Expensive Day */}
            <div className="rounded-xl bg-[#F8F4E9] p-4">
              <p className="text-sm text-gray-500">Most Expensive Day</p>

              <p className="mt-2 text-xl font-bold text-[#502D55]">
                {mostExpensiveDay.date
                  ? new Date(
                      `${mostExpensiveDay.date}T00:00:00`,
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "No data"}
              </p>

              {mostExpensiveDay.amount > 0 && (
                <p className="mt-1 text-xs text-gray-500">
                  ₦{mostExpensiveDay.amount.toLocaleString()} spent
                </p>
              )}
            </div>

            {/* Monthly Change */}
            <div className="rounded-xl bg-[#F8F4E9] p-4">
              <p className="text-sm text-gray-500">Monthly Change</p>

              <p className="mt-2 text-xl font-bold text-[#502D55]">
                {monthlyChange === null
                  ? "No data"
                  : `${monthlyChange > 0 ? "+" : ""}${monthlyChange.toFixed(1)}%`}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Compared with last month
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Spending Trend */}
      <Card className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#502D55]">
          Spending Trend (Last 12 Months)
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track how your spending changes over time.
        </p>

        <div className="mt-4 h-70 sm:h-80">
          {transactions.some(
            (transaction) => transaction.type === "expense",
          ) ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                <XAxis dataKey="month" tickLine={false} axisLine={false} />

                <YAxis tickLine={false} axisLine={false} />

                <Tooltip
                  cursor={{ stroke: "#C98FA6" }}
                  formatter={(value) => `₦${value.toLocaleString()}`}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="spent"
                  name="Spent"
                  stroke="#502D55"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-500">
              No spending data yet.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Report;
