'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Brain, Layers, Code, Workflow } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Brain,
      title: 'AI Custom Solutions',
      description: 'Implementing AI via Kore.ai\'s GALE platform for Gen AI agent deployment, creating bespoke solutions tailored to your specific business needs and challenges.',
      features: [
        'Custom AI model development',
        'GALE platform integration',
        'Gen AI agent deployment',
        'Tailored business logic'
      ]
    },
    {
      icon: Target,
      title: 'Industry-Specific Products',
      description: 'Sector-focused AI technologies addressing unique challenges across various industries with specialized solutions designed for maximum impact and efficiency.',
      features: [
        'Healthcare AI solutions',
        'Financial services automation',
        'Retail customer engagement',
        'Manufacturing optimization'
      ]
    }
  ]

  const industries = [
    {
      icon: Layers,
      name: 'Healthcare',
      description: 'AI-powered patient care and administrative automation'
    },
    {
      icon: Code,
      name: 'Finance',
      description: 'Intelligent financial analysis and risk management'
    },
    {
      icon: Workflow,
      name: 'Retail',
      description: 'Personalized customer experiences and inventory optimization'
    },
    {
      icon: Zap,
      name: 'Manufacturing',
      description: 'Predictive maintenance and process optimization'
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
              <span className="gradient-text">AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative AI technologies designed to solve your most complex business challenges
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                  >
                    <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                      <solution.icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                      {solution.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {solution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                  >
                    <img
                      src={
                        index === 0
                          ? 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200'
                          : 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1200'
                      }
                      alt={solution.title}
                      className="rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Specialized AI solutions tailored to the unique needs of different sectors
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {industry.description}
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
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's create a custom AI solution that addresses your specific challenges
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
