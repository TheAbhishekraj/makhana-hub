document.addEventListener("DOMContentLoaded", () => {
  renderCultivationGuide();
  renderLogisticsPipeline();
  renderFinancialDPR();
  renderPitchDeck();
  renderExcellenceAnalysis();
});

function renderCultivationGuide() {
  const container = document.getElementById("s1-content");
  if (!container) return;

  let html = `
    <div class="highlight-box green">
      <div class="hb-title">🌿 The Swarna Vaidehi Paradigm</div>
      <p>Developed by the <strong>ICAR-National Research Centre for Makhana, Darbhanga</strong>, "Swarna Vaidehi" is a breakthrough variety designed specifically for field-based cultivation (rather than traditional deep-water ponds). This variety offers highly uniform seed sizes, thicker shells that yield superior popping expansions, and exceptionally high yield stability under shallow agricultural field systems.</p>
    </div>
    
    <div class="sub-h">Scientific Agronomy Parameters</div>
    <div class="card-grid">
  `;

  makhanaData.scientificCultivation.parameters.forEach(param => {
    html += `
      <div class="card">
        <div class="tag green" style="width: fit-content; margin-bottom: 0.5rem;">Parameter</div>
        <div class="card-title">${param.name}</div>
        <div class="metric-val" style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--green-400);">${param.value}</div>
        <div class="card-body">${param.detail}</div>
      </div>
    `;
  });

  html += `
    </div>
    
    <div class="sub-h">Value-Added Product Engineering & Chemistry</div>
    <div class="card-grid">
  `;

  makhanaData.scientificCultivation.byProducts.forEach(prod => {
    html += `
      <div class="card accent">
        <div class="tag gold" style="width: fit-content; margin-bottom: 0.5rem;">${prod.margin}</div>
        <div class="card-title" style="font-size: 1.1rem; color: var(--white);">${prod.name}</div>
        <p class="card-body" style="margin-bottom: 0.75rem; font-size: 0.85rem;"><strong>Chemistry:</strong> ${prod.chemistry}</p>
        <p class="card-body" style="font-size: 0.85rem;"><strong>Target Market:</strong> ${prod.targetMarket}</p>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function renderLogisticsPipeline() {
  const container = document.getElementById("s2-content");
  if (!container) return;

  let html = `
    <div class="highlight-box gold">
      <div class="hb-title">🚚 Geographic Cluster Architecture</div>
      <p>To eliminate expensive transport overheads and preserve raw seed viability, our logistics pipeline splits functions across North Bihar's premier makhana districts. By using localized sun-drying and manual popping clusters initially, we bypass heavy capital setup expenses while generating massive direct rural employment.</p>
    </div>

    <div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  `;

  makhanaData.logisticsPipeline.hubs.forEach(hub => {
    html += `
      <div class="card green">
        <div class="tag blue" style="width: fit-content; margin-bottom: 0.5rem;">District Node</div>
        <div class="card-title" style="font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
          📍 ${hub.district}
        </div>
        <div class="card-body" style="margin-top: 0.5rem;">
          <p style="color: var(--white); margin-bottom: 0.25rem;"><strong>Operational Role:</strong> ${hub.role}</p>
          <p>${hub.focus}</p>
        </div>
      </div>
    `;
  });

  html += `
    </div>

    <div class="sub-h">Farm-Gate to Popping Workflow Timeline</div>
    <div class="timeline">
  `;

  makhanaData.logisticsPipeline.workflowSteps.forEach(step => {
    html += `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-phase">${step.phase}</div>
        <div class="tl-title">${step.title}</div>
        <div class="tl-body">
          <p style="margin-bottom: 0.35rem;">${step.description}</p>
          <p class="mono" style="color: var(--gold-400); font-weight: 600;">Standard Specifications: ${step.pricing}</p>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function renderFinancialDPR() {
  const container = document.getElementById("s3-content");
  if (!container) return;

  let html = `
    <div class="highlight-box blue">
      <div class="hb-title">📊 Detailed Project Report (DPR) Framework</div>
      <p>This DPR is structured to meet standard institutional banking criteria (NABARD, PMFME, and Mudra Bank). The model shows how a net profit of over Rs. 10 Lakhs is achieved in Year 1 through bootstrapped manual processing clusters with zero machinery CAPEX. Future 5-ton mechanized scaling phase details are provided separately below.</p>
    </div>
  `;

  // Cultivation Model
  const cult = makhanaData.financials.cultivationModel;
  let totalCultOpex = cult.opex.reduce((acc, curr) => acc + curr.cost, 0);
  let totalCultRev = cult.revenue.reduce((acc, curr) => acc + curr.total, 0);
  let netCultProfit = totalCultRev - totalCultOpex;

  html += `
    <div class="sub-h">${cult.title}</div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Expense Category / Operational Item</th>
            <th style="text-align: right;">Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
  `;

  cult.opex.forEach(item => {
    html += `
      <tr>
        <td class="td-label">${item.item}</td>
        <td class="mono" style="text-align: right;">₹${item.cost.toLocaleString()}</td>
      </tr>
    `;
  });

  html += `
          <tr class="table-section-header">
            <td>Operational Revenue (Yield of 2.8 Tons / Hectare)</td>
            <td style="text-align: right;">Revenue (INR)</td>
          </tr>
  `;

  cult.revenue.forEach(item => {
    html += `
      <tr>
        <td class="td-label">${item.product} (${item.yieldKg} kg @ ₹${item.ratePerKg}/kg)</td>
        <td class="mono" style="text-align: right; color: var(--green-400);">₹${item.total.toLocaleString()}</td>
      </tr>
    `;
  });

  html += `
          <tr style="border-top: 2px solid rgba(255,255,255,.15); background: rgba(0,0,0,.3);">
            <td class="td-total">Total Cultivation Expense (OPEX)</td>
            <td class="mono td-total" style="text-align: right;">₹${totalCultOpex.toLocaleString()}</td>
          </tr>
          <tr style="background: rgba(22,163,74,.1);">
            <td class="td-profit">Net Cultivator Profit per Hectare</td>
            <td class="mono td-profit" style="text-align: right;">₹${netCultProfit.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // Processing Ledger
  const proc = makhanaData.financials.processingLedger;
  let totalProcProcure = proc.procurement.reduce((acc, curr) => acc + curr.cost, 0);
  let totalProcOpex = proc.opex.reduce((acc, curr) => acc + curr.cost, 0);
  let totalProcCost = totalProcProcure + totalProcOpex;
  let totalProcRev = proc.revenue.reduce((acc, curr) => acc + curr.total, 0);
  let netProcProfit = totalProcRev - totalProcCost;

  html += `
    <div class="sub-h">${proc.title}</div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Operational Item / Cost Category</th>
            <th style="text-align: right;">Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
  `;

  proc.procurement.forEach(item => {
    html += `
      <tr>
        <td class="td-label" style="color: var(--gold-400);">${item.item}</td>
        <td class="mono" style="text-align: right; color: var(--gold-400);">₹${item.cost.toLocaleString()}</td>
      </tr>
    `;
  });

  proc.opex.forEach(item => {
    html += `
      <tr>
        <td class="td-label">${item.item}</td>
        <td class="mono" style="text-align: right;">₹${item.cost.toLocaleString()}</td>
      </tr>
    `;
  });

  html += `
          <tr class="table-section-header">
            <td>Revenue breakdown (Output Popping Recovery Rate: 39%)</td>
            <td style="text-align: right;">Revenue (INR)</td>
          </tr>
  `;

  proc.revenue.forEach(item => {
    html += `
      <tr>
        <td class="td-label">${item.grade}</td>
        <td class="mono" style="text-align: right; color: var(--green-400);">₹${item.total.toLocaleString()}</td>
      </tr>
    `;
  });

  html += `
          <tr style="border-top: 2px solid rgba(255,255,255,.15); background: rgba(0,0,0,.3);">
            <td class="td-total">Total Processing & Procurement Expense</td>
            <td class="mono td-total" style="text-align: right;">₹${totalProcCost.toLocaleString()}</td>
          </tr>
          <tr style="background: rgba(22,163,74,.1);">
            <td class="td-profit">Net Hub Processing Profit (Year 1)</td>
            <td class="mono td-profit" style="text-align: right;">₹${netProcProfit.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="highlight-box green" style="margin-top: 1.5rem;">
      <div class="hb-title">📈 Consolidated Year-1 Net Profit: ₹${(netCultProfit + netProcProfit).toLocaleString()}</div>
      <p>By conducting <strong>1-Hectare self-cultivation (₹${netCultProfit.toLocaleString()} profit)</strong> and managing the <strong>Decentralized Processing Hub (₹${netProcProfit.toLocaleString()} profit)</strong>, the aggregate bootstrapped net profit reaches <strong>₹${(netCultProfit + netProcProfit).toLocaleString()}</strong> in Year 1. This meets the strategic objective of over ₹10 Lakhs with zero initial machinery purchases.</p>
    </div>
  `;

  // Scaling Phase
  const scale = makhanaData.financials.scalingPhase;
  let totalCapex = scale.capex.reduce((acc, curr) => acc + curr.cost, 0);
  let totalMonthlyOpex = scale.monthlyOpex.reduce((acc, curr) => acc + curr.cost, 0);

  html += `
    <div class="sub-h">${scale.title}</div>
    <div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
      <div class="card accent">
        <div class="tag gold" style="width: fit-content; margin-bottom: 0.5rem;">Investment CAPEX</div>
        <div class="card-title" style="font-size: 1.25rem;">Total Required CAPEX: ₹${totalCapex.toLocaleString()}</div>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem; font-size: 0.85rem; color: var(--slate-400);">
  `;

  scale.capex.forEach(item => {
    html += `<li style="margin-bottom: 0.25rem;">${item.item}: <strong style="color: var(--white);">₹${item.cost.toLocaleString()}</strong></li>`;
  });

  html += `
        </ul>
      </div>

      <div class="card green">
        <div class="tag green" style="width: fit-content; margin-bottom: 0.5rem;">Operational monthly OPEX</div>
        <div class="card-title" style="font-size: 1.25rem;">Est. Monthly OPEX: ₹${totalMonthlyOpex.toLocaleString()}</div>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem; font-size: 0.85rem; color: var(--slate-400);">
  `;

  scale.monthlyOpex.forEach(item => {
    html += `<li style="margin-bottom: 0.25rem;">${item.item}: <strong style="color: var(--white);">₹${item.cost.toLocaleString()}</strong></li>`;
  });

  html += `
        </ul>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function renderPitchDeck() {
  const container = document.getElementById("s4-content");
  if (!container) return;

  let html = `
    <div class="highlight-box gold">
      <div class="hb-title">🎬 Investor Pitch Deck Script (12 Slides)</div>
      <p>This master script is optimized for pitch presentations to agricultural venture funds, institutional banks, and state subsidy agencies (PMFME, Mudra, NABARD). Slide-by-slide breakdowns are detailed below.</p>
    </div>

    <div class="slide-grid">
  `;

  makhanaData.pitchDeck.forEach(slide => {
    html += `
      <div class="slide-card" data-slide="${slide.slide}">
        <div class="slide-label">Slide ${slide.slide}: ${slide.label}</div>
        <div class="slide-title">${slide.title}</div>
        <div class="slide-body">
          <ul style="padding-left: 1.1rem;">
    `;

    slide.bullets.forEach(bullet => {
      html += `<li style="margin-bottom: 0.4rem;">${bullet}</li>`;
    });

    html += `
          </ul>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function renderExcellenceAnalysis() {
  const container = document.getElementById("s5-content");
  if (!container) return;

  const ifs = makhanaData.excellenceAnalysis.ifsComparison;

  let html = `
    <div class="highlight-box green">
      <div class="hb-title">🌾 Integrated Farming Systems (IFS) vs Monoculture</div>
      <p>${ifs.description}</p>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Operational Metric / Yield Component</th>
            <th>Traditional Field Monoculture</th>
            <th>Makhana + Carps + Water Chestnut IFS</th>
          </tr>
        </thead>
        <tbody>
  `;

  ifs.table.forEach(row => {
    let highlightClass = "";
    if (row.metric.includes("Net Farm Profit")) {
      highlightClass = 'style="background: rgba(74,222,128,.1); font-weight: 700; color: var(--green-400);"';
    } else if (row.metric.includes("Chestnut Yield") || row.metric.includes("Carps Fish Yield")) {
      highlightClass = 'style="color: var(--gold-400);"';
    }

    html += `
      <tr ${highlightClass}>
        <td class="td-label">${row.metric}</td>
        <td>${row.monoculture}</td>
        <td><strong>${row.ifs}</strong></td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>

    <div class="sub-h">Organic & Botanical Nutrient Sourcing</div>
    <div class="card-grid">
  `;

  makhanaData.excellenceAnalysis.organicSourcing.forEach(item => {
    html += `
      <div class="card">
        <div class="tag green" style="width: fit-content; margin-bottom: 0.5rem;">Organic Input</div>
        <div class="card-title">${item.input}</div>
        <div class="card-body">${item.purpose}</div>
      </div>
    `;
  });

  html += `
    </div>

    <div class="sub-h">Global Export Market Positioning & Premium Margins</div>
    <div class="card-grid">
  `;

  makhanaData.excellenceAnalysis.exportPositioning.forEach(exp => {
    html += `
      <div class="card accent">
        <div class="tag gold" style="width: fit-content; margin-bottom: 0.5rem;">${exp.pricePremium}</div>
        <div class="card-title" style="color: var(--white);">${exp.market} Market</div>
        <div class="card-body">${exp.demand}</div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}
