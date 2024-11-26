import { useEffect, useState } from "react";
import { ref, onValue, update } from "firebase/database";
import { database } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
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
  const [selectedStatus, setSelectedStatus] = useState<string>("all"); // Default is 'all' to show all bookings
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
        setBookings(data); // Updates the state with real-time data
        setFilteredBookings(data); // Initially show all bookings
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [navigate]);

  // Filter bookings based on the selected status
  useEffect(() => {
    if (selectedStatus === "all") {
      setFilteredBookings(bookings); // Show all bookings if 'all' is selected
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center sm:text-left">
            Orders Dashboard
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminAuth");
              navigate("/admin");
            }}
            className="mt-4 sm:mt-0 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors w-full sm:w-auto"
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
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              }`}
            >
              {status.charAt(0).toUpperCase() +
                status.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {Object.entries(filteredBookings).map(([bookingId, booking]) => (
            <div
              key={bookingId}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Package className="text-blue-600" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {booking.orderId}
                    </h3>
                  </div>
                  <select
                    value={booking.status}
                    onChange={(e) => updateStatus(bookingId, e.target.value)}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="New">New</option>
                    <option value="in-transit">In Transit</option>
                    <option value="completed">Completed</option>
                    <option value="not-delivered">Not Delivered</option>
                    <option value="return">Return</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="text-gray-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Customer
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {booking.firstName} {booking.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-gray-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Shipping Address
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white break-words">
                          {booking.address}, {booking.city}, {booking.state}{" "}
                          {booking.zipCode}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-gray-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Order Date
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Total Amount
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-blue-600">
                          ${booking.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <p className="text-sm text-gray-500">Order Items</p>
                  <div className="space-y-2">
                    {booking.cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3"
                      >
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.quantity} x ₹{item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
