import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import SocialLogin from "../../components/ui/Icons/SocialLogin";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#F8F4E9] flex flex-col">
      <div
        className="bg-linear-to-br from-[#502D55] to-[#935073]
       h-40 rounded-b-[40px] flex items-start p-6"
      >
        <button
          onClick={() => navigate("/")}
          className="text-[#F8F4E9] text-sm"
        >
          &lt; Back
        </button>
      </div>

      <div className="flex-1 px-6 -mt-16">
        <div className="bg-white rounded-3xl shadow-lg p-9">
          <h2 className="text-[#502D55] text-2xl font-bold mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex justify-between text-xs text-[#6B5A47]">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Remember me
              </label>
              <span className="text-[#8d5d76] font-medium">
                Forgot password?
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#502D55] text-[#F8F4E9] font-semibold py-3 rounded-lg mt-2"
            >
              Sign in
            </Button>
          </form>
        </div>
        <div className="mt-22 ">
          <SocialLogin />
          <p className="text-center text-sm text-[#6B5A47] mt-16">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-[#935073] font-semibold"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
