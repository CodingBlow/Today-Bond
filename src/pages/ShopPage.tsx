import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["all", "gel", "liquid", "combo"];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h2 className="text-3xl font-bold mb-4 md:mb-0 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Our Products
        </h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 rounded-md font-semibold text-sm ${
                selectedCategory === category
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              } transition-colors`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {searchQuery && (
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Search results for: "{searchQuery}"
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No products found.</p>
        </div>
      )}
    </div>
  );
}
