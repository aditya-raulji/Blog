import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "CareSlotter has revolutionized how we manage our healthcare. The booking system is incredibly intuitive.",
    author: "Sarah Johnson",
    role: "Healthcare Administrator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    text: "The online consultation feature saved me countless hours. It's the future of healthcare delivery.",
    author: "Dr. Michael Chen",
    role: "Primary Care Physician",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
  },
  {
    text: "Their healthcare resources are comprehensive and well-organized. A game-changer for patient education.",
    author: "Emily Rodriguez",
    role: "Patient Coordinator",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-amber-500">
            What People Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from healthcare professionals and patients who have transformed their 
            experience with CareSlotter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-transform"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}