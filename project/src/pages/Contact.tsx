import React, { useState } from 'react';
import { Send, MessageSquare, Linkedin, Twitter, Facebook, MapPin } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/40" />
            <img
              src="https://images.unsplash.com/photo-1579165466769-3a0d3f8a3291?auto=format&fit=crop&q=80"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300">
              We're here to help with your healthcare needs
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-gray-400">
                    Reach out to us for any questions about our services or to schedule a consultation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-500" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-400">123 Healthcare Ave, Medical District</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MessageSquare className="w-6 h-6 text-purple-500" />
                    <div>
                      <h3 className="font-semibold">Chat With Us</h3>
                      <p className="text-gray-400">Our support team is available 24/7</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-500/20 transition">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-500/20 transition">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-500/20 transition">
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gray-800/50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Locations</h2>
            <div className="h-[400px] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-10" />
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-8 h-8 bg-purple-500 rounded-full animate-ping" />
                <div className="w-8 h-8 bg-purple-500 rounded-full absolute top-0" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}