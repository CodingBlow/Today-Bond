import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import toast from "react-hot-toast";

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
  const [, setCart] = useState<Product[]>([]);
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (product) => product.id >= 1 && product.id <= 6
  );

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success("Added to cart", {
      style: {
        background: "#1F2937",
        color: "#FFFFFF",
        padding: "12px",
        borderRadius: "8px",
      },
      duration: 3000,
      icon: "🎉",
    });
    navigate(`/product/${product.id}`);
  };

  const viewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Hot Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm">
            Professional-grade adhesive solutions for every application
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div
                className="relative aspect-square bg-white dark:bg-white p-2 cursor-pointer"
                onClick={() => viewProduct(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 hover:text-decoration-none"
                />
                <div className="absolute top-2 right-2 bg-black dark:bg-gray-800 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white dark:text-green-400">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>

              <div className="p-3">
                <div className="flex items-center mb-1">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="ml-1 text-gray-600 dark:text-gray-400 text-xs">
                    {product.rating}
                  </span>
                </div>

                <h3
                  className="text-sm font-bold text-gray-900 dark:text-white mb-1 cursor-pointer hover:underline"
                  onClick={() => viewProduct(product.id)}
                >
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-xs">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">
                      Price
                    </span>
                    <span className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="flex items-center space-x-1 px-3 py-1 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 text-xs transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add</span>
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
