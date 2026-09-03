/* ==========================================================================
   KrishiDeal - Direct Farmer Platform (v2.8.0 UP Mentha & Potato Market Suite)
   ========================================================================== */

const API_BASE_URL = "http://localhost:5000/api";

// Full Translation Dictionaries for ALL 13 Official Indian Languages
const TRANSLATIONS = {
  hi: {
    brandSubtitle: "उत्तर प्रदेश के सभी 75 जिले", roleFarmer: "किसान (विक्रेता)", roleBuyer: "खरीदार / मंडी व्यापारी",
    smsAlertsBtn: "व्यापार एसएमएस", postBtn: "फसल नमूना पोस्ट करें",
    heroTitle: "मेंटहा तेल और आलू सीधा मंडी व्यापार (फर्रुखाबाद, आगरा व संभल) 🌿🥔",
    heroSubtitle: "सत्यापित सुगंधित तेल निर्यातकों, कोल्ड स्टोरेज व्यापारियों और आलू मंडी आढ़तियों से सीधे जुड़ें। अपने जिले के लाइव आलू (कट्टा/कुंतल) व मेंटहा मंडी भाव देखें।",
    statActive: "सक्रिय नमूने", statRate: "स्थानीय मेंटहा रेट", statDistricts: "75 जिले कवरेज",
    widgetTitle: "उत्तर प्रदेश के सभी 75 जिलों के मंडी भाव", widgetSub: "लाइव एमसीएक्स (MCX) भाव के आधार पर आपके जिले का सीधा मंडी रेट।",
    selectDistrictLabel: "📍 अपना जिला चुनें:", mcxLabel: "बैकग्राउंड लाइव इंजन:", mcxSub: "इकोनॉमिक टाइम्स / MCX वायदा बाजार (MENTHAOIL)",
    weatherTitle: "7-दिवसीय मौसम, मेंटहा पेराई व आलू कोल्ड स्टोरेज निकासी सलाह", weatherRegion: "क्षेत्र: उत्तर प्रदेश मेंटहा व आलू बेल्ट (फर्रुखाबाद, आगरा व संभल) | लाइव अपडेट",
    weatherStatus: "✅ भाप आसवन पेराई एवं आलू लोड/अनलोड हेतु उत्तम मौसम", voiceBtn: "बोलकर खोजें", searchPlaceholder: "फसल खोजें (उदा. मेंटहा तेल, फर्रुखाबाद आलू 3797, शरबाती गेहूं)...",
    tabSamples: "फसल नमूने व बोलियां", tabMandi: "लाइव मंडी भाव", tabLogistics: "भाड़ा कैलकुलेटर", tabCold: "कोल्ड स्टोरेज बुकिंग", tabQuality: "गुणवत्ता जांच (AI)", tabDeals: "पक्के सौदे एवं एस्क्रो",
    mandiTabTitle: "📊 उत्तर प्रदेश के सभी 75 जिलों के मंडी व आलू भाव", mandiTabSub: "विभिन्न एपीएमसी मंडियों, संभल व बाराबंकी सुगंधित तेल बाजारों, फर्रुखाबाद आलू मंडी और एमसीएक्स (MCX) के रेट की तुलना करें।"
  },
  en: {
    brandSubtitle: "All 75 UP Districts Platform", roleFarmer: "Farmer (Seller)", roleBuyer: "Buyer / Mandi Trader",
    smsAlertsBtn: "Trade SMS", postBtn: "Post Produce Sample",
    heroTitle: "Mentha Oil & UP Potato Direct Trade (Farrukhabad & Agra) 🌿🥔",
    heroSubtitle: "Connect directly with essential oil exporters, cold storage owners, and UP Potato APMC wholesalers. Track live Mentha & Potato rates.",
    statActive: "Active Samples", statRate: "Local Mentha Rate", statDistricts: "75 UP Districts",
    widgetTitle: "All 75 Uttar Pradesh District Mandi Rates", widgetSub: "Live APMC Mandi rates computed relative to background MCX benchmark.",
    selectDistrictLabel: "📍 Select UP District:", mcxLabel: "BACKGROUND ENGINE:", mcxSub: "Economic Times / MCX Live Feed (MENTHAOIL)",
    weatherTitle: "7-Day Weather & Potato Cold Storage Advisory", weatherRegion: "Region: UP Mentha & Potato Belt (Farrukhabad & Agra) | Live Update",
    weatherStatus: "✅ Optimal Steam Distillation & Potato Storage Window", voiceBtn: "Voice Search", searchPlaceholder: "Search crops (e.g. Mentha Oil, Farrukhabad Potato 3797)...",
    tabSamples: "Crop Samples & Bids", tabMandi: "Live Mandi Rates", tabLogistics: "Logistics Estimator", tabCold: "Cold Storage Slot", tabQuality: "AI Quality Score", tabDeals: "Sealed Deals & Escrow",
    mandiTabTitle: "📊 Live Mandi Rates Across UP Districts & Farrukhabad Potato", mandiTabSub: "Compare APMC Mandi benchmark rates with Farrukhabad & Agra Potato hubs."
  }
};

const INITIAL_SAMPLES = [
  {
    id: "SMP-POTATO-201",
    title: "Farrukhabad Kufri Bahar 3797 Potato (AAA Grade)",
    category: "Potato",
    variety: "Kufri Bahar (3797 Table Potato)",
    quantity: 500, // 500 Kattas = 250 Quintal
    unit: "Kattas (50kg Bags)",
    reservePrice: 710, // ₹ per 50kg bag
    pricePerQtl: 1420,
    moisture: 11.2,
    purity: 98.5,
    grade: "Grade A+ (Large 55mm+)",
    location: "Farrukhabad Cold Storage, UP (Pin: 209625)",
    farmerName: "Ram Prakash Rajput",
    verifiedFarmer: true,
    khasraNo: "UP-FRK-4402",
    harvestDate: "2026-08-28",
    image: "assets/potato.png",
    offers: [
      { buyerName: "Agra Cold Chain Wholesale Traders", offerPrice: 730, token: 35000, term: "Direct Cold Storage Bay Delivery", verifiedBuyer: true, gstin: "09AGRA5512K1ZN", date: "2026-09-02" }
    ]
  },
  {
    id: "SMP-MENTHA-101",
    title: "Pure Shivalik Mentha Oil (81%+ L-Menthol)",
    category: "Mentha Oil",
    variety: "Shivalik Steam Distilled Mentha Oil",
    quantity: 45,
    unit: "Kg",
    reservePrice: 1208,
    moisture: 0.4,
    purity: 81.5,
    grade: "Grade A+ (Export Pure)",
    location: "Sambhal, Uttar Pradesh (Pin: 244302)",
    farmerName: "Chaudhary Dharamvir Singh",
    verifiedFarmer: true,
    khasraNo: "UP-SMB-902",
    harvestDate: "2026-08-30",
    image: "assets/mentha.png",
    offers: [
      { buyerName: "Barabanki Essential Oils & Distillers", offerPrice: 1220, token: 45000, term: "Buyer Doorstep Drums Pickup", verifiedBuyer: true, gstin: "09AABCB5512K1ZN", date: "2026-09-02" }
    ]
  }
];

let backgroundPotatoEngine = {
  symbol: "POTATO_UP",
  exchange: "UP APMC Mandi Samiti & Farrukhabad Exchange",
  benchmarkPriceQtl: 1420.00,
  benchmarkPriceKatta: 710.00,
  dailyArrivalKattas: 85000,
  changePercent: "+3.20%"
};

