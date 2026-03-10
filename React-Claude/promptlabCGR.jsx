import { useState } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  bg:          "#eef3fb",
  surface:     "#f7f9fd",
  card:        "#ffffff",
  border:      "#d0daf0",
  borderHi:    "#8aaee0",
  navy:        "#1a3968",
  navyLight:   "#e8eef8",
  blue:        "#2563b8",
  blueLight:   "#dbeafe",
  sky:         "#0284c7",
  skyLight:    "#e0f2fe",
  green:       "#047857",
  greenLight:  "#d1fae5",
  red:         "#b91c1c",
  redLight:    "#fee2e2",
  amber:       "#b45309",
  amberLight:  "#fef3c7",
  purple:      "#6d28d9",
  purpleLight: "#ede9fe",
  teal:        "#0f766e",
  tealLight:   "#ccfbf1",
  text:        "#1e2d45",
  muted:       "#5a7194",
  shadow:      "0 2px 16px rgba(30,57,104,0.09)",
  shadowLg:    "0 8px 32px rgba(30,57,104,0.13)",
};

// ─── PROMPT LIBRARY ───────────────────────────────────────────────────────────
const CAT_META = {
  Productividad: { color: C.amber,  light: C.amberLight,  icon: "⚡" },
  Escritura:     { color: C.blue,   light: C.blueLight,   icon: "✍️" },
  Imágenes:      { color: C.purple, light: C.purpleLight, icon: "🎨" },
  Minutas:       { color: C.green,  light: C.greenLight,  icon: "📝" },
  Auditoría:     { color: C.red,    light: C.redLight,    icon: "🔍" },
  Legal:         { color: C.teal,   light: C.tealLight,   icon: "⚖️" },
  Finanzas:      { color: C.sky,    light: C.skyLight,    icon: "📊" },
};

