/* ==========================================================================
   KrishiDeal - Express REST API Backend Server (v2.0.0 Enterprise Suite)
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

// Initial seed dataset with enterprise features
const INITIAL_DATA = {
  users: [
    {
      id: "USR-101",
      name: "Rameshwar Patel",
      phone: "9876543210",
      email: "rameshwar@farmer.in",
      password: "password123",
      role: "farmer",
      location: "Sehore, Madhya Pradesh (Pin: 466001)",
      farmName: "Patel Organic Farms",
      khasraNo: "K-402/1A",
      kccId: "KCC-MP-4402",
      aadhaar4: "8842",
      landAcres: "12 Acres",
      verified: true,
      verificationBadge: "Genuine Farmer ✅"
    },
    {
      id: "USR-102",
      name: "Indore APMC Flour Mills",
      phone: "9123456789",
      email: "trader@indoremandi.com",
      password: "password123",
      role: "buyer",
      location: "Indore APMC Mandi, MP",
      firmType: "Flour Mill / Grain Processor",
      gstin: "23AABCI8821K1ZM",
      mandiLicense: "MP-IND-APMC-8821",
      verified: true,
      verificationBadge: "APMC Verified Buyer ✅"
    }
  ],
  samples: [
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
  ],
  mandiRates: [
    { mandi: "Indore APMC Mandi", state: "Madhya Pradesh", crop: "Sharbati Wheat", min: 4500, max: 4850, modal: 4720, trend: "+1.8%" },
    { mandi: "Azadpur APMC Market", state: "Delhi NCR", crop: "1121 Basmati Rice", min: 4100, max: 4450, modal: 4320, trend: "+2.4%" },
    { mandi: "Yavatmal Cotton Market", state: "Maharashtra", crop: "Raw Cotton (29mm)", min: 7200, max: 7650, modal: 7450, trend: "-0.5%" },
    { mandi: "Kota Grain Mandi", state: "Rajasthan", crop: "Yellow Soybean", min: 4950, max: 5300, modal: 5180, trend: "+1.2%" },
    { mandi: "Shimla Fruit Storage", state: "Himachal Pradesh", crop: "Royal Apples", min: 8400, max: 9400, modal: 9100, trend: "+3.5%" },
    { mandi: "Vashi APMC Market", state: "Mumbai, MH", crop: "Chana / Pulses", min: 5800, max: 6200, modal: 6050, trend: "+0.8%" }
  ],
  coldStorages: [
    { id: "CS-101", name: "Malwa Central Cold Chain", district: "Indore, MP", capacity: "500 MT", available: "140 MT", temp: "2°C - 4°C", ratePerDay: "₹4.5 / Qtl" },
    { id: "CS-102", name: "Shimla Valley Horticulture Storage", district: "Shimla, HP", capacity: "800 MT", available: "320 MT", temp: "1°C - 3°C", ratePerDay: "₹6.0 / Qtl" },
    { id: "CS-103", name: "Azadpur APMC Cold Storage Yard", district: "Delhi NCR", capacity: "1200 MT", available: "450 MT", temp: "3°C - 6°C", ratePerDay: "₹5.0 / Qtl" }
  ],
  coldBookings: [],
  smsLogs: [],
  deals: [
    {
      dealId: "DEAL-8801",
      sampleTitle: "Sharbati Wheat (Lot #902)",
      farmerName: "Rameshwar Patel",
      buyerName: "Indore APMC Flour Mills",
      quantity: 100,
      pricePerQtl: 4750,
      totalAmount: 475000,
      tokenDeposit: 25000,
      escrowStatus: "LOCKED_IN_VAULT",
      pickupTerm: "Buyer Doorstep Pickup",
      date: "2026-09-01"
    }
  ]
};

function readDB() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_DATA, null, 2));
    return INITIAL_DATA;
  }
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(raw);
    if (!data.coldStorages) data.coldStorages = INITIAL_DATA.coldStorages;
    if (!data.coldBookings) data.coldBookings = INITIAL_DATA.coldBookings;
    if (!data.smsLogs) data.smsLogs = INITIAL_DATA.smsLogs;
    return data;
  } catch (err) {
    return INITIAL_DATA;
  }
}

function writeDB(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// REST API Endpoints

app.get('/api/health', (req, res) => {
  res.json({ status: "OK", service: "KrishiDeal Enterprise API Backend", version: "2.0.0" });
});

// AUTH Endpoints
app.post('/api/auth/register', (req, res) => {
  const { name, phone, email, password, role, location, khasraNo, kccId, landAcres, gstin, mandiLicense, firmType } = req.body;
  if (!name || !phone || !password || !role) {
    return res.status(400).json({ success: false, error: "Name, phone, password and role are required." });
  }

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
  res.status(201).json({ success: true, message: "Registration successful!", user: userSession });
});

app.post('/api/auth/login', (req, res) => {
  const { identifier, password } = req.body;
  const db = readDB();
  const user = db.users.find(u => (u.phone === identifier || u.email === identifier) && u.password === password);
  if (!user) return res.status(401).json({ success: false, error: "Invalid credentials." });

  const { password: _, ...userSession } = user;
  res.json({ success: true, message: "Login successful!", user: userSession });
});

// Produce Samples API
app.get('/api/samples', (req, res) => {
  res.json({ success: true, data: readDB().samples });
});

app.post('/api/samples', (req, res) => {
  const db = readDB();
  const newSample = {
    id: "SMP-" + (Math.floor(Math.random() * 900) + 100),
    ...req.body,
    purity: 97.5,
    harvestDate: new Date().toISOString().split('T')[0],
    offers: []
  };
  db.samples.unshift(newSample);
  writeDB(db);
  res.status(201).json({ success: true, sample: newSample });
});

// Bidding & SMS Notification Endpoint
app.post('/api/samples/:id/bids', (req, res) => {
  const { id } = req.params;
  const { buyerName, offerPrice, token, term, gstin, farmerPhone } = req.body;

  const db = readDB();
  const sample = db.samples.find(s => s.id === id);
  if (!sample) return res.status(404).json({ success: false, error: "Sample not found" });

  const newOffer = {
    buyerName, offerPrice: Number(offerPrice), token: Number(token || 20000),
    term: term || "Buyer Doorstep Pickup", verifiedBuyer: true,
    gstin: gstin || "GST-VERIFIED", date: new Date().toISOString().split('T')[0]
  };

  if (!sample.offers) sample.offers = [];
  sample.offers.unshift(newOffer);

  // SMS Dispatch Simulation
  const smsText = `[KrishiDeal SMS] ${buyerName} submitted bid of ₹${offerPrice}/Qtl on your ${sample.title} (${sample.quantity} Qtl). Token: ₹${token}.`;
  db.smsLogs.unshift({ phone: farmerPhone || "9876543210", text: smsText, time: new Date().toISOString() });

  writeDB(db);
  res.json({ success: true, offer: newOffer, smsSent: true, smsText });
});

// Cold Storage Endpoints
app.get('/api/cold-storage', (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.coldStorages, bookings: db.coldBookings });
});

app.post('/api/cold-storage/book', (req, res) => {
  const { storageId, farmerName, cropTitle, quantity, durationDays } = req.body;
  const db = readDB();

  const storage = db.coldStorages.find(cs => cs.id === storageId);
  if (!storage) return res.status(404).json({ success: false, error: "Storage facility not found" });

  const booking = {
    bookingId: "CSB-" + (Math.floor(Math.random() * 9000) + 1000),
    storageName: storage.name, district: storage.district,
    farmerName: farmerName || "Rameshwar Patel",
    cropTitle: cropTitle || "Sharbati Wheat",
    quantity: Number(quantity || 50),
    durationDays: Number(durationDays || 30),
    totalCost: Number(quantity || 50) * 5 * Number(durationDays || 30),
    status: "CONFIRMED_SLOT_RESERVED",
    date: new Date().toISOString().split('T')[0]
  };

  db.coldBookings.unshift(booking);
  writeDB(db);
  res.json({ success: true, booking });
});

// Logistics Calculator API
app.post('/api/logistics/calculate', (req, res) => {
  const { distanceKm, quantityQtl } = req.body;
  const km = Number(distanceKm || 40);
  const qtl = Number(quantityQtl || 100);

  const rates = {
    erickshaw: Math.round(km * 25 + 300), // Max 15 Qtl
    eicher10T: Math.round(km * 45 + 1200), // Max 100 Qtl
    multiAxle16T: Math.round(km * 65 + 2500) // Max 160 Qtl
  };

  res.json({ success: true, distanceKm: km, quantityQtl: qtl, freightEstimates: rates });
});

// Deals & Escrow API
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
  console.log(`🌾 KrishiDeal Enterprise Backend Server (v2.0.0 All Features)`);
  console.log(`🚀 Server: http://localhost:${PORT}`);
  console.log(`📱 SMS Alerts | 🚛 Freight Estimator | 🧊 Cold Storage | 🛡️ Escrow`);
  console.log(`==================================================`);
});
