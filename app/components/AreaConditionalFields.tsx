'use client';

import { useController, useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FormData } from '@/app/lib/formSchema';

const PLATFORMS = ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Facebook', 'X (Twitter)'];
const VIDEO_FORMATS = ['Reel', 'TikTok', 'Short', 'Carousel', 'Story', 'Otro'];
const CAMPAIGN_OBJECTIVES = ['Awareness', 'Consideration', 'Conversion', 'Retention', 'Otro'];
const EMAIL_OBJECTIVES = ['Newsletter', 'Promoción', 'Transaccional', 'Re-engagement', 'Otro'];
const DELIVERABLE_TYPES = ['Infografía', 'Documento', 'Presentación', 'Video', 'Otro'];

interface ConditionalFieldProps {
  area: string | undefined;
  control: any;
  errors: any;
}

function OrganicoFields({ control, errors }: Omit<ConditionalFieldProps, 'area'>) {
  const { field: plataformasField } = useController({ control, name: 'plataformas' });
  const { field: formatoField } = useController({ control, name: 'formato' });
  const { field: tonoField } = useController({ control, name: 'tonoVisual' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Plataformas */}
      <div>
        <label className="block text-sm font-medium mb-3 text-purple-200">
          Plataformas
        </label>
        <div className="space-y-2">
          {PLATFORMS.map((platform) => (
            <label key={platform} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                value={platform}
                checked={plataformasField.value?.includes(platform) || false}
                onChange={(e) => {
                  const current = plataformasField.value || [];
                  if (e.target.checked) {
                    plataformasField.onChange([...current, platform]);
                  } else {
                    plataformasField.onChange(current.filter((p) => p !== platform));
                  }
                }}
                className="w-4 h-4 rounded accent-purple-500"
              />
              <span className="text-sm text-purple-200">{platform}</span>
            </label>
          ))}
        </div>
        {errors.plataformas && (
          <p className="text-red-400 text-sm mt-2">{errors.plataformas.message}</p>
        )}
      </div>

      {/* Formato */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Formato
        </label>
        <select
          {...formatoField}
          className="w-full px-4 py-3 rounded-lg glass-select text-white"
        >
          <option value="">Selecciona un formato</option>
          {VIDEO_FORMATS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        {errors.formato && (
          <p className="text-red-400 text-sm mt-1">{errors.formato.message}</p>
        )}
      </div>

      {/* Tono Visual */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Tono Visual / Estilo
        </label>
        <textarea
          {...tonoField}
          placeholder="Describe el tono visual y estilo deseado"
          rows={3}
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400 resize-none"
        />
        {errors.tonoVisual && (
          <p className="text-red-400 text-sm mt-1">{errors.tonoVisual.message}</p>
        )}
      </div>
    </motion.div>
  );
}

function TrendFields({ control, errors }: Omit<ConditionalFieldProps, 'area'>) {
  const { field: linkField } = useController({ control, name: 'link' });
  const { field: conexionField } = useController({ control, name: 'conexionMarca' });
  const { field: plataformasField } = useController({ control, name: 'plataformas' });
  const { field: urgentField } = useController({ control, name: 'esUrgente' });
  const { field: fechaExpField } = useController({ control, name: 'fechaExpiracion' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Link */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Link / Descripción del Trend
        </label>
        <input
          {...linkField}
          type="url"
          placeholder="https://ejemplo.com"
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400"
        />
        {errors.link && (
          <p className="text-red-400 text-sm mt-1">{errors.link.message}</p>
        )}
      </div>

      {/* Conexión con Marca */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Conexión con Marca
        </label>
        <textarea
          {...conexionField}
          placeholder="¿Cómo se conecta este trend con nuestra marca?"
          rows={3}
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400 resize-none"
        />
        {errors.conexionMarca && (
          <p className="text-red-400 text-sm mt-1">{errors.conexionMarca.message}</p>
        )}
      </div>

      {/* Plataformas */}
      <div>
        <label className="block text-sm font-medium mb-3 text-purple-200">
          Plataformas
        </label>
        <div className="space-y-2">
          {PLATFORMS.map((platform) => (
            <label key={platform} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                value={platform}
                checked={plataformasField.value?.includes(platform) || false}
                onChange={(e) => {
                  const current = plataformasField.value || [];
                  if (e.target.checked) {
                    plataformasField.onChange([...current, platform]);
                  } else {
                    plataformasField.onChange(current.filter((p) => p !== platform));
                  }
                }}
                className="w-4 h-4 rounded accent-purple-500"
              />
              <span className="text-sm text-purple-200">{platform}</span>
            </label>
          ))}
        </div>
        {errors.plataformas && (
          <p className="text-red-400 text-sm mt-2">{errors.plataformas.message}</p>
        )}
      </div>

      {/* ¿Es Urgente? */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          {...urgentField}
          checked={urgentField.value}
          className="w-4 h-4 rounded accent-purple-500"
        />
        <label className="text-sm text-purple-200 cursor-pointer">
          ¿Es urgente?
        </label>
      </div>

      {/* Fecha de Expiración */}
      {urgentField.value && (
        <div>
          <label className="block text-sm font-medium mb-2 text-purple-200">
            Fecha de Expiración del Trend
          </label>
          <input
            type="date"
            {...fechaExpField}
            className="w-full px-4 py-3 rounded-lg glass-input text-white"
          />
        </div>
      )}
    </motion.div>
  );
}

function PaidMediaFields({ control, errors }: Omit<ConditionalFieldProps, 'area'>) {
  const { field: objetivoField } = useController({ control, name: 'objetivoCampana' });
  const { field: comunicacionField } = useController({ control, name: 'objetivoComunicacion' });
  const { field: ofertaField } = useController({ control, name: 'hayOferta' });
  const { field: detalleField } = useController({ control, name: 'detalleOferta' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Objetivo Campaña */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Objetivo de Campaña
        </label>
        <select
          {...objetivoField}
          className="w-full px-4 py-3 rounded-lg glass-select text-white"
        >
          <option value="">Selecciona un objetivo</option>
          {CAMPAIGN_OBJECTIVES.map((obj) => (
            <option key={obj} value={obj}>
              {obj}
            </option>
          ))}
        </select>
        {errors.objetivoCampana && (
          <p className="text-red-400 text-sm mt-1">{errors.objetivoCampana.message}</p>
        )}
      </div>

      {/* Objetivo Comunicación */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Objetivo de Comunicación
        </label>
        <textarea
          {...comunicacionField}
          placeholder="Describe el objetivo comunicacional"
          rows={3}
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400 resize-none"
        />
        {errors.objetivoComunicacion && (
          <p className="text-red-400 text-sm mt-1">{errors.objetivoComunicacion.message}</p>
        )}
      </div>

      {/* ¿Hay Oferta? */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          {...ofertaField}
          checked={ofertaField.value}
          className="w-4 h-4 rounded accent-purple-500"
        />
        <label className="text-sm text-purple-200 cursor-pointer">
          ¿Hay oferta asociada?
        </label>
      </div>

      {/* Detalle de Oferta */}
      {ofertaField.value && (
        <div>
          <label className="block text-sm font-medium mb-2 text-purple-200">
            Detalle de la Oferta
          </label>
          <textarea
            {...detalleField}
            placeholder="Describe los detalles de la oferta"
            rows={3}
            className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400 resize-none"
          />
        </div>
      )}
    </motion.div>
  );
}

function EmailMarketingFields({ control, errors }: Omit<ConditionalFieldProps, 'area'>) {
  const { field: asuntoField } = useController({ control, name: 'asuntoEmail' });
  const { field: objetivoField } = useController({ control, name: 'objetivo' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Asunto Email */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Asunto del Email
        </label>
        <input
          {...asuntoField}
          type="text"
          placeholder="Escribe el asunto del email"
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400"
        />
        {errors.asuntoEmail && (
          <p className="text-red-400 text-sm mt-1">{errors.asuntoEmail.message}</p>
        )}
      </div>

      {/* Objetivo */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Objetivo
        </label>
        <select
          {...objetivoField}
          className="w-full px-4 py-3 rounded-lg glass-select text-white"
        >
          <option value="">Selecciona un objetivo</option>
          {EMAIL_OBJECTIVES.map((obj) => (
            <option key={obj} value={obj}>
              {obj}
            </option>
          ))}
        </select>
        {errors.objetivo && (
          <p className="text-red-400 text-sm mt-1">{errors.objetivo.message}</p>
        )}
      </div>
    </motion.div>
  );
}

function OtroFields({ control, errors }: Omit<ConditionalFieldProps, 'area'>) {
  const { field: tipoField } = useController({ control, name: 'tipoEntregable' });
  const { field: especField } = useController({ control, name: 'especificacionesFormato' });
  const { field: inspField } = useController({ control, name: 'inspiracion' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Tipo de Entregable */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Tipo de Entregable
        </label>
        <select
          {...tipoField}
          className="w-full px-4 py-3 rounded-lg glass-select text-white"
        >
          <option value="">Selecciona un tipo</option>
          {DELIVERABLE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.tipoEntregable && (
          <p className="text-red-400 text-sm mt-1">{errors.tipoEntregable.message}</p>
        )}
      </div>

      {/* Especificaciones de Formato */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Especificaciones de Formato
        </label>
        <input
          {...especField}
          type="text"
          placeholder="Ej: 1920x1080, PDF, etc."
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400"
        />
        {errors.especificacionesFormato && (
          <p className="text-red-400 text-sm mt-1">{errors.especificacionesFormato.message}</p>
        )}
      </div>

      {/* Inspiración / Referencia */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Inspiración / Referencia
        </label>
        <textarea
          {...inspField}
          placeholder="Comparte referencias o inspiraciones"
          rows={3}
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400 resize-none"
        />
        {errors.inspiracion && (
          <p className="text-red-400 text-sm mt-1">{errors.inspiracion.message}</p>
        )}
      </div>
    </motion.div>
  );
}

export function AreaConditionalFields() {
  const { watch, control, formState: { errors } } = useFormContext<FormData>();
  const area = watch('area');

  return (
    <AnimatePresence mode="wait">
      {area === 'Orgánico' && (
        <OrganicoFields key="organico" control={control} errors={errors} />
      )}
      {area === 'Ideas de Video' && (
        <OrganicoFields key="ideas-video" control={control} errors={errors} />
      )}
      {area === 'Trend' && (
        <TrendFields key="trend" control={control} errors={errors} />
      )}
      {area === 'Paid Media' && (
        <PaidMediaFields key="paid-media" control={control} errors={errors} />
      )}
      {area === 'Email Marketing' && (
        <EmailMarketingFields key="email" control={control} errors={errors} />
      )}
      {area === 'Otro/General' && (
        <OtroFields key="otro" control={control} errors={errors} />
      )}
    </AnimatePresence>
  );
}
