// Englische Texte. Deutsch steht direkt in index.html (Standard).
// Schlüssel = data-i18n-Attribut im HTML. HTML-Tags (<strong>, <br>) sind erlaubt.
const translations = {
  en: {
    // Meta (per JS gesetzt, kein data-i18n)
    'meta.title': 'CV - Saidfiasal Khawarin',
    'meta.imgAlt': 'Profile picture Saidfiasal',

    // Header
    'header.subtitle': 'Dual Degree Student in Mobile Software Development | Junior Software Developer',
    'header.summary':
      'Aspiring mobile software developer with a technical foundation from an apprenticeship as an IT systems ' +
      'technician (final apprenticeship exam) and a Matura (higher school leaving certificate) in network technology. ' +
      'I combine solid knowledge of networks and system infrastructure with software development in Java, Python and ' +
      'web technologies, and I am expanding my mobile experience in a dual degree programme. I place particular ' +
      'emphasis on clean code and DevOps workflows with Docker and CI/CD.',

    // Sections
    'section.experience': 'Professional Experience',
    'section.education': 'Education',
    'section.projects': 'Projects &amp; Portfolio',
    'section.skills': 'Certificates &amp; Skills',
    'section.languages': 'Languages &amp; Mobility',
    'section.interests': 'Interests',

    // Experience
    'job.mcw.title': 'IT Support (Office &amp; Field Service)',
    'job.mcw.meta': 'MCW Vienna | 04/2025',
    'job.mcw.li1': 'First-level phone support, ticket management and remote maintenance via AnyDesk &amp; TeamViewer.',
    'job.mcw.li2': 'On-site customer service (Vienna &amp; surrounding area): setup, replacement and troubleshooting of PC workstations.',

    'job.bundesheer.title': 'Compulsory Military Service (Role: Clerk)',
    'job.bundesheer.meta': 'Austrian Armed Forces | 09/2024 – 03/2025',
    'job.bundesheer.li1': 'Administrative support for the platoon command.',
    'job.bundesheer.li2': 'Data management and organisation of daily service operations.',

    'job.amazon.title': 'Logistics Associate',
    'job.amazon.li1': 'Ensuring on-time deliveries in a fast-paced environment.',

    // Education
    'edu.fhj.title': 'Mobile Software Development (BSc, Dual Degree Programme)',
    'edu.fhj.subtitle': 'Focus areas:',
    'edu.fhj.li3': 'Web Engineering, RESTful APIs &amp; Backend Architectures',
    'edu.fhj.li4': 'IT Security, System Automation &amp; Database Design',

    'edu.technikum.title': 'Business Informatics (2 semesters / 60 ECTS completed)',
    'edu.technikum.subtitle': 'Focus areas (complete first year of studies):',
    'edu.technikum.li1': 'Software Development &amp; Modelling: Structured &amp; Object-Oriented Programming (Java), UML',
    'edu.technikum.li2': 'Data Management &amp; Databases: Relational Database Design &amp; SQL',
    'edu.technikum.li3': 'IT Infrastructure &amp; Agile Methods: Computer Networks, Systems &amp; Software Lifecycle Tooling',
    'edu.technikum.li4': 'Business &amp; Management: Business Administration, Accounting, IT Project Management &amp; Business Law',

    'edu.lap.title': 'Final Apprenticeship Exam in IT Systems Engineering',
    'edu.lap.meta': 'Austrian Economic Chamber (WKO) Styria | Completed: 02/2024',

    'edu.matura.title': 'Matura (Higher School Leaving Certificate, Focus: IT / Network Technology)',
    'edu.matura.vwa': 'Pre-scientific thesis: "Cryptocurrencies - Money in the Digital World"',

    // Projects
    'proj.telemetry':
      '<strong>Telemetry System in Go (in development, learning project)</strong><br>' +
      'Personal project for monitoring servers and Docker containers: an agent collects system data (CPU, RAM, ' +
      'storage) and container status and sends it to a central hub, which exposes it via a REST API. ' +
      'This is giving me my first hands-on experience with Go.',
    'proj.homelab':
      '<strong>Self-Hosted Homelab (Raspberry Pi &amp; PC)</strong><br>' +
      'Two-node setup: a Raspberry Pi 3B+ handles 24/7 monitoring (Vaultwarden, Uptime Kuma, touchscreen dashboard ' +
      'with Wake-on-LAN), while a PC (Windows 11 with WSL2) runs more than 20 Docker containers, including ' +
      'Paperless-ngx, Immich, Ollama with Open WebUI, n8n and Syncthing. Connected via Tailscale. ' +
      'Regular updates with prior database backups.',
    'proj.cv':
      '<strong>Web CV &amp; Portfolio</strong><br>' +
      'Responsive website hosted via GitHub Pages.',

    // Skills
    'skills.certs': 'Certificates:',
    'skills.dev': 'Development &amp; Databases:',
    'skills.dev.sql': 'SQL (MySQL, MariaDB) &amp; relational design',
    'skills.devops': 'DevOps, Systems &amp; Hardware:',
    'skills.devops.docker': 'Docker &amp; Docker Compose (multi-node stack with &gt;20 containers)',
    'skills.devops.linux': 'Linux / WSL, System Administration &amp; Networking',
    'skills.devops.infra': 'Server Infrastructure &amp; Subnet Routing (Tailscale, WoL, Uptime Kuma)',
    'skills.devops.n8n': 'Workflow Automation (n8n)',
    'skills.devops.hardware': 'Hardware Assembly, Custom PC Building &amp; Repair',
    'skills.methods': 'Methods &amp; AI:',
    'skills.methods.agile': 'Agile Methods (Scrum) &amp; Requirements Engineering',
    'skills.methods.ai': 'AI-Assisted Development (Antigravity, Claude)',

    // Languages & Mobility
    'lang.de': '<strong>German:</strong> Native speaker',
    'lang.en': '<strong>English:</strong> Fluent (technical English)',
    'lang.ka': '<strong>Georgian:</strong> Conversational (B1 spoken / family language)',
    'lang.fr': '<strong>French:</strong> Basic knowledge (A2 / everyday use)',
    'lang.license': '<strong>Driving licences:</strong> Class B (since 2021) &amp; A2 (since 2025) – own car available',

    // Interests
    'interest.gaming': '<strong>Simulation &amp; Gaming:</strong> Cities: Skylines II (city-building &amp; logic simulation), narrative story games',
    'interest.homelab': '<strong>Homelab &amp; Self-Hosting:</strong> Asymmetric 24/7 server stack (Raspberry Pi &amp; WoL compute node)',
    'interest.food': '<strong>Cooking:</strong> Preparing traditional Georgian dishes (Khinkali, Khachapuri)',
    'interest.sport': '<strong>Leisure &amp; Sports:</strong> Motorcycling (Class A2), strength training',

    // Footer
    'footer.legal': 'Legal Notice &amp; Privacy',
  },
};
