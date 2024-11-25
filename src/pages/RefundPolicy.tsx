export default function RefundPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-12 pb-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Refund & Exchange Policy
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <h3 className="font-semibold text-lg mt-4">Policy Overview</h3>
          <p>
            Returns are accepted for damaged or defective products and for size
            issues only. If you receive a product that does not match what was
            displayed or committed, we will gladly accept it back within{" "}
            <strong>15 days of delivery</strong>, provided it is unused and in
            its original packaging.
          </p>
          <h3 className="font-semibold text-lg mt-4">Key Points</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Damaged or Defective Products:</strong> Notify us within{" "}
              <strong>48 hours</strong> of delivery. Do not accept visibly
              damaged or tampered packaging (excluding normal transit wear and
              tear).
            </li>
            <li>
              <strong>Non-Delivery Issues:</strong> Any claims related to
              non-delivery must be raised within <strong>15 days</strong> of the
              actual delivery date.
            </li>
            <li>
              <strong>Required Documents:</strong> All returned items must be
              accompanied by the <strong>original invoice</strong>.
            </li>
            <li>
              <strong>Promotional Purchases:</strong> Products purchased during
              promotional sales or at a discount are not eligible for exchange
              or refund.
            </li>
            <li>
              <strong>Return Conditions:</strong> Products must be returned in
              their original packaging, along with price tags, labels, and
              invoices. Packages must be securely packed to avoid transit
              damage.
            </li>
          </ul>
          <h3 className="font-semibold text-lg mt-4">
            Process for Returns & Exchanges
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Contact Customer Service:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Call us at <strong>+91-9910829792</strong> between{" "}
                  <strong>09:00 AM – 7:00 PM</strong>.
                </li>
                <li>
                  Email us at{" "}
                  <a
                    href="mailto:todaybondproduct@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    todaybondproduct@gmail.com
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>Shipping Cost:</strong> Customers will bear the cost of
              sending back the merchandise for returns or exchanges. The cost of
              sending the exchanged product back to the customer will be borne
              by <strong>Today Bond</strong>.
            </li>
            <li>
              <strong>Refund Process:</strong> Refunds will be issued as{" "}
              <strong>Gift Vouchers</strong> to your account for future
              purchases on our website.
            </li>
            <li>
              <strong>Address for Returns:</strong> Ensure the following address
              is clearly mentioned on the return parcel:
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-2">
                {/* <p className="font-medium">Ecommerce Division</p> */}
                <p>Today Bond</p>
                <p>C/10, G.F . DLF, Dilshad Extension 2,</p>
                <p>Uttar Pradesh 201005 ( India)</p>
              </div>
            </li>
          </ol>
          {/* C/10, G.F . DLF, Dilshad Extension 2, Uttar Pradesh 201005 ( India) */}
          <h3 className="font-semibold text-lg mt-4">Important Notes</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Products purchased during promotional sales or discounts are not
              eligible for warranty, guarantee, exchange, or refund.
            </li>
            <li>
              <strong>Today Bond</strong> reserves the right to make the final
              decision in all cases.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
