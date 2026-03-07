'use client'

import { motion } from 'framer-motion'
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

export default function ServicesPage() {
  const features = [
    'Tailor-made customer service solutions',
    'Intelligent automation and personalization',
    'Scalable architecture for growing businesses',
    '24/7 customer support capabilities',
    'Multi-channel integration',
    'Advanced analytics and insights'
  ]

  const benefits = [
    'Reduce response times by up to 80%',
    'Improve customer satisfaction scores',
    'Lower operational costs',
    'Scale effortlessly with demand',
    'Gain actionable customer insights',
    'Enhance agent productivity'
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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Kore led CX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Delivering tailor-made, efficient, and scalable customer service solutions
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Transform Your Customer Experience
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Our Kore led CX solution leverages advanced AI technology to deliver personalized, efficient customer service at scale. Built on the powerful Kore.ai platform, we provide enterprise-grade solutions that adapt to your unique business needs.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Customer Experience"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our solutions deliver real, quantifiable results for your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how Kore led CX can help you achieve your business goals
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
