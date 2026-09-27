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


const categoryData = [
  { name: "Food", value: 400, fill: "#502D55" },
  { name: "Transport", value: 250, fill: "#935073" },
  { name: "Bills", value: 300, fill: "#C98FA6" },
  { name: "Shopping", value: 150, fill: "#F0C9A8" },
];

const totalExpenses = categoryData.reduce(
  (total, item) => total + item.value,
  0
);

const budgetData = [
  { name: "Food", budget: 500, spent: 400 },
  { name: "Transport", budget: 350, spent: 250 },
  { name: "Bills", budget: 400, spent: 300 },
  { name: "Shopping", budget: 250, spent: 150 },
];

const spendingData = [
  { month: "Jan", spent: 320 },
  { month: "Feb", spent: 450 },
  { month: "Mar", spent: 380 },
  { month: "Apr", spent: 520 },
  { month: "May", spent: 480 },
  { month: "Jun", spent: 610 },
  { month: "Jul", spent: 550 },
  { month: "Aug", spent: 690 },
  { month: "Sep", spent: 620 },
  { month: "Oct", spent: 730 },
  { month: "Nov", spent: 680 },
  { month: "Dec", spent: 760 },
];

const Report = () => {
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
          <Button
            className="rounded-lg border border-[#502D55] px-4 py-2 text-sm font-medium text-[#502D55] hover:bg-[#F6DBC0]"
          >
            PDF
          </Button>

          <Button
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

              <Tooltip />

              <Legend
                verticalAlign="bottom"
                height={36}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[#502D55]">
              {totalExpenses.toLocaleString()}
            </span>

            <span className="text-xs text-gray-500">
              Total spent
            </span>
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
             <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
              />

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
            <LineChart data={spendingData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                cursor={{ stroke: "#C98FA6" }}
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
        </div>
      </Card>
    </div>
  );
};

export default Report;