const PROMPTS = [
  { id:1, cat:"Productividad", icon:"⚡", title:"Priorización de tareas diarias",
    desc:"Organiza tu día con claridad usando el método Eisenhower.",
    prompt:`Actúa como un coach de productividad experto en el método GTD y la técnica Eisenhower.

Tengo las siguientes tareas pendientes para hoy:
[LISTA DE TAREAS]

Por favor:
1. Clasifica cada tarea según la matriz urgente/importante.
2. Propón un orden de ejecución optimizado para máxima productividad.
3. Identifica cuáles delegar o eliminar.
4. Estima el tiempo necesario para cada tarea.
5. Sugiere bloques de tiempo específicos considerando picos de energía cognitiva.

Formato esperado:
Tarea | Cuadrante | Prioridad | Tiempo estimado | Acción recomendada

Responde en español con bullet points claros y tabla comparativa.` },

  { id:2, cat:"Productividad", icon:"📋", title:"Plan de proyecto desde cero",
    desc:"Estructura cualquier proyecto con hitos, riesgos y KPIs.",
    prompt:`Eres un gerente de proyectos senior certificado en PMP y metodologías ágiles.

Proyecto: [NOMBRE DEL PROYECTO]
Objetivo: [OBJETIVO PRINCIPAL]
Plazo: [FECHA LÍMITE]
Equipo disponible: [NÚMERO DE PERSONAS Y ROLES]
Presupuesto aproximado: [MONTO]

Genera un plan de proyecto completo que incluya:
1. Desglose de trabajo (WBS) en fases y entregables.
2. Cronograma con hitos clave (formato tabla).
3. Riesgos identificados y estrategias de mitigación.
4. KPIs de seguimiento.
5. Matriz RACI simplificada.

Ejemplo del formato esperado para cronograma:
Fase | Entregable | Inicio | Fin | Responsable | Estado

Usa lenguaje ejecutivo, claro y orientado a resultados.` },

  { id:3, cat:"Productividad", icon:"🧠", title:"Análisis crítico de documento",
    desc:"Extrae insights y evalúa cualquier informe o propuesta.",
    prompt:`Eres un analista estratégico senior con experiencia en consultoría de management.

Documento a analizar:
[PEGAR TEXTO O DESCRIBIR EL DOCUMENTO]

Tipo: [INFORME / PROPUESTA / CONTRATO / ARTÍCULO / ESTRATEGIA]
Propósito del análisis: [POR QUÉ LO ESTÁS ANALIZANDO]
Decisión que depende de este análisis: [CONTEXTO]

Analiza y provee:
1. Resumen ejecutivo en 5 bullets (máximo 2 líneas cada uno).
2. Fortalezas y argumentos sólidos identificados.
3. Debilidades, vacíos lógicos o información faltante.
4. Supuestos implícitos que no se cuestionan.
5. 3 preguntas críticas que el documento no responde.
6. Recomendación final: ¿Aceptar / Rechazar / Solicitar revisión? Justificado.` },

  { id:4, cat:"Escritura", icon:"📄", title:"Artículo de blog SEO-optimizado",
    desc:"Crea contenido de valor que posicione y convierta.",
    prompt:`Eres un content strategist y escritor SEO con 10 años de experiencia en marketing digital.

Tema: [TEMA DEL ARTÍCULO]
Audiencia objetivo: [DESCRIPCIÓN DEL LECTOR IDEAL]
Keyword principal: [PALABRA CLAVE]
Keywords secundarias: [LISTA]
Longitud objetivo: [800 / 1200 / 2000 palabras]
Tono: [INFORMATIVO / CONVERSACIONAL / TÉCNICO]

Crea un artículo completo con:
1. Título H1 optimizado para SEO y click-through rate.
2. Meta descripción de 155 caracteres.
3. Introducción que enganche en los primeros 2 párrafos.
4. 4-6 secciones con H2 y H3 bien estructurados.
5. Al menos 2 listas o tablas para mejorar escaneabilidad.
6. Conclusión con llamado a la acción.` },

  { id:5, cat:"Escritura", icon:"💼", title:"Post de LinkedIn de alto engagement",
    desc:"Publica contenido que posiciona y atrae conexiones clave.",
    prompt:`Eres un experto en personal branding y marketing de contenidos en LinkedIn con más de 50K seguidores.

Tema del post: [TEMA O HISTORIA A COMPARTIR]
Mi profesión / industria: [TU SECTOR]
Mensaje clave que quiero transmitir: [IDEA CENTRAL]
Objetivo: [VISIBILIDAD / LEADS / NETWORKING / REFLEXIÓN]

Escribe un post de LinkedIn de alto engagement que:
1. Abra con un hook impactante en la primera línea (sin emojis genéricos).
2. Desarrolle la idea con storytelling o datos concretos.
3. Use espaciado visual para facilitar lectura en móvil.
4. Incluya una pregunta o CTA al final para generar comentarios.
5. Agregue 5 hashtags relevantes y de nicho.

Estilo: directo, auténtico, sin jerga corporativa vacía.` },

  { id:6, cat:"Escritura", icon:"🔧", title:"Corrección y mejora de texto",
    desc:"Eleva la calidad de cualquier texto al nivel profesional.",
    prompt:`Actúa como un editor profesional con experiencia en publicaciones académicas y corporativas.

Texto a mejorar:
[PEGAR TEXTO AQUÍ]

Tipo de texto: [INFORME / EMAIL / ARTÍCULO / PRESENTACIÓN / OTRO]
Audiencia: [DESCRIPCIÓN]
Tono objetivo: [FORMAL / TÉCNICO / DIVULGATIVO / PERSUASIVO]

Realiza las siguientes acciones:
1. Corrige errores ortográficos, gramaticales y de puntuación.
2. Mejora la fluidez y cohesión entre párrafos.
3. Elimina redundancias y palabras innecesarias.
4. Fortalece verbos débiles y reemplaza clichés.
5. Presenta la versión mejorada completa.
6. Lista los 5 cambios más importantes realizados y por qué.

Mantén la voz y las ideas originales del autor.` },

  { id:7, cat:"Imágenes", icon:"🖼️", title:"Retrato fotorrealista (Midjourney/DALL-E)",
    desc:"Genera retratos profesionales de alta calidad con IA.",
    prompt:`[DESCRIPCIÓN DEL SUJETO: edad, género, rasgos distintivos, expresión]

Fotografía de retrato profesional, iluminación Rembrandt suave, bokeh cinematográfico f/1.4, lente 85mm, estudio fotográfico de alta gama. Skin texture ultra-detallada, ojos con catchlight natural.

Estilo: [Annie Leibovitz / Peter Lindbergh / fotorrealismo editorial]
Paleta de color: [CÁLIDA / FRÍA / DESATURADA / VIBRANTE]
Fondo: [NEUTRO / URBANO / NATURAL / ABSTRACTO]
Mood: [SERIO / CERCANO / MISTERIOSO / LUMINOSO]

Parámetros sugeridos Midjourney: --ar 4:5 --style raw --v 6.1 --q 2` },

  { id:8, cat:"Imágenes", icon:"🏛️", title:"Visualización arquitectónica",
    desc:"Renders y conceptos arquitectónicos profesionales con IA.",
    prompt:`Architectural visualization, [TIPO DE EDIFICIO], [ESTILO: moderno / brutalista / orgánico / minimalista].

Materiales: [HORMIGÓN PULIDO / VIDRIO / MADERA / ACERO CORTEN]
Entorno: [URBANO / COSTERO / BOSCOSO / DESIERTO]
Hora del día: [AMANECER / MEDIODÍA / ATARDECER / NOCHE]

Iluminación arquitectónica profesional, render fotorrealista estilo Bjarke Ingels Group, perspectiva [FRONTAL / AÉREA / INTERIOR], cielo dramático, vegetación integrada.

Ultra-detailed, 8K resolution --ar 16:9 --style raw --v 6.1` },

  { id:9, cat:"Imágenes", icon:"📦", title:"Fotografía de producto comercial",
    desc:"Imágenes de producto de nivel editorial para campañas.",
    prompt:`Product photography, [NOMBRE/DESCRIPCIÓN DEL PRODUCTO], isolated on [white / marble / concrete / dark gradient].

Lighting: [Hard studio / Soft diffused / Dramatic side / Backlit glow]
Mood: [LUXURY premium / Minimalist clean / Bold lifestyle / Natural organic]
Color palette: [COLORES DOMINANTES]

Shot on Hasselblad medium format, 100mm macro lens, professional product photography, ultra-sharp focus, commercial grade.

Post-processing: color graded, [WARM / COOL / NEUTRAL] tones --ar 1:1 --style raw --v 6.1 --q 2` },

  { id:10, cat:"Minutas", icon:"📝", title:"Minuta de reunión ejecutiva",
    desc:"Documenta decisiones y acuerdos de forma profesional.",
    prompt:`Actúa como un asistente ejecutivo con experiencia en documentación corporativa de alto nivel.

Información de la reunión:
- Fecha y hora: [FECHA / HORA]
- Duración: [DURACIÓN]
- Participantes: [NOMBRE, CARGO de cada participante]
- Tipo de reunión: [ESTRATÉGICA / OPERATIVA / COMITÉ / DIRECTORIO]
- Moderador: [NOMBRE]

Temas tratados y puntos clave discutidos:
[NOTAS O PUNTOS PRINCIPALES]

Genera una minuta ejecutiva profesional que incluya:
1. Encabezado formal con todos los datos.
2. Resumen ejecutivo (máximo 3 líneas).
3. Puntos discutidos organizados por tema.
4. Decisiones tomadas (destacadas en negrita).
5. Tabla de acuerdos: Responsable | Acción | Fecha límite.
6. Próximos pasos y fecha de próxima reunión.` },

  { id:11, cat:"Minutas", icon:"🔄", title:"Minuta de seguimiento de proyecto",
    desc:"Registra avances, bloqueos y compromisos del equipo.",
    prompt:`Eres un PMO con experiencia en documentación ágil y tradicional.

Proyecto: [NOMBRE DEL PROYECTO]
Sprint / Semana: [NÚMERO / PERÍODO]
Fecha: [FECHA]
Asistentes: [LISTA DE PARTICIPANTES]

Notas de la reunión:
[PEGAR NOTAS O PUNTOS DISCUTIDOS]

Genera la minuta con:
1. Estado general: EN TIEMPO / CON RIESGO / RETRASADO.
2. Avance por entregables (tabla: Entregable | % Avance | Responsable | Estado).
3. Bloqueos identificados y propuestas de solución.
4. Compromisos nuevos: Quién | Qué | Para cuándo.
5. Puntos para la próxima reunión.` },

  { id:12, cat:"Auditoría", icon:"☑️", title:"Lista de verificación de auditoría interna",
    desc:"Checklist profesional basado en marcos COSO e ISO 9001.",
    prompt:`Eres un auditor interno certificado (CIA) con experiencia en marcos COSO, ISO 9001 e ISO 27001.

Área a auditar: [NOMBRE DEL DEPARTAMENTO / PROCESO]
Empresa / Sector: [DESCRIPCIÓN]
Alcance: [QUÉ INCLUYE Y QUÉ EXCLUYE]
Marco normativo aplicable: [REGULACIÓN / ESTÁNDAR / POLÍTICA INTERNA]
Período auditado: [FECHAS]
Nivel de riesgo percibido: [ALTO / MEDIO / BAJO]

Genera una lista de verificación con:
1. Objetivos de la auditoría.
2. Mínimo 20 puntos de verificación por categoría.
3. Para cada punto: ¿Qué verificar? | Evidencia requerida | Criterio de cumplimiento.
4. Escala: Cumple / Cumple Parcialmente / No Cumple / N/A.
5. Sección de hallazgos y observaciones.
6. KRIs a monitorear post-auditoría.` },

  { id:13, cat:"Auditoría", icon:"📋", title:"Informe de hallazgos de auditoría",
    desc:"Redacta informes formales claros y accionables para la dirección.",
    prompt:`Actúa como un auditor senior comunicando resultados al comité de auditoría y alta dirección.

Área auditada: [ÁREA]
Período: [FECHAS]
Equipo auditor: [NOMBRES]
Hallazgos detectados:
[LISTAR HALLAZGOS CON EVIDENCIAS]

Redacta un informe formal que incluya:
1. Portada y datos generales.
2. Resumen ejecutivo (media página máximo).
3. Alcance, objetivos y metodología.
4. Hallazgos clasificados: CRÍTICO / ALTO / MEDIO / BAJO.
5. Para cada hallazgo: Descripción | Evidencia | Impacto | Recomendación | Responsable | Plazo.
6. Matriz de riesgos residuales.
7. Plan de acción acordado (tabla).
8. Conclusión y opinión del auditor.` },

  { id:14, cat:"Auditoría", icon:"⚠️", title:"Análisis de riesgos empresariales (ERM)",
    desc:"Identifica, evalúa y prioriza riesgos clave del negocio.",
    prompt:`Eres un experto en ERM con certificación CRISC y experiencia en ISO 31000 y COSO ERM.

Empresa / Unidad de negocio: [DESCRIPCIÓN]
Sector: [INDUSTRIA]
Contexto actual: [SITUACIÓN RELEVANTE O CAMBIOS RECIENTES]
Objetivos estratégicos en riesgo: [LISTA]
Horizonte de análisis: [6 MESES / 1 AÑO / 3 AÑOS]

Realiza un análisis completo:
1. Identificación de mínimo 12 riesgos (internos y externos).
2. Categorización: Estratégico / Operativo / Financiero / Compliance / Reputacional / Tecnológico.
3. Matriz: Probabilidad (1-5) × Impacto (1-5) = Nivel de riesgo.
4. Top 5 riesgos críticos con análisis detallado.
5. Estrategias: Evitar / Mitigar / Transferir / Aceptar.
6. Plan de monitoreo y KRIs.` },

  { id:15, cat:"Auditoría", icon:"🔎", title:"Resumen ejecutivo de expediente de auditoría",
    desc:"Condensa expedientes extensos en un resumen accionable.",
    prompt:`Actúa como un auditor senior con habilidades avanzadas de síntesis y comunicación ejecutiva.

Expediente / Dossier:
[PEGAR CONTENIDO O DESCRIBIR EL EXPEDIENTE]

Institución: [NOMBRE]
Período cubierto: [FECHAS]
Tipo de auditoría: [FINANCIERA / OPERATIVA / CUMPLIMIENTO / TECNOLÓGICA / FORENSE]
Destinatario: [JUNTA DIRECTIVA / CONTRALORÍA / MINISTERIO]

Genera un resumen ejecutivo de máximo 2 páginas con:
1. Contexto y propósito de la auditoría.
2. Metodología utilizada (breve).
3. Principales hallazgos priorizados por impacto.
4. Irregularidades o alertas de cumplimiento.
5. Recomendaciones clave (numeradas y accionables).
6. Opinión del auditor sobre la gestión examinada.
7. Tabla de compromisos de mejora.` },

  { id:16, cat:"Legal", icon:"⚖️", title:"Revisión de cláusulas contractuales de riesgo",
    desc:"Identifica riesgos, ambigüedades y cláusulas abusivas en contratos.",
    prompt:`Actúa como un abogado corporativo senior con 15 años de experiencia en derecho contractual y mercantil.

Contrato a revisar:
[PEGAR EL TEXTO DEL CONTRATO O CLÁUSULAS ESPECÍFICAS]

Tipo de contrato: [SERVICIOS / COMPRAVENTA / ARRENDAMIENTO / LABORAL / NDA / OTRO]
Nuestra posición: [CONTRATANTE / CONTRATADO / AMBAS PARTES]
Jurisdicción aplicable: [PAÍS / ESTADO]
Puntos de preocupación específicos: [SI LOS HAY]

Realiza la revisión y provee:
1. Resumen ejecutivo del contrato.
2. Cláusulas de riesgo alto identificadas con su ubicación exacta.
3. Ambigüedades o vacíos legales que podrían generar disputas.
4. Cláusulas desequilibradas o potencialmente abusivas.
5. Recomendaciones de redacción alternativa para cada cláusula problemática.
6. Semáforo de riesgo: CRÍTICO / ALTO / MEDIO / BAJO por sección.
7. Recomendación final: Firmar / Negociar / Rechazar.

Ejemplo de hallazgo esperado:
Cláusula 8.2 (Responsabilidad) — Riesgo: ALTO
Problema: Limita la responsabilidad a $5,000 independientemente del daño real.
Recomendación: Eliminar el tope o vincularlo al valor del contrato.` },

  { id:17, cat:"Legal", icon:"📜", title:"Dictamen jurídico / Opinión legal",
    desc:"Redacta opiniones legales fundamentadas para tomar decisiones.",
    prompt:`Eres un abogado experto en [ÁREA DEL DERECHO: administrativo / mercantil / laboral / constitucional / penal] con experiencia en elaboración de dictámenes para organismos públicos y privados.

Consulta jurídica:
[DESCRIBIR LA SITUACIÓN O PREGUNTA LEGAL]

Marco normativo aplicable:
[LEYES / REGLAMENTOS / CIRCULARES RELEVANTES]

Antecedentes del caso:
[HECHOS RELEVANTES CRONOLÓGICAMENTE]

Redacta un dictamen jurídico formal que incluya:
1. Identificación del consultante y objeto del dictamen.
2. Hechos y antecedentes relevantes.
3. Marco legal aplicable (con citas de artículos específicos).
4. Análisis jurídico razonado por cada punto consultado.
5. Conclusiones numeradas y precisas.
6. Recomendaciones o advertencias legales.

Tono: técnico-jurídico, objetivo, fundamentado en derecho positivo.` },

  { id:18, cat:"Finanzas", icon:"📈", title:"Análisis de estados financieros",
    desc:"Interpreta balances, resultados y flujos de caja con profundidad.",
    prompt:`Eres un analista financiero certificado (CFA) con experiencia en análisis fundamental y valoración de empresas.

Estados financieros a analizar:
[PEGAR O DESCRIBIR: Balance General, Estado de Resultados, Flujo de Caja]

Período: [AÑO / TRIMESTRE]
Empresa / Entidad: [NOMBRE Y SECTOR]
Propósito: [INVERSIÓN / CRÉDITO / AUDITORÍA / FUSIÓN / DIAGNÓSTICO INTERNO]
Comparar contra: [PERÍODO ANTERIOR / SECTOR / BENCHMARK]

Realiza un análisis completo:
1. Resumen de la situación financiera (semáforo: SÓLIDA / ESTABLE / VULNERABLE).
2. Análisis de liquidez: ratios corriente, ácido, caja.
3. Análisis de solvencia y endeudamiento.
4. Análisis de rentabilidad: ROE, ROA, margen neto y operativo.
5. Flujo de caja libre y capacidad de pago.
6. Alertas o red flags.
7. Conclusiones y recomendaciones.

Incluye tablas comparativas y variaciones porcentuales.` },

  { id:19, cat:"Finanzas", icon:"🔬", title:"Due Diligence empresarial",
    desc:"Marco completo para evaluar una empresa antes de invertir o adquirir.",
    prompt:`Eres un director de M&A con 20 años de experiencia en procesos de fusiones y adquisiciones en América Latina.

Empresa objetivo: [NOMBRE]
Tipo de transacción: [ADQUISICIÓN / FUSIÓN / INVERSIÓN / ALIANZA ESTRATÉGICA]
Monto estimado: [RANGO]
Sector: [INDUSTRIA]
Información disponible: [DESCRIBIR QUÉ DOCUMENTOS SE TIENEN]

Desarrolla el plan de due diligence completo:
1. Estructura por áreas: Financiera | Legal | Fiscal | Operativa | Comercial | RRHH | Tecnológica.
2. Para cada área: mínimo 10 preguntas clave y documentos a solicitar.
3. Semáforo de hallazgos: GREEN / YELLOW / RED (deal-breaker).
4. Cronograma sugerido del proceso.
5. Lista de representaciones y garantías (R&W) a solicitar.

Ejemplo de hallazgo esperado:
Área: Legal | Hallazgo: Litigio laboral pendiente por $2M | Clasificación: YELLOW
Acción: Solicitar opinión de abogado externo y provisión en el precio.` },

  { id:20, cat:"Finanzas", icon:"🧮", title:"Análisis de cumplimiento presupuestario",
    desc:"Evalúa ejecución presupuestaria e identifica desviaciones críticas.",
    prompt:`Actúa como un contador público y analista de presupuestos institucionales con experiencia en sector público y privado.

Institución / Entidad: [NOMBRE]
Período de análisis: [MES / TRIMESTRE / AÑO]
Presupuesto aprobado: [DATOS O DESCRIPCIÓN]
Ejecución real: [DATOS O DESCRIPCIÓN]
Centros de costo o programas: [LISTA]

Genera un análisis de ejecución presupuestaria que incluya:
1. Resumen de ejecución global (% ejecutado vs presupuestado).
2. Tabla comparativa: Programa | Aprobado | Ejecutado | Variación $ | Variación %.
3. Top 5 desviaciones más significativas.
4. Causas probables de las principales variaciones.
5. Proyección de cierre del período.
6. Alertas de subejecución o sobrejecución crítica.
7. Recomendaciones de ajuste o reasignación presupuestaria.
8. Indicadores de gestión: eficiencia, economía, eficacia.` },
];

