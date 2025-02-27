import React, { useState } from 'react';
import { Shield, User, Lock, ArrowRight, Fingerprint, CheckCircle } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Get Started Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              Begin Your Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Join thousands of users who trust CareSlotter for their healthcare needs
            </motion.p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-16"
            >
              How It Works
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative bg-gray-800/50 backdrop-blur p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 mb-4 relative"
                  >
                    <step.icon className="w-12 h-12 text-purple-500 absolute backface-hidden" />
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center absolute backface-hidden rotate-y-180">
                      {index + 1}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  <div className="absolute top-6 right-6">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Auth Section */}
        <section className="py-24 bg-gray-800/50 backdrop-blur-lg">
          <div className="max-w-md mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/80 rounded-2xl p-8 border border-gray-700"
            >
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

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>{activeTab === 'signup' ? 'Account created successfully!' : 'Logged in successfully!'}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {activeTab === 'signup' && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="John Doe"
                      required
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition flex items-center justify-center space-x-2 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      <span>{activeTab === 'signup' ? 'Create Account' : 'Log In'}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                  </div>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 px-6 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition flex items-center justify-center space-x-2"
                >
                  <Fingerprint className="w-5 h-5" />
                  <span>Biometric Authentication</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}