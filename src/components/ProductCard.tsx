import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { Product } from "../types";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      style: {
        background: "var(--background)",
        color: "var(--foreground)",
        border: "1px solid var(--border)",
        padding: "16px",
        borderRadius: "8px",
      },
      className: `
        !bg-white dark:!bg-gray-800 
        !text-gray-900 dark:!text-white 
        sm:!w-auto md:!max-w-md 
        !text-sm md:!text-base
        !font-medium
      `,
      duration: 2000,
      position: window.innerWidth <= 768 ? "bottom-center" : "top-right",
      icon: "🛍️",
    });
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition w-60">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-40 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ₹{product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition text-sm"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
