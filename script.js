const STORAGE_LANG_KEY = "wedding_lang";
const GUEST_NAMES_STORAGE_KEY = "wedding_guest_names";

/**
 * Σύντομα links χωρίς ελληνικά στο URL: ?to=vasilis-maria
 * Δημόσιο site: https://www.giorgosevi.com
 * Προσθέστε δικά σας ζευγάρια κλειδι → ονόματα όπως θέλετε να εμφανίζονται.
 */
const GUEST_ALIASES = {
  // "vasilis-maria": "Βασίλη και Μαρία",
  // "giannis-eleni": "Γιάννη και Ελένη",
};

// RSVP → Web3Forms (https://web3forms.com, email: tsampasga@gmail.com)
const WEB3FORMS_ACCESS_KEY = "e9cdd22b-2e76-4b17-a473-af6a742c5376";

const translations = {
  el: {
    names: "Γιώργος & Εύη",
    cover_tap: "Ανοίξτε το προσκλητήριό σας",

    nav_home: "Αρχική",
    nav_details: "Λεπτομέρειες",
    nav_countdown: "Countdown",
    nav_location: "Τοποθεσία",
    nav_hotels: "Ξενοδοχεία",
    nav_travel: "Ταξίδι",
    nav_rsvp: "RSVP",

    hero_topline: "Με χαρά σας προσκαλούμε στον γάμο μας",
    hero_topline_named: "{names}, με χαρά σας προσκαλούμε στον γάμο μας",
    hero_date_short: "26.09.26",

    details_invite:
      "Επειδή η ζωή είναι πιο ζεστή όταν έχεις κάποιον κοντά,\n" +
      "επειδή η χαρά είναι πιο γλυκιά όταν τη μοιράζεσαι,\n" +
      "επειδή δύο χέρια είναι πιο δυνατά όταν είναι ενωμένα,\n" +
      "θα χαρούμε να γιορτάσουμε μαζί σας τον γάμο μας.\n\n" +
      "Θα μας έδινε μεγάλη χαρά να σας έχουμε κοντά μας το Σάββατο 26 Σεπτεμβρίου 2026, στις 17:30,\n" +
      "στον Παλαιό Ιερό Ναό Αγίου Χριστοφόρου Αγρινίου.\n\n" +
      "Μετά το μυστήριο, σας περιμένουμε στο Κτήμα Πιθάρι – Lake Living, στη Λίμνη Τριχωνίδα,\n" +
      "όπου θα συνεχίσουμε μαζί τη γιορτή μας — με μουσική, χορό και το πάρτι της αγάπης μας.\n\n" +
      "Θα ήταν μεγάλη μας τιμή και χαρά να μοιραστούμε μαζί σας αυτή την ξεχωριστή στιγμή.\n\n" +
      "Παρακαλούμε επιβεβαιώστε την παρουσία σας μέχρι τις 25 Αυγούστου στην παρακάτω φόρμα.\n\n" +
      "Με όλη μας την αγάπη,\n" +
      "Γιώργος & Εύη",
    ceremony_title: "Τελετή",
    ceremony_time: "Σάββατο 26 Σεπτεμβρίου 2026 · 17:30",
    ceremony_place: "Παλαιός Ιερός Ναός Αγίου Χριστοφόρου Αγρινίου",
    reception_title: "Χώρος Δεξίωσης",
    reception_time: "",
    reception_place: "Κτήμα Πιθάρι – Lake Living, Λίμνη Τριχωνίδα",
    view_map: "Χάρτης & διαδρομή",
    hotel_site_hint: "Ιστότοπος & κράτηση ↗",
    hotel_phone_label: "Τηλέφωνο",
    hotel_map_short: "📍 Χάρτης",

    countdown_eyebrow: "Αντίστροφη μέτρηση",
    countdown_title: "Μέχρι την ημέρα του γάμου μας",
    cd_days: "Ημέρες",
    cd_hours: "Ώρες",
    cd_minutes: "Λεπτά",
    cd_seconds: "Δευτ.",
    started: "Έφτασε η μέρα του γάμου μας!",

    location_title: "Πώς θα έρθετε",
    location_sub: "Η εκκλησία της τελετής και ο χώρος γάμου στον χάρτη",
    location_travel:
      "Από την Αθήνα και το αεροδρόμιο «Ελευθέριος Βενιζέλος» (Σπάτα) οι πιο συνηθισμένοι τρόποι για να φτάσετε στο Αγρίνιο είναι οι εξής:\n\n" +
      "Με υπεραστικό λεωφορείο (ΚΤΕΛ)\n" +
      "Από τον σταθμό υπεραστικών λεωφορείων στον Κηφισό (Αθήνα) εκτελούνται δρομολόγια ΚΤΕΛ προς Αγρίνιο. Η διαδρομή διαρκεί συνήθως περίπου 4 ώρες, ανάλογα με τη διαδρομή και τις στάσεις.\n" +
      "Από το αεροδρόμιο: το λεωφορείο γραμμής X93 φεύγει από τη στάση έξω από το αεροδρόμιο· με το X93 φτάνετε στον Κηφισό, στον σταθμό των υπεραστικών λεωφορείων (ΚΤΕΛ Κηφισού). Από εκεί παίρνετε λεωφορείο ΚΤΕΛ με προορισμό το Αγρίνιο. Υπάρχει και νυχτερινό δρομολόγιο X93. Εναλλακτικά: Μετρό προς το κέντρο και μετά λεωφορείο ή ταξί μέχρι τον Κηφισό.\n" +
      "Για ώρες αναχωρήσεων και εισιτήρια δείτε την επίσημη ιστοσελίδα του ΚΤΕΛ Αιτωλοακαρνανίας (αναζήτηση στο διαδίκτυο «ΚΤΕΛ Αιτωλοακαρνανία» ή «ΚΤΕΛ Αγρινίου»).\n\n" +
      "Με δικό σας αυτοκίνητο ή ενοικιαζόμενο\n" +
      "Ακολουθείτε τους χάρτες ή την πλοήγησή σας για Αγρίνιο (παρακάτω θα βρείτε και τους χάρτες της τελετής και του χώρου γάμου).",
    hotels_title: "Διαμονή στο Αγρίνιο",
    hotels_sub: "Δύο αγαπημένες προτάσεις στο Αγρίνιο",
    hotel_imperial_body: "Ξενοδοχείο κοντά στο κέντρο, με άνετο parking.",
    hotel_leto_body: "Μοντέρνο boutique ξενοδοχείο στην καρδιά του Αγρινίου.",

    travel_title: "Προορισμοί κοντά στην Αθήνα και το Αγρίνιο",
    travel_intro:
      "Εάν σκοπεύετε να μείνετε περισσότερες ημέρες στην Ελλάδα, σας έχουμε ετοιμάσει μερικές από τις αγαπημένες μας προτάσεις.",
    travel_download_btn: "Λήψη οδηγού (PDF)",
    travel_pdf_href: "assets/guides/greece-travel-guide-el.pdf",
    travel_pdf_filename: "odigos-taxidiou-ellada.pdf",

    rsvp_title: "Δήλωση Παρουσίας",
    rsvp_sub:
      "Παρακαλώ, ενημερώστε μας για την παρουσία σας μέχρι τις 25 Αυγούστου 2026.",
    form_name: "Ονοματεπώνυμο *",
    form_email_opt: "Email (προαιρετικό)",
    form_attend: "Θα παρευρεθείτε; *",
    attend_yes: "Θα παρευρεθώ",
    attend_no: "Δυστυχώς, δεν θα παρευρεθώ",
    form_adults_inc: "Ενήλικες (μαζί με εσάς)",
    form_children: "Παιδιά",
    form_allergies: "Αλλεργίες ή δυσανεξίες",
    form_message: "Μήνυμα προς το ζευγάρι (προαιρετικό)",
    form_submit: "Αποστολή",

    scroll_top_aria: "Επιστροφή στην αρχή",

    lang_menu: "Επιλογή γλώσσας"
  },
  en: {
    names: "Giorgos & Evi",
    cover_tap: "Open your invitation",

    nav_home: "Home",
    nav_details: "Details",
    nav_countdown: "Countdown",
    nav_location: "Location",
    nav_hotels: "Hotels",
    nav_travel: "Travel",
    nav_rsvp: "RSVP",

    hero_topline: "With joy, we invite you to our wedding",
    hero_topline_named: "{names}, with joy we invite you to our wedding",
    hero_date_short: "26.09.26",

    details_invite:
      "Because life feels warmer when someone is close,\n" +
      "because joy is sweeter when you share it,\n" +
      "because two hands are stronger when they are joined as one,\n" +
      "we would love to celebrate our wedding with you.\n\n" +
      "It would mean the world to us to have you with us on Saturday 26 September 2026, at 17:30,\n" +
      "at the Old Holy Church of Agios Christoforos in Agrinio.\n\n" +
      "After the ceremony, we look forward to seeing you at Ktima Pithari – Lake Living, on Lake Trichonida,\n" +
      "where we will continue our celebration together — with music, dance and the party of our love.\n\n" +
      "It would be our greatest honour and joy to share this moment with you.\n\n" +
      "Please confirm your attendance by 25 August using the form below.\n\n" +
      "With all our love,\n" +
      "Giorgos & Evi",
    ceremony_title: "Ceremony",
    ceremony_time: "Saturday 26 September 2026 · 17:30",
    ceremony_place: "Old Holy Church of Agios Christoforos, Agrinio",
    reception_title: "Wedding Venue",
    reception_time: "",
    reception_place: "Ktima Pithari – Lake Living, Lake Trichonida",
    view_map: "Map & directions",
    hotel_site_hint: "Website & booking ↗",
    hotel_phone_label: "Phone",
    hotel_map_short: "📍 Map",

    countdown_eyebrow: "Countdown",
    countdown_title: "Until our wedding day",
    cd_days: "Days",
    cd_hours: "Hours",
    cd_minutes: "Minutes",
    cd_seconds: "Seconds",
    started: "Our wedding day is here!",

    location_title: "How to get there",
    location_sub: "The church for our ceremony and the wedding venue on the map",
    location_travel:
      "Getting to Agrinio from Athens or Athens International Airport «Eleftherios Venizelos» (Spata) is easy. Here are the most common options:\n\n" +
      "By intercity bus (KTEL)\n" +
      "Intercity buses to Agrinio depart from the Kifissos Bus Terminal in Athens. The journey takes around 4 hours, depending on the route and stops.\n" +
      "Coming from the airport? Take the X93 bus from right outside the arrivals area to the Kifissos Bus Terminal, then catch a bus to Agrinio. The X93 also runs at night. Alternatively, take the metro into the city centre and then a bus or taxi to Kifissos Bus Terminal.\n" +
      "For timetables and tickets, visit the official KTEL Aitoloakarnania website (or search online for «KTEL Aitoloakarnania» or «KTEL Agrinio»).\n\n" +
      "By car\n" +
      "Simply follow your maps app. You’ll also find the ceremony and wedding venue maps below.",
    hotels_title: "Accommodation in Agrinio",
    hotels_sub: "Two favourite options in Agrinio",
    hotel_imperial_body: "Near the centre, with convenient parking.",
    hotel_leto_body: "A modern boutique hotel in the heart of Agrinio.",

    travel_title: "Destinations near Athens and Agrinio",
    travel_intro:
      "If you plan to stay a few more days in Greece, we have put together some of our favourite recommendations for you.",
    travel_download_btn: "Download guide (PDF)",
    travel_pdf_href: "assets/guides/greece-travel-guide-en.pdf",
    travel_pdf_filename: "greece-travel-guide.pdf",

    rsvp_title: "RSVP",
    rsvp_sub: "Please let us know whether you’ll attend by 25 August 2026.",
    form_name: "Full name *",
    form_email_opt: "Email (optional)",
    form_attend: "Will you attend? *",
    attend_yes: "I’ll be there",
    attend_no: "Can’t make it",
    form_adults_inc: "Adults (including you)",
    form_children: "Children",
    form_allergies: "Allergies or intolerances",
    form_message: "Message to the couple (optional)",
    form_submit: "Submit",

    scroll_top_aria: "Back to top",

    lang_menu: "Choose language"
  },
  sq: {
    names: "Giorgos & Evi",
    cover_tap: "Hap ftesën tuaj",

    nav_home: "Kreu",
    nav_details: "Detaje",
    nav_countdown: "Numërues",
    nav_location: "Vendndodhja",
    nav_hotels: "Hotele",
    nav_travel: "Udhëtim",
    nav_rsvp: "RSVP",

    hero_topline: "Me gëzim ju ftojmë në dasëmën tonë",
    hero_topline_named: "{names}, me gëzim ju ftojmë në dasëmën tonë",
    hero_date_short: "26.09.26",

    details_invite:
      "Sepse jeta është më e ngrohtë kur dikush është pranë,\n" +
      "sepse gëzimi është më i ëmbël kur e ndan me të tjerët,\n" +
      "sepse dy duar janë më të forta kur bashkohen,\n" +
      "do të na gëzonte shumë të festonim me ju dasëmën tonë.\n\n" +
      "Do të ishte kënaqësi e madhe për ne t'ju kishim pranë të Shtunën 26 Shtator 2026, në orën 17:30,\n" +
      "në Kishën e Vjetër të Shenjtë të Shën Kristoforit në Agrinio.\n\n" +
      "Pas ceremonisë, ju presim në Ktima Pithari – Lake Living, në Liqenin e Trihonidës,\n" +
      "ku do të vazhdojmë së bashku festën tonë — me muzikë, valle dhe festën e dashurisë sonë.\n\n" +
      "Do të ishte nder dhe gëzim i madh për ne ta ndanim këtë moment me ju.\n\n" +
      "Ju lutemi, konfirmoni praninë tuaj deri më 25 gusht në formularin më poshtë.\n\n" +
      "Me gjithë dashurinë tonë,\n" +
      "Giorgos & Evi",
    ceremony_title: "Ceremonia",
    ceremony_time: "E Shtunë 26 Shtator 2026 · 17:30",
    ceremony_place: "Kisha e Vjetër e Shenjtë e Shën Kristoforit, Agrinio",
    reception_title: "Vendi i dasës",
    reception_time: "",
    reception_place: "Ktima Pithari – Lake Living, Liqeni i Trihonidës",
    view_map: "Harta & udhëzime",
    hotel_site_hint: "Faqja & rezervimi ↗",
    hotel_phone_label: "Telefoni",
    hotel_map_short: "📍 Harta",

    countdown_eyebrow: "Numërim mbrapsht",
    countdown_title: "Deri në ditën e dasëmës sonë",
    cd_days: "Ditë",
    cd_hours: "Orë",
    cd_minutes: "Minuta",
    cd_seconds: "Sek.",
    started: "Erdhi dita e dasëmës sonë!",

    location_title: "Si të vini",
    location_sub: "Kisha e ceremonisë dhe vendi i dasës në hartë",
    location_travel:
      "Nga Athina dhe Aeroporti Ndërkombëtar i Athinës «Eleftherios Venizelos» (Spata), mënyrat më të zakonshme për të arritur në Agrinio janë:\n\n" +
      "Me autobus ndërqytet (KTEL)\n" +
      "Nga terminali i autobusëve ndërqytet në Kifisos (Athinë), autobusët KTEL shkojnë drejt Agrinion. Udhëtimi zgjat zakonisht rreth 4 orë, sipas itinerarit dhe ndalesave.\n" +
      "Nga aeroporti: linja e autobusit X93 niset nga stacioni jashtë aeroportit; me X93 arrini në Kifisos, në terminalin e autobusëve ndërqytet (KTEL Kifisou). Atje hipni në autobusin KTEL për në Agrinio. Ekziston edhe X93 natën. Alternativë: Metro drejt qendrës, pastaj autobus ose taksi deri në Kifisos.\n" +
      "Për oraret dhe biletat, shikoni faqen zyrtare të KTEL Aitoloakarnania (kërkoni në internet «KTEL Aitoloakarnania» ose «KTEL Agrinio»).\n\n" +
      "Me makinën tuaj ose me qira\n" +
      "Ndiqni hartën ose navigimin deri në Agrinio (më poshtë janë edhe hartat e ceremonisë dhe vendit të dasës).",
    hotels_title: "Akomodimi në Agrinio",
    hotels_sub: "Dy propozime të preferuara në Agrinio",
    hotel_imperial_body: "Hotel pranë qendrës, me parkim të përshtatshëm.",
    hotel_leto_body: "Hotel boutique modern në zemër të Agriniot.",

    travel_title: "Destinacione pranë Athinës dhe Agrinios",
    travel_intro:
      "Nëse planifikoni të qëndroni më shumë ditë në Greqi, kemi përgatitur disa nga sugjerimet tona të preferuara.",
    travel_download_btn: "Shkarko udhëzuesin (PDF)",
    travel_pdf_href: "assets/guides/greece-travel-guide-sq.pdf",
    travel_pdf_filename: "udhezues-greqi.pdf",

    rsvp_title: "Deklarata e pranisë",
    rsvp_sub: "Ju lutemi, na njoftoni për praninë tuaj deri më 25 gusht 2026.",
    form_name: "Emri dhe mbiemri *",
    form_email_opt: "Email (opsional)",
    form_attend: "Do të merrni pjesë? *",
    attend_yes: "Po, do të jem atje",
    attend_no: "Nuk mund të vij",
    form_adults_inc: "Të rritur (përfshirë ju)",
    form_children: "Fëmijë",
    form_allergies: "Alergji ose intoleranca",
    form_message: "Mesazh për çiftin (opsional)",
    form_submit: "Dërgo",

    scroll_top_aria: "Kthehu në fillim",

    lang_menu: "Zgjidhni gjuhën"
  }
};

