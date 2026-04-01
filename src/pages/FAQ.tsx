import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "How long will it take to receive my order?",
        a: "Standard shipping typically takes 3-5 business days within the contiguous US. Expedited shipping options (2-day and overnight) are available at checkout. International shipping generally takes 7-14 business days depending on the destination."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location and will be calculated at checkout. Please note that customers are responsible for any customs duties or taxes."
      },
      {
        q: "How can I track my order?",
        a: "Once your order ships, you will receive a confirmation email with a tracking number and a link to track your package. You can also track your order by logging into your AURA account."
      }
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns of unworn, unwashed, and undamaged items with original tags attached within 30 days of delivery for a full refund. Final sale items cannot be returned or exchanged."
      },
      {
        q: "How do I start a return or exchange?",
        a: "To initiate a return or exchange, please visit our Returns Portal, enter your order number and email address, and follow the instructions. We will provide a prepaid return shipping label."
      },
      {
        q: "When will I receive my refund?",
        a: "Once we receive and inspect your return, we will process your refund to the original payment method within 5-7 business days. It may take an additional 3-5 days for the funds to appear in your account depending on your bank."
      }
    ]
  },
  {
    category: "Products & Sizing",
    questions: [
      {
        q: "How do I know what size to order?",
        a: "We provide detailed size guides on every product page, including garment measurements and fit notes. If you're between sizes, we generally recommend sizing up for a more relaxed fit, or sizing down for a tailored look."
      },
      {
        q: "How should I care for my AURA garments?",
        a: "Care instructions vary by material. We recommend following the care label attached to the inside of the garment. Generally, washing in cold water and laying flat to dry will help extend the life of your clothing."
      },
      {
        q: "Will an out-of-stock item be restocked?",
        a: "We frequently restock our core essentials. For seasonal or limited-edition items, restocks are less likely. You can sign up for back-in-stock email notifications on the product page."
      }
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-neutral-600">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, catIdx) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">{category.category}</h2>
              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                {category.questions.map((faq, qIdx) => {
                  const index = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div key={qIdx} className="py-6">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex w-full items-start justify-between text-left focus:outline-none"
                      >
                        <span className="text-lg font-medium text-neutral-900 pr-8">{faq.q}</span>
                        <span className="ml-6 flex h-7 items-center shrink-0">
                          {isOpen ? <ChevronUp size={20} className="text-neutral-500" /> : <ChevronDown size={20} className="text-neutral-500" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="mt-4 pr-12">
                          <p className="text-base text-neutral-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-50 p-8 text-center">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Still have questions?</h3>
          <p className="text-neutral-600 mb-6">Our customer support team is here to help.</p>
          <a href="/contact" className="inline-flex items-center justify-center h-11 px-6 bg-black text-white font-medium hover:bg-neutral-800 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
