// Swarna Vaidehi Agri-AI Advisor - Client-Side Intelligent Dialog Engine
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById("chatbot-trigger");
  const cbWindow = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("cb-close");
  const input = document.getElementById("chatbot-input");
  const messagesContainer = document.getElementById("chatbot-messages");

  // Toggle Chatbot window
  trigger.addEventListener("click", () => {
    cbWindow.classList.toggle("active");
    scrollToBottom();
  });

  closeBtn.addEventListener("click", () => {
    cbWindow.classList.remove("active");
  });

  // Global access to ask questions
  window.askChatbot = (question) => {
    addUserMessage(question);
    respondToQuery(question);
  };

  window.submitChatQuery = () => {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    addUserMessage(text);
    respondToQuery(text);
  };

  function addUserMessage(text) {
    const msg = document.createElement("div");
    msg.className = "cb-msg user";
    msg.textContent = text;
    messagesContainer.appendChild(msg);
    scrollToBottom();
  }

  function addBotMessage(htmlContent) {
    const msg = document.createElement("div");
    msg.className = "cb-msg bot";
    msg.innerHTML = htmlContent;
    messagesContainer.appendChild(msg);
    scrollToBottom();
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // NLP Semantic Router
  function respondToQuery(query) {
    const q = query.toLowerCase();
    let reply = "";

    // 1. FINANCIALS & PROFITS
    if (q.includes("profit") || q.includes("revenue") || q.includes("dpr") || q.includes("financial") || q.includes("money") || q.includes("ledger") || q.includes("returns")) {
      reply = `
        <strong>📊 Financial DPR Projections (Year 1):</strong><br/>
        • <strong>1-Ha Field Cultivation:</strong> OPEX of ₹1,20,000 returns ₹4,20,000 in raw seed sales, generating a net profit of <strong>₹3,00,000 / hectare</strong>.<br/>
        • <strong>30-Ton Sourced Processing Hub:</strong> Sourcing and logistics OPEX of ₹48,49,500 yields ₹57,94,000 in popped/waste sales, generating a net processing profit of <strong>₹9,44,500</strong>.<br/>
        • <strong>Consolidated Year-1 Profit:</strong> <strong>₹12,44,500</strong> achieved with <strong>zero machinery CAPEX</strong> (by outsourcing popping to skilled manual clusters paid at ₹35/kg).<br/>
        • <strong>Year-3 Mechanized Scale:</strong> Projected 5-Year IRR of <strong>38.6%</strong> with a payback of <strong>2.4 years</strong>.
      `;
    }
    // 2. AGRONOMY & SEED RATE
    else if (q.includes("seed rate") || q.includes("sowing") || q.includes("nursery") || q.includes("cultivation") || q.includes("variety") || q.includes("agronomy") || q.includes("swarna vaidehi") || q.includes("grow") || q.includes("spacing")) {
      reply = `
        <strong>🌱 Swarna Vaidehi Agronomical Protocol:</strong><br/>
        • <strong>Gazette Status:</strong> First released on 15.11.2013, notified in the CVRC Gazette on <strong>30.07.2022</strong>.<br/>
        • <strong>Seed Sowing Rate:</strong> Broadcasts just <strong>20 kg/ha</strong> in a 500 m²/ha nursery bed (slashes traditional 90 kg/ha pond requirements). Sowing is done between November and March.<br/>
        • <strong>Transplanting:</strong> Seedlings are transplanted at <strong>75 days old</strong> (February-March) at a standard grid spacing of <strong>1.20 m x 1.20 m</strong>.<br/>
        • <strong>Harvesting:</strong> Swept standing up using bamboo 'Gaanj' screen nets at **135 to 150 days post-transplanting** (July-August). Yield ranges from <strong>3.0 to 3.5 t/ha</strong>.
      `;
    }
    // 3. WATER DEPTH & SAFETY
    else if (q.includes("water") || q.includes("depth") || q.includes("pond") || q.includes("shallow") || q.includes("danger") || q.includes("hazard") || q.includes("safety") || q.includes("seepage")) {
      reply = `
        <strong>🌊 Shallow-Field Water & Safety:</strong><br/>
        • <strong>Depth Maintenance:</strong> Kept at strictly **30 - 45 cm** compared to traditional 1.5 - 2.0 m deep ponds. Saves 80% water.<br/>
        • <strong>Physical Safety:</strong> Completely removes the severe diving hazards, skin diseases, and respiratory infections associated with unorganized pond harvesting. Workers stand upright at harvest.<br/>
        • <strong>Bund Integrity:</strong> Perimeter bunds are lined with heavy clay soil to prevent lateral seepage, maintaining precise moisture levels through solar pumps.
      `;
    }
    // 4. NUTRIENTS & NPK
    else if (q.includes("npk") || q.includes("nutrient") || q.includes("fertilizer") || q.includes("nutrition") || q.includes("boron") || q.includes("zinc") || q.includes("magnesium") || q.includes("sulfur") || q.includes("copper")) {
      reply = `
        <strong>🧪 Soil Nutrition & Nutrient Recipe:</strong><br/>
        • <strong>Primary NPK:</strong> **100:60:40 NPK kg/ha** split doses combined with **10 t/ha Farm Yard Manure (FYM)** as basal dressing.<br/>
        • <strong>Secondary & Micro-nutrients:</strong><br/>
          - <em>Sulphur (S):</em> 20 kg/ha (boosts amino acids).<br/>
          - <em>Zinc (Zn):</em> 5 kg/ha (promotes chlorophyll).<br/>
          - <em>Magnesium (Mg):</em> 5 kg/ha (aids leaf enlargement).<br/>
          - <em>Boron (B):</em> 5 kg/ha (crucial for shell thickness).<br/>
          - <em>Foliar Spray:</em> 0.1% CuSO4 solution spray to eliminate physiological chlorosis.
      `;
    }
    // 5. INSECTS & PEST CONTROL
    else if (q.includes("pest") || q.includes("insect") || q.includes("aphid") || q.includes("beetle") || q.includes("borer") || q.includes("ipm") || q.includes("chlorantraniliprole") || q.includes("metarhizium") || q.includes("neem") || q.includes("biological")) {
      reply = `
        <strong>🐛 Integrated Pest Management (IPM):</strong><br/>
        • <strong>Makhana Aphids (*Rhopalosiphum nymphaeae*):</strong> Managed via Coccinellid beetles or biological mycological sprays of *Metarhizium anisopliae* or *Beauveria bassiana* (@ 1x10^8 cfu/g), 1% Neem oil, or Flonicamid 50% WG @ 0.4 g/L.<br/>
        • <strong>Root Borer (*Donacia delesserti*) Grubs:</strong> Controlled using granular **Chlorantraniliprole 0.4% GR @ 6 kg/acre** applied directly to standing water.<br/>
        • <strong>Singhara Beetle leaf-perforators:</strong> Managed organically or via targeted foliar spray of Chlorantraniliprole 18.5 SC @ 0.3 mL/L.
      `;
    }
    // 6. VALUE ADDED PRODUCTS
    else if (q.includes("product") || q.includes("value") || q.includes("cookies") || q.includes("pasta") || q.includes("baby food") || q.includes("shishu aahar") || q.includes("biscuits")) {
      reply = `
        <strong>🍪 Value-Added Product Innovations:</strong><br/>
        • <strong>Makhana Ragi Cookies (58% Margin):</strong> Blends 35% micronized Euryale perisperm flour and finger millet. Rich in calcium (160mg/100g) and amino acids (Glutamine, Arginine).<br/>
        • <strong>Shishu Aahar baby food (62% Margin):</strong> Weaning flour blending makhana perisperm (45%), decorticated green gram (30%), and ragi (25%). Retains a perfect **1.2:1 Ca:P ratio** optimized for infant bone growth.<br/>
        • <strong>Low-GI Functional Pasta (52% Margin):</strong> Extruded semolina pasta with 50% cold-gelatinized Euryale resistant amylose starch. GI kept below 50.
      `;
    }
    // 7. SIZING, ROASTING & MANUAL POPPING
    else if (q.includes("popping") || q.includes("roasting") || q.includes("grader") || q.includes("sieve") || q.includes("mallah") || q.includes("size") || q.includes("drying") || q.includes("aflatoxin")) {
      reply = `
        <strong>🔥 Post-Harvest Grading & Popping:</strong><br/>
        • <strong>Aflatoxin Prevention:</strong> raw seeds are spread over 250 GSM HDPE sheets and dried to **12-14% moisture** (viability lasts up to 10 months).<br/>
        • <strong>Nested Grader:</strong> Sized at 180 kg/h into 5 grades to ensure uniform roasting heat absorption at **270 °C** (prevents burning).<br/>
        • <strong>Artisan Clusters:</strong> Graded seeds are double-roasted and hand-malleted by skilled Mallah families on a job-work basis paid at **₹35/kg popped**, creating rural jobs and bypassing machinery CAPEX in Year 1-2.
      `;
    }
    // 8. MACHINERY & CAPEX
    else if (q.includes("machine") || q.includes("capex") || q.includes("solar") || q.includes("dryer") || q.includes("washer") || q.includes("investment") || q.includes("funding")) {
      reply = `
        <strong>⚙️ Year-3 Automated Scaling CAPEX (₹48,50,000 Total):</strong><br/>
        • <em>Secondary Impact Popping Machine (25-30 kg/h):</em> ₹8,00,000<br/>
        • <em>Primary Seed Roasting Machine (100 kg/h):</em> ₹1,40,000<br/>
        • <em>Rotary Nested Grader (180 kg/h, 7 grades):</em> ₹2,50,000<br/>
        • <em>Makhana Seed Washer (120-180 kg/h):</em> ₹1,60,000<br/>
        • <em>Cabinet Seed Dryer (20-30 kg/h):</em> ₹2,00,000<br/>
        • <em>Automatic Packing Machine (multi-head FFS):</em> ₹8,00,000<br/>
        • <em>15kW Solar Rooftop battery Micro-Grid:</em> ₹5,00,000<br/>
        • <em>Factory Civil Works & sorting concrete floor:</em> ₹15,00,000
      `;
    }
    // 9. INTEGRATED FARMING SYSTEM (IFS)
    else if (q.includes("ifs") || q.includes("integrated") || q.includes("fish") || q.includes("chestnut") || q.includes("singhara") || q.includes("major carps") || q.includes("co-culture")) {
      reply = `
        <strong>🐟 Integrated Farming System (IFS) co-culture:</strong><br/>
        • <strong>Setup:</strong> Depth raised to 50-60 cm to allow fish movement. Indian Major Carps (Rohu, Catla, Mrigal) stocked in March-April.<br/>
        • <strong>Secondary Crop:</strong> Water Chestnut (Singhara) grown in winter (July-Nov), yielding 3,000 kg/ha.<br/>
        • <strong>Carp Yield:</strong> **1,200 kg/ha** fish harvested in Dec.<br/>
        • <strong>IFS Net Farm Profit:</strong> **₹5,50,000 / Hectare** (compares to ₹3,00,000 under makhana monoculture alone — an **83% increase in per-hectare profit**).
      `;
    }
    // 10. GOVERNMENT SCHEMES & SUBSIDIES
    else if (q.includes("subsidy") || q.includes("scheme") || q.includes("government") || q.includes("pmfme") || q.includes("mudra") || q.includes("aif") || q.includes("tax")) {
      reply = `
        <strong>🏛️ Government Subsidies & Schemes:</strong><br/>
        • <strong>PMFME Scheme:</strong> Secures a **35% capital subsidy** (capped at a ceiling of ₹10 Lakhs) for micro food processing scaling.<br/>
        • <strong>Agriculture Infrastructure Fund (AIF):</strong> Provides a **3% interest subvention** on long-term project loans up to ₹2 Crores.<br/>
        • <strong>Mudra Bank Loan:</strong> Zero-collateral low-interest Tarun and Kishor credit lines to fund Year-1 working capital seed sessional purchases.
      `;
    }
    // 11. EXPORTS & BIHAR BAZAR
    else if (q.includes("export") || q.includes("us") || q.includes("eu") || q.includes("gcc") || q.includes("bihar bazaar") || q.includes("link") || q.includes("bazaar")) {
      reply = `
        <strong>🌎 Export & Digital Buyback Integration:</strong><br/>
        • <strong>Export Pricing Premiums:</strong> Organic makhana yields **85% premium in the US** and **110% premium in the EU** (under pesticide & < 2 ppb aflatoxin compliance).<br/>
        • <strong>Bihar Bazar integration (bihar-bazaar.vercel.app):</strong> Direct buyback catalog listing. Bypasses literacy gaps through voice and SMS triggers. Provides QR-enabled organic traceability back to the specific North Bihar fields.
      `;
    }
    // DEFAULT GREETINGS / NOT FOUND
    else {
      reply = `
        I'm not completely sure about that. Ask me something like:<br/>
        • "What is the Year 1 net profit?"<br/>
        • "Explain the Swarna Vaidehi seed rate."<br/>
        • "How does the IFS co-culture comparison work?"<br/>
        • "Show automated machinery CAPEX."<br/>
        • "What biological agents protect Euryale from aphids?"
      `;
    }

    // Simulate thinking delay
    setTimeout(() => {
      addBotMessage(reply);
    }, 400);
  }
});