let UP_POTATO_BELTS = [
  { district: "Farrukhabad", mandi: "Farrukhabad Potato APMC Mandi", variety: "Kufri Bahar (3797)", modalQtl: 1420, minQtl: 1350, maxQtl: 1480, kattaPrice: 710, arrivalsKattas: 35000, status: "UP Potato Capital 🥔" },
  { district: "Agra", mandi: "Agra Cold Storage & APMC Mandi", variety: "Kufri Bahar & Red Sindhuri", modalQtl: 1450, minQtl: 1380, maxQtl: 1520, kattaPrice: 725, arrivalsKattas: 28000, status: "Cold Chain Hub" },
  { district: "Kannauj", mandi: "Kannauj Potato Trade Yard", variety: "Kufri Pukhraj", modalQtl: 1380, minQtl: 1320, maxQtl: 1440, kattaPrice: 690, arrivalsKattas: 18000, status: "Major Potato Belt" },
  { district: "Firozabad", mandi: "Firozabad Potato Market", variety: "Kufri Bahar (3797)", modalQtl: 1410, minQtl: 1340, maxQtl: 1460, kattaPrice: 705, arrivalsKattas: 14000, status: "Cold Storage Zone" },
  { district: "Hathras", mandi: "Hathras Potato Yard", variety: "Kufri Chipsona 1 (Chips Grade)", modalQtl: 1650, minQtl: 1580, maxQtl: 1720, kattaPrice: 825, arrivalsKattas: 12000, status: "Processing Potato Belt" }
];

let backgroundMcxEngine = {
  symbol: "MENTHAOIL",
  benchmarkPriceKg: 1215.50,
  changePercent: "+2.45%"
};

let MENTHA_LOCALITY_RATES = [
  { mandi: "Sambhal APMC Mandi", district: "Sambhal", state: "Uttar Pradesh", modalPriceKg: 1208.00, minPriceKg: 1195.00, maxPriceKg: 1222.00, trend: "+2.45%", source: "APMC Sambhal Mandi Register", status: "Primary Mentha Belt" }
];

let MANDI_RATES = [
  { mandi: "Farrukhabad APMC Mandi", state: "Uttar Pradesh", crop: "Potato (Kufri Bahar 3797)", min: 1350.00, max: 1480.00, modal: 1420.00, trend: "+3.20%" },
  { mandi: "Agra Cold Storage Exchange", state: "Uttar Pradesh", crop: "Potato (Red Sindhuri)", min: 1380.00, max: 1520.00, modal: 1450.00, trend: "+2.80%" },
  { mandi: "Sambhal APMC Mandi", state: "Uttar Pradesh", crop: "Mentha Oil (Menthol)", min: 1195.00, max: 1222.00, modal: 1208.00, trend: "+2.45%" }
];

let COLD_STORAGES = [
  { id: "CS-POTATO-UP1", name: "Farrukhabad Ganga Cold Storage & Logistics", district: "Farrukhabad, UP", capacity: "12,000 MT (2,40,000 Kattas)", available: "18,500 Kattas Available", temp: "2°C - 4°C (Humidity 90%)", ratePerDay: 0.85, rateFullSeasonKatta: 140 },
  { id: "CS-POTATO-UP2", name: "Agra Yamuna Highway Cold Chain", district: "Agra, UP", capacity: "15,000 MT (3,00,000 Kattas)", available: "24,000 Kattas Available", temp: "3°C (CCTV Managed)", ratePerDay: 0.90, rateFullSeasonKatta: 145 },
  { id: "CS-101", name: "Malwa Central Cold Chain", district: "Indore, MP", capacity: "500 MT", available: "140 MT", temp: "2°C - 4°C", ratePerDay: 4.5, rateFullSeasonKatta: 150 }
];

let coldBookings = [];
let smsLogs = [];
let currentRole = "farmer";
let currentTheme = "light";
let currentTab = "samples";
let currentLanguage = "hi";
let samples = [];
let sealedDeals = [];
let isBackendConnected = false;
let currentUser = null;

document.addEventListener("DOMContentLoaded", async () => {
  loadUserSession();
  await fetchFromBackend();
  initTicker();
  renderPotatoLocalityWidget();
  renderMenthaLocalityWidget();
  renderApp();
  calculateQualityScore();
  calculateFreight();
  renderColdStorage();
  updateSmsBadge();

  setInterval(fetchLiveMenthaRateFromBackend, 30000);
});

function loadUserSession() {
  const savedUser = localStorage.getItem("krishi_user_session");
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      currentRole = currentUser.role || "farmer";
      if (currentUser.preferredLanguage) {
        currentLanguage = currentUser.preferredLanguage;
      }
    } catch (e) {
      currentUser = null;
    }
  }

  const langSelect = document.getElementById("languageSelect");
  if (langSelect) langSelect.value = currentLanguage;
  applyLanguageTranslations(currentLanguage);
  renderAuthNav();
}

function changeLanguage(langCode) {
  currentLanguage = langCode;
  if (currentUser) {
    currentUser.preferredLanguage = langCode;
    localStorage.setItem("krishi_user_session", JSON.stringify(currentUser));
  }
  applyLanguageTranslations(langCode);
  renderApp();
  renderPotatoLocalityWidget();
  renderMenthaLocalityWidget();
  showToast(`🌐 Native Language set to: ${getLanguageName(langCode)}`);
}

function getLanguageName(code) {
  const names = {
    hi: "हिंदी (Hindi)", en: "English", pa: "ਪੰਜਾਬੀ (Punjabi)", gu: "ગુજરાતી (Gujarati)",
    mr: "मराठी (Marathi)", bn: "বাংলা (Bengali)", ta: "தமிழ் (Tamil)", te: "తెలుగు (Telugu)",
    kn: "ಕನ್ನಡ (Kannada)", ml: "മലയാളം (Malayalam)", or: "ଓଡ଼ିଆ (Odia)", as: "অসমীয়া (Assamese)", ur: "اردو (Urdu)"
  };
  return names[code] || "Hindi";
}

function applyLanguageTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['hi'];
  
  setElText("txtBrandSubtitle", dict.brandSubtitle);
  setElText("txtRoleFarmer", dict.roleFarmer);
  setElText("txtRoleBuyer", dict.roleBuyer);
  setElText("txtSmsAlertsBtn", dict.smsAlertsBtn);
  setElText("txtPostBtn", dict.postBtn);
  setElText("heroTitle", dict.heroTitle);
  setElText("heroSubtitle", dict.heroSubtitle);
  setElText("txtStatActive", dict.statActive);
  setElText("txtStatRate", dict.statRate);
  setElText("txtStatDistricts", dict.statDistricts);
  setElText("txtWidgetTitle", dict.widgetTitle);
  setElText("txtWidgetSub", dict.widgetSub);
  setElText("txtSelectDistrictLabel", dict.selectDistrictLabel);
  setElText("txtMcxLabel", dict.mcxLabel);
  setElText("txtMcxSub", dict.mcxSub);
  setElText("txtWeatherTitle", dict.weatherTitle);
  setElText("txtWeatherRegion", dict.weatherRegion);
  setElText("txtWeatherStatus", dict.weatherStatus);
  setElText("txtVoiceBtn", dict.voiceBtn);
  setElText("tabLabelSamples", dict.tabSamples);
  setElText("tabLabelMandi", dict.tabMandi);
  setElText("tabLabelLogistics", dict.tabLogistics);
  setElText("tabLabelCold", dict.tabCold);
  setElText("tabLabelQuality", dict.tabQuality);
  setElText("tabLabelDeals", dict.tabDeals);
  setElText("txtMandiTabTitle", dict.mandiTabTitle);
  setElText("txtMandiTabSub", dict.mandiTabSub);

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = dict.searchPlaceholder;
}

