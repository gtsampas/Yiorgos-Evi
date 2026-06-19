# Γιώργος & Εύη · Wedding Invite

Στατικό, one-page online προσκλητήριο (EL/EN) με ύφος/ροή όπως το demo που έστειλες:
- cover “envelope” που ανοίγει,
- countdown για `2026-09-26 17:30` (ώρα Ελλάδας),
- χάρτες για τελετή/δεξίωση,
- RSVP φόρμα με επιλογή παρουσίας + steppers (Netlify Forms).

## Τοπική προεπισκόπηση
Από το φάκελο `Yiorgos-Evi`:

```bash
./scripts/dev-server.sh
```

Μετά άνοιξε στο browser: `http://127.0.0.1:8765/`

(Στο Cursor χρησιμοποίησε αυτό το URL — όχι `file://`.)

### Οδηγός ταξιδιού (PDF)
Τα PDF (EL/EN/SQ) βρίσκονται στο `assets/guides/`. Για επανδημιουργία:

```bash
.venv/bin/python scripts/generate-travel-pdfs.py
```

## Hosting (προτείνεται Netlify – για να δουλεύει το RSVP)
### Επιλογή A: “Drag & Drop” (ο πιο γρήγορος τρόπος)
- Μπες στο Netlify και κάνε “Add new site” → “Deploy manually”.
- Σύρε μέσα **ολόκληρο** τον φάκελο `Yiorgos-Evi` (όχι μόνο τα αρχεία).
- Θα πάρεις ένα public link τύπου `https://something.netlify.app`.

Για να παίρνεις τα RSVPs:
- Netlify → Site → **Forms** → `rsvp`
- Εκεί βλέπεις submissions και ρυθμίζεις email notifications.

### Επιλογή B: GitHub + Netlify (πιο “developer”, πιο σταθερό)
- Ανέβασε το repo στο GitHub.
- Netlify → “Import from Git”.
- Build command: (κενό)
- Publish directory: `/` (root)

## Πώς το στέλνεις στους καλεσμένους

**Δημόσιο site:** [https://www.giorgosevi.com](https://www.giorgosevi.com)

- Στέλνεις το link (WhatsApp/Viber/SMS/email) — γενικό ή προσωποποιημένο (δείτε παρακάτω).
- Το domain συνδέεται στο Netlify → **Domain settings** (αν χρησιμοποιείς Netlify για hosting).

### Προσωποποιημένο link (ονόματα καλεσμένων)
Στην αρχή της σελίδας εμφανίζεται π.χ. **«Βασίλη και Μαρία, με χαρά σας προσκαλούμε στον γάμο μας»** αντί για το γενικό κείμενο.

**Τρόπος 1 — ονόματα απευθείας στο link** (πιο απλός):

```
https://www.giorgosevi.com/?to=Βασίλη%20και%20Μαρία
```

Άλλος καλεσμένος:

```
https://www.giorgosevi.com/?to=Γιάννη%20και%20Ελένη
```

Με αγγλικά + γλώσσα:

```
https://www.giorgosevi.com/?to=Vasilis%20and%20Maria&lang=en
```

**Τρόπος 2 — σύντομο κλειδί** (χωρίς ελληνικά στο URL): στο `script.js` ξεσχολιάστε/προσθέστε γραμμές στο `GUEST_ALIASES`, π.χ.:

```javascript
const GUEST_ALIASES = {
  "vasilis-maria": "Βασίλη και Μαρία",
  "giannis-eleni": "Γιάννη και Ελένη",
};
```

Και στέλνετε: `https://www.giorgosevi.com/?to=vasilis-maria`

**Σημείωση:** Γράψτε τα ονόματα όπως θέλετε να φαίνονται (π.χ. «Βασίλη και Μαρία» ή «Βασίλη» μόνο). Το `&` μέσα στα ονόματα χρειάζεται `%26` στο URL.

## Αλλαγές κειμένων
Όλα τα κείμενα (EL/EN) είναι στο `script.js` στο αντικείμενο `translations`.