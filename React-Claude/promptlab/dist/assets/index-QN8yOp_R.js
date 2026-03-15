import{r as m,a as q,R as W}from"./react-wGySg1uH.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();var w={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=m,_=Symbol.for("react.element"),V=Symbol.for("react.fragment"),J=Object.prototype.hasOwnProperty,Y=G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};function B(a,i,n){var s,r={},t=null,c=null;n!==void 0&&(t=""+n),i.key!==void 0&&(t=""+i.key),i.ref!==void 0&&(c=i.ref);for(s in i)J.call(i,s)&&!X.hasOwnProperty(s)&&(r[s]=i[s]);if(a&&a.defaultProps)for(s in i=a.defaultProps,i)r[s]===void 0&&(r[s]=i[s]);return{$$typeof:_,type:a,key:t,ref:c,props:r,_owner:Y.current}}b.Fragment=V;b.jsx=B;b.jsxs=B;w.exports=b;var e=w.exports,E={},D=q;E.createRoot=D.createRoot,E.hydrateRoot=D.hydrateRoot;const o={bg:"#eef3fb",surface:"#f7f9fd",card:"#ffffff",border:"#d0daf0",borderHi:"#8aaee0",navy:"#1a3968",navyLight:"#e8eef8",blue:"#2563b8",blueLight:"#dbeafe",sky:"#0284c7",skyLight:"#e0f2fe",green:"#047857",greenLight:"#d1fae5",red:"#b91c1c",redLight:"#fee2e2",amber:"#b45309",amberLight:"#fef3c7",purple:"#6d28d9",purpleLight:"#ede9fe",teal:"#0f766e",tealLight:"#ccfbf1",text:"#1e2d45",muted:"#5a7194",shadow:"0 2px 16px rgba(30,57,104,0.09)",shadowLg:"0 8px 32px rgba(30,57,104,0.13)"},F={Productividad:{color:o.amber,light:o.amberLight,icon:"⚡"},Escritura:{color:o.blue,light:o.blueLight,icon:"✍️"},Imágenes:{color:o.purple,light:o.purpleLight,icon:"🎨"},Minutas:{color:o.green,light:o.greenLight,icon:"📝"},Auditoría:{color:o.red,light:o.redLight,icon:"🔍"},Legal:{color:o.teal,light:o.tealLight,icon:"⚖️"},Finanzas:{color:o.sky,light:o.skyLight,icon:"📊"}},Q=[{id:1,cat:"Productividad",icon:"⚡",title:"Priorización de tareas diarias",desc:"Organiza tu día con claridad usando el método Eisenhower.",prompt:`Actúa como un coach de productividad experto en el método GTD y la técnica Eisenhower.

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

Responde en español con bullet points claros y tabla comparativa.`},{id:2,cat:"Productividad",icon:"📋",title:"Plan de proyecto desde cero",desc:"Estructura cualquier proyecto con hitos, riesgos y KPIs.",prompt:`Eres un gerente de proyectos senior certificado en PMP y metodologías ágiles.

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

Usa lenguaje ejecutivo, claro y orientado a resultados.`},{id:3,cat:"Productividad",icon:"🧠",title:"Análisis crítico de documento",desc:"Extrae insights y evalúa cualquier informe o propuesta.",prompt:`Eres un analista estratégico senior con experiencia en consultoría de management.

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
6. Recomendación final: ¿Aceptar / Rechazar / Solicitar revisión? Justificado.`},{id:4,cat:"Escritura",icon:"📄",title:"Artículo de blog SEO-optimizado",desc:"Crea contenido de valor que posicione y convierta.",prompt:`Eres un content strategist y escritor SEO con 10 años de experiencia en marketing digital.

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
6. Conclusión con llamado a la acción.`},{id:5,cat:"Escritura",icon:"💼",title:"Post de LinkedIn de alto engagement",desc:"Publica contenido que posiciona y atrae conexiones clave.",prompt:`Eres un experto en personal branding y marketing de contenidos en LinkedIn con más de 50K seguidores.

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

Estilo: directo, auténtico, sin jerga corporativa vacía.`},{id:6,cat:"Escritura",icon:"🔧",title:"Corrección y mejora de texto",desc:"Eleva la calidad de cualquier texto al nivel profesional.",prompt:`Actúa como un editor profesional con experiencia en publicaciones académicas y corporativas.

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

Mantén la voz y las ideas originales del autor.`},{id:7,cat:"Imágenes",icon:"🖼️",title:"Retrato fotorrealista (Midjourney/DALL-E)",desc:"Genera retratos profesionales de alta calidad con IA.",prompt:`[DESCRIPCIÓN DEL SUJETO: edad, género, rasgos distintivos, expresión]

Fotografía de retrato profesional, iluminación Rembrandt suave, bokeh cinematográfico f/1.4, lente 85mm, estudio fotográfico de alta gama. Skin texture ultra-detallada, ojos con catchlight natural.

Estilo: [Annie Leibovitz / Peter Lindbergh / fotorrealismo editorial]
Paleta de color: [CÁLIDA / FRÍA / DESATURADA / VIBRANTE]
Fondo: [NEUTRO / URBANO / NATURAL / ABSTRACTO]
Mood: [SERIO / CERCANO / MISTERIOSO / LUMINOSO]

Parámetros sugeridos Midjourney: --ar 4:5 --style raw --v 6.1 --q 2`},{id:8,cat:"Imágenes",icon:"🏛️",title:"Visualización arquitectónica",desc:"Renders y conceptos arquitectónicos profesionales con IA.",prompt:`Architectural visualization, [TIPO DE EDIFICIO], [ESTILO: moderno / brutalista / orgánico / minimalista].

Materiales: [HORMIGÓN PULIDO / VIDRIO / MADERA / ACERO CORTEN]
Entorno: [URBANO / COSTERO / BOSCOSO / DESIERTO]
Hora del día: [AMANECER / MEDIODÍA / ATARDECER / NOCHE]

Iluminación arquitectónica profesional, render fotorrealista estilo Bjarke Ingels Group, perspectiva [FRONTAL / AÉREA / INTERIOR], cielo dramático, vegetación integrada.

Ultra-detailed, 8K resolution --ar 16:9 --style raw --v 6.1`},{id:9,cat:"Imágenes",icon:"📦",title:"Fotografía de producto comercial",desc:"Imágenes de producto de nivel editorial para campañas.",prompt:`Product photography, [NOMBRE/DESCRIPCIÓN DEL PRODUCTO], isolated on [white / marble / concrete / dark gradient].

Lighting: [Hard studio / Soft diffused / Dramatic side / Backlit glow]
Mood: [LUXURY premium / Minimalist clean / Bold lifestyle / Natural organic]
Color palette: [COLORES DOMINANTES]

