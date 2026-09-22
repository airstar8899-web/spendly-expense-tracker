import Card from "./Card";

const QuickAction = ({ icon, title, onClick,  }) => {
  return (
    <button onClick={onClick} className="text-left w-full">
      <Card className="hover:bg-gray-50">
        <div className="text-2xl">{icon}</div>

        <p className="text-sm font-medium mt-2">
          {title}
        </p>
      </Card>
    </button>
  );
};

export default QuickAction;