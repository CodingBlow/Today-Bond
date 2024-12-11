import React from "react";
import { FaLeaf, FaRecycle, FaTools } from "react-icons/fa";

const ProductLifecycle: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-5 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-yellow-400 mb-12">
          Product Lifecycle
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Long-Term Benefits Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 hover:shadow-xl dark:hover:shadow-yellow-400/10 transition-shadow duration-300 border-t-4 border-yellow-400">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-400/10 rounded-full mx-auto mb-6">
              <FaLeaf className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-yellow-400 mb-4 text-center">
              Long-Term Benefits
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our adhesive is designed to provide outstanding performance over time.
              It ensures durability, reliability, and consistent value, making it a
              trusted choice for all your bonding needs.
            </p>
          </div>

          {/* End-of-Life Disposal Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 hover:shadow-xl dark:hover:shadow-yellow-400/10 transition-shadow duration-300 border-t-4 border-yellow-400">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-400/10 rounded-full mx-auto mb-6">
              <FaRecycle className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-yellow-400 mb-4 text-center">
              End-of-Life Disposal
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Proper disposal of the adhesive packaging is important for the
              environment. Recycle the packaging where facilities exist, or dispose
              of it in accordance with local regulations.
            </p>
          </div>

          {/* Maintenance Tips Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 hover:shadow-xl dark:hover:shadow-yellow-400/10 transition-shadow duration-300 border-t-4 border-yellow-400">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-400/10 rounded-full mx-auto mb-6">
              <FaTools className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-yellow-400 mb-4 text-center">
              Maintenance Tips
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ensure the bond remains strong by following these tips: avoid exposing
              the adhesive to extreme conditions, clean surfaces regularly, and
              reapply as necessary for high-wear areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLifecycle;
