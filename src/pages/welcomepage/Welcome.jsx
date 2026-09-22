import { useNavigate } from "react-router-dom";
import Button from "../../components/reusable/button/Button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-linear-to-br from-[#502D55] via-[#6B3F63] to-[#935073]
     overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute w-40 h-40 bg-[#F6DBC0]/10 rounded-full -top-10 -left-10"></div>
      <div className="absolute w-24 h-24 bg-[#F6DBC0]/10 rounded-full bottom-40 left-8"></div>
      <div className="absolute w-32 h-32 bg-[#935073]/30 rounded-full bottom-24 left-24"></div>

      <div className="relative z-10 px-8 mt-52 flex flex-col items-center text-center">
        <h1 className="text-[#F8F4E9] text-5xl font-bold mb-10">
          Welcome Back!
        </h1>
        <p className="text-[#F6DBC0] text-lg leading-relaxed max-w-xs ">
          Enter your personal details into your Spendly Account
        </p>
      </div>

      <div className="relative z-10 flex">
        <Button
          onClick={() => navigate("/signin")}
          className="flex-1 py-5 text-[#F8F4E9] font-medium"
        >
          Sign in
        </Button>
        <Button
          onClick={() => navigate("/signup")}
          className="flex-1 py-5 bg-[#F8F4E9]
           text-[#502D55] font-semibold rounded-tl-3xl"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
