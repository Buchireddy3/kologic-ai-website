'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you learn about Kologic AI. Ask me anything about our services, solutions, or company!',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const searchContent = async (query: string): Promise<string> => {
    try {
      const lowerQuery = query.toLowerCase()

      const { data, error } = await supabase
        .from('website_content')
        .select('*')
        .or(`content.ilike.%${lowerQuery}%,keywords.cs.{${lowerQuery}}`)
        .limit(5)

      if (error) throw error

      if (!data || data.length === 0) {
        const { data: allData } = await supabase
          .from('website_content')
          .select('*')
          .limit(3)

        if (allData && allData.length > 0) {
          return `I found some general information about Kologic AI:\n\n${allData.map(item => item.content).join('\n\n')}`
        }

        return 'I apologize, but I couldn\'t find specific information about that. However, Kologic AI specializes in AI solutions including Kore led CX, AI Custom Solutions, and Industry-Specific Products. You can contact us at hello@kologic.ai or visit our contact page for more information.'
      }

      const relevantContent = data.map(item => item.content).join('\n\n')
      return relevantContent
    } catch (error) {
      console.error('Search error:', error)
      return 'Kologic AI provides comprehensive AI solutions including Kore led CX for customer service, AI Custom Solutions using the GALE platform, and Industry-Specific Products. Contact us at hello@kologic.ai for more details.'
    }
  }

  const generateResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! Welcome to Kologic AI. How can I assist you today? You can ask me about our services, solutions, industries we serve, or how to contact us.'
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('address')) {
      return 'You can reach Kologic AI at:\n\nEmail: hello@kologic.ai\nAddress: Sri Vivekananda Nagar, Madhapur, Hyderabad, Telangana\n\nFeel free to contact us for demos, consultations, or any questions!'
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return 'Kologic AI offers three main services:\n\n1. Kore led CX - Tailor-made, efficient, and scalable customer service solutions\n2. AI Custom Solutions - Implementing AI via Kore.ai\'s GALE platform for Gen AI agent deployment\n3. Industry-Specific Products - Sector-focused AI technologies for various industries\n\nWould you like to know more about any of these?'
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return 'For pricing information and custom quotes tailored to your specific needs, please contact us at hello@kologic.ai or schedule a demo through our contact page. Our solutions are customized based on your requirements.'
    }

    if (lowerMessage.includes('demo')) {
      return 'We\'d love to show you our AI solutions in action! You can request a personalized demo by visiting our Contact page or emailing us at hello@kologic.ai. Our team will schedule a demonstration that fits your needs.'
    }

    if (lowerMessage.includes('industry') || lowerMessage.includes('industries')) {
      return 'We serve multiple industries including:\n\n• Healthcare - AI-powered patient care and administrative automation\n• Finance - Intelligent financial analysis and risk management\n• Retail - Personalized customer experiences and inventory optimization\n• Manufacturing - Predictive maintenance and process optimization\n\nEach solution is tailored to address the unique challenges of your industry.'
    }

    const searchResults = await searchContent(userMessage)
    return searchResults
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(async () => {
      const response = await generateResponse(input)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Kologic AI Assistant</h3>
                  <p className="text-xs opacity-90">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
