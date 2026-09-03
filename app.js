/* ==========================================================================
   KrishiDeal - Direct Farmer Dealing Platform (v2.0.0 Enterprise Suite)
   ========================================================================== */

const API_BASE_URL = "http://localhost:5000/api";

const INITIAL_SAMPLES = [
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
      { buyerName: "Indore APMC Flour Mills", offerPrice: 4780, token: 25000, term: "Buyer Doorstep Pickup", verifiedBuyer: true, gstin: "23AABCI8821K1ZM", date: "2026-09-02" },
      { buyerName: "Bhopal Central Grain Wholesaler", offerPrice: 4720, token: 20000, term: "Mandi Delivery Bonus", verifiedBuyer: true, gstin: "23AABCB7720J1ZN", date: "2026-09-01" }
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
    offers: [
      { buyerName: "Azadpur Export House Delhi", offerPrice: 4350, token: 50000, term: "Buyer Doorstep Pickup", verifiedBuyer: true, gstin: "07AAACB9921L1Z2", date: "2026-09-02" }
    ]
  },
  {
    id: "SMP-103",
    title: "Organic Long-Staple Raw Cotton",
    category: "Cotton",
    variety: "BT Cotton (29mm Staple)",
    quantity: 80,
    reservePrice: 7400,
    moisture: 8.5,
    purity: 95.5,
    grade: "Grade A",
    location: "Yavatmal, Maharashtra (Pin: 445001)",
    farmerName: "Vilasrao Deshmukh",
    verifiedFarmer: true,
    khasraNo: "MH-YVT-5501",
    harvestDate: "2026-08-20",
    image: "assets/cotton.png",
    offers: []
  },
  {
    id: "SMP-104",
    title: "Yellow High-Oil Soybean Seeds",
    category: "Soybean",
    variety: "JS 335 Organic Soybean",
    quantity: 180,
    reservePrice: 5100,
    moisture: 9.8,
    purity: 96.8,
    grade: "Grade A+",
    location: "Ujjain, Madhya Pradesh (Pin: 456001)",
    farmerName: "Kailash Choudhary",
    verifiedFarmer: true,
    khasraNo: "MP-UJN-3012",
    harvestDate: "2026-08-30",
    image: "assets/soybean.png",
    offers: [
      { buyerName: "Malwa Solvent Extraction Plant", offerPrice: 5250, token: 35000, term: "Buyer Doorstep Pickup", verifiedBuyer: true, gstin: "23AABCX5012P1Z9", date: "2026-09-02" }
    ]
  },
  {
    id: "SMP-105",
    title: "Royal Delicious Cold Storage Apples",
    category: "Apples",
    variety: "Himachali Red Royal",
    quantity: 95,
    reservePrice: 8800,
    moisture: 14.0,
    purity: 99.0,
    grade: "Grade A+",
    location: "Kotkhai, Shimla (Pin: 171202)",
    farmerName: "Surender Sharma",
    verifiedFarmer: true,
    khasraNo: "HP-SML-8819",
    harvestDate: "2026-08-15",
    image: "assets/apples.png",
    offers: [
      { buyerName: "Vashi Cold Chain Logistics Mumbai", offerPrice: 9200, token: 60000, term: "Cold Storage Booking", verifiedBuyer: true, gstin: "27AABCV9910M1Z8", date: "2026-09-01" }
    ]
  }
];

let MANDI_RATES = [
  { mandi: "Indore APMC Mandi", state: "Madhya Pradesh", crop: "Sharbati Wheat", min: 4500, max: 4850, modal: 4720, trend: "+1.8%" },
  { mandi: "Azadpur APMC Market", state: "Delhi NCR", crop: "1121 Basmati Rice", min: 4100, max: 4450, modal: 4320, trend: "+2.4%" },
  { mandi: "Yavatmal Cotton Market", state: "Maharashtra", crop: "Raw Cotton (29mm)", min: 7200, max: 7650, modal: 7450, trend: "-0.5%" },
  { mandi: "Kota Grain Mandi", state: "Rajasthan", crop: "Yellow Soybean", min: 4950, max: 5300, modal: 5180, trend: "+1.2%" },
  { mandi: "Shimla Fruit Storage", state: "Himachal Pradesh", crop: "Royal Apples", min: 8400, max: 9400, modal: 9100, trend: "+3.5%" },
  { mandi: "Vashi APMC Market", state: "Mumbai, MH", crop: "Chana / Pulses", min: 5800, max: 6200, modal: 6050, trend: "+0.8%" }
];

