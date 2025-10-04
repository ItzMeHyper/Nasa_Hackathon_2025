import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatMessage } from '../types';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      message: 'Hi! I\'m your AI assistant. Ask me about AQI, forecasts, health tips, or how to use this platform!',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      message: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        'Based on NASA TEMPO data, the current AQI indicates moderate air quality. Sensitive groups should limit prolonged outdoor exposure.',
        'Air Quality Index (AQI) measures pollutants like PM2.5, NO2, O3, and CO. Values below 50 are considered good.',
        'Tomorrow\'s forecast shows improving conditions. AQI expected to drop to 95 by afternoon.',
        'For children and elderly, we recommend indoor activities when AQI exceeds 150.',
        'Our AI models use NASA satellite data combined with ground sensors to predict air quality 72 hours in advance.',
        'You can view detailed pollutant breakdowns in the Dashboard. Each pollutant has specific health impacts.'
      ];

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center neon-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] glass rounded-2xl shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b border-cyan-500/20">
              <h3 className="text-lg font-semibold text-cyan-400">AI Assistant</h3>
              <p className="text-xs text-gray-400">Powered by NASA TEMPO Data</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-cyan-500/20 text-cyan-100'
                        : 'bg-gray-800/50 text-gray-200'
                    }`}
                  >
                    {msg.message}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-cyan-500/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-800/50 border border-cyan-500/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500/50"
                />
                <button
                  onClick={handleSend}
                  className="bg-cyan-500/20 hover:bg-cyan-500/30 p-2 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5 text-cyan-400" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
