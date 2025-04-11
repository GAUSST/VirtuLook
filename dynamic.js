// Défilement fluide vers une section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  // Ajout d'un gestionnaire d'événement sur les liens de navigation
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      scrollToSection(targetId);
      // Fermer le menu mobile si ouvert
      const navLinks = document.getElementById("nav-links");
      if (navLinks.classList.contains("active")) {
        toggleMenu();
      }
    });
  });
  
  // Basculer le menu mobile
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }
  
  // Fonction pour recharger la page et défiler vers le haut lors du clic sur le logo
  function reloadAndScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    location.reload();
  }
  
  // Fonction de l'effet de saisie cyclique
  function typeCycle() {
    const text = "VirtuLook Maroc";
    const deletionCount = 6; // nombre de caractères à supprimer (ex: "Maroc")
    const element = document.getElementById("typed-title");
    let currentText = "";
    let index = 0;
  
    // Taper le texte complet
    function typeFull() {
      if (index < text.length) {
        currentText += text[index];
        element.innerHTML = currentText + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeFull, 150);
      } else {
        setTimeout(deletePart, 2000);
      }
    }
    // Supprimer progressivement 'deletionCount' caractères
    function deletePart() {
      let count = 0;
      function deleteChar() {
        if (count < deletionCount) {
          currentText = currentText.slice(0, -1);
          element.innerHTML = currentText + '<span class="cursor">|</span>';
          count++;
          setTimeout(deleteChar, 100);
        } else {
          setTimeout(retypePart, 1000);
        }
      }
      deleteChar();
    }
    // Retaper les caractères supprimés
    function retypePart() {
      const toType = text.slice(text.length - deletionCount);
      let i = 0;
      function retypeChar() {
        if (i < toType.length) {
          currentText += toType[i];
          element.innerHTML = currentText + '<span class="cursor">|</span>';
          i++;
          setTimeout(retypeChar, 150);
        } else {
          setTimeout(resetCycle, 2000);
        }
      }
      retypeChar();
    }
    // Réinitialiser et recommencer le cycle
    function resetCycle() {
      currentText = "";
      index = 0;
      typeFull();
    }
    typeFull();
  }
  
  // Démarrer l'animation de saisie après 800 ms (après la disparition de l'animation de fondu du header)
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeCycle, 800);
  
    // Afficher la flèche de retour vers le haut après défilement
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    });
  });
  
  document.getElementById('formEssaiGratuit').onsubmit = async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(this);
    const response = await fetch('https://formsubmit.co/ajax/gaoussoudiarra658@gmail.com', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('success-message').style.color = 'teal';
      setTimeout(()=>{document.getElementById('success-message').style.display = 'none';}, 3000);
      this.reset(); // Reset the form fields
    } else {
      alert('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };
  
// ------------------------------
// Language Switch Functionality
// ------------------------------
const translations = {
  fr: {
    // Navigation
    "nav-accueil": "Accueil",
    "nav-fonctionnement": "Fonctionnement",
    "nav-tarifs": "Tarifs",
    "nav-galerie": "Galerie",
    "nav-temoignages": "Témoignages",
    "nav-contact": "Contact",
    // Hero Section
    "hero-slogan": "Pas de mannequin ? Aucun souci.",
    "hero-subheadline": "Gagnez du temps et réalisez des économies grâce à des visuels de modèles générés par notre IA, parfaitement adaptés à votre gamme de produits.",
    "hero-cta": "Essayez 2 images gratuitement",
    // Fonctionnement Section
    "sect-fonctionnement": "Comment ça marche",
    "etape-1-title": "Étape 1",
    "etape-1-text": "Envoyez une photo claire de votre produit",
    "etape-2-title": "Étape 2",
    "etape-2-text": "Choisissez votre plan et options d'image",
    "etape-3-title": "Étape 3",
    "etape-3-text": "Recevez votre image de modèle en 24–48 heures",
    // Tarifs Section
    "sect-tarifs": "Tarifs (par image)",
    "global-offer": "🎁 2 images gratuites + -50% sur les 5 premières",
    "tarif-basique": "Basique",
    "basique-1": "AI creative direction (angles & vibe choisis par nous)",
    "basique-2": "Arrière-plan de style studio",
    "basique-3": "Image soignée et professionnelle",
    "basique-4": "1 révision",
    "basique-5": "⏱ Livraison sous 48 heures",
    "tarif-normale": "Normale",
    "normale-1": "Pose personnalisée (face, profil, en mouvement...)",
    "normale-2": "Arrière-plan sur mesure",
    "normale-3": "Style uniforme pour votre marque",
    "normale-4": "2 révisions",
    "normale-5": "⏱ Livraison sous 24 heures",
    "tarif-premium": "Premium",
    "premium-1": "Personnalisation complète du modèle virtuel",
    "premium-2": "Arrière-plans haute qualité",
    "premium-3": "Rendu + retouches premium",
    "premium-4": "4 révisions incluses",
    "premium-5": "🚀 Livraison prioritaire",
    // Galerie Section
    "sect-galerie": "Galerie Visuelle",
    // Témoignages & Bénéfices Section
    "sect-temoignages": "Témoignages & Bénéfices",
    "testimonial": "Cela m'a permis d'économiser 50% par mois sur les frais de modèles.",
    "benefice-1": "Abordable : une fraction du prix d'une séance photo pour mannequins.",
    "benefice-2": "Livraison rapide : délai d'exécution de 24 à 48 heures.",
    "benefice-3": "Évolutif : gérez vos articles sans recruter de modèles.",
    "benefice-4": "Offre de bienvenue : 🎁 2 premières images GRATUITES et 💥 50 % de réduction sur vos 5 prochaines images.",
    // Contact Section
    "sect-contact": "Contactez-nous",
    "contact-text": "Passez commande directement ou demandez votre essai gratuit dès maintenant !",
    "form-title": "Demandez votre essai gratuit"
  },
  ar: {
    // Navigation
    "nav-accueil": "Accueil",
    "nav-fonctionnement": "Fonctionnement",
    "nav-tarifs": "Tarifs",
    "nav-galerie": "Galerie",
    "nav-temoignages": "Témoignages",
    "nav-contact": "Contact",
    // Hero Section
    "hero-slogan": "لا تحتاج إلى عارض؟ لا مشكلة.",
    "hero-subheadline": "وفر وقتك وقلل التكاليف من خلال صور عارضين تم إنشاؤها بالذكاء الاصطناعي، والمناسبة تماماً لخط إنتاجك.",
    "hero-cta": "جرب صورتين مجاناً",
    // Fonctionnement Section
    "sect-fonctionnement": "كيفية العمل",
    "etape-1-title": "الخطوة 1",
    "etape-1-text": "أرسل صورة واضحة لمنتجك",
    "etape-2-title": "الخطوة 2",
    "etape-2-text": "اختر الخطة وخيارات الصورة",
    "etape-3-title": "الخطوة 3",
    "etape-3-text": "استلم صورة العارض خلال 24-48 ساعة",
    // Tarifs Section
    "sect-tarifs": "الأسعار (لكل صورة)",
    "global-offer": "🎁 صورتان مجاناً + خصم 50% على أول 5 صور",
    "tarif-basique": "أساسي",
    "basique-1": "توجيه إبداعي بالذكاء الاصطناعي (نختار أفضل الزوايا والأجواء)",
    "basique-2": "خلفية بنمط الاستوديو",
    "basique-3": "صورة أنيقة واحترافية",
    "basique-4": "مراجعة واحدة",
    "basique-5": "⏱ التسليم خلال 48 ساعة",
    "tarif-normale": "عادي",
    "normale-1": "وضعية مخصصة (مقدمة، جانبية، في حركة...)",
    "normale-2": "خلفية حسب الطلب",
    "normale-3": "نمط موحد لعلامتك التجارية",
    "normale-4": "مراجعتان",
    "normale-5": "⏱ التسليم خلال 24 ساعة",
    "tarif-premium": "ممتاز",
    "premium-1": "تخصيص كامل للعارض الافتراضي",
    "premium-2": "خلفيات عالية الجودة",
    "premium-3": "تقديم مع تعديلات ممتازة",
    "premium-4": "4 مراجعات مشمولة",
    "premium-5": "🚀 تسليم ذو أولوية",
    // Galerie Section
    "sect-galerie": "المعرض البصري",
    // Témoignages & Bénéfices Section
    "sect-temoignages": "الشهادات والفوائد",
    "testimonial": "هذا ساعدني على توفير 50% شهرياً من تكاليف العارضين.",
    "benefice-1": "اقتصادي: جزء بسيط من تكلفة جلسة التصوير للعارضين.",
    "benefice-2": "تسليم سريع: مدة التنفيذ من 24 إلى 48 ساعة.",
    "benefice-3": "قابل للتطوير: ادِر منتجاتك دون الحاجة لتوظيف عارضين.",
    "benefice-4": "عرض ترحيبي: 🎁 أول صورتين مجاناً و💥 خصم 50% على أول 5 صور تالية.",
    // Contact Section
    "sect-contact": "اتصل بنا",
    "contact-text": "اطلب مباشرة أو اطلب تجربتك المجانية الآن!",
    "form-title": "اطلب تجربتك المجانية"
  }
};

function switchLanguage(lang) {
  // Loop through each key in the chosen language dictionary
  for (const id in translations[lang]) {
    const element = document.getElementById(id);
    if (element) {
      element.innerText = translations[lang][id];
    }
  }
  // Optionally, update document lang attribute
  document.documentElement.lang = lang;
}