let COLD_STORAGES = [
  { id: "CS-101", name: "Malwa Central Cold Chain", district: "Indore, MP", capacity: "500 MT", available: "140 MT", temp: "2°C - 4°C", ratePerDay: 4.5 },
  { id: "CS-102", name: "Shimla Valley Horticulture Storage", district: "Shimla, HP", capacity: "800 MT", available: "320 MT", temp: "1°C - 3°C", ratePerDay: 6.0 },
  { id: "CS-103", name: "Azadpur APMC Cold Storage Yard", district: "Delhi NCR", capacity: "1200 MT", available: "450 MT", temp: "3°C - 6°C", ratePerDay: 5.0 }
];

let coldBookings = [
  {
    bookingId: "CSB-9912",
    storageName: "Malwa Central Cold Chain",
    district: "Indore, MP",
    farmerName: "Rameshwar Patel",
    cropTitle: "Sharbati Wheat",
    quantity: 50,
    durationDays: 30,
    totalCost: 6750,
    status: "CONFIRMED_SLOT_RESERVED",
    date: "2026-09-01"
  }
];

let smsLogs = [
  { phone: "9876543210", text: "[KrishiDeal Alert] Indore APMC Flour Mills placed a doorstep bid of ₹4,780/Qtl on Sharbati Wheat (#SMP-101). Token Deposit: ₹25,000.", time: "10 mins ago" },
  { phone: "9876543210", text: "[KrishiDeal Alert] Token advance of ₹25,000 safely locked in Escrow Security Vault for Deal #DEAL-8801.", time: "1 hour ago" }
];

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
  renderApp();
  calculateQualityScore();
  calculateFreight();
  renderColdStorage();
  updateSmsBadge();
});

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
    if (identifier === "9876543210" || identifier === "rameshwar@farmer.in") {
      currentUser = { id: "USR-101", name: "Rameshwar Patel", phone: "9876543210", role: "farmer", location: "Sehore, MP", verified: true, khasraNo: "K-402/1A" };
    } else if (identifier === "9123456789" || identifier === "trader@indoremandi.com") {
      currentUser = { id: "USR-102", name: "Indore APMC Flour Mills", phone: "9123456789", role: "buyer", location: "Indore Mandi, MP", verified: true, gstin: "23AABCI8821K1ZM" };
    } else {
      currentUser = { id: "USR-" + Date.now(), name: identifier.split('@')[0], phone: identifier, role: "farmer", location: "India", verified: true };
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

  if (role === "farmer" && !khasraNo && !kccId) {
    showToast("⚠️ Genuine Farmer verification requires Khasra No. or KCC ID.");
    return;
  }

  if (role === "buyer" && !gstin && !mandiLicense) {
    showToast("⚠️ Genuine Buyer verification requires GSTIN or APMC License No.");
    return;
  }

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

// FEATURE 6: Multilingual Voice Search Assistant
function startVoiceRecognition() {
  const voiceBtn = document.getElementById("voiceSearchBtn");
  const searchInput = document.getElementById("searchInput");

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN'; // Default to Hindi / English India
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
    const samplesVoice = ["Sharbati Wheat", "Basmati Rice", "Cotton", "Soybean", "Apples"];
    const randomCrop = samplesVoice[Math.floor(Math.random() * samplesVoice.length)];
    searchInput.value = randomCrop;
    voiceBtn.classList.remove("listening");
    voiceBtn.innerText = "🎙️ Speak";
    renderApp();
    showToast(`🗣️ Simulated Voice Input: "${randomCrop}"`);
  }, 1800);
}

