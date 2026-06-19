#!/usr/bin/env python3
"""Generate Greece travel guide PDFs (el, en, sq) for the wedding site.

Each section can show one or more photos (saved under assets/guides/img/ by
scripts/fetch-guide-images.py). Set INCLUDE_IMAGES to True to embed them.
A section with an empty heading renders as a plain connecting paragraph.
"""

from pathlib import Path

from fpdf import FPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "assets" / "guides"
IMG_DIR = OUT_DIR / "img"
FONT = Path("/Library/Fonts/Arial Unicode.ttf")

# Flip to True to embed one photo per section again.
INCLUDE_IMAGES = False


class GuidePDF(FPDF):
    def footer(self):
        self.set_y(-15)
        self.set_font("Guide", size=9)
        self.set_text_color(120, 100, 70)
        self.cell(0, 10, f"Giorgos & Evi · {self.page_no()}", align="C")


def add_image(pdf: FPDF, key: str) -> None:
    path = IMG_DIR / f"{key}.jpg"
    if not path.exists():
        print(f"  (missing image: {path.name})")
        return
    with Image.open(path) as im:
        iw, ih = im.size
    width = pdf.epw
    height = width * ih / iw
    if pdf.get_y() + height + 4 > pdf.page_break_trigger:
        pdf.add_page()
    pdf.image(str(path), x=pdf.l_margin, w=width)
    pdf.ln(4)


def build_pdf(lang: str, title: str, subtitle: str, sections: list) -> None:
    pdf = GuidePDF()
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_font("Guide", "", str(FONT))
    pdf.add_page()
    pdf.set_font("Guide", size=18)
    pdf.multi_cell(0, 10, title)
    pdf.ln(4)
    pdf.set_font("Guide", size=12)
    pdf.set_text_color(90, 70, 40)
    pdf.multi_cell(0, 7, subtitle)
    pdf.ln(6)
    pdf.set_text_color(40, 30, 20)

    headed_count = 0
    for section in sections:
        heading, body = section[0], section[1]
        if body == "<SPACER>":
            pdf.ln(10)
            continue
        images = section[2] if len(section) > 2 else None
        if isinstance(images, str):
            images = [images]
        if heading:
            # extra breathing room before each place/region (but not the first)
            if headed_count > 0:
                pdf.ln(10)
            headed_count += 1
            pdf.set_font("Guide", size=13)
            pdf.multi_cell(0, 8, heading)
            pdf.ln(2)
        if INCLUDE_IMAGES:
            for key in images or []:
                add_image(pdf, key)
        pdf.set_font("Guide", size=11)
        for block in body.split("\n\n"):
            pdf.multi_cell(0, 6, block)
            pdf.ln(3)

    out = OUT_DIR / f"greece-travel-guide-{lang}.pdf"
    pdf.output(str(out))
    print(f"Wrote {out}")