const SUPPORTED_LANGS = ["el", "en", "sq"];

const LANG_DROPDOWN_DISPLAY = {
  el: { label: "Ελληνικά", flag: "🇬🇷" },
  en: { label: "English", flag: "🇬🇧" },
  sq: { label: "Shqip", flag: "🇦🇱" }
};

function getLangFromPath() {
  // Clean URLs: giorgosevi.com/en, /sq, /gr (see _redirects). "gr" maps to Greek.
  const seg = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (seg === "gr") return "el";
  if (SUPPORTED_LANGS.includes(seg)) return seg;
  return null;
}

function getInitialLang() {
  // A shared link (clean path /en or ?lang=) always wins, so guests open the
  // invitation in the language you chose for them (overrides any previous visit).
  const fromPath = getLangFromPath();
  if (fromPath) return fromPath;
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl;
  const saved = localStorage.getItem(STORAGE_LANG_KEY);
  if (SUPPORTED_LANGS.includes(saved)) return saved;
  const htmlLang = document.documentElement.lang;
  if (SUPPORTED_LANGS.includes(htmlLang)) return htmlLang;
  return "el";
}

function sanitizeGuestNames(raw) {
  const text = String(raw || "")
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, 120);
  return text || null;
}

function resolveGuestNamesFromParam(raw) {
  if (!raw) return null;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw.replace(/\+/g, " "));
  } catch {
    decoded = raw;
  }
  const aliasKey = decoded.trim().toLowerCase();
  if (GUEST_ALIASES[aliasKey]) return GUEST_ALIASES[aliasKey];
  return sanitizeGuestNames(decoded);
}

function initGuestNamesFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("to") || params.get("names");
  if (!raw) return;
  const names = resolveGuestNamesFromParam(raw);
  if (names) sessionStorage.setItem(GUEST_NAMES_STORAGE_KEY, names);
}

function getGuestNames() {
  const stored = sessionStorage.getItem(GUEST_NAMES_STORAGE_KEY);
  return stored ? sanitizeGuestNames(stored) : null;
}

function applyPersonalizedGreeting(dict) {
  const el = document.querySelector(".hero-topline");
  if (!el) return;
  const names = getGuestNames();
  const template = dict.hero_topline_named;
  if (names && typeof template === "string") {
    el.textContent = template.replace("{names}", names);
    return;
  }
  if (typeof dict.hero_topline === "string") el.textContent = dict.hero_topline;
}

let activeLang = "el";

function setLang(lang) {
  const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : "el";
  activeLang = safeLang;
  const dict = translations[safeLang] || translations.el;
  document.documentElement.lang = safeLang;
  localStorage.setItem(STORAGE_LANG_KEY, safeLang);

  const guestNames = getGuestNames();

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    if (key === "hero_topline" && guestNames) return;
    const value = dict[key];
    if (typeof value === "string") node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria");
    if (!key) return;
    const value = dict[key];
    if (typeof value === "string") node.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-href]").forEach((node) => {
    const key = node.getAttribute("data-i18n-href");
    if (!key) return;
    const value = dict[key];
    if (typeof value === "string") node.setAttribute("href", value);
  });

  document.querySelectorAll("[data-i18n-download]").forEach((node) => {
    const key = node.getAttribute("data-i18n-download");
    if (!key) return;
    const value = dict[key];
    if (typeof value === "string") node.setAttribute("download", value);
  });

  const sealText = document.querySelector(".seal-text");
  if (sealText) sealText.textContent = "G&E";

  syncLangDropdownUi(safeLang);
  applyPersonalizedGreeting(dict);

  if (typeof musicToggle !== "undefined" && musicToggle && !musicToggle.hidden) {
    syncMusicToggleUi(musicToggle.classList.contains("is-muted"));
  }
}