const CATS = ["Todas","Productividad","Escritura","Imágenes","Minutas","Auditoría","Legal","Finanzas"];

// ─── UTILITY COMPONENTS ───────────────────────────────────────────────────────
function Card({ children, style={}, accent }) {
  return (
    <div style={{ background:C.card, borderRadius:14, padding:"1.4rem 1.6rem",
      boxShadow:C.shadow, border:accent?`1px solid ${accent}50`:`1px solid ${C.border}`, ...style }}>
      {children}
    </div>
  );
}

function SectionLabel({ color=C.navy, children }) {
  return (
    <p style={{ margin:"0 0 1rem", fontFamily:"'Outfit',sans-serif", fontSize:"0.7rem",
      fontWeight:800, color, textTransform:"uppercase", letterSpacing:3 }}>
      {children}
    </p>
  );
}

function Pill({ color=C.blue, bg, children }) {
  return (
    <span style={{ background:bg||`${color}18`, color, border:`1px solid ${color}40`,
      borderRadius:20, padding:"2px 10px", fontSize:11, fontWeight:700, letterSpacing:0.5 }}>
      {children}
    </span>
  );
}

// ─── SCORE RING ────────────────────────────────────────────────────────────────
function ScoreRing({ score, maxScore=25, label, color=C.blue, size=84 }) {
  const pct=Math.min(score/maxScore,1), r=(size-12)/2, circ=2*Math.PI*r, dash=circ*pct;
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
      <svg width={size} height={size} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={6}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={6}
          strokeDasharray={`${dash} ${circ-dash}`} strokeLinecap="round"
          style={{ transition:"stroke-dasharray 1s ease", filter:`drop-shadow(0 0 4px ${color}60)` }}/>
        <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central"
          style={{ fill:C.text, fontSize:18, fontWeight:800, fontFamily:"'Outfit',sans-serif",
            transform:`rotate(90deg)`, transformOrigin:`${size/2}px ${size/2}px` }}>
          {score}
        </text>
      </svg>
      <span style={{ fontSize:10, color:C.muted, textAlign:"center", maxWidth:size, lineHeight:1.3 }}>{label}</span>
    </div>
  );
}