Shot on Hasselblad medium format, 100mm macro lens, professional product photography, ultra-sharp focus, commercial grade.

Post-processing: color graded, [WARM / COOL / NEUTRAL] tones --ar 1:1 --style raw --v 6.1 --q 2`},{id:10,cat:"Minutas",icon:"📝",title:"Minuta de reunión ejecutiva",desc:"Documenta decisiones y acuerdos de forma profesional.",prompt:`Actúa como un asistente ejecutivo con experiencia en documentación corporativa de alto nivel.

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
6. Próximos pasos y fecha de próxima reunión.`},{id:11,cat:"Minutas",icon:"🔄",title:"Minuta de seguimiento de proyecto",desc:"Registra avances, bloqueos y compromisos del equipo.",prompt:`Eres un PMO con experiencia en documentación ágil y tradicional.

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
5. Puntos para la próxima reunión.`},{id:12,cat:"Auditoría",icon:"☑️",title:"Lista de verificación de auditoría interna",desc:"Checklist profesional basado en marcos COSO e ISO 9001.",prompt:`Eres un auditor interno certificado (CIA) con experiencia en marcos COSO, ISO 9001 e ISO 27001.

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
6. KRIs a monitorear post-auditoría.`},{id:13,cat:"Auditoría",icon:"📋",title:"Informe de hallazgos de auditoría",desc:"Redacta informes formales claros y accionables para la dirección.",prompt:`Actúa como un auditor senior comunicando resultados al comité de auditoría y alta dirección.

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
8. Conclusión y opinión del auditor.`},{id:14,cat:"Auditoría",icon:"⚠️",title:"Análisis de riesgos empresariales (ERM)",desc:"Identifica, evalúa y prioriza riesgos clave del negocio.",prompt:`Eres un experto en ERM con certificación CRISC y experiencia en ISO 31000 y COSO ERM.

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
6. Plan de monitoreo y KRIs.`},{id:15,cat:"Auditoría",icon:"🔎",title:"Resumen ejecutivo de expediente de auditoría",desc:"Condensa expedientes extensos en un resumen accionable.",prompt:`Actúa como un auditor senior con habilidades avanzadas de síntesis y comunicación ejecutiva.

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
7. Tabla de compromisos de mejora.`},{id:16,cat:"Legal",icon:"⚖️",title:"Revisión de cláusulas contractuales de riesgo",desc:"Identifica riesgos, ambigüedades y cláusulas abusivas en contratos.",prompt:`Actúa como un abogado corporativo senior con 15 años de experiencia en derecho contractual y mercantil.

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
Recomendación: Eliminar el tope o vincularlo al valor del contrato.`},{id:17,cat:"Legal",icon:"📜",title:"Dictamen jurídico / Opinión legal",desc:"Redacta opiniones legales fundamentadas para tomar decisiones.",prompt:`Eres un abogado experto en [ÁREA DEL DERECHO: administrativo / mercantil / laboral / constitucional / penal] con experiencia en elaboración de dictámenes para organismos públicos y privados.

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

Tono: técnico-jurídico, objetivo, fundamentado en derecho positivo.`},{id:18,cat:"Finanzas",icon:"📈",title:"Análisis de estados financieros",desc:"Interpreta balances, resultados y flujos de caja con profundidad.",prompt:`Eres un analista financiero certificado (CFA) con experiencia en análisis fundamental y valoración de empresas.

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

Incluye tablas comparativas y variaciones porcentuales.`},{id:19,cat:"Finanzas",icon:"🔬",title:"Due Diligence empresarial",desc:"Marco completo para evaluar una empresa antes de invertir o adquirir.",prompt:`Eres un director de M&A con 20 años de experiencia en procesos de fusiones y adquisiciones en América Latina.

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
Acción: Solicitar opinión de abogado externo y provisión en el precio.`},{id:20,cat:"Finanzas",icon:"🧮",title:"Análisis de cumplimiento presupuestario",desc:"Evalúa ejecución presupuestaria e identifica desviaciones críticas.",prompt:`Actúa como un contador público y analista de presupuestos institucionales con experiencia en sector público y privado.

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
8. Indicadores de gestión: eficiencia, economía, eficacia.`}],K=["Todas","Productividad","Escritura","Imágenes","Minutas","Auditoría","Legal","Finanzas"];function p({children:a,style:i={},accent:n}){return e.jsx("div",{style:{background:o.card,borderRadius:14,padding:"1.4rem 1.6rem",boxShadow:o.shadow,border:n?`1px solid ${n}50`:`1px solid ${o.border}`,...i},children:a})}function u({color:a=o.navy,children:i}){return e.jsx("p",{style:{margin:"0 0 1rem",fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:a,textTransform:"uppercase",letterSpacing:3},children:i})}function Z({color:a=o.blue,bg:i,children:n}){return e.jsx("span",{style:{background:i||`${a}18`,color:a,border:`1px solid ${a}40`,borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:700,letterSpacing:.5},children:n})}function ee({score:a,maxScore:i=25,label:n,color:s=o.blue,size:r=84}){const t=Math.min(a/i,1),c=(r-12)/2,d=2*Math.PI*c,g=d*t;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},children:[e.jsxs("svg",{width:r,height:r,style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:r/2,cy:r/2,r:c,fill:"none",stroke:o.border,strokeWidth:6}),e.jsx("circle",{cx:r/2,cy:r/2,r:c,fill:"none",stroke:s,strokeWidth:6,strokeDasharray:`${g} ${d-g}`,strokeLinecap:"round",style:{transition:"stroke-dasharray 1s ease",filter:`drop-shadow(0 0 4px ${s}60)`}}),e.jsx("text",{x:r/2,y:r/2,textAnchor:"middle",dominantBaseline:"central",style:{fill:o.text,fontSize:18,fontWeight:800,fontFamily:"'Outfit',sans-serif",transform:"rotate(90deg)",transformOrigin:`${r/2}px ${r/2}px`},children:a})]}),e.jsx("span",{style:{fontSize:10,color:o.muted,textAlign:"center",maxWidth:r,lineHeight:1.3},children:n})]})}function oe({score:a}){const i=a>=75?o.green:a>=50?o.amber:o.red,n=a>=75?"Excelente":a>=50?"Mejorable":"Débil",s=130,r=(s-14)/2,t=2*Math.PI*r,c=t*(a/100);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsxs("svg",{width:s,height:s,style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:s/2,cy:s/2,r,fill:"none",stroke:o.border,strokeWidth:10}),e.jsx("circle",{cx:s/2,cy:s/2,r,fill:"none",stroke:i,strokeWidth:10,strokeDasharray:`${c} ${t-c}`,strokeLinecap:"round",style:{transition:"stroke-dasharray 1.2s ease",filter:`drop-shadow(0 0 8px ${i}70)`}}),e.jsx("text",{x:s/2,y:s/2-8,textAnchor:"middle",dominantBaseline:"central",style:{fill:i,fontSize:32,fontWeight:900,fontFamily:"'Outfit',sans-serif",transform:"rotate(90deg)",transformOrigin:`${s/2}px ${s/2}px`},children:a}),e.jsx("text",{x:s/2,y:s/2+14,textAnchor:"middle",dominantBaseline:"central",style:{fill:o.muted,fontSize:11,fontFamily:"'Outfit',sans-serif",transform:"rotate(90deg)",transformOrigin:`${s/2}px ${s/2}px`},children:"/ 100"})]}),e.jsx("span",{style:{fontSize:12,color:i,fontWeight:800,letterSpacing:2,textTransform:"uppercase"},children:n})]})}async function v(a,i){const n=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:a,system:i})});if(!n.ok){const r=await n.json().catch(()=>({}));throw new Error(r.error||`Error ${n.status}`)}return(await n.json()).content||""}function ae(a){let i=a.trim();const n=i.match(/```(?:json)?\s*([\s\S]*?)```/);n&&(i=n[1].trim());const s=i.indexOf("{"),r=i.lastIndexOf("}");s!==-1&&r!==-1&&(i=i.slice(s,r+1));let t="",c=!1,d=!1;for(let g=0;g<i.length;g++){const f=i[g];if(d){t+=f,d=!1;continue}if(f==="\\"){d=!0,t+=f;continue}if(f==='"'){c=!c,t+=f;continue}if(c&&(f===`
`||f==="\r"||f==="	")){t+=" ";continue}t+=f}i=t,i=i.replace(/,\s*([}\]])/g,"$1");try{return JSON.parse(i)}catch{throw new Error("El modelo no generó JSON válido. Intenta de nuevo.")}}const re=`Eres un evaluador experto de prompts de IA. Debes responder UNICAMENTE con un objeto JSON en una sola linea, sin saltos de linea, sin markdown, sin texto adicional antes ni despues.

