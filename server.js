/* ==========================================================================
   KrishiDeal - Express REST API Backend Server (v1.1.0)
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

// Initial seed dataset
const INITIAL_DATA = {
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
  ],
  mandiRates: [
    { mandi: "Indore APMC Mandi", state: "Madhya Pradesh", crop: "Sharbati Wheat", min: 4500, max: 4850, modal: 4720, trend: "+1.8%" },
    { mandi: "Azadpur APMC Market", state: "Delhi NCR", crop: "1121 Basmati Rice", min: 4100, max: 4450, modal: 4320, trend: "+2.4%" },
    { mandi: "Yavatmal Cotton Market", state: "Maharashtra", crop: "Raw Cotton (29mm)", min: 7200, max: 7650, modal: 7450, trend: "-0.5%" },
    { mandi: "Kota Grain Mandi", state: "Rajasthan", crop: "Yellow Soybean", min: 4950, max: 5300, modal: 5180, trend: "+1.2%" },
    { mandi: "Shimla Fruit Storage", state: "Himachal Pradesh", crop: "Royal Apples", min: 8400, max: 9400, modal: 9100, trend: "+3.5%" },
    { mandi: "Vashi APMC Market", state: "Mumbai, MH", crop: "Chana / Pulses", min: 5800, max: 6200, modal: 6050, trend: "+0.8%" }
  ],
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
      pickupTerm: "Buyer Doorstep Pickup",
      date: "2026-09-01"
    }
  ]
};

// Helper: Read DB File
function readDB() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_DATA, null, 2));
    return INITIAL_DATA;
  }
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return INITIAL_DATA;
  }
}

// Helper: Write DB File
function writeDB(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// REST API Endpoints

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: "OK", service: "KrishiDeal REST API Backend", version: "1.1.0" });
});

// 2. GET all crop produce samples
app.get('/api/samples', (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.samples });
});

// 3. POST new crop sample (Farmer)
app.post('/api/samples', (req, res) => {
  const { title, category, quantity, reservePrice, moisture, grade, location, image, farmerName } = req.body;
  if (!title || !category || !quantity || !reservePrice) {
    return res.status(400).json({ success: false, error: "Missing required sample fields" });
  }

  const db = readDB();
  const newSample = {
    id: "SMP-" + (Math.floor(Math.random() * 900) + 100),
    title,
    category,
    variety: category + " (Farmer Direct Sample)",
    quantity: Number(quantity),
    reservePrice: Number(reservePrice),
    moisture: Number(moisture || 11),
    purity: 97.5,
    grade: grade || "Grade A",
    location: location || "India Farm",
    farmerName: farmerName || "Self (Farmer)",
    harvestDate: new Date().toISOString().split('T')[0],
    image: image || "assets/wheat.png",
    offers: []
  };

  db.samples.unshift(newSample);
  writeDB(db);

  res.status(201).json({ success: true, message: "Produce sample listed successfully", sample: newSample });
});

// 4. POST buyer bid offer on a sample
app.post('/api/samples/:id/bids', (req, res) => {
  const { id } = req.params;
  const { buyerName, offerPrice, token, term } = req.body;

  if (!buyerName || !offerPrice) {
    return res.status(400).json({ success: false, error: "Buyer name and price offer are required" });
  }

  const db = readDB();
  const sample = db.samples.find(s => s.id === id);

  if (!sample) {
    return res.status(404).json({ success: false, error: "Sample not found" });
  }

  if (!sample.offers) sample.offers = [];

  const newOffer = {
    buyerName,
    offerPrice: Number(offerPrice),
    token: Number(token || 20000),
    term: term || "Buyer Doorstep Pickup",
    date: new Date().toISOString().split('T')[0]
  };

  sample.offers.unshift(newOffer);
  writeDB(db);

  res.json({ success: true, message: "Doorstep price offer submitted", offer: newOffer });
});

// 5. POST Accept Offer & Lock Trade Contract
app.post('/api/deals/accept', (req, res) => {
  const { sampleId, offerIndex } = req.body;
  const db = readDB();

  const sampleIndex = db.samples.findIndex(s => s.id === sampleId);
  if (sampleIndex === -1) {
    return res.status(404).json({ success: false, error: "Sample not found" });
  }

  const sample = db.samples[sampleIndex];
  const offer = sample.offers[offerIndex];

  if (!offer) {
    return res.status(400).json({ success: false, error: "Invalid offer selection" });
  }

  const totalAmount = offer.offerPrice * sample.quantity;
  const deal = {
    dealId: "DEAL-" + (Math.floor(Math.random() * 9000) + 1000),
    sampleTitle: sample.title,
    farmerName: sample.farmerName,
    buyerName: offer.buyerName,
    quantity: sample.quantity,
    pricePerQtl: offer.offerPrice,
    totalAmount: totalAmount,
    tokenDeposit: offer.token,
    pickupTerm: offer.term,
    location: sample.location,
    date: new Date().toISOString().split('T')[0]
  };

  db.deals.unshift(deal);
  db.samples.splice(sampleIndex, 1);
  writeDB(db);

  res.json({ success: true, message: "Deal sealed and trade contract generated", deal });
});

// 6. GET Live APMC Mandi rates
app.get('/api/mandi-rates', (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.mandiRates });
});

// 7. GET Sealed Deals
app.get('/api/deals', (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.deals });
});

// Start Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🌾 KrishiDeal Express Backend Server Running!`);
  console.log(`🚀 Port: http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`==================================================`);
});
