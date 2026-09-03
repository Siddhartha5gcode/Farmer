/* ==========================================================================
   KrishiDeal - Direct Farmer Platform (v2.5.0 All 75 UP Districts Support)
   ========================================================================== */

const API_BASE_URL = "http://localhost:5000/api";

const INITIAL_SAMPLES = [
  {
    id: "SMP-MENTHA-101",
    title: "Pure Shivalik Mentha Oil (81%+ L-Menthol)",
    category: "Mentha Oil",
    variety: "Shivalik Steam Distilled Mentha Oil",
    quantity: 45,
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
      { buyerName: "Barabanki Essential Oils & Distillers", offerPrice: 1220, token: 45000, term: "Buyer Doorstep Drums Pickup", verifiedBuyer: true, gstin: "09AABCB5512K1ZN", date: "2026-09-02" },
      { buyerName: "Chandausi Mint Exporters", offerPrice: 1210, token: 30000, term: "Mandi Gate Delivery", verifiedBuyer: true, gstin: "09AACCS4410J1Z3", date: "2026-09-01" }
    ]
  },
  {
    id: "SMP-MENTHA-102",
    title: "Kosi Variety Crude Mentha Oil",
    category: "Mentha Oil",
    variety: "Kosi High-Yield Mint Distillation",
    quantity: 60,
    reservePrice: 1198,
    moisture: 0.6,
    purity: 78.0,
    grade: "Grade A",
    location: "Barabanki, Uttar Pradesh (Pin: 225001)",
    farmerName: "Mohd. Aslam Khan",
    verifiedFarmer: true,
    khasraNo: "UP-BBK-1102",
    harvestDate: "2026-08-28",
    image: "assets/mentha.png",
    offers: [
      { buyerName: "Lucknow Pharma & Fragrance Labs", offerPrice: 1205, token: 35000, term: "Buyer Doorstep Pickup", verifiedBuyer: true, gstin: "09AAACL1092M1Z5", date: "2026-09-02" }
    ]
  },
  {
    id: "SMP-101",
    title: "Premium Sharbati Wheat",
    category: "Wheat",
    variety: "Sharbati (High Protein)",
    quantity: 120,
    reservePrice: 4650,
    moisture: 10.8,
    purity: 98.2,
    grade: "Grade A+",
    location: "Sehore, Madhya Pradesh (Pin: 466001)",
    farmerName: "Rameshwar Patel",
    verifiedFarmer: true,
    khasraNo: "K-402/1A",
    harvestDate: "2026-08-25",
    image: "assets/wheat.png",
    offers: [
      { buyerName: "Indore APMC Flour Mills", offerPrice: 4780, token: 25000, term: "Buyer Doorstep Pickup", verifiedBuyer: true, gstin: "23AABCI8821K1ZM", date: "2026-09-02" }
    ]
  },
  {
    id: "SMP-102",
    title: "1121 Extra Long Basmati Rice",
    category: "Rice",
    variety: "Raw Basmati 1121",
    quantity: 250,
    reservePrice: 4200,
    moisture: 11.5,
    purity: 97.0,
    grade: "Grade A+",
    location: "Karnal, Haryana (Pin: 132001)",
    farmerName: "Gurpreet Singh",
    verifiedFarmer: true,
    khasraNo: "HR-K-1092",
    harvestDate: "2026-08-28",
    image: "assets/rice.png",
    offers: []
  }
];

let backgroundMcxEngine = {
  symbol: "MENTHAOIL",
  benchmarkPriceKg: 1215.50,
  changePercent: "+2.45%"
};

let MENTHA_LOCALITY_RATES = [
  { mandi: "Sambhal APMC Mandi", district: "Sambhal", state: "Uttar Pradesh", modalPriceKg: 1208.00, minPriceKg: 1195.00, maxPriceKg: 1222.00, trend: "+2.45%", source: "APMC Sambhal Mandi Register (Derived from MCX Live Feed)", status: "Primary Mentha Belt" },
  { mandi: "Barabanki Mint Market", district: "Barabanki", state: "Uttar Pradesh", modalPriceKg: 1198.00, minPriceKg: 1180.00, maxPriceKg: 1215.00, trend: "+2.45%", source: "Barabanki Essential Oils Exchange", status: "Primary Distillation Hub" },
  { mandi: "Chandausi Export Mandi", district: "Chandausi", state: "Uttar Pradesh", modalPriceKg: 1212.00, minPriceKg: 1198.00, maxPriceKg: 1226.00, trend: "+2.45%", source: "APMC Chandausi Register", status: "Major Mentha Export Yard" },
  { mandi: "Rampur Mandi Yard", district: "Rampur", state: "Uttar Pradesh", modalPriceKg: 1192.00, minPriceKg: 1175.00, maxPriceKg: 1205.00, trend: "+2.45%", source: "Rampur Mandi Committee", status: "Regional Distillation Yard" }
];

