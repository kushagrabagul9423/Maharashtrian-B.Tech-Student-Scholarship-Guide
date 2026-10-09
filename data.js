/**
 * Maharashtra B.Tech Scholarship Portal (MahaDBT Assistant)
 * Authentic Mock Data Array for Maharashtra Engineering Students
 * Source Reference: MahaDBT (mahadbt.maharashtra.gov.in) & Directorate of Technical Education (DTE Maharashtra)
 */

const SCHOLARSHIP_DATA = [
  // ================= SC CATEGORY =================
  {
    id: "sc-post-matric",
    code: "SJD-SC-01",
    name: "Government of India Post-Matric Scholarship for SC Students",
    marathiName: "भारत सरकार मॅट्रिकोत्तर शिष्यवृत्ती - अनुसूचित जाती",
    department: "Social Justice and Special Assistance Department",
    category: "SC",
    categoryLabel: "Scheduled Caste (SC)",
    assistanceType: "Education",
    assistanceTypeLabel: "Tuition & Exam Fee Reimbursement",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 250000,
    incomeText: "Family annual income up to ₹2,50,000/- (Full tuition + Exam fee + Maintenance)",
    shortDescription: "100% Tuition Fee & Examination Fee reimbursement along with monthly maintenance allowance for SC candidates admitted via CAP.",
    eligibility: [
      "Candidate must be a citizen of India and domicile of Maharashtra State.",
      "Must belong to Scheduled Caste (SC) or Neo-Buddhist community recognized in Maharashtra.",
      "Annual family income from all sources must not exceed ₹2,50,000/- (verified by Tahsildar).",
      "Admission to B.E. / B.Tech course must be through centralized admission process (CAP round).",
      "Only up to 2 boys in the same family are eligible (no restriction for girl students).",
      "Minimum 75% college attendance mandatory as per university norms.",
      "Applicable for both First Year (FE) and Direct Second Year (DSE) engineering admissions."
    ],
    documents: [
      { id: "sc-doc-dom", name: "Maharashtra State Domicile Certificate", mandatory: true, tip: "Issued by Sub-Divisional Officer or Tehsildar" },
      { id: "sc-doc-caste", name: "SC Caste Certificate (Maharashtra State)", mandatory: true, tip: "Must be issued by Competent Authority in Maharashtra" },
      { id: "sc-doc-validity", name: "Caste Validity Certificate (Tathya Pramanpatra)", mandatory: true, tip: "Mandatory for all professional technical degree courses" },
      { id: "sc-doc-inc", name: "Income Certificate (Current Financial Year)", mandatory: true, tip: "Issued by Tahsildar with barcode/digital signature" },
      { id: "sc-doc-cap", name: "CAP Round Allotment Letter & Merit Scorecard", mandatory: true, tip: "Issued by State CET Cell / DTE Maharashtra" },
      { id: "sc-doc-fee", name: "College Fee Receipt (Current Academic Year)", mandatory: true, tip: "Official stamped receipt showing paid component" },
      { id: "sc-doc-marks", name: "HSC / Diploma Marksheet & Leaving Certificate", mandatory: true, tip: "Original scanned copy of standard 12th or Diploma" },
      { id: "sc-doc-bank", name: "Aadhaar Linked Active Bank Passbook", mandatory: true, tip: "Bank account must have NPCI Aadhaar seeding enabled" }
    ],
    benefits: [
      { title: "100% Tuition & Exam Fee", detail: "Complete waiver and direct reimbursement of approved tuition & examination fees fixed by Shikshan Shulka Samiti (FRA)." },
      { title: "Monthly Maintenance Allowance", detail: "₹1,200 per month for hostellers (₹12,000/yr) and ₹550 per month for day scholars (₹5,500/yr)." },
      { title: "Book Bank & Study Tour Allowance", detail: "Annual book grant up to ₹1,200 and approved educational tour charges." },
      { title: "Direct Benefit Transfer (DBT)", detail: "Institutional fee credited directly to college account; maintenance allowance transferred to student bank account." }
    ],
    tags: ["Full Tuition", "CAP Mandatory", "DBT", "Social Justice"]
  },
  {
    id: "sc-swadhar",
    code: "SJD-SC-02",
    name: "Dr. Babasaheb Ambedkar Swadhar Yojna (Hostel & Food Allowance)",
    marathiName: "डॉ. बाबासाहेब आंबेडकर स्वाधार योजना (वसतिगृह व भोजन भत्ता)",
    department: "Social Justice and Special Assistance Department",
    category: "SC",
    categoryLabel: "Scheduled Caste (SC)",
    assistanceType: "Stay & Food",
    assistanceTypeLabel: "Hostel, Mess & Living Allowance",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 250000,
    incomeText: "Family annual income up to ₹2,50,000/- for students not accommodated in Govt Hostels",
    shortDescription: "Special financial assistance up to ₹51,000 per year for SC B.Tech students who did not get admission into Government Hostels.",
    eligibility: [
      "Student must belong to Scheduled Caste (SC) or Nav-Bouddha community and domicile of Maharashtra.",
      "Admitted in approved B.Tech / B.E. institution located in Municipal Corporation (Mega City / A / B / C class).",
      "Family annual income should not exceed ₹2,50,000/-.",
      "Student must NOT have obtained admission in any Government / Social Welfare Department hostel.",
      "Local distance between student's native village/town and college must be at least 5 km.",
      "Minimum 50% marks in 12th Standard / Diploma for fresh entrants, and passing marks in previous engineering semester."
    ],
    documents: [
      { id: "sc-sw-dom", name: "Domicile Certificate of Maharashtra", mandatory: true, tip: "Valid resident proof" },
      { id: "sc-sw-caste", name: "Caste Certificate & Caste Validity", mandatory: true, tip: "Official verification document" },
      { id: "sc-sw-inc", name: "Income Certificate issued by Tehsildar", mandatory: true, tip: "Valid for current financial year" },
      { id: "sc-sw-hostel", name: "Hostel Admission Certificate / Rent Agreement & Landlord NOC", mandatory: true, tip: "Proof of off-campus rented accommodation" },
      { id: "sc-sw-affidavit", name: "Non-Govt Hostel Accommodation Affidavit", mandatory: true, tip: "Self-declaration on stamp paper or bond" },
      { id: "sc-sw-cap", name: "B.Tech College Identity Card & Bonafide Certificate", mandatory: true, tip: "Signed by College Principal / Registrar" },
      { id: "sc-sw-bank", name: "Aadhaar Seeded Nationalised Bank Account Details", mandatory: true, tip: "DBT payment verification" }
    ],
    benefits: [
      { title: "Tier 1 Mega Cities (Mumbai, Pune, Nagpur)", detail: "Up to ₹51,000 per annum (Food allowance: ₹28,000, Accommodation: ₹15,000, Miscellaneous & Books: ₹8,000)." },
      { title: "Tier 2 Cities (Other Municipal Corp / Division HQ)", detail: "Up to ₹43,000 per annum (Food: ₹24,000, Room rent: ₹12,000, Books: ₹7,000)." },
      { title: "District Level Municipalities", detail: "Up to ₹38,000 per annum (Food: ₹22,000, Room rent: ₹10,000, Books: ₹6,000)." },
      { title: "Disability Special Grant", detail: "Additional ₹5,000 per annum for Divyang (PwD) SC students." }
    ],
    tags: ["Hostel Allowance", "Mess Subsidy", "City Tiered", "Direct Cash DBT"]
  },
  {
    id: "sc-freeship",
    code: "SJD-SC-03",
    name: "Tuition and Examination Fees for SC Students (Freeship)",
    marathiName: "अनुसूचित जातीच्या विद्यार्थ्यांसाठी शिक्षण शुल्क व परीक्षा शुल्क प्रतिपूर्ती (फ्रीशिप)",
    department: "Social Justice and Special Assistance Department",
    category: "SC",
    categoryLabel: "Scheduled Caste (SC)",
    assistanceType: "Education",
    assistanceTypeLabel: "Tuition & Exam Fee Waiver",
    hostelEligible: false,
    annualCoveragePercent: 100,
    maxIncomeLimit: 800000,
    incomeText: "Family income above ₹2,50,000/- up to ₹8,00,000/- (Covers 100% Tuition Fees)",
    shortDescription: "100% reimbursement of FRA approved tuition fees for SC students whose family income exceeds ₹2.5 Lakhs up to ₹8 Lakhs.",
    eligibility: [
      "Candidate must belong to SC category with Maharashtra domicile.",
      "Family income between ₹2,50,001/- and ₹8,00,000/-.",
      "Must have secured engineering seat through official CAP counseling rounds.",
      "No maintenance allowance is paid under Freeship; only tuition & exam fee component is reimbursed."
    ],
    documents: [
      { id: "sc-fr-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Proof of state residence" },
      { id: "sc-fr-caste", name: "Caste Certificate & Caste Validity Certificate", mandatory: true, tip: "Mandatory for technical admissions" },
      { id: "sc-fr-inc", name: "Income Certificate issued by Tahsildar (Above 2.5L to 8L)", mandatory: true, tip: "Issued for current year" },
      { id: "sc-fr-cap", name: "CAP Allotment Letter & College Confirmation Receipt", mandatory: true, tip: "Verification of merit admission" },
      { id: "sc-fr-mark", name: "Previous Year Qualifying Exam Marksheets", mandatory: true, tip: "HSC or Polytechnic Diploma" }
    ],
    benefits: [
      { title: "100% Tuition Fee Reimbursement", detail: "College tuition fee as determined by Fees Regulating Authority (FRA) is fully paid by Government." },
      { title: "100% Examination Fee Exemption", detail: "University exam fees waived and credited directly to the affiliating university/college." }
    ],
    tags: ["Freeship", "Income 2.5L-8L", "Tuition Waived", "CAP Seats"]
  },

  // ================= ST CATEGORY =================
  {
    id: "st-post-matric",
    code: "TRD-ST-01",
    name: "Post Matric Scholarship Scheme (Government of India) for ST Students",
    marathiName: "भारत सरकार मॅट्रिकोत्तर शिष्यवृत्ती - अनुसूचित जमाती",
    department: "Tribal Development Department",
    category: "ST",
    categoryLabel: "Scheduled Tribe (ST)",
    assistanceType: "Education",
    assistanceTypeLabel: "Tuition & Exam Fee Reimbursement",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 250000,
    incomeText: "Family income up to ₹2,50,000/- per year (100% Tuition + Exam Fee + Maintenance)",
    shortDescription: "Centrally sponsored scholarship granting 100% tuition, exam fees, and monthly maintenance allowance for Scheduled Tribe B.Tech students.",
    eligibility: [
      "Candidate must belong to Scheduled Tribe (ST) recognized in Maharashtra State.",
      "Maharashtra Domicile is mandatory.",
      "Annual family income must not exceed ₹2,50,000/-.",
      "Admitted in AICTE/DTE recognized B.Tech course through CAP quota.",
      "Candidate must not be availing benefits of any other parallel scholarship.",
      "Satisfactory academic progress and minimum 75% attendance in semester classes."
    ],
    documents: [
      { id: "st-pm-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Mandatory state proof" },
      { id: "st-pm-caste", name: "Tribe Certificate (ST Certificate)", mandatory: true, tip: "Issued by authorized Competent Authority" },
      { id: "st-pm-val", name: "Tribe Validity Certificate (Jat Vaidhyata)", mandatory: true, tip: "Verification from Scrutiny Committee" },
      { id: "st-pm-inc", name: "Tahsildar Income Certificate (<= 2.5 Lakhs)", mandatory: true, tip: "Digital barcode certificate" },
      { id: "st-pm-cap", name: "CAP Allotment Letter & Merit Scorecard", mandatory: true, tip: "State CET Cell proof" },
      { id: "st-pm-fee", name: "College Fee Payment Receipt", mandatory: true, tip: "Current year fee receipt" },
      { id: "st-pm-bank", name: "Aadhaar Seeded Bank Account Details", mandatory: true, tip: "DBT compliant bank passbook" }
    ],
    benefits: [
      { title: "100% Tuition & Exam Fees", detail: "Complete coverage of fee components fixed by Fees Regulating Authority (FRA)." },
      { title: "Hostel Maintenance Allowance", detail: "₹1,200 per month for hostellers (₹12,000/yr); ₹550 per month for day scholars (₹5,500/yr)." },
      { title: "Study Tour Allowance", detail: "Reimbursement of study tour charges up to ₹1,600 per annum for engineering field trips." }
    ],
    tags: ["ST Welfare", "100% Tuition", "Monthly Stipend", "Tribal Dept"]
  },
  {
    id: "st-swayam",
    code: "TRD-ST-02",
    name: "Pandit Deendayal Upadhyay Swayam Yojna (Hostel & Food Allowance)",
    marathiName: "पंडित दीनदयाळ उपाध्याय स्वयं योजना (वसतिगृह व भोजन भत्ता)",
    department: "Tribal Development Department",
    category: "ST",
    categoryLabel: "Scheduled Tribe (ST)",
    assistanceType: "Stay & Food",
    assistanceTypeLabel: "Hostel & Living Allowance",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 250000,
    incomeText: "Family income up to ₹2,50,000/- for ST students residing outside Tribal Hostels",
    shortDescription: "Direct DBT food and accommodation cash assistance up to ₹51,000/year for ST engineering students not accommodated in Government Tribal hostels.",
    eligibility: [
      "Belong to Scheduled Tribe (ST) category with Maharashtra Domicile.",
      "Admitted in approved B.Tech / B.E. college in Maharashtra.",
      "Family annual income should be less than or equal to ₹2,50,000/-.",
      "Student must not have secured a seat in the Government Adivasi Hostel.",
      "Local distance from home to college must exceed 5 km.",
      "Minimum 50% marks in 12th / Diploma / previous engineering qualifying exam."
    ],
    documents: [
      { id: "st-sw-dom", name: "Domicile Certificate", mandatory: true, tip: "State residence certificate" },
      { id: "st-sw-tribe", name: "Tribe Certificate & Tribe Validity Certificate", mandatory: true, tip: "Valid Scrutiny document" },
      { id: "st-sw-inc", name: "Tahsildar Income Certificate", mandatory: true, tip: "Issued for active financial year" },
      { id: "st-sw-rent", name: "Rent Agreement / Private Hostel Receipt", mandatory: true, tip: "Evidence of living away from home" },
      { id: "st-sw-noc", name: "Hostel Non-Availability Certificate from Tribal Project Officer", mandatory: true, tip: "Verifies no govt bed allocated" },
      { id: "st-sw-bank", name: "Aadhaar Linked Active Bank Passbook", mandatory: true, tip: "Must be in student's name" }
    ],
    benefits: [
      { title: "Tier A Cities (Mumbai, Pune, Thane, Navi Mumbai, Nagpur)", detail: "₹51,000 per year (Food: ₹28,000, Room rent: ₹15,000, Books & Misc: ₹8,000)." },
      { title: "Tier B Cities (Other Divisional Headquarters)", detail: "₹43,000 per year (Food: ₹24,000, Room rent: ₹12,000, Books & Misc: ₹7,000)." },
      { title: "District Level Towns", detail: "₹38,000 per year directly credited to student's bank account in two biannual installments." }
    ],
    tags: ["ST Hostel", "Swayam Yojna", "Up to ₹51,000", "Tribal DBT"]
  },

  // ================= OBC CATEGORY =================
  {
    id: "obc-post-matric",
    code: "OBC-01",
    name: "Post Matric Scholarship to OBC Students",
    marathiName: "इतर मागासवर्गीय (OBC) मॅट्रिकोत्तर शिष्यवृत्ती",
    department: "VJNT, OBC and SBC Welfare Department",
    category: "OBC",
    categoryLabel: "Other Backward Class (OBC)",
    assistanceType: "Education",
    assistanceTypeLabel: "50% Tuition Fee & Maintenance Allowance",
    hostelEligible: true,
    annualCoveragePercent: 50,
    maxIncomeLimit: 100000,
    incomeText: "Family income up to ₹1,00,000/- (50% Tuition + 100% Exam Fee + Monthly Maintenance)",
    shortDescription: "50% Tuition Fee reimbursement, 100% Exam Fee waiver, and monthly maintenance allowance for OBC B.Tech students with income <= ₹1 Lakh.",
    eligibility: [
      "Belong to Other Backward Class (OBC) caste group in Maharashtra State.",
      "Maharashtra Domicile certificate required.",
      "Annual family income from all sources must not exceed ₹1,00,000/-.",
      "Must have taken admission in B.Tech / B.E. via CAP round of State CET Cell.",
      "Valid Non-Creamy Layer (NCL) certificate mandatory.",
      "Candidate must maintain satisfactory semester results without multi-year backlog."
    ],
    documents: [
      { id: "obc-pm-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Proof of 15+ years residency" },
      { id: "obc-pm-caste", name: "OBC Caste Certificate", mandatory: true, tip: "Issued by Sub-Divisional Officer" },
      { id: "obc-pm-val", name: "Caste Validity Certificate (Jat Vaidhyata)", mandatory: true, tip: "Mandatory for engineering degree" },
      { id: "obc-pm-ncl", name: "Non-Creamy Layer Certificate (NCL)", mandatory: true, tip: "Valid through March 31 of current FY" },
      { id: "obc-pm-inc", name: "Income Certificate from Tahsildar (<= ₹1,00,000)", mandatory: true, tip: "Current financial year issue" },
      { id: "obc-pm-cap", name: "CAP Allotment Letter & Merit Acknowledgement", mandatory: true, tip: "CET Cell official letter" },
      { id: "obc-pm-fee", name: "College Fee Receipt", mandatory: true, tip: "Original scanned receipt" },
      { id: "obc-pm-bank", name: "Aadhaar Seeded Bank Account", mandatory: true, tip: "NPCI seeded account" }
    ],
    benefits: [
      { title: "50% Tuition Fee Reimbursement", detail: "Government reimburses 50% of the tuition fee approved by Fees Regulating Authority (FRA)." },
      { title: "100% Examination Fee Reimbursement", detail: "All university semester examination fees are reimbursed in full." },
      { title: "Monthly Maintenance Allowance", detail: "₹425/month for Hostellers (₹4,250/yr) and ₹190/month for Day Scholars (₹1,900/yr)." }
    ],
    tags: ["OBC Scholarship", "50% Tuition", "Maintenance", "Income <= 1L"]
  },
  {
    id: "obc-tuition-waiver",
    code: "OBC-02",
    name: "Tuition Fees and Examination Fees to OBC Students (Freeship)",
    marathiName: "इतर मागासवर्गीय (OBC) शिक्षण शुल्क व परीक्षा शुल्क सवलत",
    department: "VJNT, OBC and SBC Welfare Department",
    category: "OBC",
    categoryLabel: "Other Backward Class (OBC)",
    assistanceType: "Education",
    assistanceTypeLabel: "50% Tuition Fee Reimbursement",
    hostelEligible: false,
    annualCoveragePercent: 50,
    maxIncomeLimit: 800000,
    incomeText: "Family income between ₹1,00,001/- and ₹8,00,000/- (50% Tuition + 100% Exam Fee)",
    shortDescription: "Reimbursement of 50% tuition fees and 100% exam fees for OBC engineering students with family annual income between ₹1L and ₹8L.",
    eligibility: [
      "Candidate must belong to OBC category with Maharashtra State Domicile.",
      "Family annual income must be between ₹1,00,001/- and ₹8,00,000/-.",
      "Admitted via Centralized Admission Process (CAP) rounds.",
      "Valid Non-Creamy Layer (NCL) certificate is compulsory.",
      "Only tuition fee and examination fee are subsidized; no monthly maintenance allowance."
    ],
    documents: [
      { id: "obc-tw-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Proof of domicile" },
      { id: "obc-tw-caste", name: "OBC Caste Certificate", mandatory: true, tip: "Authorized competent authority" },
      { id: "obc-tw-val", name: "Caste Validity Certificate", mandatory: true, tip: "Scrutiny committee certificate" },
      { id: "obc-tw-ncl", name: "Current Non-Creamy Layer (NCL) Certificate", mandatory: true, tip: "Valid for current academic session" },
      { id: "obc-tw-inc", name: "Tahsildar Income Certificate (₹1L to ₹8L)", mandatory: true, tip: "Digital signed income proof" },
      { id: "obc-tw-cap", name: "CAP Allotment Letter & Fee Receipt", mandatory: true, tip: "CET Cell admission proof" }
    ],
    benefits: [
      { title: "50% Tuition Fee Reimbursement", detail: "Government pays 50% of the FRA-fixed tuition fee directly to the engineering college." },
      { title: "100% Examination Fee Exemption", detail: "College receives full examination fee reimbursement from the department." }
    ],
    tags: ["50% Tuition", "OBC Freeship", "Income Up to 8L", "NCL Compulsory"]
  },

  // ================= SEBC CATEGORY =================
  {
    id: "sebc-ebc-tuition",
    code: "HTE-SEBC-01",
    name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (SEBC)",
    marathiName: "राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना (SEBC)",
    department: "Higher & Technical Education Department",
    category: "SEBC",
    categoryLabel: "Socially and Educationally Backward Classes (SEBC)",
    assistanceType: "Education",
    assistanceTypeLabel: "50% Tuition & Exam Fee Waiver",
    hostelEligible: false,
    annualCoveragePercent: 50,
    maxIncomeLimit: 800000,
    incomeText: "Family annual income up to ₹8,00,000/- (50% Tuition & Exam Fee Reimbursement)",
    shortDescription: "50% Tuition fee and 50% Exam fee reimbursement for SEBC students enrolled in government-approved B.Tech engineering courses.",
    eligibility: [
      "Student must belong to SEBC category under the Maharashtra State SEBC Act, 2024.",
      "Must possess valid Maharashtra State Domicile Certificate.",
      "Family annual income from all sources must not exceed ₹8,00,000/-.",
      "Valid Non-Creamy Layer (NCL) Certificate is strictly compulsory.",
      "Admission must be secured through CAP round in Government, Aided, or Unaided Private B.Tech institutes.",
      "Maximum of 2 beneficiary children permitted from the same family.",
      "Minimum 50% marks in 12th Standard / Diploma qualifying examination."
    ],
    documents: [
      { id: "sebc-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Competent authority verified" },
      { id: "sebc-caste", name: "SEBC Caste Certificate", mandatory: true, tip: "Issued under Maharashtra SEBC Reservation Act" },
      { id: "sebc-val", name: "SEBC Caste Validity Certificate", mandatory: true, tip: "District Scrutiny Committee validated" },
      { id: "sebc-ncl", name: "Non-Creamy Layer (NCL) Certificate", mandatory: true, tip: "Valid for current financial year" },
      { id: "sebc-inc", name: "Income Certificate issued by Tahsildar (<= 8 Lakhs)", mandatory: true, tip: "Digital barcode certificate" },
      { id: "sebc-cap", name: "CAP Round Allotment Letter & Receipt", mandatory: true, tip: "DTE/CET Cell proof" },
      { id: "sebc-decl", name: "Self-Declaration of Only Two Beneficiary Children", mandatory: true, tip: "Standard format undertaking" }
    ],
    benefits: [
      { title: "50% Tuition Fee Reimbursement", detail: "Government reimburses 50% of tuition fee determined by Fees Regulating Authority (FRA)." },
      { title: "50% Examination Fee Reimbursement", detail: "50% semester examination fee covered and credited directly to the college/university." },
      { title: "Girls Fee Exemption Compliance", detail: "Eligible female engineering students may qualify for up to 100% tuition concession under recent State Girl Child initiatives." }
    ],
    tags: ["SEBC 2024", "50% Tuition", "Income < 8L", "CAP Required"]
  },
  {
    id: "sebc-panjabrao",
    code: "HTE-SEBC-02",
    name: "Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna (SEBC Quota)",
    marathiName: "डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना (SEBC)",
    department: "Higher & Technical Education Department",
    category: "SEBC",
    categoryLabel: "Socially and Educationally Backward Classes (SEBC)",
    assistanceType: "Stay & Food",
    assistanceTypeLabel: "Hostel & Maintenance Allowance",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 800000,
    incomeText: "Family income up to ₹8,00,000/- for children of registered Alpabhudharak / Landless farm laborers",
    shortDescription: "Annual hostel and subsistence allowance of ₹20,000 to ₹30,000 for SEBC B.Tech students staying in hostels or paying guest accommodations.",
    eligibility: [
      "Student must belong to SEBC category with Maharashtra Domicile.",
      "Admitted to B.Tech / B.E. course through Centralized Admission Process (CAP).",
      "Family annual income up to ₹8,00,000/- (for children of marginal farmers/labourers) or up to ₹2,50,000/- for general SEBC.",
      "Student must be staying in private hostel, college hostel, or rented accommodation (Day scholars not eligible).",
      "Minimum 50% aggregate marks in preceding academic year."
    ],
    documents: [
      { id: "sebc-pd-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Permanent residence proof" },
      { id: "sebc-pd-caste", name: "SEBC Caste & Validity Certificate", mandatory: true, tip: "Approved category documents" },
      { id: "sebc-pd-ncl", name: "Valid Non-Creamy Layer Certificate", mandatory: true, tip: "Valid for active academic session" },
      { id: "sebc-pd-inc", name: "Income Certificate issued by Tahsildar", mandatory: true, tip: "Annual income proof" },
      { id: "sebc-pd-host", name: "Hostel Warden Certificate / Rent Agreement & Registered Owner PAN", mandatory: true, tip: "Must prove staying away from hometown" },
      { id: "sebc-pd-land", name: "Alpabhudharak (Marginal Farmer) Certificate / 7/12 Extract (If claiming under <8L slab)", mandatory: false, tip: "Issued by Tahsildar / Talathi" }
    ],
    benefits: [
      { title: "Metro Cities (MMR, Pune, Nagpur, Aurangabad)", detail: "₹30,000 per academic year (₹3,000 per month for 10 academic months)." },
      { title: "Other City & District Locations", detail: "₹20,000 per academic year (₹2,000 per month for 10 academic months)." },
      { title: "Direct Transfer", detail: "Amount directly credited to student's Aadhaar-seeded bank account in two installments." }
    ],
    tags: ["Hostel Allowance", "Mess Subsidy", "Up to ₹30,000", "SEBC Quota"]
  },

  // ================= EWS / OPEN (EBC) CATEGORY =================
  {
    id: "ews-ebc-tuition",
    code: "HTE-EWS-01",
    name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC / EWS)",
    marathiName: "राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना (EBC / EWS)",
    department: "Higher & Technical Education Department",
    category: "EWS",
    categoryLabel: "Economically Weaker Section (EWS) / EBC",
    assistanceType: "Education",
    assistanceTypeLabel: "50% Tuition & Exam Fee Waiver",
    hostelEligible: false,
    annualCoveragePercent: 50,
    maxIncomeLimit: 800000,
    incomeText: "Family annual income up to ₹8,00,000/- for General/Open and EWS candidates",
    shortDescription: "Flagship Maharashtra scheme offering 50% tuition and 50% exam fee reimbursement for Economically Backward Class (EBC) & EWS engineering students.",
    eligibility: [
      "Candidate must be an Indian citizen and domicile of Maharashtra State.",
      "Must have obtained admission to B.E./B.Tech via centralized CAP round (Management / Institute level seats not eligible).",
      "Family annual income from all sources must not exceed ₹8,00,000/-.",
      "Applicable for Open / General Category, EWS, and minority candidates not taking other scholarships.",
      "Candidate must not have more than 2 living children in the family (declaration required).",
      "Candidate must have secured minimum 50% marks in 12th Science / Diploma."
    ],
    documents: [
      { id: "ews-dom", name: "Maharashtra State Domicile Certificate", mandatory: true, tip: "Proof of Maharashtra residence" },
      { id: "ews-cert", name: "EWS Eligibility Certificate (If admitted under EWS Seat)", mandatory: false, tip: "Competent authority format for EWS" },
      { id: "ews-inc", name: "Income Certificate from Tahsildar (Current Year, <= ₹8,00,000)", mandatory: true, tip: "Digital barcode income certificate" },
      { id: "ews-cap", name: "CAP Allotment Letter & Merit Scorecard", mandatory: true, tip: "Proves admission through government quota" },
      { id: "ews-fee", name: "College Fee Payment Receipt", mandatory: true, tip: "College stamped receipt" },
      { id: "ews-mark", name: "10th, 12th / Diploma Marksheet", mandatory: true, tip: "Proof of minimum 50% qualifying marks" },
      { id: "ews-decl", name: "Declaration of 2 Children & Non-Availment of Other Scholarships", mandatory: true, tip: "Self-undertaking signed by parents" }
    ],
    benefits: [
      { title: "50% Tuition Fee Reimbursement", detail: "Government reimburses 50% of the tuition fee approved by Fees Regulating Authority (FRA) directly to the college." },
      { title: "50% Exam Fee Waiver", detail: "50% university examination fees paid by Higher & Technical Education department." },
      { title: "Seamless Auto Renewal", detail: "Renewable for all 4 years of engineering upon passing or ATKT within prescribed university norms." }
    ],
    tags: ["50% Tuition", "EBC / EWS", "Income < 8 Lakhs", "CAP Round"]
  },
  {
    id: "ews-panjabrao",
    code: "HTE-EWS-02",
    name: "Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna (EWS / General)",
    marathiName: "डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना (खुला प्रवर्ग / EWS)",
    department: "Higher & Technical Education Department",
    category: "EWS",
    categoryLabel: "Economically Weaker Section (EWS) / EBC",
    assistanceType: "Stay & Food",
    assistanceTypeLabel: "Hostel & Food Allowance",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 800000,
    incomeText: "Family income up to ₹8,00,000/- (Marginal farmers/labourers) or ₹2,50,000/- (Other General/EWS)",
    shortDescription: "Annual stipend of ₹20,000 to ₹30,000 for EWS and General category B.Tech students staying in hostels or rented rooms away from home.",
    eligibility: [
      "Maharashtra Domicile student enrolled in B.Tech via CAP round.",
      "Student must reside in college hostel, private hostel, or rented flat away from parents' residence.",
      "If family income is up to ₹8,00,000/-, parent must be a registered Marginal Farmer (Alpabhudharak) or Landless Laborer.",
      "For other non-farming EWS families, annual income limit is ₹2,50,000/-.",
      "Minimum 50% aggregate marks in 12th / Diploma / earlier B.Tech semesters."
    ],
    documents: [
      { id: "ews-pd-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "State proof" },
      { id: "ews-pd-inc", name: "Income Certificate issued by Tahsildar", mandatory: true, tip: "Current year validity" },
      { id: "ews-pd-land", name: "Alpabhudharak Certificate / 7/12 Extract (For income > 2.5L up to 8L)", mandatory: false, tip: "Issued by Revenue Department" },
      { id: "ews-pd-rent", name: "Hostel Warden Certificate / Registered Rent Agreement & Electric Bill", mandatory: true, tip: "Proof of living away from home" },
      { id: "ews-pd-cap", name: "CAP Allotment Letter & College Bonafide Certificate", mandatory: true, tip: "Proves active B.Tech enrolment" },
      { id: "ews-pd-bank", name: "Aadhaar Linked Active Bank Account", mandatory: true, tip: "DBT verified passbook" }
    ],
    benefits: [
      { title: "MMR / Pune / Nagpur / Aurangabad Regions", detail: "₹30,000 per academic year (₹3,000 per month for 10 months) transferred directly to student." },
      { title: "Other District & Rural Engineering Colleges", detail: "₹20,000 per academic year (₹2,000 per month for 10 months)." },
      { title: "Pure DBT Transfer", detail: "Paid directly to student's bank account in two halves (Semester 1 & Semester 2)." }
    ],
    tags: ["Hostel Allowance", "EWS / Open", "Up to ₹30,000", "Food & Stay"]
  },

  // ================= NT / VJNT CATEGORY =================
  {
    id: "nt-post-matric",
    code: "VJNT-01",
    name: "Post Matric Scholarship to VJNT Students",
    marathiName: "विमुक्त जाती व भटक्या जमाती (VJNT) मॅट्रिकोत्तर शिष्यवृत्ती",
    department: "VJNT, OBC and SBC Welfare Department",
    category: "NT",
    categoryLabel: "Nomadic Tribes (VJNT / NT-A, NT-B, NT-C, NT-D)",
    assistanceType: "Education",
    assistanceTypeLabel: "100% Tuition & Exam Fee + Maintenance",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 100000,
    incomeText: "Family annual income up to ₹1,00,000/- (100% Tuition + Exam Fee + Monthly Allowance)",
    shortDescription: "100% Tuition Fee waiver, 100% Exam Fee waiver, and monthly maintenance allowance for VJ / NT engineering students with family income <= ₹1 Lakh.",
    eligibility: [
      "Belong to VJ/NT (NT-A, NT-B, NT-C, NT-D) category in Maharashtra State.",
      "Maharashtra Domicile mandatory.",
      "Annual family income must not exceed ₹1,00,000/-.",
      "Admitted through CAP round in DTE-approved engineering college.",
      "Valid Non-Creamy Layer (NCL) certificate and Caste Validity certificate mandatory."
    ],
    documents: [
      { id: "nt-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Permanent domicile" },
      { id: "nt-caste", name: "VJNT Caste Certificate", mandatory: true, tip: "Authorized SDO issue" },
      { id: "nt-val", name: "Caste Validity Certificate (Jat Vaidhyata)", mandatory: true, tip: "Mandatory for B.Tech" },
      { id: "nt-ncl", name: "Valid Non-Creamy Layer Certificate", mandatory: true, tip: "Active academic year validity" },
      { id: "nt-inc", name: "Tahsildar Income Certificate (<= ₹1,00,000)", mandatory: true, tip: "Current financial year" },
      { id: "nt-cap", name: "CAP Round Allotment Letter", mandatory: true, tip: "CET Cell admission proof" },
      { id: "nt-bank", name: "Aadhaar Linked Bank Passbook", mandatory: true, tip: "NPCI enabled" }
    ],
    benefits: [
      { title: "100% Tuition Fee Waiver", detail: "Government reimburses 100% of the FRA-approved tuition fees directly to the college." },
      { title: "100% Exam Fee Reimbursement", detail: "All university semester examination fees are paid by the department." },
      { title: "Monthly Maintenance Allowance", detail: "₹425 per month for Hostellers (₹4,250/yr) and ₹190 per month for Day Scholars (₹1,900/yr)." }
    ],
    tags: ["100% Tuition", "VJNT", "Maintenance Allowance", "Income <= 1L"]
  },
  {
    id: "nt-tuition-waiver",
    code: "VJNT-02",
    name: "Tuition Fees and Examination Fees to VJNT Students (Freeship)",
    marathiName: "विमुक्त जाती व भटक्या जमाती (VJNT) शिक्षण व परीक्षा शुल्क सवलत (फ्रीशिप)",
    department: "VJNT, OBC and SBC Welfare Department",
    category: "NT",
    categoryLabel: "Nomadic Tribes (VJNT / NT-A, NT-B, NT-C, NT-D)",
    assistanceType: "Education",
    assistanceTypeLabel: "100% Tuition & Exam Fee Waiver",
    hostelEligible: false,
    annualCoveragePercent: 100,
    maxIncomeLimit: 800000,
    incomeText: "Family income between ₹1,00,001/- and ₹8,00,000/- (100% Tuition & Exam Fee)",
    shortDescription: "100% reimbursement of tuition fees and exam fees for VJNT students whose family annual income is between ₹1 Lakh and ₹8 Lakhs.",
    eligibility: [
      "Belong to VJNT category with Maharashtra domicile.",
      "Family annual income between ₹1,00,001/- and ₹8,00,000/-.",
      "Admitted through Centralized Admission Process (CAP).",
      "Possess valid Caste Validity and Non-Creamy Layer (NCL) certificate.",
      "No maintenance allowance; covers 100% tuition and exam fee components."
    ],
    documents: [
      { id: "nt-fr-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "State domicile" },
      { id: "nt-fr-caste", name: "VJNT Caste Certificate & Caste Validity", mandatory: true, tip: "Scrutiny committee verified" },
      { id: "nt-fr-ncl", name: "Current Non-Creamy Layer Certificate", mandatory: true, tip: "Valid for active session" },
      { id: "nt-fr-inc", name: "Tahsildar Income Certificate (₹1L to ₹8L)", mandatory: true, tip: "Digital income certificate" },
      { id: "nt-fr-cap", name: "CAP Allotment Letter & College Fee Receipt", mandatory: true, tip: "Proves merit admission" }
    ],
    benefits: [
      { title: "100% Tuition Fee Covered", detail: "Full tuition fee as per Fees Regulating Authority (FRA) norms paid by State Government." },
      { title: "100% Examination Fee Exemption", detail: "University exam fee fully waived." }
    ],
    tags: ["100% Tuition", "VJNT Freeship", "Income Up to 8L", "NCL Compulsory"]
  },

  // ================= PwD (DIVYANGJAN) CATEGORY =================
  {
    id: "pwd-state-scholarship",
    code: "DIS-01",
    name: "Scholarship for Students with Disabilities (Divyangjan)",
    marathiName: "दिव्यांग विद्यार्थ्यांसाठी मॅट्रिकोत्तर शिष्यवृत्ती व निर्वाह भत्ता",
    department: "Divyang Welfare Department / Social Justice",
    category: "PwD",
    categoryLabel: "Persons with Disabilities (PwD / Divyangjan)",
    assistanceType: "Education",
    assistanceTypeLabel: "Tuition Waiver & Assistive Equipment Allowance",
    hostelEligible: true,
    annualCoveragePercent: 100,
    maxIncomeLimit: 800000,
    incomeText: "Family income up to ₹8,00,000/- (For students with >= 40% certified disability)",
    shortDescription: "Full tuition assistance, conveyance grant, reader allowance, and assistive device support for Divyang B.Tech students in Maharashtra.",
    eligibility: [
      "Candidate must be a domicile of Maharashtra State.",
      "Must have benchmark disability of 40% or more (Orthopedic, Visual, Hearing, Cerebral Palsy, Intellectual, etc.).",
      "Must hold valid UDID (Unique Disability ID) card or Civil Surgeon Disability Certificate.",
      "Admitted into recognized B.E. / B.Tech engineering course in Maharashtra.",
      "Family annual income up to ₹8,00,000/- from all sources."
    ],
    documents: [
      { id: "pwd-udid", name: "UDID Card / Disability Certificate (>= 40%)", mandatory: true, tip: "Issued by District Civil Surgeon / Medical Board" },
      { id: "pwd-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "Proof of residence" },
      { id: "pwd-inc", name: "Income Certificate from Tahsildar (<= ₹8,00,000)", mandatory: true, tip: "Current financial year" },
      { id: "pwd-cap", name: "CAP Round Allotment Letter", mandatory: true, tip: "PWD reservation or merit seat" },
      { id: "pwd-fee", name: "College Fee Receipt", mandatory: true, tip: "Original receipt" },
      { id: "pwd-bank", name: "Aadhaar Linked Bank Passbook", mandatory: true, tip: "Student's own bank account" }
    ],
    benefits: [
      { title: "Tuition Fee Reimbursement", detail: "Full or category-matched tuition fee waiver under Maharashtra Technical Education standards." },
      { title: "Conveyance & Transport Allowance", detail: "₹1,000 per month for local transport / wheelchair transit." },
      { title: "Reader Allowance (Visually Impaired)", detail: "₹2,000 per month for readers/assistants for visually challenged engineering students." },
      { title: "Assistive Technology Subsidy", detail: "One-time allowance for specialized software, screen readers, braille displays, or prosthetics." }
    ],
    tags: ["PwD / Divyang", "UDID Card", "Assistive Allowance", "Conveyance Grant"]
  },

  // ================= NRI / OCI / OUTSIDE QUOTA ADVISORY =================
  {
    id: "nri-guidelines",
    code: "ARA-NRI-01",
    name: "MahaDBT & DTE Fee Regulations for NRI / OCI / PIO Candidates",
    marathiName: "अनिवासी भारतीय (NRI / OCI) विद्यार्थी प्रवेश व शुल्क मार्गदर्शक तत्त्वे",
    department: "Higher & Technical Education / Admissions Regulating Authority (ARA)",
    category: "NRI",
    categoryLabel: "Non-Resident Indian (NRI / OCI / PIO Quota)",
    assistanceType: "Education",
    assistanceTypeLabel: "Statutory Fee Structure & Eligibility Advisory",
    hostelEligible: false,
    annualCoveragePercent: 0,
    maxIncomeLimit: null,
    incomeText: "No state income threshold — Governed by ARA Maharashtra 15% Supernumerary Quota",
    shortDescription: "Official advisory regarding fee structures, institutional quotas, and eligibility boundaries for NRI/OCI candidates under MahaDBT rules.",
    eligibility: [
      "Candidate seeking admission under 15% NRI / PIO / Children of Indian Workers in Gulf Countries (CIWGC) supernumerary quota.",
      "Must have sponsored NRI parent / genuine first-degree blood relative as recognized by Admission Regulating Authority (ARA).",
      "MahaDBT State Scholarships (SC, ST, OBC, EBC) require Maharashtra State Domicile; NRI candidates paying Institutional / NRI fees are NOT eligible for state DBT tuition subsidies.",
      "NRI candidates who have returned to Maharashtra and acquired official Maharashtra Domicile Type-A/B status may apply under open/EWS general criteria if admitted via regular CAP merit rounds."
    ],
    documents: [
      { id: "nri-passport", name: "Valid Passport & Overseas Visa of Student / Sponsor", mandatory: true, tip: "Proof of NRI status" },
      { id: "nri-sponsor", name: "Sponsorship Letter & Relationship Affidavit", mandatory: true, tip: "Affidavit stamped by Indian Embassy / Notary" },
      { id: "nri-remit", name: "Bank Remittance Certificate (NRE / NRO Account)", mandatory: true, tip: "Proof of foreign currency payment" },
      { id: "nri-cet", name: "MHT-CET / JEE Main Scorecard & CAP Registration Letter", mandatory: true, tip: "Official DTE NRI registration" },
      { id: "nri-equiv", name: "AIU Equivalence Certificate (If 12th from Foreign Board)", mandatory: true, tip: "Association of Indian Universities certification" }
    ],
    benefits: [
      { title: "Institutional Fee Ceiling Protection", detail: "As per ARA Maharashtra, fees charged to NRI/PIO candidates cannot exceed 3 to 5 times the regular FRA approved fees." },
      { title: "Direct Second Year Lateral Entry", detail: "NRI Diploma holders can access specialized 15% institutional lateral seats without entrance test prerequisites." },
      { title: "State Domicile Re-conversion", detail: "Students returning to permanent domicile in Maharashtra can transition to normal resident merit pool in subsequent qualifying rounds." }
    ],
    tags: ["NRI Quota", "ARA Norms", "Institutional Fees", "Foreign Boards"]
  },

  // ================= BONUS: MINORITY SCHOLARSHIP =================
  {
    id: "minority-state-scholarship",
    code: "MIN-01",
    name: "State Minority Scholarship for Higher and Technical Education",
    marathiName: "अल्पसंख्याक विद्यार्थ्यांसाठी उच्च व तंत्रशिक्षण शिष्यवृत्ती योजना",
    department: "Minority Development Department",
    category: "EWS",
    categoryLabel: "Religious Minorities (Muslim, Christian, Jain, Buddhist, Sikh, Parsi)",
    assistanceType: "Education",
    assistanceTypeLabel: "Annual Direct Financial Assistance",
    hostelEligible: false,
    annualCoveragePercent: 75,
    maxIncomeLimit: 800000,
    incomeText: "Family income up to ₹8,00,000/- for notified minority communities in Maharashtra",
    shortDescription: "Direct financial grant of up to ₹50,000 per year or actual tuition fees (whichever is lower) for minority engineering students.",
    eligibility: [
      "Student must belong to notified religious minority communities (Muslim, Buddhist, Christian, Jain, Sikh, Parsi, Jew).",
      "Maharashtra State Domicile is mandatory.",
      "Annual family income must not exceed ₹8,00,000/-.",
      "Admitted in approved B.Tech / B.E. course through CAP or institute merit.",
      "Minimum 50% marks in 12th Science / Diploma.",
      "Not availing any other government scholarship simultaneously."
    ],
    documents: [
      { id: "min-dom", name: "Maharashtra Domicile Certificate", mandatory: true, tip: "State domicile" },
      { id: "min-decl", name: "Self-Declaration of Minority Community Status", mandatory: true, tip: "Prescribed format" },
      { id: "min-inc", name: "Tahsildar Income Certificate (<= ₹8,00,000)", mandatory: true, tip: "Current financial year" },
      { id: "min-fee", name: "College Fee Receipt", mandatory: true, tip: "Proof of fee payment" },
      { id: "min-mark", name: "Previous Exam Marksheets", mandatory: true, tip: "Min 50% aggregate" },
      { id: "min-bank", name: "Aadhaar Linked Bank Passbook", mandatory: true, tip: "NPCI active" }
    ],
    benefits: [
      { title: "Up to ₹50,000 per Year", detail: "Direct cash assistance up to ₹50,000 per annum or actual tuition fees (whichever is less)." },
      { title: "Direct Transfer", detail: "Credited straight into the student's Aadhaar-linked savings bank account via DBT." }
    ],
    tags: ["Minority Welfare", "Up to ₹50,000", "Income < 8L", "Direct DBT"]
  }
];

// Caste / Category configuration for interactive filter bar
const CATEGORIES_CONFIG = [
  { id: "ALL", name: "All Categories", badge: "All Schemes", count: 12, icon: "layers", color: "indigo" },
  { id: "SC", name: "SC", fullTitle: "Scheduled Caste", count: 3, icon: "award", color: "blue", highlight: "100% Tuition + Swadhar Hostel" },
  { id: "ST", name: "ST", fullTitle: "Scheduled Tribe", count: 2, icon: "feather", color: "emerald", highlight: "100% Tuition + Swayam Hostel" },
  { id: "OBC", name: "OBC", fullTitle: "Other Backward Class", count: 2, icon: "shield", color: "amber", highlight: "50% Tuition + NCL Basis" },
  { id: "SEBC", name: "SEBC", fullTitle: "Socially & Educationally Backward", count: 2, icon: "bookmark", color: "orange", highlight: "50% Tuition + Panjabrao Hostel" },
  { id: "EWS", name: "EWS", fullTitle: "Economically Weaker / EBC", count: 3, icon: "file-text", color: "purple", highlight: "50% Tuition + Panjabrao Hostel" },
  { id: "NT", name: "NT", fullTitle: "Nomadic Tribes (VJNT)", count: 2, icon: "compass", color: "teal", highlight: "100% Tuition + Maintenance" },
  { id: "PwD", name: "PwD", fullTitle: "Persons with Disabilities (Divyang)", count: 1, icon: "heart", color: "rose", highlight: "Full Support + Transport Grant" },
  { id: "NRI", name: "NRI", fullTitle: "Non-Resident Indian / Quota", count: 1, icon: "globe", color: "cyan", highlight: "ARA Fee Norms & Guidelines" }
];

// Assistance types for secondary filtering
const ASSISTANCE_TYPES = [
  { id: "ALL", label: "All Assistance Types", icon: "check-circle" },
  { id: "Education", label: "Tuition & Exam Fee Waiver", icon: "book-open" },
  { id: "Stay & Food", label: "Hostel & Food (Nirvah Bhatta)", icon: "home" }
];

// Quick FAQs for engineering students
const SCHOLARSHIP_FAQS = [
  {
    q: "Is CAP Round admission compulsory to avail MahaDBT B.Tech scholarships?",
    a: "YES. For almost all state scholarships (SC, ST, OBC, VJNT, SEBC, EBC/EWS), admission through the Centralized Admission Process (CAP) conducted by State CET Cell Maharashtra is strictly mandatory. Management quota and institute-level quota admissions are not eligible for government fee reimbursements."
  },
  {
    q: "What if my Caste Validity Certificate (जात पडताळणी) is still in process?",
    a: "During initial CAP counseling, students are often permitted to submit the Caste Validity Scrutiny Committee Application Receipt. However, before the final MahaDBT scholarship disbursement deadline, original Caste Validity is compulsory. Without validity, the application will be marked defective by the Scrutiny Officer."
  },
  {
    q: "What is Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna?",
    a: "It is a special hostel maintenance allowance for EBC, EWS, and SEBC B.Tech students who do not have accommodation in government hostels. Eligible students studying in MMR/Pune/Nagpur receive up to ₹30,000/year (₹3,000/month for 10 months), and in other districts receive ₹20,000/year."
  },
  {
    q: "Why is Aadhaar Bank Seeding (NPCI Mapping) mandatory?",
    a: "MahaDBT disburses scholarship maintenance amounts and student allowances via DBT (Direct Benefit Transfer) using Aadhaar Payment Bridge (APB). Your bank account must not only have Aadhaar linked for KYC, but actively seeded with NPCI. You can verify this on UIDAI portal or via your bank branch."
  },
  {
    q: "Can I apply for two government scholarships in the same academic year?",
    a: "NO. A student cannot claim two tuition fee reimbursement scholarships simultaneously. However, you CAN pair a tuition scholarship with a permitted hostel allowance scheme (for example: Rajarshi Shahu Maharaj Tuition Waiver + Dr. Panjabrao Deshmukh Hostel Allowance)."
  }
];
