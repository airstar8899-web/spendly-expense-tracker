import SummaryCard from "../../components/ui/card/SummaryCard";
import QuickAction from "../../components/ui/card/QuickAction";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F8FC] p-6">
      {/* Greeting */}
      <h1 className="text-2xl font-bold">Good Morning, Airstar</h1>

      <p className="text-gray-500 mt-1">Here's your financial overview</p>

      {/* Balance Card */}
      <div className="mt-6 rounded-3xl bg-[#502D55] p-6 text-white">
        <p className="text-sm text-white/70">Total Balance</p>

        <h2 className="mt-2 text-3xl font-bold">₦250,000</h2>

        <p className="mt-4 text-sm text-white/70">Available balance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 ">
        <SummaryCard title="Income" amount="₦350,000"/>

        <SummaryCard title="Expenses" amount="₦100,000" />

        <SummaryCard title="Savings" amount="₦250,000"  />

        {/* Quick Actions */}
<div className="mt-8">
  <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

    <QuickAction
      icon="＋"
      title="Add Income"
    />

    <QuickAction
      icon="−"
      title="Add Expense"
    />

    <QuickAction
      icon="↔"
      title="Transfer"
    />

  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;
