import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Lock, Shield, Truck } from "lucide-react";
import toast from "react-hot-toast";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], totalAmount = 0 } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to "Cash on Delivery"
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    const missingFields = Object.keys(formData).filter(
      (key) => !formData[key as keyof typeof formData]
    );
    if (missingFields.length > 0) {
      toast.error("Please fill in all fields to proceed.");
      return;
    }

    if (paymentMethod === "online") {
      initiateRazorpay();
    } else {
      toast.success("Cash on delivery selected!");
      navigate("/order-success");
    }
  };

  // Integrate Razorpay
  const initiateRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "Your Store Name",
      description: "Test Transaction",
      image: "https://example.com/your-logo.png",
      handler: function (response: any) {
        toast.success("Payment successful!");
        navigate("/order-success");
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: formData.address,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Complete Your Purchase
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Order Summary */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Order Summary
            </h3>
            <div className="space-y-4">
              {cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 py-2 border-b dark:border-gray-700"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    ${totalAmount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="text-blue-600" />
                <p className="text-gray-600 dark:text-gray-300">
                  Secure SSL Encryption
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="text-blue-600" />
                <p className="text-gray-600 dark:text-gray-300">
                  Protected Payment Information
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-blue-600" />
                <p className="text-gray-600 dark:text-gray-300">
                  Fast & Secure Delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Payment Form */}
        <form onSubmit={handlePayment} className="space-y-6">
          {/* Payment Method Selection */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Payment Method
            </h3>
            <div className="space-y-4">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={handlePaymentMethodChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Cash on Delivery</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={handlePaymentMethodChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Online Payment</span>
                </label>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Shipping Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "firstName",
                "lastName",
                "email",
                "phone",
                "address",
                "city",
                "state",
                "zipCode",
              ].map((field, idx) => (
                <input
                  key={idx}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className={`col-span-${
                    field === "email" || field === "phone" ? "2" : "1"
                  } 
                      p-3 rounded-md border dark:border-gray-700 dark:bg-gray-900`}
                  required
                />
              ))}
            </div>
          </div>

          {/* Razorpay Button for Online Payment */}
          {paymentMethod === "online" && (
            <button
              type="button"
              onClick={initiateRazorpay}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-md hover:opacity-90 transition duration-200 flex items-center justify-center space-x-2"
            >
              <Lock className="h-5 w-5" />
              <span>Proceed with Razorpay</span>
            </button>
          )}

          {/* Cash on Delivery Button */}
          {paymentMethod === "cod" && (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-md hover:opacity-90 transition duration-200 flex items-center justify-center space-x-2"
            >
              <Lock className="h-5 w-5" />
              <span>Complete Payment</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Payment;
