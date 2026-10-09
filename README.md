# Maharashtra B.Tech Scholarship Portal (MahaDBT Assistant)

A front-end-only web application designed for engineering (B.Tech / B.E.) students across Maharashtra State to discover, filter, and prepare for official MahaDBT government scholarships and hostel allowances.

---

## 🏛️ Gov-Tech Theme & Aesthetic
- **Colors:** Deep Saffron (`#E85D04`), Navy Blue (`#0B2545`), Emerald Green (`#059669`), and Clean White Cards with subtle borders.
- **Emblem:** Government of Maharashtra mock emblem with Ashoka lions, DTE badge, and bilingual Marathi typography (*महाराष्ट्र शासन*).
- **Responsive:** Tailored for mobile smartphones, tablets, and desktop displays.

---

## 🚀 Features & Architecture

### 1. Hero Header Section
- Mock State Emblem & DTE Authority badge.
- Portal title: **"Maharashtrian B.Tech Student Scholarship Guide"**.
- Subtitle: *"Find MahaDBT government schemes for Tuition, Hostel & Maintenance allowances."*
- Real-time search bar & Quick Assistance filter (Tuition & Exams vs Hostel & Living).

### 2. Step 1: Caste / Category Filter Bar
- Interactive filter pills with scheme counts for:
  - **SC** (Scheduled Caste)
  - **ST** (Scheduled Tribe)
  - **OBC** (Other Backward Class)
  - **SEBC** (Socially and Educationally Backward Classes)
  - **EWS** (Economically Weaker Section / EBC)
  - **NT** (Nomadic Tribes / VJNT)
  - **PwD** (Persons with Disabilities / Divyangjan)
  - **NRI** (NRI / PIO Supernumerary Quota Regulations)
  - **All Categories** view

### 3. Step 2: Filtered Scholarship Cards Grid
- Instant live updates with smooth fade-in animations.
- Cards display Scheme Code, Category, Department, Assistance Type (Education vs Stay & Food), Income Limit, and Benefit Percentage.
- Prominent **"View Complete Details"** button on every card.

### 4. Step 3: Interactive Detail Modal View (3 Distinct Visual Tabs)
1. **Eligibility Criteria:** Tahsildar income limits (≤ ₹1L, ≤ ₹2.5L, ≤ ₹8L), Maharashtra Domicile rules, CAP round allotment prerequisites, minimum marks, and sibling rules.
2. **Documents Required Checklist:** Itemized checklist with interactive checkboxes, persistent state tracking via `localStorage`, readiness progress bar, **Copy Checklist**, and **Print / PDF** buttons.
3. **Benefits & Financial Assistance:** Complete breakdown of Tuition & Exam fee waivers (50% to 100%), monthly maintenance stipends, and city-tiered hostel allowances (up to ₹51,000/yr).

### 5. Step 4: Official MahaDBT Portal Call-to-Action
- Highlighted CTA card with external link button: **"Apply on Official MahaDBT Portal"** (`https://mahadbt.maharashtra.gov.in/`).
- Intuitive back button: **"← Back to Scholarship List"**.

### 🌟 Bonus Tools Built-In:
- **Instant Eligibility Estimator:** Enter Annual Family Income, Category, and Accommodation type (Hostel in Metro, Hostel in District, or Day Scholar) to calculate fee reimbursement and hostel allowances.
- **Engineering Student FAQs:** Answers regarding CAP round admission rules, pending Caste Validity, Aadhaar NPCI seeding, and dual scholarship restrictions.

---

## 📁 File Structure

```
c:\Users\kusha\Downloads\cep.ui\
│
├── index.html       # Pure HTML5 layout, Tailwind CDN, accessible modal & hero
├── styles.css       # Custom Gov-Tech styling, tricolor ribbon, print styles
├── data.js          # Well-commented mock data arrays of Maharashtra B.Tech schemes
├── app.js           # Vanilla JavaScript state controller & UI event logic
└── README.md        # Documentation and guide
```

---

## 💻 How to Run
Double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari). No server, Node.js, Python, or database installation is required.