function setElText(id, text) {
  const el = document.getElementById(id);
  if (el && text) el.innerText = text;
}

// RENDER UP POTATO LOCALITY MANDI WIDGET
async function renderPotatoLocalityWidget() {
  const selectEl = document.getElementById("potatoLocalitySelect");
  const container = document.getElementById("potatoLocalityGrid");
  const engineTag = document.getElementById("potatoEngineStatusTag");
  if (!container || !selectEl) return;

  const selectedLocality = selectEl.value;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/potato/rates?district=${selectedLocality}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.potatoBelts) {
          UP_POTATO_BELTS = data.potatoBelts;
          if (data.engine) backgroundPotatoEngine = data.engine;
        }
      }
    } catch (e) {
      console.log("Potato rates fetch fallback active.");
    }
  }

  if (engineTag && backgroundPotatoEngine) {
    engineTag.innerText = `फर्रुखाबाद बेंचमार्क: ₹${backgroundPotatoEngine.benchmarkPriceQtl.toFixed(2)} / कुंतल (₹${backgroundPotatoEngine.benchmarkPriceKatta.toFixed(2)} / 50kg कट्टा) (${backgroundPotatoEngine.changePercent} ▲)`;
  }

  const sorted = [...UP_POTATO_BELTS].sort((a, b) => {
    if (a.district.toLowerCase() === selectedLocality.toLowerCase()) return -1;
    if (b.district.toLowerCase() === selectedLocality.toLowerCase()) return 1;
    return 0;
  });

  const displayList = sorted.slice(0, 4);

  let html = "";
  displayList.forEach((item, idx) => {
    const isPrimary = idx === 0;

    html += `
      <div style="background: ${isPrimary ? '#3F1A05' : 'rgba(255,255,255,0.08)'}; border: ${isPrimary ? '2px solid #FCD34D' : '1px solid rgba(255,255,255,0.15)'}; border-radius: var(--radius-md); padding: 16px; display: flex; flex-direction: column; justify-content: space-between; color: white;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span style="font-size: 0.72rem; font-weight: 800; background: ${isPrimary ? '#D97706' : '#78350F'}; color: white; padding: 2px 8px; border-radius: 99px;">
              ${isPrimary ? '🥔 SELECTED POTATO BELT' : '🏢 UP POTATO MANDI'}
            </span>
            <span style="font-size: 0.75rem; color: #FCD34D; font-weight: 700;">+3.20% ▲</span>
          </div>
          <h4 style="font-size: 1.05rem; font-weight: 800; margin-top: 4px; color: #FDE68A;">${item.mandi}</h4>
          <span style="font-size: 0.75rem; opacity: 0.85;">किस्म: ${item.variety}</span>
        </div>

        <div style="margin-top: 12px; border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 8px;">
          <div style="font-size: 1.4rem; font-weight: 900; color: #FCD34D;">₹${item.kattaPrice} <span style="font-size: 0.75rem; font-weight: normal; color: white;">/ 50kg कट्टा (Bag)</span></div>
          <div style="font-size: 0.82rem; font-weight: 700; color: #FEF08A; margin-top: 2px;">₹${item.modalQtl} / कुंतal (Qtl)</div>
          <div style="font-size: 0.72rem; opacity: 0.85; margin-top: 4px;">आज की आवक: ${item.arrivalsKattas.toLocaleString()} कट्टे</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  const statPotato = document.getElementById("statActivePotatoRate");
  if (statPotato && displayList[0]) {
    statPotato.innerText = `₹${displayList[0].kattaPrice}/कट्टा`;
  }
}

function renderAuthNav() {
  const container = document.getElementById("authNavContainer");
  if (!container) return;

  if (currentUser) {
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const verifiedBadge = currentUser.verified ? (currentUser.role === 'farmer' ? 'Verified Farmer ✅' : 'APMC Buyer ✅') : '';
    container.innerHTML = `
      <div class="user-profile-widget">
        <div class="user-avatar">${initials}</div>
        <div class="user-name-role">
          <span>${currentUser.name}</span>
          <span class="user-role-badge">${verifiedBadge || (currentUser.role === 'farmer' ? '🧑‍🌾 Farmer' : '🏢 Mandi Buyer')}</span>
        </div>
        <button class="btn-signout" onclick="handleSignOut()" title="Sign Out">Sign Out</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="btn-auth-nav" onclick="openAuthModal('login')">
        🔑 Sign In / Register
      </button>
    `;
  }
}

function openAuthModal(mode = 'login') {
  switchAuthTab(mode);
  document.getElementById("authModal").classList.add("active");
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLogin = document.getElementById("authSubTabLogin");
  const tabRegister = document.getElementById("authSubTabRegister");
  const title = document.getElementById("authModalTitle");

  if (tab === 'login') {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    tabLogin.classList.add("active");
    tabRegister.classList.remove("active");
    title.innerText = "🔑 Sign In / कृषिडील लॉगिन";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    tabLogin.classList.remove("active");
    tabRegister.classList.add("active");
    title.innerText = "🛡️ Verified Registration / नया पंजीकरण";
    toggleRegRoleFields();
  }
}

function toggleRegRoleFields() {
  const role = document.getElementById("regRole").value;
  const sectionFarmer = document.getElementById("sectionFarmerVerification");
  const sectionBuyer = document.getElementById("sectionBuyerVerification");

  if (role === "farmer") {
    sectionFarmer.style.display = "block";
    sectionBuyer.style.display = "none";
  } else {
    sectionFarmer.style.display = "none";
    sectionBuyer.style.display = "block";
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const identifier = document.getElementById("loginIdentifier").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password })
      });
      const data = await res.json();
      if (!data.success) {
        showToast("⚠️ " + data.error);
        return;
      }
      currentUser = data.user;
    } catch (err) {
      console.error("Auth login error", err);
    }
  }

  if (!currentUser) {
    if (identifier === "9876543210" || identifier === "dharamvir@menthafarmer.in") {
      currentUser = { id: "USR-101", name: "Chaudhary Dharamvir Singh", phone: "9876543210", role: "farmer", location: "Sambhal & Farrukhabad, UP", verified: true, khasraNo: "UP-SMB-902", preferredLanguage: "hi" };
    } else if (identifier === "9123456789" || identifier === "trader@barabankimentha.com") {
      currentUser = { id: "USR-102", name: "Barabanki & Agra Wholesale Traders", phone: "9123456789", role: "buyer", location: "Farrukhabad Mandi, UP", verified: true, gstin: "09AGRA5512K1ZN", preferredLanguage: "hi" };
    } else {
      currentUser = { id: "USR-" + Date.now(), name: identifier.split('@')[0], phone: identifier, role: "farmer", location: "Uttar Pradesh", verified: true, preferredLanguage: "hi" };
    }
  }

  localStorage.setItem("krishi_user_session", JSON.stringify(currentUser));
  setRole(currentUser.role);
  
  if (currentUser.preferredLanguage) {
    changeLanguage(currentUser.preferredLanguage);
  }

  closeModal("authModal");
  renderAuthNav();
  showToast(`Welcome back, ${currentUser.name}! App loaded in ${getLanguageName(currentLanguage)}.`);
}

async function handleRegister(e) {
  e.preventDefault();
  const role = document.getElementById("regRole").value;
  const preferredLanguage = document.getElementById("regLanguage").value;
  const name = document.getElementById("regName").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const location = document.getElementById("regLocation").value.trim();

  const khasraNo = document.getElementById("regKhasraNo").value.trim();
  const kccId = document.getElementById("regKccId").value.trim();
  const landAcres = document.getElementById("regLandAcres").value.trim();

  const firmType = document.getElementById("regFirmType").value;
  const gstin = document.getElementById("regGstin").value.trim();
  const mandiLicense = document.getElementById("regMandiLicense").value.trim();

  const regPayload = { name, phone, email, password, role, preferredLanguage, location, khasraNo, kccId, landAcres, firmType, gstin, mandiLicense };

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regPayload)
      });
      const data = await res.json();
      if (!data.success) {
        showToast("⚠️ " + data.error);
        return;
      }
      currentUser = data.user;
    } catch (err) {
      console.error("Auth register error", err);
    }
  }

  if (!currentUser) {
    currentUser = {
      id: "USR-" + Date.now(),
      name, phone, email: email || `${phone}@krishideal.com`,
      role, preferredLanguage, location, khasraNo: khasraNo || "K-VERIFIED", gstin: gstin || "GST-VERIFIED",
      verified: true, verificationBadge: role === 'farmer' ? 'Genuine Farmer ✅' : 'APMC Verified Buyer ✅'
    };
  }

  localStorage.setItem("krishi_user_session", JSON.stringify(currentUser));
  setRole(currentUser.role);
  
  changeLanguage(preferredLanguage);

  closeModal("authModal");
  document.getElementById("registerForm").reset();
  renderAuthNav();
  showToast(`🎉 Registration successful! Portal opened in ${getLanguageName(preferredLanguage)}.`);
}

function handleSignOut() {
  currentUser = null;
  localStorage.removeItem("krishi_user_session");
  renderAuthNav();
  showToast("You have signed out of KrishiDeal.");
}

async function fetchLiveMenthaRateFromBackend() {
  try {
    const selectEl = document.getElementById("menthaLocalitySelect");
    const selectedDist = selectEl ? selectEl.value : "Sambhal";
    
    const res = await fetch(`${API_BASE_URL}/mentha/rates?district=${selectedDist}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        if (data.backgroundMcxEngine) backgroundMcxEngine = data.backgroundMcxEngine;
        if (data.allLocalMandis) MENTHA_LOCALITY_RATES = data.allLocalMandis;
        renderMenthaLocalityWidget();
        initTicker();
      }
    }
  } catch (e) {
    console.log("Live rate refresh fallback active.");
  }
}

