import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">Privacy Policy</h1>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-600">
          <p>Last updated: April 1, 2026</p>
          
          <p>
            This Privacy Policy describes how AURA ("we", "us", or "our") collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Collecting Personal Information</h2>
          <p>
            When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support.
          </p>
          <p>
            In this Privacy Policy, we refer to any information that can uniquely identify an individual as "Personal Information". See the list below for more information about what Personal Information we collect and why.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2">Device Information</h3>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Examples of Personal Information collected:</strong> version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
            <li><strong>Purpose of collection:</strong> to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
            <li><strong>Source of collection:</strong> Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
          </ul>

          <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-2">Order Information</h3>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Examples of Personal Information collected:</strong> name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</li>
            <li><strong>Purpose of collection:</strong> to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            <li><strong>Source of collection:</strong> collected from you.</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Sharing Personal Information</h2>
          <p>
            We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>We use Shopify to power our online store.</li>
            <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Your Rights</h2>
          <p>
            If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below.
          </p>
        </div>
      </div>
    </div>
  );
}