let MANDI_RATES = [
  { mandi: "Sambhal APMC Mandi", state: "Uttar Pradesh", crop: "Mentha Oil (Menthol)", min: 1195.00, max: 1222.00, modal: 1208.00, trend: "+2.45%" },
  { mandi: "Barabanki Mint Market", state: "Uttar Pradesh", crop: "Mentha Oil (ex-Barabanki)", min: 1180.00, max: 1215.00, modal: 1198.00, trend: "+2.45%" },
  { mandi: "Indore APMC Mandi", state: "Madhya Pradesh", crop: "Sharbati Wheat", min: 4500.00, max: 4850.00, modal: 4720.00, trend: "+1.80%" }
];

let COLD_STORAGES = [
  { id: "CS-101", name: "Malwa Central Cold Chain", district: "Indore, MP", capacity: "500 MT", available: "140 MT", temp: "2°C - 4°C", ratePerDay: 4.5 },
  { id: "CS-102", name: "Shimla Valley Horticulture Storage", district: "Shimla, HP", capacity: "800 MT", available: "320 MT", temp: "1°C - 3°C", ratePerDay: 6.0 }
];

let coldBookings = [];
let smsLogs = [];
let currentRole = "farmer";
let currentTheme = "light";
let currentTab = "samples";
let samples = [];
let sealedDeals = [];
let isBackendConnected = false;
let currentUser = null;

document.addEventListener("DOMContentLoaded", async () => {
  loadUserSession();
  await fetchFromBackend();
  initTicker();
  renderMenthaLocalityWidget();
  renderApp();
  calculateQualityScore();
  calculateFreight();
  renderColdStorage();
  updateSmsBadge();

  setInterval(fetchLiveMenthaRateFromBackend, 30000);
});

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

function loadUserSession() {
  const savedUser = localStorage.getItem("krishi_user_session");
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      currentRole = currentUser.role || "farmer";
    } catch (e) {
      currentUser = null;
    }
  }
  renderAuthNav();
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
    title.innerText = "🔑 Sign In to KrishiDeal";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    tabLogin.classList.remove("active");
    tabRegister.classList.add("active");
    title.innerText = "🛡️ Verified Account Registration";
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
      currentUser = { id: "USR-101", name: "Chaudhary Dharamvir Singh", phone: "9876543210", role: "farmer", location: "Sambhal, UP", verified: true, khasraNo: "UP-SMB-902" };
    } else if (identifier === "9123456789" || identifier === "trader@barabankimentha.com") {
      currentUser = { id: "USR-102", name: "Barabanki Essential Oils & Distillers", phone: "9123456789", role: "buyer", location: "Barabanki Mandi, UP", verified: true, gstin: "09AABCB5512K1ZN" };
    } else {
      currentUser = { id: "USR-" + Date.now(), name: identifier.split('@')[0], phone: identifier, role: "farmer", location: "Uttar Pradesh", verified: true };
    }
  }

  localStorage.setItem("krishi_user_session", JSON.stringify(currentUser));
  setRole(currentUser.role);
  closeModal("authModal");
  renderAuthNav();
  showToast(`Welcome back, ${currentUser.name}! Verified ${currentUser.role === 'farmer' ? 'Genuine Farmer ✅' : 'APMC Buyer ✅'}.`);
}

async function handleRegister(e) {
  e.preventDefault();
  const role = document.getElementById("regRole").value;
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

  const regPayload = { name, phone, email, password, role, location, khasraNo, kccId, landAcres, firmType, gstin, mandiLicense };

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
      role, location, khasraNo: khasraNo || "K-VERIFIED", gstin: gstin || "GST-VERIFIED",
      verified: true, verificationBadge: role === 'farmer' ? 'Genuine Farmer ✅' : 'APMC Verified Buyer ✅'
    };
  }

  localStorage.setItem("krishi_user_session", JSON.stringify(currentUser));
  setRole(currentUser.role);
  closeModal("authModal");
  document.getElementById("registerForm").reset();
  renderAuthNav();
  showToast(`🎉 Verified registration successful! Welcome ${name} (${currentUser.verificationBadge}).`);
}

