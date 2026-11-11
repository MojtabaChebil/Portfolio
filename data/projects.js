export const projects = [
  {
    slug: "tech-assessment-platform",
    num: "01",
    title: "StackSkill – Technical Assessment Platform",
    type: "Master's thesis · Pixelium",
    year: "2024",
    summary:
      "Platform for technical hiring and skill management: online coding tests with an integrated code editor, role-based access and real-time dashboards.",
    problem:
      "Recruiters needed a structured way to test candidates' programming skills and follow them through the interview process.",
    role:
      "Designed and built the application end-to-end as my Master's thesis: data model, REST API, authentication and the frontend.",
    features: [
      "Live coding interview: code editor, language picker, countdown timer and automatic test cases",
      "Real-time chat between candidate and recruiter during the interview",
      "Results per interview: accepted test cases, run time, memory and time spent outside the tab",
      "Recruiter area: invite candidates by e-mail, schedule and follow interviews",
      "Super-admin area: platform statistics, user management and coding challenges (create, edit, delete)",
      "Practice mode so candidates can prepare before the interview",
      "Three roles with JWT authentication: candidate, recruiter, super admin",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Fastify", "MongoDB", "Docker", "JWT"],
    image: "/assets/projects/stackskill/06-live-interview.jpg",
    video: "/assets/projects/stackskill/stackskill-demo.mp4",
    poster: "/assets/projects/stackskill/stackskill-poster.jpg",
    videoCaption: "Demo video (2:00) – shortened from the full recording of the project.",
    gallery: [
      { src: "/assets/projects/stackskill/06-live-interview.jpg", caption: "Live coding interview with timer and test cases" },
      { src: "/assets/projects/stackskill/07-interview-results.jpg", caption: "Interview results incl. time spent outside the tab" },
      { src: "/assets/projects/stackskill/03-recruiter-dashboard.jpg", caption: "Recruiter dashboard" },
      { src: "/assets/projects/stackskill/04-schedule-interview.jpg", caption: "Scheduling an interview" },
      { src: "/assets/projects/stackskill/05-invitations.jpg", caption: "Inviting candidates by e-mail" },
      { src: "/assets/projects/stackskill/08-practice-mode.jpg", caption: "Practice mode for candidates" },
      { src: "/assets/projects/stackskill/09-admin-dashboard.jpg", caption: "Super-admin statistics" },
      { src: "/assets/projects/stackskill/10-challenges.jpg", caption: "Managing coding challenges" },
      { src: "/assets/projects/stackskill/01-landing.jpg", caption: "Landing page" },
      { src: "/assets/projects/stackskill/02-features.jpg", caption: "Landing page – tech highlights" },
    ],
    live: "",
    github: "",
    note: "Company project – source code is not public.",

    de: {
      title: "StackSkill – Plattform für technische Assessments",
      type: "Masterarbeit · Pixelium",
      summary:
        "Plattform für technisches Recruiting und Kompetenzmanagement: Online-Coding-Tests mit integriertem Code-Editor, rollenbasiertem Zugriff und Echtzeit-Dashboards.",
      problem:
        "Recruiter brauchten eine strukturierte Möglichkeit, die Programmierkenntnisse von Kandidaten zu prüfen und sie durch den gesamten Interviewprozess zu begleiten.",
      role:
        "Als Masterarbeit eigenständig end-to-end konzipiert und entwickelt: Datenmodell, REST-API, Authentifizierung und Frontend.",
      features: [
        "Live-Coding-Interview: Code-Editor, Sprachauswahl, Countdown-Timer und automatische Testfälle",
        "Echtzeit-Chat zwischen Kandidat und Recruiter während des Interviews",
        "Ergebnisse pro Interview: bestandene Testfälle, Laufzeit, Speicherverbrauch und Zeit außerhalb des Tabs",
        "Recruiter-Bereich: Kandidaten per E-Mail einladen, Interviews planen und verfolgen",
        "Super-Admin-Bereich: Plattformstatistiken, Benutzerverwaltung und Coding-Challenges (erstellen, bearbeiten, löschen)",
        "Übungsmodus, damit sich Kandidaten vor dem Interview vorbereiten können",
        "Drei Rollen mit JWT-Authentifizierung: Kandidat, Recruiter, Super-Admin",
      ],
      videoCaption: "Demo-Video (2:00) – gekürzt aus der vollständigen Aufnahme des Projekts.",
      note: "Unternehmensprojekt – der Quellcode ist nicht öffentlich.",
      gallery: [
        "Live-Coding-Interview mit Timer und Testfällen",
        "Interview-Ergebnisse inkl. Zeit außerhalb des Tabs",
        "Recruiter-Dashboard",
        "Interview planen",
        "Kandidaten per E-Mail einladen",
        "Übungsmodus für Kandidaten",
        "Super-Admin-Statistiken",
        "Coding-Challenges verwalten",
        "Landingpage",
        "Landingpage – technische Highlights",
      ],
    },
  },
  {
    slug: "medical-appointments",
    num: "02",
    title: "MedApp – Medical Appointment System",
    type: "Academic project · Spring Boot microservices",
    year: "2024 · updated 2026",
    summary:
      "Appointment booking for patients and doctors, built as Spring Boot microservices behind an API gateway, with an Angular frontend and role-based access.",
    problem:
      "Patients, doctors and the practice need one place to book, confirm and cancel appointments – without double bookings and with each role seeing only its own data.",
    role:
      "Designed and built the whole system alone: service split, REST APIs, security with JWT at the gateway, inter-service calls, tests and the Angular frontend.",
    features: [
      "6 Spring Boot services: gateway, auth, patients, doctors, appointments, config server + Eureka discovery",
      "JWT authentication (BCrypt) validated at the gateway, with three roles: patient, doctor, admin",
      "Booking rules: no overlapping appointments for a doctor or a patient (HTTP 409), only future slots",
      "Services talk to each other with OpenFeign; each service has its own MySQL database",
      "Clean REST API with validation, RFC 7807 error responses and Swagger UI",
      "Unit tests with JUnit 5 and Mockito",
      "Angular 19 frontend: admin dashboard, doctor agenda, patient booking",
    ],
    stack: ["Java 17", "Spring Boot 3", "Spring Cloud", "Spring Security", "JWT", "MySQL", "Angular 19", "TypeScript", "JUnit 5"],
    image: "/assets/projects/medapp/02-appointments.jpg",
    gallery: [
      { src: "/assets/projects/medapp/00-architecture.jpg", caption: "Microservice architecture" },
      { src: "/assets/projects/medapp/01-admin-dashboard.jpg", caption: "Admin dashboard" },
      { src: "/assets/projects/medapp/02-appointments.jpg", caption: "Appointments – confirm or cancel" },
      { src: "/assets/projects/medapp/07-doctor-agenda.jpg", caption: "Doctor's agenda (doctor role)" },
      { src: "/assets/projects/medapp/08-patient-appointments.jpg", caption: "Patient's own appointments (patient role)" },
      { src: "/assets/projects/medapp/03-patients.jpg", caption: "Patient management" },
      { src: "/assets/projects/medapp/04-doctors.jpg", caption: "Doctors, filter by speciality" },
      { src: "/assets/projects/medapp/06-register.jpg", caption: "Sign-up as patient or doctor" },
    ],
    live: "",
    github: "https://github.com/MojtabaChebil/Medicine-App",
    note: "",
    de: {
      title: "MedApp – Terminverwaltung für Arztpraxen",
      type: "Studienprojekt · Spring-Boot-Microservices",
      year: "2024 · überarbeitet 2026",
      summary:
        "Terminbuchung für Patienten und Ärzte als Spring-Boot-Microservices hinter einem API-Gateway, mit Angular-Frontend und rollenbasiertem Zugriff.",
      problem:
        "Patienten, Ärzte und Praxis brauchen einen zentralen Ort, um Termine zu buchen, zu bestätigen und abzusagen – ohne Doppelbuchungen und so, dass jede Rolle nur ihre eigenen Daten sieht.",
      role:
        "Das gesamte System allein konzipiert und umgesetzt: Aufteilung in Services, REST-APIs, JWT-Sicherheit im Gateway, Kommunikation zwischen den Services, Tests und das Angular-Frontend.",
      features: [
        "6 Spring-Boot-Services: Gateway, Auth, Patienten, Ärzte, Termine, Config-Server + Eureka-Discovery",
        "JWT-Authentifizierung (BCrypt), geprüft im Gateway, mit drei Rollen: Patient, Arzt, Admin",
        "Buchungsregeln: keine überschneidenden Termine für Arzt oder Patient (HTTP 409), nur zukünftige Termine",
        "Kommunikation zwischen den Services mit OpenFeign; jeder Service hat eine eigene MySQL-Datenbank",
        "Saubere REST-API mit Validierung, Fehlerantworten nach RFC 7807 und Swagger UI",
        "Unit-Tests mit JUnit 5 und Mockito",
        "Angular-19-Frontend: Admin-Dashboard, Terminkalender für Ärzte, Terminbuchung für Patienten",
      ],
      gallery: [
        "Microservice-Architektur",
        "Admin-Dashboard",
        "Termine – bestätigen oder absagen",
        "Terminkalender des Arztes (Rolle Arzt)",
        "Eigene Termine des Patienten (Rolle Patient)",
        "Patientenverwaltung",
        "Ärzte, Filter nach Fachrichtung",
        "Registrierung als Patient oder Arzt",
      ],
    },
  },
  {
    slug: "buchshop",
    num: "03",
    title: "BuchShop – Online Bookshop",
    type: "Academic project · Full-stack web app",
    year: "2023 · updated 2026",
    summary:
      "Online bookshop where customers browse a catalogue, save favourites, fill a shopping cart and place orders – Angular frontend with a Node.js / Express REST API.",
    problem: "",
    role:
      "Built frontend and backend alone: REST API with JWT authentication, Angular app with standalone components and signals, responsive design.",
    features: [
      "Book catalogue with search and category filters, detail page per book",
      "Sign-up and login with JWT, passwords hashed with bcrypt",
      "Favourites and shopping cart with live subtotal",
      "Checkout, order confirmation and order history in the account page",
      "Route guards and an HTTP interceptor that adds the token automatically",
      "Fully responsive (mobile, tablet, desktop)",
    ],
    stack: ["Angular 21", "TypeScript", "Node.js", "Express", "JWT", "REST API"],
    image: "/assets/projects/buchshop/01-home.jpg",
    gallery: [
      { src: "/assets/projects/buchshop/01-home.jpg", caption: "Home page" },
      { src: "/assets/projects/buchshop/02-search.jpg", caption: "Catalogue with category filter" },
      { src: "/assets/projects/buchshop/03-book-detail.jpg", caption: "Book details" },
      { src: "/assets/projects/buchshop/04-cart.jpg", caption: "Shopping cart" },
      { src: "/assets/projects/buchshop/06-favorites.jpg", caption: "Favourites" },
      { src: "/assets/projects/buchshop/07-account.jpg", caption: "Account and order history" },
      { src: "/assets/projects/buchshop/05-login.jpg", caption: "Login" },
      { src: "/assets/projects/buchshop/08-mobile.jpg", caption: "Mobile view" },
    ],
    live: "",
    github: "https://github.com/MojtabaChebil/BuchShop",
    note: "",
    de: {
      title: "BuchShop – Online-Buchhandlung",
      type: "Studienprojekt · Full-Stack-Webanwendung",
      year: "2023 · überarbeitet 2026",
      summary:
        "Online-Buchhandlung, in der Kunden den Katalog durchsuchen, Favoriten speichern, den Warenkorb füllen und bestellen – Angular-Frontend mit einer REST-API in Node.js/Express.",
      role:
        "Frontend und Backend allein entwickelt: REST-API mit JWT-Authentifizierung, Angular-App mit Standalone Components und Signals, responsives Design.",
      features: [
        "Buchkatalog mit Suche und Kategorie-Filtern, Detailseite pro Buch",
        "Registrierung und Login mit JWT, Passwörter mit bcrypt gehasht",
        "Favoriten und Warenkorb mit live berechneter Zwischensumme",
        "Checkout, Bestellbestätigung und Bestellhistorie im Kundenkonto",
        "Route Guards und ein HTTP-Interceptor, der das Token automatisch mitsendet",
        "Vollständig responsiv (Smartphone, Tablet, Desktop)",
      ],
      gallery: [
        "Startseite",
        "Katalog mit Kategorie-Filter",
        "Buchdetails",
        "Warenkorb",
        "Favoriten",
        "Kundenkonto und Bestellhistorie",
        "Login",
        "Mobile Ansicht",
      ],
    },
  },
  {
    slug: "savane-ecommerce",
    num: "04",
    title: "SAVANE – E-Commerce Marketplace",
    type: "Bachelor's thesis · DIGINOV",
    year: "2022",
    summary:
      "Multi-vendor e-commerce marketplace built on PrestaShop: professional and private sellers publish their products, customers order and pay online, and a super-admin manages the platform.",
    problem:
      "Customers had to go to the shop in person to find and buy products. The goal was an online marketplace where sellers can publish their products and customers can order with home delivery.",
    role:
      "Built the platform as my Bachelor's thesis in a Scrum team: requirements analysis and UML design (use-case, class and sequence diagrams), Balsamiq wireframes, and the implementation of the shop, the seller area and the super-admin back office.",
    features: [
      "Product catalogue with search, quick view, favourites and shopping cart",
      "Checkout with delivery options and card payment via Stripe",
      "Order confirmation, order history and PDF invoices",
      "Seller accounts for professionals (SIRET, VAT number) and individuals, who manage their own products",
      "Super-admin back office for users, products and categories",
      "Live customer chat with Tidio",
    ],
    stack: ["PrestaShop", "PHP", "MySQL", "JavaScript", "Bootstrap", "REST API", "Stripe"],
    image: "/assets/projects/savane/01-home.jpg",
    video: "/assets/projects/savane/savane-demo.mp4",
    videoCaption: "Demo video (1:30) recorded during the project.",
    poster: "/assets/projects/savane/savane-poster.jpg",
    gallery: [
      { src: "/assets/projects/savane/01-home.jpg", caption: "Storefront" },
      { src: "/assets/projects/savane/02-quickview.jpg", caption: "Product quick view" },
      { src: "/assets/projects/savane/04-cart.jpg", caption: "Shopping cart" },
      { src: "/assets/projects/savane/06-payment.jpg", caption: "Card payment (Stripe)" },
      { src: "/assets/projects/savane/07-order-confirmed.jpg", caption: "Order confirmation" },
      { src: "/assets/projects/savane/08-order-history.jpg", caption: "Order history & invoices" },
      { src: "/assets/projects/savane/09-chat.jpg", caption: "Live chat (Tidio)" },
      { src: "/assets/projects/savane/10-pro-signup.jpg", caption: "Professional seller sign-up" },
      { src: "/assets/projects/savane/13-admin-categories.jpg", caption: "Super-admin back office" },
    ],
    live: "",
    github: "",
    note: "Company project – source code is not public.",
    de: {
      title: "SAVANE – E-Commerce-Marktplatz",
      type: "Bachelorarbeit · DIGINOV",
      summary:
        "Multi-Vendor-Marktplatz auf Basis von PrestaShop: Gewerbliche und private Verkäufer veröffentlichen ihre Produkte, Kunden bestellen und bezahlen online, und ein Super-Admin verwaltet die Plattform.",
      problem:
        "Kunden mussten persönlich ins Geschäft gehen, um Produkte zu finden und zu kaufen. Ziel war ein Online-Marktplatz, auf dem Verkäufer ihre Produkte anbieten und Kunden mit Lieferung nach Hause bestellen können.",
      role:
        "Die Plattform als Bachelorarbeit in einem Scrum-Team umgesetzt: Anforderungsanalyse und UML-Entwurf (Anwendungsfall-, Klassen- und Sequenzdiagramme), Wireframes mit Balsamiq sowie die Umsetzung von Shop, Verkäuferbereich und Super-Admin-Backoffice.",
      features: [
        "Produktkatalog mit Suche, Schnellansicht, Favoriten und Warenkorb",
        "Checkout mit Versandoptionen und Kartenzahlung über Stripe",
        "Bestellbestätigung, Bestellhistorie und PDF-Rechnungen",
        "Verkäuferkonten für Gewerbetreibende (SIRET, USt-IdNr.) und Privatpersonen, die ihre eigenen Produkte verwalten",
        "Super-Admin-Backoffice für Benutzer, Produkte und Kategorien",
        "Live-Kundenchat mit Tidio",
      ],
      videoCaption: "Demo-Video (1:30), während des Projekts aufgenommen.",
      note: "Unternehmensprojekt – der Quellcode ist nicht öffentlich.",
      gallery: [
        "Shop-Startseite",
        "Produkt-Schnellansicht",
        "Warenkorb",
        "Kartenzahlung (Stripe)",
        "Bestellbestätigung",
        "Bestellhistorie & Rechnungen",
        "Live-Chat (Tidio)",
        "Registrierung für gewerbliche Verkäufer",
        "Super-Admin-Backoffice",
      ],
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const localizeProject = (project, lang) => {
  if (!project || lang !== "de" || !project.de) return project;
  const { gallery: captions, ...texts } = project.de;
  return {
    ...project,
    ...texts,
    gallery: project.gallery?.map((g, i) => ({ ...g, caption: captions?.[i] ?? g.caption })),
  };
};
