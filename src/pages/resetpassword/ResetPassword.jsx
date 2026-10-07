import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/reusable/button/Button";
import { supabase } from "../../superbase/superbase";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    // The reset link the user clicked already logged them into a temporary
    // session (Supabase handles this automatically via the URL). updateUser()
    // uses that session to actually set the new password.
    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);
  }

  return (
    <div className="min-h-screen bg-[#efece5] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-9 max-w-md w-full">
        {success ? (
          <div className="text-center">
            <h2 className="text-[#502D55] text-xl font-bold mb-2">
              Password updated
            </h2>
            <p className="text-sm text-[#6B5A47] mb-6">
              Your password has been changed. You can now sign in with it.
            </p>
            <Button
              onClick={() => navigate("/signin")}
              className="w-full bg-[#502D55] hover:bg-[#3f2244] text-[#F8F4E9] font-semibold py-3 rounded-lg transition"
            >
              Go to Sign In
            </Button>
          </div>
        ) : (
          <>
            <h2 className="text-[#502D55] text-2xl font-bold mb-1">
              Set a new password
            </h2>
            <p className="text-sm text-[#6B5A47] mb-6">
              Choose a new password for your account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-[#6B5A47]">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full border border-[#DEDAD0] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#935073]/40 focus:border-[#935073] transition"
                />
              </div>

              <div>
                <label className="text-xs text-[#6B5A47]">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full border border-[#DEDAD0] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#935073]/40 focus:border-[#935073] transition"
                />
              </div>

              {error && <p className="text-xs text-[#6B2E43]">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#502D55] hover:bg-[#3f2244] text-[#F8F4E9] font-semibold py-3 rounded-lg mt-2 transition disabled:opacity-60"
              >
                {loading ? "Updating..." : "Update Password"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;