REGLAS DEL JSON:
- Todo el JSON debe estar en UNA SOLA LINEA
- No uses saltos de linea dentro de ningun valor string
- No uses comillas dobles dentro de los strings, usa comillas simples si necesitas citar algo

RUBRICA DE PUNTUACION:
- persona (0-25): tiene rol o perfil experto definido?
- task (0-25): tarea clara, concreta y medible?
- context (0-20): suficiente informacion de fondo?
- constraints (0-15): especifica formato, tono, idioma, extension?
- clarity (0-15): lenguaje preciso sin ambiguedad?

REGLAS DEL improved_prompt:
1. SIEMPRE incluye los 5 bloques con estas etiquetas exactas: [ROL], [TAREA], [CONTEXTO], [RESTRICCIONES], [CLARIDAD]
2. NUNCA hagas preguntas en el improved_prompt
3. Es una instruccion completa, no un dialogo
4. Infiere el contexto mas probable si el prompt original es vago
5. Todo en una sola linea sin saltos de linea

Formato EXACTO que debes devolver (una sola linea):
{"total_score":0,"scores":{"persona":0,"task":0,"context":0,"constraints":0,"clarity":0},"diagnosis":{"persona":"texto","task":"texto","context":"texto","constraints":"texto","clarity":"texto"},"improvements":["mejora 1","mejora 2","mejora 3","mejora 4"],"improved_prompt":"[ROL] texto. [TAREA] texto. [CONTEXTO] texto. [RESTRICCIONES] texto. [CLARIDAD] texto.","short_explanation":"resumen en 2 oraciones"}

El idioma de todos los textos debe coincidir con el idioma del prompt evaluado.`,ie=[{level:"🔴 Débil",label:"Sin estructura alguna",color:o.red,text:"Dime cosas sobre inteligencia artificial."},{level:"🟡 Regular",label:"Objetivo pero sin formato ni contexto",color:o.amber,text:"Explícame cómo funciona el machine learning y cuáles son sus tipos principales. Quiero entenderlo bien."},{level:"🟢 Excelente",label:"Los 5 pilares + ejemplo few-shot",color:o.green,text:`Actúa como un profesor universitario de ciencia de datos con 10 años de experiencia explicando conceptos complejos a audiencias no técnicas.

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
Respuesta esperada: "Es como entrenar a un nuevo empleado con un manual de casos resueltos. Le muestras 1,000 facturas correctas y 1,000 incorrectas, y aprende a distinguirlas por sus patrones."`}];function te(){var O,T,C,I,L,P;const[a,i]=m.useState(""),[n,s]=m.useState(!1),[r,t]=m.useState(null),[c,d]=m.useState(null),[g,f]=m.useState(!1),[j,S]=m.useState(null),[R,A]=m.useState(null),H=async()=>{if(a.trim()){s(!0),d(null),t(null),S(null),A(null);try{const l=await v([{role:"user",content:`Prompt a evaluar:

