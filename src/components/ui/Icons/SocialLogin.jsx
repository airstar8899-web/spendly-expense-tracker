import { FaFacebookF, FaTwitter, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SocialLogin() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300"></div>

        <p className="text-sm text-gray-500">Sign in with</p>

        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      <div className="mt-5 flex justify-center gap-8">
        <button
          className="p-0.5 rounded-full hover:bg-gray-100"
          aria-label="Sign in with Facebook"
        >
          <FaFacebookF className="text-xl text-blue-600" />
        </button>

        <button
          className="p-0.5 rounded-full hover:bg-gray-100"
          aria-label="Sign in with Twitter"
        >
          <FaTwitter className="text-xl text-sky-400" />
        </button>

        <button
          className="p-0.5 rounded-full hover:bg-gray-100"
          aria-label="Sign in with Google"
        >
          <FcGoogle className="text-2xl" />
        </button>

        <button
          className="p-0.5 rounded-full hover:bg-gray-100"
          aria-label="Sign in with Apple"
        >
          <FaApple className="text-xl text-black" />
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
