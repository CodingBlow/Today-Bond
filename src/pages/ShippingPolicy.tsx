export default function ShippingPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-12 pb-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shipping Policy
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            We offer <strong>Free Shipping</strong> across India to most major
            cities for all orders above <strong>₹350</strong>. For orders below
            this value, a flat shipping fee of <strong>₹50</strong> is applied
            per order and is included at checkout.
          </p>

          <p>
            All orders are shipped via reputable courier and transport agencies.
            Customers are kindly requested to provide a complete and accurate
            delivery address, including a valid pin code, to ensure successful
            delivery. Deliveries are made on business days only. All products
            will be dispatched from our warehouse in <strong>Delhi</strong>.
          </p>

          <h3 className="font-semibold text-lg mt-4">
            Domestic Shipments (Within India)
          </h3>
          <p>
            - Orders are typically processed within <strong>24-48 hours</strong>{" "}
            after receipt. <br />- Expected delivery time is{" "}
            <strong>5-7 business days</strong>, provided there are no unforeseen
            delays.
          </p>

          <h3 className="font-semibold text-lg mt-4">
            International Shipments (Outside India)
          </h3>
          <p>
            - Orders are typically processed within <strong>24-48 hours</strong>{" "}
            after receipt. <br />- Expected delivery time is{" "}
            <strong>10-20 business days</strong>, depending on the destination
            and other external factors.
          </p>

          <h3 className="font-semibold text-lg mt-4">
            Shipment Confirmation & Order Tracking
          </h3>
          <p>
            Once your order has been shipped, you will receive a{" "}
            <strong>Shipment Confirmation Email</strong> containing your
            tracking number(s). Tracking numbers typically become active within{" "}
            <strong>24 hours</strong>. Delivery times vary based on the
            destination and shipping method selected. Please note that delays
            may occasionally occur due to customs processing or other unforeseen
            circumstances.
          </p>

          <h3 className="font-semibold text-lg mt-4">
            Customs, Duties, and Taxes
          </h3>
          <p>
            <strong>Today Bond</strong> is not responsible for any customs
            duties, taxes, or additional fees applied to your order. Any such
            charges during or after shipping are the responsibility of the
            customer (e.g., tariffs, taxes, etc.).
          </p>
          <p>
            Customs policies vary widely across different countries. For
            specific details, please contact your local customs office.
          </p>

          <h3 className="font-semibold text-lg mt-4">
            International Shipping Restrictions
          </h3>
          <p>
            Certain products may be restricted or prohibited from being shipped
            to specific international destinations. Please review your country’s
            import policies before placing an order.
          </p>

          <h3 className="font-semibold text-lg mt-4">Address Changes</h3>
          <p>
            If you wish to update your delivery address, please ensure the
            change is made within <strong>4 hours</strong> of placing the order.
            If the address cannot be updated through your account, please email
            us at:{" "}
            <a
              href="mailto:customercare@todaybond.com"
              className="text-blue-500 hover:underline"
            >
              customercare@todaybond.com
            </a>
            .
          </p>

          <h3 className="font-semibold text-lg mt-4">Delays in Shipping</h3>
          <p>
            If an item is out of stock or there are any unusual delays in
            fulfilling your order, we will notify you via email promptly. Our
            team will work to resolve such situations as quickly as possible to
            ensure customer satisfaction.
          </p>

          <h3 className="font-semibold text-lg mt-4">Contact Us</h3>
          <p>
            If you have further questions or need assistance, please don’t
            hesitate to reach out to us at:{" "}
            <a
              href="mailto:customercare@todaybond.com"
              className="text-blue-500 hover:underline"
            >
              customercare@todaybond.com
            </a>
            . We're here to help!
          </p>
        </div>
      </div>
    </div>
  );
}