${a}`}],re);t(ae(l))}catch(l){d(l.message)}finally{s(!1)}}},U=async()=>{if(r){f(!0);try{const[l,x]=await Promise.all([v([{role:"user",content:a}],"Responde de forma clara, útil y detallada."),v([{role:"user",content:r.improved_prompt}],"Responde de forma clara, útil y detallada.")]);S(l),A(x)}catch(l){d(l.message)}finally{f(!1)}}},$=r?[{key:"persona",label:"Persona / Rol",max:25,val:((O=r.scores)==null?void 0:O.persona)||0},{key:"task",label:"Tarea / Objetivo",max:25,val:((T=r.scores)==null?void 0:T.task)||0},{key:"context",label:"Contexto",max:20,val:((C=r.scores)==null?void 0:C.context)||0},{key:"constraints",label:"Restricciones",max:15,val:((I=r.scores)==null?void 0:I.constraints)||0},{key:"clarity",label:"Claridad",max:15,val:((L=r.scores)==null?void 0:L.clarity)||0}]:[];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.4rem"},children:[e.jsxs(p,{children:[e.jsx(u,{children:"💡 Banco de ejemplos — clic para cargar un prompt"}),e.jsxs("p",{style:{fontSize:"0.82rem",color:o.muted,marginBottom:"1rem",lineHeight:1.6},children:["Selecciona uno de estos ejemplos para ver cómo el evaluador detecta diferencias de calidad. El ejemplo verde incluye técnica ",e.jsx("strong",{children:"few-shot"})," (pregunta + respuesta esperada) que mejora drásticamente la precisión del modelo."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:ie.map((l,x)=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,background:o.surface,borderRadius:10,padding:"10px 14px",border:`1px solid ${o.border}`,cursor:"pointer",transition:"border-color .15s"},onClick:()=>i(l.text),onMouseEnter:h=>h.currentTarget.style.borderColor=l.color,onMouseLeave:h=>h.currentTarget.style.borderColor=o.border,children:[e.jsxs("div",{style:{minWidth:90},children:[e.jsx("span",{style:{fontSize:12,fontWeight:800,color:l.color},children:l.level}),e.jsx("div",{style:{fontSize:10,color:o.muted,marginTop:1},children:l.label})]}),e.jsx("span",{style:{fontSize:"0.76rem",color:o.muted,lineHeight:1.5,fontFamily:"'JetBrains Mono',monospace"},children:l.text.length>110?l.text.slice(0,110)+"…":l.text})]},x))})]}),e.jsxs(p,{children:[e.jsx(u,{children:"Tu prompt — sin límite de palabras"}),e.jsx("textarea",{value:a,onChange:l=>i(l.target.value),placeholder:"Escribe o pega tu prompt aquí. No hay límite de palabras — la herramienta está optimizada para evaluar prompts extensos y ricos en contexto...",style:{width:"100%",minHeight:180,background:o.surface,border:`1px solid ${o.border}`,borderRadius:10,padding:"12px 14px",color:o.text,fontSize:"0.88rem",fontFamily:"'JetBrains Mono',monospace",resize:"vertical",outline:"none",lineHeight:1.7,boxSizing:"border-box",transition:"border-color .2s"},onFocus:l=>l.target.style.borderColor=o.navy,onBlur:l=>l.target.style.borderColor=o.border}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:14},children:[e.jsx("button",{onClick:H,disabled:n,style:{padding:"12px 28px",background:n?o.navyLight:o.navy,color:n?o.muted:"#fff",border:"none",borderRadius:10,fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.9rem",cursor:n?"not-allowed":"pointer",letterSpacing:.5,boxShadow:n?"none":`0 4px 16px ${o.navy}40`,transition:"all .2s"},children:n?"⟳  Analizando...":"✦  Evaluar & Optimizar"}),a&&e.jsxs("span",{style:{fontSize:"0.78rem",color:o.muted},children:[a.split(/\s+/).filter(Boolean).length," palabras"]})]})]}),c&&e.jsxs("div",{style:{background:o.redLight,border:`1px solid ${o.red}40`,borderRadius:12,padding:"1rem 1.4rem",color:o.red,fontSize:"0.85rem"},children:["⚠ ",c]}),n&&e.jsxs("div",{style:{textAlign:"center",padding:"2.5rem",color:o.muted},children:[e.jsx("div",{style:{display:"inline-block",width:40,height:40,border:`3px solid ${o.border}`,borderTopColor:o.navy,borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),e.jsx("p",{style:{marginTop:14,fontSize:"0.85rem"},children:"Claude está analizando tu prompt en profundidad..."})]}),r&&e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Puntuación por dimensión"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"1.2rem",alignItems:"center"},children:[e.jsx(oe,{score:r.total_score}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1.2rem",justifyContent:"center"},children:$.map(l=>{const x=l.val/l.max,h=x>=.75?o.green:x>=.5?o.amber:o.red;return e.jsx(ee,{score:l.val,maxScore:l.max,label:l.label,color:h},l.key)})})]}),r.short_explanation&&e.jsx("div",{style:{marginTop:"1.2rem",background:o.navyLight,borderLeft:`3px solid ${o.navy}`,borderRadius:"0 8px 8px 0",padding:"10px 16px",fontSize:"0.85rem",color:o.navy,lineHeight:1.7},children:r.short_explanation})]}),e.jsxs(p,{children:[e.jsx(u,{children:"Diagnóstico detallado"}),[{k:"persona",l:"Persona / Rol"},{k:"task",l:"Tarea"},{k:"context",l:"Contexto"},{k:"constraints",l:"Restricciones"},{k:"clarity",l:"Claridad"}].map(({k:l,l:x})=>{var k,M;const h=(k=r.diagnosis)==null?void 0:k[l],N=((M=r.scores)==null?void 0:M[l])||0,z=N/(l==="persona"||l==="task"?25:l==="context"?20:15),y=z>=.75?o.green:z>=.5?o.amber:o.red;return h?e.jsxs("div",{style:{display:"flex",gap:12,background:o.surface,borderRadius:10,padding:"10px 14px",marginBottom:8},children:[e.jsx("div",{style:{minWidth:36,height:36,borderRadius:"50%",background:`${y}18`,border:`2px solid ${y}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900,color:y,flexShrink:0},children:N}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:800,color:y,marginBottom:3,textTransform:"uppercase",letterSpacing:1},children:x}),e.jsx("div",{style:{fontSize:"0.83rem",color:o.text,lineHeight:1.6},children:h})]})]},l):null})]}),((P=r.improvements)==null?void 0:P.length)>0&&e.jsxs(p,{children:[e.jsx(u,{children:"Sugerencias de mejora"}),r.improvements.map((l,x)=>e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10},children:[e.jsx("span",{style:{minWidth:26,height:26,borderRadius:6,background:o.navyLight,color:o.navy,fontWeight:800,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:x+1}),e.jsx("span",{style:{fontSize:"0.84rem",color:o.text,lineHeight:1.6},children:l})]},x))]}),r.improved_prompt&&e.jsxs(p,{accent:o.navy,style:{background:`${o.navy}05`},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[e.jsx(u,{color:o.navy,children:"✦ Prompt optimizado — listo para usar"}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(r.improved_prompt)},style:{background:o.blueLight,border:`1px solid ${o.blue}40`,color:o.blue,borderRadius:8,padding:"8px 16px",fontSize:12,cursor:"pointer",fontWeight:700},children:"⧉ Copiar prompt"})]}),e.jsx("pre",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.78rem",color:o.text,whiteSpace:"pre-wrap",margin:0,lineHeight:1.85,background:o.surface,borderRadius:10,padding:"1.2rem",border:`1px solid ${o.border}`},children:r.improved_prompt})]}),r.improved_prompt&&e.jsxs(p,{children:[e.jsx(u,{children:"Comparación de respuestas en tiempo real"}),e.jsx("p",{style:{fontSize:"0.82rem",color:o.muted,margin:"0 0 1rem"},children:"Ve la diferencia concreta: el modelo con el prompt original vs. con el prompt optimizado. Es la forma más rápida de entender el impacto de una instrucción bien estructurada."}),e.jsx("button",{onClick:U,disabled:g,style:{padding:"11px 24px",background:"transparent",border:`1.5px solid ${o.sky}`,color:o.sky,borderRadius:10,fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"0.85rem",cursor:g?"not-allowed":"pointer",transition:"all .2s"},onMouseEnter:l=>{g||(l.currentTarget.style.background=o.skyLight)},onMouseLeave:l=>{l.currentTarget.style.background="transparent"},children:g?"⟳  Generando ambas respuestas...":"⟳  Generar & comparar respuestas"}),(j||R)&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginTop:"1.2rem"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:800,color:o.red,textTransform:"uppercase",letterSpacing:1,marginBottom:8},children:"← Respuesta con prompt original"}),e.jsx("div",{style:{background:o.redLight,borderRadius:10,padding:"12px 14px",fontSize:"0.82rem",color:o.text,lineHeight:1.75,minHeight:80,border:`1px solid ${o.red}20`},children:j})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:800,color:o.green,textTransform:"uppercase",letterSpacing:1,marginBottom:8},children:"✦ Respuesta con prompt optimizado →"}),e.jsx("div",{style:{background:o.greenLight,borderRadius:10,padding:"12px 14px",fontSize:"0.82rem",color:o.text,lineHeight:1.75,minHeight:80,border:`1px solid ${o.green}30`},children:R})]})]})]})]})]})}function ne({p:a}){const[i,n]=m.useState(!1),[s,r]=m.useState(!1),t=F[a.cat]||{color:o.blue,light:o.blueLight},c=()=>{navigator.clipboard.writeText(a.prompt),n(!0),setTimeout(()=>n(!1),1800)};return e.jsxs("div",{style:{background:o.card,border:`1px solid ${o.border}`,borderRadius:14,overflow:"hidden",boxShadow:o.shadow,transition:"all .2s"},onMouseEnter:d=>{d.currentTarget.style.boxShadow=o.shadowLg,d.currentTarget.style.borderColor=t.color,d.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:d=>{d.currentTarget.style.boxShadow=o.shadow,d.currentTarget.style.borderColor=o.border,d.currentTarget.style.transform="translateY(0)"},children:[e.jsxs("div",{style:{padding:"1.2rem 1.4rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},children:[e.jsx("div",{style:{width:44,height:44,borderRadius:12,background:t.light,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0},children:a.icon}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"0.92rem",color:o.text,lineHeight:1.3,marginBottom:4},children:a.title}),e.jsx(Z,{color:t.color,bg:t.light,children:a.cat})]})]}),e.jsx("p",{style:{fontSize:"0.8rem",color:o.muted,margin:"0 0 1rem",lineHeight:1.5},children:a.desc}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{onClick:()=>r(!s),style:{flex:1,background:"transparent",border:`1px solid ${o.border}`,color:o.muted,borderRadius:8,padding:"7px 12px",fontSize:12,cursor:"pointer",transition:"all .15s"},onMouseEnter:d=>{d.currentTarget.style.borderColor=t.color,d.currentTarget.style.color=t.color},onMouseLeave:d=>{d.currentTarget.style.borderColor=o.border,d.currentTarget.style.color=o.muted},children:s?"▲ Ocultar":"▼ Ver prompt"}),e.jsx("button",{onClick:c,style:{flex:1,background:i?o.greenLight:t.light,border:`1px solid ${i?o.green:t.color}40`,color:i?o.green:t.color,borderRadius:8,padding:"7px 12px",fontSize:12,cursor:"pointer",fontWeight:700,transition:"all .2s"},children:i?"✓ Copiado":"⧉ Copiar"})]})]}),s&&e.jsx("div",{style:{background:o.surface,borderTop:`1px solid ${o.border}`,padding:"1rem 1.4rem"},children:e.jsx("pre",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.73rem",color:o.text,whiteSpace:"pre-wrap",margin:0,lineHeight:1.8},children:a.prompt})})]})}function se(){const[a,i]=m.useState("Todas"),[n,s]=m.useState(""),r=Q.filter(t=>(a==="Todas"||t.cat===a)&&(n===""||t.title.toLowerCase().includes(n.toLowerCase())||t.desc.toLowerCase().includes(n.toLowerCase())));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.4rem"},children:[e.jsx(p,{children:e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[e.jsx("input",{value:n,onChange:t=>s(t.target.value),placeholder:"🔍  Buscar prompts...",style:{flex:"1 1 200px",minWidth:160,background:o.surface,border:`1px solid ${o.border}`,borderRadius:8,padding:"9px 14px",color:o.text,fontSize:"0.85rem",outline:"none"},onFocus:t=>t.target.style.borderColor=o.navy,onBlur:t=>t.target.style.borderColor=o.border}),e.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:K.map(t=>{const c=F[t]||{color:o.navy,light:o.navyLight},d=a===t;return e.jsx("button",{onClick:()=>i(t),style:{padding:"7px 14px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",background:d?t==="Todas"?o.navyLight:c.light:"transparent",border:`1px solid ${d?t==="Todas"?o.navy:c.color:o.border}`,color:d?t==="Todas"?o.navy:c.color:o.muted,transition:"all .15s"},children:t==="Todas"?"Todas":c.icon+" "+t},t)})})]})}),e.jsxs("div",{style:{fontSize:"0.8rem",color:o.muted},children:[r.length," prompt",r.length!==1?"s":""," — diseñados para uso profesional e institucional"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:"1rem"},children:r.map(t=>e.jsx(ne,{p:t},t.id))}),r.length===0&&e.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:o.muted},children:[e.jsx("div",{style:{fontSize:40,marginBottom:12},children:"🔍"}),e.jsx("p",{children:"No se encontraron prompts con ese filtro."})]})]})}const le=[{icon:"👤",title:"Persona / Rol",max:25,color:o.navy,desc:"Define quién debe ser el modelo. Un rol cambia el tono, la profundidad y el razonamiento. Sin rol, el modelo responde como 'asistente genérico'.",bad:"Dame consejos financieros.",good:"Actúa como un director financiero con 15 años de experiencia en empresas del sector público y privado en América Latina."},{icon:"🎯",title:"Tarea / Objetivo",max:25,color:o.blue,desc:"Usa verbos de acción exactos. 'Analiza', 'redacta', 'clasifica', 'resume' son mejores que 'dime cosas sobre...'",bad:"Explícame cosas sobre los contratos.",good:"Tu tarea es identificar y explicar las 5 cláusulas de mayor riesgo en el contrato adjunto, indicando su impacto potencial y cómo renegociarlas."},{icon:"📋",title:"Contexto",max:20,color:o.purple,desc:"Sin contexto, el modelo 'adivina' y puede alucinar. Incluye: quién eres, para qué es la respuesta, cuál es la situación.",bad:"Analiza estos datos.",good:"Contexto: soy auditor de la CGR revisando la ejecución presupuestaria del Ministerio de Obras Públicas para el período 2023-2024. Los datos corresponden al subprograma de mantenimiento vial."},{icon:"⚙️",title:"Restricciones",max:15,color:o.green,desc:"Especifica formato, longitud, idioma, tono, pasos o estructura del output. Las restricciones hacen los resultados predecibles y reutilizables.",bad:"Haz un resumen del informe.",good:"Restricciones: responde en español formal, máximo 400 palabras, formato tabla para los hallazgos (Área | Hallazgo | Riesgo | Recomendación), tono técnico-ejecutivo."},{icon:"✏️",title:"Claridad",max:15,color:o.teal,desc:"Lenguaje directo, sin ambigüedades. Evita negaciones dobles, términos vagos ('algo', 'cosas'), e instrucciones contradictorias.",bad:"Haz algo útil con esto y sé breve pero también exhaustivo.",good:"Genera un dictamen jurídico de 2 páginas sobre la procedencia legal de la Licitación No. 2024-LY-000002 según la Ley de Contratación Pública N°9986. Un párrafo por punto consultado."}];function de(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.4rem"},children:[e.jsxs(p,{children:[e.jsx(u,{children:"Los 5 pilares de un prompt efectivo — con ejemplos reales"}),e.jsx("p",{style:{fontSize:"0.84rem",color:o.muted,margin:"0 0 1.4rem",lineHeight:1.7},children:"Cada pilar incluye un ejemplo concreto de prompt débil vs. bien estructurado para que veas la diferencia práctica. El evaluador califica exactamente estas 5 dimensiones."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:le.map(a=>e.jsxs("div",{style:{background:o.surface,borderRadius:12,padding:"1.2rem 1.4rem",border:`1px solid ${o.border}`},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[e.jsx("div",{style:{width:42,height:42,borderRadius:10,background:`${a.color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0},children:a.icon}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:o.text},children:a.title}),e.jsxs("div",{style:{fontSize:11,color:a.color,fontWeight:700},children:["Máx. ",a.max," pts · ",a.max>=25?"Crítico":"Importante"]})]})]}),e.jsx("p",{style:{fontSize:"0.82rem",color:o.muted,margin:"0 0 1rem",lineHeight:1.6},children:a.desc}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[e.jsxs("div",{style:{background:o.redLight,borderRadius:8,padding:"10px 12px",borderLeft:`3px solid ${o.red}`},children:[e.jsx("div",{style:{fontSize:10,fontWeight:800,color:o.red,textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:"✕ Sin este pilar"}),e.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.75rem",color:o.text,lineHeight:1.5},children:a.bad})]}),e.jsxs("div",{style:{background:o.greenLight,borderRadius:8,padding:"10px 12px",borderLeft:`3px solid ${o.green}`},children:[e.jsxs("div",{style:{fontSize:10,fontWeight:800,color:o.green,textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:["✓ Con ",a.title]}),e.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.75rem",color:o.text,lineHeight:1.5},children:a.good})]})]})]},a.title))})]}),e.jsxs(p,{children:[e.jsx(u,{children:"Por qué los ejemplos few-shot son tan poderosos"}),e.jsx("p",{style:{fontSize:"0.83rem",color:o.muted,margin:"0 0 1rem",lineHeight:1.7},children:"Los modelos de lenguaje aprenden del patrón de tu conversación. Incluir un ejemplo de cómo quieres que responda — aunque sea parcial — reduce drásticamente la variabilidad del output y lo alinea con tus expectativas."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[e.jsxs("div",{style:{background:o.redLight,borderRadius:8,padding:"12px 14px"},children:[e.jsx("div",{style:{fontSize:10,fontWeight:800,color:o.red,textTransform:"uppercase",letterSpacing:1,marginBottom:8},children:"✕ Sin ejemplo"}),e.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.73rem",color:o.text,lineHeight:1.6},children:'"Clasifica cada hallazgo de auditoría por severidad."'}),e.jsx("div",{style:{fontSize:11,color:o.red,marginTop:8,fontWeight:600},children:"→ El modelo inventa su propio formato. Impredecible."})]}),e.jsxs("div",{style:{background:o.greenLight,borderRadius:8,padding:"12px 14px"},children:[e.jsx("div",{style:{fontSize:10,fontWeight:800,color:o.green,textTransform:"uppercase",letterSpacing:1,marginBottom:8},children:"✓ Con ejemplo (few-shot)"}),e.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.73rem",color:o.text,lineHeight:1.6},children:`"Clasifica así:

Hallazgo: 'Falta de segregación de funciones'
Severidad: CRÍTICO
Impacto: Riesgo de fraude
Recomendación: Controles duales

Ahora clasifica estos: [lista]"`}),e.jsx("div",{style:{fontSize:11,color:o.green,marginTop:8,fontWeight:600},children:"→ Replica exactamente el formato. Consistente y predecible."})]})]})]}),e.jsxs(p,{accent:o.green,style:{background:`${o.green}05`},children:[e.jsx(u,{color:o.green,children:"Fórmula ganadora — copia y adapta"}),e.jsx("pre",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.79rem",color:o.text,lineHeight:2,margin:0,whiteSpace:"pre-wrap"},children:`[ROL]       → "Actúa como un [profesión] con [X años] de experiencia en [área]."
[TAREA]     → "Tu tarea es [verbo concreto]: [objeto específico y medible]."
[CONTEXTO]  → "Contexto: [empresa/institución], [situación], [audiencia objetivo]."
[RESTRICT.] → "Responde en [idioma], formato [tabla/bullets/párrafos],
               máximo [N palabras], tono [formal/técnico/divulgativo]."
[EJEMPLO]   → "Ejemplo de respuesta esperada:
               Pregunta: '[muestra una pregunta tipo]'
               Respuesta esperada: '[muestra el formato y nivel esperado]'"
[CIERRE]    → "Si necesitas información adicional, indícalo antes de responder."`})]}),e.jsxs(p,{children:[e.jsx(u,{children:"Errores más comunes ⚠️"}),[["Prompt demasiado vago","«Explícame algo sobre finanzas»","Sin objetivo concreto, la respuesta será genérica e inútil para cualquier decisión."],["Sin rol definido","«Dame consejos legales»","El modelo no sabe desde qué perspectiva ni nivel de profundidad responder."],["Sin contexto de audiencia","«Escribe sobre gestión de riesgos»","¿Para un directivo? ¿Para un auditor junior? ¿Para publicación? El modelo no lo sabe."],["Sin restricciones de formato","«Analiza estos estados financieros»","Sin especificar formato, recibirás prosa cuando necesitabas una tabla con ratios."],["Sin ejemplos para tareas complejas","«Genera el informe de hallazgos»","Para outputs estructurados, incluir un fragmento de ejemplo multiplica la calidad."]].map(([a,i,n])=>e.jsxs("div",{style:{background:o.surface,borderRadius:10,padding:"10px 14px",display:"flex",gap:12,marginBottom:8},children:[e.jsx("span",{style:{color:o.red,fontSize:18,flexShrink:0},children:"✕"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:700,fontSize:"0.84rem",color:o.text,marginBottom:2},children:a}),e.jsx("div",{style:{fontSize:"0.77rem",color:o.amber,fontFamily:"'JetBrains Mono',monospace",marginBottom:2},children:i}),e.jsx("div",{style:{fontSize:"0.77rem",color:o.muted},children:n})]})]},a))]})]})}const ce=[{icon:"🟤",name:"Anthropic — Prompt Engineering",desc:"Guía oficial para construir prompts efectivos con Claude.",url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",color:o.navy},{icon:"📘",name:"PromptingGuide.ai",desc:"Recurso académico y práctico de referencia mundial en prompt engineering.",url:"https://www.promptingguide.ai/",color:o.blue},{icon:"🎓",name:"Learn Prompting",desc:"Curso gratuito para aprender prompting desde cero hasta nivel experto.",url:"https://learnprompting.org/",color:o.green},{icon:"🔵",name:"OpenAI Prompt Engineering Guide",desc:"Estrategias y mejores prácticas oficiales de OpenAI.",url:"https://platform.openai.com/docs/guides/prompt-engineering",color:o.sky},{icon:"🇨🇷",name:"Contraloría General de la República",desc:"Institución fiscalizadora superior de Costa Rica. Marco normativo de referencia.",url:"https://www.cgr.go.cr/",color:o.teal},{icon:"🎨",name:"Midjourney Documentation",desc:"Documentación oficial para crear imágenes con IA mediante prompts visuales.",url:"https://docs.midjourney.com/",color:o.purple}],pe=[{icon:"🎯",title:"Evaluador con IA",desc:"Score 1-100 en 5 dimensiones, diagnóstico detallado y prompt optimizado con ejemplos few-shot incluidos.",tab:"evaluator"},{icon:"📖",title:"Guía de Prompt Engineering",desc:"Los 5 pilares con ejemplos reales de prompts débiles vs. bien estructurados. Incluye la fórmula ganadora.",tab:"guide"},{icon:"🗂️",title:"Librería de 20 Prompts",desc:"Plantillas para auditores, abogados, analistas financieros, productividad ejecutiva, escritura e imágenes.",tab:"library"}];function ue({onTabChange:a}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.6rem"},children:[e.jsxs("div",{style:{background:`linear-gradient(135deg, ${o.navy} 0%, #2a5298 100%)`,borderRadius:16,padding:"2.4rem 2.8rem",color:"#fff",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:-30,right:-30,width:200,height:200,borderRadius:"50%",background:"rgba(255,255,255,0.04)"}}),e.jsx("div",{style:{position:"absolute",bottom:-40,right:60,width:140,height:140,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}),e.jsxs("div",{style:{position:"relative",zIndex:1},children:[e.jsx("div",{style:{display:"inline-block",background:"rgba(255,255,255,0.15)",borderRadius:20,padding:"4px 14px",fontSize:11,fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"✦ PromptLab Academy"}),e.jsx("h2",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"1.8rem",fontWeight:900,margin:"0 0 14px",lineHeight:1.2,maxWidth:560},children:"Comunícate mejor con la Inteligencia Artificial y mejora tu trabajo"}),e.jsx("p",{style:{fontSize:"0.9rem",opacity:.85,lineHeight:1.8,maxWidth:560,marginBottom:22},children:"La calidad de tus resultados con IA depende directamente de la calidad de tus instrucciones. PromptLab Academy te da las herramientas prácticas para escribir prompts precisos, estructurados y efectivos — para cualquier tarea profesional, desde auditorías hasta análisis legales y financieros."}),e.jsx("button",{onClick:()=>a("evaluator"),style:{background:"#fff",color:o.navy,border:"none",borderRadius:10,padding:"12px 28px",fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.9rem",cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,0.2)"},children:"Evaluar mi primer prompt →"})]})]}),e.jsxs(p,{children:[e.jsx(u,{children:"¿Por qué importa escribir buenos prompts?"}),e.jsxs("p",{style:{fontSize:"0.85rem",color:o.text,lineHeight:1.85,marginBottom:"1rem"},children:["Los modelos de lenguaje como Claude, GPT o Gemini interpretan lenguaje de forma probabilística — no ejecutan comandos exactos, sino que ",e.jsx("strong",{children:"infieren la intención"})," detrás de tus palabras. Esto significa que el mismo objetivo, expresado de dos formas distintas, puede producir resultados radicalmente diferentes."]}),e.jsx("p",{style:{fontSize:"0.85rem",color:o.text,lineHeight:1.85,marginBottom:"1rem"},children:"En contextos institucionales — auditorías de la Contraloría, análisis jurídicos, informes financieros, minutas ejecutivas — un prompt impreciso no es solo ineficiente: puede generar outputs que requieren corrección extensa o que simplemente no cumplen los estándares requeridos."}),e.jsx("div",{style:{background:o.navyLight,borderLeft:`4px solid ${o.navy}`,borderRadius:"0 10px 10px 0",padding:"14px 18px"},children:e.jsx("p",{style:{fontSize:"0.85rem",color:o.navy,lineHeight:1.7,margin:0,fontWeight:600},children:"Un prompt bien construido es la diferencia entre 10 minutos de revisión y 2 horas de reescritura. Esta herramienta te ayuda a desarrollar ese criterio de forma práctica: evaluando tus prompts, comparando respuestas en tiempo real, y accediendo a plantillas profesionales listas para usar."})})]}),e.jsxs("div",{children:[e.jsx(u,{children:"¿Qué encontrarás aquí?"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1rem"},children:pe.map(i=>e.jsxs("div",{style:{background:o.card,border:`1px solid ${o.border}`,borderRadius:14,padding:"1.4rem",boxShadow:o.shadow,cursor:"pointer",transition:"all .2s"},onClick:()=>a(i.tab),onMouseEnter:n=>{n.currentTarget.style.borderColor=o.navy,n.currentTarget.style.transform="translateY(-2px)",n.currentTarget.style.boxShadow=o.shadowLg},onMouseLeave:n=>{n.currentTarget.style.borderColor=o.border,n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow=o.shadow},children:[e.jsx("div",{style:{fontSize:34,marginBottom:10},children:i.icon}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:o.navy,marginBottom:6},children:i.title}),e.jsx("p",{style:{fontSize:"0.8rem",color:o.muted,lineHeight:1.65,margin:"0 0 12px"},children:i.desc}),e.jsx("div",{style:{fontSize:12,color:o.blue,fontWeight:700},children:"Ir a esta sección →"})]},i.title))})]}),e.jsxs(p,{children:[e.jsx(u,{children:"📚 Recursos de referencia recomendados"}),e.jsx("p",{style:{fontSize:"0.82rem",color:o.muted,margin:"0 0 1.2rem",lineHeight:1.6},children:"Estos son los recursos más reconocidos sobre prompt engineering y los marcos institucionales de referencia. Todos abren en una nueva pestaña."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"0.9rem"},children:ce.map(i=>e.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"flex-start",gap:12,background:o.surface,border:`1px solid ${o.border}`,borderRadius:12,padding:"12px 14px",textDecoration:"none",transition:"all .2s"},onMouseEnter:n=>{n.currentTarget.style.borderColor=i.color,n.currentTarget.style.background=`${i.color}08`},onMouseLeave:n=>{n.currentTarget.style.borderColor=o.border,n.currentTarget.style.background=o.surface},children:[e.jsx("div",{style:{width:38,height:38,borderRadius:10,background:`${i.color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0},children:i.icon}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"0.85rem",color:o.text,marginBottom:3},children:i.name}),e.jsx("div",{style:{fontSize:"0.75rem",color:o.muted,lineHeight:1.5},children:i.desc}),e.jsx("div",{style:{fontSize:11,color:i.color,marginTop:5,fontWeight:600},children:"Visitar sitio ↗"})]})]},i.name))})]}),e.jsxs("div",{style:{background:o.navyLight,borderRadius:14,padding:"1.6rem 2rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,border:`1px solid ${o.blue}25`},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"1rem",color:o.navy,marginBottom:4},children:"¿Listo para mejorar tus prompts?"}),e.jsx("div",{style:{fontSize:"0.82rem",color:o.muted},children:"Comienza con el evaluador — pega cualquier prompt y recibe un análisis completo en segundos."})]}),e.jsx("button",{onClick:()=>a("evaluator"),style:{background:o.navy,color:"#fff",border:"none",borderRadius:10,padding:"12px 24px",fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.88rem",cursor:"pointer",whiteSpace:"nowrap",boxShadow:`0 4px 16px ${o.navy}40`},children:"Ir al Evaluador →"})]})]})}function me(){const[a,i]=m.useState("inicio"),n=[{id:"inicio",label:"🏠  Inicio"},{id:"guide",label:"📖  Guía"},{id:"evaluator",label:"✦  Evaluador"},{id:"library",label:"⊞  Librería"}],s={guide:{title:e.jsxs(e.Fragment,{children:["Guía de ",e.jsx("span",{style:{color:"#7dd3fc"},children:"Prompt Engineering"})]}),sub:"Los 5 pilares con ejemplos reales, errores comunes, técnica few-shot y la fórmula ganadora."},evaluator:{title:e.jsxs(e.Fragment,{children:["Evaluador & ",e.jsx("span",{style:{color:"#86efac"},children:"Optimizador"})," de Prompts"]}),sub:"Sin límite de palabras. Pega tu prompt y recibe score detallado, diagnóstico y versión mejorada lista para usar."},library:{title:e.jsxs(e.Fragment,{children:["Librería de Prompts ",e.jsx("span",{style:{color:"#fde68a"},children:"Profesionales"})]}),sub:"20 plantillas para auditores, abogados, analistas financieros, productividad, escritura e imágenes."}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${o.bg};color:${o.text};font-family:'Outfit',sans-serif;}
        ::-webkit-scrollbar{width:6px;}
        ::-webkit-scrollbar-track{background:${o.surface};}
        ::-webkit-scrollbar-thumb{background:${o.borderHi};border-radius:3px;}
        @keyframes spin{to{transform:rotate(360deg);}}
      `}),e.jsxs("div",{style:{minHeight:"100vh",background:o.bg},children:[e.jsx("div",{style:{background:o.card,borderBottom:`1px solid ${o.border}`,boxShadow:"0 1px 8px rgba(30,57,104,0.07)",padding:"0 2rem",position:"sticky",top:0,zIndex:100},children:e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{style:{width:38,height:38,borderRadius:10,background:o.navy,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#fff",boxShadow:`0 2px 12px ${o.navy}50`},children:"✦"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"1.05rem",color:o.navy,letterSpacing:-.3},children:"PromptLab Academy"}),e.jsx("div",{style:{fontSize:9,color:o.muted,letterSpacing:2.5,textTransform:"uppercase"},children:"Powered by Claude API"})]})]}),e.jsx("nav",{style:{display:"flex",gap:3},children:n.map(r=>e.jsx("button",{onClick:()=>i(r.id),style:{padding:"8px 16px",background:a===r.id?o.navyLight:"transparent",border:`1px solid ${a===r.id?o.navy:"transparent"}`,color:a===r.id?o.navy:o.muted,borderRadius:8,fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:"0.82rem",cursor:"pointer",transition:"all .15s"},children:r.label},r.id))})]})}),a!=="inicio"&&s[a]&&e.jsx("div",{style:{background:o.navy,padding:"1.5rem 2rem"},children:e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsx("h1",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"1.4rem",fontWeight:900,color:"#fff",marginBottom:6},children:s[a].title}),e.jsx("p",{style:{fontSize:"0.82rem",color:"rgba(255,255,255,0.62)",lineHeight:1.5},children:s[a].sub})]})}),e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"2rem"},children:[a==="inicio"&&e.jsx(ue,{onTabChange:i}),a==="guide"&&e.jsx(de,{}),a==="evaluator"&&e.jsx(te,{}),a==="library"&&e.jsx(se,{})]}),e.jsx("div",{style:{borderTop:`1px solid ${o.border}`,background:o.card,padding:"1.2rem 2rem",textAlign:"center"},children:e.jsxs("span",{style:{fontSize:"0.75rem",color:o.muted},children:["PromptLab Academy · Powered by Claude API · ",new Date().getFullYear()," · Para uso profesional e institucional"]})})]})]})}E.createRoot(document.getElementById("root")).render(e.jsx(W.StrictMode,{children:e.jsx(me,{})}));
