import { useThemeContext } from "../providers/ThemeProvider";

export default function HowToUse() {
  const { theme } = useThemeContext(); // Access theme from context

  // Dynamic styles based on the theme
  const backgroundClass =
    theme === "dark" ? "bg-gray-900 to-gray-800" : "bg-gray-100 to-white";
  const cardClass =
    theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700";
  const headingGradientClass =
    theme === "dark"
      ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
      : "bg-gradient-to-r from-yellow-600 to-yellow-400";

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-b ${backgroundClass} pt-12 pb-4`}
    >
      <div className={`p-6 rounded-lg shadow-lg max-w-3xl w-full ${cardClass}`}>
        <h2
          className={`text-2xl font-bold mb-6 text-center ${headingGradientClass} bg-clip-text text-transparent`}
        >
          How to Use Glue and Bond
        </h2>
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Understanding Your Needs</h3>
          <p>
            Choosing the right product depends on the type of material and the
            purpose of your project. Here are key factors to consider:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Material type: Wood, plastic, metal, fabric, or ceramics</li>
            <li>Bonding strength: Temporary or permanent</li>
            <li>Drying time and durability</li>
            <li>Application method: Brush, tube, or spray</li>
            <li>Environmental factors: Indoor or outdoor use</li>
          </ul>

          <h3 className="font-semibold text-lg mt-4">How to Use Glue</h3>
          <p>
            Glue is a versatile adhesive suitable for various light to medium
            strength applications. Follow these steps for optimal results:
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <strong>Prepare the Surface:</strong> Clean the surfaces to remove
              dust, grease, or debris. Dry the surfaces completely before
              application.
            </li>
            <li>
              <strong>Apply the Glue:</strong> Evenly spread a thin layer of
              glue on one surface using the applicator or a brush. Avoid
              excessive glue to prevent mess.
            </li>
            <li>
              <strong>Join the Surfaces:</strong> Align the parts carefully and
              press them together firmly. Hold for the recommended time as
              mentioned on the product packaging.
            </li>
            <li>
              <strong>Allow to Dry:</strong> Leave the glued item undisturbed to
              cure completely. Drying time varies depending on the glue type and
              environmental conditions.
            </li>
          </ol>
          <p>
            Tip: Use glue for materials like paper, wood, or lightweight crafts
            that don’t require extreme bonding strength.
          </p>

          <h3 className="font-semibold text-lg mt-4">How to Use Bond</h3>
          <p>
            Bond adhesives are designed for heavy-duty tasks requiring
            high-strength, long-lasting connections. Here's how to use them:
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <strong>Inspect and Clean the Area:</strong> Ensure both surfaces
              are clean, dry, and free of contaminants.
            </li>
            <li>
              <strong>Apply the Bond:</strong> Dispense a thin, consistent layer
              of adhesive on both surfaces or as per the manufacturer’s
              instructions.
            </li>
            <li>
              <strong>Press and Secure:</strong> Bring the surfaces together and
              apply pressure to ensure strong contact. Use clamps or weights to
              hold the materials in place if necessary.
            </li>
            <li>
              <strong>Cure for Maximum Strength:</strong> Allow the adhesive to
              cure fully, as curing time may differ based on bond type and
              environmental factors.
            </li>
          </ol>
          <p>
            Tip: Bond adhesives are ideal for repairs, heavy materials, and
            surfaces exposed to stress or extreme conditions.
          </p>

          <h3 className="font-semibold text-lg mt-4">Safety Precautions</h3>
          <p>Always follow these safety guidelines when using adhesives:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Work in a well-ventilated area to avoid inhaling fumes.</li>
            <li>Wear gloves to protect your skin from direct contact.</li>
            <li>
              Store adhesives away from children and pets in a cool, dry place.
            </li>
            <li>
              Read and follow the product-specific instructions for best
              results.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mt-4">Contact Us</h3>
          <p>
            If you have further questions or need assistance choosing the right
            product, feel free to reach out to us:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:todaybondproduct@gmail.com"
              className="text-yellow-400 hover:underline"
            >
              todaybondproduct@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91-9910829792
          </p>
        </div>
      </div>
    </div>
  );
}
