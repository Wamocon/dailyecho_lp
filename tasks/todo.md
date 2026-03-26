# DailyEcho - Landing Page Implementierungsplan (v2)

## 1. Status der Umsetzung
- [x] Konzept & Copywriting für Landing Page
- [x] Architektur & Wireframing (Sektionen definieren)
- [ ] Design-Integration (Farben, Typo, Komponenten)
- [ ] Technische Umsetzung (Next.js, Tailwind, shadcn)

---

## 2. Der neue Sektionen-Plan (Die emotionale Reise)

### Sektion 1: Das Durchatmen (Hero)
- **Hintergrund:** Pulsierender Aurora-Effekt (weicher Gradient).
- **H1:** „Dein Tag fängt im Kopf an. Wir geben ihm Raum.“
- **Subheadline:** „DailyEcho ist deine private Oase für morgendliche Intentionen und abendliche Reflexion. Drei Minuten am Tag, die alles verändern.“
- **CTA:** RainbowButton mit „Starte deinen ersten Check-in“.
- **TrustBadge:** „100% Privat. Ohne Account. Komplett auf deinem Gerät.“

### Sektion 2: Das Problem – Der Autopilot
- **Hintergrund:** Dezent, `bg-muted` (#f3f4f6 / #2d3748).
- **Format:** Kurze, klare Storyzeile.
- **Copy:** „Wir scrollen, reagieren, funktionieren – und fragen uns: Wo ist die Zeit geblieben? Es ist Zeit, den Autopiloten auszuschalten.“

### Sektion 3: Der Intentions-Loop (Kern-Feature)
- **Format:** Visueller Split (Morgen vs. Abend).
- **Morgen (Fokus):** Grüner/Sonniger Akzent. „Setze den Anker für deinen Tag...“
- **Abend (Frieden):** Blauer/Dunkler Akzent. „Schließe ab, was schwer war. Nimm mit, was schön war.“

### Sektion 4: Fortschritt, der dich umarmt (Gamification)
- **Format:** `IBM Plex Mono` auf kleinen UI-Karten. Darstellung von XP-Balken (`from-violet-500 to-purple-400`), Level, und Streaks.
- **Wording:** „Wachstum sichtbar machen. Ohne Druck. Keine toxischen Bestrafungen. Nur sanfte Erinnerungen.“

### Sektion 5: Wenn es mal nicht gut läuft (Micro-Interventionen)
- **Format:** Nutzen der roten/amber Mood-Farben für starken Kontrast.
- **Wording:** „Ein Tagebuch, das auch dann für dich da ist, wenn der Tag dunkel war. Atemübungen, Lo-Fi-Beats und Journaling an stressigen Tagen.“

### Sektion 6: Dein sicherer Raum (Privacy & Trust)
- **Wording:** „Deine Gedanken. Dein Gerät. Niemand sonst.“
- Klartext reden: Keine Cloud, alles LocalStorage.

### Sektion 7: Finaler CTA
- Wiederholter Aufruf: „Nimm dir 3 Minuten. Für dich.“
- Links im Footer: Zum Produkthandbuch (`/help`).

---

## 3. Nächste technische Setup-Ziele
- [ ] Next.js + Tailwind v4 + shadcn/ui initialisieren.
- [ ] Globale Variablen aus dem `design-styleguide.md` in die `globals.css` überführen.
- [ ] Typografie (`DM Sans`, `IBM Plex Mono`) importieren und konfigurieren.
- [ ] Dark-Mode / Light-Mode Toggle aufsetzen.

