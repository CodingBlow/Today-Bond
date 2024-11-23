import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";
import { useNavigate } from "react-router-dom"; // Import for navigation

export default function HowToUse() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        How to Use Today Bond Adhesive
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={step1}
            alt="Step 1"
            className="w-32 h-32 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-700"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">
            Step #1
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Apply Today Bond Adhesive First. Keep in mind: Just a small amount
            is all you need!
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={step2}
            alt="Step 2"
            className="w-32 h-32 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-700"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">
            Step #2
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Next, apply the filler to seal any gaps or holes, ensuring a more
            durable and reliable bond.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={step3}
            alt="Step 3"
            className="w-32 h-32 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-700"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">
            Step #3
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Enjoy your results! You can also reverse Steps 1 and 2, applying the
            filler first, and use additional filler for extra strength if
            needed.
          </p>
        </div>
      </div>

      {/* Safety Tips Button */}
      <div className="mt-12">
        <button
          onClick={() => navigate("/safety-guidelines")} // Navigates to the safety tips page
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Safety Tips
        </button>
      </div>
    </div>
  );
}
