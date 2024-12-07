import { useEffect, useState } from "react";
import { ref, onValue, update } from "firebase/database";
import { database } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../providers/ThemeProvider";
import { Package, User, MapPin, Clock } from "lucide-react";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface BookingData {
  orderId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cartItems: CartItem[];
  totalAmount: number;
  status: string;
  createdAt: string;
  paymentMethod: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Record<string, BookingData>>({});
  const [filteredBookings, setFilteredBookings] = useState<
    Record<string, BookingData>
  >({});
  const [selectedStatus, setSelectedStatus] = useState<string>("all"); // Default is 'all'
  const { theme } = useThemeContext(); // Access theme context
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) {
      navigate("/admin");
      return;
    }

    // Listen to real-time updates for bookings
    const bookingsRef = ref(database, "booking");
    const unsubscribe = onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setBookings(data);
        setFilteredBookings(data);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Filter bookings based on the selected status
  useEffect(() => {
    if (selectedStatus === "all") {
      setFilteredBookings(bookings);
    } else {
      const filtered = Object.fromEntries(
        Object.entries(bookings).filter(
          ([_, booking]) => booking.status === selectedStatus
        )
      );
      setFilteredBookings(filtered);
    }
  }, [selectedStatus, bookings]);

  const updateStatus = (bookingId: string, newStatus: string) => {
    const bookingRef = ref(database, `booking/${bookingId}`);
    update(bookingRef, { status: newStatus }).catch((error) => {
      console.error("Error updating status:", error);
    });
  };

  // Dynamic class assignments based on theme
  const containerClass =
    theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900";
  const cardClass =
    theme === "dark"
      ? "bg-gray-900 border-gray-700"
      : "bg-white border-yellow-300";
  const buttonClass =
    theme === "dark"
      ? "bg-gray-700 text-white hover:bg-red-600"
      : "bg-yellow-600 text-white hover:bg-yellow-700";

  return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 ${containerClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center sm:text-left">
            Orders Dashboard
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminAuth");
              navigate("/admin");
            }}
            className={`mt-4 sm:mt-0 px-4 py-2  rounded-lg transition-colors w-full sm:w-auto ${buttonClass}`}
          >
            Logout
          </button>
        </div>

        {/* Status Filter Bar */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8">
          {[
            "all",
            "New",
            "in-transit",
            "completed",
            "not-delivered",
            "return",
          ].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium ${
                selectedStatus === status
                  ? "bg-yellow-600 text-white"
                  : theme === "dark"
                  ? "bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700"
                  : "bg-white text-yellow-800 border border-yellow-600 hover:bg-yellow-100"
              } transition-colors`}
            >
              {status.charAt(0).toUpperCase() +
                status.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {Object.entries(filteredBookings).map(([bookingId, booking]) => (
            <div
              key={bookingId}
              className={`rounded-lg shadow-lg overflow-hidden ${cardClass}`}
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Package className="text-yellow-600" />
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {booking.orderId}
                    </h3>
                  </div>
                  <select
                    value={booking.status}
                    onChange={(e) => updateStatus(bookingId, e.target.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      theme === "dark"
                        ? "bg-gray-800 text-gray-100 border-gray-700"
                        : "bg-yellow-100 text-yellow-800 border-yellow-400"
                    } focus:ring focus:ring-yellow-300 focus:outline-none`}
                  >
                    <option value="New">New</option>
                    <option value="in-transit">In Transit</option>
                    <option value="completed">Completed</option>
                    <option value="not-delivered">Not Delivered</option>
                    <option value="return">Return</option>
                  </select>
                </div>

                {/* Booking Details */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="text-yellow-400" />
                      <div>
                        <p className="text-xs sm:text-sm">Customer</p>
                        <p className="font-medium">
                          {booking.firstName} {booking.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-yellow-400" />
                      <div>
                        <p className="text-xs sm:text-sm">Shipping Address</p>
                        <p className="font-medium break-words">
                          {booking.address}, {booking.city}, {booking.state}{" "}
                          {booking.zipCode}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-yellow-400" />
                      <div>
                        <p className="text-xs sm:text-sm">Order Date</p>
                        <p className="font-medium">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-yellow-300">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Amount</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-600">
                          ₹{booking.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {booking.cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm">
                        {item.quantity} x ₹{item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
