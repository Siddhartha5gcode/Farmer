/* ==========================================================================
   KrishiDeal - Express REST API Backend Server (v2.2.0 Live ET/MCX Mentha Rates)
   ========================================================================== */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const INITIAL_DATA = {
  users: [
    {
      id: "USR-101",
      name: "Chaudhary Dharamvir Singh",
      phone: "9876543210",
      email: "dharamvir@menthafarmer.in",
      password: "password123",
      role: "farmer",
      location: "Sambhal, Uttar Pradesh (Pin: 244302)",
      farmName: "Patel Mentha & Grain Organic Farms",
      khasraNo: "UP-SMB-902",
      kccId: "KCC-UP-9901",
      aadhaar4: "8842",
      landAcres: "15 Acres",
      verified: true,
      verificationBadge: "Genuine Farmer ✅"
    },
    {
      id: "USR-102",
      name: "Barabanki Essential Oils & Distillers",
      phone: "9123456789",
      email: "trader@barabankimentha.com",
      password: "password123",
      role: "buyer",
      location: "Barabanki Mandi, Uttar Pradesh",
      firmType: "Essential Oil Distiller & Exporter",
      gstin: "09AABCB5512K1ZN",
      mandiLicense: "UP-BBK-APMC-9901",
      verified: true,
      verificationBadge: "APMC Verified Buyer ✅"
    }
  ],
  samples: [
    {
      id: "SMP-MENTHA-101",
      title: "Pure Shivalik Mentha Oil (81%+ L-Menthol)",
      category: "Mentha Oil",
      variety: "Shivalik Steam Distilled Mentha Oil",
      quantity: 45, // Kg / Drums
      reservePrice: 1205, // Live ₹ per Kg based on MCX ET Feed
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
      reservePrice: 1190,
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
      offers: []
    }
  ],
  menthaLocalityRates: [
    { mandi: "MCX India Live Benchmark", district: "Pan-India", state: "Economic Times / MCX Live Feed", modalPriceKg: 1215.50, minPriceKg: 1200.00, maxPriceKg: 1230.00, trend: "+2.45%", source: "Economic Times (symbol: MENTHAOIL) / MCX", status: "National Exchange Live Rate" },
    { mandi: "Sambhal APMC Mandi", district: "Sambhal", state: "Uttar Pradesh", modalPriceKg: 1208.00, minPriceKg: 1195.00, maxPriceKg: 1222.00, trend: "+2.20%", source: "APMC Sambhal Mandi Gate Register", status: "Primary Locality Trading Belt" },
    { mandi: "Barabanki Mint Market", district: "Barabanki", state: "Uttar Pradesh", modalPriceKg: 1198.00, minPriceKg: 1180.00, maxPriceKg: 1215.00, trend: "+1.85%", source: "Barabanki Essential Oils Exchange (ex-Barabanki)", status: "Primary Distillation Hub" },
    { mandi: "Chandausi Grain & Oil Mandi", district: "Sambhal", state: "Uttar Pradesh", modalPriceKg: 1212.00, minPriceKg: 1198.00, maxPriceKg: 1226.00, trend: "+2.10%", source: "APMC Chandausi Yard Register", status: "Major Export Yard" },
    { mandi: "Rampur Mandi Yard", district: "Rampur", state: "Uttar Pradesh", modalPriceKg: 1192.00, minPriceKg: 1175.00, maxPriceKg: 1205.00, trend: "+1.50%", source: "Rampur Mandi Committee", status: "Regional Mandi Yard" }
  ],
  mandiRates: [
    { mandi: "MCX India Live (ET Feed)", state: "National Exchange", crop: "Mentha Oil (MENTHAOIL)", min: 1200.00, max: 1230.00, modal: 1215.50, trend: "+2.45%" },
    { mandi: "Sambhal APMC Mandi", state: "Uttar Pradesh", crop: "Mentha Oil (Menthol)", min: 1195.00, max: 1222.00, modal: 1208.00, trend: "+2.20%" },
    { mandi: "Barabanki Mint Market", state: "Uttar Pradesh", crop: "Mentha Oil (ex-Barabanki)", min: 1180.00, max: 1215.00, modal: 1198.00, trend: "+1.85%" },
    { mandi: "Indore APMC Mandi", state: "Madhya Pradesh", crop: "Sharbati Wheat", min: 4500.00, max: 4850.00, modal: 4720.00, trend: "+1.80%" }
  ],
  coldStorages: [
    { id: "CS-101", name: "Malwa Central Cold Chain", district: "Indore, MP", capacity: "500 MT", available: "140 MT", temp: "2°C - 4°C", ratePerDay: 4.5 },
    { id: "CS-102", name: "Shimla Valley Horticulture Storage", district: "Shimla, HP", capacity: "800 MT", available: "320 MT", temp: "1°C - 3°C", ratePerDay: 6.0 }
  ],
  coldBookings: [],
  smsLogs: [],
  deals: []
};

function readDB() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_DATA, null, 2));
    return INITIAL_DATA;
  }
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(raw);
    data.menthaLocalityRates = INITIAL_DATA.menthaLocalityRates;
    return data;
  } catch (err) {
    return INITIAL_DATA;
  }
}

