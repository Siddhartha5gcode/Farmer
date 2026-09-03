/* ==========================================================================
   KrishiDeal - Direct Farmer Dealing Platform
   Application Core Logic & Reactive State Store
   ========================================================================== */

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
    harvestDate: "2026-08-25",
    image: "assets/wheat.png",
    offers: [
      { buyerName: "Indore APMC Flour Mills", offerPrice: 4780, token: 25000, term: "Buyer Doorstep Pickup", date: "2026-09-02" },
      { buyerName: "Bhopal Central Grain Wholesaler", offerPrice: 4720, token: 20000, term: "Mandi Delivery Bonus", date: "2026-09-01" }
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
    harvestDate: "2026-08-28",
    image: "assets/rice.png",
    offers: [
      { buyerName: "Azadpur Export House Delhi", offerPrice: 4350, token: 50000, term: "Buyer Doorstep Pickup", date: "2026-09-02" }
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
    harvestDate: "2026-08-30",
    image: "assets/soybean.png",
    offers: [
      { buyerName: "Malwa Solvent Extraction Plant", offerPrice: 5250, token: 35000, term: "Buyer Doorstep Pickup", date: "2026-09-02" }
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
    harvestDate: "2026-08-15",
    image: "assets/apples.png",
    offers: [
      { buyerName: "Vashi Cold Chain Logistics Mumbai", offerPrice: 9200, token: 60000, term: "Cold Storage Booking", date: "2026-09-01" }
    ]
  }
];

const MANDI_RATES = [
  { mandi: "Indore APMC Mandi", state: "Madhya Pradesh", crop: "Sharbati Wheat", min: 4500, max: 4850, modal: 4720, trend: "+1.8%" },
  { mandi: "Azadpur APMC Market", state: "Delhi NCR", crop: "1121 Basmati Rice", min: 4100, max: 4450, modal: 4320, trend: "+2.4%" },
  { mandi: "Yavatmal Cotton Market", state: "Maharashtra", crop: "Raw Cotton (29mm)", min: 7200, max: 7650, modal: 7450, trend: "-0.5%" },
  { mandi: "Kota Grain Mandi", state: "Rajasthan", crop: "Yellow Soybean", min: 4950, max: 5300, modal: 5180, trend: "+1.2%" },
  { mandi: "Shimla Fruit Storage", state: "Himachal Pradesh", crop: "Royal Apples", min: 8400, max: 9400, modal: 9100, trend: "+3.5%" },
  { mandi: "Vashi APMC Market", state: "Mumbai, MH", crop: "Chana / Pulses", min: 5800, max: 6200, modal: 6050, trend: "+0.8%" }
];

let currentRole = "farmer";
let currentTheme = "light";
let currentTab = "samples";
let samples = [];
let sealedDeals = [];

document.addEventListener("DOMContentLoaded", () => {
  loadStore();
  initTicker();
  renderApp();
  calculateQualityScore();
});

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
  const tabs = ["samples", "mandi", "quality", "deals"];
  
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
  document.getElementById("statActiveSamples").innerText = samples.length;
}

function renderListings() {
  const grid = document.getElementById("listingsGrid");
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
        <h3 style="color: var(--text-muted); margin-bottom: 8px;">No produce samples match your filters</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try adjusting your search terms or post a new produce sample.</p>
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
              <strong>${item.farmerName}</strong>
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
  const crop = document.getElementById("calcCropType").value;
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
  document.getElementById("postSampleModal").classList.add("active");
}

function handlePostSample(e) {
  e.preventDefault();
  const title = document.getElementById("formCropTitle").value;
  const category = document.getElementById("formCategory").value;
  const quantity = parseFloat(document.getElementById("formQuantity").value);
  const reservePrice = parseFloat(document.getElementById("formPrice").value);
  const moisture = parseFloat(document.getElementById("formMoisture").value);
  const grade = document.getElementById("formGrade").value;
  const location = document.getElementById("formLocation").value;
  const image = document.getElementById("formImageSelect").value;

  const newSample = {
    id: "SMP-" + (Math.floor(Math.random() * 900) + 100),
    title,
    category,
    variety: category + " (Farmer Direct Sample)",
    quantity,
    reservePrice,
    moisture,
    purity: 97.5,
    grade,
    location,
    farmerName: "Self (Farmer Home Posting)",
    harvestDate: new Date().toISOString().split("T")[0],
    image,
    offers: []
  };

  samples.unshift(newSample);
  saveStore();
  closeModal("postSampleModal");
  document.getElementById("postSampleForm").reset();
  renderApp();
  showToast("🌾 Produce sample published successfully! Buyers from nearby Mandis can now submit price quotes.");
}

function openBidModal(sampleId) {
  const item = samples.find(s => s.id === sampleId);
  if (!item) return;

  document.getElementById("bidSampleId").value = sampleId;
  document.getElementById("bidCropName").innerText = item.title;
  document.getElementById("bidCropDetails").innerText = `Quantity: ${item.quantity} Qtl | Reserve: ₹${item.reservePrice.toLocaleString()}/Qtl | Location: ${item.location}`;
  document.getElementById("bidModal").classList.add("active");
}