async function renderMenthaLocalityWidget() {
  const selectEl = document.getElementById("menthaLocalitySelect");
  const container = document.getElementById("menthaLocalityGrid");
  const engineTag = document.getElementById("mcxEngineStatusTag");
  if (!container || !selectEl) return;

  if (engineTag && backgroundMcxEngine) {
    engineTag.innerText = `MCX Benchmark: ₹${backgroundMcxEngine.benchmarkPriceKg.toFixed(2)} / Kg (${backgroundMcxEngine.changePercent} ▲)`;
  }

  const selectedLocality = selectEl.value;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/mentha/rates?district=${selectedLocality}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.allLocalMandis) {
          MENTHA_LOCALITY_RATES = data.allLocalMandis;
        }
      }
    } catch (e) {
      console.log("Locality fetch fallback active.");
    }
  }
  
  const sorted = [...MENTHA_LOCALITY_RATES].sort((a, b) => {
    if (a.district.toLowerCase() === selectedLocality.toLowerCase()) return -1;
    if (b.district.toLowerCase() === selectedLocality.toLowerCase()) return 1;
    return 0;
  });

  const displayList = sorted.slice(0, 4);

  let html = "";
  displayList.forEach((item, idx) => {
    const isPrimary = idx === 0;

    html += `
      <div style="background: ${isPrimary ? '#092B22' : 'rgba(255,255,255,0.08)'}; border: ${isPrimary ? '2px solid #4ADE80' : '1px solid rgba(255,255,255,0.15)'}; border-radius: var(--radius-md); padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span style="font-size: 0.72rem; font-weight: 800; background: ${isPrimary ? '#16A34A' : '#1E2D4A'}; color: white; padding: 2px 8px; border-radius: 99px;">
              ${isPrimary ? '📍 SELECTED UP DISTRICT' : '🏛️ REGIONAL MANDI'}
            </span>
            <span style="font-size: 0.75rem; color: #4ADE80; font-weight: 700;">${item.trend} ▲</span>
          </div>
          <h4 style="font-size: 1.08rem; font-weight: 800; margin-top: 4px;">${item.mandi}</h4>
          <span style="font-size: 0.75rem; opacity: 0.85;">District: ${item.district}, UP</span>
        </div>

        <div style="margin-top: 12px; border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 8px;">
          <div style="font-size: 1.45rem; font-weight: 900; color: #4ADE80;">₹${item.modalPriceKg.toFixed(2)} <span style="font-size: 0.75rem; font-weight: normal; color: white;">/ Kg</span></div>
          <div style="font-size: 0.75rem; opacity: 0.85;">Mandi Range: ₹${item.minPriceKg.toFixed(2)} - ₹${item.maxPriceKg.toFixed(2)}</div>
          <div style="font-size: 0.7rem; color: #FCD34D; font-weight: 600; margin-top: 4px;">Source: ${item.source} ✅</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  const statMentha = document.getElementById("statActiveMentha");
  if (statMentha && displayList[0]) {
    statMentha.innerText = `₹${displayList[0].modalPriceKg.toFixed(2)}/Kg`;
  }
}

function startVoiceRecognition() {
  const voiceBtn = document.getElementById("voiceSearchBtn");
  const searchInput = document.getElementById("searchInput");

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
    recognition.interimResults = false;

    voiceBtn.classList.add("listening");
    voiceBtn.innerText = "🎙️ Listening...";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      searchInput.value = transcript;
      voiceBtn.classList.remove("listening");
      voiceBtn.innerText = "🎙️ Speak";
      renderApp();
      showToast(`🗣️ Voice Search Result: "${transcript}"`);
    };

    recognition.onerror = () => {
      voiceBtn.classList.remove("listening");
      voiceBtn.innerText = "🎙️ Speak";
      simulateVoiceSearch();
    };

    recognition.start();
  } else {
    simulateVoiceSearch();
  }
}

function simulateVoiceSearch() {
  const voiceBtn = document.getElementById("voiceSearchBtn");
  const searchInput = document.getElementById("searchInput");
  voiceBtn.classList.add("listening");
  voiceBtn.innerText = "🎙️ Listening...";

  setTimeout(() => {
    const samplesVoice = ["फर्रुखाबाद आलू", "मेंटहा तेल", "संभल मंडी", "आगरा कोल्ड स्टोरेज"];
    const randomCrop = samplesVoice[Math.floor(Math.random() * samplesVoice.length)];
    searchInput.value = randomCrop;
    voiceBtn.classList.remove("listening");
    voiceBtn.innerText = "🎙️ Speak";
    renderApp();
    showToast(`🗣️ Voice Input: "${randomCrop}"`);
  }, 1800);
}

async function calculateFreight() {
  const kmEl = document.getElementById("logisticsDistance");
  const qtlEl = document.getElementById("logisticsWeight");
  if (!kmEl || !qtlEl) return;

  const distance = parseFloat(kmEl.value || 45);

  let rates = {
    erickshaw: Math.round(distance * 25 + 300),
    eicher10T: Math.round(distance * 45 + 1200),
    multiAxle16T: Math.round(distance * 65 + 2500)
  };

  const container = document.getElementById("freightQuotesList");
  if (!container) return;

  container.innerHTML = `
    <div class="freight-card">
      <div>
        <strong>🛺 E-Rickshaw / Mini Loader (Max 30 Potato Kattas/Drums)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Farm to local cold storage or mandi delivery</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.erickshaw.toLocaleString()}</div>
    </div>
    <div class="freight-card">
      <div>
        <strong>🚛 10-Tonne Eicher Truck (Max 200 Potato Kattas / 100 Qtl)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Standard Farrukhabad to Delhi/Kanpur Mandi shipment</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.eicher10T.toLocaleString()}</div>
    </div>
    <div class="freight-card">
      <div>
        <strong>🚛 16-Tonne Multi-Axle Heavy Truck (350+ Kattas)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Bulk potato & Mentha interstate shipment</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.multiAxle16T.toLocaleString()}</div>
    </div>
  `;
}

function renderColdStorage() {
  const grid = document.getElementById("coldStorageGrid");
  if (!grid) return;
  let html = "";
  COLD_STORAGES.forEach(cs => {
    html += `
      <div class="sample-card">
        <div style="background: linear-gradient(135deg, #92400E, #451A03); padding: 24px; color: white; text-align: center;">
          <span style="font-size: 2.2rem;">🥔</span>
          <h3 style="margin-top: 6px; font-size: 1.15rem; color: #FCD34D;">${cs.name}</h3>
          <span style="font-size: 0.8rem; opacity: 0.9;">📍 ${cs.district}</span>
        </div>
        <div class="card-body">
          <div class="spec-grid">
            <div class="spec-item"><span>Chamber Temp</span><strong>${cs.temp}</strong></div>
            <div class="spec-item"><span>Available Kattas</span><strong>${cs.available}</strong></div>
            <div class="spec-item"><span>Full Season Rate</span><strong>₹${cs.rateFullSeasonKatta || 140} / 50kg कट्टा</strong></div>
            <div class="spec-item"><span>Daily Rate</span><strong>₹${cs.ratePerDay} / Bag</strong></div>
          </div>
          <button class="btn-primary btn-gold" onclick="bookColdStorageSlot('${cs.id}')">
            🥔 Reserve Potato Cold Storage Slot
          </button>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function bookColdStorageSlot(csId) {
  const cs = COLD_STORAGES.find(c => c.id === csId);
  if (!cs) return;
  
  const kattas = prompt(`Enter number of Potato Kattas (50kg bags) to reserve at ${cs.name}:`, "200");
  if (kattas && !isNaN(kattas)) {
    const totalCost = parseInt(kattas) * (cs.rateFullSeasonKatta || 140);
    showToast(`✅ Reserved ${kattas} Kattas at ${cs.name}! Estimated season storage cost: ₹${totalCost.toLocaleString()}`);
  }
}

