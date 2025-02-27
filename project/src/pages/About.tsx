import React, { useRef } from 'react';
import { Shield, Clock, Brain, Lock, ChevronRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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

const stats = [
  { value: 500, label: 'Healthcare Providers' },
  { value: 25000, label: 'Active Users' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' }
];

export function About() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

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
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/40" />
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Futuristic Medical"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              Revolutionizing Healthcare Appointments with AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8"
            >
              We simplify doctor appointments with AI-driven solutions, real-time availability, 
              and seamless user experience.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition"
            >
              Learn More
            </motion.button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800/50 backdrop-blur-lg" ref={statsRef}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="text-center bg-gray-900/50 backdrop-blur p-8 rounded-2xl border border-gray-800"
                >
                  <div className="text-5xl font-bold text-blue-500 mb-2">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                      start={statsInView ? 0 : undefined}
                      enableScrollSpy
                      scrollSpyDelay={500}
                    />
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-800/50 backdrop-blur-lg" ref={targetRef}>
          <motion.div 
            style={{ opacity, scale }}
            className="max-w-7xl mx-auto px-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Why Choose Us?
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="group relative bg-gray-900/80 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 mb-4"
                  >
                    <feature.icon className="w-12 h-12 text-purple-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Our Journey
            </motion.h2>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="flex items-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 text-2xl font-bold text-purple-500"
                  >
                    {item.year}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="flex-1 relative ml-8 bg-gray-800/50 backdrop-blur p-6 rounded-2xl border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute left-0 top-1/2 -translate-x-[17px] -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-800/50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              What Our Users Say
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 2,
                    z: 50
                  }}
                  className="group relative bg-gray-900/80 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform perspective-1000"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center mb-4" style={{ transform: "translateZ(20px)" }}>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={`https://images.unsplash.com/photo-${1570295999919 + index}-56ceb5ecca61?auto=format&fit=crop&q=80`}
                      alt="User"
                      className="w-12 h-12 rounded-full border-2 border-purple-500"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">John Doe</div>
                      <div className="text-sm text-gray-400">Patient</div>
                    </div>
                  </div>
                  <div style={{ transform: "translateZ(30px)" }}>
                    <p className="text-gray-300">
                      "CareSlotter has transformed how I manage my healthcare appointments. 
                      The AI-driven recommendations are spot-on!"
                    </p>
                  </div>
                  
                  {/* 3D stars */}
                  <div className="flex mt-4" style={{ transform: "translateZ(40px)" }}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotateY: 0 }}
                        whileHover={{ rotateY: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-yellow-500 mr-1"
                      >
                        ★
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30" />
          <div className="max-w-4xl mx-auto px-4 relative text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Ready to Transform Your Healthcare Experience?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join thousands of satisfied users who have already revolutionized their healthcare journey with CareSlotter.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition"
            >
              Get Started Today
            </motion.button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}