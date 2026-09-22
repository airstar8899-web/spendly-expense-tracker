import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcomepage/Welcome";
import SignIn from "./pages/signpage/SignIn";
import SignUp from "./pages/signuppage/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<div>Portfolio coming soon</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
