import { useState } from "react";
import Card from "../../components/reusable/card/Card";
import Button from "../../components/reusable/button/Button";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const budgetData = [
  { name: "Food", budget: 500, spent: 400 },
  { name: "Transport", budget: 350, spent: 250 },
  { name: "Bills", budget: 400, spent: 300 },
  { name: "Shopping", budget: 250, spent: 150 },
];

const Report = () => {
  const [transactions] = useState(() => {
    const saved = localStorage.getItem("SPENDLY!");
    return saved ? JSON.parse(saved) : [];
  });

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income - expenses;

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
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#502D55]">
            Reports & Analytics
          </h2>

          <p className="mt-1 text-sm text-[#935073]">
            Analyze your spending patterns and track your budget.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="rounded-lg border border-[#502D55] px-4 py-2 text-sm font-medium text-[#502D55] hover:bg-[#F6DBC0]">
            PDF
          </Button>

          <Button
            onClick={handleExportCSV}
            className="rounded-lg bg-[#502D55] px-4 py-2 text-sm font-medium text-white hover:bg-[#935073]"
          >
            CSV
          </Button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Expenses by Category */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#502D55]">
            Expenses by Category
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            See where your money is going.
          </p>

          <div className="relative h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              {categoryData.length > 0 ? (
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
                  />

                  <Tooltip
                    formatter={(value) => `₦${value.toLocaleString()}`}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-500">
                  No expense data yet.
                </div>
              )}
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#502D55]">
                ₦{expenses.toLocaleString()}
              </span>

              <span className="text-xs text-gray-500">Total spent</span>
            </div>
          </div>
        </div>

        {/* Budget vs Spent */}
        <Card className="min-h-[350px] rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#502D55]">
            Budget vs Spent
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Compare your budget with actual spending.
          </p>

          <div className="mt-4 h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                <XAxis dataKey="name" tickLine={false} axisLine={false} />

                <YAxis tickLine={false} axisLine={false} />

                <Tooltip
                  cursor={{ fill: "#F8F4E9" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                />

                <Legend />

                <Bar
                  dataKey="budget"
                  name="Budget"
                  fill="#C98FA6"
                  radius={[6, 6, 0, 0]}
                />

                <Bar
                  dataKey="spent"
                  name="Spent"
                  fill="#502D55"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Spending Trend */}
      <Card className="mt-6 min-h-[400px] rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#502D55]">
          Spending Trend (Last 12 Months)
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track how your spending changes over time.
        </p>

        <div className="mt-4 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            {transactions.some(
              (transaction) => transaction.type === "expense",
            ) ? (
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
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                No spending data yet.
              </div>
            )}
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Report;
