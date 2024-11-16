import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us for any inquiries about our customs clearing and logistics services.
            We're here to help you with your import and export needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Office Address</p>
                    <p className="text-gray-300">Suite #619, 6th Floor, Clifton Center, Block-5, Clifton, Karachi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Phone Number</p>
                    <a href="tel:+923001234567" className="text-gray-300 hover:text-secondary-400 transition">
                      +92 300 1234567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Email Address</p>
                    <a href="mailto:info@alimukhtar.com" className="text-gray-300 hover:text-secondary-400 transition">
                      info@alimukhtar.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0457313244584!2d67.03053931500383!3d24.831942984070862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c5d5b567877%3A0x4b0f2c91c4f4e458!2sClifton%20Centre!5e0!3m2!1sen!2s!4v1645437254789!5m2!1sen!2s"
                className="w-full h-full rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-700/50 p-8 rounded-lg border border-dark-600">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="subject" value="New Contact Form Submission" />
              <input type="hidden" name="to" value="info@alimukhtar.com" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md dark-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md dark-input"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md dark-input"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md dark-input"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-3 rounded-md bg-secondary-400 text-dark-900 hover:bg-secondary-500 transition font-semibold"
                disabled={status === 'success'}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Error Sending Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">
                  Thank you for your message. We'll get back to you soon!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}