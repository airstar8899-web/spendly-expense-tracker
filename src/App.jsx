import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcomepage/Welcome";
import SignIn from "./pages/signpage/SignIn";
import SignUp from "./pages/signuppage/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import TransactionHistory from "./pages/transaction/TransactionHistory";
import Balance from "./pages/balance/Balance";
import RecurringItems from "./pages/recurring/RecurringItem";
import Report from "./pages/report/Report";
import Layout from "./components/reusable/sidebar/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/recurring" element={<RecurringItems />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
