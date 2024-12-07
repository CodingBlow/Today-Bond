import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useThemeContext } from "../providers/ThemeProvider";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { theme } = useThemeContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    // Simulate login - In a real app, this would be an API call
    login({
      id: "1",
      email: data.email,
      name: data.email.split("@")[0],
    });
    toast.success("Successfully logged in!");
    navigate("/");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900" : "bg-yellow-50"
      }`}
    >
      <div
        className={`max-w-md w-full shadow-lg rounded-lg p-6 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="text-center mb-6">
          <h2
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-yellow-400" : "text-yellow-500"
            }`}
          >
            Welcome Back
          </h2>
          <p className="text-sm">
            Sign in to continue or{" "}
            <Link
              to="/signup"
              className={`hover:underline ${
                theme === "dark" ? "text-yellow-400" : "text-yellow-500"
              }`}
            >
              create a new account
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-yellow-400"
                    : "bg-white border-gray-300 focus:ring-yellow-500"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password")}
                className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-yellow-400"
                    : "bg-white border-gray-300 focus:ring-yellow-500"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500 focus:ring-yellow-400"
                  : "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500"
              }`}
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/")}
            className={`hover:underline ${
              theme === "dark" ? "text-yellow-400" : "text-yellow-500"
            }`}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
