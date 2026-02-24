import { z } from 'zod';

const AREAS = ['Orgánico', 'Ideas de Video', 'Trend', 'Paid Media', 'Email Marketing', 'Otro/General'] as const;
const PLATFORMS = ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Facebook', 'X (Twitter)'] as const;
const VIDEO_FORMATS = ['Reel', 'TikTok', 'Short', 'Carousel', 'Story', 'Otro'] as const;
const CAMPAIGN_OBJECTIVES = ['Awareness', 'Consideration', 'Conversion', 'Retention', 'Otro'] as const;
const EMAIL_OBJECTIVES = ['Newsletter', 'Promoción', 'Transaccional', 'Re-engagement', 'Otro'] as const;
const DELIVERABLE_TYPES = ['Infografía', 'Documento', 'Presentación', 'Video', 'Otro'] as const;

export const globalSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido').min(3, 'Mínimo 3 caracteres'),
  area: z.enum(AREAS, { message: 'Selecciona un área válida' }),
  producto: z.string().min(1, 'El producto es requerido').min(2, 'Mínimo 2 caracteres'),
  descripcion: z.string().min(10, 'Mínimo 10 caracteres').max(500, 'Máximo 500 caracteres'),
  fechaLimite: z.date({ message: 'Selecciona una fecha válida' }),
});

export const organicoSchema = globalSchema.extend({
  area: z.literal('Orgánico'),
  plataformas: z.array(z.enum(PLATFORMS)).min(1, 'Selecciona al menos una plataforma'),
  formato: z.enum(VIDEO_FORMATS, { message: 'Selecciona un formato' }),
  tonoVisual: z.string().min(5, 'Mínimo 5 caracteres').max(500, 'Máximo 500 caracteres'),
});

export const ideasVideoSchema = globalSchema.extend({
  area: z.literal('Ideas de Video'),
  plataformas: z.array(z.enum(PLATFORMS)).min(1, 'Selecciona al menos una plataforma'),
  formato: z.enum(VIDEO_FORMATS, { message: 'Selecciona un formato' }),
  tonoVisual: z.string().min(5, 'Mínimo 5 caracteres').max(500, 'Máximo 500 caracteres'),
});

export const trendSchema = globalSchema.extend({
  area: z.literal('Trend'),
  link: z.string().url('Ingresa una URL válida'),
  conexionMarca: z.string().min(10, 'Mínimo 10 caracteres').max(500, 'Máximo 500 caracteres'),
  plataformas: z.array(z.enum(PLATFORMS)).min(1, 'Selecciona al menos una plataforma'),
  esUrgente: z.boolean().default(false),
  fechaExpiracion: z.date().optional(),
});

export const paidMediaSchema = globalSchema.extend({
  area: z.literal('Paid Media'),
  objetivoCampana: z.enum(CAMPAIGN_OBJECTIVES, { message: 'Selecciona un objetivo' }),
  objetivoComunicacion: z.string().min(10, 'Mínimo 10 caracteres').max(500, 'Máximo 500 caracteres'),
  hayOferta: z.boolean().default(false),
  detalleOferta: z.string().optional(),
});

export const emailMarketingSchema = globalSchema.extend({
  area: z.literal('Email Marketing'),
  asuntoEmail: z.string().min(5, 'Mínimo 5 caracteres').max(100, 'Máximo 100 caracteres'),
  objetivo: z.enum(EMAIL_OBJECTIVES, { message: 'Selecciona un objetivo' }),
});

export const otroSchema = globalSchema.extend({
  area: z.literal('Otro/General'),
  tipoEntregable: z.enum(DELIVERABLE_TYPES, { message: 'Selecciona un tipo' }),
  especificacionesFormato: z.string().min(5, 'Mínimo 5 caracteres').max(300, 'Máximo 300 caracteres'),
  inspiracion: z.string().min(10, 'Mínimo 10 caracteres').max(500, 'Máximo 500 caracteres'),
});

export const formSchema = z.discriminatedUnion('area', [
  organicoSchema,
  ideasVideoSchema,
  trendSchema,
  paidMediaSchema,
  emailMarketingSchema,
  otroSchema,
]);

export type FormData = z.infer<typeof formSchema>;
export type Area = typeof AREAS[number];