// FEATURE 2: Logistics & Truck Freight Estimator
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
      console.log("Logistics backend offline, using local calculation");
    }
  }

  const container = document.getElementById("freightQuotesList");
  if (!container) return;

  container.innerHTML = `
    <div class="freight-card">
      <div>
        <strong>🛺 E-Rickshaw / Mini Loader (Max 15 Qtl)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Short distance farm-to-mandi delivery</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.erickshaw.toLocaleString()}</div>
    </div>
    <div class="freight-card">
      <div>
        <strong>🚛 10-Tonne Eicher Truck (Max 100 Qtl)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Standard interstate grain transport</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.eicher10T.toLocaleString()}</div>
    </div>
    <div class="freight-card">
      <div>
        <strong>🚛 16-Tonne Heavy Multi-Axle Truck (Max 160 Qtl)</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Bulk processing mill shipment</p>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">₹${rates.multiAxle16T.toLocaleString()}</div>
    </div>
  `;
}

// FEATURE 3: Cold Storage Slot Reservation
function renderColdStorage() {
  const grid = document.getElementById("coldStorageGrid");
  const bookingsList = document.getElementById("coldBookingsList");
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

  if (bookingsList) {
    if (coldBookings.length === 0) {
      bookingsList.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted);">No cold storage slots reserved yet.</p>`;
    } else {
      let bHtml = "";
      coldBookings.forEach(b => {
        bHtml += `
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 14px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary);">${b.bookingId}</span>
              <h4 style="font-size: 0.95rem;">${b.storageName} (${b.district})</h4>
              <p style="font-size: 0.8rem; color: var(--text-muted);">${b.cropTitle} | ${b.quantity} Qtl for ${b.durationDays} Days</p>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: 800; color: var(--primary);">₹${b.totalCost.toLocaleString()}</div>
              <span style="font-size: 0.72rem; color: var(--success); font-weight: 700;">Slot Reserved ✅</span>
            </div>
          </div>
        `;
      });
      bookingsList.innerHTML = bHtml;
    }
  }
}

async function bookColdStorageSlot(storageId) {
  const cs = COLD_STORAGES.find(c => c.id === storageId);
  if (!cs) return;

  const farmerName = currentUser ? currentUser.name : "Rameshwar Patel";
  const bookingData = { storageId, farmerName, cropTitle: "Produce Sample", quantity: 50, durationDays: 30 };

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/cold-storage/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
      });
      const data = await res.json();
      if (data.success) {
        coldBookings.unshift(data.booking);
      }
    } catch (e) {
      console.log("Cold storage backend offline");
    }
  } else {
    coldBookings.unshift({
      bookingId: "CSB-" + (Math.floor(Math.random() * 9000) + 1000),
      storageName: cs.name, district: cs.district,
      farmerName, cropTitle: "Produce Sample", quantity: 50, durationDays: 30,
      totalCost: 50 * cs.ratePerDay * 30, status: "CONFIRMED_SLOT_RESERVED", date: new Date().toISOString().split('T')[0]
    });
  }

  renderColdStorage();
  showToast(`🧊 Cold storage chamber slot reserved at ${cs.name}!`);
}