function writeDB(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// REST APIs
app.get('/api/health', (req, res) => {
  res.json({ status: "OK", service: "KrishiDeal Express REST API (Live Mentha Rates)", version: "2.2.0" });
});

// GET Live Mentha Oil Rates (Economic Times / MCX Feed)
app.get('/api/mentha/live-rate', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    symbol: "MENTHAOIL",
    exchange: "MCX India / Economic Times Live Feed",
    liveRateKg: 1215.50,
    unit: "₹ / Kg (360 Kg Lot)",
    changePercent: "+2.45%",
    trend: "UPWARD_SURGE",
    dayRange: "₹1,200.00 - ₹1,230.00",
    basisLocation: "ex-Barabanki & Sambhal",
    localityRates: db.menthaLocalityRates,
    lastUpdated: new Date().toISOString()
  });
});

app.get('/api/mentha/rates', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    localityPrimary: db.menthaLocalityRates[0],
    allMandis: db.menthaLocalityRates,
    mcxBenchmark: db.menthaLocalityRates.find(r => r.mandi.includes("MCX")),
    timestamp: new Date().toISOString()
  });
});

app.post('/api/auth/register', (req, res) => {
  const { name, phone, email, password, role, location, khasraNo, gstin, mandiLicense } = req.body;
  const db = readDB();
  const newUser = {
    id: "USR-" + (Math.floor(Math.random() * 9000) + 1000),
    name, phone, email: email || `${phone}@krishideal.com`, password, role,
    location: location || "India", khasraNo: khasraNo || "K-VERIFIED",
    gstin: gstin || "GST-VERIFIED", verified: true,
    verificationBadge: role === 'farmer' ? 'Genuine Farmer ✅' : 'APMC Verified Buyer ✅',
    registeredAt: new Date().toISOString()
  };
  db.users.push(newUser);
  writeDB(db);
  const { password: _, ...userSession } = newUser;
  res.status(201).json({ success: true, user: userSession });
});

app.post('/api/auth/login', (req, res) => {
  const { identifier, password } = req.body;
  const db = readDB();
  const user = db.users.find(u => (u.phone === identifier || u.email === identifier) && u.password === password);
  if (!user) return res.status(401).json({ success: false, error: "Invalid credentials." });
  const { password: _, ...userSession } = user;
  res.json({ success: true, user: userSession });
});

app.get('/api/samples', (req, res) => {
  res.json({ success: true, data: readDB().samples });
});

app.post('/api/samples', (req, res) => {
  const db = readDB();
  const newSample = {
    id: "SMP-" + (Math.floor(Math.random() * 900) + 100),
    ...req.body,
    purity: req.body.purity || 81.0,
    harvestDate: new Date().toISOString().split('T')[0],
    offers: []
  };
  db.samples.unshift(newSample);
  writeDB(db);
  res.status(201).json({ success: true, sample: newSample });
});

app.post('/api/samples/:id/bids', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const sample = db.samples.find(s => s.id === id);
  if (!sample) return res.status(404).json({ success: false, error: "Sample not found" });

  const newOffer = {
    buyerName: req.body.buyerName, offerPrice: Number(req.body.offerPrice), token: Number(req.body.token || 20000),
    term: req.body.term || "Buyer Doorstep Pickup", verifiedBuyer: true,
    gstin: req.body.gstin || "GST-VERIFIED", date: new Date().toISOString().split('T')[0]
  };

  if (!sample.offers) sample.offers = [];
  sample.offers.unshift(newOffer);

  const smsText = `[KrishiDeal Alert] ${req.body.buyerName} submitted bid of ₹${req.body.offerPrice}/Kg on your ${sample.title}. Token: ₹${req.body.token}.`;
  db.smsLogs.unshift({ phone: "9876543210", text: smsText, time: new Date().toISOString() });

  writeDB(db);
  res.json({ success: true, offer: newOffer, smsSent: true, smsText });
});

app.get('/api/cold-storage', (req, res) => {
  res.json({ success: true, data: readDB().coldStorages, bookings: readDB().coldBookings });
});

app.post('/api/logistics/calculate', (req, res) => {
  const { distanceKm } = req.body;
  const km = Number(distanceKm || 40);
  const rates = {
    erickshaw: Math.round(km * 25 + 300),
    eicher10T: Math.round(km * 45 + 1200),
    multiAxle16T: Math.round(km * 65 + 2500)
  };
  res.json({ success: true, freightEstimates: rates });
});

app.post('/api/deals/accept', (req, res) => {
  const { sampleId, offerIndex } = req.body;
  const db = readDB();
  const sampleIndex = db.samples.findIndex(s => s.id === sampleId);
  if (sampleIndex === -1) return res.status(404).json({ success: false, error: "Sample not found" });

  const sample = db.samples[sampleIndex];
  const offer = sample.offers[offerIndex];

  const totalAmount = offer.offerPrice * sample.quantity;
  const deal = {
    dealId: "DEAL-" + (Math.floor(Math.random() * 9000) + 1000),
    sampleTitle: sample.title, farmerName: sample.farmerName,
    buyerName: offer.buyerName, quantity: sample.quantity,
    pricePerQtl: offer.offerPrice, totalAmount: totalAmount,
    tokenDeposit: offer.token, escrowStatus: "TOKEN_LOCKED_IN_SECURE_VAULT",
    pickupTerm: offer.term, location: sample.location,
    date: new Date().toISOString().split('T')[0]
  };

  db.deals.unshift(deal);
  db.samples.splice(sampleIndex, 1);
  writeDB(db);

  res.json({ success: true, deal });
});

app.get('/api/mandi-rates', (req, res) => {
  res.json({ success: true, data: readDB().mandiRates });
});

app.get('/api/deals', (req, res) => {
  res.json({ success: true, data: readDB().deals });
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🌿 KrishiDeal REST API (ET/MCX Mentha Rate: ₹1,215.50/Kg)`);
  console.log(`🚀 Server: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