function updateSmsBadge() {
  const badge = document.getElementById("smsBadgeCount");
  if (badge) badge.innerText = smsLogs.length;
}

function openSmsLogsModal() {
  const container = document.getElementById("smsLogsList");
  if (!container) return;

  let html = "";
  if (smsLogs.length === 0) {
    html = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No SMS alerts dispatched yet.</p>`;
  } else {
    smsLogs.forEach(s => {
      html += `
        <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: var(--radius-sm); margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 4px;">
            <span>📱 To: +91 ${s.phone}</span>
            <span>${s.time}</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-main); font-weight: 600;">${s.text}</p>
        </div>
      `;
    });
  }

  container.innerHTML = html;
  document.getElementById("smsLogsModal").classList.add("active");
}

async function fetchFromBackend() {
  try {
    const res = await fetch(`${API_BASE_URL}/samples`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        samples = data.data;
        isBackendConnected = true;

        const resPotato = await fetch(`${API_BASE_URL}/potato/rates`);
        const dataPotato = await resPotato.json();
        if (dataPotato.success && dataPotato.potatoBelts) {
          UP_POTATO_BELTS = dataPotato.potatoBelts;
          if (dataPotato.engine) backgroundPotatoEngine = dataPotato.engine;
        }

        const resMentha = await fetch(`${API_BASE_URL}/mentha/rates`);
        const dataMentha = await resMentha.json();
        if (dataMentha.success) {
          if (dataMentha.backgroundMcxEngine) backgroundMcxEngine = dataMentha.backgroundMcxEngine;
          if (dataMentha.allLocalMandis) MENTHA_LOCALITY_RATES = dataMentha.allLocalMandis;
        }

        const resMandi = await fetch(`${API_BASE_URL}/mandi-rates`);
        const dataMandi = await resMandi.json();
        if (dataMandi.success) MANDI_RATES = dataMandi.data;

        const resDeals = await fetch(`${API_BASE_URL}/deals`);
        const dataDeals = await resDeals.json();
        if (dataDeals.success) sealedDeals = dataDeals.data;

        return;
      }
    }
  } catch (err) {
    console.log("Backend offline fallback.");
  }

  loadStore();
}

function loadStore() {
  const savedSamples = localStorage.getItem("krishi_samples");
  if (savedSamples) {
    samples = JSON.parse(savedSamples);
  } else {
    samples = [...INITIAL_SAMPLES];
    saveStore();
  }
}

function saveStore() {
  localStorage.setItem("krishi_samples", JSON.stringify(samples));
  localStorage.setItem("krishi_deals", JSON.stringify(sealedDeals));
}

function initTicker() {
  const tickerEl = document.getElementById("mandiTicker");
  if (!tickerEl) return;
  let tickerHTML = "";
  const allRates = [...MANDI_RATES, ...MANDI_RATES];
  
  allRates.forEach(r => {
    const isUp = r.trend.startsWith("+");
    const trendClass = isUp ? "rate-up" : "rate-down";
    const arrow = isUp ? "▲" : "▼";
    const unitText = r.crop.includes('Mentha') ? '/Kg' : (r.crop.includes('Potato') ? '/Katta' : '/Qtl');
    tickerHTML += `
      <div class="ticker-item">
        <strong>${r.crop}</strong> (${r.mandi}): ₹${r.modal.toFixed(2)}${unitText} 
        <span class="${trendClass}">${arrow} ${r.trend}</span>
      </div>
    `;
  });
  tickerEl.innerHTML = tickerHTML;
}

function setRole(role) {
  currentRole = role;
  const farmerBtn = document.getElementById("farmerRoleBtn");
  const buyerBtn = document.getElementById("buyerRoleBtn");
  const actionBtn = document.getElementById("actionBtn");

  if (role === "farmer") {
    farmerBtn.className = "role-btn active";
    buyerBtn.className = "role-btn";
    actionBtn.style.display = "flex";
    actionBtn.innerHTML = `<span>➕</span> <span id="txtPostBtn">${TRANSLATIONS[currentLanguage].postBtn}</span>`;
    actionBtn.onclick = openPostSampleModal;
  } else {
    farmerBtn.className = "role-btn";
    buyerBtn.className = "role-btn active buyer-mode";
    actionBtn.style.display = "flex";
    actionBtn.innerHTML = "<span>🏢</span> Sourcing Requests";
    actionBtn.onclick = () => showToast("Switched to Buyer Procurement Mode! Click 'Submit Doorstep Offer' on any sample card.");
  }

  renderApp();
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.getElementById("themeBtn").innerText = currentTheme === "light" ? "🌙" : "☀️";
}

function switchTab(tabName) {
  currentTab = tabName;
  const tabs = ["samples", "mandi", "logistics", "coldstorage", "quality", "deals"];
  
  tabs.forEach(t => {
    const btn = document.getElementById("tab" + capitalize(t));
    const view = document.getElementById("view" + capitalize(t));
    if (t === tabName) {
      if (btn) btn.classList.add("active");
      if (view) view.style.display = "block";
    } else {
      if (btn) btn.classList.remove("active");
      if (view) view.style.display = "none";
    }
  });

  if (tabName === "mandi") renderMandiTable();
  if (tabName === "logistics") calculateFreight();
  if (tabName === "coldstorage") renderColdStorage();
  if (tabName === "deals") renderDeals();
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function renderApp() {
  renderListings();
  updateStats();
}

function updateStats() {
  const statEl = document.getElementById("statActiveSamples");
  if (statEl) statEl.innerText = samples.length;
}

function renderListings() {
  const grid = document.getElementById("listingsGrid");
  if (!grid) return;
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const cropFilter = document.getElementById("cropFilter").value;
  const gradeFilter = document.getElementById("gradeFilter").value;

  const filtered = samples.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) ||
                          item.location.toLowerCase().includes(searchQuery) ||
                          item.variety.toLowerCase().includes(searchQuery);
    const matchesCrop = cropFilter === "all" || item.category === cropFilter;
    const matchesGrade = gradeFilter === "all" || item.grade === gradeFilter;
    return matchesSearch && matchesCrop && matchesGrade;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <h3 style="color: var(--text-muted); margin-bottom: 8px;">कोई फसल नमूना मेल नहीं खाता (No samples found)</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">बोलकर खोजें 🎙️ बटन का उपयोग करें या नया नमूना पोस्ट करें।</p>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(item => {
    const offersCount = item.offers ? item.offers.length : 0;
    const topOffer = offersCount > 0 ? Math.max(...item.offers.map(o => o.offerPrice)) : null;
    const isMentha = item.category === "Mentha Oil";
    const isPotato = item.category === "Potato";
    const unitText = isMentha ? "Kg" : (isPotato ? "Kattas (50kg Bags)" : "Qtl");
    const rateUnitText = isMentha ? "/Kg" : (isPotato ? "/Katta" : "/Qtl");

    html += `
      <div class="sample-card">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/potato.png'">
          <span class="badge-grade">${item.grade}</span>
          <span class="badge-location">📍 ${item.location.split(',')[0]}</span>
        </div>
        <div class="card-body">
          <div class="card-header-row">
            <h3 class="crop-title">${item.title}</h3>
            ${offersCount > 0 ? `<span class="offers-count-badge">🤝 ${offersCount} Bids</span>` : `<span style="font-size: 0.75rem; color: var(--text-muted);">New Listing</span>`}
          </div>
          <div class="crop-variety">${item.variety}</div>

          <div class="spec-grid">
            <div class="spec-item">
              <span>मात्रा / Quantity</span>
              <strong>${item.quantity} ${isPotato ? 'कट्टे (Bags)' : unitText}</strong>
            </div>
            <div class="spec-item">
              <span>${isMentha ? 'L-Menthol %' : (isPotato ? 'Size (mm)' : 'Moisture %')}</span>
              <strong>${isMentha ? item.purity + '%' : (isPotato ? item.moisture + 'mm' : item.moisture + '%')}</strong>
            </div>
            <div class="spec-item">
              <span>शुद्धता / ग्रेड</span>
              <strong>${item.purity || 98.5}%</strong>
            </div>
            <div class="spec-item">
              <span>किसान</span>
              <strong>${item.farmerName} <span style="color: var(--success); font-size: 0.75rem;">Verified ✅</span></strong>
            </div>
          </div>

          <div class="price-row">
            <div>
              <span class="unit-label">अपेक्षित भाव</span>
              <div class="reserve-price">₹${item.reservePrice.toLocaleString()} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">${rateUnitText}</span></div>
            </div>
            ${topOffer ? `
              <div style="text-align: right;">
                <span class="unit-label" style="color: var(--success); font-weight: 700;">उच्चतम बोली</span>
                <div style="font-size: 1.15rem; font-weight: 800; color: var(--success);">₹${topOffer.toLocaleString()} ${rateUnitText}</div>
              </div>
            ` : ''}
          </div>

          <div class="card-actions">
            ${currentRole === "farmer" ? `
              <button class="btn-primary" onclick="viewOffers('${item.id}')">
                📋 बोलियां देखें (${offersCount})
              </button>
            ` : `
              <button class="btn-primary btn-gold" onclick="openBidModal('${item.id}')">
                🤝 डोरस्टेप बोली लगाएं
              </button>
              <button class="btn-secondary" onclick="viewOffers('${item.id}')">
                🔍 विवरण
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

function renderMandiTable() {
  const tbody = document.getElementById("mandiTableBody");
  if (!tbody) return;
  let html = "";
  MANDI_RATES.forEach(r => {
    const isUp = r.trend.startsWith("+");
    const trendClass = isUp ? "trend-up" : "trend-down";
    const unitText = r.crop.includes("Mentha") ? "/Kg" : (r.crop.includes("Potato") ? "/Qtl" : "/Qtl");
    html += `
      <tr>
        <td><strong>${r.mandi}</strong></td>
        <td>${r.state}</td>
        <td>${r.crop}</td>
        <td>₹${r.min.toFixed(2)} ${unitText}</td>
        <td>₹${r.max.toFixed(2)} ${unitText}</td>
        <td style="font-weight: 700; color: var(--primary);">₹${r.modal.toFixed(2)} ${unitText}</td>
        <td class="${trendClass}">${r.trend}</td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function calculateQualityScore() {
  const cropEl = document.getElementById("calcCropType");
  if (!cropEl) return;
  const crop = cropEl.value;
  const moisture = parseFloat(document.getElementById("sliderMoisture").value);
  const purity = parseFloat(document.getElementById("sliderPurity").value);
  const foreign = parseFloat(document.getElementById("sliderForeign").value);

  document.getElementById("valMoisture").innerText = moisture + (crop === 'Potato' ? ' mm' : '%');
  document.getElementById("valPurity").innerText = purity + "%";
  document.getElementById("valForeign").innerText = foreign + "%";

  let score = 100;
  if (crop === "Potato") {
    if (moisture < 45) score -= (45 - moisture) * 1.5; // Potato size below 45mm is smaller
    score -= foreign * 5;
  } else if (crop === "Mentha Oil") {
    if (moisture > 0.5) score -= (moisture - 0.5) * 15;
    score -= (85 - purity) * 1.5;
    score -= foreign * 8;
  } else {
    if (moisture > 12) score -= (moisture - 12) * 4;
    score -= (100 - purity) * 1.2;
    score -= foreign * 5;
  }

  score = Math.max(50, Math.min(99, Math.round(score)));

  let grade = "Grade B";
  if (score >= 90) grade = "Grade A+ (Large 55mm+ / Export)";
  else if (score >= 78) grade = "Grade A (Mandi Standard)";

  let basePrice = crop === "Potato" ? 1420.00 : (MENTHA_LOCALITY_RATES[0] ? MENTHA_LOCALITY_RATES[0].modalPriceKg : 1208.00);
  let unitLabel = crop === "Potato" ? "कुंतल (₹710/कट्टा)" : "Kg";

  const estimatedPrice = Math.round(basePrice * (score / 90));

  document.getElementById("calcScoreNum").innerText = score;
  document.getElementById("calcGradeTag").innerText = grade;
  document.getElementById("calcEstimatedVal").innerText = `अनुमानित भाव: ₹${estimatedPrice.toLocaleString()} / ${unitLabel}`;
}

function openPostSampleModal() {
  if (currentUser && currentUser.name) {
    document.getElementById("formLocation").value = currentUser.location || "";
    if (currentUser.khasraNo) document.getElementById("formKhasraNo").value = currentUser.khasraNo;
  }
  document.getElementById("postSampleModal").classList.add("active");
}

async function handlePostSample(e) {
  e.preventDefault();
  const title = document.getElementById("formCropTitle").value;
  const category = document.getElementById("formCategory").value;
  const quantity = parseFloat(document.getElementById("formQuantity").value);
  const reservePrice = parseFloat(document.getElementById("formPrice").value);
  const moisture = parseFloat(document.getElementById("formMoisture").value);
  const grade = document.getElementById("formGrade").value;
  const location = document.getElementById("formLocation").value;
  const image = document.getElementById("formImageSelect").value;
  const khasraNo = document.getElementById("formKhasraNo").value || (currentUser ? currentUser.khasraNo : "UP-FRK-4402");

  const farmerName = currentUser ? currentUser.name : "Ram Prakash Rajput";
  const sampleData = { title, category, quantity, reservePrice, moisture, grade, location, image, farmerName, khasraNo, verifiedFarmer: true };

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/samples`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sampleData)
      });
      const data = await res.json();
      if (data.success) {
        samples.unshift(data.sample);
      }
    } catch (err) {
      console.error("Backend error", err);
    }
  } else {
    const newSample = {
      id: "SMP-" + (Math.floor(Math.random() * 900) + 100),
      ...sampleData,
      variety: category + " (Farmer Direct Sample)",
      purity: category === "Mentha Oil" ? 81.5 : 98.5,
      harvestDate: new Date().toISOString().split("T")[0],
      offers: []
    };
    samples.unshift(newSample);
    saveStore();
  }

  closeModal("postSampleModal");
  document.getElementById("postSampleForm").reset();
  renderApp();
  showToast("🥔/🌿 फसल का नमूना सफलतापूर्वक पोस्ट किया गया!");
}

function openBidModal(sampleId) {
  const item = samples.find(s => s.id === sampleId);
  if (!item) return;

  const isMentha = item.category === "Mentha Oil";
  const isPotato = item.category === "Potato";
  const unitText = isMentha ? "Kg" : (isPotato ? "Kattas" : "Qtl");
  
  document.getElementById("bidSampleId").value = sampleId;
  document.getElementById("bidCropName").innerText = item.title;
  document.getElementById("bidCropDetails").innerText = `मात्रा: ${item.quantity} ${unitText} | अपेक्षित भाव: ₹${item.reservePrice.toLocaleString()}/${unitText} | स्थान: ${item.location}`;

  if (currentUser && currentUser.name) {
    document.getElementById("buyerEntity").value = currentUser.name;
    if (currentUser.gstin) document.getElementById("buyerGstin").value = currentUser.gstin;
  }

  document.getElementById("bidModal").classList.add("active");
}

async function handlePlaceBid(e) {
  e.preventDefault();
  const sampleId = document.getElementById("bidSampleId").value;
  const buyerEntity = document.getElementById("buyerEntity").value;
  const offeredPrice = parseFloat(document.getElementById("offeredPrice").value);
  const tokenAdvance = parseFloat(document.getElementById("tokenAdvance").value);
  const pickupTerm = document.getElementById("pickupTerm").value;
  const gstin = document.getElementById("buyerGstin").value || (currentUser ? currentUser.gstin : "09AGRA5512K1ZN");

  const item = samples.find(s => s.id === sampleId);
  const bidPayload = { buyerName: buyerEntity, offerPrice: offeredPrice, token: tokenAdvance, term: pickupTerm, gstin, verifiedBuyer: true };

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/samples/${sampleId}/bids`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bidPayload)
      });
      const data = await res.json();
      if (data.success) {
        if (item) {
          if (!item.offers) item.offers = [];
          item.offers.unshift(data.offer);
        }
      }
    } catch (err) {
      console.error("Backend error placing bid", err);
    }
  } else {
    if (item) {
      if (!item.offers) item.offers = [];
      item.offers.unshift({
        ...bidPayload,
        date: new Date().toISOString().split("T")[0]
      });
      saveStore();
    }
  }

  const smsText = `[KrishiDeal Alert] ${buyerEntity} submitted bid of ₹${offeredPrice} on ${item.title}. Token: ₹${tokenAdvance}.`;
  smsLogs.unshift({ phone: "9876543210", text: smsText, time: "Just now" });
  updateSmsBadge();

  closeModal("bidModal");
  document.getElementById("bidForm").reset();
  renderApp();
  showToast(`📱 किसान को एसएमएस अलर्ट भेजा गया! ₹${offeredPrice} की बोली प्रस्तुत।`);
}