// Cover: tap σφραγίδα → είσοδος στο site
const candleOpen = document.getElementById("candleOpen");
const cover = document.getElementById("cover");
const onepage = document.getElementById("onepage");
const langDropdownWrap = document.getElementById("langDropdownWrap");
const langDropdown = document.getElementById("langDropdown");
const langDropdownBtn = document.getElementById("langDropdownBtn");
const langDropdownPanel = document.getElementById("langDropdownPanel");
const langDropdownLabel = document.getElementById("langDropdownLabel");
const langDropdownFlag = document.getElementById("langDropdownFlag");
const scrollTopBtn = document.getElementById("scrollTopBtn");

const LEAVE_MS = 780;
const SCROLL_TOP_THRESHOLD = 320;

function updateScrollTopVisibility() {
  if (!scrollTopBtn || !cover) return;
  const siteOpen = window.getComputedStyle(cover).display === "none";
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  scrollTopBtn.classList.toggle("is-visible", siteOpen && y > SCROLL_TOP_THRESHOLD);
}

function showOnePage() {
  if (!onepage) return;
  window.scrollTo(0, 0);
  onepage.style.display = "block";
  onepage.style.opacity = "0";
  onepage.style.transform = "translateY(10px)";
  requestAnimationFrame(() => {
    onepage.style.transition = "opacity 520ms ease, transform 520ms ease";
    onepage.style.opacity = "1";
    onepage.style.transform = "translateY(0)";
  });
}

