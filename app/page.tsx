'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-45019-large.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 dark:from-primary-900/30 dark:to-accent-900/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pioneering Horizons: <br />
              <span className="gradient-text">Harnessing the Power of AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Delivering tailor-made, efficient, and scalable customer service solutions powered by cutting-edge artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/solutions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Solutions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Kore led CX</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Delivering tailor-made, efficient, and scalable customer service solutions that enhance customer experience through intelligent automation and personalized interactions.
                </p>
                <Link href="/services" className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Custom Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Implementing AI via Kore.ai's GALE platform for Gen AI agent deployment, creating bespoke solutions tailored to your specific business needs and challenges.
                </p>
                <Link href="/services" className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Industry-Specific Products</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Sector-focused AI technologies addressing unique challenges across various industries with specialized solutions designed for maximum impact and efficiency.
                </p>
                <Link href="/solutions" className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Innovation Showcase
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                  Stay updated with the latest developments in the Gen AI revolution. Explore our newsroom for insights, breakthroughs, and industry-leading innovations.
                </p>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    Visit Newsroom <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Innovation in AI"
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