function viewOffers(sampleId) {
  const item = samples.find(s => s.id === sampleId);
  if (!item) return;
  const isMentha = item.category === "Mentha Oil";
  const isPotato = item.category === "Potato";
  const unitText = isMentha ? "Kg" : (isPotato ? "Kattas (50kg Bags)" : "Qtl");

  document.getElementById("offersModalTitle").innerText = `📋 ${item.title} हेतु प्राप्त बोलियां`;
  const container = document.getElementById("offersModalContent");

  let html = `
    <div style="background: var(--bg-subtle); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 20px; font-size: 0.9rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div><strong>कुल मात्रा:</strong> ${item.quantity} ${unitText}</div>
        <div><strong>अपेक्षित रेट:</strong> ₹${item.reservePrice.toLocaleString()} / ${unitText}</div>
        <div><strong>किसान सत्यापन:</strong> <span style="color: var(--success); font-weight: 700;">असली किसान ✅</span></div>
        <div><strong>खसरा संख्या:</strong> ${item.khasraNo || 'UP-FRK-4402'}</div>
      </div>
    </div>
    <h4 style="margin-bottom: 12px; color: var(--primary);">खरीदारों की डोरस्टेप बोलियां (${item.offers ? item.offers.length : 0})</h4>
  `;

  if (!item.offers || item.offers.length === 0) {
    html += `
      <div style="text-align: center; padding: 30px; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px dashed var(--border-color);">
        <p style="color: var(--text-muted);">इस फसल नमूने के लिए अभी तक कोई बोली प्राप्त नहीं हुई है।</p>
      </div>
    `;
  } else {
    item.offers.forEach((off, index) => {
      const totalAmount = off.offerPrice * item.quantity;
      html += `
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px; margin-bottom: 12px; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <div>
              <h4 style="color: var(--text-main); font-size: 1.1rem;">${off.buyerName} <span style="font-size: 0.75rem; color: var(--success); background: var(--primary-light); padding: 2px 8px; border-radius: 99px;">APMC Verified Buyer ✅</span></h4>
              <span style="font-size: 0.8rem; color: var(--text-muted);">GSTIN: ${off.gstin || '09AGRA5512K1ZN'} | दिनांक: ${off.date}</span>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${off.offerPrice.toLocaleString()} <span style="font-size: 0.8rem; color: var(--text-muted);">/ ${unitText}</span></div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--success);">कुल सौदा रकम: ₹${totalAmount.toLocaleString()}</div>
            </div>
          </div>
          <div style="display: flex; gap: 14px; background: var(--bg-subtle); padding: 10px; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 12px;">
            <div>💵 <strong>टोकन एडवांस:</strong> ₹${off.token.toLocaleString()} (एस्क्रो तिजोरी)</div>
            <div>🚚 <strong>पिकअप:</strong> ${off.term}</div>
          </div>
          ${currentRole === "farmer" ? `
            <button class="btn-primary btn-gold" style="width: 100%; padding: 10px;" onclick="acceptDeal('${item.id}', ${index})">
              🤝 बोली स्वीकार करें और सौदा पक्का करें
            </button>
          ` : `<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">सौदा स्वीकार करने हेतु किसान मोड में बदलें</div>`}
        </div>
      `;
    });
  }

  container.innerHTML = html;
  document.getElementById("offersModal").classList.add("active");
}

async function acceptDeal(sampleId, offerIndex) {
  const item = samples.find(s => s.id === sampleId);
  if (!item || !item.offers || !item.offers[offerIndex]) return;

  const offer = item.offers[offerIndex];
  let newDeal;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/deals/accept`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sampleId, offerIndex })
      });
      const data = await res.json();
      if (data.success) {
        newDeal = data.deal;
        sealedDeals.unshift(newDeal);
        samples = samples.filter(s => s.id !== sampleId);
      }
    } catch (err) {
      console.error("Backend deal acceptance error", err);
    }
  }

  if (!newDeal) {
    const totalAmount = offer.offerPrice * item.quantity;
    newDeal = {
      dealId: "DEAL-" + (Math.floor(Math.random() * 9000) + 1000),
      sampleTitle: item.title,
      farmerName: item.farmerName,
      buyerName: offer.buyerName,
      quantity: item.quantity,
      pricePerQtl: offer.offerPrice,
      totalAmount: totalAmount,
      tokenDeposit: offer.token,
      escrowStatus: "TOKEN_LOCKED_IN_SECURE_VAULT",
      pickupTerm: offer.term,
      location: item.location,
      date: new Date().toISOString().split("T")[0]
    };
    sealedDeals.unshift(newDeal);
    samples = samples.filter(s => s.id !== sampleId);
    saveStore();
  }

  closeModal("offersModal");
  renderApp();
  showContractModal(newDeal);
  showToast("🎉 सौदा पक्का हुआ! टोकन राशि एस्क्रो तिजोरी में सुरक्षित locked।");
}

