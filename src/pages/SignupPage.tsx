import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useThemeContext } from "../providers/ThemeProvider";
import toast from "react-hot-toast";

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { theme } = useThemeContext(); // Access theme from context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    // Simulate signup - In a real app, this would be an API call
    login({
      id: "1",
      email: data.email,
      name: data.name,
    });
    toast.success("Account created successfully!");
    navigate("/");
  };

  // Conditional styles based on the theme
  const backgroundClass =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-yellow-50";
  const cardClass =
    theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const inputClass =
    theme === "dark"
      ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-500"
      : "bg-white text-gray-900 border-gray-300 focus:ring-yellow-500";

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundClass}`}
    >
      <div className={`max-w-md w-full shadow-lg rounded-lg p-6 ${cardClass}`}>
        <div className="text-center mb-6">
          <h2
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-yellow-400" : "text-yellow-500"
            }`}
          >
            Create Your Account
          </h2>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Already have an account?{" "}
            <Link to="/login" className="hover:underline text-yellow-500">
              Sign in
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputClass}`}
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputClass}`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password")}
                className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputClass}`}
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
                className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputClass}`}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full py-2 px-4 font-medium rounded-md focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              Create Account
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
