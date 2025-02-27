import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    title: 'The Future of AI in Healthcare',
    excerpt: 'Discover how artificial intelligence is revolutionizing the healthcare industry...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    category: 'Technology',
    readTime: '5 min read'
  },
  {
    title: 'Telemedicine: A New Era of Care',
    excerpt: 'Learn about the benefits and challenges of remote healthcare delivery...',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    category: 'Healthcare',
    readTime: '4 min read'
  },
  {
    title: 'Patient Data Security',
    excerpt: 'Understanding the importance of protecting sensitive medical information...',
    image: 'https://images.unsplash.com/photo-1576091160291-31957ab2724f?auto=format&fit=crop&q=80',
    category: 'Security',
    readTime: '6 min read'
  },
  {
    title: 'The Role of Machine Learning in Diagnosis',
    excerpt: 'How advanced algorithms are helping doctors make more accurate diagnoses...',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
    category: 'Technology',
    readTime: '7 min read'
  },
  {
    title: 'Healthcare Accessibility in Rural Areas',
    excerpt: 'Bridging the gap between urban and rural healthcare services...',
    image: 'https://images.unsplash.com/photo-1579165466769-3a0d3f8a3291?auto=format&fit=crop&q=80',
    category: 'Accessibility',
    readTime: '5 min read'
  },
  {
    title: 'Mental Health in the Digital Age',
    excerpt: 'How technology is transforming mental healthcare delivery and access...',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    category: 'Mental Health',
    readTime: '6 min read'
  }
];

const stats = [
  { value: 1000, label: 'Articles Published' },
  { value: 50000, label: 'Monthly Readers' },
  { value: 95, label: 'Satisfaction Rate', suffix: '%' }
];

export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const card3DVariants = {
    rest: { 
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      z: 0
    },
    hover: { 
      rotateY: 5,
      rotateX: 5,
      scale: 1.05,
      z: 50,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 z-0" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/40" />
            <img
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80"
              alt="Blog Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
            >
              Healthcare Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Explore the latest in healthcare technology and innovation
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition"
              >
                Explore Articles
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800/50 backdrop-blur-lg" ref={ref}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="text-center bg-gray-900/50 backdrop-blur p-8 rounded-2xl border border-gray-800"
                >
                  <div className="text-5xl font-bold text-purple-500 mb-2">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                      start={inView ? 0 : undefined}
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

        {/* Blog Posts */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Latest Articles
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={card3DVariants}
                  className="group relative bg-gray-800/50 rounded-2xl overflow-hidden transform perspective-1000"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6" style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <motion.span 
                        className="text-sm text-purple-400 px-3 py-1 bg-purple-500/10 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        {post.category}
                      </motion.span>
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                  
                  {/* 3D lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}></div>
                </motion.article>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition"
              >
                View All Articles
              </motion.button>
            </motion.div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-8"
            >
              Stay updated with the latest healthcare insights and technology advancements
            </motion.p>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}