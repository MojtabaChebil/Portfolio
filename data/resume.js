// Texts of the resume page in English and German.
// Icons and layout stay in app/resume/page.jsx.

export const resumeContent = {
  en: {
    tabs: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      association: "Volunteering",
      about: "About me",
    },
    about: {
      title: "About me",
      description:
        "I'm a full-stack developer from Tunisia, now based in Braunschweig and studying for an M.Sc. in Computer Science at Ostfalia. I've built web applications in internships and thesis projects with React/Next.js, Node.js, Spring Boot and MongoDB. Outside of code I've led teams as president of JCI Bekalta, which taught me to organise, communicate and take responsibility.",
      labels: {
        name: "Name",
        location: "Location",
        phone: "Phone",
        email: "Email",
        availability: "Availability",
        languages: "Languages",
      },
      availability: "Werkstudent (20 h/week) or full-time",
      languages: "Arabic (native), German (C1), French (B2), English (B1)",
    },
    experience: {
      title: "My experience",
      description:
        "Internships and thesis projects where I built real applications for companies, from e-commerce to technical recruiting platforms.",
      items: [
        {
          company: "Pixelium · Sousse",
          position: "Master's Thesis – Full-Stack Developer",
          duration: "02.2024 – 05.2024",
          stack: "Next.js, Fastify, MongoDB, Docker",
        },
        {
          company: "DIGINOV · Sousse",
          position: "Bachelor's Thesis – Web Developer",
          duration: "02.2022 – 05.2022",
          stack: "PrestaShop, PHP",
        },
        {
          company: "Alpha Computers & Consulting · Mahdia",
          position: "Full-Stack Developer Intern",
          duration: "08.2021",
          stack: "MongoDB, Express, React, Node.js",
        },
        {
          company: "eNano-Tech · Monastir",
          position: "Front-End Developer Intern",
          duration: "01.2020",
          stack: "HTML, CSS, JavaScript",
        },
      ],
    },
    education: {
      title: "My education",
      description:
        "Computer science studies in Tunisia and Germany, with a focus on web and multimedia applications.",
      items: [
        {
          institution: "Ostfalia University of Applied Sciences, Wolfenbüttel",
          degree: "M.Sc. Computer Science",
          duration: "2026 – present",
        },
        {
          institution: "ISITCom Sousse · recognised by the ZAB as a German Master's level",
          degree: "Professional Master in Web & Multimedia Services",
          duration: "2022 – 2024",
        },
        {
          institution: "ISITCom Hammam Sousse",
          degree: "Bachelor in Computer Science & Multimedia",
          duration: "2019 – 2022",
        },
        {
          institution: "Bekalta High School",
          degree: "Baccalaureate, Computer Science",
          duration: "2019",
        },
      ],
    },
    skills: {
      title: "My skills",
      description: "Core technologies I use in my projects, plus tools I have worked with.",
      groups: { core: "Core", other: "Also worked with" },
    },
    association: {
      title: "Volunteering & leadership",
      description:
        "Leadership roles in civic, humanitarian and student organisations, where I organised programmes, led teams and handled external relations.",
      items: [
        { company: "JCI Bekalta", position: "President", duration: "01.2023 – 12.2023" },
        {
          company: "JCI Bekalta",
          position: "Vice President, Programmes & External Relations",
          duration: "01.2022 – 12.2022",
        },
        { company: "Club ARSII-ISITCom", position: "Vice President", duration: "12.2021 – 12.2022" },
        {
          company: "Red Crescent (ISITCom chapter)",
          position: "Head of First Aid Department",
          duration: "09.2020 – 03.2023",
        },
        { company: "ARSII Association", position: "Member", duration: "03.2021 – 07.2024" },
        { company: "ENIM AeroSpace Club", position: "Member", duration: "10.2020 – 07.2024" },
      ],
    },
  },

  de: {
    tabs: {
      experience: "Erfahrung",
      education: "Ausbildung",
      skills: "Kenntnisse",
      association: "Ehrenamt",
      about: "Über mich",
    },
    about: {
      title: "Über mich",
      description:
        "Ich bin Full-Stack-Entwickler aus Tunesien, lebe in Braunschweig und studiere Informatik (M.Sc.) an der Ostfalia. In Praktika und Abschlussarbeiten habe ich Webanwendungen mit React/Next.js, Node.js, Spring Boot und MongoDB entwickelt. Als Präsident der JCI Bekalta habe ich Teams geleitet und dabei gelernt, zu organisieren, zu kommunizieren und Verantwortung zu übernehmen.",
      labels: {
        name: "Name",
        location: "Wohnort",
        phone: "Telefon",
        email: "E-Mail",
        availability: "Verfügbarkeit",
        languages: "Sprachen",
      },
      availability: "Werkstudent (20 Std./Woche) oder Vollzeit",
      languages: "Arabisch (Muttersprache), Deutsch (C1), Französisch (B2), Englisch (B1)",
    },
    experience: {
      title: "Berufserfahrung",
      description:
        "Praktika und Abschlussarbeiten, in denen ich echte Anwendungen für Unternehmen entwickelt habe – vom E-Commerce bis zur Plattform für technisches Recruiting.",
      items: [
        {
          company: "Pixelium · Sousse",
          position: "Masterarbeit – Full-Stack-Entwickler",
          duration: "02.2024 – 05.2024",
          stack: "Next.js, Fastify, MongoDB, Docker",
        },
        {
          company: "DIGINOV · Sousse",
          position: "Bachelorarbeit – Webentwickler",
          duration: "02.2022 – 05.2022",
          stack: "PrestaShop, PHP",
        },
        {
          company: "Alpha Computers & Consulting · Mahdia",
          position: "Praktikum – Full-Stack-Entwickler",
          duration: "08.2021",
          stack: "MongoDB, Express, React, Node.js",
        },
        {
          company: "eNano-Tech · Monastir",
          position: "Praktikum – Frontend-Entwickler",
          duration: "01.2020",
          stack: "HTML, CSS, JavaScript",
        },
      ],
    },
    education: {
      title: "Ausbildung",
      description:
        "Informatikstudium in Tunesien und Deutschland mit Schwerpunkt auf Web- und Multimedia-Anwendungen.",
      items: [
        {
          institution: "Ostfalia Hochschule für angewandte Wissenschaften, Wolfenbüttel",
          degree: "M.Sc. Informatik",
          duration: "seit 2026",
        },
        {
          institution: "ISITCom Sousse · von der ZAB als gleichwertig mit einem deutschen Master bewertet",
          degree: "Professioneller Master Web- und Multimedia-Dienste",
          duration: "2022 – 2024",
        },
        {
          institution: "ISITCom Hammam Sousse",
          degree: "Bachelor Informatik und Multimedia",
          duration: "2019 – 2022",
        },
        {
          institution: "Lycée de Bekalta",
          degree: "Abitur (Baccalauréat), Fachrichtung Informatik",
          duration: "2019",
        },
      ],
    },
    skills: {
      title: "Kenntnisse",
      description:
        "Kerntechnologien aus meinen Projekten sowie weitere Tools, mit denen ich gearbeitet habe.",
      groups: { core: "Kernkompetenzen", other: "Weitere Erfahrung" },
    },
    association: {
      title: "Ehrenamt & Führung",
      description:
        "Führungsrollen in zivilgesellschaftlichen, humanitären und studentischen Organisationen: Programme organisiert, Teams geleitet und Außenbeziehungen betreut.",
      items: [
        { company: "JCI Bekalta", position: "Präsident", duration: "01.2023 – 12.2023" },
        {
          company: "JCI Bekalta",
          position: "Vizepräsident für Programme und Außenbeziehungen",
          duration: "01.2022 – 12.2022",
        },
        { company: "Club ARSII-ISITCom", position: "Vizepräsident", duration: "12.2021 – 12.2022" },
        {
          company: "Roter Halbmond (Sektion ISITCom)",
          position: "Leiter der Erste-Hilfe-Abteilung",
          duration: "09.2020 – 03.2023",
        },
        { company: "ARSII-Verband", position: "Mitglied", duration: "03.2021 – 07.2024" },
        { company: "ENIM AeroSpace Club", position: "Mitglied", duration: "10.2020 – 07.2024" },
      ],
    },
  },
};
