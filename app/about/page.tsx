'use client'

import { motion } from 'framer-motion'
import { Newspaper, TrendingUp, Users, Award } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function AboutPage() {
  const newsItems = [
    {
      title: 'Leading the Gen AI Revolution',
      description: 'Discover how Kologic is pioneering next-generation AI solutions that transform industries and redefine customer experiences.',
      date: '2024',
      icon: TrendingUp
    },
    {
      title: 'Innovation at Scale',
      description: 'Our commitment to developing cutting-edge AI technologies that deliver measurable results for businesses worldwide.',
      date: '2024',
      icon: Award
    },
    {
      title: 'Partner Ecosystem',
      description: 'Building strong partnerships with industry leaders to create comprehensive AI solutions that drive business success.',
      date: '2024',
      icon: Users
    }
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Newsroom</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed about the latest developments in artificial intelligence and our journey in transforming the industry
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="About Kologic AI"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Driving the Gen AI Revolution
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  At Kologic AI, we are committed to pushing the boundaries of artificial intelligence technology. Our mission is to develop innovative solutions that empower businesses to achieve unprecedented levels of efficiency and customer satisfaction.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Through strategic partnerships and continuous innovation, we deliver cutting-edge AI solutions that transform how organizations operate and interact with their customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Demo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Experience the power of our AI solutions firsthand. Schedule a personalized demonstration to see how Kologic AI can transform your business operations.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Demo
            </motion.a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