function leaveCoverAndShowSite() {
  if (leaveCoverAndShowSite._didRun) return;
  leaveCoverAndShowSite._didRun = true;

  if (cover) cover.classList.add("cover-leaving");
  window.setTimeout(() => {
    if (cover) {
      cover.style.display = "none";
      cover.classList.remove("cover-leaving", "cover--opening");
    }
    showOnePage();
    if (langDropdownWrap) langDropdownWrap.hidden = false;
    startMusic();
    updateScrollTopVisibility();
    requestAnimationFrame(() => {
      scheduleNavScrollSpy();
      requestAnimationFrame(() => scheduleNavScrollSpy());
    });
  }, LEAVE_MS);
}

function openInvitationFromCover() {
  if (leaveCoverAndShowSite._didRun) return;

  if (candleOpen) {
    candleOpen.disabled = true;
    candleOpen.style.pointerEvents = "none";
  }
  const hint = document.querySelector(".cover-hint");
  if (hint) hint.style.opacity = "0";

  startMusic();
  leaveCoverAndShowSite();
}

if (candleOpen) {
  candleOpen.addEventListener("click", (e) => {
    e.preventDefault();
    openInvitationFromCover();
  });
}

/* Τοποθετεί την περιοχή κλικ ακριβώς πάνω στη σφραγίδα, σε κάθε οθόνη.
   Η σφραγίδα είναι μέρος του background (white.png, 752x1203) με background-size:cover,
   οπότε υπολογίζουμε πού πέφτει η σφραγίδα ανάλογα με το μέγεθος του viewport. */
const SEAL_IMG_W = 752;
const SEAL_IMG_H = 1203;
const SEAL_CX = 0.5;    // οριζόντιο κέντρο σφραγίδας (κλάσμα πλάτους εικόνας)
const SEAL_CY = 0.545;  // κατακόρυφο κέντρο σφραγίδας (κλάσμα ύψους εικόνας)
const SEAL_R = 0.205;   // ακτίνα σφραγίδας (κλάσμα πλάτους εικόνας)
const SEAL_DEBUG = false;

