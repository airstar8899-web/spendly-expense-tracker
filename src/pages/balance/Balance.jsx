import BalanceSummary from "../../components/ui/balancesummary/BalanceSummary";

const Balance = () => {
  return (
    <div className="sticky top-0 z-40 bg-[#F8F8FC] py-4 mb-6">
      <hr className="border-gray-200 mb-5" />

      <h1 className="text-3xl font-bold text-gray-800">Balance</h1>

      <p className="text-sm text-gray-500 mt-1">
        Here's a breakdown of your current balance.
      </p>
      <BalanceSummary />
    </div>
  );
};

export default Balance;
