const SummaryCard = ({ title, amount, subtitle, icon, trend, trendColor = "text-gray-400" }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-sm text-gray-500">{title}</p>
        {icon && (
          <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
            {icon}
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold mt-3">{amount}</h2>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}

      {trend && (
        <p className={`text-xs font-medium mt-3 flex items-center gap-1 ${trendColor}`}>
          {trend}
        </p>
      )}
    </div>
  );
};

export default SummaryCard;