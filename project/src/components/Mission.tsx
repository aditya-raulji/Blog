import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              CareSlotter's Mission to Transform Healthcare
            </h2>
            <p className="text-gray-400 mb-8">
              We're on a mission to make healthcare more accessible, efficient, and 
              patient-centric through innovative technology solutions. Our platform 
              connects patients with healthcare providers seamlessly, while ensuring 
              the highest standards of care and security.
            </p>
            <button className="text-amber-500 hover:text-amber-400 font-semibold inline-flex items-center">
              <span>Read More</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-amber-500/30">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80"
                alt="Healthcare Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Healthcare Experience Now
          </h3>
          <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have already revolutionized their 
            healthcare journey with CareSlotter.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}