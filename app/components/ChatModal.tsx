'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm.jsx';
import CustomCursor from './CustomCursor';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  options?: Option[];
  selected?: string;
}

interface Option {
  text: string;
  nextId: number | string;
}

const chatFlow = {
  1: {
    text: "Hello! I'm here to answer your questions. What would you like to know?",
    options: [
      { text: "Tell me about your services", nextId: 2 },
      { text: "How can we collaborate?", nextId: 3 },
      { text: "What is your work process?", nextId: 4 },
      { text: "Contact me", nextId: 'contact' }
    ]
  },
  2: {
    text: "I offer web development services, including:",
    options: [
      { text: "Frontend Development", nextId: 5 },
      { text: "Backend Development", nextId: 6 },
      { text: "UI/UX Design", nextId: 7 }
    ]
  },
  3: {
    text: "We can collaborate in several ways:",
    options: [
      { text: "Complete project", nextId: 8 },
      { text: "Consultation", nextId: 9 },
      { text: "Maintenance", nextId: 10 }
    ]
  },
  4: {
    text: "My work process consists of several steps:",
    options: [
      { text: "Design phase", nextId: 11 },
      { text: "Development phase", nextId: 12 },
      { text: "Deployment phase", nextId: 13 }
    ]
  },
};

const ChatModal = ({ isOpen, onClose, setIsChatOpen }: { isOpen: boolean; onClose: () => void; setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { id: 1, text: chatFlow[1].text, sender: 'bot', options: chatFlow[1].options }
      ]);
      setShowContactForm(false);
    }
  }, [isOpen]);

  const handleOptionClick = (nextId: number | string, selectedText: string) => {
    if (nextId === 'contact') {
      setShowContactForm(true);
      return;
    }

    const selectedOption = chatFlow[nextId as number];
    if (!selectedOption) return;

    setMessages(prev => prev.map(msg => 
      msg.id === prev[prev.length - 1].id 
        ? { ...msg, options: undefined, selected: selectedText }
        : msg
    ));

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: selectedOption.text,
        sender: 'bot',
        options: selectedOption.options
      }]);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <CustomCursor isModalOpen={true} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1a1a1a] rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {showContactForm ? 'Contact' : 'Chat Assistant'}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto mb-4">
              <AnimatePresence mode="wait">
                {showContactForm ? (
                  <ContactForm onBack={() => setShowContactForm(false)} />
                ) : (
                  <>
                    {messages.map((message) => (
                      <motion.div 
                        key={message.id} 
                        className="space-y-2 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-[#2a2a2a] p-4 rounded-lg">
                          {message.text}
                          {message.selected && (
                            <div className="mt-2 text-sm text-gray-400">
                              Selected option: {message.selected}
                            </div>
                          )}
                        </div>
                        <AnimatePresence>
                          {message.options && (
                            <motion.div 
                              className="flex flex-wrap gap-2"
                              initial={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              {message.options.map((option, index) => (
                                <motion.button
                                  key={index}
                                  onClick={() => handleOptionClick(option.nextId, option.text)}
                                  className="bg-[#FFFEF2] text-black px-4 py-2 rounded-full text-sm hover:opacity-80 transition-opacity"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {option.text}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatModal; 