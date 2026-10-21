# Mein digitaler Lebenslauf

Willkommen in meinem Repository! Hier liegt der Quellcode für meinen modernen, interaktiven und druckoptimierten digitalen Lebenslauf, den ich von Grund auf neu entwickelt habe.

## 🌐 Live-Ansicht

Die fertige Website ist direkt über GitHub Pages erreichbar:  
👉 **[Lebenslauf von Saidfiasal Khawarin](https://failexius.github.io/lebenslauf-website/)**

---

## 📌 Über dieses Projekt

Dieses Projekt dient als zentrale Web-Präsenz für meinen beruflichen Werdegang als **Junior Software Developer** mit Fokus auf **Mobile Software Development** (Duales Studium an der FH JOANNEUM). Aufbauend auf meinem technischen Fundament aus der Lehre als IT-Systemtechniker (LAP) und der Matura mit Schwerpunkt Netzwerktechnik verbindet die Seite moderne Web-Standards, responsives Layout und druckfertige A4-Optimierung.

---

## ✨ Features & Besonderheiten

- **🔄 Profilbild-Modus (Casual 🌴 / Business 💼):**
  - Interaktives Umschalten des Profilbilds per Button auf der Website (`script.js`).
  - Vorabladen (Preloading) beider Bilder für flüssiges Wechseln ohne Verzögerung.
- **🖨️ Vollständig druck- & PDF-optimiert (`@media print`):**
  - Beim Drucken bzw. PDF-Export (`beforeprint`) wird **automatisch das Business-Profilbild** aktiviert und anschließend wieder auf die vorherige Ansicht zurückgesetzt (`afterprint`).
  - Maßgeschneidertes A4-Layout mit definierten Rändern (1,5 cm) und Vermeidung unschöner Seitenumbrüche (`break-inside: avoid; break-after: avoid;`).
  - Interaktive Steuerelemente (wie der Foto-Modus-Button) werden im Ausdruck automatisch ausgeblendet.
- **📱 Responsives 2-Spalten-Layout:**
  - **Desktop:** Zweispaltige Ansicht mit CSS Grid – Hauptspalte für Erfahrung, Ausbildung & Projekte; Seitenleiste für Zertifikate, Skills & Interessen.
  - **Mobile:** Nahtloser Übergang in ein optimiertes einspaltiges Layout für Smartphones und Tablets.
- **⚡ Zero Dependencies / Vanilla Web:**
  - Kein Build-Schritt, kein Node.js-Overhead: Reines semantisches HTML5, modernes CSS3 und Vanilla JavaScript.
  - Extrem schlank, barrierearm und sofort einsatzbereit.

---

## 🛠️ Verwendete Technologien

- **HTML5:** Semantischer Aufbau (`<header>`, `<main>`, `<aside>`, `<article>`, `<section>`).
- **CSS3:** Custom Properties (CSS-Variablen), CSS Grid & Flexbox, Media Queries für Viewports sowie `@media print` für A4-Druck.
- **Vanilla JavaScript (ES6):** Dynamischer Foto-Toggle und Event-Listener für Browser-Druckaktionen.
- **Typografie & Icons:** Google Font (*Plus Jakarta Sans*) und Font Awesome 6 Icons.

---

## 📂 Projektstruktur

```text
lebenslauf-website/
├── index.html                 # Semantische Struktur und Inhalte des Lebenslaufs
├── style.css                  # Modernes Stylesheet inkl. Responsive- & Print-Styles
├── script.js                  # Bild-Toggle-Logik und Print-Event-Handling
├── profilbild_business.jpg    # Business-Profilfoto
├── profilbild_casual.jpg      # Casual-Profilfoto
├── .gitignore                 # Git-Ausschlussregeln
└── README.md                  # Projektdokumentation
```

---

## 🚀 Lokale Vorschau

Da das Projekt ohne Build-Tools auskommt, kann die Seite direkt lokal betrachtet werden:

1. Repository klonen:
   ```bash
   git clone git@github.com:Failexius/lebenslauf-website.git
   cd lebenslauf-website
   ```

2. Entweder `index.html` direkt im Browser öffnen, oder einen einfachen lokalen Server starten:
   ```bash
   # Mit Python 3
   python3 -m http.server 8000
   ```
   Anschließend im Browser auf `http://localhost:8000` aufrufen.

---

## 📬 Kontakt

- **Name:** Saidfiasal Khawarin
- **Standort:** Graz, Österreich
- **GitHub:** [@Failexius](https://github.com/Failexius)
- **E-Mail:** [saidfiasalkhawarin@gmail.com](mailto:saidfiasalkhawarin@gmail.com)
