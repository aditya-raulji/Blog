import React, { useState } from 'react';
import { Shield, User, Lock, ArrowRight, Fingerprint } from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Create Account',
    description: 'Sign up with your email and basic information'
  },
  {
    icon: Shield,
    title: 'Verify Identity',
    description: 'Secure verification process for your safety'
  },
  {
    icon: Lock,
    title: 'Set Preferences',
    description: 'Customize your healthcare preferences'
  }
];

export function GetStarted() {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/40" />
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
            alt="Get Started Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Begin Your Journey
          </h1>
          <p className="text-xl text-gray-300">
            Join thousands of users who trust CareSlotter for their healthcare needs
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <step.icon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="py-24 bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-gray-900/80 rounded-2xl p-8 border border-gray-700">
            <div className="flex mb-8">
              <button
                className={`flex-1 py-2 text-center rounded-lg transition ${
                  activeTab === 'signup'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
              <button
                className={`flex-1 py-2 text-center rounded-lg transition ${
                  activeTab === 'login'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('login')}
              >
                Log In
              </button>
            </div>

            <form className="space-y-6">
              {activeTab === 'signup' && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition flex items-center justify-center space-x-2 group"
              >
                <span>{activeTab === 'signup' ? 'Create Account' : 'Log In'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3 px-6 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition flex items-center justify-center space-x-2"
              >
                <Fingerprint className="w-5 h-5" />
                <span>Biometric Authentication</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}