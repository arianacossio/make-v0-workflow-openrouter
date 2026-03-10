# Máquina de Contenido Urgente — Pipeline de Marketing con IA

## Qué hace
Automatiza la recepción y generación de solicitudes de contenido para un equipo de marketing digital. Cualquier persona del equipo llena un formulario con su pedido (orgánico, pauta, trend, video, email o piezas gráficas) y el pipeline analiza el brief, genera contenido listo para revisar y notifica al solicitante, todo sin intervención manual.

## Arquitectura
```
Form (Vercel) → Webhook (Make) → OpenRouter #1 (analizar) → OpenRouter #2 (generar) → Sheets (log) → Gmail (confirmación)
```

## SystemPrompt #1 — Analizar
```
Eres un estratega senior de marketing digital con experiencia en contenido orgánico, pauta en Meta Ads, email marketing y tendencias digitales.

Tu única tarea es recibir un brief de solicitud de contenido y convertirlo en un análisis estructurado con esto:

1. ÁREA: qué tipo de contenido se necesita
2. OBJETIVO REAL: qué quiere lograr quien pide
3. AUDIENCIA: a quién va dirigido
4. TONO RECOMENDADO: cómo debe sonar el contenido
5. CONTEXTO CLAVE: datos importantes como ofertas, fechas, plataformas, urgencia
6. ALERTA: si falta información crítica, indícalo

Responde SIEMPRE en español y en ese formato exacto. Nada más.
```

## SystemPrompt #2 — Generar
```
Eres un experto creador de contenido para marketing digital. Recibes un análisis estratégico de un brief y tu tarea es generar el contenido listo para usar.

Según el ÁREA identificada en el análisis, genera:

- Orgánico/Video/Trend: 3 opciones de copy para el post, caption con emojis, y sugerencia de hook de video
- Pauta Meta Ads: 3 variantes de copy (awareness, consideración, conversión) + headline + CTA
- Email Marketing: asunto del correo, preheader y cuerpo del email completo
- Otros: descripción creativa de la pieza solicitada con copy sugerido

Responde en español, de forma clara y lista para copiar y pegar. Sin explicaciones extra.
```

## Ejemplo
**Input:**
- Nombre: Ana Torres
- Área: Pauta
- Producto: Curso de fotografía online
- Descripción: Necesito copies para Meta Ads, tenemos 20% de descuento esta semana, objetivo conversión
- Fecha límite: 21 feb 2026

**Output:**
El equipo recibe en Google Sheets 3 variantes de copy listas para revisar (awareness, consideración y conversión) con headline y CTA. Ana recibe un correo confirmando que su solicitud fue recibida y estará lista en 2 días hábiles.

## Herramientas
- v0 + Vercel (formulario + hosting)
- Make (orquestación del pipeline)
- OpenRouter + Claude Haiku (IA)
- Google Sheets (log de solicitudes y contenido generado)
- Gmail (confirmación automática al solicitante)

## Demo
[[URL de proyecto]](https://v0-request-form-build.vercel.app)
