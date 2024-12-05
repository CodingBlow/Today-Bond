import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function FeaturedProducts() {
  // Filter products by unique IDs within the range of 7 to 12
  const filteredProducts = Array.from(
    new Map(
      products
        .filter((product) => product.id >= 7 && product.id <= 12)
        .map((item) => [item.id, item])
    ).values()
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Best Selling Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm">
            Top-rated adhesive solutions trusted by professionals
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                />
                {product.inStock && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                    In Stock
                  </span>
                )}
              </div>

              <div className="p-3">
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.round(product.rating)
                            ? "fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
                    {product.rating}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <button
                    className="p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/shop"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
