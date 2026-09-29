import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  ArrowLeftRight,
  Repeat,
  Wallet,
  BarChart3,
  LogOut,
  RotateCcw,
} from "lucide-react";

const navItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    Icon: LayoutGrid,
  },
  {
    key: "history",
    label: "Transaction History",
    path: "/transactions",
    Icon: ArrowLeftRight,
  },
  {
    key: "recurring",
    label: "Recurring Items",
    path: "/recurring",
    Icon: Repeat,
  },
  { key: "balance", label: "Balance", path: "/balance", Icon: Wallet },
  { key: "report", label: "Report", path: "/report", Icon: BarChart3 },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const ALL_STORAGE_KEYS = ["SPENDLY!", "SPENDLY_RECURRING"];

  function handleReset() {
    const confirmed = window.confirm(
      "This will permanently delete all your transactions and reset your balance to ₦0. Are you sure?",
    );
    if (confirmed) {
      ALL_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
      window.location.reload();
    }
  }

  return (
   <aside className="fixed left-0 top-0 h-screen w-16 md:w-64 bg-white border-r border-gray-100 flex flex-col py-6">
      {/* Logo */}
      <div className="px-4 md:px-6 mb-8 flex items-center justify-center md:justify-start gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#502D55] flex items-center justify-center text-white text-sm font-bold">
          S
        </div>
        <span className="hidden md:inline text-lg font-bold text-[#502D55]">
          Spendly
        </span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-1 px-2 md:px-3">
        {navItems.map(({ key, label, path, Icon }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={key}
              onClick={() => navigate(path)}
              className={`flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg transition justify-center md:justify-start ${
                isActive
                  ? "bg-[#502D55] text-white font-medium"
                  : "text-gray-500 hover:bg-[#F8F4E9] hover:text-[#502D55]"
              }`}
            >
              <Icon size={18} />
              <span className="hidden md:inline text-sm">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Spacer pushes bottom section down without pinning to the very edge */}
      <div className="flex-1" />

      {/* Reset + Log out */}
      <div className="px-2 md:px-3 mt-8 flex flex-col gap-1">
        <button
          onClick={handleReset}
          className="flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#502D55] transition justify-center md:justify-start w-full"
        >
          <RotateCcw size={18} />
          <span className="hidden md:inline text-sm font-medium">
            Reset Data
          </span>
        </button>

        <button
          onClick={() => navigate("/signin")}
          className="flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition justify-center md:justify-start w-full"
        >
          <LogOut size={18} />
          <span className="hidden md:inline text-sm font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
