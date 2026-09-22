import Card from "./Card";
import Button from "../button/Button";

const QuickAction = ({ icon, title, onClick }) => {
  return (
    <Button onClick={onClick} className="text-left w-full">
      <Card className="bg-white shadow-sm hover:bg-gray-50">
        <div className="text-2xl">{icon}</div>
        <p className="text-sm font-medium mt-2">{title}</p>
      </Card>
    </Button>
  );
};

export default QuickAction;