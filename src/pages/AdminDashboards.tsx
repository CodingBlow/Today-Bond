import { useEffect, useState } from "react";
import { ref, onValue, update } from "firebase/database";
import { database } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  Package,
  User,
  MapPin,
  Phone,
  Mail,
  Clock,
  DollarSign,
} from "lucide-react";

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Orders Dashboard
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminAuth");
              navigate("/admin");
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Status Filter Bar */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setSelectedStatus("all")}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => setSelectedStatus("pending")}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === "pending"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            New
          </button>
          <button
            onClick={() => setSelectedStatus("in-transit")}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === "in-transit"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            In Transit
          </button>
          <button
            onClick={() => setSelectedStatus("completed")}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === "completed"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setSelectedStatus("not-delivered")}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === "not-delivered"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Not Delivered
          </button>
          <button
            onClick={() => setSelectedStatus("return")}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === "return"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Return
          </button>
        </div>

        <div className="space-y-6">
          {Object.entries(filteredBookings).map(([bookingId, booking]) => (
            <div
              key={bookingId}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Package className="text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {booking.orderId}
                    </h3>
                  </div>
                  <select
                    value={booking.status}
                    onChange={(e) => updateStatus(bookingId, e.target.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white`}
                  >
                    <option value="new">New</option>
                    <option value="in-transit">In Transit</option>
                    <option value="completed">Completed</option>
                    <option value="not-delivered">Not Delivered</option>
                    <option value="return">Return</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Customer</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {booking.firstName} {booking.lastName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">
                          Shipping Address
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {booking.address}, {booking.city}, {booking.state}{" "}
                          {booking.zipCode}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {booking.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {booking.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Order Date</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {new Date(booking.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <DollarSign className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Payment Method</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {booking.paymentMethod}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Order Items</p>
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

                    <div className="pt-4 border-t dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Total Amount
                        </span>
                        <span className="text-xl font-bold text-blue-600">
                          ₹{booking.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
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
