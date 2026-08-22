export const WA_BASE = "https://wa.me/5491124915916";

export const wa = (text: string) => `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  // El orden acompaña el orden de las secciones en la página.
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotras", label: "Nosotras" },
  { href: "#novedades", label: "Novedades" },
  { href: "#precios", label: "Precios" },
];

export const heroBenefits = [
  "Atención personalizada",
  "Seguimiento mes a mes",
  "Primera consulta sin cargo",
];

export const payslip = {
  period: "Período 07/2026 · Legajo 0042",
  employee: [
    { label: "Empleado/a", value: "Sofía Ramírez" },
    { label: "CUIL", value: "27-33XXXXXX-4" },
    { label: "Categoría", value: "Administrativo A" },
    { label: "Fecha ingreso", value: "03/2024" },
  ],
  earnings: [
    { label: "Sueldo básico", value: "$1.050.000" },
    { label: "Presentismo", value: "$95.000" },
    { label: "SAC proporcional", value: "$95.417" },
  ],
  earningsTotal: "$1.240.417",
  deductions: [
    { label: "Jubilación (11%)", value: "–$136.446" },
    { label: "Obra social (3%)", value: "–$37.213" },
    { label: "Ley 19.032 (3%)", value: "–$37.213" },
  ],
  net: "$1.029.545",
};

export const marqueeTerms = [
  "Liquidación de sueldos",
  "Cumplimiento ARCA",
  "F.931",
  "Libro Sueldos Digital",
  "Paritarias actualizadas",
  "Ganancias 4ª categoría",
  "Inscripción en organismos de control",
  "Boletas sindicales",
  "Reforma Laboral 2026",
];

export const problems = [
  {
    num: "01",
    title: "Los sueldos siempre quedan para el final.",
    body:
      'Y "cuando podés" a veces es el 30, a las apuradas, con la calculadora abierta en una pestaña y el WhatsApp de un empleado preguntando por qué no le llegó el pago.',
  },
  {
    num: "02",
    title: "Un recibo mal armado no es solo un número mal puesto.",
    body:
      "Un cálculo incorrecto o un alta que se presenta tarde tiene consecuencias legales concretas para tu empresa. Y la mayoría de las veces, se podría haber evitado con alguien mirando eso a tiempo.",
  },
  {
    num: "03",
    title: "Las paritarias cambian. ¿Quién está mirando tus sueldos?",
    body:
      "Los acuerdos salariales se actualizan y cada convenio tiene sus propios tiempos y condiciones. Aplicar un aumento tarde, mal o sobre una base incorrecta puede generar diferencias que después hay que corregir. Tener a alguien siguiendo estas novedades evita que el problema aparezca cuando la liquidación ya está hecha.",
  },
  {
    num: "04",
    title: "Te mandan el recibo. Pero, ¿sabés qué estás pagando?",
    body:
      "Entender qué hay detrás de cada concepto te permite saber cuánto realmente te cuesta cada empleado, detectar errores y tomar mejores decisiones. Porque liquidar sueldos no debería ser solamente recibir un archivo y transferir.",
  },
];

export const services = [
  {
    num: "01",
    title: "Liquidación de haberes",
    sub: "Nos ocupamos de cada sueldo como si fuera el nuestro.",
    hover: "hover-petroleo",
    items: [
      "Cálculo del sueldo bruto y neto de cada empleado",
      "Cálculo de aguinaldo (SAC) y vacaciones",
      "Liquidaciones especiales (despidos, licencias, etc.)",
      "Recibos de sueldo digitales, listos para enviar",
    ],
  },
  {
    num: "02",
    title: "Cumplimiento legal y fiscal",
    sub: "Lo que ARCA y los organismos de control te exigen, en tiempo y forma.",
    hover: "hover-noche",
    items: [
      "Presentación mensual de cargas sociales",
      "Boletas de aporte sindical",
      "Certificados para ANSES y para cuando un empleado se va (Art. 80)",
      "Altas y bajas de empleados ante ARCA",
      "Alta en ART",
      "Inscripción en organismo de control",
    ],
  },
  {
    num: "03",
    title: "Gestión de novedades",
    sub: "Cada movimiento de tu empresa, documentado y en orden.",
    hover: "hover-coral",
    items: [
      "Recepción y gestión de novedades mensuales",
      "Cálculo de horas extras y plus vacacional",
      "Mantenimiento de legajos",
      "Gestión de consultas de empleados",
    ],
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Nos escribís",
    body: "Por WhatsApp o por el formulario, como te resulte más cómodo.",
  },
  {
    num: "02",
    title: "Nos contás de tu empresa",
    body: "Cuántos empleados tenés y qué convenio aplica en tu actividad.",
  },
  {
    num: "03",
    title: "Analizamos qué necesitás",
    body: "Revisamos tu situación puntual antes de proponerte nada.",
  },
  {
    num: "04",
    title: "Te mandamos una propuesta",
    body: "Clara, sin letra chica, ajustada a tu empresa.",
  },
  {
    num: "05",
    title: "Empezamos a trabajar juntos",
    body: "Nos pasás los datos del equipo y tomamos el control de las liquidaciones.",
  },
];

export const founders = [
  {
    name: "Cami",
    photo: "/img/cami.webp",
    role: "Lic. en Administración · Especialista en Liquidación",
    bio:
      "“Antes de que recibas la liquidación, pasa por mis manos: reviso cada número, cada aporte y cada presentación para que no tengas sorpresas.”",
  },
  {
    name: "Male",
    photo: "/img/male.webp",
    role: "Especialista en Gestión Administrativa y Financiera",
    bio:
      "“Me ocupo de la parte operativa del día a día. Soy tu contacto directo acá: hago el seguimiento mes a mes y respondo cada consulta que tengas.”",
  },
];

export const whyItems = [
  {
    title: "Actualizadas con la norma",
    body:
      "Seguimos de cerca cada cambio normativo, paritaria y resolución de ARCA que pueda afectar a tu empresa.",
  },
  {
    title: "Respuesta rápida y directa",
    body:
      "Nos escribís y te contestamos nosotras, el mismo día. Sin intermediarios ni operadores genéricos.",
  },
  {
    title: "Atención personalizada",
    body: "Siempre hablás con nosotras. Conocemos tu empresa, tu equipo y tu historia.",
  },
  {
    title: "Interpretación de convenios",
    body:
      "Analizamos el CCT específico de tu rubro. Liquidar bien no es solo hacer cuentas — es entender la norma que aplica a tu actividad.",
  },
];

export const testimonialQuote =
  "Armamos nuestro propio camino porque creemos que las PyMEs merecen un mejor servicio. Buscamos los primeros clientes que quieran crecer con nosotras — y a quienes podamos demostrarles, mes a mes, por qué valió la pena elegirnos.";

export const news = [
  {
    badge: "Impacto alto",
    badgeClass: "bg-[#F5E3DE] text-coral",
    date: "Marzo 2026",
    title: "Reforma Laboral Ley 27.802",
    body: "FAL, nuevas indemnizaciones, pago por cuenta bancaria.",
  },
  {
    badge: "En seguimiento",
    badgeClass: "bg-[#E6ECEA] text-petroleo",
    date: "Abril 2026",
    title: "Paritaria Empleados de Comercio",
    body: "5% remunerativo más suma no remunerativa.",
  },
  {
    badge: "Implementado",
    badgeClass: "bg-[#DFF0DC] text-[#3C7A3C]",
    date: "Enero 2026",
    title: "ARCA reemplaza a AFIP",
    body: "Nueva interfaz y denominación del organismo.",
  },
];

export const pricingTiers = [
  {
    max: 5,
    price: "$18.000",
    desc: "El punto de partida — liquidación completa desde el primer empleado.",
  },
  {
    max: 10,
    price: "$16.500",
    desc: "Con este tamaño de equipo, tu costo por empleado ya bajó del tramo inicial.",
  },
  { max: 20, price: "$15.000", desc: "A este ritmo de crecimiento, seguís bajando de tramo." },
  {
    max: 40,
    price: "$13.500",
    desc: "Con un equipo de este tamaño, el costo por empleado sigue cayendo.",
  },
  {
    max: Infinity,
    price: "$12.000",
    desc: "En este volumen, tu costo por empleado llega a su valor más bajo.",
  },
];

export const pricingBullets = [
  "Precio por empleado, no por empresa",
  "Baja automáticamente por tramo a medida que crecés",
  "Actualización trimestral por inflación, nunca sorpresas",
];
