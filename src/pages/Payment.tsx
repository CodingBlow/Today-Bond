import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, Shield, Truck } from "lucide-react";
import toast from "react-hot-toast";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems = [], totalAmount = 0 } = location.state || {};

  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  // Function to send order data to Firebase Realtime Database using POST request
  const saveOrderToFirebase = async () => {
    try {
      // Log the individual cart items for debugging
      console.log(cartItems);

      // Prepare the order data, including the cartItems
      const orderItems = cartItems.map((item: { id: any; name: any; image: any; quantity: any; price: any; }) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        quantity: item.quantity,
        price: item.price,
      }));

      const orderData = {
        ...formData,
        cartItems: orderItems, // Include cartItems directly in the orderData
        totalAmount,
        paymentMethod: paymentMethod === "cod" ? "COD" : "Online",
        status: "pending",
        createdAt: new Date().toISOString(),
        orderId: `ORD${Date.now()}`,
      };

      // Send the order data with cartItems to /booking.json
      const response = await fetch(
        "https://bonds-b5d47-default-rtdb.firebaseio.com/booking.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save order with cartItems");
      }

      const data = await response.json(); // Get the orderId from the response
      return data.name; // Return the Firebase-generated orderId
    } catch (error) {
      console.error("Error saving order to Firebase:", error);
      throw new Error("Failed to save order");
    }
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (paymentMethod === "cod") {
        const orderId = await saveOrderToFirebase();
        toast.success("Order confirmed! Get ready for your amazing products!", {
          style: {
            background: "#00FF00",
            color: "#FFFFFF",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
          className: `
            !bg-green-50 dark:!bg-green-900/10
            !text-green-800 dark:!text-green-200
            !font-medium
            !text-sm md:!text-base
            !max-w-md
          `,
          duration: 3000,
          icon: "🎉",
        });

        navigate("/", { state: { orderId } });
      } else {
        initiateRazorpay(); // Continue using Razorpay for online payment
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        style: {
          background: "#00FF00",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        className: `
          !bg-red-50 dark:!bg-red-900/10
          !text-red-800 dark:!text-red-200
          !font-medium
          !text-sm md:!text-base
          !max-w-md
        `,
        duration: 3000,

        icon: "🔄",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const initiateRazorpay = () => {
    if (typeof window === 'undefined') {
      toast.error("Razorpay is not loaded. Please try again later.");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Make sure the key is valid
      amount: totalAmount * 100, // Razorpay expects amount in paise (1 INR = 100 paise)
      currency: "INR",
      name: "Your Store Name",
      description: "Purchase Payment",
      handler: async () => {
        try {

          const orderId = await saveOrderToFirebase(); // Save order to Firebase after payment
          toast.success("Payment successful!");
          navigate("/order-success", { state: { orderId } });
        } catch (error) {
          console.error("Error processing payment:", error);
          toast.error("Failed to process payment. Please contact support.");
        }
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#3B82F6", // Customize the color as per your brand
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r text-yellow-500 bg-clip-text text-transparent">
          Complete Your Purchase
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Order Summary
              </h3>
              <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                {cartItems.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-3 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                      ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ₹{totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="text-blue-500 dark:text-blue-400 h-6 w-6" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Secure Encryption
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="text-blue-500 dark:text-blue-400 h-6 w-6" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Safe Payment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="text-blue-500 dark:text-blue-400 h-6 w-6" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Fast Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form Section */}
          <form onSubmit={handlePayment} className="space-y-6">
            {/* Payment Method Selection */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Payment Method
              </h3>
              <div className="space-y-3">
                {["cod", "online"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center p-4 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={handlePaymentMethodChange}
                      className="form-radio h-5 w-5 text-blue-500 dark:text-blue-400"
                    />
                    <span className="ml-3 text-gray-900 dark:text-white">
                      {method === "cod" ? "Cash on Delivery" : "Online Payment"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(formData).map((field) => (
                  <div key={field} className="flex flex-col">
                    <label
                      htmlFor={field}
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {field.replace(/([A-Z])/g, " $1").toUpperCase()}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="form-input px-4 py-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-md hover:opacity-90 transition duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Place Order"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
