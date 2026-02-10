# Die Große Liebe Bar – Website

Premium-Website für die Die Große Liebe Bar (Göttingen): Speisekarte mit Bildern, Online-Reservierung mit E-Mail-Benachrichtigung.

## Start

```bash
npm install
npm run dev
```

Öffne [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Ausgabe in `dist/`.

## Online-Reservierung (E-Mail)

Das Reservierungsformular sendet Anfragen per **Formspree** an Ihre E-Mail.

1. Auf [formspree.io](https://formspree.io) gehen und kostenlos registrieren.
2. Neues Formular anlegen (z. B. „Reservierung Große Liebe“).
3. In `src/pages/Reservierung.tsx` die Zeile anpassen:

   ```ts
   const FORM_ACTION = 'https://formspree.io/f/IHR_FORM_ID'
   ```

   `IHR_FORM_ID` durch die von Formspree angezeigte Form-ID ersetzen (z. B. `xyzabcde`).

4. Nach dem Absenden einer Reservierung erhalten Sie eine E-Mail mit allen Feldern (Name, Datum, Uhrzeit, Personen, etc.).

Optional: Formspree-Einstellungen (Antwort-E-Mail an Gäste, Benachrichtigungen) im Formspree-Dashboard konfigurieren.

## Struktur

- **Home** – Hero, „Große Liebe“, Flammkuchen-Hinweis
- **Speisekarte** – Menü mit Kategorien und Produktbildern (Unsplash)
- **Reservierung** – Formular → E-Mail an Sie (Formspree)
- **Öffnungszeiten** – Tabelle Bar/Küche
- **Kontakt** – Adresse, E-Mail, Telefon, Social

## Technik

- React 18, TypeScript, Vite
- Tailwind CSS
- React Router
- Formspree für Formularversand (kein eigener Server nötig)
