/**
 * Maharashtra B.Tech Scholarship Portal (MahaDBT Assistant)
 * Pure Vanilla JavaScript Application Controller
 * 100% Front-End Driven (Client-Side Only)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    selectedCategory: "ALL",
    selectedAssistance: "ALL",
    searchQuery: "",
    activeScholarshipId: null,
    checkedDocuments: loadCheckedDocuments()
  };

  // DOM Elements
  const categoryPillsContainer = document.getElementById("category-pills-container");
  const scholarshipsGrid = document.getElementById("scholarships-grid");
  const emptyState = document.getElementById("empty-state");
  const schemesCounter = document.getElementById("schemes-counter");
  const currentCategoryName = document.getElementById("current-category-name");
  const filterStatusTag = document.getElementById("filter-status-tag");
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const resetFiltersBtn = document.getElementById("reset-filters-btn");
  const assistanceButtons = document.querySelectorAll(".assistance-filter-btn");

  // Modal Elements
  const modal = document.getElementById("scholarship-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackTopBtn = document.getElementById("modal-back-top-btn");
  const modalBackBtn = document.getElementById("modal-back-btn");
  const modalTabButtons = document.querySelectorAll(".modal-tab-btn");
  const copyDocsBtn = document.getElementById("copy-docs-btn");
  const printChecklistBtn = document.getElementById("print-checklist-btn");

  // Calculator Elements
  const calcCategory = document.getElementById("calc-category");
  const calcIncome = document.getElementById("calc-income");
  const calcLivingRadios = document.querySelectorAll('input[name="calc-living"]');
  const calcResultBox = document.getElementById("calc-result-box");
  const incomeSlabLabel = document.getElementById("income-slab-label");
  const calcApplyFilterBtn = document.getElementById("calc-apply-filter-btn");

  // FAQ Elements
  const faqsContainer = document.getElementById("faqs-accordion-container");

  // ================= 1. INITIALIZATION =================
  renderCategoryPills();
  renderScholarships();
  renderFaqs();
  updateCalculatorResult();
  setupEventListeners();

  // ================= 2. CATEGORY FILTER PILLS =================
  function renderCategoryPills() {
    if (!categoryPillsContainer) return;
    categoryPillsContainer.innerHTML = "";

    CATEGORIES_CONFIG.forEach(cat => {
      const isSelected = state.selectedCategory === cat.id;
      const count = getCategoryScholarshipCount(cat.id);

      const pill = document.createElement("button");
      pill.type = "button";
      pill.dataset.category = cat.id;
      pill.className = `filter-pill flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
        isSelected
          ? "active bg-govnavy-900 text-white border-govnavy-900 shadow-md ring-2 ring-saffron-500/50"
          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
      }`;

      pill.innerHTML = `
        <span class="text-xs sm:text-sm font-extrabold tracking-tight ${isSelected ? "text-amber-400" : "text-govnavy-900"}">
          ${cat.name}
        </span>
        <span class="text-[10px] mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-500"}">
          ${count} ${count === 1 ? 'Scheme' : 'Schemes'}
        </span>
      `;

      pill.addEventListener("click", () => {
        setCategoryFilter(cat.id);
      });

      categoryPillsContainer.appendChild(pill);
    });
  }

  function getCategoryScholarshipCount(catId) {
    if (catId === "ALL") return SCHOLARSHIP_DATA.length;
    return SCHOLARSHIP_DATA.filter(s => s.category === catId).length;
  }

  function setCategoryFilter(categoryId) {
    state.selectedCategory = categoryId;
    renderCategoryPills();
    renderScholarships();

    const catObj = CATEGORIES_CONFIG.find(c => c.id === categoryId);
    if (currentCategoryName && catObj) {
      currentCategoryName.textContent = catObj.name + (catObj.fullTitle ? ` (${catObj.fullTitle})` : "");
    }
  }

  // ================= 3. SCHOLARSHIP CARDS GRID =================
  function getFilteredScholarships() {
    return SCHOLARSHIP_DATA.filter(item => {
      // Category match
      const categoryMatch = (state.selectedCategory === "ALL" || item.category === state.selectedCategory);

      // Assistance type match
      const assistanceMatch = (state.selectedAssistance === "ALL" || item.assistanceType === state.selectedAssistance);

      // Search keyword match
      const query = state.searchQuery.trim().toLowerCase();
      const searchMatch = !query || 
        item.name.toLowerCase().includes(query) ||
        (item.marathiName && item.marathiName.toLowerCase().includes(query)) ||
        item.department.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)));

      return categoryMatch && assistanceMatch && searchMatch;
    });
  }

  function renderScholarships() {
    if (!scholarshipsGrid) return;
    const filtered = getFilteredScholarships();

    // Update Schemes Counter
    if (schemesCounter) {
      schemesCounter.textContent = `${filtered.length} ${filtered.length === 1 ? 'Scheme' : 'Schemes'}`;
    }

    // Update Filter Status Tag
    if (filterStatusTag) {
      let desc = [];
      if (state.selectedCategory !== "ALL") desc.push(`Category: ${state.selectedCategory}`);
      if (state.selectedAssistance !== "ALL") desc.push(`Type: ${state.selectedAssistance === 'Education' ? 'Tuition & Exam' : 'Hostel & Stay'}`);
      if (state.searchQuery.trim()) desc.push(`Keyword: "${state.searchQuery.trim()}"`);

      filterStatusTag.innerHTML = desc.length > 0
        ? `<span>Filtered by <strong>${desc.join(" + ")}</strong></span>`
        : `<span>Displaying all official technical education schemes</span>`;
    }

    if (filtered.length === 0) {
      scholarshipsGrid.innerHTML = "";
      scholarshipsGrid.classList.add("hidden");
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");
    scholarshipsGrid.classList.remove("hidden");
    scholarshipsGrid.innerHTML = "";

    filtered.forEach((scheme, index) => {
      const card = createScholarshipCard(scheme, index);
      scholarshipsGrid.appendChild(card);
    });
  }

  function createScholarshipCard(scheme, index) {
    const card = document.createElement("article");
    card.className = "scholarship-card bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-slate-300 flex flex-col justify-between overflow-hidden animate-fade-in group";
    card.style.animationDelay = `${Math.min(index * 40, 240)}ms`;

    const isEducation = scheme.assistanceType === "Education";
    const typeBadgeBg = isEducation ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-emerald-50 text-emerald-700 border-emerald-200";
    const typeIcon = isEducation
      ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"/></svg>`
      : `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`;

    card.innerHTML = `
      <!-- Card Top Ribbon & Badges -->
      <div class="p-5 sm:p-6 pb-4">
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="px-2 py-0.5 rounded-md bg-govnavy-900 text-amber-300 font-bold text-[11px] tracking-wide">
              ${scheme.code}
            </span>
            <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-[11px]">
              ${scheme.category}
            </span>
          </div>

          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${typeBadgeBg}">
            ${typeIcon}
            ${scheme.assistanceType}
          </span>
        </div>

        <!-- Scheme Title & Marathi Subtitle -->
        <h3 class="text-base sm:text-lg font-bold text-govnavy-900 group-hover:text-saffron-600 transition leading-snug">
          ${scheme.name}
        </h3>
        ${scheme.marathiName ? `<p class="text-xs text-slate-500 font-marathi mt-1 leading-tight">${scheme.marathiName}</p>` : ''}

        <!-- Department info -->
        <div class="flex items-center gap-1.5 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
          <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          <span class="truncate" title="${scheme.department}">${scheme.department}</span>
        </div>

        <!-- Short Description -->
        <p class="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
          ${scheme.shortDescription}
        </p>
      </div>

      <!-- Card Key Perks & Action Button -->
      <div class="p-5 sm:p-6 pt-0 space-y-4">
        <!-- Highlights Box -->
        <div class="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 text-xs">
          <div class="flex items-center justify-between text-slate-700">
            <span class="text-slate-500 font-medium">Income Limit:</span>
            <span class="font-bold text-slate-900">${scheme.maxIncomeLimit ? `Up to ₹${(scheme.maxIncomeLimit/100000).toFixed(1)} Lakhs` : 'ARA Criteria'}</span>
          </div>
          <div class="flex items-center justify-between text-slate-700">
            <span class="text-slate-500 font-medium">Financial Benefit:</span>
            <span class="font-bold text-emerald-700">${scheme.annualCoveragePercent > 0 ? `${scheme.annualCoveragePercent}% Fee Benefit` : 'Hostel / Subsistence'}</span>
          </div>
        </div>

        <!-- Action Button -->
        <button 
          type="button" 
          data-scheme-id="${scheme.id}" 
          class="view-details-btn w-full py-2.5 px-4 rounded-xl bg-govnavy-900 hover:bg-govnavy-800 text-white text-xs sm:text-sm font-bold shadow-sm transition flex items-center justify-center gap-2 group-hover:bg-saffron-600"
        >
          <span>View Complete Details</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    `;

    const viewBtn = card.querySelector(".view-details-btn");
    viewBtn.addEventListener("click", () => {
      openScholarshipDetails(scheme.id);
    });

    return card;
  }

  // ================= 4. DETAILED MODAL / DRAWER CONTROLLER =================
  function openScholarshipDetails(schemeId) {
    const scheme = SCHOLARSHIP_DATA.find(s => s.id === schemeId);
    if (!scheme) return;

    state.activeScholarshipId = schemeId;

    // Populate Modal Header
    document.getElementById("modal-scheme-code").textContent = scheme.code;
    document.getElementById("modal-category-badge").textContent = scheme.categoryLabel;
    
    const typeBadge = document.getElementById("modal-type-badge");
    typeBadge.textContent = scheme.assistanceTypeLabel;
    
    document.getElementById("modal-title").textContent = scheme.name;
    document.getElementById("modal-marathi-title").textContent = scheme.marathiName || "";
    document.getElementById("modal-department").textContent = scheme.department;

    // Populate Tab 1: Eligibility
    document.getElementById("modal-income-highlight").textContent = scheme.maxIncomeLimit 
      ? `Up to ₹${scheme.maxIncomeLimit.toLocaleString("en-IN")} / Year` 
      : "As per State Rules";

    const eligList = document.getElementById("modal-eligibility-list");
    eligList.innerHTML = "";
    scheme.eligibility.forEach(item => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition";
      li.innerHTML = `
        <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <span>${item}</span>
      `;
      eligList.appendChild(li);
    });

    // Populate Tab 2: Documents Checklist
    const docsCountPill = document.getElementById("modal-docs-count-pill");
    docsCountPill.textContent = `${scheme.documents.length} items`;
    renderDocumentsList(scheme);

    // Populate Tab 3: Benefits
    const benefitsGrid = document.getElementById("modal-benefits-grid");
    benefitsGrid.innerHTML = "";
    scheme.benefits.forEach(b => {
      const bCard = document.createElement("div");
      bCard.className = "bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5";
      bCard.innerHTML = `
        <div class="text-xs font-bold text-govnavy-900 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-saffron-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          ${b.title}
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">${b.detail}</p>
      `;
      benefitsGrid.appendChild(bCard);
    });

    // Reset to Tab 1
    switchModalTab("tab-eligibility");

    // Show Modal
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function renderDocumentsList(scheme) {
    const docsList = document.getElementById("modal-documents-list");
    if (!docsList) return;
    docsList.innerHTML = "";

    const userChecked = state.checkedDocuments[scheme.id] || {};
    let checkedCount = 0;

    scheme.documents.forEach((doc, idx) => {
      const isChecked = !!userChecked[doc.id];
      if (isChecked) checkedCount++;

      const row = document.createElement("div");
      row.className = `p-3 rounded-xl border transition-all flex items-start gap-3 ${
        isChecked ? "bg-emerald-50/70 border-emerald-300" : "bg-white border-slate-200 hover:border-slate-300"
      }`;

      row.innerHTML = `
        <div class="pt-0.5">
          <input 
            type="checkbox" 
            id="doc-${doc.id}" 
            data-doc-id="${doc.id}"
            class="doc-checkbox w-4 h-4 text-saffron-600 rounded border-slate-300 focus:ring-saffron-500 cursor-pointer"
            ${isChecked ? "checked" : ""}
          >
        </div>
        <div class="flex-1">
          <label for="doc-${doc.id}" class="text-xs font-bold text-slate-800 cursor-pointer block ${isChecked ? "text-emerald-950 font-extrabold" : ""}">
            ${idx + 1}. ${doc.name}
            ${doc.mandatory ? '<span class="text-red-500 text-[11px] ml-1 font-semibold">*Mandatory</span>' : '<span class="text-slate-400 text-[11px] ml-1 font-normal">(If Applicable)</span>'}
          </label>
          ${doc.tip ? `<p class="text-[11px] text-slate-500 mt-0.5">${doc.tip}</p>` : ""}
        </div>
        <div class="text-[11px]">
          ${isChecked ? '<span class="text-emerald-700 font-bold">Ready ✓</span>' : '<span class="text-slate-400">Pending</span>'}
        </div>
      `;

      const checkbox = row.querySelector(".doc-checkbox");
      checkbox.addEventListener("change", (e) => {
        toggleDocumentCheck(scheme.id, doc.id, e.target.checked);
      });

      docsList.appendChild(row);
    });

    updateDocsProgressText(checkedCount, scheme.documents.length);
  }

  function toggleDocumentCheck(schemeId, docId, isChecked) {
    if (!state.checkedDocuments[schemeId]) {
      state.checkedDocuments[schemeId] = {};
    }
    state.checkedDocuments[schemeId][docId] = isChecked;
    saveCheckedDocuments(state.checkedDocuments);

    const scheme = SCHOLARSHIP_DATA.find(s => s.id === schemeId);
    if (scheme) {
      renderDocumentsList(scheme);
    }
  }

  function updateDocsProgressText(checked, total) {
    const textEl = document.getElementById("docs-progress-text");
    if (textEl) {
      const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
      textEl.textContent = `(${checked} of ${total} ready • ${percent}%)`;
    }
  }

  function switchModalTab(tabId) {
    // Buttons styling
    modalTabButtons.forEach(btn => {
      const isActive = btn.dataset.tab === tabId;
      if (isActive) {
        btn.classList.add("border-saffron-600", "text-saffron-600");
        btn.classList.remove("border-transparent", "text-slate-600");
      } else {
        btn.classList.remove("border-saffron-600", "text-saffron-600");
        btn.classList.add("border-transparent", "text-slate-600");
      }
    });

    // Pane visibility
    document.querySelectorAll(".modal-tab-pane").forEach(pane => {
      if (pane.id === tabId) {
        pane.classList.remove("hidden");
      } else {
        pane.classList.add("hidden");
      }
    });
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    state.activeScholarshipId = null;
  }

  // ================= 5. INTERACTIVE ELIGIBILITY ESTIMATOR =================
  function updateCalculatorResult() {
    if (!calcCategory || !calcIncome) return;

    const category = calcCategory.value;
    const income = parseFloat(calcIncome.value) || 0;
    const livingRadio = document.querySelector('input[name="calc-living"]:checked');
    const living = livingRadio ? livingRadio.value : "hostel-metro";

    // Slab label update
    if (incomeSlabLabel) {
      if (income <= 100000) {
        incomeSlabLabel.textContent = "Slab: <= ₹1 Lakh (Highest Benefits)";
        incomeSlabLabel.className = "font-bold text-emerald-600";
      } else if (income <= 250000) {
        incomeSlabLabel.textContent = "Slab: <= ₹2.5 Lakhs (Full Tuition/Hostel)";
        incomeSlabLabel.className = "font-bold text-emerald-600";
      } else if (income <= 800000) {
        incomeSlabLabel.textContent = "Slab: <= ₹8 Lakhs (50% Tuition / Freeship)";
        incomeSlabLabel.className = "font-bold text-amber-600";
      } else {
        incomeSlabLabel.textContent = "Above ₹8 Lakhs (Institutional / General Fees)";
        incomeSlabLabel.className = "font-bold text-red-600";
      }
    }

    // Determine matching tuition scheme & fee waiver
    let tuitionWaiver = "0%";
    let eligibleTuitionScheme = null;
    let eligibleHostelScheme = null;
    let hostelAllowance = "₹0";

    if (category === "SC" || category === "ST") {
      if (income <= 250000) {
        tuitionWaiver = "100% Tuition + Exam Fee Waiver";
        eligibleTuitionScheme = category === "SC" ? "Government of India Post-Matric Scholarship for SC" : "Post Matric Scholarship Scheme for ST";
        if (living !== "dayscholar") {
          hostelAllowance = living === "hostel-metro" ? "₹51,000 / Year" : "₹43,000 / Year";
          eligibleHostelScheme = category === "SC" ? "Dr. Babasaheb Ambedkar Swadhar Yojna" : "Pandit Deendayal Upadhyay Swayam Yojna";
        }
      } else if (income <= 800000) {
        tuitionWaiver = "100% Tuition Fee Reimbursement (Freeship)";
        eligibleTuitionScheme = "Tuition and Examination Fees for SC (Freeship)";
      }
    } else if (category === "NT") {
      if (income <= 100000) {
        tuitionWaiver = "100% Tuition & Exam Fee Waiver";
        eligibleTuitionScheme = "Post Matric Scholarship to VJNT Students";
        if (living !== "dayscholar") hostelAllowance = "₹4,250 / Year Maintenance";
      } else if (income <= 800000) {
        tuitionWaiver = "100% Tuition Fee Covered (Freeship)";
        eligibleTuitionScheme = "Tuition Fees and Examination Fees to VJNT (Freeship)";
      }
    } else if (category === "OBC") {
      if (income <= 100000) {
        tuitionWaiver = "50% Tuition + 100% Exam Fee + Monthly Allowance";
        eligibleTuitionScheme = "Post Matric Scholarship to OBC Students";
      } else if (income <= 800000) {
        tuitionWaiver = "50% Tuition Reimbursement";
        eligibleTuitionScheme = "Tuition Fees and Examination Fees to OBC (Freeship)";
      }
    } else if (category === "SEBC" || category === "EWS") {
      if (income <= 800000) {
        tuitionWaiver = "50% Tuition & 50% Exam Fee Reimbursement";
        eligibleTuitionScheme = "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna";
        if (living !== "dayscholar") {
          hostelAllowance = living === "hostel-metro" ? "₹30,000 / Year (₹3,000/mo)" : "₹20,000 / Year (₹2,000/mo)";
          eligibleHostelScheme = "Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna";
        }
      }
    } else if (category === "PwD") {
      if (income <= 800000) {
        tuitionWaiver = "Full / Category Matched Tuition + Assistive Aid";
        eligibleTuitionScheme = "Scholarship for Students with Disabilities (Divyangjan)";
        hostelAllowance = "Transport / Reader Allowance up to ₹24,000/yr";
      }
    }

    if (!calcResultBox) return;

    if (income > 800000) {
      calcResultBox.className = "bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs space-y-2 text-rose-950";
      calcResultBox.innerHTML = `
        <div class="font-bold flex items-center gap-1.5 text-rose-800">
          <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          Income Exceeds State Subsidy Limit (₹8.0 Lakhs)
        </div>
        <p class="text-rose-700 leading-relaxed">
          State government fee waivers on MahaDBT require family annual income under ₹8,00,000/-. You can explore institutional merit awards, education loans under the Maharashtra Student Credit scheme, or Central sector schemes.
        </p>
      `;
    } else {
      calcResultBox.className = "bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs space-y-2 text-emerald-950";
      calcResultBox.innerHTML = `
        <div class="font-extrabold flex items-center gap-1.5 text-emerald-900 text-sm">
          <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Estimated Eligibility: ${tuitionWaiver}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-emerald-200/60">
          <div>
            <span class="text-emerald-800 font-bold block">Tuition Scheme:</span>
            <span class="text-slate-700">${eligibleTuitionScheme || "Standard Category Norms"}</span>
          </div>
          <div>
            <span class="text-emerald-800 font-bold block">Hostel / Living Support:</span>
            <span class="text-slate-700">${eligibleHostelScheme ? `${eligibleHostelScheme} (${hostelAllowance})` : (living === 'dayscholar' ? 'Day Scholar (No hostel claimed)' : 'Subject to departmental quota')}</span>
          </div>
        </div>
      `;
    }
  }

  // ================= 6. FAQ ACCORDION =================
  function renderFaqs() {
    if (!faqsContainer) return;
    faqsContainer.innerHTML = "";

    SCHOLARSHIP_FAQS.forEach((faq, idx) => {
      const item = document.createElement("div");
      item.className = "border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50";

      item.innerHTML = `
        <button 
          type="button" 
          class="faq-header-btn w-full p-4 text-left flex items-center justify-between gap-3 text-slate-800 hover:text-govnavy-900 transition focus:outline-none"
        >
          <span class="text-xs sm:text-sm font-bold flex items-center gap-2">
            <span class="text-saffron-600 font-black">Q${idx + 1}.</span>
            ${faq.q}
          </span>
          <svg class="w-4 h-4 text-slate-400 shrink-0 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-content hidden px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
          ${faq.a}
        </div>
      `;

      const btn = item.querySelector(".faq-header-btn");
      const content = item.querySelector(".faq-content");
      const icon = item.querySelector("svg");

      btn.addEventListener("click", () => {
        const isHidden = content.classList.contains("hidden");
        // Close all
        document.querySelectorAll(".faq-content").forEach(c => c.classList.add("hidden"));
        document.querySelectorAll(".faq-header-btn svg").forEach(i => i.classList.remove("rotate-180"));

        if (isHidden) {
          content.classList.remove("hidden");
          icon.classList.add("rotate-180");
        }
      });

      faqsContainer.appendChild(item);
    });
  }

  // ================= 7. EVENT LISTENERS =================
  function setupEventListeners() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (clearSearchBtn) {
          if (state.searchQuery.trim().length > 0) {
            clearSearchBtn.classList.remove("hidden");
          } else {
            clearSearchBtn.classList.add("hidden");
          }
        }
        renderScholarships();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        state.searchQuery = "";
        clearSearchBtn.classList.add("hidden");
        renderScholarships();
      });
    }

    // Reset filters button
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        state.selectedCategory = "ALL";
        state.selectedAssistance = "ALL";
        state.searchQuery = "";
        if (searchInput) searchInput.value = "";
        if (clearSearchBtn) clearSearchBtn.classList.add("hidden");

        assistanceButtons.forEach(btn => {
          if (btn.dataset.assistance === "ALL") {
            btn.className = "assistance-filter-btn px-3 py-2 rounded-lg bg-white text-govnavy-900 shadow font-bold transition";
          } else {
            btn.className = "assistance-filter-btn px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition font-semibold";
          }
        });

        renderCategoryPills();
        renderScholarships();
      });
    }

    // Assistance buttons
    assistanceButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        state.selectedAssistance = btn.dataset.assistance;
        assistanceButtons.forEach(b => {
          if (b === btn) {
            b.className = "assistance-filter-btn px-3 py-2 rounded-lg bg-white text-govnavy-900 shadow font-bold transition";
          } else {
            b.className = "assistance-filter-btn px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition font-semibold";
          }
        });
        renderScholarships();
      });
    });

    // Modal Close Triggers
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modalBackTopBtn) modalBackTopBtn.addEventListener("click", closeModal);
    if (modalBackBtn) modalBackBtn.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

    // Escape Key Listener
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });

    // Modal Tab Buttons
    modalTabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        switchModalTab(btn.dataset.tab);
      });
    });

    // Calculator inputs
    if (calcCategory) calcCategory.addEventListener("change", updateCalculatorResult);
    if (calcIncome) calcIncome.addEventListener("input", updateCalculatorResult);
    calcLivingRadios.forEach(radio => {
      radio.addEventListener("change", updateCalculatorResult);
    });

    // Calculator Apply Button
    if (calcApplyFilterBtn) {
      calcApplyFilterBtn.addEventListener("click", () => {
        const cat = calcCategory.value;
        setCategoryFilter(cat);
        const gridSection = document.getElementById("scholarships-grid");
        if (gridSection) {
          gridSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        showToast(`Filtered grid for ${cat} category!`);
      });
    }

    // Copy Documents List
    if (copyDocsBtn) {
      copyDocsBtn.addEventListener("click", () => {
        const scheme = SCHOLARSHIP_DATA.find(s => s.id === state.activeScholarshipId);
        if (!scheme) return;

        const text = `Required Documents for MahaDBT B.Tech Scheme:\n` +
          `${scheme.name} (${scheme.code})\n\n` +
          scheme.documents.map((d, i) => `${i + 1}. ${d.name} ${d.mandatory ? '*(Mandatory)*' : ''}`).join("\n") +
          `\n\nApply on Official Portal: https://mahadbt.maharashtra.gov.in/`;

        navigator.clipboard.writeText(text).then(() => {
          showToast("Document checklist copied to clipboard!");
        }).catch(() => {
          showToast("Checklist ready for review.");
        });
      });
    }

    // Print Checklist
    if (printChecklistBtn) {
      printChecklistBtn.addEventListener("click", () => {
        window.print();
      });
    }
  }

  // ================= 8. LOCAL STORAGE HELPERS =================
  function loadCheckedDocuments() {
    try {
      const data = localStorage.getItem("mahadbt_checked_docs");
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function saveCheckedDocuments(data) {
    try {
      localStorage.setItem("mahadbt_checked_docs", JSON.stringify(data));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  // Toast helper
  function showToast(msg) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.remove("translate-y-20", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
      toast.classList.remove("translate-y-0", "opacity-100");
      toast.classList.add("translate-y-20", "opacity-0");
    }, 2800);
  }
});
