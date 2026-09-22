import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!agreed) {
      setError("Please agree to the processing of personal data.");
      return;
    }
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#F8F4E9] flex flex-col">
      <div className="bg-linear-to-br from-[#502D55] to-[#935073] h-28 rounded-b-[40px] flex items-start p-6">
        <button
          onClick={() => navigate("/")}
          className="text-[#F8F4E9] text-sm"
        >
          &lt; Back
        </button>
      </div>

      <div className="flex-1 px-6 -mt-10">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-[#502D55] text-2xl font-bold mb-6">
            Get Started
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-[#6B5A47]">Full Name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
                className="w-full border border-[#DEDAD0] rounded-lg p-3 mt-1"
              />
            </div>
            <div>
              <label className="text-xs text-[#6B5A47]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full border border-[#DEDAD0] rounded-lg p-3 mt-1"
              />
            </div>
            <div>
              <label className="text-xs text-[#6B5A47]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full border border-[#DEDAD0] rounded-lg p-3 mt-1"
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-[#6B5A47]">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  setError("");
                }}
                className="mt-0.5"
              />
              I agree to the processing of{" "}
              <span className="text-[#935073] font-semibold">
                Personal data
              </span>
            </label>
            {error && <p className="text-xs text-[#6B2E43]">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-[#502D55] text-[#F8F4E9] font-semibold py-3 rounded-lg mt-2"
            >
              Sign up
            </Button>
          </form>

          <p className="text-center text-sm text-[#6B5A47] mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/signin")}
              className="text-[#935073] font-semibold"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
