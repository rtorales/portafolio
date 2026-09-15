/* =========================================================================
   Terminales Interurbanas de Asunción — lógica del sitio
   Todos los datos provienen del proyecto de titulación y sus 14 anexos.
   ========================================================================= */
(function () {
  "use strict";

  var nf = new Intl.NumberFormat("es-PY");
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var el = function (t, a, h) {
    var n = document.createElement(t);
    if (a) for (var k in a) { if (k === "class") n.className = a[k]; else n.setAttribute(k, a[k]); }
    if (h != null) n.innerHTML = h;
    return n;
  };
  var SVGNS = "http://www.w3.org/2000/svg";
  var svg = function (t, a) {
    var n = document.createElementNS(SVGNS, t);
    if (a) for (var k in a) n.setAttribute(k, a[k]);
    return n;
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var usd = function (v) { return "USD " + nf.format(v); };

  /* =====================================================================
     1. DATOS
     ===================================================================== */

  var CORREDORES = [
    {
      n: 1, acceso: "Av. Artigas", ruta: "Corredor norte · Ruta PY03",
      muni: ["Limpio", "Mariano R. Alonso"],
      muniFull: "Limpio · Mariano Roque Alonso",
      node: [350, 130], lane: "M235,330 Q 272,212 350,130", out: "M350,130 L 404,74",
      lbl: [414, 62],
      rol: "Intercepta el flujo del corredor norte antes de su ingreso al eje Artigas–Centro, el de mayor carga de transporte de carga y de viajes pendulares del norte del AMA."
    },
    {
      n: 2, acceso: "Av. Aviadores del Chaco / Ñu Guazú", ruta: "Corredor noreste",
      muni: ["Luque", "Mariano R. Alonso"],
      muniFull: "Luque · Mariano Roque Alonso",
      node: [455, 228], lane: "M235,330 Q 330,266 455,228", out: "M455,228 L 545,196",
      lbl: [556, 190],
      rol: "Capta los viajes desde Luque y el entorno del aeropuerto, uno de los corredores de crecimiento más acelerado del área metropolitana."
    },
    {
      n: 3, acceso: "Av. Mcal. López", ruta: "Corredor este",
      muni: ["Fernando de la Mora", "San Lorenzo"],
      muniFull: "Fernando de la Mora · San Lorenzo",
      node: [487, 332], lane: "M235,330 Q 350,324 487,332", out: "M487,332 L 585,334",
      lbl: [596, 328],
      rol: "Corredor de acceso directo al microcentro y a la zona institucional; concentra viajes de trabajo con horario fijo, los de mayor sensibilidad al tiempo."
    },
    {
      n: 4, acceso: "Av. Eusebio Ayala", ruta: "Corredor sureste · Ruta PY02",
      muni: ["San Lorenzo", "Capiatá · Itauguá"],
      muniFull: "San Lorenzo · Capiatá · Itauguá",
      node: [455, 432], lane: "M235,330 Q 336,392 455,432", out: "M455,432 L 545,468",
      lbl: [556, 474],
      rol: "Eje de mayor flujo pendular del AMA: recoge la demanda de los municipios más poblados del este, sobre la ruta troncal hacia el interior del país."
    },
    {
      n: 5, acceso: "Acceso Sur", ruta: "Corredor sur",
      muni: ["Ñemby", "Villa Elisa · San Antonio"],
      muniFull: "Ñemby · Villa Elisa · San Antonio",
      node: [352, 512], lane: "M235,330 Q 276,446 352,512", out: "M352,512 L 408,568",
      lbl: [418, 578],
      rol: "Intercepta el corredor sur, donde la conurbación reciente se produjo sin oferta de transporte público estructurado."
    }
  ];

  var TERMINAL_TIPO = [
    ["Plazas de estacionamiento", "≈ 200 por terminal (1.000 en la red)"],
    ["Bahías de buses", "4 por terminal"],
    ["Servicios", "Sanitarios, área comercial, sala de espera techada y climatizada"],
    ["Seguridad", "CCTV, iluminación eficiente y vigilancia 24/7"],
    ["Tecnología", "Cobro electrónico integrado, paneles de información en tiempo real"],
    ["Conexión", "1 ruta de bus lanzadera de alta frecuencia hacia el centro"]
  ];

  var PROBLEMA = {
    causasDirectas: [
      "Excesivo uso del automóvil particular para ingresar a Asunción",
      "Oferta de transporte público metropolitano deficiente y no integrada",
      "Ausencia de infraestructura intermodal (Park and Ride)",
      "Infraestructura vial saturada en los accesos"
    ],
    causasIndirectas: [
      "Baja ocupación vehicular (~1,2 personas por auto)",
      "Crecimiento urbano desordenado del AMA sin planificación de movilidad",
      "Falta de incentivos para el cambio modal",
      "Débil coordinación interinstitucional en transporte metropolitano"
    ],
    efectos: [
      "Pérdida de tiempo y de productividad",
      "Mayor contaminación y emisiones de CO₂",
      "Aumento de accidentes e inseguridad vial",
      "Deterioro de la calidad de vida urbana",
      "Sobrecostos económicos y logísticos"
    ]
  };

  var DIAGNOSTICO = [
    { v: "600.000", u: "vehículos/día", d: "ingresan a Asunción por los accesos principales", f: "MOPC, 2024" },
    { v: "1,3–1,5 M", u: "personas/día", d: "llegan a una capital de ~500.000 residentes", f: "MOPC, 2024; Banco Mundial, 2025" },
    { v: "< 7 %", u: "reparto modal", d: "del transporte público en el AMA, frente a 78 % en auto o moto", f: "Banco Mundial, 2025" },
    { v: "~15 km/h", u: "velocidad media", d: "en las avenidas de ingreso durante la hora pico", f: "MOPC; Última Hora, 2021" },
    { v: "~1,2", u: "personas por auto", d: "sobre 5 plazas disponibles: ~2 millones de asientos vacíos al día", f: "Economía Virtual, 2020" },
    { v: "~8 M", u: "viajes diarios", d: "se producen en el Área Metropolitana en un día hábil", f: "Banco Mundial, 2025" }
  ];

  var ALTERNATIVAS = [
    { n: 1, t: "No hacer nada", sub: "Escenario tendencial", sel: false,
      d: "La demanda sigue creciendo sobre una red que ya opera saturada. Riesgo de colapso vial en el mediano plazo." },
    { n: 2, t: "Más infraestructura vial", sub: "Carriles adicionales, viaductos", sel: false,
      d: "Costosa, lenta y con expropiaciones. Genera demanda inducida: más vías atraen más autos y reconstituyen la congestión. No desincentiva el automóvil, lo premia." },
    { n: 3, t: "BRT o tren de cercanías", sub: "Transporte masivo segregado", sel: false,
      d: "Costos y plazos de otro orden de magnitud (cientos de millones, 5 a 10 años). No es excluyente: las terminales pueden alimentar un futuro BRT." },
    { n: 4, t: "Medidas punitivas de demanda", sub: "Peaje urbano, pico y placa", sel: false,
      d: "Castigan al usuario sin ofrecerle alternativa y exigen un consenso social que hoy no existe. Pueden ser complementarias después, no antes." },
    { n: 5, t: "Terminales Park and Ride", sub: "Alternativa seleccionada", sel: true,
      d: "Ataca la causa directa —el exceso de autos— ofreciendo una alternativa en lugar de solo restringir o solo expandir. Costo y plazo moderados, escalable por fases y complementaria de las demás." }
  ];

  var MDR = [
    { id: "R1", t: "Reducción del flujo vehicular de ingreso en hora pico",
      ind: "N.º de vehículos particulares que ingresan por los principales accesos (promedio día hábil)",
      base: "~600.000 veh./día (2023)", meta: "−20 % (≈120.000 menos)",
      mv: "Conteos de tráfico en accesos; datos de movilidad (GPS); registros de SETAMA",
      sup: "Los conductores adoptan el sistema al percibir beneficio en tiempo y costo." },
    { id: "R2", t: "Mejora de la movilidad y los tiempos de viaje del AMA",
      ind: "Tiempo promedio de viaje en transporte público hacia Asunción (minutos)",
      base: "~90 min (peor escenario en bus, hora pico)", meta: "≤ 60 min (−30 %)",
      mv: "Mediciones en trayectos representativos; encuestas de movilidad",
      sup: "Se concretan los carriles exclusivos y la prioridad a los buses lanzadera." },
    { id: "R3", t: "Aumento del uso del transporte público integrado",
      ind: "Pasajeros diarios transportados en buses expreso desde las 5 terminales",
      base: "0 — el servicio no existe", meta: "≥ 10.000 pax/día al 1.er año",
      mv: "Registros de pasajeros y validaciones del sistema ITS",
      sup: "Se implementan tarifas atractivas e incentivos suficientes." },
    { id: "R4", t: "Disminución de la contaminación ambiental urbana",
      ind: "Emisiones estimadas de CO₂ del tránsito vehicular en los corredores",
      base: "Sin cifra oficial desagregada; se estima sobre el INGEI (MADES, 2021)", meta: "−15 % de las emisiones atribuibles al transporte",
      mv: "Estimación a partir de la reducción de vehículos y la renovación de flota",
      sup: "La reducción de vehículos se traduce en menos emisiones; buses Euro V o superiores." }
  ];

  var PRESUPUESTO = [
    { k: "Obras civiles", v: 18000000, p: 66, d: "5 terminales ≈ USD 3,5 M cada una, más obras menores de acceso" },
    { k: "Flota de buses", v: 4200000, p: 15, d: "30 unidades de ~40 pasajeros, Euro V o eléctricas, ≈ USD 140.000 c/u" },
    { k: "Sistemas ITS", v: 1500000, p: 6, d: "Cobro electrónico, CCTV, información al usuario y plataforma de gestión" },
    { k: "Reserva de contingencia", v: 2500000, p: 9, d: "≈ 10 % para riesgos identificados, gestionada por el Gerente del Proyecto" },
    { k: "Gestión, capacitación y comunicación", v: 1000000, p: 4, d: "Equipo propio de la Unidad Ejecutora, capacitación y campaña de cambio modal" }
  ];

  var FINANCIACION = [
    { k: "BID / organismos financiadores", v: 13600000, p: 50 },
    { k: "Gobierno Central (MOPC / FONPLATA)", v: 8200000, p: 30 },
    { k: "Municipalidad de Asunción y Gobernación de Central", v: 5400000, p: 20 }
  ];

  var FASES = [
    { id: "Fase 1", t: "Planificación y diseños", m0: 1, m1: 6, cal: "jul – dic 2027",
      d: "Estudios de tráfico y demanda, evaluación multicriterio de sitios, licencia ambiental y paquete de diseño listo para licitación." },
    { id: "Fase 2", t: "Adquisiciones y preparativos", m0: 4, m1: 9, cal: "oct 2027 – mar 2028",
      d: "Empaquetamiento en 2 lotes de obra, pliegos, licitaciones y pedido de la flota. Se solapa con la Fase 1 (fast-tracking)." },
    { id: "Fase 3", t: "Ejecución de obras civiles", m0: 7, m1: 18, cal: "ene – dic 2028",
      d: "Construcción en dos oleadas: Lote 1 (3 terminales) y Lote 2 (2 terminales), con supervisión técnica independiente." },
    { id: "Fase 4", t: "Sistemas y pruebas", m0: 15, m1: 20, cal: "sep 2028 – feb 2029",
      d: "Instalación del equipamiento ITS, integración tarifaria, pruebas por componente y prueba piloto integral." },
    { id: "Fase 5", t: "Operación inicial y cierre", m0: 21, m1: 24, cal: "mar – jun 2029",
      d: "Lanzamiento público, operación acompañada con medición de indicadores, transferencia y cierre administrativo." }
  ];

  var HITOS = [
    ["jul 2027", "Acta de inicio y taller de arranque (kick-off)"],
    ["dic 2027", "Diseños aprobados, licencias obtenidas y Lote 1 de obra adjudicado"],
    ["mar 2028", "Contratos principales adjudicados: Lote 2 y sistemas ITS"],
    ["sep 2028", "Terminales 1 a 3 terminadas y flota de 30 buses recibida"],
    ["nov 2028", "Prueba piloto integral completada en las terminales del Lote 1"],
    ["dic 2028", "Terminales 4 y 5 terminadas: los 5 accesos habilitados"],
    ["mar 2029", "Lanzamiento público del sistema"],
    ["jun 2029", "Operación plena (10.000 pax/día) y cierre del proyecto"]
  ];

  var CURVA_S = {
    labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"],
    cal: ["jul–sep 27", "oct–dic 27", "ene–mar 28", "abr–jun 28", "jul–sep 28", "oct–dic 28", "ene–mar 29", "abr–jun 29"],
    pv: [1088000, 3264000, 8160000, 14688000, 19584000, 22304000, 25296000, 27200000],
    ac: [850000, 3120000, 7950000, 14010000]
  };

  var EVM = {
    labels: ["jul-27", "ago-27", "sep-27", "oct-27", "nov-27", "dic-27", "ene-28", "feb-28", "mar-28", "abr-28", "may-28", "jun-28"],
    pv: [272000, 544000, 1088000, 1632000, 2448000, 3264000, 4624000, 6256000, 8160000, 10336000, 12512000, 14688000],
    ev: [272000, 544000, 816000, 1360000, 2176000, 2992000, 4080000, 5712000, 7616000, 9520000, 11696000, 13600000],
    ac: [280000, 560000, 850000, 1420000, 2270000, 3120000, 4260000, 5960000, 7950000, 9940000, 12210000, 14010000]
  };

  var EVM_KPI = [
    ["CPI", "0,97", "Índice de desempeño del costo (EV/AC): leve sobrecosto", "warn"],
    ["SPI", "0,93", "Índice de desempeño del cronograma (EV/PV): leve atraso", "warn"],
    ["EAC", "USD 28,02 M", "Estimación a la conclusión (BAC/CPI)", "n"],
    ["VAC", "−USD 0,82 M", "Desvío final proyectado, cubierto por la contingencia de 2,5 M", "n"]
  ];

  var RIESGOS = [
    { id: "R1", t: "Resistencia al cambio de hábito del conductor", tipo: "Social / Demanda", p: 3, i: 3, sev: "Alto",
      cons: "Baja demanda: no se alcanzan los 10.000 pasajeros/día ni la reducción esperada de congestión.",
      sint: "Baja ocupación de estacionamientos y buses durante la operación piloto.",
      resp: "Campaña de sensibilización (meta > 70 % de conocimiento), tarifa integrada atractiva y seguridad garantizada.", own: "Esp. de Comunicaciones" },
    { id: "R2", t: "Demoras en permisos y cesión de terrenos municipales", tipo: "Cronograma", p: 2, i: 3, sev: "Alto",
      cons: "Atraso del cronograma de 24 meses y postergación del lanzamiento de marzo de 2029.",
      sint: "Permisos u ordenanzas municipales pendientes al inicio de cada lote de obra.",
      resp: "Convenios intermunicipales tempranos, contratación anticipada y obras en 2 lotes simultáneos.", own: "Gerente del Proyecto" },
    { id: "R3", t: "Demanda menor a la prevista en los primeros años", tipo: "Financiero", p: 2, i: 3, sev: "Alto",
      cons: "Costos de operación y mantenimiento superiores a los ingresos por tarifa.",
      sint: "Ingresos tarifarios por debajo del punto de equilibrio en la operación piloto.",
      resp: "Reserva de contingencia (~10 %), subsidios iniciales del Gobierno y revisión del modelo tarifario.", own: "Esp. Financiero" },
    { id: "R4", t: "Pocos oferentes calificados en el mercado local", tipo: "Adquisiciones", p: 2, i: 2, sev: "Medio",
      cons: "Licitaciones desiertas o precios superiores al presupuesto.",
      sint: "Pocas consultas o compras de pliegos durante la convocatoria.",
      resp: "Market sounding previo, pliegos sin requisitos excesivos y licitación internacional para los lotes mayores.", own: "Esp. de Adquisiciones" },
    { id: "R5", t: "Impugnaciones o demoras en la adjudicación", tipo: "Legal", p: 2, i: 2, sev: "Medio",
      cons: "Retraso del inicio de obras y de la entrega de los 30 buses.",
      sint: "Protestas u observaciones formales durante la evaluación de ofertas.",
      resp: "Cumplimiento estricto de procedimientos, revisión previa de pliegos y seguimiento con la UOC.", own: "Esp. de Adquisiciones" },
    { id: "R6", t: "Incremento de precios de materiales y combustible", tipo: "Costos", p: 2, i: 2, sev: "Medio",
      cons: "Sobrecosto de las obras y presión sobre el presupuesto total.",
      sint: "Índices de precios de la construcción en alza; reclamos de reajuste de contratistas.",
      resp: "Reserva de contingencia de USD 2,5 M y contratos a precio global fijo por lote.", own: "Esp. Financiero" },
    { id: "R7", t: "Eventos climáticos extraordinarios en la construcción", tipo: "Externo / Ambiental", p: 1, i: 3, sev: "Medio",
      cons: "Paralización temporal de frentes de obra y daños a materiales.",
      sint: "Alertas meteorológicas y anegamiento de los sitios de obra.",
      resp: "Buffer de cronograma, programación fuera de temporada lluviosa y diseño resiliente.", own: "Gerente del Proyecto" },
    { id: "R8", t: "Molestias de obra en barrios aledaños", tipo: "Social", p: 2, i: 2, sev: "Medio",
      cons: "Protestas y suspensiones temporales de los frentes de obra.",
      sint: "Quejas vecinales crecientes y conflictos en las reuniones comunitarias.",
      resp: "Enlace comunitario permanente, canal de quejas y comunicación anticipada del calendario de obras.", own: "Esp. de Comunicaciones" },
    { id: "R9", t: "Incompatibilidad del ITS con el billetaje metropolitano", tipo: "Tecnológico", p: 2, i: 2, sev: "Medio",
      cons: "Pago no integrado: se pierde el atractivo de la tarifa única.",
      sint: "Errores de validación en las pruebas de integración del piloto.",
      resp: "Proveedor tecnológico involucrado desde el diseño y pruebas de integración tempranas.", own: "Esp. Técnico" }
  ];

  var INTERESADOS = [
    { n: "MOPC — Ministerio de Obras Públicas y Comunicaciones", tipo: "Interno · entidad ejecutora principal", int: "Alto", inf: "Alto",
      obj: "Aprobación y supervisión de diseños, ejecución de obras y transferencia final de activos.",
      est: "Reuniones mensuales con la Dirección de Infraestructura y la UOC; avances con indicadores claros." },
    { n: "SETAMA — Secretaría de Transporte del AMA", tipo: "Interno · regulador de transporte", int: "Alto", inf: "Alto",
      obj: "Aprobación de la integración del sistema ITS: tarifas, monitoreo y frecuencias.",
      est: "Integrarla al comité técnico; reportes de interoperabilidad y talleres demostrativos." },
    { n: "Municipalidad de Asunción y municipios del AMA", tipo: "Interno · copatrocinadores", int: "Alto", inf: "Alto",
      obj: "Habilitación de predios y permisos; aporte del 20 % de la financiación (USD 5,4 M).",
      est: "Convenios intermunicipales formales, participación en el Comité Directivo y agenda con las intendencias." },
    { n: "BID / organismos financiadores", tipo: "Externo · financiador del 50 %", int: "Alto", inf: "Alto",
      obj: "Ejecución del préstamo conforme a salvaguardas, normas de adquisición y resultados (enfoque PM4R).",
      est: "Informes trimestrales físico-financieros, misiones de supervisión y cumplimiento de salvaguardas." },
    { n: "Comunidad local y usuarios del transporte", tipo: "Externo · beneficiarios directos", int: "Alto", inf: "Medio",
      obj: "Reducción de tiempos de viaje, comodidad, seguridad y accesibilidad.",
      est: "Plan de comunicación social, consultas y encuestas de satisfacción durante y después del proyecto." },
    { n: "Operadores de transporte público", tipo: "Externo · futuros operadores de la flota", int: "Alto", inf: "Medio",
      obj: "Operación rentable de los 30 buses y de los servicios entre terminales y centro.",
      est: "Mesas de trabajo tempranas, contratos con incentivos y capacitación." },
    { n: "Contratistas y empresas proveedoras", tipo: "Externo · ejecutores de obra y tecnología", int: "Alto", inf: "Alto",
      obj: "Cumplimiento de plazos, calidad de obras y entrega de sistemas tecnológicos.",
      est: "Monitoreo de desempeño, cláusulas de incentivos y penalizaciones efectivas." }
  ];

  var QFD_REQ = [
    ["Reducción del tiempo de viaje diario", 5],
    ["Acceso rápido y seguro a las terminales", 5],
    ["Seguridad 24/7 en terminales y estacionamientos", 5],
    ["Frecuencia alta de buses lanzadera", 5],
    ["Tarifas integradas y accesibles (parking + bus)", 4],
    ["Comodidad y limpieza en buses y terminales", 4],
    ["Información en tiempo real (app, pantallas)", 4],
    ["Facilidad de pago (electrónico, tarjetas)", 4],
    ["Atención y servicio al usuario eficientes", 4],
    ["Impacto ambiental reducido (vehículos eco)", 3]
  ];

  var QFD_TEC = [
    ["Frecuencia operativa del sistema de buses", 165, 12.52, "30 buses lanzadera; 10.000 pasajeros/día en operación plena"],
    ["Integración tarifaria y pago electrónico", 157, 11.91, "Tarifa única (parking + bus) con pago electrónico desde el lanzamiento"],
    ["Tecnología ITS (información en tiempo real)", 153, 11.61, "Información en tiempo real, app y pantallas, en toda la red"],
    ["Diseño de infraestructura vial y accesos", 151, 11.46, "5 terminales con accesos directos y carriles preferenciales"],
    ["Nivel de confort (asientos, climatización)", 137, 10.39, "Áreas de espera techadas y climatizadas, con sanitarios"],
    ["Mantenimiento y limpieza de terminales", 137, 10.39, "Manuales y plan de mantenimiento operativos desde el día 1"],
    ["Seguridad física y tecnológica (CCTV, guardias)", 123, 9.33, "CCTV e iluminación en el 100 % de las terminales; vigilancia 24/7"],
    ["Capacidad de estacionamiento (plazas)", 113, 8.57, "1.000 plazas de estacionamiento (≈200 por terminal)"],
    ["Sostenibilidad energética", 91, 6.90, "−15 % de emisiones de CO₂ en los corredores de acceso"],
    ["Atención al cliente y capacitación del personal", 91, 6.90, "100 % del personal capacitado antes de la operación piloto"]
  ];

  var EDT = [
    { c: "1", t: "Gestión del Proyecto", sub: ["Inicio del proyecto", "Planificación", "Seguimiento y control", "Cierre del proyecto"] },
    { c: "2", t: "Estudios preliminares y diagnóstico", sub: ["Análisis del contexto de movilidad", "Estudios de tráfico y demanda", "Selección y análisis de sitios", "Análisis social, ambiental y de riesgos", "Informe consolidado de diagnóstico"] },
    { c: "3", t: "Diseño de la infraestructura", sub: ["Programa arquitectónico y funcional", "Diseño arquitectónico", "Diseño estructural", "Diseño de instalaciones", "Especificaciones técnicas y metrados", "Paquete de diseño final"] },
    { c: "4", t: "Gestión de adquisiciones", sub: ["Estrategia de contratación", "Documentos de licitación", "Proceso licitatorio"] },
    { c: "5", t: "Construcción de las terminales", sub: ["Preparación del sitio", "Obra civil principal", "Instalaciones", "Terminaciones y urbanización", "Control de calidad de obra", "Obra completada"] },
    { c: "6", t: "Puesta en marcha y operación piloto", sub: ["Preparación operativa", "Capacitación", "Operación piloto", "Habilitación formal"] }
  ];

  var ADQUISICIONES = [
    ["5.1 – 5.2", "Lote 1: preparación de sitios y construcción de 3 terminales grandes", "Obras", "LPI", "ene – sep 2028", 9850000],
    ["5.1 – 5.2", "Lote 2: preparación de sitios y construcción de 2 terminales", "Obras", "LPN", "may – dic 2028", 5550000],
    ["4.3 / 6.1", "Flota de 30 buses (~USD 140 mil c/u), incluida entrega y alistamiento", "Bienes", "LPI", "mar – sep 2028", 4200000],
    ["5.3 / 6.1", "Sistemas ITS: cobro electrónico, CCTV, información al usuario y plataforma", "Bienes y servicios", "Concurso de ofertas", "mar – dic 2028", 1500000],
    ["5.3 – 5.4", "Instalaciones, terminaciones y obras menores de acceso", "Obras", "LPN", "jul – dic 2028", 1400000],
    ["3.1 – 3.6", "Diseño de las terminales: arquitectura, ingeniería y pliegos técnicos", "Consultoría", "SBCC", "sep – dic 2027", 500000],
    ["5.5", "Supervisión técnica independiente de obras", "Consultoría", "SBCC", "ene – dic 2028", 400000],
    ["2.2 – 2.5", "Estudios de tráfico, demanda y social-ambiental (licencia MADES)", "Consultoría", "SBCC", "ago – dic 2027", 300000],
    ["6.4", "Campaña de comunicación y sensibilización", "Servicios", "Comparación de precios", "dic 2028 – abr 2029", 250000],
    ["6.2", "Capacitación del personal operativo y de mantenimiento", "Servicios", "Comparación de precios", "ene – feb 2029", 100000],
    ["—", "Adquisiciones menores (mobiliario y equipamiento de la UEP)", "Bienes", "Cotizaciones", "jul 2027 – jun 2029", 50000]
  ];

  var COMUNICACIONES = [
    ["1.1", "Reunión de lanzamiento del proyecto (kick-off)", "Equipo; MOPC; municipalidades; BID", "Reunión presencial + acta", "Mes 1 · jul-2027", "Única"],
    ["1.3", "Informe de progreso mensual: avance físico-financiero, valor ganado y riesgos", "Comité Directivo y patrocinadores", "Informe PDF (curva S, semáforos) + reunión", "Mes 2 · ago-2027", "Mensual"],
    ["1.3", "Reunión de coordinación interna del equipo", "Líderes de obra, transporte y comunicaciones", "Reunión + minuta", "Mes 1 · jul-2027", "Semanal"],
    ["1.2.3 / 1.3.3", "Alertas de riesgos críticos y gestión de cambios", "Comité Directivo / Comité de Gobernanza", "Correo + reunión extraordinaria", "Mes 2 · ago-2027", "Quincenal o ante evento"],
    ["2.2 – 2.5", "Avance de estudios y licencias", "MOPC – Dirección de Infraestructura; MADES", "Informe técnico + reunión virtual", "Mes 2 · ago-2027", "Mensual"],
    ["3.6", "Presentación del paquete de diseño final", "MOPC, SETAMA, municipalidades", "Reunión presencial + planos digitales", "Mes 6 · dic-2027", "Por hito"],
    ["4.2 – 4.3", "Estado de licitaciones y adjudicaciones", "Comité de Evaluación; BID; Comité Directivo", "Informe de avance + correo", "Mes 5 · nov-2027", "Quincenal"],
    ["5.2 / 5.5", "Avance físico de obras civiles (Lotes 1 y 2)", "MOPC; supervisión; contratistas", "Reunión de obra + acta", "Mes 7 · ene-2028", "Semanal"],
    ["5.3 / 6.1", "Implementación de sistemas ITS y pago electrónico", "Proveedor tecnológico; SETAMA", "Reunión técnica + reportes de prueba", "Mes 15 · sep-2028", "Quincenal"],
    ["6.4", "Campaña y boletines a la comunidad y usuarios", "Ciudadanía; residentes; usuarios potenciales", "Boletines, redes, charlas, volantes", "Mes 4; intensiva 18-22", "Trimestral → mensual"],
    ["6.4", "Evento de lanzamiento oficial del sistema", "Autoridades; prensa; ciudadanía", "Evento presencial + medios", "Mes 21 · mar-2029", "Única"],
    ["1.4", "Informe final, lecciones aprendidas y transferencia", "MOPC; BID; municipalidades; SETAMA", "Reunión final + informe consolidado", "Mes 24 · jun-2029", "Única"]
  ];

  var RACI_ROLES = ["GP", "ET", "EA", "EC", "EF", "CD", "CO"];
  var RACI = [
    ["1.2.3", "Plan de Gestión de Riesgos", ["A/R", "C", "C", "C", "C", "I", "I"]],
    ["1.2.5", "Plan de Gestión de Interesados", ["A", "I", "I", "R", "I", "C", "I"]],
    ["1.3", "Seguimiento y control: informes de avance y valor ganado", ["A", "I", "C", "I", "R", "C", "I"]],
    ["1.3.3", "Gestión de cambios de alcance, costo y tiempo", ["R", "C", "C", "I", "C", "A", "I"]],
    ["2.2", "Estudios de tráfico y demanda", ["A", "R", "C", "I", "C", "I", "—"]],
    ["3.6", "Paquete de diseño final de las terminales", ["A", "R", "C", "I", "C", "I", "—"]],
    ["4.2", "Documentos de licitación (TDR y pliegos)", ["A", "C", "R", "I", "C", "I", "—"]],
    ["4.3", "Proceso licitatorio y adjudicación de contratos", ["A", "C", "R", "I", "C", "C", "—"]],
    ["5.2", "Obra civil principal: construcción de las 5 terminales", ["A", "C", "I", "I", "C", "I", "R"]],
    ["5.3", "Instalaciones y sistemas ITS", ["A", "C", "C", "I", "I", "I", "R"]],
    ["5.5", "Control de calidad de obra y supervisión técnica", ["A", "R", "—", "I", "C", "I", "C"]],
    ["6.1", "Preparación operativa: adquisición y alistamiento de los buses", ["A", "C", "R", "I", "C", "I", "C"]],
    ["6.3", "Operación piloto del sistema de terminales", ["A", "R", "—", "C", "I", "I", "C"]],
    ["6.4", "Habilitación formal y lanzamiento", ["A", "I", "C", "R", "I", "I", "C"]]
  ];

  var FAQ = [
    { q: "¿Este proyecto está en ejecución?",
      a: "No. Es la formulación completa de un proyecto, presentada como trabajo final de la Maestría en Gestión de Proyectos de la Universidad Americana. No constituye un programa gubernamental aprobado ni cuenta con financiación comprometida: el esquema de financiación 50-30-20 es la estructura propuesta por el proyecto, no un acuerdo suscrito. Lo que el trabajo entrega es el expediente técnico y de gestión que haría posible una decisión de inversión." },
    { q: "¿Por qué Park and Ride y no un BRT o un tren de cercanías?",
      a: "Se evaluaron cinco alternativas contra cuatro criterios: eficacia, costo, plazo y sostenibilidad. Un BRT o un tren de cercanías operan en otro orden de magnitud —cientos de millones de dólares y de cinco a diez años— y exigen infraestructura nueva. El Park and Ride ataca la misma causa directa con USD 27,2 M y 24 meses, es escalable por fases y, sobre todo, no es excluyente: las terminales pueden alimentar un futuro corredor masivo en lugar de competir con él." },
    { q: "¿Dónde estarán exactamente las terminales?",
      a: "Deliberadamente no se fija una dirección. Se identificaron los corredores de los municipios de mayor flujo pendular, pero la localización exacta es un entregable de la fase de diseños (meses 1 a 6, EDT 2.3) y depende de variables que exigen trabajo de campo: flujo real, disponibilidad de suelo, conectividad y factibilidad ambiental. Fijar direcciones en la formulación habría sido una precisión falsa. Además, la gestión predial es el riesgo R2 y por eso arranca antes que cualquier otra cosa en la ruta crítica." },
    { q: "¿Y si la gente no cambia de hábito?",
      a: "Es el riesgo R1, el único con severidad 9 sobre 9 de toda la matriz, y está tratado como tal. La respuesta es triple: una campaña de sensibilización con meta de más del 70 % de conocimiento del sistema, una tarifa única integrada que haga el viaje competitivo en costo, y seguridad garantizada en los estacionamientos —que es, junto con la rapidez, la necesidad mejor puntuada por los usuarios. El síntoma observable está definido: baja ocupación de estacionamientos y buses durante la operación piloto." },
    { q: "¿Por qué se habla de 90 minutos si el promedio del AMA es de 41?",
      a: "Son dos mediciones distintas y no se contradicen. Los 90 minutos son el peor escenario del corredor: un usuario de bus convencional, en hora pico, desde San Lorenzo o Luque hacia el centro. Los 41 minutos son el tiempo medio de viaje al trabajo considerando todos los modos y todos los horarios, según la Encuesta de Movilidad del AMA 2021 (INE y VMT, 2023). La línea de base del indicador R2 es la primera, porque es la población que el sistema busca captar." },
    { q: "¿Las metas de −20 %, −30 % y −15 % tienen una modelación detrás?",
      a: "No propia, y el trabajo lo declara. Las metas se fijaron sobre la evidencia internacional de corredores intervenidos con park and ride y gestión de la demanda, y sobre el dimensionamiento del propio sistema. Su validación con modelación de tránsito es la primera recomendación del proyecto: encargar un estudio de movilidad integral con conteos actualizados y análisis de sensibilidad antes de la localización definitiva. Lo que el trabajo garantiza no es la magnitud del efecto, sino que cada meta es medible: tiene línea de base, medio de verificación y responsable." },
    { q: "¿Cómo se controla que no se desvíe en costo y plazo?",
      a: "Con gestión del valor ganado (EVM) sobre la línea base de USD 27,2 M, informes mensuales y semáforos al Comité Directivo. El proyecto incluye una simulación de los primeros 12 meses —con datos hipotéticos— que muestra cómo se leería el tablero ante un desvío: CPI de 0,97 y SPI de 0,93 activarían las acciones de recuperación previstas (fast-tracking y control de cambios), con un desvío final proyectado de USD 0,82 M absorbido por la reserva de contingencia de 2,5 M." },
    { q: "¿Qué pasa con los operadores de transporte actuales?",
      a: "Son interesados de alto interés y poder medio, y su adhesión es crítica para el riesgo principal del proyecto. La estrategia no es reemplazarlos sino incorporarlos: mesas de trabajo tempranas, contratos de operación con incentivos por cumplimiento de frecuencias, y capacitación financiada por el proyecto. El plan de adquisiciones contempla además la cofinanciación de la flota con las empresas operadoras como uno de los esquemas evaluados." }
  ];

  var REFS = [
    "Alcaldía de Madrid. (2020). <i>Plan de movilidad urbana sostenible</i>.",
    "Banco Interamericano de Desarrollo. (2019). <i>Project Management for Results (PM4R)</i>.",
    "Banco Mundial. (2025). <i>Informe de movilidad urbana del Área Metropolitana de Asunción</i>.",
    "Economía Virtual. (2020). <i>Ocupación vehicular en el Gran Asunción</i>.",
    "Hernández Sampieri, R., Fernández Collado, C., &amp; Baptista Lucio, P. (2014). <i>Metodología de la investigación</i> (6.ª ed.). McGraw-Hill.",
    "Instituto Nacional de Estadística &amp; Viceministerio de Transporte. (2023). <i>Encuesta de Movilidad del AMA 2021</i>.",
    "International Transport Forum. (2018). <i>Policy directions for sustainable urban mobility</i>. OCDE.",
    "Litman, T. (2021). <i>Transportation cost and benefit analysis</i>. Victoria Transport Policy Institute.",
    "Meyer, M. D., &amp; Miller, E. J. (2013). <i>Urban transportation planning</i> (3.ª ed.). McGraw-Hill.",
    "Ministerio del Ambiente y Desarrollo Sostenible. (2021). <i>Inventario Nacional de Gases de Efecto Invernadero 1990-2019</i>.",
    "Ministerio de Obras Públicas y Comunicaciones. (2024). <i>Estadísticas de tránsito del Área Metropolitana</i>.",
    "Project Management Institute. (2021). <i>Guía del PMBOK</i> (7.ª ed.).",
    "Transportation Research Board. (1986). <i>Park-and-ride facilities: Guidelines for planning, design and operation</i>.",
    "Vuchic, V. R. (2005). <i>Urban transit: Operations, planning and economics</i>. John Wiley &amp; Sons."
  ];

  /* =====================================================================
     2. TOOLTIP COMPARTIDO
     ===================================================================== */

  var tip = el("div", { class: "tip", role: "status", "aria-live": "polite" });
  document.body.appendChild(tip);
  function showTip(x, y, html) {
    tip.innerHTML = html;
    tip.setAttribute("data-on", "1");
    var r = tip.getBoundingClientRect();
    var left = Math.min(Math.max(10, x + 14), window.innerWidth - r.width - 10);
    var top = y - r.height - 14;
    if (top < 10) top = y + 20;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }
  function hideTip() { tip.setAttribute("data-on", "0"); }

  /* =====================================================================
     3. MAPA DE CORREDORES
     ===================================================================== */

  function buildMap() {
    var host = $("#corridor-map");
    if (!host) return;
    host.setAttribute("viewBox", "0 0 840 620");
    host.setAttribute("role", "img");
    host.setAttribute("aria-label",
      "Esquema de los cinco corredores de acceso a Asunción con la ubicación indicativa de las terminales de intercepción.");

    var defs = svg("defs");
    var pat = svg("pattern", { id: "gridpat", width: "28", height: "28", patternUnits: "userSpaceOnUse" });
    var pl = svg("path", { d: "M28,0 L0,0 0,28", fill: "none" });
    pl.setAttribute("class", "grid-l");
    pat.appendChild(pl); defs.appendChild(pat); host.appendChild(defs);

    var bg = svg("rect", { x: "0", y: "0", width: "840", height: "620", fill: "url(#gridpat)" });
    host.appendChild(bg);

    // Río Paraguay y bahía de Asunción
    var water = svg("path", {
      d: "M0,0 L306,0 C300,66 248,104 196,130 C150,154 122,182 114,232 L98,340 L82,472 L64,620 L0,620 Z"
    });
    water.setAttribute("class", "water");
    host.appendChild(water);

    var wl = svg("text", { x: "46", y: "430", transform: "rotate(-78 46 430)" });
    wl.setAttribute("class", "anno"); wl.textContent = "RÍO PARAGUAY";
    host.appendChild(wl);

    // Mancha urbana de Asunción
    var city = svg("path", {
      d: "M132,214 C186,186 248,196 282,232 C314,266 318,308 308,352 C298,400 268,438 218,446 C168,454 132,426 118,378 C106,336 110,242 132,214 Z"
    });
    city.setAttribute("class", "city");
    host.appendChild(city);

    var cl = svg("text", { x: "156", y: "326" });
    cl.setAttribute("class", "citylbl"); cl.textContent = "ASUNCIÓN";
    host.appendChild(cl);
    var cl2 = svg("text", { x: "156", y: "344" });
    cl2.setAttribute("class", "anno"); cl2.textContent = "~500.000 hab.";
    host.appendChild(cl2);

    // Anillo de intercepción
    var ring = svg("path", { d: "M330,118 C430,160 500,240 500,332 C500,424 428,500 340,526" });
    ring.setAttribute("class", "ring");
    host.appendChild(ring);
    var rl = svg("text", { x: "512", y: "560" });
    rl.setAttribute("class", "anno"); rl.textContent = "ANILLO DE INTERCEPCIÓN";
    host.appendChild(rl);

    // Rosa de los vientos
    var nx = 792, ny = 66;
    var na = svg("path", { d: "M" + nx + "," + (ny - 20) + " L" + (nx + 8) + "," + (ny + 6) + " L" + nx + "," + (ny - 1) + " L" + (nx - 8) + "," + (ny + 6) + " Z" });
    na.setAttribute("fill", "var(--muted)");
    host.appendChild(na);
    var nt = svg("text", { x: nx, y: ny + 22, "text-anchor": "middle" });
    nt.setAttribute("class", "anno"); nt.textContent = "N";
    host.appendChild(nt);

    CORREDORES.forEach(function (c, i) {
      var g = svg("g", { tabindex: "0", role: "button", "data-i": String(i),
        "aria-label": "Corredor " + c.n + ": " + c.acceso + ", hacia " + c.muniFull });

      var out = svg("path", { d: c.out }); out.setAttribute("class", "lane-out"); g.appendChild(out);
      var lane = svg("path", { d: c.lane }); lane.setAttribute("class", "lane"); g.appendChild(lane);

      var n1 = svg("text", { x: c.lbl[0], y: c.lbl[1] });
      n1.setAttribute("class", "muni"); n1.textContent = c.muni[0];
      g.appendChild(n1);
      var n2 = svg("text", { x: c.lbl[0], y: c.lbl[1] + 15 });
      n2.setAttribute("class", "anno"); n2.textContent = c.muni[1];
      g.appendChild(n2);

      var node = svg("circle", { cx: c.node[0], cy: c.node[1], r: "15" });
      node.setAttribute("class", "node"); g.appendChild(node);
      var num = svg("text", { x: c.node[0], y: c.node[1] + 4.5 });
      num.setAttribute("class", "node-n"); num.textContent = String(c.n);
      g.appendChild(num);

      var hit = svg("path", { d: c.lane }); hit.setAttribute("class", "hit"); g.appendChild(hit);
      var hit2 = svg("circle", { cx: c.node[0], cy: c.node[1], r: "24" });
      hit2.setAttribute("class", "hit"); g.appendChild(hit2);

      g.addEventListener("click", function () { selectCorridor(i); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectCorridor(i); }
      });
      host.appendChild(g);
    });

    selectCorridor(3);
  }

  function selectCorridor(i) {
    var c = CORREDORES[i];
    $$("#corridor-map g[data-i]").forEach(function (g) {
      g.classList.toggle("on", g.getAttribute("data-i") === String(i));
    });
    $$("#corridor-chips .chip").forEach(function (b, j) {
      b.setAttribute("aria-pressed", j === i ? "true" : "false");
    });
    var d = $("#corridor-detail");
    if (!d) return;
    d.innerHTML =
      '<div class="mapdetail__hd">' +
        '<div class="mapdetail__badge">' + c.n + "</div>" +
        "<div><h3>" + esc(c.acceso) + '</h3><div class="mapdetail__route">' + esc(c.ruta) + "</div></div>" +
      "</div>" +
      "<p>" + esc(c.rol) + "</p>" +
      '<dl class="deflist">' +
        "<div><dt>Municipios servidos</dt><dd>" + esc(c.muniFull) + "</dd></div>" +
        "<div><dt>Plazas previstas</dt><dd>≈ 200 de las 1.000 de la red</dd></div>" +
        "<div><dt>Servicio</dt><dd>1 ruta de bus lanzadera · ≈ 6 unidades de la flota de 30</dd></div>" +
        "<div><dt>Localización exacta</dt><dd>A definir en la fase de estudios (EDT 2.3, meses 3 a 5)</dd></div>" +
      "</dl>";
  }

  function buildChips() {
    var host = $("#corridor-chips");
    if (!host) return;
    CORREDORES.forEach(function (c, i) {
      var b = el("button", { class: "chip", type: "button", "aria-pressed": "false" },
        "<b class='u-mono'>" + c.n + "</b> &nbsp;" + esc(c.acceso));
      b.addEventListener("click", function () { selectCorridor(i); });
      host.appendChild(b);
    });
  }

  /* =====================================================================
     4. GRÁFICOS
     ===================================================================== */

  function compBar(hostId, listId, data, ramp) {
    var bar = $(hostId), list = $(listId);
    if (!bar) return;
    var total = data.reduce(function (a, b) { return a + b.v; }, 0);
    data.forEach(function (d, i) {
      var color = ramp[i % ramp.length];
      var s = el("span");
      s.style.flex = d.v + " 0 0";
      s.style.background = "var(" + color + ")";
      s.setAttribute("title", d.k + " — " + usd(d.v));
      bar.appendChild(s);

      var row = el("div");
      row.innerHTML =
        '<i style="background:var(' + color + ')"></i>' +
        '<span class="nm">' + esc(d.k) + (d.d ? '<br><span class="u-small u-muted">' + esc(d.d) + "</span>" : "") + "</span>" +
        '<span class="vl">' + usd(d.v) + "</span>" +
        '<span class="pc">' + d.p + " %</span>";
      list.appendChild(row);
    });
    var tr = el("div");
    tr.innerHTML = '<i></i><span class="nm"><strong>Total</strong></span><span class="vl"><strong>' +
      usd(total) + '</strong></span><span class="pc">100 %</span>';
    list.appendChild(tr);
  }

  /* -- gráfico de líneas reutilizable con crosshair y tooltip -- */
  function lineChart(hostId, cfg) {
    var host = $(hostId);
    if (!host) return;
    var W = 760, H = 320, m = { t: 16, r: 18, b: 42, l: 74 };
    var iw = W - m.l - m.r, ih = H - m.t - m.b;
    host.setAttribute("viewBox", "0 0 " + W + " " + H);
    host.setAttribute("class", "chart");
    host.setAttribute("role", "img");
    host.setAttribute("aria-label", cfg.aria);

    var max = 0;
    cfg.series.forEach(function (s) { s.data.forEach(function (v) { if (v > max) max = v; }); });
    var yMax = Math.ceil(max / 5000000) * 5000000;
    var n = cfg.labels.length;
    var X = function (i) { return m.l + (n === 1 ? iw / 2 : (iw * i) / (n - 1)); };
    var Y = function (v) { return m.t + ih - (ih * v) / yMax; };

    // rejilla + eje Y
    for (var t = 0; t <= yMax; t += 5000000) {
      var gy = Y(t);
      var g = svg("line", { x1: m.l, y1: gy, x2: m.l + iw, y2: gy }); g.setAttribute("class", "gl");
      host.appendChild(g);
      var lt = svg("text", { x: m.l - 10, y: gy + 3.5, "text-anchor": "end" });
      lt.setAttribute("class", "axlbl");
      lt.textContent = (t / 1000000) + " M";
      host.appendChild(lt);
    }
    var ax = svg("line", { x1: m.l, y1: m.t + ih, x2: m.l + iw, y2: m.t + ih });
    ax.setAttribute("class", "ax"); host.appendChild(ax);

    // eje X
    cfg.labels.forEach(function (lb, i) {
      if (n > 9 && i % 2 === 1) return;
      var tx = svg("text", { x: X(i), y: m.t + ih + 20, "text-anchor": "middle" });
      tx.setAttribute("class", "axlbl"); tx.textContent = lb;
      host.appendChild(tx);
    });
    var xt = svg("text", { x: m.l + iw / 2, y: H - 6, "text-anchor": "middle" });
    xt.setAttribute("class", "axlbl"); xt.textContent = cfg.xTitle;
    host.appendChild(xt);

    // área bajo la primera serie, si corresponde
    if (cfg.area) {
      var s0 = cfg.series[0];
      var ap = "M" + X(0) + "," + Y(s0.data[0]);
      s0.data.forEach(function (v, i) { if (i) ap += " L" + X(i) + "," + Y(v); });
      ap += " L" + X(s0.data.length - 1) + "," + (m.t + ih) + " L" + X(0) + "," + (m.t + ih) + " Z";
      var area = svg("path", { d: ap, fill: "var(" + s0.color + ")", opacity: ".10", stroke: "none" });
      host.appendChild(area);
    }

    // series
    cfg.series.forEach(function (s) {
      var d = "";
      s.data.forEach(function (v, i) { d += (i ? " L" : "M") + X(i) + "," + Y(v); });
      var p = svg("path", { d: d, fill: "none", stroke: "var(" + s.color + ")", "stroke-width": "2",
        "stroke-linecap": "round", "stroke-linejoin": "round" });
      if (s.dash) p.setAttribute("stroke-dasharray", "6 5");
      host.appendChild(p);
      s.data.forEach(function (v, i) {
        var c = svg("circle", { cx: X(i), cy: Y(v), r: "3.6", fill: "var(" + s.color + ")",
          stroke: "var(--surface)", "stroke-width": "2" });
        host.appendChild(c);
      });
      // etiqueta directa al final de la serie
      var last = s.data.length - 1;
      var dl = svg("text", { x: X(last) - 4, y: Y(s.data[last]) - 12, "text-anchor": "end" });
      dl.setAttribute("class", "axlbl");
      dl.setAttribute("fill", "var(" + s.color + ")");
      dl.textContent = s.name;
      host.appendChild(dl);
    });

    // crosshair + interacción
    var cross = svg("line", { x1: 0, y1: m.t, x2: 0, y2: m.t + ih });
    cross.setAttribute("class", "cross"); host.appendChild(cross);
    var overlay = svg("rect", { x: m.l, y: m.t, width: iw, height: ih, fill: "transparent" });
    overlay.style.cursor = "crosshair";
    host.appendChild(overlay);

    function at(evt) {
      var r = host.getBoundingClientRect();
      var px = ((evt.clientX - r.left) / r.width) * W;
      var i = Math.round(((px - m.l) / iw) * (n - 1));
      i = Math.max(0, Math.min(n - 1, i));
      cross.setAttribute("x1", X(i)); cross.setAttribute("x2", X(i));
      host.classList.add("live");
      var html = "<b>" + esc(cfg.labels[i]) + (cfg.sub && cfg.sub[i] ? " · " + esc(cfg.sub[i]) : "") + "</b>";
      cfg.series.forEach(function (s) {
        if (s.data[i] == null) return;
        html += "<span>" + esc(s.name) + ": " + usd(s.data[i]) + "</span>";
      });
      showTip(evt.clientX, evt.clientY, html);
    }
    overlay.addEventListener("mousemove", at);
    overlay.addEventListener("mouseleave", function () { host.classList.remove("live"); hideTip(); });
    overlay.addEventListener("touchstart", function (e) { at(e.touches[0]); }, { passive: true });
    overlay.addEventListener("touchmove", function (e) { at(e.touches[0]); }, { passive: true });
    overlay.addEventListener("touchend", function () { host.classList.remove("live"); hideTip(); });
  }

  /* -- barras horizontales QFD -- */
  function qfdBars() {
    var host = $("#qfd-bars");
    if (!host) return;
    var max = QFD_TEC[0][2];
    QFD_TEC.forEach(function (r, i) {
      var row = el("div", { class: "qfd-row" });
      var pct = (r[2] / max) * 100;
      row.innerHTML =
        '<div class="qfd-rank u-mono">' + (i + 1) + "</div>" +
        '<div class="qfd-name">' + esc(r[0]) + '<span class="u-small u-muted"> — ' + esc(r[3]) + "</span></div>" +
        '<div class="qfd-track"><span style="width:' + pct.toFixed(1) + '%"></span></div>' +
        '<div class="qfd-val u-mono">' + r[2].toFixed(2).replace(".", ",") + " %</div>";
      host.appendChild(row);
    });
  }

  /* -- gantt -- */
  function gantt() {
    var host = $("#gantt");
    if (!host) return;
    var sc = el("div", { class: "gantt__scale" });
    var ticks = "";
    for (var q = 1; q <= 8; q++) ticks += "<span>T" + q + "</span>";
    sc.innerHTML = '<div class="u-mono u-small u-muted">24 meses</div><div class="gantt__ticks">' + ticks + "</div>";
    host.appendChild(sc);

    var ramp = ["--r1", "--r2", "--r3", "--r4", "--r5"];
    FASES.forEach(function (f, i) {
      var left = ((f.m0 - 1) / 24) * 100;
      var w = ((f.m1 - f.m0 + 1) / 24) * 100;
      var row = el("div", { class: "gantt__row" });
      row.innerHTML =
        '<div class="gantt__name"><b>' + esc(f.id) + "</b>" + esc(f.t) + "</div>" +
        '<div class="gantt__track"><div class="gantt__bar" style="left:' + left.toFixed(2) +
        "%;width:" + w.toFixed(2) + "%;background:var(" + ramp[i] + ')">' + esc(f.cal) + "</div></div>";
      host.appendChild(row);
    });
  }

  /* -- mapa de calor de riesgos -- */
  function heat() {
    var host = $("#risk-heat");
    if (!host) return;
    var cells = {};
    RIESGOS.forEach(function (r) {
      var k = r.p + "-" + r.i;
      (cells[k] = cells[k] || []).push(r);
    });
    var sevOf = function (p, i) {
      var v = p * i;
      return v >= 6 ? "alto" : v >= 3 ? "medio" : "bajo";
    };
    var impLabel = { 3: "Alto", 2: "Medio", 1: "Bajo" };
    var frag = document.createDocumentFragment();
    frag.appendChild(el("div", { class: "heat__lab" }, ""));
    [1, 2, 3].forEach(function (p) {
      frag.appendChild(el("div", { class: "heat__lab" }, "Probabilidad " + impLabel[p].toLowerCase()));
    });
    [3, 2, 1].forEach(function (imp) {
      frag.appendChild(el("div", { class: "heat__lab" }, "Impacto<br>" + impLabel[imp].toLowerCase()));
      [1, 2, 3].forEach(function (p) {
        var c = el("div", { class: "heat__cell", "data-sev": sevOf(p, imp) });
        (cells[p + "-" + imp] || []).forEach(function (r) {
          var b = el("button", { class: "riskchip", type: "button", "aria-pressed": "false" }, r.id);
          b.addEventListener("click", function () { focusRisk(r.id); });
          c.appendChild(b);
        });
        frag.appendChild(c);
      });
    });
    host.appendChild(frag);
  }

  function focusRisk(id) {
    $$(".riskchip").forEach(function (b) { b.setAttribute("aria-pressed", b.textContent === id ? "true" : "false"); });
    var row = $('#risk-table tr[data-id="' + id + '"]');
    if (row) {
      row.scrollIntoView({ block: "center", behavior: "smooth" });
      row.style.transition = "background .3s";
      row.style.background = "var(--signal-soft)";
      setTimeout(function () { row.style.background = ""; }, 1600);
    }
  }

  /* =====================================================================
     5. TABLAS
     ===================================================================== */

  function table(hostId, caption, head, rows, opts) {
    var host = $(hostId);
    if (!host) return;
    opts = opts || {};
    var t = el("table");
    if (caption) t.appendChild(el("caption", null, caption));
    var thead = el("thead");
    var tr = el("tr");
    head.forEach(function (h, i) {
      tr.appendChild(el("th", { scope: "col", class: (opts.num || []).indexOf(i) > -1 ? "num" : "" }, h));
    });
    thead.appendChild(tr); t.appendChild(thead);
    var tb = el("tbody");
    rows.forEach(function (r) {
      var row = el("tr");
      if (r._id) row.setAttribute("data-id", r._id);
      (r.cells || r).forEach(function (c, i) {
        var cls = (opts.num || []).indexOf(i) > -1 ? "num" : ((opts.code || []).indexOf(i) > -1 ? "code" : "");
        row.appendChild(el("td", { class: cls }, c));
      });
      tb.appendChild(row);
    });
    t.appendChild(tb);
    host.appendChild(t);
  }

  function pill(kind, txt) { return '<span class="pill pill--' + kind + '">' + txt + "</span>"; }

  function buildTables() {
    // MdR
    table("#t-mdr", "Anexo I · Matriz de Resultados (MdR)",
      ["", "Resultado e indicador", "Línea de base", "Meta 2029", "Medio de verificación", "Supuesto"],
      MDR.map(function (r) {
        return ["<strong>" + r.id + "</strong>",
          "<strong>" + esc(r.t) + "</strong><br><span class='u-small u-muted'>" + esc(r.ind) + "</span>",
          esc(r.base), "<strong>" + esc(r.meta) + "</strong>", esc(r.mv), esc(r.sup)];
      }));

    // Riesgos
    var rhost = $("#risk-table");
    if (rhost) {
      table("#risk-table", "Anexo XII · Matriz de riesgos — severidad = probabilidad × impacto (escala 1 a 3)",
        ["", "Riesgo", "Tipo", "P", "I", "Sev.", "Consecuencia y síntoma observable", "Respuesta", "Responsable"],
        RIESGOS.map(function (r) {
          return {
            _id: r.id,
            cells: ["<strong>" + r.id + "</strong>", "<strong>" + esc(r.t) + "</strong>", esc(r.tipo),
              r.p, r.i,
              pill(r.sev === "Alto" ? "crit" : "warn", (r.p * r.i) + " " + r.sev),
              esc(r.cons) + "<br><span class='u-small u-muted'>Síntoma: " + esc(r.sint) + "</span>",
              esc(r.resp), esc(r.own)]
          };
        }), { num: [3, 4] });
    }

    // Interesados
    table("#t-stake", "Anexo X · Matriz de interesados — los 7 grupos prioritarios",
      ["Interesado", "Tipo", "Interés", "Influencia", "Objetivo o resultado buscado", "Estrategia de involucramiento"],
      INTERESADOS.map(function (s) {
        return ["<strong>" + esc(s.n) + "</strong>", esc(s.tipo),
          pill(s.int === "Alto" ? "crit" : "warn", s.int),
          pill(s.inf === "Alto" ? "crit" : "warn", s.inf),
          esc(s.obj), esc(s.est)];
      }));

    // RACI
    table("#t-raci", "Anexo III · Matriz de responsabilidades RACI — un solo responsable y un solo aprobador por entregable",
      ["EDT", "Producto o entregable"].concat(RACI_ROLES),
      RACI.map(function (r) { return [r[0], "<strong>" + esc(r[1]) + "</strong>"].concat(r[2]); }),
      { code: [0], num: [2, 3, 4, 5, 6, 7, 8] });

    // Adquisiciones
    table("#t-proc", "Anexo IX · Matriz de adquisiciones — USD 24,1 M, el 89 % del presupuesto",
      ["EDT", "Adquisición", "Tipo", "Modalidad", "Período", "Monto estimado"],
      ADQUISICIONES.map(function (r) {
        return [r[0], "<strong>" + esc(r[1]) + "</strong>", esc(r[2]), esc(r[3]), esc(r[4]), usd(r[5])];
      }), { code: [0], num: [5] });

    // Comunicaciones
    table("#t-comm", "Anexo VIII · Matriz de comunicaciones",
      ["EDT", "Qué se comunica", "Destinatario", "Método", "Inicio", "Frecuencia"],
      COMUNICACIONES.map(function (r) {
        return [r[0], "<strong>" + esc(r[1]) + "</strong>", esc(r[2]), esc(r[3]), esc(r[4]), esc(r[5])];
      }), { code: [0] });

    // QFD requerimientos
    table("#t-qfd", "Anexo XIV · Voz del cliente — 10 requerimientos y su prioridad (escala 1 a 5)",
      ["Requerimiento del usuario", "Prioridad"],
      QFD_REQ.map(function (r) {
        return ["<strong>" + esc(r[0]) + "</strong>",
          pill(r[1] === 5 ? "crit" : r[1] === 4 ? "warn" : "n", r[1] + " / 5")];
      }));

    // EDT
    var eh = $("#t-edt");
    if (eh) {
      table("#t-edt", "Anexo XI · Estructura de Desglose del Trabajo — 6 fases hasta el nivel de paquete de trabajo",
        ["Código", "Fase", "Paquetes de trabajo del segundo nivel"],
        EDT.map(function (e) {
          return [e.c, "<strong>" + esc(e.t) + "</strong>",
            e.sub.map(function (s, i) { return "<span class='u-mono u-muted'>" + e.c + "." + (i + 1) + "</span> " + esc(s); }).join("<br>")];
        }), { code: [0] });
    }
  }

  /* =====================================================================
     6. BLOQUES DE CONTENIDO
     ===================================================================== */

  function buildDiag() {
    var host = $("#diag-grid");
    if (!host) return;
    DIAGNOSTICO.forEach(function (d) {
      host.appendChild(el("div", { class: "card card--flag" },
        '<div class="stat__v">' + esc(d.v) + "</div>" +
        '<div class="stat__k">' + esc(d.u) + "</div>" +
        "<p style='margin-top:10px'>" + esc(d.d) + "</p>" +
        "<div class='kicker' style='margin:10px 0 0'>" + esc(d.f) + "</div>"));
    });
  }

  function buildTree() {
    var host = $("#tree");
    if (!host) return;
    var band = function (kicker, items) {
      return '<div class="tree__band"><div class="kicker">' + kicker + '</div><ul class="tree__list">' +
        items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
    };
    var arrow = '<div class="tree__arrow" aria-hidden="true"><svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M9 20V2M9 2 2 9M9 2l7 7" stroke="currentColor" stroke-width="1.5"/></svg></div>';
    host.innerHTML =
      band("Efectos — lo que la congestión produce hoy", PROBLEMA.efectos) + arrow +
      '<div class="tree__band tree__band--core"><div class="kicker">Problema central</div>' +
      "<p>Alta congestión vehicular en los accesos a la ciudad de Asunción</p></div>" + arrow +
      band("Causas directas", PROBLEMA.causasDirectas) + arrow +
      band("Causas indirectas — las raíces", PROBLEMA.causasIndirectas);
  }

  function buildAlt() {
    var host = $("#alt-list");
    if (!host) return;
    ALTERNATIVAS.forEach(function (a) {
      var card = el("div", { class: "card" + (a.sel ? " card--flag" : "") });
      card.innerHTML =
        '<div class="kicker">Alternativa ' + a.n + (a.sel ? " · <span style=\"color:var(--signal)\">seleccionada</span>" : "") + "</div>" +
        "<h3>" + esc(a.t) + "</h3>" +
        "<p class='u-mono u-small u-muted' style='margin:-4px 0 8px'>" + esc(a.sub) + "</p>" +
        "<p>" + esc(a.d) + "</p>";
      if (a.sel) card.style.borderLeftColor = "var(--signal-2)";
      host.appendChild(card);
    });
  }

  function buildMdrCards() {
    var host = $("#mdr-cards");
    if (!host) return;
    MDR.forEach(function (r) {
      host.appendChild(el("div", { class: "meta" },
        '<div class="meta__id">' + r.id + "</div>" +
        "<h3>" + esc(r.t) + "</h3>" +
        '<div class="meta__bar">' +
          '<div class="meta__cell"><div class="k">Línea de base</div><div class="v">' + esc(r.base) + "</div></div>" +
          '<div class="meta__arrow" aria-hidden="true"><svg width="22" height="12" viewBox="0 0 22 12" fill="none"><path d="M0 6h20M15 1l5 5-5 5" stroke="currentColor" stroke-width="1.5"/></svg></div>' +
          '<div class="meta__cell goal"><div class="k">Meta a jun-2029</div><div class="v">' + esc(r.meta) + "</div></div>" +
        "</div>" +
        '<div class="meta__src"><strong>Indicador:</strong> ' + esc(r.ind) +
        "<br><strong>Verificación:</strong> " + esc(r.mv) + "</div>"));
    });
  }

  function buildFases() {
    var host = $("#fase-list");
    if (!host) return;
    FASES.forEach(function (f) {
      host.appendChild(el("div", { class: "card" },
        '<div class="kicker">' + esc(f.id) + " · meses " + f.m0 + "–" + f.m1 + "</div>" +
        "<h3>" + esc(f.t) + "</h3>" +
        "<p class='u-mono u-small' style='color:var(--brand);margin:-4px 0 8px'>" + esc(f.cal) + "</p>" +
        "<p>" + esc(f.d) + "</p>"));
    });
  }

  function buildHitos() {
    var host = $("#hito-list");
    if (!host) return;
    HITOS.forEach(function (h) {
      host.appendChild(el("div", { class: "milestone" },
        "<time>" + esc(h[0]) + '</time><span class="dot" aria-hidden="true"></span><p>' + esc(h[1]) + "</p>"));
    });
  }

  function buildKpi() {
    var host = $("#evm-kpi");
    if (!host) return;
    EVM_KPI.forEach(function (k) {
      host.appendChild(el("div", { class: "card" },
        '<div class="kicker">' + k[0] + "</div>" +
        '<div class="stat__v" style="color:var(--' + (k[3] === "warn" ? "signal" : "ink") + ')">' + k[1] + "</div>" +
        "<p style='margin-top:8px'>" + esc(k[2]) + "</p>"));
    });
  }

  function buildTerminal() {
    var host = $("#terminal-spec");
    if (!host) return;
    TERMINAL_TIPO.forEach(function (r) {
      host.appendChild(el("div", null, "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>"));
    });
  }

  function buildFaq() {
    var host = $("#faq");
    if (!host) return;
    FAQ.forEach(function (f) {
      var d = el("details");
      d.innerHTML = "<summary>" + esc(f.q) + "</summary><div>" + esc(f.a) + "</div>";
      host.appendChild(d);
    });
  }

  function buildRefs() {
    var host = $("#refs");
    if (!host) return;
    REFS.forEach(function (r) { host.appendChild(el("li", null, r)); });
  }

  /* =====================================================================
     7. PESTAÑAS, NAVEGACIÓN Y TEMA
     ===================================================================== */

  function tabs() {
    var wrap = $("#matrix-tabs");
    if (!wrap) return;
    var btns = $$(".tab", wrap);
    var panels = $$("[data-panel]");
    function show(name) {
      btns.forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-tab") === name ? "true" : "false"); });
      panels.forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== name; });
    }
    btns.forEach(function (b) {
      b.addEventListener("click", function () { show(b.getAttribute("data-tab")); });
    });
    show(btns[0].getAttribute("data-tab"));
  }

  function scrollSpy() {
    var links = $$(".navlinks a");
    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      var s = document.getElementById(id);
      if (s) map[id] = { a: a, s: s };
    });
    var keys = Object.keys(map);
    if (!keys.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove("on"); });
        var k = e.target.id;
        if (map[k]) map[k].a.classList.add("on");
      });
    }, { rootMargin: "-62px 0px -72% 0px", threshold: 0 });
    keys.forEach(function (k) { io.observe(map[k].s); });
  }

  function themeToggle() {
    var btn = $("#theme");
    if (!btn) return;
    var root = document.documentElement;
    try {
      var saved = localStorage.getItem("tia-theme");
      if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
    } catch (e) { /* almacenamiento no disponible */ }
    btn.addEventListener("click", function () {
      var cur = root.getAttribute("data-theme");
      var isDark = cur === "dark" ||
        (!cur && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("tia-theme", next); } catch (e) { /* ignorar */ }
    });
  }

  /* =====================================================================
     8. ARRANQUE
     ===================================================================== */

  function init() {
    themeToggle();
    buildDiag();
    buildTree();
    buildMap();
    buildChips();
    selectCorridor(3);
    buildTerminal();
    buildAlt();
    buildMdrCards();

    compBar("#budget-bar", "#budget-list", PRESUPUESTO, ["--r1", "--r2", "--r3", "--r4", "--r5"]);
    compBar("#fin-bar", "#fin-list", FINANCIACION, ["--r2", "--r3", "--r5"]);

    buildFases();
    gantt();
    buildHitos();

    lineChart("#chart-curvas", {
      aria: "Curva S: valor planificado acumulado por trimestre frente al costo real acumulado de los primeros cuatro trimestres.",
      labels: CURVA_S.labels, sub: CURVA_S.cal, xTitle: "Trimestres del proyecto · jul-2027 a jun-2029",
      area: true,
      series: [
        { name: "PV acumulado", data: CURVA_S.pv, color: "--s1" },
        { name: "AC acumulado", data: CURVA_S.ac, color: "--s2", dash: true }
      ]
    });

    lineChart("#chart-evm", {
      aria: "Simulación de valor ganado de los primeros doce meses: valor planificado, valor ganado y costo real acumulados.",
      labels: EVM.labels, xTitle: "Primeros 12 meses · simulación con datos hipotéticos",
      series: [
        { name: "PV", data: EVM.pv, color: "--s-base", dash: true },
        { name: "EV", data: EVM.ev, color: "--s1" },
        { name: "AC", data: EVM.ac, color: "--s2" }
      ]
    });

    buildKpi();
    heat();
    qfdBars();
    buildTables();
    buildFaq();
    buildRefs();
    tabs();
    scrollSpy();

    var y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
