'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import { formSchema, FormData } from '@/app/lib/formSchema';
import { GlobalFields } from '@/app/components/GlobalFields';
import { AreaConditionalFields } from '@/app/components/AreaConditionalFields';
import { DebugConsole } from '@/app/components/DebugConsole';
import { SuccessCard } from '@/app/components/SuccessCard';

const WEBHOOK_URL = '/api/webhook';

export function LiquidGlassForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [webhookError, setWebhookError] = useState<string | null>(null);

  const form = useForm<Partial<FormData>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      nombre: '',
      area: undefined,
      producto: '',
      descripcion: '',
      fechaLimite: undefined,
    },
  });

  const { handleSubmit, watch, reset, formState: { errors, isValid, isDirty } } = form;
  const formData = watch();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setWebhookError(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }

      setShowSuccess(true);
      reset();

      // Optionally hide success after some time
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al enviar';
      setWebhookError(message);
      console.error('[v0] Webhook error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDebugWebhook = async (data: Partial<FormData>) => {
    setIsSubmitting(true);
    setWebhookError(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }

      setShowSuccess(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al enviar';
      setWebhookError(message);
      console.error('[v0] Webhook error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-purple-200 to-pink-300 bg-clip-text text-transparent"
          >
            Solicitud de Contenido
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-purple-300 text-lg"
          >
            Completa el formulario para solicitar contenido marketing
          </motion.p>
        </div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card rounded-2xl p-8 sm:p-12 shadow-2xl border border-purple-500/50"
        >
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Global Fields Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold text-purple-100 mb-6">
                  Información General
                </h2>
                <GlobalFields />
              </motion.div>

              {/* Conditional Fields Section */}
              {formData.area && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-purple-100 mb-6">
                    Detalles de {formData.area}
                  </h2>
                  <AreaConditionalFields />
                </motion.div>
              )}

              {/* Error Message */}
              {webhookError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-300 text-sm"
                >
                  Error: {webhookError}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-4 pt-4"
              >
                <button
                  type="submit"
                  disabled={isSubmitting || !isDirty}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass-button text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Solicitud'
                  )}
                </button>
              </motion.div>

              {/* Validation Info */}
              {isDirty && !isValid && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-yellow-300 text-center"
                >
                  Por favor completa todos los campos requeridos
                </motion.p>
              )}
            </form>
          </FormProvider>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-purple-400 text-sm mt-8"
        >
          Tu solicitud será procesada y revisada por nuestro equipo.
        </motion.p>
      </motion.div>

      {/* Debug Console */}
      <DebugConsole
        formData={formData}
        onSendWebhook={handleDebugWebhook}
        isLoading={isSubmitting}
      />

      {/* Success Modal */}
      {showSuccess && <SuccessCard onReset={() => setShowSuccess(false)} />}
    </div>
  );
}
