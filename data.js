const makhanaData = {
  scientificCultivation: {
    variety: "Swarna Vaidehi (Released: 15.11.2013, Notified: 30.07.2022 by CVRC)",
    parameters: [
      { name: "Field Water Depth", value: "30 - 45 cm", detail: "Optimized shallow field system compared to traditional 1.5 - 2.0 m deep ponds, completely removing harvesting physical hazards and reducing water use by 80%." },
      { name: "Nursery Setup & Sowing", value: "Nov - March (500 m²/ha)", detail: "Broadcasting certified seeds. Seed rate: 20 kg/ha for field nursery bed (compares to 90 kg/ha required for pond cultivation). Seedlings ready at 75 days old in February." },
      { name: "Transplanting & Spacing", value: "Row Spacing: 1.20 m", detail: "Seedlings showing 3-4 leaves transplanted at 1.20 m x 1.20 m grid in shallow clayey agricultural soil." },
      { name: "Nutrient Regimen", value: "100:60:40 NPK kg/ha + Micronutrients", detail: "Includes 10 t/ha Farm Yard Manure (FYM) + 5 kg/ha Zinc (Zn) + 5 kg/ha Magnesium (Mg) + 5 kg/ha Boron (B) + foliar spray of 0.1% CuSO4 solution. Integrating micronutrients increases shell structural thickness over standard NPK alone." },
      { name: "Pest Entomology & IPM", value: "Biological, Mycological & Targeted Chemistry", detail: "Aphids (Rhopalosiphum nymphaeae L.) controlled via Coccinellid beetles, Metarhizium anisopliae or Beauveria bassiana mycological agents (@ 1x10^8 cfu/g), 1% Neem oil, or Flonicamid 50% WG @ 0.4 g/L. Leaf blight controlled via Dithane M-45 (0.3%) sprays." },
      { name: "Root Borer & Beetle Control", value: "Chlorantraniliprole Protocol", detail: "Root Borer (Donacia delesserti) grubs and Singhara Beetle (Galerucella birmanica) leaf-perforators managed via Chlorantraniliprole 18.5 SC @ 0.3 mL/L or granular Chlorantraniliprole 0.4% GR @ 6 kg/acre in water." },
      { name: "Harvest Yield & Specs", value: "3.0 - 3.5 t/ha (Average 25 q/ha)", detail: "Harvested at 135-150 days post-transplanting (July-August) standing up with bamboo 'Gaanj' screen nets. Raw seed price averages Rs. 80-150/kg depending on grade." }
    ],
    byProducts: [
      {
        name: "Makhana Ragi Cookies (Biscuits)",
        chemistry: "Formulated using 35% micronized Euryale ferox seed perisperm flour and finger millet (ragi), rich in essential amino acids (Glutamine, Arginine, Methionine) and calcium (160mg/100g) with stable low fats (0.1%).",
        targetMarket: "Premium health and wellness retail, gluten-free snack bars, and diabetic dietary counters.",
        margin: "58% Gross Margin"
      },
      {
        name: "Hypoallergenic Baby Food (Shishu Aahar)",
        chemistry: "Hypoallergenic weaning flour blending roasted Makhana perisperm (45%), decorticated green gram (30%), and ragi (25%). High essential amino acids index (88.5-91.6%) and optimized 1.2:1 Ca:P ratio for infant bone development.",
        targetMarket: "Pediatric clinical networks, state child nutrition schemes (ICDS), and premium infant health brands.",
        margin: "62% Gross Margin"
      },
      {
        name: "Low-GI Functional Pasta",
        chemistry: "Extruded pasta made from 50% cold-gelatinized Euryale starch (high resistant amylose starch) and durum wheat semolina. Highly digestible perisperm starchy core keeping GI below 50.",
        targetMarket: "Premium organic supermarkets, lifestyle wellness stores, and GCC & European gourmet export networks.",
        margin: "52% Gross Margin"
      }
    ]
  },
  logisticsPipeline: {
    hubs: [
      { district: "Darbhanga", role: "R&D Liaison & Certification Hub", focus: "ICAR-NRC Makhana coordination, Swarna Vaidehi certified seed stock propagation, and regional nursery planning." },
      { district: "Madhubani", role: "Manual Popping Cluster Hub", focus: "Organizing traditional Mallah popping families, managing localized sun-drying yards, and nested rotary sieve grading." },
      { district: "Purnia", role: "Bulk Collection & Transport Zone", focus: "Large-scale farm-gate buyback, rapid moisture checks, solar pre-drying setups, and direct packaging distribution." }
    ],
    workflowSteps: [
      {
        phase: "Phase 1: Digital Buyback",
        title: "Farm-Gate Grade Valuation",
        description: "Direct buyback using portable digital moisture testers at fields. Grade-wise seed pricing scales: Grade-A (>1.2cm) at ₹150/kg, Grade-B (0.9-1.2cm) at ₹130/kg, and Grade-C (<0.9cm) at ₹100/kg.",
        pricing: "Raw seed moisture content measured. Standard seed size sorted at farm gate."
      },
      {
        phase: "Phase 2: Sun-Drying",
        title: "Aflatoxin Prevention Protocol",
        description: "Raw seeds are immediately washed and spread on 250 GSM HDPE sheets in thin layers (under 2.5 cm depth). Dried under the sun to drop moisture from 28-30% down to a stable 12-14%.",
        pricing: "Drying preserves seed viability for up to 10 months and prevents Aspergillus flavus mold growth."
      },
      {
        phase: "Phase 3: nested Grader",
        title: "Mechanical Size Drum Sorting",
        description: "Dried seeds are passed through a Rotary Nested Grader (Capacity: 180 kg/h, Cost: ₹2.5 Lakhs). Separates seeds into 5 distinct grades (0.7 cm to 1.4 cm) matching subsequent roasting pans.",
        pricing: "Ensures uniform heat absorption during roasting, reducing burned or unpopped waste by 18%."
      },
      {
        phase: "Phase 4: double Roast & Pop",
        title: "Decentralized Popping Network",
        description: "Sorted seeds are popped in manual Mallah popping clusters. High-heat roasting (270 °C for 3-5 mins), tempered in gunny bags for 30 hours, then flash-roasted at 270 °C and hand-malleted on wooden blocks.",
        pricing: "Outsourced popping creates rural jobs while saving initial automated machinery CAPEX in Year 1. Paid at ₹35/kg pops."
      }
    ]
  },
  financials: {
    cultivationModel: {
      title: "1-Hectare Field-Based Cultivation Model (Swarna Vaidehi)",
      opex: [
        { item: "Land Lease (1 Year, Field)", cost: 25000 },
        { item: "Field Preparation & Perimeter Bunding (30-45 cm depth)", cost: 15000 },
        { item: "Nursery Area Setup & Certified Seed Stock (20 kg/ha)", cost: 8000 },
        { item: "Nutrition Setup (NPK 100:60:40 + S, Zn, Mg, B)", cost: 12000 },
        { item: "IPM Bio-Agents & Targeted Chemistry (Chlorantraniliprole/Neem)", cost: 5000 },
        { item: "Field Labor Mandays (75 Mandays @ Rs. 600 for planting/sweeping)", cost: 45000 },
        { item: "Irrigation Pump Diesel Fuel (water replenishment)", cost: 10000 }
      ],
      revenue: [
        { product: "Raw Makhana Seeds (Swarna Vaidehi)", yieldKg: 2800, ratePerKg: 150, total: 420000 }
      ]
    },
    processingLedger: {
      title: "Year-1 Bootstrapped Processing Ledger (30 Tons Raw Seeds)",
      procurement: [
        { item: "Raw Seed Procurement (30,000 kg @ average Rs. 130/kg)", cost: 3900000 }
      ],
      opex: [
        { item: "Primary Drying & Sieve Grading Labor at Hubs", cost: 120000 },
        { item: "Logistics & Transport (Farm-gate collection to clusters)", cost: 150000 },
        { item: "Manual Popping Job-Work Fees (11,700 kg popped @ Rs. 35/kg)", cost: 409500 },
        { item: "Custom Branding & High-Barrier Pouch Packaging", cost: 120000 },
        { item: "Warehouse Rental & General Hub Overheads", cost: 150000 }
      ],
      revenue: [
        { grade: "Premium Popped Makhana (Grade-A, 8,000 kg)", pricePerKg: 550, total: 4400000 },
        { grade: "Standard Popped Makhana (Grade-B, 3,000 kg)", pricePerKg: 400, total: 1200000 },
        { grade: "Broken Makhana / Phulla (Grade-C, 700 kg)", pricePerKg: 200, total: 140000 },
        { grade: "Makhana Shell Waste (Mulching / Bio-fuel, 18,000 kg)", pricePerKg: 3, total: 54000 }
      ]
    },
    scalingPhase: {
      title: "5-Ton Fully Mechanized Scaling Phase (Year 3 Onwards)",
      capex: [
        { item: "ICAR Mechanized Popping Machine (Secondary Impact Roaster, 25-30 kg/h)", cost: 800000 },
        { item: "Primary Seed Roasting Machine (100 kg/h throughput, 270 °C)", cost: 140000 },
        { item: "Rotary Nested Grader (180 kg/h throughput, 7 grades)", cost: 250000 },
        { item: "Makhana Seed Washer (120-180 kg/h capacity)", cost: 160000 },
        { item: "Makhana Seed Grader (0.5 t/h with sand sand-suction slurry)", cost: 130000 },
        { item: "Cabinet Seed Dryer (20-30 kg/h capacity, 30-220 °C)", cost: 200000 },
        { item: "Popped Makhana Grader (100 kg/h capacity, 7 grades)", cost: 200000 },
        { item: "Automatic Form, Fill & Seal Machine (6-8 t/day multi-head weigher)", cost: 800000 },
        { item: "Makhana Polishing Unit", cost: 100000 },
        { item: "Warehouse Civil Works & Concrete Drying Slab", cost: 1500000 },
        { item: "15kW Solar Power Micro-Grid with 10kW Battery Grid", cost: 500000 }
      ],
      monthlyOpex: [
        { item: "Electricity & Roaster LDO Fuel Burners", cost: 45000 },
        { item: "Factory Plant Operators & Maintenance Engineers", cost: 120000 },
        { item: "Machinery Maintenance & Depreciation Reserve", cost: 35000 },
        { item: "Bulk Sourcing Raw Seeds (25 Tons/Month @ average ₹130/kg)", cost: 3250000 },
        { item: "Logistics, Haulage & Outward Freight Shipping", cost: 100000 },
        { item: "Branding, Marketing & Export Safety Compliance (FSSAI/EU)", cost: 50000 }
      ]
    }
  },
  pitchDeck: [
    {
      slide: 1,
      label: "Introduction",
      title: "The Swarna Vaidehi Revolution",
      bullets: [
        "Project: Elite Swarna Vaidehi Makhana Processing Hub in North Bihar.",
        "Authority: Developed under the official scientific framework of ICAR-NRC Makhana, Darbhanga.",
        "Model: Phased transformation from decentralized artisan manual clusters (Y1-2) to full automation (Y3).",
        "Digital Link: Direct operational alignment with the Bihar Bazar digital platform (bihar-bazaar.vercel.app)."
      ]
    },
    {
      slide: 2,
      label: "The Problem",
      title: "Dangers & Value Depletion of Pond Cultivation",
      bullets: [
        "Extreme Danger: Traditional harvesting requires deep diving in 1.5-2.0m ponds, leading to skin diseases and physical injuries.",
        "High Waste: Traditional seed rate is a high 90 kg/ha with massive post-harvest loss due to mold.",
        "Exploitative Channels: Local middlemen ('Arhatiyas') swallow up to 60% of crop value at harvest.",
        "Manual Popping Bottlenecks: Primitive manual popping is slow and restricts volume, limiting value-add scaling."
      ]
    },
    {
      slide: 3,
      label: "The Solution",
      title: "The High-Efficiency Integrated 'Makhana Hub'",
      bullets: [
        "Field Agronomy: Moving cultivation to shallow bunded agricultural fields (30-45 cm depth) for safe harvesting.",
        "Low Seed Sowing: Seed rate slashed to just 20 kg/ha via organized nursery propagation.",
        "Lean Bootstrapping: Outsourcing popping in Y1-2 to skilled Mallah artisan families at ₹35/kg popped.",
        "Premium Functional Food: Grounding phulla into weaning baby food and low-GI pasta."
      ]
    },
    {
      slide: 4,
      label: "Scientific Superiority",
      title: "Swarna Vaidehi: The Elite Field Variety",
      bullets: [
        "Double Yields: 3.0 - 3.5 Tons / Hectare of raw seeds vs pond average of 1.4 Tons.",
        "Notified Elite Seed: Certified by CVRC on 30.07.2022 (first released on 15.11.2013).",
        "Optimal Spacing: Standard row-spacing of 1.20 m in shallow clay bunded agricultural fields.",
        "Thick Shells: Rich secondary nutrition (S, Zn, Mg, B) guarantees heavy, uniform shells for high popping."
      ]
    },
    {
      slide: 5,
      label: "Procurement & Quality Control",
      title: "Preservation & nested rotary grading",
      bullets: [
        "Regional Sourcing: Collection hubs in Darbhanga (Center), Madhubani (North), and Purnia (East).",
        "Aflatoxin Control: Washing and sun-drying on 250 GSM HDPE sheets to hit precise 12-14% moisture.",
        "Rotary nested Drum Grader: Sizing seeds at 180 kg/h into 5 distinct grades (0.7 cm to 1.4 cm).",
        "Roasting Alignment: Sized seeds ensure even roasting at 270 °C without burning, boosting popped yield."
      ]
    },
    {
      slide: 6,
      label: "Value-Added Chemistry",
      title: "Premium Functional Superfoods",
      bullets: [
        "Makhana Ragi Cookies: Rich in Glutamine, Arginine, Methionine and Calcium (160mg/100g) with 58% margin.",
        "Weaning Baby Food (Shishu Aahar): Hypoallergenic blend with 1.2:1 Ca:P ratio for bone growth (62% margin).",
        "Low-GI Starch Pasta: Extruded cold-gelatinized high-amylose pasta for diabetic markets (52% margin).",
        "Perisperm Core Value: Capitalizing on the starchy core's low fat (0.1%) and high digestible protein (10-12%)."
      ]
    },
    {
      slide: 7,
      label: "DPR Financials",
      title: "Year-1 Aggregated Returns",
      bullets: [
        "1-Ha Cultivation Model: Cultivation cost of ₹1,20,000 yields ₹4,20,000 in raw seed sales (₹3,00,000 profit).",
        "30-Ton Sourced Hub: Sourcing & processing OPEX of ₹48,49,500 yields ₹57,94,00,000 in popped makhana revenue.",
        "Net Processing Profit: ₹9,44,500 achieved in Year 1.",
        "Consolidated Profit: **₹12,44,500** net return in Y1 with **zero initial machinery CAPEX**."
      ]
    },
    {
      slide: 8,
      label: "The 5-Year Scaling Roadmap",
      title: "Artisan Clusters to Full Automation",
      bullets: [
        "Year 1-2: Establish manual processing hubs, secure organic certificates, and expand sourcing.",
        "Year 3: Raise institutional funding to build a 5-ton/day fully mechanized popping plant.",
        "Year 4: Launch direct-to-consumer brand lines and expand product lines.",
        "Year 5: Secure international export markets (US, EU, GCC) and achieve circular zero-waste."
      ]
    },
    {
      slide: 9,
      label: "Risk & Climate Resilience",
      title: "Engineering Field-Based Security",
      bullets: [
        "Water Scarcity: Deploying solar-powered pump setups for rapid, precise field filling and drainage.",
        "Bund Preservation: Clay-lined high-bunding to prevent seepage and soil erosion during heavy monsoons.",
        "Biological Threat: Integrated biological pest control using Trichoderma viride and organic botanical repellents.",
        "Financial Protection: Crop insurance and pricing contracts to guard against seasonal market volatility."
      ]
    },
    {
      slide: 10,
      label: "Digital Integration",
      title: "Direct Listing on Bihar Bazar Platform",
      bullets: [
        "Direct Link: Seamless operational integration with the Bihar Bazar platform (bihar-bazaar.vercel.app).",
        "Empowerment: Bypassing local literacy gaps via an intuitive, voice-enabled, and SMS-triggered buyback portal.",
        "Fair Pricing: Providing real-time price discovery based on seed size grades, ensuring complete transparency.",
        "Traceability: QR-code tracking from North Bihar fields directly to premium international consumer packages."
      ]
    },
    {
      slide: 11,
      label: "Government Subsidies",
      title: "Scheme & Capital Alignment",
      bullets: [
        "PMFME Scheme: Securing a 35% capital subsidy (up to ₹10 Lakhs ceiling) for post-harvest food processing.",
        "Agriculture Infrastructure Fund: 3% interest subvention on credit facilities up to ₹2 Crores.",
        "Mudra Loan: Utilizing Shishu and Tarun credit lines for low-interest, collateral-free Year-1 working capital.",
        "Bihar Industrial Incentive Policy: Claiming additional state-level electricity and employment tax rebates."
      ]
    },
    {
      slide: 12,
      label: "The Ask & Returns",
      title: "Funding & Investment Proposition",
      bullets: [
        "Capital Ask: Seeking ₹50 Lakhs institutional funding (mixture of 70% bank debt and 30% founder equity/subsidy).",
        "Project Returns: Projected 5-Year Financial IRR of 38.6% with a comfortable Payback Period of just 2.4 years.",
        "Socio-Economic Impact: Creating stable employment for 120+ rural women and direct income growth for 250+ smallholder farmers.",
        "Exit Strategy: Highly attractive acquisition target for fast-growing national agritech platforms."
      ]
    }
  ],
  excellenceAnalysis: {
    ifsComparison: {
      title: "Integrated Farming System (IFS) vs Traditional Monoculture",
      description: "Comparison of a 1-Hectare field setup managed as a pure Makhana monoculture vs an Integrated Farming System combining Makhana, Indian Carps (Catla, Rohu, Mrigal), and Water Chestnut.",
      table: [
        { metric: "Water Depth Maintenance", monoculture: "30 - 45 cm (Shallow)", ifs: "50 - 60 cm (Optimized for fish movement)" },
        { metric: "Primary Makhana Yield", monoculture: "2,800 kg/ha", ifs: "2,600 kg/ha (Slightly lower due to fish channels)" },
        { metric: "Carps Fish Yield", monoculture: "0 kg (None)", ifs: "1,200 kg/ha (Synergistic carp growth)" },
        { metric: "Water Chestnut Yield", monoculture: "0 kg (None)", ifs: "3,000 kg/ha (Secondary winter crop)" },
        { metric: "Total Operational Cost", monoculture: "Rs. 1,20,000", ifs: "Rs. 1,80,000 (Includes fish fingerlings & seeds)" },
        { metric: "Total Gross Revenue", monoculture: "Rs. 4,20,000", ifs: "Rs. 7,30,000 (Makhana: ₹3.9L + Fish: ₹2.2L + Chestnut: ₹1.2L)" },
        { metric: "Net Farm Profit", monoculture: "Rs. 3,00,000", ifs: "Rs. 5,50,000 (An 83% increase in per-hectare profit)" }
      ]
    },
    organicSourcing: [
      { input: "Neem Cake (250 kg/ha)", purpose: "Basal dressing during soil prep, naturally suppressing root-knot nematodes and wireworms, eliminating toxic synthetic chemistry." },
      { input: "Azolla Pinata", purpose: "Floating nitrogen-fixing bio-fertilizer grown alongside Euryale ferox, reducing chemical urea nitrogen dependence by 40%." },
      { input: "Trichoderma Viride", purpose: "Spore powder seed treatment (5g/kg seed) to prevent damping-off and root rot diseases." },
      { input: "Garlic-Chilli botanical sprays", purpose: "Home-brewed botanical spray applied at 15-day intervals, highly effective against aphids and case worms without toxic residues." }
    ],
    exportPositioning: [
      { market: "United States (US)", demand: "High demand for clean organic popped makhana snacking in health chains like Whole Foods, yielding an 85% price premium.", pricePremium: "+85% Premium" },
      { market: "European Union (EU)", demand: "Requires strict compliance with pesticide limits and aflatoxins (< 2 ppb). Yields a massive 110% price premium.", pricePremium: "+110% Premium" },
      { market: "Middle East (GCC)", demand: "Bulk makhana kernels used for premium culinary ingredients and luxury snacking. Returns a 45% price premium.", pricePremium: "+45% Premium" }
    ]
  }
};
