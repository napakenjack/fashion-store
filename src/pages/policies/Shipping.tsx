import { Link } from 'react-router-dom';

export function Shipping() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">Shipping Policy</h1>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-600">
          <p>Last updated: April 1, 2026</p>
          
          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Processing Time</h2>
          <p>
            All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
          </p>
          
          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Domestic Shipping Rates and Estimates</h2>
          <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Standard Shipping (3-5 business days):</strong> $8.00 (Free on orders over $150)</li>
            <li><strong>Expedited Shipping (2 business days):</strong> $15.00</li>
            <li><strong>Overnight Shipping (1 business day):</strong> $25.00</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">International Shipping</h2>
          <p>
            We offer international shipping to most countries. Shipping charges for your order will be calculated and displayed at checkout. Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. AURA is not responsible for these charges if they are applied and are your responsibility as the customer.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">How do I check the status of my order?</h2>
          <p>
            When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
          </p>
          <p>
            If you haven't received your order within 10 days of receiving your shipping confirmation email, please contact us at <a href="mailto:support@auraclothing.com" className="text-black underline">support@auraclothing.com</a> with your name and order number, and we will look into it for you.
          </p>
        </div>
      </div>
    </div>
  );
}