function handlePlaceBid(e) {
  e.preventDefault();
  const sampleId = document.getElementById("bidSampleId").value;
  const buyerEntity = document.getElementById("buyerEntity").value;
  const offeredPrice = parseFloat(document.getElementById("offeredPrice").value);
  const tokenAdvance = parseFloat(document.getElementById("tokenAdvance").value);
  const pickupTerm = document.getElementById("pickupTerm").value;

  const item = samples.find(s => s.id === sampleId);
  if (item) {
    if (!item.offers) item.offers = [];
    item.offers.unshift({
      buyerName: buyerEntity,
      offerPrice: offeredPrice,
      token: tokenAdvance,
      term: pickupTerm,
      date: new Date().toISOString().split("T")[0]
    });
    saveStore();
    closeModal("bidModal");
    document.getElementById("bidForm").reset();
    renderApp();
    showToast(`🤝 Direct price offer of ₹${offeredPrice}/Qtl submitted to farmer!`);
  }
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
        <div><strong>Moisture Level:</strong> ${item.moisture}%</div>
        <div><strong>Location:</strong> ${item.location}</div>
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
              <h4 style="color: var(--text-main); font-size: 1.1rem;">${off.buyerName}</h4>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Submitted: ${off.date}</span>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${off.offerPrice.toLocaleString()} <span style="font-size: 0.8rem; color: var(--text-muted);">/ Qtl</span></div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--success);">Total Deal: ₹${totalAmount.toLocaleString()}</div>
            </div>
          </div>
          <div style="display: flex; gap: 14px; background: var(--bg-subtle); padding: 10px; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 12px;">
            <div>💵 <strong>Token Advance:</strong> ₹${off.token.toLocaleString()}</div>
            <div>🚚 <strong>Pickup:</strong> ${off.term}</div>
          </div>
          ${currentRole === "farmer" ? `
            <button class="btn-primary btn-gold" style="width: 100%; padding: 10px;" onclick="acceptDeal('${item.id}', ${index})">
              🤝 Accept Offer & Lock Doorstep Deal
            </button>
          ` : `<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Switch to Farmer mode to accept this offer</div>`}
        </div>
      `;
    });
  }

  container.innerHTML = html;
  document.getElementById("offersModal").classList.add("active");
}

function acceptDeal(sampleId, offerIndex) {
  const item = samples.find(s => s.id === sampleId);
  if (!item || !item.offers || !item.offers[offerIndex]) return;

  const offer = item.offers[offerIndex];
  const totalAmount = offer.offerPrice * item.quantity;

  const newDeal = {
    dealId: "DEAL-" + (Math.floor(Math.random() * 9000) + 1000),
    sampleTitle: item.title,
    farmerName: item.farmerName,
    buyerName: offer.buyerName,
    quantity: item.quantity,
    pricePerQtl: offer.offerPrice,
    totalAmount: totalAmount,
    tokenDeposit: offer.token,
    pickupTerm: offer.term,
    location: item.location,
    date: new Date().toISOString().split("T")[0]
  };

  sealedDeals.unshift(newDeal);
  samples = samples.filter(s => s.id !== sampleId);
  saveStore();

  closeModal("offersModal");
  renderApp();
  showContractModal(newDeal);
  showToast("🎉 Deal locked! Token advance payment slip generated.");
}

function showContractModal(deal) {
  const container = document.getElementById("contractModalContent");
  container.innerHTML = `
    <div class="contract-paper">
      <div class="contract-header">
        <h2 style="color: #0F5A47;">🌾 KrishiDeal Direct Trade Note</h2>
        <p style="font-size: 0.85rem; color: #64748B;">Official Doorstep Commodity Transaction & Token Receipt</p>
        <span style="font-size: 0.8rem; font-weight: 700; background: #EAEFEA; padding: 4px 12px; border-radius: 99px;">Contract ID: ${deal.dealId}</span>
      </div>

      <div class="contract-grid">
        <div>
          <strong>🧑‍🌾 Farmer Details:</strong>
          <p>${deal.farmerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">${deal.location}</p>
        </div>
        <div>
          <strong>🏢 Mandi / Buyer Entity:</strong>
          <p>${deal.buyerName}</p>
          <p style="font-size: 0.8rem; color: #64748B;">APMC Mandi License Verified</p>
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
          <span>Token Advance Paid: <strong style="color: #D97706;">₹${deal.tokenDeposit.toLocaleString()}</strong></span>
          <span>Pickup Method: <strong>${deal.pickupTerm}</strong></span>
        </div>
      </div>

      <div style="text-align: center;">
        <div class="qr-placeholder">QR VERIFIED</div>
        <p style="font-size: 0.75rem; color: #64748B; margin-top: 6px;">Scannable by Mandi Inspection Gate Authorities</p>
      </div>
    </div>
  `;
  document.getElementById("contractModal").classList.add("active");
}

function renderDeals() {
  const container = document.getElementById("dealsHistoryList");
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
          <p style="font-size: 0.85rem; color: var(--text-muted);">Farmer: ${d.farmerName} ➔ Buyer: ${d.buyerName}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${d.totalAmount.toLocaleString()}</div>
          <span style="font-size: 0.8rem; color: var(--success); font-weight: 700;">₹${d.tokenDeposit.toLocaleString()} Token Paid</span>
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
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🌾</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}
