'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: new Date().toISOString()
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        
        // Log pour debug
        console.log('Form submitted successfully:', data);
        
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          message: '',
          date: new Date().toISOString()
        });

        // Attendre un peu avant de fermer
        setTimeout(() => {
          onBack();
        }, 1500);
      } else {
        throw new Error(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
      console.error('Form submission error:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onBack}
        className="mb-4 text-gray-400 hover:text-white flex items-center gap-2"
      >
        ← Retour
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            required
            disabled={status.submitting}
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 focus:border-[#FFFEF2] outline-none disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            disabled={status.submitting}
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 focus:border-[#FFFEF2] outline-none disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            required
            disabled={status.submitting}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={5}
            className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 focus:border-[#FFFEF2] outline-none resize-none disabled:opacity-50"
          />
        </div>

        {status.error && (
          <div className="text-red-500 text-sm">
            {status.error}
          </div>
        )}

        {status.submitted && (
          <div className="text-green-500 text-sm">
            Message Sent Successfully
          </div>
        )}

        <motion.button
          type="submit"
          disabled={status.submitting}
          whileHover={{ scale: status.submitting ? 1 : 1.02 }}
          whileTap={{ scale: status.submitting ? 1 : 0.98 }}
          className={`w-full py-2 bg-[#FFFEF2] text-black rounded-full transition-opacity ${status.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
        >
          {status.submitting ? 'Envoi en cours...' : 'Send'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm; 