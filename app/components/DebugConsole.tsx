'use client';

import { useState } from 'react';
import { Settings, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormData } from '@/app/lib/formSchema';

interface DebugConsoleProps {
  formData: Partial<FormData>;
  onSendWebhook: (data: Partial<FormData>) => void;
  isLoading: boolean;
}

export function DebugConsole({ formData, onSendWebhook, isLoading }: DebugConsoleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg flex items-center justify-center z-40 hover:shadow-xl transition-shadow"
        title="Abrir consola de debug"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Debug Console Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 max-h-96 rounded-lg glass-card border border-purple-500/50 shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-purple-500/30">
              <h3 className="text-sm font-bold text-purple-200">Estado del Formulario</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-purple-300 hover:text-purple-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* JSON Content */}
            <div className="flex-1 overflow-auto p-4 bg-black/20">
              <pre className="text-xs text-green-400 font-mono overflow-x-auto">
                {JSON.stringify(formData, (key, value) => {
                  // Format date objects for JSON display
                  if (value instanceof Date) {
                    return value.toISOString().split('T')[0];
                  }
                  return value;
                }, 2)}
              </pre>
            </div>

            {/* Footer - Send Button */}
            <div className="p-4 border-t border-purple-500/30">
              <button
                onClick={() => onSendWebhook(formData)}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass-button text-white text-sm font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
                {isLoading ? 'Enviando...' : 'Reenviar a Webhook'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