CONTENT = {
    "el": {
        "title": "Προτάσεις για επιπλέον ημέρες στην Ελλάδα",
        "subtitle": (
            "Μερικές αγαπημένες ιδέες για όσους θέλουν να μείνουν περισσότερες ημέρες "
            "πριν ή μετά τον γάμο μας — από Αθήνα, Δελφούς, Πελοπόννησο και νησιά."
        ),
        "sections": [
            (
                "Αθήνα (2–3 ημέρες)",
                "Ιδανική για πρώτη στάση μετά την άφιξη.\n\n"
                "Να δείτε:\n"
                "• Ακρόπολη & Μουσείο Ακρόπολης (κλείστε εισιτήρια online)\n"
                "• Ιστορικό κέντρο: Πλάκα, Μοναστηράκι, Αρχαία Αγορά\n"
                "• Μουσεία: Εθνικό Αρχαιολογικό, Μουσείο Κυκλαδικής Τέχνης\n"
                "• Λυκαβηττός ή Φιλοπάππου για ηλιοβασίλεμα\n\n"
                "Μετακινήσεις: Μετρό από/προς αεροδρόμιο (γραμμή 3), ταξί/Uber, περπάτημα στο κέντρο.",
                "athens",
            ),
            (
                "",
                "Στην περίπτωση που δεν επιθυμείτε να επισκεφτείτε κάποιο νησί, από την Αθήνα "
                "κάποιες ενδιαφέρουσες εκδρομές χρησιμοποιώντας αυτοκίνητο* είναι:",
            ),
            (
                "Ναύπλιο (1–2 ημέρες)",
                "Πρώτη πρωτεύουσα του νεότερου ελληνικού κράτους, κοντά στην Αθήνα. Είναι ένα "
                "παραθαλάσσιο, γραφικό μέρος που συνδυάζει αξιοθέατα, παραλίες και καλό φαγητό.\n\n"
                "Να δείτε: Παλιά Πόλη, Παλαμήδι, Μπούρτζι, παραλία Αρβανιτίας, γειτονιές Ασίνη & Τολώ.\n"
                "Φαγητό & καφέ στην παραλία και στα στενά δρομάκια.",
                "nafplio",
            ),
            (
                "Δελφοί (ημερήσια εκδρομή ή 1 νύχτα)",
                "Ένα από τα πιο σημαντικά αρχαιολογικά σύμπλεγματα του κόσμου (UNESCO), "
                "στην πλαγιά του Παρνασσού — περίπου 2,5 ώρες από την Αθήνα με αυτοκίνητο.\n\n"
                "Ιστορία: Οι Δελφοί ήταν το «κέντρο του κόσμου» για τους αρχαίους Έλληνες — "
                "εδώ λειτουργούσε το μαντείο της Πυθίας, όπου συμβουλεύονταν βασιλείς και πόλεις "
                "πριν από πολέμους, ταξίδια και σημαντικές αποφάσεις.\n\n"
                "Να δείτε:\n"
                "• Αρχαιολογικός χώρος: Ναός του Απόλλωνα, αρχαίο θέατρο, στάδιο\n"
                "• Αρχαιολογικό Μουσείο Δελφών (αγάλματα, αναθήματα, ιερά κειμήλια)\n"
                "• Θόλος της Αθηνάς Προναίας — λίγα λεπτά από τον κύριο χώρο\n"
                "• Παραδοσιακό χωριό Δελφών με θέα στον κόλπο της Ιτέας\n\n"
                "Ιδανικός συνδυασμός με Αθήνα ή με οδικό ταξίδι προς Αγρίνιο/κεντρική Ελλάδα.",
                "delphi",
            ),
            (
                "*Με αυτοκίνητο από την Αθήνα",
                "• Ενοικίαση από αεροδρόμιο ή κέντρο — ταυτότητα + διεθνές δίπλωμα.\n"
                "• Προς Δελφούς: ΕΟ Αθηνών–Θεσσαλονίκης, έξοδος Δελφών (~180 km, ~2,5 ώρες).\n"
                "• Προς Πελοπόννησο: Εθνική Οδός προς Κόρινθο → Ναύπλιο (~2 ώρες).\n"
                "• Προς Λευκάδα: διάβαση από σταθμό Ακτίου (σύνδεση με υπόλοιπη Ελλάδα).\n"
                "• Προς Ιόνια (Κέρκυρα, Κεφαλονιά): πορθμεία από Πάτρα/Κυλλήνη ή πτήση.\n"
                "• Σαρωνικός (Ύδρα, Αίγινα): δεν χρειάζεται αυτοκίνητο στο νησί — πορθμείο από Πειραιά.",
            ),
            (
                "",
                "Σε περίπτωση που επιθυμείτε να επισκεφτείτε κάποιο νησί, θα χρειαστεί να μεταβείτε "
                "στο λιμάνι του Πειραιά και να πάρετε το πλοίο.\n\n"
                "Τα νησιά του Αιγαίου είναι αμέτρητα και όλα ξεχωριστά (π.χ. Νάξος, Σαντορίνη, Μύκονος). "
                "Υπάρχουν όμως εξίσου ωραίες και πιο βολικές επιλογές, με σημαντικά λιγότερο χρόνο ταξιδιού.",
            ),
            (
                "Ύδρα",
                "Χωρίς αυτοκίνητα, γραφική πόλη, θάλασσα, μονοπάτια — πορθμείο από Πειραιά (~1,5–2 ώρες).",
                "hydra",
            ),
            (
                "Αίγινα",
                "Ναός Αφαίας, όμορφη χώρα, αμμώδεις παραλίες, φιστίκια Αιγίνης — "
                "πορθμείο από Πειραιά (~40–75 λεπτά).",
            ),
            (
                "Για τα νησιά του Ιονίου Πελάγους",
                "Όπως και τα νησιά του Αιγαίου, έτσι και τα νησιά του Ιονίου είναι πολυάριθμα και όμορφα.\n\n"
                "Τα δύο κυριότερα λιμάνια για τα νησιά του Ιονίου είναι:\n"
                "1) Κυλλήνη\n"
                "2) Ηγουμενίτσα\n\n"
                "Τα λιμάνια αυτά βρίσκονται σε μεγαλύτερη απόσταση από την Αθήνα και ο συνολικός χρόνος "
                "ταξιδιού αυξάνεται σημαντικά. Για αυτόν τον λόγο, μια βολική και εξίσου μοναδική επιλογή είναι:",
            ),
            (
                "Λευκάδα",
                "Η Λευκάδα είναι ένα πανέμορφο νησί του Ιονίου, στο οποίο η πρόσβαση γίνεται οδικώς "
                "(μέσω γέφυρας που συνδέει το νησί με την ηπειρωτική χώρα).\n\n"
                "Απέχει περίπου 5 ώρες από την Αθήνα και μόλις 1 ώρα και 30 λεπτά από την πόλη μας, το Αγρίνιο.\n\n"
                "Να δείτε: Πόρτο Κατσίκι, Εγκρεμνούς, Νυδρί, καγιάκ/βάρκα, χωριά στο βουνό.",
                "lefkada",
            ),
            (
                "Αγρίνιο",
                "Η πόλη μας, το Αγρίνιο, είναι η μεγαλύτερη πόλη της Αιτωλοακαρνανίας και ένας ζωντανός "
                "προορισμός που συνδυάζει την αστική ζωή με εύκολη πρόσβαση στη φύση. Όπου κι αν μείνετε "
                "στο Αγρίνιο, οι αποστάσεις είναι αρκετά μικρές.\n\n"
                "Η κεντρική πλατεία του Αγρινίου, η πλατεία Δημοκρατίας, είναι η καρδιά της πόλης. "
                "Γύρω από την πλατεία θα βρείτε πολλά καφέ, φούρνους και μέρη για φαγητό.",
            ),
            (
                "Σημείωση",
                "Οι χρόνοι είναι ενδεικτικοί. Ελέγξτε πορθμεία, καιρό και κρατήσεις εκ των προτέρων. "
                "Καλό ταξίδι — θα χαρούμε να σας έχουμε στον γάμο μας!",
            ),
        ],
    },
    "en": {
        "title": "Ideas for extra days in Greece",
        "subtitle": (
            "A few favourite suggestions for guests who would like to stay a little longer "
            "before or after our wedding — Athens, Delphi, the Peloponnese and the islands."
        ),
        "sections": [
            (
                "Athens (2–3 days)",
                "Ideal first stop after you arrive.\n\n"
                "See:\n"
                "• The Acropolis & Acropolis Museum (book tickets online)\n"
                "• Historic centre: Plaka, Monastiraki, the Ancient Agora\n"
                "• Museums: National Archaeological Museum, Museum of Cycladic Art\n"
                "• Lycabettus or Filopappou Hill for sunset\n\n"
                "Getting around: Metro to/from the airport (line 3), taxi/Uber, walking in the centre.",
                "athens",
            ),
            (
                "",
                "If you would rather not visit an island, here are some lovely day trips "
                "from Athens by car*:",
            ),
            (
                "Nafplio (1–2 days)",
                "The first capital of modern Greece, close to Athens. It is a picturesque seaside town "
                "that combines sights, beaches and good food.\n\n"
                "See: the Old Town, the Palamidi fortress, Bourtzi, the Arvanitia promenade, "
                "and the nearby areas of Asini & Tolo.\n"
                "Food and coffee by the sea and in the narrow streets.",
                "nafplio",
            ),
            (
                "Delphi (day trip or 1 night)",
                "One of the most important archaeological sites in the world (UNESCO), "
                "on the slopes of Mount Parnassus — about 2.5 hours from Athens by car.\n\n"
                "History: In ancient times Delphi was considered the «navel of the world». "
                "Here stood the oracle of Apollo, where kings and city-states sought advice "
                "before wars, journeys and major decisions.\n\n"
                "See:\n"
                "• The archaeological site: Temple of Apollo, ancient theatre, stadium\n"
                "• The Delphi Archaeological Museum (statues, votive offerings, sacred objects)\n"
                "• The Tholos of Athena Pronaia — a few minutes from the main site\n"
                "• The traditional village of Delphi, overlooking the Gulf of Itea\n\n"
                "Easy to combine with Athens or with a road trip towards Agrinio and central Greece.",
                "delphi",
            ),
            (
                "*By car from Athens",
                "• Rent a car at the airport or in the centre — ID + international driving licence.\n"
                "• To Delphi: Athens–Thessaloniki national road, Delphi exit (~180 km, ~2.5 hours).\n"
                "• To the Peloponnese: national road towards Corinth → Nafplio (~2 hours).\n"
                "• To Lefkada: cross at Aktio (connected to the rest of the mainland).\n"
                "• To the Ionian (Corfu, Kefalonia): ferries from Patras/Kyllini, or a flight.\n"
                "• Saronic islands (Hydra, Aegina): you don't need a car on the island — ferry from Piraeus.",
            ),
            (
                "",
                "If you would like to visit an island, you will need to go to the port of Piraeus "
                "and take the ferry.\n\n"
                "The Aegean islands are countless and each one special (e.g. Naxos, Santorini, Mykonos). "
                "There are, however, equally beautiful and more convenient options with a much shorter "
                "travel time.",
            ),
            (
                "Hydra",
                "No cars, a picturesque town, the sea and walking trails — "
                "ferry from Piraeus (~1.5–2 hours).",
                "hydra",
            ),
            (
                "Aegina",
                "The Temple of Aphaia, a charming main town, sandy beaches and the famous Aegina "
                "pistachios — ferry from Piraeus (~40–75 minutes).",
            ),
            (
                "For the Ionian Sea islands",
                "Like the Aegean islands, the Ionian islands are numerous and beautiful.\n\n"
                "The two main ports for the Ionian islands are:\n"
                "1) Kyllini\n"
                "2) Igoumenitsa\n\n"
                "These ports are farther from Athens, so the total travel time increases significantly. "
                "For this reason, a convenient and equally unique option is:",
            ),
            (
                "Lefkada",
                "Lefkada is a stunning Ionian island, reached by road "
                "(via a bridge that connects it to the mainland).\n\n"
                "It is about 5 hours from Athens and just 1 hour and 30 minutes from our town, Agrinio.\n\n"
                "See: Porto Katsiki, Egremni, Nydri, kayaking/boat trips, mountain villages.",
                "lefkada",
            ),
            (
                "Agrinio",
                "Our town, Agrinio, is the largest town in Aetolia-Acarnania and a lively destination "
                "that combines city life with easy access to nature. Wherever you stay in Agrinio, "
                "distances are quite short.\n\n"
                "The central square of Agrinio, Democracy Square (Plateia Dimokratias), is the heart "
                "of the town. Around the square you will find plenty of cafés, bakeries and places to eat.",
            ),
            (
                "Note",
                "Times are approximate. Check ferries, weather and bookings in advance. "
                "Safe travels — we cannot wait to have you at our wedding!",
            ),
        ],
    },
    "sq": {
        "title": "Ide për ditë shtesë në Greqi",
        "subtitle": (
            "Disa sugjerime të preferuara për ata që duan të qëndrojnë pak më gjatë "
            "para ose pas dasmës sonë — Athinë, Delfi, Peloponez dhe ishuj."
        ),
        "sections": [
            (
                "Athina (2–3 ditë)",
                "Ndalesa e parë ideale pas mbërritjes.\n\n"
                "Të shihni:\n"
                "• Akropoli & Muzeu i Akropolit (rezervoni biletat online)\n"
                "• Qendra historike: Plaka, Monastiraki, Agora e Lashtë\n"
                "• Muzeume: Muzeu Kombëtar Arkeologjik, Muzeu i Artit Kikladik\n"
                "• Kodra e Likavitos ose e Filopapit për perëndimin e diellit\n\n"
                "Lëvizja: Metroja nga/për aeroportin (linja 3), taksi/Uber, ecje në këmbë në qendër.",
                "athens",
            ),
            (
                "",
                "Nëse nuk dëshironi të vizitoni një ishull, ja disa ekskursione të bukura njëditore "
                "nga Athina me makinë*:",
            ),
            (
                "Nafplio (1–2 ditë)",
                "Kryeqyteti i parë i Greqisë moderne, afër Athinës. Është një qytet bregdetar piktoresk "
                "që ndërthur atraksionet, plazhet dhe ushqimin e mirë.\n\n"
                "Të shihni: Qytetin e Vjetër, kalanë e Palamidit, Bourtzi, shëtitoren e Arvanitias "
                "dhe zonat e afërta Asini & Tolo.\n"
                "Ushqim dhe kafe buzë detit dhe në rrugicat e ngushta.",
                "nafplio",
            ),
            (
                "Delfi (ekskursion njëditor ose 1 natë)",
                "Një nga vendet arkeologjike më të rëndësishme në botë (UNESCO), "
                "në shpatet e malit Parnas — rreth 2,5 orë nga Athina me makinë.\n\n"
                "Historia: Në lashtësi Delfi konsiderohej «kërthiza e botës». Këtu ndodhej orakulli i "
                "Apollonit, ku mbretërit dhe qytet-shtetet kërkonin këshilla para luftërave, udhëtimeve "
                "dhe vendimeve të mëdha.\n\n"
                "Të shihni:\n"
                "• Zona arkeologjike: Tempulli i Apollonit, teatri antik, stadiumi\n"
                "• Muzeu Arkeologjik i Delfit (statuja, oferta votive, objekte të shenjta)\n"
                "• Tholos i Athinës Pronaia — pak minuta nga zona kryesore\n"
                "• Fshati tradicional i Delfit, me pamje nga gjiri i Iteas\n\n"
                "Kombinohet lehtë me Athinën ose me një udhëtim rrugor drejt Agrinios dhe Greqisë qendrore.",
                "delphi",
            ),
            (
                "*Me makinë nga Athina",
                "• Marrje makine me qira në aeroport ose në qendër — letërnjoftim + patentë ndërkombëtare.\n"
                "• Për në Delfi: rruga kombëtare Athinë–Selanik, dalja e Delfit (~180 km, ~2,5 orë).\n"
                "• Për në Peloponez: rruga kombëtare drejt Korintit → Nafplio (~2 orë).\n"
                "• Për në Lefkada: kalimi te Aktio (i lidhur me pjesën tjetër të vendit).\n"
                "• Për në Jon (Korfuz, Kefalonia): tragete nga Patra/Kyllini, ose me fluturim.\n"
                "• Ishujt e Saronikut (Hidra, Egina): nuk ju duhet makinë në ishull — traget nga Pireu.",
            ),
            (
                "",
                "Nëse dëshironi të vizitoni një ishull, duhet të shkoni në portin e Pireut dhe të merrni "
                "tragetin.\n\n"
                "Ishujt e Egjeut janë të panumërt dhe secili i veçantë (p.sh. Naksos, Santorini, Mikonos). "
                "Megjithatë, ka edhe opsione po aq të bukura dhe më të përshtatshme, me kohë udhëtimi "
                "dukshëm më të shkurtër.",
            ),
            (
                "Hidra",
                "Pa makina, qytet piktoresk, deti dhe shtigjet për ecje — "
                "traget nga Pireu (~1,5–2 orë).",
                "hydra",
            ),
            (
                "Egina",
                "Tempulli i Afaias, një qytet i bukur, plazhe ranore dhe fistikët e famshëm të Eginës — "
                "traget nga Pireu (~40–75 minuta).",
            ),
            (
                "Për ishujt e Detit Jon",
                "Ashtu si ishujt e Egjeut, edhe ishujt e Jonit janë të shumtë dhe të bukur.\n\n"
                "Dy portet kryesore për ishujt e Jonit janë:\n"
                "1) Kyllini\n"
                "2) Igumenica\n\n"
                "Këto porte janë më larg nga Athina, prandaj koha e përgjithshme e udhëtimit rritet "
                "ndjeshëm. Për këtë arsye, një opsion i përshtatshëm dhe po aq unik është:",
            ),
            (
                "Lefkada",
                "Lefkada është një ishull mahnitës i Jonit, ku hyrja bëhet me rrugë tokësore "
                "(përmes një ure që e lidh ishullin me pjesën kontinentale).\n\n"
                "Ndodhet rreth 5 orë nga Athina dhe vetëm 1 orë e 30 minuta nga qyteti ynë, Agrinio.\n\n"
                "Të shihni: Porto Katsiki, Egremni, Nidri, kajak/varkë, fshatra në mal.",
                "lefkada",
            ),
            (
                "Agrinio",
                "Qyteti ynë, Agrinio, është qyteti më i madh i Etolia-Akarnanisë dhe një destinacion "
                "plot jetë që ndërthur jetën urbane me akses të lehtë në natyrë. Kudo që të qëndroni "
                "në Agrinio, distancat janë mjaft të vogla.\n\n"
                "Sheshi qendror i Agrinios, sheshi Dimokratias, është zemra e qytetit. Rreth sheshit "
                "do të gjeni shumë kafe, furra dhe vende për të ngrënë.",
            ),
            (
                "Shënim",
                "Kohët janë orientuese. Kontrolloni tragetet, motin dhe rezervimet paraprakisht. "
                "Udhëtim të mbarë — presim me padurim t'ju kemi në dasmën tonë!",
            ),
        ],
    },
}


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for lang, data in CONTENT.items():
        build_pdf(lang, data["title"], data["subtitle"], data["sections"])


if __name__ == "__main__":
    main()
