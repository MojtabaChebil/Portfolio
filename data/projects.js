// ============================================================
//  KOL EL PROJETS HOUNI.
//  Bech tzid projet jdid: copy objet kemel, baddel el valeurs.
//  - slug: esm fel URL (/work/<slug>), bla espaces, unique
//  - image: 7ot el capture fi /public/assets/projects/ ; ken fergha
//    yoba3 placeholder b esm el projet
//  - github / live: ken fergha, el bouton ma yoba3ch
//  - year: "2024" wala "2023 · updated 2026" ken 3malt update
// ============================================================

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
  },
  {
    slug: "talkit",
    num: "05",
    title: "TalkIt – Stand-up Comedy Video Platform",
    type: "Internship · Alpha Computers & Consulting",
    year: "2021",
    summary:
      "Social video platform where users publish and watch stand-up comedy content.",
    problem: "",
    role: "Full-stack development of the platform with the MERN stack.",
    features: [
      // TODO: zid el features el 7a9ani9iya (upload, likes, comments, profils...)
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/assets/talkit.png",
    live: "",
    github: "",
    note: "",
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
