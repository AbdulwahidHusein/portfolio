import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleChat } from '../services/groqService';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [hasToolCall, setHasToolCall] = useState(false);
    const messagesEndRef = useRef(null);
    const modalRef = useRef(null);
  
    // Auto scroll to bottom when new messages arrive
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
  
    // Handle sending messages
    const handleSend = async (message) => {
      setIsProcessing(true);
      setMessages(prev => [...prev, { type: 'user', content: message }]);
      setIsTyping(true);
  
      try {
        const chatHistory = messages.map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }));
  
        const response = await handleChat(message, chatHistory);
        setMessages(prev => [...prev, { type: 'bot', content: response.content }]);
        
        if (response.tool_called) {
          setHasToolCall(true);
        }
      } catch (error) {
        console.error('Chat error:', error);
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: "I'm having trouble processing your message. Could you please try again?" 
        }]);
      } finally {
        setIsTyping(false);
        setIsProcessing(false);
      }
    };
  
    // Close chat when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    // Handle escape key
    useEffect(() => {
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, []);
  
    return (
      <motion.div 
        className="fixed z-[60]"
        style={{
          bottom: 'calc(4rem + env(safe-area-inset-bottom))',
          right: '1.25rem',
          '@media (minWidth: 640px)': {
            bottom: '5rem',
            right: '2rem'
          }
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Chat Button */}
        {!isOpen && (
          <motion.button 
            onClick={() => {
              setIsOpen(true);
              setHasToolCall(false);
              if (messages.length === 0) {
                setMessages([{ 
                  type: 'bot', 
                  content: "Hi there! 👋 " 
                }]);
              }
            }}
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-600 p-4 rounded-full shadow-lg">
              <div className="absolute inset-0 rounded-full bg-purple-400/40 animate-ping" />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white relative z-10" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                />
              </svg>
            </div>
          </motion.button>
        )}
  
        {/* Chat Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              ref={modalRef}
              className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-0 w-full sm:w-[400px] h-[calc(100vh-5rem)] sm:h-auto max-h-[calc(100vh-5rem)] sm:max-h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 sm:rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20 flex flex-col z-[70]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 p-4 flex-shrink-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent animate-pulse"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      <div className="relative bg-white rounded-full p-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-6 w-6 text-purple-600" 
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" 
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Wahida</h3>
                      <p className="text-xs text-purple-200">AI Assistant</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-purple-200 transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer z-20"
                    aria-label="Close chat"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 pointer-events-auto"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
  
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.type === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mr-2">
                          <span className="text-white text-xs">W</span>
                        </div>
                      )}
                      <div 
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          msg.type === 'user' 
                            ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white' 
                            : 'bg-gradient-to-br from-gray-700 to-gray-600 text-gray-100'
                        } shadow-lg backdrop-blur-sm`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                      {msg.type === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center ml-2">
                          <span className="text-white text-xs">U</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xs">W</span>
                      </div>
                      <div className="bg-gradient-to-br from-gray-700 to-gray-600 p-3 rounded-2xl">
                        <div className="flex space-x-2">
                          <motion.div 
                            className="w-2 h-2 bg-purple-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-purple-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, delay: 0.2, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-purple-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, delay: 0.4, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
  
              {/* Input Area - Only show if no tool call has been made */}
              {!isProcessing && !hasToolCall && (
                <div className="flex-shrink-0 p-4 bg-gray-800/50 border-t border-purple-500/20 backdrop-blur-lg">
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const input = e.target.elements.message;
                      if (input.value.trim()) {
                        handleSend(input.value.trim());
                        input.value = '';
                      }
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      name="message"
                      className="flex-1 p-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 border border-purple-500/20 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="Type your message..."
                      autoComplete="off"
                    />
                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 relative z-10" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };
  
  export default ChatBot;