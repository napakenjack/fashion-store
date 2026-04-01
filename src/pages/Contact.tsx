import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form or handle actual submission here
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-neutral-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            We're here to help. Whether you have a question about an order, sizing, or our products, our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-black shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">Email</h3>
                  <p className="mt-1 text-neutral-600">Our team typically responds within 24 hours.</p>
                  <a href="mailto:support@auraclothing.com" className="mt-2 block font-medium text-black hover:underline">
                    support@auraclothing.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-black shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">Phone</h3>
                  <p className="mt-1 text-neutral-600">Mon-Fri from 9am to 6pm EST.</p>
                  <a href="tel:+18001234567" className="mt-2 block font-medium text-black hover:underline">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-black shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">Headquarters</h3>
                  <p className="mt-1 text-neutral-600">
                    123 Fashion Avenue<br />
                    Suite 400<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-black shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">Business Hours</h3>
                  <p className="mt-1 text-neutral-600">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 p-6 text-center">
                <h3 className="text-lg font-medium text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <Button className="mt-6" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="orderNumber" className="block text-sm font-medium text-neutral-700 mb-2">Order Number (Optional)</label>
                  <Input id="orderNumber" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                  <select id="subject" className="flex h-11 w-full rounded-none border border-neutral-300 bg-transparent px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black" required>
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="product">Product Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="flex w-full rounded-none border border-neutral-300 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
