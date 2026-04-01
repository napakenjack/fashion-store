import { Link } from 'react-router-dom';

export function Returns() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">Return & Exchange Policy</h1>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-600">
          <p>Last updated: April 1, 2026</p>
          
          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Our Return Policy</h2>
          <p>
            We accept returns up to 30 days after delivery, if the item is unused and in its original condition with all tags attached, and we will refund the full order amount minus the shipping costs for the return.
          </p>
          
          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Exceptions</h2>
          <p>Please note the following exceptions to our return and exchange policy:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Discounted items are final sale and cannot be returned or exchanged.</li>
            <li>Returned items must have tags still on and be returned in original packaging.</li>
            <li>Returned items must have no visible signs of wear or use.</li>
            <li>Intimates and swimwear cannot be returned for hygiene reasons.</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">How to Initiate a Return</h2>
          <p>To initiate a return or exchange, please complete the following steps:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li>Visit our online return portal.</li>
            <li>Enter your order number and email address.</li>
            <li>Select the items you wish to return or exchange.</li>
            <li>Print the prepaid shipping label that you will receive by email.</li>
            <li>Send all items back to us using the label provided.</li>
          </ol>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Refunds</h2>
          <p>
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
          </p>
          <p>
            If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
          </p>
        </div>
      </div>
    </div>
  );
}