// FEATURE 1: SMS Alert Logger Modal
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

        const resMandi = await fetch(`${API_BASE_URL}/mandi-rates`);
        const dataMandi = await resMandi.json();
        if (dataMandi.success) MANDI_RATES = dataMandi.data;

        const resDeals = await fetch(`${API_BASE_URL}/deals`);
        const dataDeals = await resDeals.json();
        if (dataDeals.success) sealedDeals = dataDeals.data;

        const resCS = await fetch(`${API_BASE_URL}/cold-storage`);
        const dataCS = await resCS.json();
        if (dataCS.success) {
          COLD_STORAGES = dataCS.data;
          if (dataCS.bookings) coldBookings = dataCS.bookings;
        }

        console.log("⚡ Connected to KrishiDeal Express REST API Backend!");
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

  const savedDeals = localStorage.getItem("krishi_deals");
  if (savedDeals) {
    sealedDeals = JSON.parse(savedDeals);
  } else {
    sealedDeals = [
      {
        dealId: "DEAL-8801",
        sampleTitle: "Sharbati Wheat (Lot #902)",
        farmerName: "Rameshwar Patel",
        buyerName: "Indore APMC Flour Mills",
        quantity: 100,
        pricePerQtl: 4750,
        totalAmount: 475000,
        tokenDeposit: 25000,
        escrowStatus: "TOKEN_LOCKED_IN_SECURE_VAULT",
        pickupTerm: "Buyer Doorstep Pickup",
        date: "2026-09-01"
      }
    ];
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
        <strong>${r.crop}</strong> (${r.mandi}): ₹${r.modal}/Qtl 
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

  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");

  if (role === "farmer") {
    farmerBtn.className = "role-btn active";
    buyerBtn.className = "role-btn";
    actionBtn.style.display = "flex";
    actionBtn.innerHTML = "<span>➕</span> Post Produce Sample";
    actionBtn.onclick = openPostSampleModal;

    heroTitle.innerText = "Sell Your Produce Directly From Home 🏡";
    heroSubtitle.innerText = "Share clean crop sample metrics (moisture, purity, grain size) with APMC Mandi buyers, Cold Storages, and exporters. Get competitive doorstep price quotes without transport risk.";
  } else {
    farmerBtn.className = "role-btn";
    buyerBtn.className = "role-btn active buyer-mode";
    actionBtn.style.display = "flex";
    actionBtn.innerHTML = "<span>🏢</span> Sourcing Requests";
    actionBtn.onclick = () => showToast("Switched to Buyer Procurement Mode! Click 'Submit Doorstep Offer' on any crop sample card.");

    heroTitle.innerText = "Direct Farmer Sourcing & Mandi Bidding Yard 🏢";
    heroSubtitle.innerText = "Browse verified farmer crop samples with lab-grade moisture & purity scores. Submit binding doorstep price offers with instant token deposits.";
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

    html += `
      <div class="sample-card">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/wheat.png'">
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
              <strong>${item.quantity} Qtl</strong>
            </div>
            <div class="spec-item">
              <span>Moisture %</span>
              <strong>${item.moisture}%</strong>
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
              <div class="reserve-price">₹${item.reservePrice.toLocaleString()} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">/ Qtl</span></div>
            </div>
            ${topOffer ? `
              <div style="text-align: right;">
                <span class="unit-label" style="color: var(--success); font-weight: 700;">Top Buyer Offer</span>
                <div style="font-size: 1.15rem; font-weight: 800; color: var(--success);">₹${topOffer.toLocaleString()}</div>
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
    html += `
      <tr>
        <td><strong>${r.mandi}</strong></td>
        <td>${r.state}</td>
        <td>${r.crop}</td>
        <td>₹${r.min}</td>
        <td>₹${r.max}</td>
        <td style="font-weight: 700; color: var(--primary);">₹${r.modal}</td>
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
  if (moisture > 12) score -= (moisture - 12) * 4;
  if (moisture < 10) score -= (10 - moisture) * 2;
  score -= (100 - purity) * 1.2;
  score -= foreign * 5;

  score = Math.max(50, Math.min(99, Math.round(score)));

  let grade = "Grade B";
  if (score >= 90) grade = "Grade A+ (Export)";
  else if (score >= 78) grade = "Grade A (Mandi Standard)";

  let basePrice = 4500;
  if (crop === "Rice") basePrice = 4200;
  if (crop === "Cotton") basePrice = 7400;
  if (crop === "Soybean") basePrice = 5100;
  if (crop === "Apples") basePrice = 8800;

  const estimatedPrice = Math.round(basePrice * (score / 90));

  document.getElementById("calcScoreNum").innerText = score;
  document.getElementById("calcGradeTag").innerText = grade;
  document.getElementById("calcEstimatedVal").innerText = `Estimated Doorstep Value: ₹${estimatedPrice.toLocaleString()} / Quintal`;
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
  const khasraNo = document.getElementById("formKhasraNo").value || (currentUser ? currentUser.khasraNo : "K-402/VERIFIED");

  const farmerName = currentUser ? currentUser.name : "Self (Farmer)";
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
      console.error("Backend error, falling back to local state", err);
    }
  } else {
    const newSample = {
      id: "SMP-" + (Math.floor(Math.random() * 900) + 100),
      ...sampleData,
      variety: category + " (Farmer Direct Sample)",
      purity: 97.5,
      harvestDate: new Date().toISOString().split("T")[0],
      offers: []
    };
    samples.unshift(newSample);
    saveStore();
  }

  closeModal("postSampleModal");
  document.getElementById("postSampleForm").reset();
  renderApp();
  showToast("🌾 Produce sample published with Verified Genuine Farmer badge!");
}

function openBidModal(sampleId) {
  const item = samples.find(s => s.id === sampleId);
  if (!item) return;

  document.getElementById("bidSampleId").value = sampleId;
  document.getElementById("bidCropName").innerText = item.title;
  document.getElementById("bidCropDetails").innerText = `Quantity: ${item.quantity} Qtl | Reserve: ₹${item.reservePrice.toLocaleString()}/Qtl | Location: ${item.location}`;

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
  const gstin = document.getElementById("buyerGstin").value || (currentUser ? currentUser.gstin : "GST-VERIFIED");

  const item = samples.find(s => s.id === sampleId);
  const bidPayload = { buyerName: buyerEntity, offerPrice: offeredPrice, token: tokenAdvance, term: pickupTerm, gstin, verifiedBuyer: true, farmerPhone: "9876543210" };

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

  // Record SMS Alert
  const smsText = `[KrishiDeal Alert] ${buyerEntity} submitted bid of ₹${offeredPrice}/Qtl on ${item.title}. Token: ₹${tokenAdvance}.`;
  smsLogs.unshift({ phone: "9876543210", text: smsText, time: "Just now" });
  updateSmsBadge();

  closeModal("bidModal");
  document.getElementById("bidForm").reset();
  renderApp();
  showToast(`📱 SMS Alert dispatched to farmer! Offer of ₹${offeredPrice}/Qtl submitted.`);
}

function viewOffers(sampleId) {
  const item = samples.find(s => s.id === sampleId);
  if (!item) return;

  document.getElementById("offersModalTitle").innerText = `📋 Offers for ${item.title}`;
  const container = document.getElementById("offersModalContent");

  let html = `
    <div style="background: var(--bg-subtle); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 20px; font-size: 0.9rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div><strong>Total Produce:</strong> ${item.quantity} Quintals</div>
        <div><strong>Reserve Price:</strong> ₹${item.reservePrice.toLocaleString()} / Qtl</div>
        <div><strong>Farmer Verification:</strong> <span style="color: var(--success); font-weight: 700;">Genuine Farmer ✅</span></div>
        <div><strong>Land Record No:</strong> ${item.khasraNo || 'K-VERIFIED'}</div>
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
              <span style="font-size: 0.8rem; color: var(--text-muted);">GSTIN: ${off.gstin || '23AABCI8821K1ZM'} | Submitted: ${off.date}</span>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${off.offerPrice.toLocaleString()} <span style="font-size: 0.8rem; color: var(--text-muted);">/ Qtl</span></div>
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
        <h2 style="color: #0F5A47;">🌾 KrishiDeal Verified Direct Trade Note</h2>
        <p style="font-size: 0.85rem; color: #64748B;">Official Doorstep Commodity Transaction & Escrow Vault Receipt</p>
        <span style="font-size: 0.8rem; font-weight: 700; background: #EAEFEA; padding: 4px 12px; border-radius: 99px;">Contract ID: ${deal.dealId}</span>
      </div>

      <div class="contract-grid">
        <div>
          <strong>🧑‍🌾 Farmer Details (Verified ✅):</strong>
          <p>${deal.farmerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">Land Record: ${deal.khasraNo || 'Verified Khasra'}</p>
          <p style="font-size: 0.8rem; color: #64748B;">${deal.location}</p>
        </div>
        <div>
          <strong>🏢 Mandi / Buyer Entity (Verified ✅):</strong>
          <p>${deal.buyerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">APMC Mandi License Verified</p>
          <p style="font-size: 0.8rem; color: #64748B;">GSTIN: ${deal.gstin || '23AABCI8821K1ZM'}</p>
        </div>
      </div>

      <div style="background: #F4EAD3; padding: 14px; border-radius: 8px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>Commodity: <strong>${deal.sampleTitle}</strong></span>
          <span>Quantity: <strong>${deal.quantity} Quintals</strong></span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>Agreed Rate: <strong>₹${deal.pricePerQtl.toLocaleString()} / Qtl</strong></span>
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
          <h4 style="margin-top: 6px; font-size: 1.1rem;">${d.sampleTitle} (${d.quantity} Qtl)</h4>
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
