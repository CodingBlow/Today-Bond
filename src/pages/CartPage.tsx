import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, CreditCard } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

export default function CartPage() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, total } =
    useCartStore();
  const { isAuthenticated } = useAuthStore();

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const finalTotal = subtotal + shipping + tax;

  const handleCheckout = () => {
    // Passing the cart data, shipping, tax, and total to the Payment page
    navigate("/payment", {
      state: {
        cartItems: items,
        subtotal,
        shipping,
        tax,
        totalAmount: finalTotal,
      },
    });
    clearCart(); // Clear cart after checkout initiation
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Add some products to your cart to get started!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Shopping Cart
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition text-gray-600 dark:text-gray-300"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center dark:text-white">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition text-gray-600 dark:text-gray-300"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-red-500 transition"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Order Summary
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t dark:border-gray-700 pt-3 font-semibold flex justify-between text-gray-900 dark:text-white">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {shipping > 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Free shipping on orders over $50!
            </p>
          )}

          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md hover:opacity-90 transition duration-200 flex items-center justify-center space-x-2"
          >
            <CreditCard className="h-5 w-5" />
            <span>Proceed to Checkout</span>
          </button>

          {!isAuthenticated && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              Please{" "}
              <Link
                to="/login"
                className="text-blue-600 dark:text-blue-400 hover:opacity-90"
              >
                login
              </Link>{" "}
              to checkout
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
