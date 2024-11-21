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
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