function BigScore({ score }) {
  const color=score>=75?C.green:score>=50?C.amber:C.red;
  const label=score>=75?"Excelente":score>=50?"Mejorable":"Débil";
  const size=130, r=(size-14)/2, circ=2*Math.PI*r, dash=circ*(score/100);
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
      <svg width={size} height={size} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={10}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={`${dash} ${circ-dash}`} strokeLinecap="round"
          style={{ transition:"stroke-dasharray 1.2s ease", filter:`drop-shadow(0 0 8px ${color}70)` }}/>
        <text x={size/2} y={size/2-8} textAnchor="middle" dominantBaseline="central"
          style={{ fill:color, fontSize:32, fontWeight:900, fontFamily:"'Outfit',sans-serif",
            transform:`rotate(90deg)`, transformOrigin:`${size/2}px ${size/2}px` }}>
          {score}
        </text>
        <text x={size/2} y={size/2+14} textAnchor="middle" dominantBaseline="central"
          style={{ fill:C.muted, fontSize:11, fontFamily:"'Outfit',sans-serif",
            transform:`rotate(90deg)`, transformOrigin:`${size/2}px ${size/2}px` }}>
          / 100
        </text>
      </svg>
      <span style={{ fontSize:12, color, fontWeight:800, letterSpacing:2, textTransform:"uppercase" }}>{label}</span>
    </div>
  );
}

// ─── API HELPERS ──────────────────────────────────────────────────────────────
async function callClaude(messages, systemPrompt) {
  const resp = await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000, system:systemPrompt, messages }),
  });
  if(!resp.ok) throw new Error(`Error ${resp.status}`);
  const d=await resp.json();
  return d.content.map(b=>b.text||"").join("");
}

function extractJSON(text) {
  let t=text.trim();
  const fence=t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if(fence) t=fence[1].trim();
  const s=t.indexOf("{"), e=t.lastIndexOf("}");
  if(s!==-1&&e!==-1) t=t.slice(s,e+1);
  return JSON.parse(t);
}

const EVAL_SYSTEM=`Eres un experto mundial en prompt engineering. Evalúa el prompt con criterio exigente y devuelve ÚNICAMENTE un JSON válido:
{
  "total_score": int_1_100,
  "scores": {"persona":0-25,"task":0-25,"context":0-20,"constraints":0-15,"clarity":0-15},
  "diagnosis": {"persona":"texto","task":"texto","context":"texto","constraints":"texto","clarity":"texto"},
  "improvements": ["sugerencia 1","sugerencia 2","sugerencia 3","sugerencia 4"],
  "improved_prompt": "prompt mejorado completo con ejemplos few-shot de pregunta-respuesta cuando aplique",
  "short_explanation": "resumen en 2-3 oraciones del diagnóstico global"
}
Rubrica: Persona/Rol(0-25): rol claro y específico; Tarea(0-25): objetivo concreto y medible; Contexto(0-20): información suficiente; Restricciones(0-15): formato/longitud/tono/idioma; Claridad(0-15): lenguaje preciso sin ambigüedad.
El prompt mejorado debe ser rico y completo. Cuando sea útil, incluye un ejemplo de pregunta-respuesta (few-shot) para guiar al modelo hacia el formato y tono esperados. El idioma de los textos debe coincidir con el del prompt evaluado. NO incluyas nada fuera del JSON.`;

// ─── EXAMPLE PROMPTS FOR EVALUATOR ───────────────────────────────────────────
const EXAMPLE_PROMPTS = [
  { level:"🔴 Débil", label:"Sin estructura alguna", color:C.red,
    text:"Dime cosas sobre inteligencia artificial." },
  { level:"🟡 Regular", label:"Objetivo pero sin formato ni contexto", color:C.amber,
    text:"Explícame cómo funciona el machine learning y cuáles son sus tipos principales. Quiero entenderlo bien." },
  { level:"🟢 Excelente", label:"Los 5 pilares + ejemplo few-shot", color:C.green,
    text:`Actúa como un profesor universitario de ciencia de datos con 10 años de experiencia explicando conceptos complejos a audiencias no técnicas.

Tu tarea es explicar qué es el machine learning y sus tres tipos principales (supervisado, no supervisado, por refuerzo).

Contexto: mi audiencia son directivos de una empresa mediana sin conocimientos técnicos que deben decidir si invertir en proyectos de ML.

Restricciones:
- Responde en español
- Usa analogías con situaciones del mundo empresarial
- Incluye un ejemplo práctico para cada tipo de ML
- Formato: 3 secciones con subtítulos, máximo 300 palabras en total
- Al final, una tabla comparativa de los 3 tipos

Ejemplo del nivel de lenguaje esperado:
Pregunta: "¿Qué es el aprendizaje supervisado?"
Respuesta esperada: "Es como entrenar a un nuevo empleado con un manual de casos resueltos. Le muestras 1,000 facturas correctas y 1,000 incorrectas, y aprende a distinguirlas por sus patrones."` },
];

