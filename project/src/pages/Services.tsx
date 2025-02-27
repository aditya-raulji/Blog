import React from 'react';
import { BookOpen, Search, Users, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const services = [
  {
    title: 'Blog Content Creation',
    description: 'Expert medical content written by healthcare professionals',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80'
  },
  {
    title: 'SEO Optimization',
    description: 'Reach more patients with optimized healthcare content',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80'
  },
  {
    title: 'Patient Education',
    description: 'Comprehensive resources for better patient understanding',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80'
  }
];

export function Services() {
  return (
    <PageTransition>
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Experience The Future Of Healthcare With Our Unique Offerings
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover why healthcare providers and patients choose CareSlotter for their digital health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <button
                    className="text-amber-500 hover:text-amber-400 font-medium inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}