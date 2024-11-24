import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, FileText } from "lucide-react"; // Added FileText for GST icon
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <a
                      href="tel:+919910829792"
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      +91 9910829792
                    </a>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday -Saturday, 9am - 7pm EST
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:todaybondproduct@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      todaybondproduct@gmail.com
                    </a>
                  </div>
                </div>

                {/* GST Number */}
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      GST Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      09LGDPK7641B1ZA
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      C/10, G.F . DLF, Dilshad Extension 2,
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Uttar Pradesh 201005 ( India)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition duration-200"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
