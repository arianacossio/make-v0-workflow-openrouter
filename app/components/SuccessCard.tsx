'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface SuccessCardProps {
  onReset: () => void;
}

export function SuccessCard({ onReset }: SuccessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass-card p-8 rounded-2xl max-w-md w-full border border-purple-500/50 shadow-2xl"
      >
        {/* Animated Checkmark */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 100 }}
        >
          <div className="relative w-20 h-20">
            <CheckCircle className="w-full h-full text-green-400" strokeWidth={1.5} />
            <motion.div
              className="absolute inset-0 border-2 border-green-400 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Success Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl font-bold text-center text-green-400 mb-3"
        >
          ¡Éxito!
        </motion.h2>

        {/* Success Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-purple-200 mb-6 leading-relaxed"
        >
          ¡Solicitud enviada con éxito! Tu pedido está en la fila de procesamiento. Nos pondremos en contacto pronto.
        </motion.p>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-purple-900/30 rounded-lg p-4 mb-6 border border-purple-500/30"
        >
          <p className="text-sm text-purple-300">
            <span className="font-semibold">Número de referencia:</span> #{Math.random().toString(36).substring(7).toUpperCase()}
          </p>
        </motion.div>

        {/* Reset Button */}
        <motion.button
          onClick={onReset}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass-button text-white font-semibold hover:shadow-lg transition-all"
        >
          Enviar Nueva Solicitud
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