function positionCandleHit() {
  if (!candleOpen || !cover) return;
  if (cover.style.display === "none") return;

  const cw = window.innerWidth;
  const ch = window.innerHeight;
  const posX = 0.5;
  const posY = window.matchMedia("(min-width: 1024px)").matches ? 0.6 : 0.5;

  const scale = Math.max(cw / SEAL_IMG_W, ch / SEAL_IMG_H);
  const renderedW = SEAL_IMG_W * scale;
  const renderedH = SEAL_IMG_H * scale;
  const offsetX = (cw - renderedW) * posX;
  const offsetY = (ch - renderedH) * posY;

  const sealX = offsetX + SEAL_CX * renderedW;
  const sealY = offsetY + SEAL_CY * renderedH;
  const diameter = 2 * SEAL_R * renderedW;

  candleOpen.style.left = sealX + "px";
  candleOpen.style.top = sealY + "px";
  candleOpen.style.width = diameter + "px";
  candleOpen.style.height = diameter + "px";
  candleOpen.style.maxWidth = "none";
  candleOpen.style.maxHeight = "none";
  if (SEAL_DEBUG) candleOpen.style.background = "rgba(255,0,0,0.28)";
}

function onWindowScroll() {
  updateScrollTopVisibility();
  scheduleNavScrollSpy();
}
function onWindowResize() {
  navSpyLastActive = "";
  scheduleNavScrollSpy();
  updateScrollTopVisibility();
  positionCandleHit();
}
window.addEventListener("scroll", onWindowScroll, { passive: true });
window.addEventListener("resize", onWindowResize);

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => scheduleNavScrollSpy(), 520);
  });
});

/** Τμήματα μενού (σειρά) — scroll-spy + κεντράρισμα ενεργού tab στο κινητό */
const NAV_SPY_IDS = ["hero", "details", "countdown", "location", "hotels", "travel", "rsvp"];
let navSpyLastActive = "";
let navSpyRaf = 0;

function updateNavScrollSpy() {
  const menu = document.getElementById("menu");
  const cover = document.getElementById("cover");
  if (!menu) return;
  if (cover && window.getComputedStyle(cover).display !== "none") return;

  const markerY = window.innerHeight * 0.24;
  let activeId = NAV_SPY_IDS[0];
  for (const id of NAV_SPY_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= markerY) activeId = id;
  }

  menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    const href = link.getAttribute("href");
    const on = href === `#${activeId}`;
    link.classList.toggle("is-active", on);
    if (on) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });

  const narrowMenu = window.matchMedia("(max-width: 780px)").matches;
  const activeLink = menu.querySelector(`a[href="#${activeId}"]`);
  if (narrowMenu && activeLink && activeId !== navSpyLastActive) {
    navSpyLastActive = activeId;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeLink.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest"
    });
  } else if (!narrowMenu) {
    navSpyLastActive = activeId;
  }
}

function scheduleNavScrollSpy() {
  if (navSpyRaf) return;
  navSpyRaf = requestAnimationFrame(() => {
    navSpyRaf = 0;
    updateNavScrollSpy();
  });
}

// Countdown (explicit Greece offset; Sep is DST +03:00)
const eventTime = new Date("2026-09-26T17:30:00+03:00").getTime();
const cd = {
  days: document.getElementById("cd_days"),
  hours: document.getElementById("cd_hours"),
  minutes: document.getElementById("cd_minutes"),
  seconds: document.getElementById("cd_seconds")
};
const countdownStatus = document.getElementById("countdownStatus");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function updateCountdown() {
  const now = Date.now();
  const distance = eventTime - now;
  const raw = document.documentElement.lang;
  const lang = SUPPORTED_LANGS.includes(raw) ? raw : "el";

  if (distance <= 0) {
    if (cd.days) cd.days.textContent = "0";
    if (cd.hours) cd.hours.textContent = "00";
    if (cd.minutes) cd.minutes.textContent = "00";
    if (cd.seconds) cd.seconds.textContent = "00";
    if (countdownStatus) countdownStatus.textContent = translations[lang].started;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (cd.days) cd.days.textContent = String(days);
  if (cd.hours) cd.hours.textContent = pad2(hours);
  if (cd.minutes) cd.minutes.textContent = pad2(minutes);
  if (cd.seconds) cd.seconds.textContent = pad2(seconds);
  if (countdownStatus) countdownStatus.textContent = "";
}

setInterval(updateCountdown, 1000);

function syncLangDropdownUi(lang) {
  if (!langDropdownBtn || !langDropdownLabel || !langDropdownFlag) return;
  const safe = SUPPORTED_LANGS.includes(lang) ? lang : "el";
  const dict = translations[safe] || translations.el;
  const display = LANG_DROPDOWN_DISPLAY[safe] || LANG_DROPDOWN_DISPLAY.el;
  langDropdownBtn.setAttribute("aria-label", dict.lang_menu);
  langDropdownLabel.textContent = display.label;
  langDropdownFlag.textContent = display.flag;
  document.querySelectorAll(".lang-dropdown__option").forEach((opt) => {
    const optLang = opt.getAttribute("data-lang");
    opt.setAttribute("aria-selected", optLang === safe ? "true" : "false");
  });
}

function closeLangDropdown() {
  if (!langDropdownBtn || !langDropdownPanel) return;
  langDropdownBtn.setAttribute("aria-expanded", "false");
  langDropdownPanel.hidden = true;
  langDropdown?.classList.remove("is-open");
}

function toggleLangDropdown() {
  if (!langDropdownBtn || !langDropdownPanel) return;
  const open = langDropdownBtn.getAttribute("aria-expanded") === "true";
  if (open) {
    closeLangDropdown();
  } else {
    langDropdownBtn.setAttribute("aria-expanded", "true");
    langDropdownPanel.hidden = false;
    langDropdown?.classList.add("is-open");
  }
}

if (langDropdownBtn && langDropdownPanel) {
  langDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLangDropdown();
  });
  langDropdownPanel.querySelectorAll(".lang-dropdown__option").forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      const lang = opt.getAttribute("data-lang");
      if (lang && SUPPORTED_LANGS.includes(lang)) {
        setLang(lang);
        updateCountdown();
      }
      closeLangDropdown();
    });
  });
  document.addEventListener("click", () => closeLangDropdown());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLangDropdown();
  });
}

