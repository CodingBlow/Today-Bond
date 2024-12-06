import step1 from "../assets/step1a.jpg";
import step2 from "../assets/step2a.jpg";
import step3 from "../assets/step3a.jpg";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    image: step1,
    number: "01",
    title: "Apply Today Bond",
    description: "Apply Today Bond Adhesive sparingly - a small amount ensures optimal bonding performance.",
  },
  {
    image: step2,
    number: "02",
    title: "Add Filler",
    description: "Apply the filler to seal gaps and holes, creating a stronger and more reliable bond.",
  },
  {
    image: step3,
    number: "03",
    title: "Final Result",
    description: "Steps can be reversed if needed. Additional filler can be applied for enhanced strength.",
  },
];

export default function HowToUse() {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Use Today Bond Adhesive
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl dark:shadow-gray-900/30 transition-transform duration-300 hover:transform hover:-translate-y-2 hover:bg-blue-400"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold text-center">
                      Step {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/safety-guidelines")}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg dark:shadow-blue-900/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <span className="mr-2">View Safety Guidelines</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 opacity-5 pointer-events-none"></div>
    </section>
  );
}