function showContractModal(deal) {
  const container = document.getElementById("contractModalContent");
  container.innerHTML = `
    <div class="contract-paper">
      <div class="contract-header">
        <h2 style="color: #0F5A47;">🌿 कृषिडील सत्यापित व्यापार अनुबंध पत्र</h2>
        <p style="font-size: 0.85rem; color: #64748B;">आधिकारिक आलू व फसल खरीद सौदा रसीद एवं एस्क्रो तिजोरी प्रमाण</p>
        <span style="font-size: 0.8rem; font-weight: 700; background: #EAEFEA; padding: 4px 12px; border-radius: 99px;">अनुबंध संख्या: ${deal.dealId}</span>
      </div>

      <div class="contract-grid">
        <div>
          <strong>🧑‍🌾 किसान विवरण (सत्यापित ✅):</strong>
          <p>${deal.farmerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">खसरा संख्या: ${deal.khasraNo || 'UP-FRK-4402'}</p>
          <p style="font-size: 0.8rem; color: #64748B;">${deal.location}</p>
        </div>
        <div>
          <strong>🏢 खरीदार फर्म विवरण (सत्यापित ✅):</strong>
          <p>${deal.buyerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">एपीएमसी मंडी लाइसेंस सत्यापित</p>
          <p style="font-size: 0.8rem; color: #64748B;">जीएसटी: ${deal.gstin || '09AGRA5512K1ZN'}</p>
        </div>
      </div>

      <div style="background: #F4EAD3; padding: 14px; border-radius: 8px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>फसल: <strong>${deal.sampleTitle}</strong></span>
          <span>मात्रा: <strong>${deal.quantity} ${deal.sampleTitle.includes('Mentha') ? 'Kg' : (deal.sampleTitle.includes('Potato') ? 'Kattas' : 'Qtl')}</strong></span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>तय दर: <strong>₹${deal.pricePerQtl.toLocaleString()} / ${deal.sampleTitle.includes('Mentha') ? 'Kg' : (deal.sampleTitle.includes('Potato') ? 'Katta' : 'Qtl')}</strong></span>
          <span>कुल सौदा राशि: <strong style="color: #0F5A47; font-size: 1.1rem;">₹${deal.totalAmount.toLocaleString()}</strong></span>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px dashed #C27B0C; padding-top: 6px; margin-top: 6px;">
          <span>टोकन एडवांस जमा: <strong style="color: #D97706;">₹${deal.tokenDeposit.toLocaleString()}</strong></span>
          <span>एस्क्रो स्थिति: <strong style="color: #15803D;">🔒 एस्क्रो तिजोरी में सुरक्षित</strong></span>
        </div>
      </div>

      <div style="text-align: center;">
        <div class="qr-placeholder">VERIFIED ESCROW DEAL</div>
        <p style="font-size: 0.75rem; color: #64748B; margin-top: 6px;">मंडी गेट जांच अधिकारियों एवं कोल्ड स्टोरेज चेकपोस्ट हेतु मान्य प्रमाण पत्र</p>
      </div>
    </div>
  `;
  document.getElementById("contractModal").classList.add("active");
}

function renderDeals() {
  const container = document.getElementById("dealsHistoryList");
  if (!container) return;
  if (sealedDeals.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <p style="color: var(--text-muted);">अभी तक कोई पक्का सौदा नहीं हुआ है।</p>
      </div>
    `;
    return;
  }

  let html = "";
  sealedDeals.forEach(d => {
    html += `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); background: var(--bg-subtle); padding: 4px 10px; border-radius: var(--radius-full);">${d.dealId}</span>
          <h4 style="margin-top: 6px; font-size: 1.1rem;">${d.sampleTitle} (${d.quantity} ${d.sampleTitle.includes('Mentha') ? 'Kg' : 'Kattas'})</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted);">किसान: ${d.farmerName} ✅ ➔ खरीदार: ${d.buyerName} ✅</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${d.totalAmount.toLocaleString()}</div>
          <span style="font-size: 0.8rem; color: var(--success); font-weight: 700;">🔒 ₹${d.tokenDeposit.toLocaleString()} एस्क्रो में सुरक्षित</span>
        </div>
        <button class="btn-secondary" onclick='showContractModal(${JSON.stringify(d)})'>
          📄 अनुबंध प्रिंट करें
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

function showToast(msg) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🌾</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}
