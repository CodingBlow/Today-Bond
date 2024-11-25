import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import toast from "react-hot-toast";

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
}

export default function Products() {
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate();

  // Filter products by unique IDs within the range of 1 to 6
  const filteredProducts = products.filter(
    (product) => product.id >= 1 && product.id <= 6
  );

  // Handle adding products to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success("Added to cart", {
      style: {
        background: "#1F2937",
        color: "#FFFFFF",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      duration: 3000,
      icon: "🎉",
    });
    navigate(`/product/${product.id}`);
  };

  // Navigate to the product detail page
  const viewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hot Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Professional-grade adhesive solutions for every application
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              {/* Clickable Image */}
              <div
                className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 p-3 cursor-pointer"
                onClick={() => viewProduct(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-semibold text-green-600 dark:text-green-400">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 dark:text-gray-400 text-xs">
                    {product.rating}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white mb-1 cursor-pointer hover:underline"
                  onClick={() => viewProduct(product.id)}
                >
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Price
                    </span>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </div>
                  {/* Add to Cart */}
                  <button
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