function rsvpAttendingYes() {
  const form = document.getElementById("rsvpForm");
  return form?.querySelector('input[name="attending"][value="yes"]')?.checked === true;
}

/** Όταν «Ναι»: ελάχιστο 1 ενήλικας + υποχρεωτικά adults/children. Όταν «Όχι»: 0 και χωρίς required. */
function syncRsvpPartyFields() {
  const form = document.getElementById("rsvpForm");
  if (!form) return;
  const adults = form.querySelector('input[name="adults"]');
  const children = form.querySelector('input[name="children"]');
  const yes = rsvpAttendingYes();
  if (yes) {
    adults?.setAttribute("min", "1");
    adults?.setAttribute("required", "required");
    children?.setAttribute("required", "required");
    children?.setAttribute("min", "0");
    if (adults && Number(adults.value) < 1) adults.value = "1";
  } else {
    adults?.setAttribute("min", "0");
    adults?.removeAttribute("required");
    children?.removeAttribute("required");
    if (adults) adults.value = "0";
    if (children) children.value = "0";
  }
}

// RSVP steppers (+/-)
document.querySelectorAll(".stepper").forEach((wrap) => {
  const input = wrap.querySelector('input[type="number"]');
  if (!input) return;

  function clampMin() {
    if (input.name === "adults" && rsvpAttendingYes()) return 1;
    return Number(input.getAttribute("min") || "0");
  }

  function clampAndSet(next) {
    const min = clampMin();
    const value = Number.isFinite(next) ? Math.max(min, next) : min;
    input.value = String(value);
  }

  wrap.querySelectorAll(".step").forEach((btn) => {
    btn.addEventListener("click", () => {
      const delta = Number(btn.getAttribute("data-step") || "0");
      const current = Number(input.value || "0");
      clampAndSet(current + delta);
    });
  });

  input.addEventListener("change", () => {
    const v = Number(input.value || "0");
    clampAndSet(v);
  });
});

const rsvpForm = document.getElementById("rsvpForm");
if (rsvpForm) {
  rsvpForm.addEventListener("change", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLInputElement)) return;
    if (t.name !== "attending") return;
    syncRsvpPartyFields();
  });

  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    syncRsvpPartyFields();

    const lang = (document.documentElement.lang || "el").slice(0, 2);
    const safeLang = ["el", "en", "sq"].includes(lang) ? lang : "el";
    const rsvpErrors = {
      el: {
        config: "Η φόρμα RSVP δεν έχει ρυθμιστεί ακόμα. Επικοινωνήστε μαζί μας.",
        failed: "Δεν στάλθηκε η απάντηση. Δοκιμάστε ξανά σε λίγο.",
        sending: "Αποστολή…"
      },
      en: {
        config: "The RSVP form is not configured yet. Please contact us.",
        failed: "Your response could not be sent. Please try again shortly.",
        sending: "Sending…"
      },
      sq: {
        config: "Formulari RSVP nuk është konfiguruar ende. Na kontaktoni.",
        failed: "Përgjigja nuk u dërgua. Provoni përsëri pas pak.",
        sending: "Duke dërguar…"
      }
    };
    const err = rsvpErrors[safeLang] || rsvpErrors.el;

    if (!WEB3FORMS_ACCESS_KEY) {
      window.alert(err.config);
      return;
    }

    const attending = String(new FormData(rsvpForm).get("attending") || "");
    const rsvp = attending === "no" ? "no" : "yes";
    if (rsvp === "yes") {
      const adults = rsvpForm.querySelector('input[name="adults"]');
      const children = rsvpForm.querySelector('input[name="children"]');
      const ad = Number(adults?.value);
      const ch = Number(children?.value);
      if (!adults || !children || !Number.isFinite(ad) || ad < 1 || !Number.isFinite(ch) || ch < 0) {
        rsvpForm.reportValidity();
        return;
      }
    }
    if (!rsvpForm.reportValidity()) return;

    const guest = getGuestNames();
    const guestQuery = guest ? `&to=${encodeURIComponent(guest)}` : "";
    const thankYouUrl = `thank-you.html?rsvp=${encodeURIComponent(rsvp)}&lang=${encodeURIComponent(safeLang)}${guestQuery}`;

    const submitBtn = rsvpForm.querySelector('button[type="submit"]');
    const submitLabel = submitBtn?.querySelector("span");
    const prevLabel = submitLabel?.textContent || "";
    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = err.sending;

    const formData = new FormData(rsvpForm);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `RSVP (${rsvp === "yes" ? "Yes" : "No"}) · Giorgos & Evi`
    );
    if (guest) formData.set("guest_invite", guest);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "submit failed");
      }
      window.location.href = thankYouUrl;
    } catch {
      window.alert(err.failed);
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = prevLabel;
    }
  });

  syncRsvpPartyFields();
}

