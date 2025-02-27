import React from 'react';
import { Send } from 'lucide-react';

export function Subscribe() {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Subscribe For The Latest Healthcare Updates
        </h2>
        <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
          Stay informed about the latest developments in healthcare technology and services.
        </p>
        
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition flex items-center">
            <Send className="w-5 h-5 mr-2" />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}