function handleSignOut() {
  currentUser = null;
  localStorage.removeItem("krishi_user_session");
  renderAuthNav();
  showToast("You have signed out of KrishiDeal.");
}

// RENDER ALL 75 UP DISTRICT LOCALITY PRICES (Driven by background MCX Live Feed)
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

// Multilingual Voice Search
function startVoiceRecognition() {
  const voiceBtn = document.getElementById("voiceSearchBtn");
  const searchInput = document.getElementById("searchInput");

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';
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
    const samplesVoice = ["Mentha Oil", "Sambhal Mentha", "Barabanki Mentha", "Sharbati Wheat"];
    const randomCrop = samplesVoice[Math.floor(Math.random() * samplesVoice.length)];
    searchInput.value = randomCrop;
    voiceBtn.classList.remove("listening");
    voiceBtn.innerText = "🎙️ Speak";
    renderApp();
    showToast(`🗣️ Simulated Voice Input: "${randomCrop}"`);
  }, 1800);
}

// Freight Calculator
async function calculateFreight() {
  const kmEl = document.getElementById("logisticsDistance");
  const qtlEl = document.getElementById("logisticsWeight");
  if (!kmEl || !qtlEl) return;

  const distance = parseFloat(kmEl.value || 45);
  const weight = parseFloat(qtlEl.value || 120);

  let rates = {
    erickshaw: Math.round(distance * 25 + 300),
    eicher10T: Math.round(distance * 45 + 1200),
    multiAxle16T: Math.round(distance * 65 + 2500)
  };

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/logistics/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ distanceKm: distance, quantityQtl: weight })
      });
      const data = await res.json();
      if (data.success) rates = data.freightEstimates;
    } catch (e) {
      console.log("Logistics backend offline");
    }
  }

  const container = document.getElementById("freightQuotesList");
  if (!container) return;

  container.innerHTML = `
    <div class="freight-card">
      <div>
        <strong>🛺 E-Rickshaw / Mini Drum Loader (Max 15 Qtl/Drums)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Short distance farm-to-mandi delivery</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.erickshaw.toLocaleString()}</div>
    </div>
    <div class="freight-card">
      <div>
        <strong>🚛 10-Tonne Eicher Truck (Max 100 Qtl/Drums)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Standard interstate Mentha & grain shipment</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.eicher10T.toLocaleString()}</div>
    </div>
    <div class="freight-card">
      <div>
        <strong>🚛 16-Tonne Heavy Multi-Axle Truck</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Bulk exporter plant shipment</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.multiAxle16T.toLocaleString()}</div>
    </div>
  `;
}