/* Soundtrack — «A Thousand Years» (instrumental) σε ήπια ένταση, με κουμπί σίγασης */
const inviteMusic = document.getElementById("inviteMusic");
const musicToggle = document.getElementById("musicToggle");
const MUSIC_VOLUME = 0.18;
// Νέο κλειδί ώστε τυχόν παλιά αποθηκευμένη «σίγαση» να αγνοηθεί — default: παίζει.
const MUSIC_MUTED_KEY = "ye_music_off_v2";

const MUSIC_LABELS = {
  el: { on: "Σίγαση μουσικής", off: "Ενεργοποίηση μουσικής" },
  en: { on: "Mute music", off: "Play music" },
  sq: { on: "Hesht muzikën", off: "Luaj muzikën" }
};

function isMusicMutedPref() {
  try { return localStorage.getItem(MUSIC_MUTED_KEY) === "1"; } catch (e) { return false; }
}
function setMusicMutedPref(muted) {
  try { localStorage.setItem(MUSIC_MUTED_KEY, muted ? "1" : "0"); } catch (e) {}
}
function syncMusicToggleUi(muted) {
  if (!musicToggle) return;
  musicToggle.classList.toggle("is-muted", muted);
  musicToggle.setAttribute("aria-pressed", muted ? "false" : "true");
  const lang = MUSIC_LABELS[activeLang] ? activeLang : "el";
  musicToggle.setAttribute("aria-label", muted ? MUSIC_LABELS[lang].off : MUSIC_LABELS[lang].on);
}
function fadeInMusic() {
  if (!inviteMusic) return;
  let v = inviteMusic.volume || 0;
  const step = () => {
    v = Math.min(MUSIC_VOLUME, v + 0.02);
    inviteMusic.volume = v;
    if (v < MUSIC_VOLUME) window.setTimeout(step, 90);
  };
  step();
}
function playMusicGently() {
  if (!inviteMusic) return;
  inviteMusic.volume = 0;
  const p = inviteMusic.play();
  if (p && typeof p.then === "function") {
    p.then(() => fadeInMusic()).catch(() => armPlayOnFirstInteraction());
  } else {
    fadeInMusic();
  }
}

// Αν ο browser μπλοκάρει το autoplay, ξεκινάμε ήπια στην πρώτη αλληλεπίδραση
// (αντί να φαίνεται λανθασμένα «κλειστό»).
function armPlayOnFirstInteraction() {
  if (armPlayOnFirstInteraction._armed || !inviteMusic) return;
  armPlayOnFirstInteraction._armed = true;
  const events = ["pointerdown", "keydown", "touchstart"];
  const cleanup = () => events.forEach((ev) => window.removeEventListener(ev, tryPlay));
  function tryPlay() {
    if (isMusicMutedPref()) { cleanup(); return; }
    inviteMusic.volume = 0;
    inviteMusic.play().then(() => { fadeInMusic(); cleanup(); }).catch(() => {});
  }
  events.forEach((ev) => window.addEventListener(ev, tryPlay, { passive: true }));
}

function startMusic() {
  if (!inviteMusic || startMusic._didRun) return;
  startMusic._didRun = true;

  const muted = isMusicMutedPref();
  if (musicToggle) musicToggle.hidden = false;
  syncMusicToggleUi(muted);
  if (muted) return;

  playMusicGently();
}

if (musicToggle && inviteMusic) {
  musicToggle.addEventListener("click", () => {
    if (inviteMusic.paused) {
      setMusicMutedPref(false);
      syncMusicToggleUi(false);
      inviteMusic.volume = 0;
      inviteMusic.play().then(() => fadeInMusic()).catch(() => {});
    } else {
      inviteMusic.pause();
      setMusicMutedPref(true);
      syncMusicToggleUi(true);
    }
  });
}

// Init
initGuestNamesFromUrl();
setLang(getInitialLang());
updateCountdown();
updateScrollTopVisibility();
scheduleNavScrollSpy();
positionCandleHit();
window.addEventListener("orientationchange", () => window.setTimeout(positionCandleHit, 100));
window.addEventListener("load", positionCandleHit);
