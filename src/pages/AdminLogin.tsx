import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../providers/ThemeProvider";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // State for error messages
  const navigate = useNavigate();
  const { theme } = useThemeContext(); // Access theme

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!password.trim()) {
      setError("Password field cannot be empty.");
      return;
    }

    // Check credentials
    if (password === "89548954") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  // Theme-specific classes
  const containerBgClass =
    theme === "dark"
      ? "bg-gray-800 from-gray-900 to-gray-800"
      : "bg-yellow-200 to-yellow-200";
  const cardBgClass = theme === "dark" ? "bg-gray-900" : "bg-yellow-100";
  const inputClass =
    theme === "dark"
      ? "bg-gray-900 border-gray-700 text-white"
      : "bg-white border-yellow-300 text-black";
  const buttonClass =
    theme === "dark"
      ? "from-gray-700 to-gray-600 text-white"
      : "from-yellow-500 to-yellow-600 text-white";
  const errorClass = theme === "dark" ? "text-red-400" : "text-red-600";

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-b ${containerBgClass} pt-12 pb-4`}
    >
      <div
        className={`p-6 rounded-lg shadow-lg w-96 transition-all duration-300 ${cardBgClass}`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
          Admin Access
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null); // Clear error on input change
            }}
            placeholder="Enter admin password"
            className={`w-full p-3 rounded-lg border ${inputClass} appearance-none`}
          />
          {error && <p className={`text-sm ${errorClass} mt-1`}>{error}</p>}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg bg-gradient-to-r hover:scale-105 transition-transform duration-300 ${buttonClass}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
