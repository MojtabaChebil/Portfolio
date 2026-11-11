// All UI texts of the portfolio in English and German.
// Resume content lives in data/resume.js, project texts in data/projects.js.

export const LANGS = ["en", "de"];
export const DEFAULT_LANG = "en";
export const LANG_COOKIE = "lang";

export const dictionaries = {
  en: {
    meta: {
      title: "Mojtaba Chebil – Full-Stack Developer",
      description:
        "Full-stack developer (React/Next.js, Node.js, Spring Boot) and M.Sc. Computer Science student at Ostfalia. Open to Werkstudent and full-time roles in Germany.",
      ogDescription:
        "Full-stack developer (React/Next.js, Node.js, Spring Boot). Open to Werkstudent and full-time roles in Germany.",
    },
    nav: { home: "home", resume: "resume", work: "work", contact: "contact" },
    header: { hireMe: "Hire me", openMenu: "Open menu", navigation: "Navigation" },
    site: {
      role: "Full-Stack Developer",
      availability: "Open to Werkstudent & full-time roles",
      location: "Braunschweig, Germany",
    },
    home: {
      hello: "Hello I'm",
      intro:
        "Full-stack developer building web applications with React/Next.js, Node.js and Spring Boot. M.Sc. Computer Science student at Ostfalia University, with a Tunisian Master's degree recognised by the ZAB. German C1.",
      downloadCv: "Download CV",
      photoAlt: "Portrait of Mojtaba Chebil",
    },
    stats: {
      internships: "Internships & theses",
      projects: "Projects built",
      technologies: "Technologies in use",
      german: "German (telc Hochschule)",
    },
    work: {
      caseStudy: "Case study",
      liveDemo: "Live demo",
      github: "GitHub repository",
      sourceCode: "Source code",
      allProjects: "All projects",
      problem: "The problem",
      role: "My role",
      features: "Key features",
      screenshots: "Screenshots",
      stack: "Tech stack",
      screenshotOf: "Screenshot of",
      previous: "Previous project",
      next: "Next project",
    },
    contact: {
      title: "Let's work together",
      text: "Looking for a Werkstudent or a full-stack developer for your team? Send me a message and I'll get back to you within 24 hours.",
      firstname: "First name",
      lastname: "Last name",
      email: "Email address",
      phone: "Phone number (optional)",
      topicPlaceholder: "What is it about?",
      topics: {
        werkstudent: "Werkstudent position",
        fulltime: "Full-time position",
        internship: "Internship / thesis",
        other: "Other",
      },
      message: "Type your message here.",
      defaultSubject: "Contact via portfolio",
      sent: "Thanks! Your message was sent.",
      error: "Something went wrong – please email me directly.",
      sending: "Sending…",
      submit: "Send message",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
    },
  },

  de: {
    meta: {
      title: "Mojtaba Chebil – Full-Stack-Entwickler",
      description:
        "Full-Stack-Entwickler (React/Next.js, Node.js, Spring Boot) und Masterstudent der Informatik an der Ostfalia. Offen für Werkstudentenstellen und Festanstellungen in Deutschland.",
      ogDescription:
        "Full-Stack-Entwickler (React/Next.js, Node.js, Spring Boot). Offen für Werkstudentenstellen und Festanstellungen in Deutschland.",
    },
    nav: { home: "Start", resume: "Lebenslauf", work: "Projekte", contact: "Kontakt" },
    header: { hireMe: "Jetzt anfragen", openMenu: "Menü öffnen", navigation: "Navigation" },
    site: {
      role: "Full-Stack-Entwickler",
      availability: "Offen für Werkstudentenstellen & Festanstellung",
      location: "Braunschweig, Deutschland",
    },
    home: {
      hello: "Hallo, ich bin",
      intro:
        "Full-Stack-Entwickler für Webanwendungen mit React/Next.js, Node.js und Spring Boot. Masterstudent der Informatik an der Ostfalia Hochschule, mit einem von der ZAB anerkannten tunesischen Masterabschluss. Deutsch C1.",
      downloadCv: "Lebenslauf herunterladen",
      photoAlt: "Porträt von Mojtaba Chebil",
    },
    stats: {
      internships: "Praktika & Abschlussarbeiten",
      projects: "Umgesetzte Projekte",
      technologies: "Technologien im Einsatz",
      german: "Deutsch (telc Hochschule)",
    },
    work: {
      caseStudy: "Projektdetails",
      liveDemo: "Live-Demo",
      github: "GitHub-Repository",
      sourceCode: "Quellcode",
      allProjects: "Alle Projekte",
      problem: "Ausgangslage",
      role: "Meine Rolle",
      features: "Hauptfunktionen",
      screenshots: "Screenshots",
      stack: "Tech-Stack",
      screenshotOf: "Screenshot von",
      previous: "Vorheriges Projekt",
      next: "Nächstes Projekt",
    },
    contact: {
      title: "Lassen Sie uns zusammenarbeiten",
      text: "Sie suchen einen Werkstudenten oder Full-Stack-Entwickler für Ihr Team? Schreiben Sie mir – ich melde mich innerhalb von 24 Stunden.",
      firstname: "Vorname",
      lastname: "Nachname",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer (optional)",
      topicPlaceholder: "Worum geht es?",
      topics: {
        werkstudent: "Werkstudentenstelle",
        fulltime: "Festanstellung",
        internship: "Praktikum / Abschlussarbeit",
        other: "Sonstiges",
      },
      message: "Ihre Nachricht",
      defaultSubject: "Kontakt über das Portfolio",
      sent: "Danke! Ihre Nachricht wurde gesendet.",
      error: "Etwas ist schiefgelaufen – bitte schreiben Sie mir direkt per E-Mail.",
      sending: "Wird gesendet …",
      submit: "Nachricht senden",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      locationLabel: "Standort",
    },
  },
};

export const getDictionary = (lang) => dictionaries[lang] || dictionaries[DEFAULT_LANG];
