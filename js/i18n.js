// English translations. Spanish is the source text in index.html;
// main.js captures it on load so both languages can be toggled.
const translations = {
  en: {
    "skip": "Skip to content",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.eyebrow": "Santa Ana, El Salvador · Remote",
    "hero.role": "Systems engineer & full stack developer",
    "hero.lead": "I build web platforms people use every day to shop, order and pay. I care about code that is clear, tested and easy to maintain.",
    "hero.ctaContact": "Let's talk",

    "stats.years": "years writing code",
    "stats.freelance": "years freelancing",
    "stats.focus": "current focus",

    "about.title": "About me",
    "about.p1": "I'm a systems engineer from Universidad Católica de El Salvador and a full stack developer. I started out in networking and telecom, taught computer science and led a school's IT department, spent almost a decade freelancing on web and mobile apps for clients around the world, and today I work on an online ordering and self-service kiosk platform for restaurants.",
    "about.p2": "I'm comfortable across the whole stack: PHP, WordPress/WooCommerce and Laravel on the backend; JavaScript, React and Vue on the frontend; MySQL and PostgreSQL for data. On every project my goal is to ship quality, tested code the next developer can understand.",
    "about.p3": "I enjoy learning new technologies and sharing what I know. I write on my blog from time to time.",

    "work.title": "Selected work",
    "work.ordering.meta": "SaaS platform · Current",
    "work.ordering.title": "Online ordering for restaurants",
    "work.ordering.body": "WordPress/WooCommerce plugin that syncs menus, prices, stock and schedules from the point-of-sale system and turns them into an online store with cart, checkout and card payments.",
    "work.kiosk.meta": "Self-service · Current",
    "work.kiosk.title": "Self-service kiosk",
    "work.kiosk.body": "Touch kiosk experience built with React blocks on WordPress: product customization, cart and payment integrated with card terminals, tuned for tablet and kiosk screens.",
    "work.quality.meta": "Quality · Performance · Security",
    "work.quality.title": "Engineering you don't see, but you notice",
    "work.quality.body": "Faster menu loading through caching and parallel API calls, schedules that stay correct across daylight saving changes, security hardening (nonces, credential redaction in logs, webhooks) and unit test suites with review before every commit.",
    "work.landlord.meta": "Mobile app · 2023",
    "work.landlord.title": "Certifications for landlords",
    "work.landlord.body": "Mobile app for UK landlords that centralizes the tracking of mandatory certifications, such as Gas Safety, and the different inspections for each property.",
    "work.hospital.meta": "Healthcare · 2020–2022",
    "work.hospital.title": "Hospital Cáder web portal",
    "work.hospital.body": "Portal where patients get quotes and buy services online, check their lab results, book video consultations and earn loyalty points. The admin panel shows sales and their nationwide distribution, and manages products, consultations and quote notifications.",

    "exp.title": "Experience",
    "exp.cbs.date": "Feb 2024 — Present",
    "exp.cbs.role": "PHP Developer",
    "exp.cbs.body": "Building the online ordering and kiosk platform for restaurants: WordPress/WooCommerce plugin and themes, point-of-sale API integration, payments, performance, security and automated testing.",
    "exp.trezlabs.role": "Web developer",
    "exp.trezlabs.body": "Full stack development with Laravel on the backend and React on the frontend for the platforms of an exam-prep company in Israel. I also built a mobile app with Vue and Laravel for UK landlords to keep track of mandatory certifications such as Gas Safety and other inspections.",
    "exp.hospital.body": "Built the hospital's web portal (quotes, online purchases, lab results, video consultations, loyalty and sales dashboard). Earlier I built a PHP/MySQL module that gathered into one view the information staff used to check across many tabs, improving response times and user traceability.",
    "exp.efoes.role": "Computer science teacher",
    "exp.efoes.body": "From the classroom I went on to lead the IT department: we updated and created new courses and built the institution's course platform with PHP, PostgreSQL and JavaScript.",
    "exp.freelance.role": "Freelance developer",
    "exp.freelance.body": "Almost ten years building web and mobile applications and supporting transaction analysis for international clients.",
    "exp.claro.role": "Switching support",
    "exp.claro.body": "Network and datacenter equipment inventory and layout plans, site surveys with browsing tests, material requests in SAP and port occupancy forecasting.",

    "skills.title": "Skills",
    "skills.data": "Data",
    "skills.quality": "Quality & workflow",
    "skills.ai": "AI-assisted development",

    "edu.title": "Education",
    "edu.degree": "B.Sc. in Computer Systems Engineering",
    "edu.courses": "Courses",
    "edu.c0": "Full Stack JavaScript Developer · Platzi",
    "edu.c6": "Advanced English · UNICAES",
    "edu.c1": "Professional JavaScript",
    "edu.c2": "React Router & Redux",
    "edu.c3": "Backend with Node.js",
    "edu.c4": "Project Management Fundamentals",
    "edu.c5": "Effective Time Management",
    "edu.languages": "Languages",
    "edu.l1": "Spanish · native",
    "edu.l2": "English · professional working",

    "contact.title": "Contact",
    "contact.lead": "Have a project, a role or an idea? Drop me a line."
  }
};

const pageMeta = {
  es: {
    title: "Carlos García · Desarrollador Full Stack",
    description: "Carlos García, ingeniero en sistemas y desarrollador full stack (PHP, WordPress/WooCommerce, React, Laravel) en Santa Ana, El Salvador.",
    toggleLabel: "EN",
    toggleAria: "Switch to English",
    themeToDark: "Activar modo oscuro",
    themeToLight: "Activar modo claro"
  },
  en: {
    title: "Carlos García · Full Stack Developer",
    description: "Carlos García, systems engineer and full stack developer (PHP, WordPress/WooCommerce, React, Laravel) based in Santa Ana, El Salvador.",
    toggleLabel: "ES",
    toggleAria: "Cambiar a español",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode"
  }
};