// ─── EVALUATOR TAB ────────────────────────────────────────────────────────────
function EvaluatorTab() {
  const [prompt,setPrompt]=useState("");
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState(null);
  const [error,setError]=useState(null);
  const [loadingComp,setLoadingComp]=useState(false);
  const [origAns,setOrigAns]=useState(null);
  const [impAns,setImpAns]=useState(null);

  const evaluate=async()=>{
    if(!prompt.trim())return;
    setLoading(true); setError(null); setResult(null); setOrigAns(null); setImpAns(null);
    try {
      const raw=await callClaude([{role:"user",content:`Prompt a evaluar:\n\n${prompt}`}],EVAL_SYSTEM);
      setResult(extractJSON(raw));
    } catch(e){ setError(e.message); }
    finally{ setLoading(false); }
  };

  const compare=async()=>{
    if(!result)return;
    setLoadingComp(true);
    try {
      const [a,b]=await Promise.all([
        callClaude([{role:"user",content:prompt}],"Responde de forma clara, útil y detallada."),
        callClaude([{role:"user",content:result.improved_prompt}],"Responde de forma clara, útil y detallada."),
      ]);
      setOrigAns(a); setImpAns(b);
    } catch(e){ setError(e.message); }
    finally{ setLoadingComp(false); }
  };

  const dimScores=result?[
    {key:"persona",label:"Persona / Rol",max:25,val:result.scores?.persona||0},
    {key:"task",label:"Tarea / Objetivo",max:25,val:result.scores?.task||0},
    {key:"context",label:"Contexto",max:20,val:result.scores?.context||0},
    {key:"constraints",label:"Restricciones",max:15,val:result.scores?.constraints||0},
    {key:"clarity",label:"Claridad",max:15,val:result.scores?.clarity||0},
  ]:[];

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"1.4rem" }}>
      {/* Examples bank */}
      <Card>
        <SectionLabel>💡 Banco de ejemplos — clic para cargar un prompt</SectionLabel>
        <p style={{ fontSize:"0.82rem", color:C.muted, marginBottom:"1rem", lineHeight:1.6 }}>
          Selecciona uno de estos ejemplos para ver cómo el evaluador detecta diferencias de calidad. El ejemplo verde incluye técnica <strong>few-shot</strong> (pregunta + respuesta esperada) que mejora drásticamente la precisión del modelo.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {EXAMPLE_PROMPTS.map((ex,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, background:C.surface, borderRadius:10, padding:"10px 14px", border:`1px solid ${C.border}`, cursor:"pointer", transition:"border-color .15s" }}
              onClick={()=>setPrompt(ex.text)}
              onMouseEnter={e=>e.currentTarget.style.borderColor=ex.color}
              onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
              <div style={{ minWidth:90 }}>
                <span style={{ fontSize:12, fontWeight:800, color:ex.color }}>{ex.level}</span>
                <div style={{ fontSize:10, color:C.muted, marginTop:1 }}>{ex.label}</div>
              </div>
              <span style={{ fontSize:"0.76rem", color:C.muted, lineHeight:1.5, fontFamily:"'JetBrains Mono',monospace" }}>
                {ex.text.length>110?ex.text.slice(0,110)+"…":ex.text}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Input */}
      <Card>
        <SectionLabel>Tu prompt — sin límite de palabras</SectionLabel>
        <textarea value={prompt} onChange={e=>setPrompt(e.target.value)}
          placeholder="Escribe o pega tu prompt aquí. No hay límite de palabras — la herramienta está optimizada para evaluar prompts extensos y ricos en contexto..."
          style={{ width:"100%", minHeight:180, background:C.surface, border:`1px solid ${C.border}`,
            borderRadius:10, padding:"12px 14px", color:C.text, fontSize:"0.88rem",
            fontFamily:"'JetBrains Mono',monospace", resize:"vertical", outline:"none",
            lineHeight:1.7, boxSizing:"border-box", transition:"border-color .2s" }}
          onFocus={e=>e.target.style.borderColor=C.navy}
          onBlur={e=>e.target.style.borderColor=C.border}/>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:14 }}>
          <button onClick={evaluate} disabled={loading} style={{
            padding:"12px 28px", background:loading?C.navyLight:C.navy, color:loading?C.muted:"#fff",
            border:"none", borderRadius:10, fontFamily:"'Outfit',sans-serif", fontWeight:800,
            fontSize:"0.9rem", cursor:loading?"not-allowed":"pointer", letterSpacing:0.5,
            boxShadow:loading?"none":`0 4px 16px ${C.navy}40`, transition:"all .2s" }}>
            {loading?"⟳  Analizando...":"✦  Evaluar & Optimizar"}
          </button>
          {prompt&&<span style={{ fontSize:"0.78rem", color:C.muted }}>{prompt.split(/\s+/).filter(Boolean).length} palabras</span>}
        </div>
      </Card>

      {error&&<div style={{ background:C.redLight, border:`1px solid ${C.red}40`, borderRadius:12, padding:"1rem 1.4rem", color:C.red, fontSize:"0.85rem" }}>⚠ {error}</div>}

      {loading&&(
        <div style={{ textAlign:"center", padding:"2.5rem", color:C.muted }}>
          <div style={{ display:"inline-block", width:40, height:40, border:`3px solid ${C.border}`, borderTopColor:C.navy, borderRadius:"50%", animation:"spin 0.8s linear infinite" }}/>
          <p style={{ marginTop:14, fontSize:"0.85rem" }}>Claude está analizando tu prompt en profundidad...</p>
        </div>
      )}

      {result&&<>
        <Card>
          <SectionLabel>Puntuación por dimensión</SectionLabel>
          <div style={{ display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:"1.2rem", alignItems:"center" }}>
            <BigScore score={result.total_score}/>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"1.2rem", justifyContent:"center" }}>
              {dimScores.map(d=>{
                const pct=d.val/d.max, col=pct>=0.75?C.green:pct>=0.5?C.amber:C.red;
                return <ScoreRing key={d.key} score={d.val} maxScore={d.max} label={d.label} color={col}/>;
              })}
            </div>
          </div>
          {result.short_explanation&&(
            <div style={{ marginTop:"1.2rem", background:C.navyLight, borderLeft:`3px solid ${C.navy}`, borderRadius:"0 8px 8px 0", padding:"10px 16px", fontSize:"0.85rem", color:C.navy, lineHeight:1.7 }}>
              {result.short_explanation}
            </div>
          )}
        </Card>

        <Card>
          <SectionLabel>Diagnóstico detallado</SectionLabel>
          {[{k:"persona",l:"Persona / Rol"},{k:"task",l:"Tarea"},{k:"context",l:"Contexto"},{k:"constraints",l:"Restricciones"},{k:"clarity",l:"Claridad"}].map(({k,l})=>{
            const d=result.diagnosis?.[k]; const s=result.scores?.[k]||0;
            const mxS=k==="persona"||k==="task"?25:k==="context"?20:15;
            const pct=s/mxS; const col=pct>=0.75?C.green:pct>=0.5?C.amber:C.red;
            return d?(
              <div key={k} style={{ display:"flex", gap:12, background:C.surface, borderRadius:10, padding:"10px 14px", marginBottom:8 }}>
                <div style={{ minWidth:36, height:36, borderRadius:"50%", background:`${col}18`, border:`2px solid ${col}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:900, color:col, flexShrink:0 }}>{s}</div>
                <div>
                  <div style={{ fontSize:"0.7rem", fontWeight:800, color:col, marginBottom:3, textTransform:"uppercase", letterSpacing:1 }}>{l}</div>
                  <div style={{ fontSize:"0.83rem", color:C.text, lineHeight:1.6 }}>{d}</div>
                </div>
              </div>
            ):null;
          })}
        </Card>

        {result.improvements?.length>0&&(
          <Card>
            <SectionLabel>Sugerencias de mejora</SectionLabel>
            {result.improvements.map((item,i)=>(
              <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:10 }}>
                <span style={{ minWidth:26, height:26, borderRadius:6, background:C.navyLight, color:C.navy, fontWeight:800, fontSize:12, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i+1}</span>
                <span style={{ fontSize:"0.84rem", color:C.text, lineHeight:1.6 }}>{item}</span>
              </div>
            ))}
          </Card>
        )}

        {result.improved_prompt&&(
          <Card accent={C.navy} style={{ background:`${C.navy}05` }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1rem" }}>
              <SectionLabel color={C.navy}>✦ Prompt optimizado — listo para usar</SectionLabel>
              <button onClick={()=>{ navigator.clipboard.writeText(result.improved_prompt); }} style={{ background:C.blueLight, border:`1px solid ${C.blue}40`, color:C.blue, borderRadius:8, padding:"8px 16px", fontSize:12, cursor:"pointer", fontWeight:700 }}>
                ⧉ Copiar prompt
              </button>
            </div>
            <pre style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.78rem", color:C.text, whiteSpace:"pre-wrap", margin:0, lineHeight:1.85, background:C.surface, borderRadius:10, padding:"1.2rem", border:`1px solid ${C.border}` }}>
              {result.improved_prompt}
            </pre>
          </Card>
        )}

        {result.improved_prompt&&(
          <Card>
            <SectionLabel>Comparación de respuestas en tiempo real</SectionLabel>
            <p style={{ fontSize:"0.82rem", color:C.muted, margin:"0 0 1rem" }}>
              Ve la diferencia concreta: el modelo con el prompt original vs. con el prompt optimizado. Es la forma más rápida de entender el impacto de una instrucción bien estructurada.
            </p>
            <button onClick={compare} disabled={loadingComp} style={{ padding:"11px 24px", background:"transparent", border:`1.5px solid ${C.sky}`, color:C.sky, borderRadius:10, fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.85rem", cursor:loadingComp?"not-allowed":"pointer", transition:"all .2s" }}
              onMouseEnter={e=>{ if(!loadingComp)e.currentTarget.style.background=C.skyLight; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="transparent"; }}>
              {loadingComp?"⟳  Generando ambas respuestas...":"⟳  Generar & comparar respuestas"}
            </button>
            {(origAns||impAns)&&(
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginTop:"1.2rem" }}>
                <div>
                  <div style={{ fontSize:"0.7rem", fontWeight:800, color:C.red, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>← Respuesta con prompt original</div>
                  <div style={{ background:C.redLight, borderRadius:10, padding:"12px 14px", fontSize:"0.82rem", color:C.text, lineHeight:1.75, minHeight:80, border:`1px solid ${C.red}20` }}>{origAns}</div>
                </div>
                <div>
                  <div style={{ fontSize:"0.7rem", fontWeight:800, color:C.green, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>✦ Respuesta con prompt optimizado →</div>
                  <div style={{ background:C.greenLight, borderRadius:10, padding:"12px 14px", fontSize:"0.82rem", color:C.text, lineHeight:1.75, minHeight:80, border:`1px solid ${C.green}30` }}>{impAns}</div>
                </div>
              </div>
            )}
          </Card>
        )}
      </>}
    </div>
  );
}

// ─── LIBRARY TAB ─────────────────────────────────────────────────────────────
function PromptCard({ p }) {
  const [copied,setCopied]=useState(false);
  const [open,setOpen]=useState(false);
  const meta=CAT_META[p.cat]||{color:C.blue,light:C.blueLight,icon:"📄"};
  const copy=()=>{ navigator.clipboard.writeText(p.prompt); setCopied(true); setTimeout(()=>setCopied(false),1800); };
  return (
    <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden", boxShadow:C.shadow, transition:"all .2s" }}
      onMouseEnter={e=>{ e.currentTarget.style.boxShadow=C.shadowLg; e.currentTarget.style.borderColor=meta.color; e.currentTarget.style.transform="translateY(-2px)"; }}
      onMouseLeave={e=>{ e.currentTarget.style.boxShadow=C.shadow; e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="translateY(0)"; }}>
      <div style={{ padding:"1.2rem 1.4rem" }}>
        <div style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:10 }}>
          <div style={{ width:44,height:44,borderRadius:12,background:meta.light,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{p.icon}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"0.92rem",color:C.text,lineHeight:1.3,marginBottom:4 }}>{p.title}</div>
            <Pill color={meta.color} bg={meta.light}>{p.cat}</Pill>
          </div>
        </div>
        <p style={{ fontSize:"0.8rem",color:C.muted,margin:"0 0 1rem",lineHeight:1.5 }}>{p.desc}</p>
        <div style={{ display:"flex", gap:8 }}>
          <button onClick={()=>setOpen(!open)} style={{ flex:1,background:"transparent",border:`1px solid ${C.border}`,color:C.muted,borderRadius:8,padding:"7px 12px",fontSize:12,cursor:"pointer",transition:"all .15s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=meta.color; e.currentTarget.style.color=meta.color; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.color=C.muted; }}>
            {open?"▲ Ocultar":"▼ Ver prompt"}
          </button>
          <button onClick={copy} style={{ flex:1,background:copied?C.greenLight:meta.light,border:`1px solid ${copied?C.green:meta.color}40`,color:copied?C.green:meta.color,borderRadius:8,padding:"7px 12px",fontSize:12,cursor:"pointer",fontWeight:700,transition:"all .2s" }}>
            {copied?"✓ Copiado":"⧉ Copiar"}
          </button>
        </div>
      </div>
      {open&&(
        <div style={{ background:C.surface, borderTop:`1px solid ${C.border}`, padding:"1rem 1.4rem" }}>
          <pre style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:"0.73rem",color:C.text,whiteSpace:"pre-wrap",margin:0,lineHeight:1.8 }}>{p.prompt}</pre>
        </div>
      )}
    </div>
  );
}

function LibraryTab() {
  const [cat,setCat]=useState("Todas");
  const [search,setSearch]=useState("");
  const filtered=PROMPTS.filter(p=>(cat==="Todas"||p.cat===cat)&&(search===""||p.title.toLowerCase().includes(search.toLowerCase())||p.desc.toLowerCase().includes(search.toLowerCase())));
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"1.4rem" }}>
      <Card>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap", alignItems:"center" }}>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍  Buscar prompts..."
            style={{ flex:"1 1 200px",minWidth:160,background:C.surface,border:`1px solid ${C.border}`,borderRadius:8,padding:"9px 14px",color:C.text,fontSize:"0.85rem",outline:"none" }}
            onFocus={e=>e.target.style.borderColor=C.navy} onBlur={e=>e.target.style.borderColor=C.border}/>
          <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
            {CATS.map(c=>{
              const meta=CAT_META[c]||{color:C.navy,light:C.navyLight};
              const active=cat===c;
              return (
                <button key={c} onClick={()=>setCat(c)} style={{ padding:"7px 14px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",background:active?(c==="Todas"?C.navyLight:meta.light):"transparent",border:`1px solid ${active?(c==="Todas"?C.navy:meta.color):C.border}`,color:active?(c==="Todas"?C.navy:meta.color):C.muted,transition:"all .15s" }}>
                  {c==="Todas"?"Todas":meta.icon+" "+c}
                </button>
              );
            })}
          </div>
        </div>
      </Card>
      <div style={{ fontSize:"0.8rem",color:C.muted }}>
        {filtered.length} prompt{filtered.length!==1?"s":""} — diseñados para uso profesional e institucional
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))", gap:"1rem" }}>
        {filtered.map(p=><PromptCard key={p.id} p={p}/>)}
      </div>
      {filtered.length===0&&(
        <div style={{ textAlign:"center",padding:"3rem",color:C.muted }}>
          <div style={{ fontSize:40,marginBottom:12 }}>🔍</div>
          <p>No se encontraron prompts con ese filtro.</p>
        </div>
      )}
    </div>
  );
}

// ─── GUIDE TAB ────────────────────────────────────────────────────────────────
const PILLARS=[
  { icon:"👤", title:"Persona / Rol", max:25, color:C.navy,
    desc:"Define quién debe ser el modelo. Un rol cambia el tono, la profundidad y el razonamiento. Sin rol, el modelo responde como 'asistente genérico'.",
    bad:"Dame consejos financieros.",
    good:`Actúa como un director financiero con 15 años de experiencia en empresas del sector público y privado en América Latina.` },
  { icon:"🎯", title:"Tarea / Objetivo", max:25, color:C.blue,
    desc:"Usa verbos de acción exactos. 'Analiza', 'redacta', 'clasifica', 'resume' son mejores que 'dime cosas sobre...'",
    bad:"Explícame cosas sobre los contratos.",
    good:`Tu tarea es identificar y explicar las 5 cláusulas de mayor riesgo en el contrato adjunto, indicando su impacto potencial y cómo renegociarlas.` },
  { icon:"📋", title:"Contexto", max:20, color:C.purple,
    desc:"Sin contexto, el modelo 'adivina' y puede alucinar. Incluye: quién eres, para qué es la respuesta, cuál es la situación.",
    bad:"Analiza estos datos.",
    good:`Contexto: soy auditor de la CGR revisando la ejecución presupuestaria del Ministerio de Obras Públicas para el período 2023-2024. Los datos corresponden al subprograma de mantenimiento vial.` },
  { icon:"⚙️", title:"Restricciones", max:15, color:C.green,
    desc:"Especifica formato, longitud, idioma, tono, pasos o estructura del output. Las restricciones hacen los resultados predecibles y reutilizables.",
    bad:"Haz un resumen del informe.",
    good:`Restricciones: responde en español formal, máximo 400 palabras, formato tabla para los hallazgos (Área | Hallazgo | Riesgo | Recomendación), tono técnico-ejecutivo.` },
  { icon:"✏️", title:"Claridad", max:15, color:C.teal,
    desc:"Lenguaje directo, sin ambigüedades. Evita negaciones dobles, términos vagos ('algo', 'cosas'), e instrucciones contradictorias.",
    bad:"Haz algo útil con esto y sé breve pero también exhaustivo.",
    good:`Genera un dictamen jurídico de 2 páginas sobre la procedencia legal de la Licitación No. 2024-LY-000002 según la Ley de Contratación Pública N°9986. Un párrafo por punto consultado.` },
];

function GuideTab() {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"1.4rem" }}>
      <Card>
        <SectionLabel>Los 5 pilares de un prompt efectivo — con ejemplos reales</SectionLabel>
        <p style={{ fontSize:"0.84rem",color:C.muted,margin:"0 0 1.4rem",lineHeight:1.7 }}>
          Cada pilar incluye un ejemplo concreto de prompt débil vs. bien estructurado para que veas la diferencia práctica. El evaluador califica exactamente estas 5 dimensiones.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
          {PILLARS.map(p=>(
            <div key={p.title} style={{ background:C.surface,borderRadius:12,padding:"1.2rem 1.4rem",border:`1px solid ${C.border}` }}>
              <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10 }}>
                <div style={{ width:42,height:42,borderRadius:10,background:`${p.color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{p.icon}</div>
                <div>
                  <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:C.text }}>{p.title}</div>
                  <div style={{ fontSize:11,color:p.color,fontWeight:700 }}>Máx. {p.max} pts · {p.max>=25?"Crítico":"Importante"}</div>
                </div>
              </div>
              <p style={{ fontSize:"0.82rem",color:C.muted,margin:"0 0 1rem",lineHeight:1.6 }}>{p.desc}</p>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
                <div style={{ background:C.redLight,borderRadius:8,padding:"10px 12px",borderLeft:`3px solid ${C.red}` }}>
                  <div style={{ fontSize:10,fontWeight:800,color:C.red,textTransform:"uppercase",letterSpacing:1,marginBottom:5 }}>✕ Sin este pilar</div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:"0.75rem",color:C.text,lineHeight:1.5 }}>{p.bad}</div>
                </div>
                <div style={{ background:C.greenLight,borderRadius:8,padding:"10px 12px",borderLeft:`3px solid ${C.green}` }}>
                  <div style={{ fontSize:10,fontWeight:800,color:C.green,textTransform:"uppercase",letterSpacing:1,marginBottom:5 }}>✓ Con {p.title}</div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:"0.75rem",color:C.text,lineHeight:1.5 }}>{p.good}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionLabel>Por qué los ejemplos few-shot son tan poderosos</SectionLabel>
        <p style={{ fontSize:"0.83rem",color:C.muted,margin:"0 0 1rem",lineHeight:1.7 }}>
          Los modelos de lenguaje aprenden del patrón de tu conversación. Incluir un ejemplo de cómo quieres que responda — aunque sea parcial — reduce drásticamente la variabilidad del output y lo alinea con tus expectativas.
        </p>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
          <div style={{ background:C.redLight,borderRadius:8,padding:"12px 14px" }}>
            <div style={{ fontSize:10,fontWeight:800,color:C.red,textTransform:"uppercase",letterSpacing:1,marginBottom:8 }}>✕ Sin ejemplo</div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:"0.73rem",color:C.text,lineHeight:1.6 }}>{`"Clasifica cada hallazgo de auditoría por severidad."`}</div>
            <div style={{ fontSize:11,color:C.red,marginTop:8,fontWeight:600 }}>→ El modelo inventa su propio formato. Impredecible.</div>
          </div>
          <div style={{ background:C.greenLight,borderRadius:8,padding:"12px 14px" }}>
            <div style={{ fontSize:10,fontWeight:800,color:C.green,textTransform:"uppercase",letterSpacing:1,marginBottom:8 }}>✓ Con ejemplo (few-shot)</div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:"0.73rem",color:C.text,lineHeight:1.6 }}>{`"Clasifica así:\n\nHallazgo: 'Falta de segregación de funciones'\nSeveridad: CRÍTICO\nImpacto: Riesgo de fraude\nRecomendación: Controles duales\n\nAhora clasifica estos: [lista]"`}</div>
            <div style={{ fontSize:11,color:C.green,marginTop:8,fontWeight:600 }}>→ Replica exactamente el formato. Consistente y predecible.</div>
          </div>
        </div>
      </Card>

      <Card accent={C.green} style={{ background:`${C.green}05` }}>
        <SectionLabel color={C.green}>Fórmula ganadora — copia y adapta</SectionLabel>
        <pre style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:"0.79rem",color:C.text,lineHeight:2,margin:0,whiteSpace:"pre-wrap" }}>
{`[ROL]       → "Actúa como un [profesión] con [X años] de experiencia en [área]."
[TAREA]     → "Tu tarea es [verbo concreto]: [objeto específico y medible]."
[CONTEXTO]  → "Contexto: [empresa/institución], [situación], [audiencia objetivo]."
[RESTRICT.] → "Responde en [idioma], formato [tabla/bullets/párrafos],
               máximo [N palabras], tono [formal/técnico/divulgativo]."
[EJEMPLO]   → "Ejemplo de respuesta esperada:
               Pregunta: '[muestra una pregunta tipo]'
               Respuesta esperada: '[muestra el formato y nivel esperado]'"
[CIERRE]    → "Si necesitas información adicional, indícalo antes de responder."`}
        </pre>
      </Card>

      <Card>
        <SectionLabel>Errores más comunes ⚠️</SectionLabel>
        {[
          ["Prompt demasiado vago","«Explícame algo sobre finanzas»","Sin objetivo concreto, la respuesta será genérica e inútil para cualquier decisión."],
          ["Sin rol definido","«Dame consejos legales»","El modelo no sabe desde qué perspectiva ni nivel de profundidad responder."],
          ["Sin contexto de audiencia","«Escribe sobre gestión de riesgos»","¿Para un directivo? ¿Para un auditor junior? ¿Para publicación? El modelo no lo sabe."],
          ["Sin restricciones de formato","«Analiza estos estados financieros»","Sin especificar formato, recibirás prosa cuando necesitabas una tabla con ratios."],
          ["Sin ejemplos para tareas complejas","«Genera el informe de hallazgos»","Para outputs estructurados, incluir un fragmento de ejemplo multiplica la calidad."],
        ].map(([title,ex,why])=>(
          <div key={title} style={{ background:C.surface,borderRadius:10,padding:"10px 14px",display:"flex",gap:12,marginBottom:8 }}>
            <span style={{ color:C.red,fontSize:18,flexShrink:0 }}>✕</span>
            <div>
              <div style={{ fontWeight:700,fontSize:"0.84rem",color:C.text,marginBottom:2 }}>{title}</div>
              <div style={{ fontSize:"0.77rem",color:C.amber,fontFamily:"'JetBrains Mono',monospace",marginBottom:2 }}>{ex}</div>
              <div style={{ fontSize:"0.77rem",color:C.muted }}>{why}</div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

// ─── INICIO TAB ───────────────────────────────────────────────────────────────
const REFS=[
  { icon:"🟤", name:"Anthropic — Prompt Engineering", desc:"Guía oficial para construir prompts efectivos con Claude.", url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", color:C.navy },
  { icon:"📘", name:"PromptingGuide.ai", desc:"Recurso académico y práctico de referencia mundial en prompt engineering.", url:"https://www.promptingguide.ai/", color:C.blue },
  { icon:"🎓", name:"Learn Prompting", desc:"Curso gratuito para aprender prompting desde cero hasta nivel experto.", url:"https://learnprompting.org/", color:C.green },
  { icon:"🔵", name:"OpenAI Prompt Engineering Guide", desc:"Estrategias y mejores prácticas oficiales de OpenAI.", url:"https://platform.openai.com/docs/guides/prompt-engineering", color:C.sky },
  { icon:"🇨🇷", name:"Contraloría General de la República", desc:"Institución fiscalizadora superior de Costa Rica. Marco normativo de referencia.", url:"https://www.cgr.go.cr/", color:C.teal },
  { icon:"🎨", name:"Midjourney Documentation", desc:"Documentación oficial para crear imágenes con IA mediante prompts visuales.", url:"https://docs.midjourney.com/", color:C.purple },
];

const FEATURES=[
  { icon:"🎯", title:"Evaluador con IA", desc:"Score 1-100 en 5 dimensiones, diagnóstico detallado y prompt optimizado con ejemplos few-shot incluidos.", tab:"evaluator" },
  { icon:"📖", title:"Guía de Prompt Engineering", desc:"Los 5 pilares con ejemplos reales de prompts débiles vs. bien estructurados. Incluye la fórmula ganadora.", tab:"guide" },
  { icon:"🗂️", title:"Librería de 20 Prompts", desc:"Plantillas para auditores, abogados, analistas financieros, productividad ejecutiva, escritura e imágenes.", tab:"library" },
];

function InicioTab({ onTabChange }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"1.6rem" }}>
      {/* Hero */}
      <div style={{ background:`linear-gradient(135deg, ${C.navy} 0%, #2a5298 100%)`, borderRadius:16, padding:"2.4rem 2.8rem", color:"#fff", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute",top:-30,right:-30,width:200,height:200,borderRadius:"50%",background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ position:"absolute",bottom:-40,right:60,width:140,height:140,borderRadius:"50%",background:"rgba(255,255,255,0.06)" }}/>
        <div style={{ position:"relative",zIndex:1 }}>
          <div style={{ display:"inline-block",background:"rgba(255,255,255,0.15)",borderRadius:20,padding:"4px 14px",fontSize:11,fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:16 }}>
            ✦ PromptLab Academy
          </div>
          <h2 style={{ fontFamily:"'Outfit',sans-serif",fontSize:"1.8rem",fontWeight:900,margin:"0 0 14px",lineHeight:1.2,maxWidth:560 }}>
            Comunícate mejor con la Inteligencia Artificial y mejora tu trabajo
          </h2>
          <p style={{ fontSize:"0.9rem",opacity:0.85,lineHeight:1.8,maxWidth:560,marginBottom:22 }}>
            La calidad de tus resultados con IA depende directamente de la calidad de tus instrucciones. PromptLab Academy te da las herramientas prácticas para escribir prompts precisos, estructurados y efectivos — para cualquier tarea profesional, desde auditorías hasta análisis legales y financieros.
          </p>
          <button onClick={()=>onTabChange("evaluator")} style={{ background:"#fff",color:C.navy,border:"none",borderRadius:10,padding:"12px 28px",fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.9rem",cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,0.2)" }}>
            Evaluar mi primer prompt →
          </button>
        </div>
      </div>

      {/* Why it matters */}
      <Card>
        <SectionLabel>¿Por qué importa escribir buenos prompts?</SectionLabel>
        <p style={{ fontSize:"0.85rem",color:C.text,lineHeight:1.85,marginBottom:"1rem" }}>
          Los modelos de lenguaje como Claude, GPT o Gemini interpretan lenguaje de forma probabilística — no ejecutan comandos exactos, sino que <strong>infieren la intención</strong> detrás de tus palabras. Esto significa que el mismo objetivo, expresado de dos formas distintas, puede producir resultados radicalmente diferentes.
        </p>
        <p style={{ fontSize:"0.85rem",color:C.text,lineHeight:1.85,marginBottom:"1rem" }}>
          En contextos institucionales — auditorías de la Contraloría, análisis jurídicos, informes financieros, minutas ejecutivas — un prompt impreciso no es solo ineficiente: puede generar outputs que requieren corrección extensa o que simplemente no cumplen los estándares requeridos.
        </p>
        <div style={{ background:C.navyLight,borderLeft:`4px solid ${C.navy}`,borderRadius:"0 10px 10px 0",padding:"14px 18px" }}>
          <p style={{ fontSize:"0.85rem",color:C.navy,lineHeight:1.7,margin:0,fontWeight:600 }}>
            Un prompt bien construido es la diferencia entre 10 minutos de revisión y 2 horas de reescritura. Esta herramienta te ayuda a desarrollar ese criterio de forma práctica: evaluando tus prompts, comparando respuestas en tiempo real, y accediendo a plantillas profesionales listas para usar.
          </p>
        </div>
      </Card>

      {/* Features */}
      <div>
        <SectionLabel>¿Qué encontrarás aquí?</SectionLabel>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1rem" }}>
          {FEATURES.map(f=>(
            <div key={f.title} style={{ background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"1.4rem",boxShadow:C.shadow,cursor:"pointer",transition:"all .2s" }}
              onClick={()=>onTabChange(f.tab)}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor=C.navy; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=C.shadowLg; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow=C.shadow; }}>
              <div style={{ fontSize:34,marginBottom:10 }}>{f.icon}</div>
              <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:C.navy,marginBottom:6 }}>{f.title}</div>
              <p style={{ fontSize:"0.8rem",color:C.muted,lineHeight:1.65,margin:"0 0 12px" }}>{f.desc}</p>
              <div style={{ fontSize:12,color:C.blue,fontWeight:700 }}>Ir a esta sección →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reference links */}
      <Card>
        <SectionLabel>📚 Recursos de referencia recomendados</SectionLabel>
        <p style={{ fontSize:"0.82rem",color:C.muted,margin:"0 0 1.2rem",lineHeight:1.6 }}>
          Estos son los recursos más reconocidos sobre prompt engineering y los marcos institucionales de referencia. Todos abren en una nueva pestaña.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"0.9rem" }}>
          {REFS.map(r=>(
            <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" style={{ display:"flex",alignItems:"flex-start",gap:12,background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textDecoration:"none",transition:"all .2s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor=r.color; e.currentTarget.style.background=`${r.color}08`; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.background=C.surface; }}>
              <div style={{ width:38,height:38,borderRadius:10,background:`${r.color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0 }}>{r.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"0.85rem",color:C.text,marginBottom:3 }}>{r.name}</div>
                <div style={{ fontSize:"0.75rem",color:C.muted,lineHeight:1.5 }}>{r.desc}</div>
                <div style={{ fontSize:11,color:r.color,marginTop:5,fontWeight:600 }}>Visitar sitio ↗</div>
              </div>
            </a>
          ))}
        </div>
      </Card>

      {/* Bottom CTA */}
      <div style={{ background:C.navyLight,borderRadius:14,padding:"1.6rem 2rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,border:`1px solid ${C.blue}25` }}>
        <div>
          <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"1rem",color:C.navy,marginBottom:4 }}>¿Listo para mejorar tus prompts?</div>
          <div style={{ fontSize:"0.82rem",color:C.muted }}>Comienza con el evaluador — pega cualquier prompt y recibe un análisis completo en segundos.</div>
        </div>
        <button onClick={()=>onTabChange("evaluator")} style={{ background:C.navy,color:"#fff",border:"none",borderRadius:10,padding:"12px 24px",fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.88rem",cursor:"pointer",whiteSpace:"nowrap",boxShadow:`0 4px 16px ${C.navy}40` }}>
          Ir al Evaluador →
        </button>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function PromptLabAcademy() {
  const [tab,setTab]=useState("inicio");

  const TABS=[
    { id:"inicio",    label:"🏠  Inicio"   },
    { id:"guide",     label:"📖  Guía"     },
    { id:"evaluator", label:"✦  Evaluador" },
    { id:"library",   label:"⊞  Librería" },
  ];

  const HEADERS={
    guide:     { title:<>Guía de <span style={{ color:"#7dd3fc" }}>Prompt Engineering</span></>, sub:"Los 5 pilares con ejemplos reales, errores comunes, técnica few-shot y la fórmula ganadora." },
    evaluator: { title:<>Evaluador & <span style={{ color:"#86efac" }}>Optimizador</span> de Prompts</>, sub:"Sin límite de palabras. Pega tu prompt y recibe score detallado, diagnóstico y versión mejorada lista para usar." },
    library:   { title:<>Librería de Prompts <span style={{ color:"#fde68a" }}>Profesionales</span></>, sub:"20 plantillas para auditores, abogados, analistas financieros, productividad, escritura e imágenes." },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${C.bg};color:${C.text};font-family:'Outfit',sans-serif;}
        ::-webkit-scrollbar{width:6px;}
        ::-webkit-scrollbar-track{background:${C.surface};}
        ::-webkit-scrollbar-thumb{background:${C.borderHi};border-radius:3px;}
        @keyframes spin{to{transform:rotate(360deg);}}
      `}</style>

      <div style={{ minHeight:"100vh", background:C.bg }}>
        {/* Header */}
        <div style={{ background:C.card, borderBottom:`1px solid ${C.border}`, boxShadow:"0 1px 8px rgba(30,57,104,0.07)", padding:"0 2rem", position:"sticky", top:0, zIndex:100 }}>
          <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:38,height:38,borderRadius:10,background:C.navy,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#fff",boxShadow:`0 2px 12px ${C.navy}50` }}>✦</div>
              <div>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"1.05rem",color:C.navy,letterSpacing:-0.3 }}>PromptLab Academy</div>
                <div style={{ fontSize:9,color:C.muted,letterSpacing:2.5,textTransform:"uppercase" }}>Powered by Claude API</div>
              </div>
            </div>
            <nav style={{ display:"flex", gap:3 }}>
              {TABS.map(t=>(
                <button key={t.id} onClick={()=>setTab(t.id)} style={{
                  padding:"8px 16px", background:tab===t.id?C.navyLight:"transparent",
                  border:`1px solid ${tab===t.id?C.navy:"transparent"}`,
                  color:tab===t.id?C.navy:C.muted, borderRadius:8,
                  fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.82rem",
                  cursor:"pointer", transition:"all .15s" }}>
                  {t.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Page header strip */}
        {tab!=="inicio"&&HEADERS[tab]&&(
          <div style={{ background:C.navy, padding:"1.5rem 2rem" }}>
            <div style={{ maxWidth:1100, margin:"0 auto" }}>
              <h1 style={{ fontFamily:"'Outfit',sans-serif",fontSize:"1.4rem",fontWeight:900,color:"#fff",marginBottom:6 }}>
                {HEADERS[tab].title}
              </h1>
              <p style={{ fontSize:"0.82rem",color:"rgba(255,255,255,0.62)",lineHeight:1.5 }}>
                {HEADERS[tab].sub}
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"2rem" }}>
          {tab==="inicio"    && <InicioTab onTabChange={setTab}/>}
          {tab==="guide"     && <GuideTab/>}
          {tab==="evaluator" && <EvaluatorTab/>}
          {tab==="library"   && <LibraryTab/>}
        </div>

        {/* Footer */}
        <div style={{ borderTop:`1px solid ${C.border}`, background:C.card, padding:"1.2rem 2rem", textAlign:"center" }}>
          <span style={{ fontSize:"0.75rem",color:C.muted }}>PromptLab Academy · Powered by Claude API · {new Date().getFullYear()} · Para uso profesional e institucional</span>
        </div>
      </div>
    </>
  );
}