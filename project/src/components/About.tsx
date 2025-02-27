import React from 'react';
import { Shield, Clock, Brain, Lock, ChevronRight } from 'lucide-react';

const timeline = [
  {
    year: '2023',
    title: 'CareSlotter Launch',
    description: 'Revolutionizing healthcare with AI-driven solutions'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Reaching millions of patients worldwide'
  },
  {
    year: '2025',
    title: 'AI Integration',
    description: 'Advanced AI-powered healthcare matching'
  }
];

const features = [
  {
    icon: Brain,
    title: 'AI-Based Matching',
    description: 'Smart algorithm matches you with the perfect healthcare provider'
  },
  {
    icon: Clock,
    title: 'Real-Time Availability',
    description: 'Instant access to doctor schedules and appointments'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Military-grade encryption for your medical data'
  },
  {
    icon: Lock,
    title: 'Private & Confidential',
    description: 'Your health information stays completely private'
  }
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/40" />
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Futuristic Medical"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Revolutionizing Healthcare Appointments with AI
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We simplify doctor appointments with AI-driven solutions, real-time availability, 
            and seamless user experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/80 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-center group"
              >
                <div className="w-24 text-2xl font-bold text-purple-500">
                  {item.year}
                </div>
                <div className="flex-1 relative ml-8 bg-gray-800/50 backdrop-blur p-6 rounded-2xl border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute left-0 top-1/2 -translate-x-[17px] -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/80 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${1570295999919 + index}-56ceb5ecca61?auto=format&fit=crop&q=80`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-purple-500"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-400">Patient</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  "CareSlotter has transformed how I manage my healthcare appointments. 
                  The AI-driven recommendations are spot-on!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}