# 🌿 Swarna Vaidehi Makhana Hub (DPR & Strategic Roadmap)
> **An Elite, NABARD-Compliant, 5-Year Scaling Roadmap & Financial DPR for High-Efficiency Euryale Ferox Cultivation and Value-Addition in North Bihar.**

[![GitHub Repository](https://img.shields.io/badge/Repository-makhana--hub-1B4332?style=for-the-badge&logo=github)](https://github.com/TheAbhishekraj/makhana-hub)
[![Web Dashboard](https://img.shields.io/badge/Live--Dashboard-Interactive-FEFAE0?style=for-the-badge&logo=html5&logoColor=black)](#local-setup)
[![NABARD Compliant](https://img.shields.io/badge/Financial--Model-NABARD%20%26%20PMFME-2D6A4F?style=for-the-badge&logo=microsoft-excel&logoColor=white)](exports/makhana_hub_financial_model.xlsx)
[![ICAR-NRC Certified](https://img.shields.io/badge/Scientific--Framework-ICAR--NRC%20Makhana-86efac?style=for-the-badge&logo=science&logoColor=black)](exports/makhana_hub_strategic_report.pdf)

---

## 📋 Executive Overview

This project represents an institutional-grade strategic plan and bank-ready Detailed Project Report (DPR) developed for a high-efficiency **Makhana (Euryale ferox) Processing Hub** in the North Bihar districts of **Darbhanga, Madhubani, and Purnia**. Anchored on the official research framework of the **ICAR-NRC for Makhana, Darbhanga**, this business model utilizes the CVRC-notified elite variety **"Swarna Vaidehi"** in a shallow, field-based ecosystem.

To minimize initial CAPEX, operations are bootstrapped in Years 1-2 using decentralized manual popping clusters (outsource job-work), generating a consolidated net profit of **₹12,44,500 in Year 1**. In Year 3, upon securing formal institutional funding (PMFME & Mudra backed), the project scales to a **5-ton daily capacity fully mechanized processing line** using official ICAR-developed machinery.

---

## 📈 Financial DPR & Returns Summary

### Consolidated Year-1 Bootstrapped Profits:
*   **1-Hectare Self-Cultivation Net Profit:** **₹3,00,000**
*   **30-Ton Processing Hub Net Profit:** **₹9,44,500** *(Zero initial machinery CAPEX via cluster popping job-work paid @ ₹35/kg)*
*   **Total Consolidated Y1 Profit:** **₹12,44,500**

### Year-3 Automated Scaling Phase:
*   **Total Machinery CAPEX (ICAR Banners Sourced):** **₹48,50,000**
*   **Monthly OPEX (Processing 25 Tons/Month):** **₹36,00,000**
*   **Key Metrics:** Projected 5-Year Financial IRR of **38.6%**; Payback Period of **2.4 years**.

---

## 🔬 Scientific Agronomy & Nutrient Protocol

This roadmap transitions cultivation from hazardous, deep-water natural ponds to safe, shallow ploughed fields:

*   **Elite Variety:** *Swarna Vaidehi* (released on **15.11.2013**, notified in the **CVRC Gazette on 30.07.2022**).
*   **Optimized Seed Sowing:** Nursery sowing between **November and March** in a **500 m²/ha** bed. Slashed seed rate of **20 kg/ha** (pond monoculture requires 90 kg/ha). Seedlings transplanted at **75 days old** in February.
*   **Precision Spacing:** Transplanted into clayey bunded fields at **1.20 m x 1.20 m** grids.
*   **Shallow Water Depth:** Strictly maintained at **30 - 45 cm** (saving 80% water and allowing safe, standing harvest).
*   **NPK Nutrient Regime:** **100:60:40 NPK kg/ha** + **10 t/ha FYM** basal dressing.
*   **Secondary Micronutrients:** **20 kg/ha Sulphur (S)**, **5 kg/ha Zinc (Zn)**, **5 kg/ha Magnesium (Mg)**, **5 kg/ha Boron (B)**, and a foliar spray of **0.1% CuSO4 solution** for durable seed shell expansion.
*   **Biological Pest IPM:**
    *   *Aphids (Rhopalosiphum nymphaeae L.):* Controlled via Coccinellid beetles or mycological sprays of *Metarhizium anisopliae* or *Beauveria bassiana* (@ 1x10^8 cfu/g), 1% Neem oil, or Flonicamid 50% WG @ 0.4 g/L.
    *   *Root Borer (Donacia delesserti) Grubs:* Controlled using granular **Chlorantraniliprole 0.4% GR @ 6 kg/acre** applied directly to water.

---

## 🐟 Integrated Farming System (IFS) Co-Culture Pond Model

To maximize per-hectare field efficiency, the monoculture setup is compared against an **Integrated Farming System (IFS)**:
*   **Water Depth Adjustment:** Maintained at **50 - 60 cm** to allow fish movement.
*   **Synergistic Carp Stocking:** **1,200 kg/ha** of Indian Major Carps (Catla, Rohu, Mrigal).
*   **Secondary Crop:** **3,000 kg/ha** of premium winter Water Chestnut (Singhara), transplanted in July.
*   **Returns Advantage:** Increases net per-hectare profit from **₹3,00,000** (monoculture) to **₹5,50,000** (IFS) — representing an **83% increase in profitability**.

---

## 📦 Workspace File Manifest

*   `index.html` — Dynamic dashboard with a premium dark-mode, glassmorphic layout. Features an interactive Document Download Center.
*   `style.css` — Core custom stylesheet using Outfit & JetBrains Mono typography, custom gradients, and glassmorphic card patterns.
*   `data.js` — All scientific crop constants, logistics districts, 5-year financials, and pitch presentation slides structured in JSON.
*   `render.js` — Client-side DOM rendering logic, responsive data tables, slide deck components, and the **Agri-AI Chatbot Agent**.
*   `push_to_github.bat` — Automation script that pushes your updates to GitHub, dynamically handling SSH or HTTPS authentication fallbacks.
*   📁 `exports/`
    *   `generate_exports.py` — Python export engine using `openpyxl`, `python-pptx`, and `reportlab`.
    *   `makhana_hub_financial_model.xlsx` — Live Excel financial workbook equipped with uppercase formulas.
    *   `makhana_hub_pitch_deck.pptx` — 12-slide investor pitch deck with built-in slide speaker notes.
    *   `makhana_hub_strategic_report.pdf` — NABARD-compliant print-ready formal strategic report.

---

## 💻 Local Setup & Execution

### 1. Running the Interactive Dashboard locally
Simply open the `index.html` file in any modern web browser by double-clicking it:
```bash
# Or run a local HTTP server
python -m http.server 8080
```
Then navigate to `http://localhost:8080` to experience the glassmorphic analytics.

### 2. Regenerating the Excel, PPT, and PDF Exports
If you modify the scientific or financial figures inside `data.js`, you can regenerate all three files instantly using the Python exporter:
```bash
# Install dependencies
pip install openpyxl python-pptx reportlab

# Execute the export generation engine
python exports/generate_exports.py
```
New updated versions of the files will be compiled inside the `exports/` folder immediately.

### 3. Deploying Live to Vercel
To host your interactive dashboard and download center on a live public link (aligned with your Bihar Bazar deployment pattern):
```bash
# Install Vercel CLI locally
npm install -g vercel

# Deploy the static directory
vercel --prod
```

---

## 🤝 Institutional Acknowledgement
*   **Strategic Liaison:** ICAR-National Research Centre for Makhana, Darbhanga (Bihar, India).
*   **Government Schemes:** Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PMFME), Agriculture Infrastructure Fund (AIF), and Mudra Bank Credit Lines.
*   **Digital Integration Partner:** [Bihar Bazar Platform](https://bihar-bazaar.vercel.app) for smallholder voice/SMS procurement price discovery.
