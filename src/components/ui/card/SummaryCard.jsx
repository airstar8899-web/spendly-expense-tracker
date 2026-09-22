import Card from "./Card";

const SummaryCard = ({ title, amount, className }) => {
  return (
    <Card className={className}>
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="text-lg font-bold mt-2">
        {amount}
      </h3>
    </Card>
  );
};

export default SummaryCard;