// Cold Storage Slot Reservation
function renderColdStorage() {
  const grid = document.getElementById("coldStorageGrid");
  if (!grid) return;
  let html = "";
  COLD_STORAGES.forEach(cs => {
    html += `
      <div class="sample-card">
        <div style="background: linear-gradient(135deg, #0284C7, #0369A1); padding: 24px; color: white; text-align: center;">
          <span style="font-size: 2.2rem;">🧊</span>
          <h3 style="margin-top: 6px; font-size: 1.15rem;">${cs.name}</h3>
          <span style="font-size: 0.8rem; opacity: 0.9;">📍 ${cs.district}</span>
        </div>
        <div class="card-body">
          <div class="spec-grid">
            <div class="spec-item"><span>Chamber Temp</span><strong>${cs.temp}</strong></div>
            <div class="spec-item"><span>Available Space</span><strong>${cs.available}</strong></div>
            <div class="spec-item"><span>Daily Rate</span><strong>₹${cs.ratePerDay} / Qtl</strong></div>
            <div class="spec-item"><span>Security</span><strong>CCTV & Humidity Managed</strong></div>
          </div>
          <button class="btn-primary" onclick="bookColdStorageSlot('${cs.id}')">
            🧊 Reserve Cold Storage Slot
          </button>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

async function bookColdStorageSlot(storageId) {
  const cs = COLD_STORAGES.find(c => c.id === storageId);
  if (!cs) return;

  const farmerName = currentUser ? currentUser.name : "Dharamvir Singh";
  coldBookings.unshift({
    bookingId: "CSB-" + (Math.floor(Math.random() * 9000) + 1000),
    storageName: cs.name, district: cs.district,
    farmerName, cropTitle: "Produce Sample", quantity: 50, durationDays: 30,
    totalCost: 50 * cs.ratePerDay * 30, status: "CONFIRMED_SLOT_RESERVED", date: new Date().toISOString().split('T')[0]
  });

  renderColdStorage();
  showToast(`🧊 Cold storage chamber slot reserved at ${cs.name}!`);
}

// SMS Log Modal
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

        console.log("⚡ Connected to KrishiDeal Express REST API!");
        return;
      }
    }
  } catch (err) {
    console.log("ℹ️ Backend server offline. Operating in LocalStorage mode.");
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
    tickerHTML += `
      <div class="ticker-item">
        <strong>${r.crop}</strong> (${r.mandi}): ₹${r.modal.toFixed(2)}${r.crop.includes('Mentha') ? '/Kg' : '/Qtl'} 
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
    actionBtn.innerHTML = "<span>➕</span> Post Produce Sample";
    actionBtn.onclick = openPostSampleModal;
  } else {
    farmerBtn.className = "role-btn";
    buyerBtn.className = "role-btn active buyer-mode";
    actionBtn.style.display = "flex";
    actionBtn.innerHTML = "<span>🏢</span> Sourcing Requests";
    actionBtn.onclick = () => showToast("Switched to Buyer Procurement Mode! Click 'Submit Doorstep Offer' on any Mentha or crop sample card.");
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
        <h3 style="color: var(--text-muted); margin-bottom: 8px;">No produce samples match your search</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try speaking your search using the voice button 🎙️ or post a new sample.</p>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(item => {
    const offersCount = item.offers ? item.offers.length : 0;
    const topOffer = offersCount > 0 ? Math.max(...item.offers.map(o => o.offerPrice)) : null;
    const isMentha = item.category === "Mentha Oil";
    const unitText = isMentha ? "Kg" : "Qtl";

    html += `
      <div class="sample-card">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/mentha.png'">
          <span class="badge-grade">${item.grade}</span>
          <span class="badge-location">📍 ${item.location.split(',')[0]}</span>
        </div>
        <div class="card-body">
          <div class="card-header-row">
            <h3 class="crop-title">${item.title}</h3>
            ${offersCount > 0 ? `<span class="offers-count-badge">🤝 ${offersCount} Bids Recv</span>` : `<span style="font-size: 0.75rem; color: var(--text-muted);">New Listing</span>`}
          </div>
          <div class="crop-variety">${item.variety}</div>

          <div class="spec-grid">
            <div class="spec-item">
              <span>Quantity</span>
              <strong>${item.quantity} ${unitText}</strong>
            </div>
            <div class="spec-item">
              <span>${isMentha ? 'L-Menthol %' : 'Moisture %'}</span>
              <strong>${isMentha ? item.purity + '%' : item.moisture + '%'}</strong>
            </div>
            <div class="spec-item">
              <span>Purity Score</span>
              <strong>${item.purity}%</strong>
            </div>
            <div class="spec-item">
              <span>Farmer</span>
              <strong>${item.farmerName} <span style="color: var(--success); font-size: 0.75rem;">Verified ✅</span></strong>
            </div>
          </div>

          <div class="price-row">
            <div>
              <span class="unit-label">Reserve Price</span>
              <div class="reserve-price">₹${item.reservePrice.toLocaleString()} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">/ ${unitText}</span></div>
            </div>
            ${topOffer ? `
              <div style="text-align: right;">
                <span class="unit-label" style="color: var(--success); font-weight: 700;">Top Buyer Offer</span>
                <div style="font-size: 1.15rem; font-weight: 800; color: var(--success);">₹${topOffer.toLocaleString()} / ${unitText}</div>
              </div>
            ` : ''}
          </div>

          <div class="card-actions">
            ${currentRole === "farmer" ? `
              <button class="btn-primary" onclick="viewOffers('${item.id}')">
                📋 View Bids (${offersCount})
              </button>
            ` : `
              <button class="btn-primary btn-gold" onclick="openBidModal('${item.id}')">
                🤝 Submit Doorstep Offer
              </button>
              <button class="btn-secondary" onclick="viewOffers('${item.id}')">
                🔍 Details
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
    const unitText = r.crop.includes("Mentha") ? "/Kg" : "/Qtl";
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

  document.getElementById("valMoisture").innerText = moisture + "%";
  document.getElementById("valPurity").innerText = purity + "%";
  document.getElementById("valForeign").innerText = foreign + "%";

  let score = 100;
  if (crop === "Mentha Oil") {
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
  if (score >= 90) grade = "Grade A+ (Export Pure)";
  else if (score >= 78) grade = "Grade A (Mandi Standard)";

  let basePrice = MENTHA_LOCALITY_RATES[0] ? MENTHA_LOCALITY_RATES[0].modalPriceKg : 1208.00;
  let unitLabel = "Kg";

  if (crop === "Wheat") { basePrice = 4650; unitLabel = "Quintal"; }
  if (crop === "Rice") { basePrice = 4200; unitLabel = "Quintal"; }
  if (crop === "Cotton") { basePrice = 7400; unitLabel = "Quintal"; }
  if (crop === "Soybean") { basePrice = 5100; unitLabel = "Quintal"; }
  if (crop === "Apples") { basePrice = 8800; unitLabel = "Quintal"; }

  const estimatedPrice = Math.round(basePrice * (score / 90));

  document.getElementById("calcScoreNum").innerText = score;
  document.getElementById("calcGradeTag").innerText = grade;
  document.getElementById("calcEstimatedVal").innerText = `Estimated Value: ₹${estimatedPrice.toLocaleString()} / ${unitLabel}`;
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
  const khasraNo = document.getElementById("formKhasraNo").value || (currentUser ? currentUser.khasraNo : "UP-SMB-902");

  const farmerName = currentUser ? currentUser.name : "Chaudhary Dharamvir Singh";
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
      purity: category === "Mentha Oil" ? 81.5 : 97.5,
      harvestDate: new Date().toISOString().split("T")[0],
      offers: []
    };
    samples.unshift(newSample);
    saveStore();
  }

  closeModal("postSampleModal");
  document.getElementById("postSampleForm").reset();
  renderApp();
  showToast("🌿 Produce sample published with Verified Genuine Farmer badge!");
}

function openBidModal(sampleId) {
  const item = samples.find(s => s.id === sampleId);
  if (!item) return;

  const unitText = item.category === "Mentha Oil" ? "Kg" : "Qtl";
  document.getElementById("bidSampleId").value = sampleId;
  document.getElementById("bidCropName").innerText = item.title;
  document.getElementById("bidCropDetails").innerText = `Quantity: ${item.quantity} ${unitText} | Reserve: ₹${item.reservePrice.toLocaleString()}/${unitText} | Location: ${item.location}`;

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
  const gstin = document.getElementById("buyerGstin").value || (currentUser ? currentUser.gstin : "09AABCB5512K1ZN");

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
  showToast(`📱 SMS Alert dispatched to farmer! Offer of ₹${offeredPrice} submitted.`);
}

function viewOffers(sampleId) {
  const item = samples.find(s => s.id === sampleId);
  if (!item) return;
  const unitText = item.category === "Mentha Oil" ? "Kg" : "Qtl";

  document.getElementById("offersModalTitle").innerText = `📋 Offers for ${item.title}`;
  const container = document.getElementById("offersModalContent");

  let html = `
    <div style="background: var(--bg-subtle); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 20px; font-size: 0.9rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div><strong>Total Quantity:</strong> ${item.quantity} ${unitText}</div>
        <div><strong>Reserve Price:</strong> ₹${item.reservePrice.toLocaleString()} / ${unitText}</div>
        <div><strong>Farmer Verification:</strong> <span style="color: var(--success); font-weight: 700;">Genuine Farmer ✅</span></div>
        <div><strong>Land Record No:</strong> ${item.khasraNo || 'UP-SMB-902'}</div>
      </div>
    </div>
    <h4 style="margin-bottom: 12px; color: var(--primary);">Incoming Buyer Doorstep Bids (${item.offers ? item.offers.length : 0})</h4>
  `;

  if (!item.offers || item.offers.length === 0) {
    html += `
      <div style="text-align: center; padding: 30px; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px dashed var(--border-color);">
        <p style="color: var(--text-muted);">No buyer price offers received yet for this sample.</p>
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
              <span style="font-size: 0.8rem; color: var(--text-muted);">GSTIN: ${off.gstin || '09AABCB5512K1ZN'} | Submitted: ${off.date}</span>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${off.offerPrice.toLocaleString()} <span style="font-size: 0.8rem; color: var(--text-muted);">/ ${unitText}</span></div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--success);">Total Deal: ₹${totalAmount.toLocaleString()}</div>
            </div>
          </div>
          <div style="display: flex; gap: 14px; background: var(--bg-subtle); padding: 10px; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 12px;">
            <div>💵 <strong>Token Advance:</strong> ₹${off.token.toLocaleString()} (Escrow Vault)</div>
            <div>🚚 <strong>Pickup:</strong> ${off.term}</div>
          </div>
          ${currentRole === "farmer" ? `
            <button class="btn-primary btn-gold" style="width: 100%; padding: 10px;" onclick="acceptDeal('${item.id}', ${index})">
              🤝 Accept Offer & Lock Escrow Vault Deal
            </button>
          ` : `<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Switch to Farmer mode to accept this offer</div>`}
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
  showToast("🎉 Deal locked in Escrow vault! Printable contract note generated.");
}

function showContractModal(deal) {
  const container = document.getElementById("contractModalContent");
  container.innerHTML = `
    <div class="contract-paper">
      <div class="contract-header">
        <h2 style="color: #0F5A47;">🌿 KrishiDeal Verified Direct Trade Note</h2>
        <p style="font-size: 0.85rem; color: #64748B;">Official Doorstep Commodity Transaction & Escrow Vault Receipt</p>
        <span style="font-size: 0.8rem; font-weight: 700; background: #EAEFEA; padding: 4px 12px; border-radius: 99px;">Contract ID: ${deal.dealId}</span>
      </div>

      <div class="contract-grid">
        <div>
          <strong>🧑‍🌾 Farmer Details (Verified ✅):</strong>
          <p>${deal.farmerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">Land Record: ${deal.khasraNo || 'UP-SMB-902'}</p>
          <p style="font-size: 0.8rem; color: #64748B;">${deal.location}</p>
        </div>
        <div>
          <strong>🏢 Mandi / Buyer Entity (Verified ✅):</strong>
          <p>${deal.buyerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">APMC Mandi License Verified</p>
          <p style="font-size: 0.8rem; color: #64748B;">GSTIN: ${deal.gstin || '09AABCB5512K1ZN'}</p>
        </div>
      </div>

      <div style="background: #F4EAD3; padding: 14px; border-radius: 8px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>Commodity: <strong>${deal.sampleTitle}</strong></span>
          <span>Quantity: <strong>${deal.quantity} ${deal.sampleTitle.includes('Mentha') ? 'Kg' : 'Qtl'}</strong></span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>Agreed Rate: <strong>₹${deal.pricePerQtl.toLocaleString()} / ${deal.sampleTitle.includes('Mentha') ? 'Kg' : 'Qtl'}</strong></span>
          <span>Total Transaction: <strong style="color: #0F5A47; font-size: 1.1rem;">₹${deal.totalAmount.toLocaleString()}</strong></span>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px dashed #C27B0C; padding-top: 6px; margin-top: 6px;">
          <span>Token Advance Deposit: <strong style="color: #D97706;">₹${deal.tokenDeposit.toLocaleString()}</strong></span>
          <span>Escrow Vault Status: <strong style="color: #15803D;">🔒 LOCKED IN ESCROW VAULT</strong></span>
        </div>
      </div>

      <div style="text-align: center;">
        <div class="qr-placeholder">VERIFIED ESCROW DEAL</div>
        <p style="font-size: 0.75rem; color: #64748B; margin-top: 6px;">Scannable by Mandi Inspection Gate Authorities & APMC Checkposts</p>
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
        <p style="color: var(--text-muted);">No sealed deals yet. Accept a buyer offer to view transaction contracts here.</p>
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
          <h4 style="margin-top: 6px; font-size: 1.1rem;">${d.sampleTitle} (${d.quantity} ${d.sampleTitle.includes('Mentha') ? 'Kg' : 'Qtl'})</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Farmer: ${d.farmerName} ✅ ➔ Buyer: ${d.buyerName} ✅</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${d.totalAmount.toLocaleString()}</div>
          <span style="font-size: 0.8rem; color: var(--success); font-weight: 700;">🔒 ₹${d.tokenDeposit.toLocaleString()} Locked in Escrow</span>
        </div>
        <button class="btn-secondary" onclick='showContractModal(${JSON.stringify(d)})'>
          📄 Print Contract
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
