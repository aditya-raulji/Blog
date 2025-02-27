import React from 'react';
import { CheckCircle, Users, Shield, Laptop } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Happy Customers', value: '700+' },
  { label: 'Team Members', value: '20+' },
  { label: 'Customer Satisfaction', value: '98%' }
];

const features = [
  {
    icon: Laptop,
    title: 'User-Friendly Platform',
    description: 'Intuitive interface for seamless healthcare management'
  },
  {
    icon: Users,
    title: 'Expert Insights Available',
    description: 'Access to leading healthcare professionals'
  },
  {
    icon: CheckCircle,
    title: 'Comprehensive Resources',
    description: 'Complete suite of healthcare management tools'
  },
  {
    icon: Shield,
    title: 'Secure and Reliable',
    description: 'Top-tier security for your medical data'
  }
];

export function Features() {
  return (
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

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-amber-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6"
            >
              <feature.icon className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}