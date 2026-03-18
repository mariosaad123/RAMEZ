

// قاموس من 200 كلمة

const dictionary = [
  { ar: "مرحبا", en: "hello", fr: "bonjour", de: "hallo" },
  { ar: "وداعا", en: "goodbye", fr: "au revoir", de: "tschüss" },
  { ar: "شكرا", en: "thank you", fr: "merci", de: "danke" },
  { ar: "من فضلك", en: "please", fr: "s'il vous plaît", de: "bitte" },
  { ar: "نعم", en: "yes", fr: "oui", de: "ja" },
  { ar: "لا", en: "no", fr: "non", de: "nein" },
  { ar: "رجل", en: "man", fr: "homme", de: "mann" },
  { ar: "امرأة", en: "woman", fr: "femme", de: "frau" },
  { ar: "طفل", en: "child", fr: "enfant", de: "kind" },
  { ar: "صديق", en: "friend", fr: "ami", de: "freund" },
  { ar: "عائلة", en: "family", fr: "famille", de: "familie" },
  { ar: "منزل", en: "house", fr: "maison", de: "haus" },
  { ar: "سيارة", en: "car", fr: "voiture", de: "auto" },
  { ar: "طعام", en: "food", fr: "nourriture", de: "essen" },
  { ar: "ماء", en: "water", fr: "eau", de: "wasser" },
  { ar: "مدرسة", en: "school", fr: "école", de: "schule" },
  { ar: "كتاب", en: "book", fr: "livre", de: "buch" },
  { ar: "قلم", en: "pen", fr: "stylo", de: "stift" },
  { ar: "شمس", en: "sun", fr: "soleil", de: "sonne" },
  { ar: "قمر", en: "moon", fr: "lune", de: "mond" },
  { ar: "سماء", en: "sky", fr: "ciel", de: "himmel" },
  { ar: "نجم", en: "star", fr: "étoile", de: "stern" },
  { ar: "زهرة", en: "flower", fr: "fleur", de: "blume" },
  { ar: "شجرة", en: "tree", fr: "arbre", de: "baum" },
  { ar: "نهر", en: "river", fr: "rivière", de: "fluss" },
  { ar: "بحر", en: "sea", fr: "mer", de: "meer" },
  { ar: "جبل", en: "mountain", fr: "montagne", de: "berg" },
  { ar: "طائرة", en: "plane", fr: "avion", de: "flugzeug" },
  { ar: "قطار", en: "train", fr: "train", de: "zug" },
  { ar: "حافلة", en: "bus", fr: "bus", de: "bus" },
  { ar: "دراجة", en: "bicycle", fr: "vélo", de: "fahrrad" },
  { ar: "ساعة", en: "clock", fr: "horloge", de: "uhr" },
  { ar: "وقت", en: "time", fr: "temps", de: "zeit" },
  { ar: "يوم", en: "day", fr: "jour", de: "tag" },
  { ar: "ليل", en: "night", fr: "nuit", de: "nacht" },
  { ar: "سعيد", en: "happy", fr: "heureux", de: "glücklich" },
  { ar: "حزين", en: "sad", fr: "triste", de: "traurig" },
  { ar: "كبير", en: "big", fr: "grand", de: "groß" },
  { ar: "صغير", en: "small", fr: "petit", de: "klein" },
  { ar: "سريع", en: "fast", fr: "rapide", de: "schnell" },
  { ar: "بطيء", en: "slow", fr: "lent", de: "langsam" },
  { ar: "قوي", en: "strong", fr: "fort", de: "stark" },
  { ar: "ضعيف", en: "weak", fr: "faible", de: "schwach" },
  { ar: "جديد", en: "new", fr: "nouveau", de: "neu" },
  { ar: "قديم", en: "old", fr: "ancien", de: "alt" },
  { ar: "سهل", en: "easy", fr: "facile", de: "einfach" },
  { ar: "صعب", en: "difficult", fr: "difficile", de: "schwierig" },
  { ar: "مفتاح", en: "key", fr: "clé", de: "schlüssel" },
  { ar: "باب", en: "door", fr: "porte", de: "tür" },
  { ar: "نافذة", en: "window", fr: "fenêtre", de: "fenster" },
  { ar: "سرير", en: "bed", fr: "lit", de: "bett" },
  { ar: "كرسي", en: "chair", fr: "chaise", de: "stuhl" },
  { ar: "طاولة", en: "table", fr: "table", de: "tisch" },
  { ar: "جدار", en: "wall", fr: "mur", de: "wand" },
  { ar: "سقف", en: "ceiling", fr: "plafond", de: "decke" },
  { ar: "أرض", en: "floor", fr: "sol", de: "boden" },
  { ar: "شارع", en: "street", fr: "rue", de: "straße" },
  { ar: "مدينة", en: "city", fr: "ville", de: "stadt" },
  { ar: "قرية", en: "village", fr: "village", de: "dorf" },
  { ar: "دكان", en: "shop", fr: "magasin", de: "laden" },
  { ar: "سوق", en: "market", fr: "marché", de: "markt" },
  { ar: "مستشفى", en: "hospital", fr: "hôpital", de: "krankenhaus" },
  { ar: "صيدلية", en: "pharmacy", fr: "pharmacie", de: "apotheke" },
  { ar: "بنك", en: "bank", fr: "banque", de: "bank" },
  { ar: "مطار", en: "airport", fr: "aéroport", de: "flughafen" },
  { ar: "محطة", en: "station", fr: "station", de: "station" },
  { ar: "حديقة", en: "garden", fr: "jardin", de: "garten" },
  { ar: "منتزه", en: "park", fr: "parc", de: "park" },
  { ar: "مكتبة", en: "library", fr: "bibliothèque", de: "bibliothek" },
  { ar: "متحف", en: "museum", fr: "musée", de: "museum" },
  { ar: "مسجد", en: "mosque", fr: "mosquée", de: "moschee" },
  { ar: "كنيسة", en: "church", fr: "église", de: "kirche" },
  { ar: "معبد", en: "temple", fr: "temple", de: "tempel" },
  { ar: "شاطئ", en: "beach", fr: "plage", de: "strand" },
  { ar: "نهر", en: "river", fr: "rivière", de: "fluss" },
  { ar: "بحيرة", en: "lake", fr: "lac", de: "see" },
  { ar: "غابة", en: "forest", fr: "forêt", de: "wald" },
  { ar: "صحراء", en: "desert", fr: "désert", de: "wüste" },
  { ar: "مطر", en: "rain", fr: "pluie", de: "regen" },
  { ar: "ثلج", en: "snow", fr: "neige", de: "schnee" },
  { ar: "رياح", en: "wind", fr: "vent", de: "wind" },
  { ar: "طقس", en: "weather", fr: "temps", de: "wetter" },
  { ar: "خريف", en: "autumn", fr: "automne", de: "herbst" },
  { ar: "صيف", en: "summer", fr: "été", de: "sommer" },
  { ar: "ربيع", en: "spring", fr: "printemps", de: "frühling" },
  { ar: "شتاء", en: "winter", fr: "hiver", de: "winter" },
  { ar: "أبيض", en: "white", fr: "blanc", de: "weiß" },
  { ar: "أسود", en: "black", fr: "noir", de: "schwarz" },
  { ar: "أحمر", en: "red", fr: "rouge", de: "rot" },
  { ar: "أزرق", en: "blue", fr: "bleu", de: "blau" },
  { ar: "أخضر", en: "green", fr: "vert", de: "grün" },
  { ar: "أصفر", en: "yellow", fr: "jaune", de: "gelb" },
  { ar: "برتقالي", en: "orange", fr: "orange", de: "orange" },
  { ar: "وردي", en: "pink", fr: "rose", de: "rosa" },
  { ar: "بنفسجي", en: "purple", fr: "violet", de: "violett" },
  { ar: "رمادي", en: "gray", fr: "gris", de: "grau" },
  { ar: "بني", en: "brown", fr: "marron", de: "braun" },
  { ar: "ذكي", en: "smart", fr: "intelligent", de: "klug" },
  { ar: "غبي", en: "stupid", fr: "stupide", de: "dumm" },
  { ar: "جميل", en: "beautiful", fr: "beau", de: "schön" },
  { ar: "قبيح", en: "ugly", fr: "laid", de: "hässlich" },
  { ar: "طويل", en: "tall", fr: "grand", de: "groß" },
  { ar: "قصير", en: "short", fr: "court", de: "klein" },
  { ar: "سميك", en: "thick", fr: "épais", de: "dick" },
  { ar: "رقيق", en: "thin", fr: "fin", de: "dünn" },
  { ar: "حار", en: "hot", fr: "chaud", de: "heiß" },
  { ar: "بارد", en: "cold", fr: "froid", de: "kalt" },
  { ar: "جاف", en: "dry", fr: "sec", de: "trocken" },
  { ar: "رطب", en: "wet", fr: "humide", de: "feucht" },
  { ar: "صحي", en: "healthy", fr: "sain", de: "gesund" },
  { ar: "مريض", en: "sick", fr: "malade", de: "krank" },
  { ar: "سعيد", en: "happy", fr: "heureux", de: "glücklich" },
  { ar: "حزين", en: "sad", fr: "triste", de: "traurig" },
  { ar: "مفتوح", en: "open", fr: "ouvert", de: "offen" },
  { ar: "مغلق", en: "closed", fr: "fermé", de: "geschlossen" },
  { ar: "جديد", en: "new", fr: "nouveau", de: "neu" },
  { ar: "قديم", en: "old", fr: "ancien", de: "alt" },
  { ar: "سهل", en: "easy", fr: "facile", de: "einfach" },
  { ar: "صعب", en: "difficult", fr: "difficile", de: "schwierig" },
  { ar: "نظيف", en: "clean", fr: "propre", de: "sauber" },
  { ar: "قذر", en: "dirty", fr: "sale", de: "schmutzig" },
  { ar: "قريب", en: "near", fr: "près", de: "nah" },
  { ar: "بعيد", en: "far", fr: "loin", de: "fern" },
  { ar: "سريع", en: "fast", fr: "rapide", de: "schnell" },
  { ar: "بطيء", en: "slow", fr: "lent", de: "langsam" },
  { ar: "خفيف", en: "light", fr: "léger", de: "leicht" },
  { ar: "ثقيل", en: "heavy", fr: "lourd", de: "schwer" },
  { ar: "قوي", en: "strong", fr: "fort", de: "stark" },
  { ar: "ضعيف", en: "weak", fr: "faible", de: "schwach" },
  { ar: "أعلى", en: "up", fr: "haut", de: "oben" },
  { ar: "أسفل", en: "down", fr: "bas", de: "unten" },
  { ar: "يمين", en: "right", fr: "droite", de: "rechts" },
  { ar: "يسار", en: "left", fr: "gauche", de: "links" },
  { ar: "أمام", en: "front", fr: "devant", de: "vorne" },
  { ar: "خلف", en: "back", fr: "arrière", de: "hinten" },
  { ar: "داخلي", en: "inside", fr: "à l'intérieur", de: "innen" },
  { ar: "خارجي", en: "outside", fr: "à l'extérieur", de: "außen" },
  { ar: "أعلى", en: "top", fr: "haut", de: "oben" },
  { ar: "أسفل", en: "bottom", fr: "bas", de: "unten" },
  { ar: "جيد", en: "good", fr: "bon", de: "gut" },
  { ar: "سيء", en: "bad", fr: "mauvais", de: "schlecht" },
  { ar: "مشرق", en: "bright", fr: "lumineux", de: "hell" },
  { ar: "مظلم", en: "dark", fr: "sombre", de: "dunkel" },
  { ar: "قريب", en: "near", fr: "proche", de: "nah" },
  { ar: "بعيد", en: "far", fr: "loin", de: "fern" },

// ضمائر وأفعال مساعدة
  { ar: "أنا", en: "I", fr: "je", de: "ich" },
  { ar: "أنت", en: "you", fr: "tu", de: "du" },
  { ar: "هو", en: "he", fr: "il", de: "er" },
  { ar: "هي", en: "she", fr: "elle", de: "sie" },
  { ar: "نحن", en: "we", fr: "nous", de: "wir" },
  { ar: "أنتم", en: "you", fr: "vous", de: "ihr" },
  { ar: "هم", en: "they", fr: "ils", de: "sie" },

  // أفعال مساعدة شائعة
  { ar: "يكون", en: "is", fr: "est", de: "ist" },
  { ar: "يكونون", en: "are", fr: "sont", de: "sind" },
  { ar: "كان", en: "was", fr: "était", de: "war" },
  { ar: "كانوا", en: "were", fr: "étaient", de: "waren" },
  { ar: "يملك", en: "has", fr: "a", de: "hat" },
  { ar: "يملكون", en: "have", fr: "ont", de: "haben" },
  { ar: "يفعل", en: "does", fr: "fait", de: "tut" },
  { ar: "يفعلون", en: "do", fr: "font", de: "tun" },

  // أمثلة على أفعال شائعة
  { ar: "يذهب", en: "go", fr: "aller", de: "gehen" },
  { ar: "يأتي", en: "come", fr: "venir", de: "kommen" },
  { ar: "يأكل", en: "eat", fr: "manger", de: "essen" },
  { ar: "يشرب", en: "drink", fr: "boire", de: "trinken" },
  { ar: "يقرأ", en: "read", fr: "lire", de: "lesen" },
  { ar: "يكتب", en: "write", fr: "écrire", de: "schreiben" },
];


// دالة الترجمة
function translateText() {
  let inputText = document.getElementById("input").value.trim().toLowerCase();
  let fromLang = document.getElementById("from").value;
  let toLang = document.getElementById("to").value;
  let output = document.getElementById("output");

  if (!inputText) return;

  let words = inputText.split(/\s+/);
  let translated = words.map(word => {
    let found = dictionary.find(item => item[fromLang] === word);
    return found ? found[toLang] : "ترجمة غير موجودة❓ او تأكد من صحة اللغة المختارة";
  });

  output.value = translated.join(" ");
}

// عداد الكلمات
function countWords() {
  let text = document.getElementById("input").value.trim();
  let count = text ? text.split(/\s+/).length : 0;
  document.getElementById("wordCount").innerText = count;
}

// عكس النص
function swapText() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  let temp = input.value;
  input.value = output.value;
  output.value = temp;
  countWords(); // تحديث عداد الكلمات بعد swap
}

// نسخ الترجمة
function copyText() {
  let output = document.getElementById("output");

  if (!output.value) {
    alert("لا يوجد نص لنسخه");
    return;
  }

  navigator.clipboard.writeText(output.value)
    .then(() => alert("✅ تم النسخ!"))
    .catch(() => alert("❌ فشل النسخ"));
}