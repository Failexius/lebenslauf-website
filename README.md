# Digitaler Lebenslauf

Quellcode für den interaktiven, responsiven und druckoptimierten Web-Lebenslauf von Saidfiasal Khawarin.

---

## Live-Version

Die Website wird über GitHub Pages bereitgestellt:
[failexius.github.io/lebenslauf-website](https://failexius.github.io/lebenslauf-website/)

---

## Technische Merkmale

- **Profilbild-Umschaltung:** Dynamischer Wechsel zwischen Casual- und Business-Profilbild per JavaScript (`script.js`) inklusive Preloading beider Bildressourcen.
- **Druck- und PDF-Optimierung (`@media print`):**
  - Automatisches Umschalten auf das Business-Profilbild vor dem Druck (`beforeprint`) und Wiederherstellen des vorherigen Zustands nach dem Druck (`afterprint`).
  - Festes A4-Seitenlayout mit 1,5 cm Seitenrändern und Vermeidung unvollständiger Umbrüche (`break-inside: avoid; break-after: avoid;`).
  - Ausblenden interaktiver Steuerelemente im Druckmodus.
- **Responsives Layout:**
  - Desktop: Zweispaltiges CSS Grid (Hauptspalte für Werdegang, Ausbildung und Projekte; Seitenleiste für Skills, Zertifikate und Kontaktdaten).
  - Mobile: Einspaltiges Flusslayout für kompakte Bildschirme.
- **Zero Dependencies:** Reines HTML5, CSS3 und Vanilla JavaScript (ES6) ohne externe Build-Tools oder Node.js-Abhängigkeiten. Externe Ressourcen beschränken sich auf die Schriftart *Plus Jakarta Sans* und Font Awesome 6 Icons.

---

## Projektstruktur

```text
lebenslauf-website/
├── index.html                 # Semantischer Aufbau und Inhalte
├── style.css                  # Stylesheet mit CSS Grid, Flexbox und @media print
├── script.js                  # Bild-Toggle-Logik und Print-Event-Handling
├── profilbild_business.jpg    # Business-Profilfoto
├── profilbild_casual.jpg      # Casual-Profilfoto
├── .gitignore                 # Git-Ausschlussregeln
└── README.md                  # Projektdokumentation
```

---

## Lokale Ausführung

1. Repository klonen:
   ```bash
   git clone git@github.com:Failexius/lebenslauf-website.git
   cd lebenslauf-website
   ```

2. Datei `index.html` direkt im Browser öffnen oder einen lokalen Webserver starten:
   ```bash
   python3 -m http.server 8000
   ```
   Anschließend im Browser `http://localhost:8000` aufrufen.

---

## Kontakt

- **Name:** Saidfiasal Khawarin
- **Standort:** Graz, Österreich
- **GitHub:** [Failexius](https://github.com/Failexius)
- **E-Mail:** saidfiasalkhawarin@gmail.com
