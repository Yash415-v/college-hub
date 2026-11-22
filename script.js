/**
 * ================================================================
 * YASH'S CYBER PORTFOLIO & COLLEGE HUB - SCRIPT.JS
 * Complete Interactive Logic for:
 * 1. Portfolio & Typing Animation
 * 2. 30s Live Cyber Typing Speed Battle (Feature #6)
 * 3. SGPA / CGPA Calculator with SPPU Scale & Animated Counters
 * 4. Attendance Tracker & Safe Bunk Advisor
 * 5. College Notes & PDF Viewer Modal
 * 6. Labs Practical Hub with Status Toggles
 * 7. Pomodoro Timer & Formula Cheat Sheets
 * 8. Binaural & Ambient Focus Audio Engine (Feature #8)
 * ================================================================
 */

// ================================================================
// 1. CUSTOMIZE YOUR DETAILS, NAME & CONTENT HERE
// ================================================================
const PORTFOLIO_CONFIG = {
  // Your Name & Titles
  name: "Yash",
  role: "Student · Developer",
  college: "DY Patil College of Engineering, Akurdi",
  department: "Department of Information Technology (IT) • 1st Year",
  email: "yash@example.com",
  
  // Hero Typing Animation Phrases
  typingPhrases: [
    "Hi, I'm Yash · Student · Developer",
    "First Year IT @ DY Patil Akurdi",
    "Python Enthusiast & Web Developer",
    "Building Cool Student Tech & AI Tools"
  ],

  // Passcode for Owner Mode
  ownerPasscode: "yash123"
};

// Social Profile Links Defaults
const defaultSocialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  email: "yash@example.com"
};

// Subject Sections for Notes Shelves
const defaultSubjectSections = [
  { id: "physics", name: "Engineering Physics", key: "Physics", icon: "fa-solid fa-atom", color: "#00f3ff" },
  { id: "python", name: "Programming with Python", key: "Python", icon: "fa-brands fa-python", color: "#9d4edd" },
  { id: "maths1", name: "Engineering Mathematics-I", key: "Maths-I", icon: "fa-solid fa-square-root-variable", color: "#ffaa00" },
  { id: "bee", name: "Basic Electrical & Electronics (BEE)", key: "BEE", icon: "fa-solid fa-bolt-lightning", color: "#39ff14" },
  { id: "sme", name: "Systems in Mechanical Engg (SME)", key: "SME", icon: "fa-solid fa-gears", color: "#ff007f" },
  { id: "webdev", name: "Web Development & AI", key: "Web Dev", icon: "fa-solid fa-laptop-code", color: "#00f3ff" },
  { id: "lab", name: "Lab Manuals & Practical Records", key: "Lab", icon: "fa-solid fa-flask-vial", color: "#14b8a6" }
];

// Curated Study Materials & PDFs
const defaultCollegeMaterials = [
  // 1. Engineering Physics Shelf
  {
    id: 1,
    title: "Engineering Physics - He-Ne Laser Lecture Notes",
    subject: "Physics",
    type: "Notes",
    description: "Helium-Neon (He-Ne) four-level gas laser: active medium, population inversion, resonant cavity, 632.8nm transition & engineering applications.",
    semester: "Semester 1",
    link: "files/HeNe_Laser_Notes.pdf",
    date: "Nov 2026"
  },
  {
    id: 2,
    title: "Laser Physics - Lecture 1 Quick Revision Handout",
    subject: "Physics",
    type: "Notes",
    description: "Stimulated absorption, spontaneous emission, Einstein coefficients (A & B relations), optical pumping, and metastable states.",
    semester: "Semester 1",
    link: "files/Laser_Lecture1_Revision.pdf",
    date: "Nov 2026"
  },
  {
    id: 3,
    title: "Engineering Physics Comprehensive Handbook & Optics",
    subject: "Physics",
    type: "Notes",
    description: "Complete university curriculum: Wave optics, thin film interference, Newton's rings, Fraunhofer diffraction grating, polarization, and optical fibers.",
    semester: "Semester 1",
    link: "files/Engineering_Physics_Comprehensive_Notes.pdf",
    date: "Nov 2026"
  },

  // 2. Programming with Python Shelf
  {
    id: 4,
    title: "The Ultimate Python Programming Handbook (Complete Guide)",
    subject: "Python",
    type: "Notes",
    description: "Comprehensive 50MB+ Python reference: variables, control flow, functions, OOP, list comprehensions, exceptions, file I/O, and data structures.",
    semester: "Semester 1",
    link: "files/The Ultimate Python Handbook.pdf",
    date: "Nov 2026"
  },
  {
    id: 5,
    title: "Python Lab Manual & Practical Problem Sets",
    subject: "Python",
    type: "Lab",
    description: "Practical problems: Flow of control, string methods, prime checks, recursion, data structures, and file handling experiments.",
    semester: "Semester 1",
    link: "files/Python_Programming_Lab_Manual.pdf",
    date: "Nov 2026"
  },

  // 3. Engineering Mathematics-I Shelf
  {
    id: 6,
    title: "Engineering Mathematics-I - Matrices & Differential Calculus",
    subject: "Maths-I",
    type: "Notes",
    description: "Complete course notes: Rank of a matrix, Echelon form, System of linear equations, Cayley-Hamilton theorem, Eigenvalues, Partial differentiation & Euler's theorem.",
    semester: "Semester 1",
    link: "files/Maths1_Matrices_Calculus_Notes.pdf",
    date: "Nov 2026"
  },
  {
    id: 7,
    title: "Mathematics-I - Taylor Series & Expansion Problem Sets",
    subject: "Maths-I",
    type: "Assignment",
    description: "Solved problems on Taylor and Maclaurin series expansions of one and two variables, Jacobians, and Maxima/Minima.",
    semester: "Semester 1",
    link: "files/Maths1_Matrices_Calculus_Notes.pdf",
    date: "Nov 2026"
  },

  // 4. Basic Electrical & Electronics (BEE) Shelf
  {
    id: 8,
    title: "Basic Electrical Engineering - DC Circuits & Network Theorems",
    subject: "BEE",
    type: "Notes",
    description: "Kirchhoff's Laws (KVL/KCL), Mesh & Nodal analysis, Thevenin's Theorem, Norton's Theorem, Maximum Power Transfer, and Superposition theorem.",
    semester: "Semester 1",
    link: "files/BEE_Circuits_and_Theorems_Notes.pdf",
    date: "Nov 2026"
  },
  {
    id: 9,
    title: "Basic Electrical Lab Manual & Circuit Experiments",
    subject: "BEE",
    type: "Lab",
    description: "Verification of KVL & KCL, Thevenin's equivalent circuit, RLC series resonance, and single-phase transformer load test experiments.",
    semester: "Semester 1",
    link: "files/Basic_Electrical_Lab_Manual.pdf",
    date: "Nov 2026"
  },

  // 5. Systems in Mechanical Engineering (SME) Shelf
  {
    id: 10,
    title: "Systems in Mechanical Engineering - Thermodynamics & IC Engines",
    subject: "SME",
    type: "Notes",
    description: "Laws of Thermodynamics, Heat engines, Otto & Diesel cycles, 2-stroke & 4-stroke engines, Electric & Hybrid vehicles, and Power transmission drives.",
    semester: "Semester 1",
    link: "files/SME_Thermodynamics_Notes.pdf",
    date: "Nov 2026"
  },

  // 6. Web Development & AI Shelf
  {
    id: 11,
    title: "Web Technologies & Modern Frontend Architecture",
    subject: "Web Dev",
    type: "Notes",
    description: "Semantic HTML5, CSS3 Grid/Flexbox, Glassmorphism UI patterns, JavaScript ES6+, DOM manipulation, Web Audio API, and responsive web design.",
    semester: "Semester 1",
    link: "files/Web_Technologies_Complete_Notes.pdf",
    date: "Nov 2026"
  },

  // 7. Lab Manuals & Practical Records Shelf
  {
    id: 12,
    title: "Engineering Physics Laboratory Manual & Viva Guide",
    subject: "Lab",
    type: "Lab",
    description: "Newton's rings radius of curvature, He-Ne laser wavelength diffraction, spectrometer prism angle, and optical fiber acceptance angle experiments.",
    semester: "Semester 1",
    link: "files/Physics_Lab_Manual_Experiments.pdf",
    date: "Nov 2026"
  },
  {
    id: 13,
    title: "Python Programming Practical Record & Lab Journal",
    subject: "Lab",
    type: "Lab",
    description: "10 completed practical assignments with algorithm, flowchart, Python 3 source code, sample outputs, and viva questions.",
    semester: "Semester 1",
    link: "files/Python_Programming_Lab_Manual.pdf",
    date: "Nov 2026"
  },
  {
    id: 14,
    title: "Basic Electrical Engineering Practical Manual",
    subject: "Lab",
    type: "Lab",
    description: "Laboratory experiments for 1st Year engineering: KVL, KCL, Thevenin equivalent, single-phase transformer efficiency, and earthing methods.",
    semester: "Semester 1",
    link: "files/Basic_Electrical_Lab_Manual.pdf",
    date: "Nov 2026"
  }
];

// Attendance Tracker Initial Subjects
const defaultAttendanceSubjects = [
  { id: 1, name: "Engineering Physics", attended: 22, total: 25 },
  { id: 2, name: "Programming with Python", attended: 26, total: 28 },
  { id: 3, name: "Engineering Mathematics-I", attended: 27, total: 32 },
  { id: 4, name: "Basic Electrical & Electronics (BEE)", attended: 19, total: 24 },
  { id: 5, name: "Systems in Mechanical Engg (SME)", attended: 15, total: 18 },
  { id: 6, name: "Python Programming Lab", attended: 11, total: 12 }
];

// SGPA Calculator Initial Courses (SPPU First Year IT)
const gradePointMap = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "P": 4,
  "F": 0
};

const defaultSgpaCourses = [
  { id: 1, name: "Engineering Mathematics-I", credits: 4, grade: "A+" },
  { id: 2, name: "Engineering Physics", credits: 4, grade: "A" },
  { id: 3, name: "Programming with Python", credits: 3, grade: "O" },
  { id: 4, name: "Basic Electrical & Electronics", credits: 3, grade: "A" },
  { id: 5, name: "Systems in Mechanical Engg", credits: 3, grade: "B+" },
  { id: 6, name: "Physics Lab & Practical", credits: 1, grade: "O" },
  { id: 7, name: "Python Programming Lab", credits: 2, grade: "O" },
  { id: 8, name: "Basic Electrical Lab", credits: 1, grade: "A+" }
];

// CGPA Calculator Initial Semesters
const defaultCgpaSemesters = [
  { id: 1, name: "Semester 1", sgpa: 8.85, credits: 21 },
  { id: 2, name: "Semester 2 (Target)", sgpa: 9.00, credits: 21 }
];

// Labs Practical Experiments Initial Data
const defaultLabsData = [
  {
    id: 1,
    title: "Experiment 1: Python Flow of Control, Loops & Patterns",
    subject: "Python Programming Lab",
    status: "done",
    date: "14 Oct 2026",
    link: "files/Python_Programming_Lab_Manual.pdf",
    notes: "Completed all star patterns and number pyramids with clean comments."
  },
  {
    id: 2,
    title: "Experiment 2: String Slicing, Palindrome & Anagram Check",
    subject: "Python Programming Lab",
    status: "done",
    date: "21 Oct 2026",
    link: "files/Python_Programming_Lab_Manual.pdf",
    notes: "Implemented string methods and checked edge case white spaces."
  },
  {
    id: 3,
    title: "Experiment 3: Functions, Recursion & Fibonacci Benchmark",
    subject: "Python Programming Lab",
    status: "done",
    date: "28 Oct 2026",
    link: "files/Python_Programming_Lab_Manual.pdf",
    notes: "Verified iterative vs recursive time benchmarks."
  },
  {
    id: 4,
    title: "Experiment 4: File I/O & Word Frequency Counter",
    subject: "Python Programming Lab",
    status: "pending",
    date: "25 Nov 2026",
    link: "files/Python_Programming_Lab_Manual.pdf",
    notes: "Read sample.txt, strip punctuation, count frequency using dictionary."
  },
  {
    id: 5,
    title: "Experiment 1: Determination of Wavelength of He-Ne Laser",
    subject: "Physics Lab & Practical",
    status: "done",
    date: "10 Oct 2026",
    link: "files/Physics_Lab_Manual_Experiments.pdf",
    notes: "Diffraction grating with 15000 lines/inch. λ calculated = 632.8 nm."
  },
  {
    id: 6,
    title: "Experiment 2: Newton's Rings & Radius of Curvature",
    subject: "Physics Lab & Practical",
    status: "pending",
    date: "28 Nov 2026",
    link: "files/Physics_Lab_Manual_Experiments.pdf",
    notes: "Traveling microscope readings for dark fringe diameters."
  },
  {
    id: 7,
    title: "Experiment 1: Verification of Thevenin's & Norton's Theorems",
    subject: "Basic Electrical Lab",
    status: "done",
    date: "18 Oct 2026",
    link: "files/Basic_Electrical_Lab_Manual.pdf",
    notes: "Measured V_th and R_th across load terminals and verified via formula."
  },
  {
    id: 8,
    title: "Experiment 2: Single Phase Transformer Load Test",
    subject: "Basic Electrical Lab",
    status: "pending",
    date: "30 Nov 2026",
    link: "files/Basic_Electrical_Lab_Manual.pdf",
    notes: "Determine efficiency and voltage regulation of single-phase transformer."
  },
  {
    id: 9,
    title: "Experiment 1: Study of 2-Stroke & 4-Stroke IC Engine Models",
    subject: "Systems in Mechanical Engg",
    status: "done",
    date: "05 Nov 2026",
    link: "files/SME_Thermodynamics_Notes.pdf",
    notes: "Dismantling and study of cut-section models of petrol and diesel engines."
  }
];

// Formulas Database for Cheat Sheets
const formulaDatabase = {
  maths: [
    {
      id: "m1",
      topic: "Rank of Matrix (Row Echelon Form)",
      tag: "Unit 1: Linear Algebra",
      code: "Rank(A) = Count of non-zero rows in Echelon form\nNormal Form: [I_r  0 ;  0  0] where r = rank",
      notes: "Perform elementary row transformations (R_i -> R_i - k*R_j). Column operations allowed ONLY for normal form."
    },
    {
      id: "m2",
      topic: "System of Linear Equations (AX = B)",
      tag: "Unit 1: Linear Algebra",
      code: "Rank(A) == Rank(A|B) == n  => Unique Solution\nRank(A) == Rank(A|B) < n   => Infinitely Many Solutions\nRank(A) != Rank(A|B)       => Inconsistent (No Solution)",
      notes: "For homogeneous equations AX = 0: If Rank(A) = n, only trivial solution (X=0)."
    },
    {
      id: "m3",
      topic: "Cayley-Hamilton Theorem & Matrix Inverse",
      tag: "Unit 2: Matrices",
      code: "|A - λI| = 0  =>  A^n + c_{n-1}*A^{n-1} + ... + c_0*I = 0\nA^-1 = (-1 / c_0) * (A^{n-1} + c_{n-1}*A^{n-2} + ... + c_1*I)",
      notes: "Every square matrix satisfies its own characteristic equation. Useful for computing high matrix powers."
    },
    {
      id: "m4",
      topic: "Euler's Theorem for Homogeneous Functions",
      tag: "Unit 4: Partial Derivatives",
      code: "x*(∂u/∂x) + y*(∂u/∂y) = n * u(x, y)\nx²*(∂²u/∂x²) + 2xy*(∂²u/∂x∂y) + y²*(∂²u/∂y²) = n*(n-1)*u",
      notes: "If u = f(z) where z is homogeneous of degree n, then x*(∂u/∂x) + y*(∂u/∂y) = n * (f(z) / f'(z))."
    }
  ],
  physics: [
    {
      id: "p1",
      topic: "He-Ne Laser System Parameters",
      tag: "Unit 3: Lasers",
      code: "Gas Mixture: He : Ne = 10 : 1\nWavelength:  λ = 632.8 nm (Red Visible Light)\nTransition:  3s -> 2p of Neon atom\nPumping:     Electric discharge (Electron impact)",
      notes: "He atoms are excited to metastable states (20.61 eV & 19.82 eV) and transfer energy resonantly to Ne atoms."
    },
    {
      id: "p2",
      topic: "Einstein's Coefficients & Population Inversion",
      tag: "Unit 3: Lasers",
      code: "A_21 / B_21 = (8 * π * h * ν³) / c³\nB_12 = B_21 (Stimulated Absorption = Stimulated Emission)\nPopulation Ratio: N2 / N1 = exp(-hν / (k_B * T))",
      notes: "Population inversion (N2 > N1) requires an active medium, a pump source, and a metastable state."
    },
    {
      id: "p3",
      topic: "Newton's Rings Fringe Diameters",
      tag: "Unit 1: Wave Optics",
      code: "Dark Rings:   D_n² = 4 * n * R * λ\nBright Rings: D_n² = 2 * (2n - 1) * R * λ\nWavelength:   λ = (D_{n+p}² - D_n²) / (4 * p * R)",
      notes: "D_n is directly proportional to √n for dark rings. Center is dark in reflected light."
    }
  ],
  python: [
    {
      id: "py1",
      topic: "List Comprehension with Filtering",
      tag: "Data Structures",
      code: "# Syntax: [expression for item in iterable if condition]\neven_squares = [x**2 for x in range(10) if x % 2 == 0]\n# Result: [0, 4, 16, 36, 64]",
      notes: "Significantly faster and more pythonic than creating an empty list and calling .append() inside a loop."
    },
    {
      id: "py2",
      topic: "Safe File I/O with Context Managers",
      tag: "File Handling",
      code: "with open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    lines = [line.strip() for line in f if line.strip()]",
      notes: "Automatically closes file handles safely even if runtime exceptions are raised."
    },
    {
      id: "py3",
      topic: "Lambda, Map, and Filter Pipeline",
      tag: "Functional Programming",
      code: "nums = [1, 2, 3, 4, 5, 6]\neven_cubes = list(map(lambda x: x**3, filter(lambda x: x % 2 == 0, nums)))\n# Result: [8, 64, 216]",
      notes: "Creates inline lambda functions without formal def syntax."
    }
  ],
  bee: [
    {
      id: "b1",
      topic: "Kirchhoff's Laws (KVL & KCL)",
      tag: "Unit 1: DC Circuits",
      code: "KCL (Current at Node): Σ I_in = Σ I_out\nKVL (Voltage in Loop): Σ V_sources - Σ (I * R) = 0",
      notes: "KCL represents conservation of electric charge. KVL represents conservation of energy."
    },
    {
      id: "b2",
      topic: "Thevenin's Equivalent Circuit",
      tag: "Unit 1: Network Theorems",
      code: "I_L = V_th / (R_th + R_L)\nP_L = I_L² * R_L\nMax Power Condition: R_L = R_th  =>  P_max = V_th² / (4 * R_th)",
      notes: "V_th is open-circuit voltage. R_th is equivalent resistance with independent sources neutralized."
    }
  ]
};

// ================================================================
// 2. DATA PERSISTENCE HELPERS (LOCALSTORAGE & SESSIONSTORAGE)
// ================================================================
function loadLocal(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : JSON.parse(JSON.stringify(fallback));
  } catch (e) {
    console.warn("Error reading localStorage key:", key, e);
    return JSON.parse(JSON.stringify(fallback));
  }
}

function saveLocal(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Error writing to localStorage:", key, e);
  }
}

// Resilient Safe Storage Wrappers (edge-cases: disabled cookies, private browsing)
function safeLocalStorageGet(key, fallback) {
  return loadLocal(key, fallback);
}

function safeLocalStorageSet(key, data) {
  saveLocal(key, data);
}

function safeSessionStorageGet(key, fallback) {
  try {
    const val = sessionStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSessionStorageSet(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}

// Global App States & Curriculum PDF Versioning
const CURRENT_MATERIALS_VER = "v3_authentic_curriculum_pdfs";
if (localStorage.getItem("yash_materials_version") !== CURRENT_MATERIALS_VER) {
  localStorage.setItem("yash_materials_version", CURRENT_MATERIALS_VER);
  localStorage.setItem("yash_college_materials", JSON.stringify(defaultCollegeMaterials));
  localStorage.setItem("yash_labs_data", JSON.stringify(defaultLabsData));
}

let socialLinks = loadLocal("yash_social_links", defaultSocialLinks);
let subjectSections = loadLocal("yash_subject_sections", defaultSubjectSections);
let collegeMaterials = loadLocal("yash_college_materials", defaultCollegeMaterials);
let attendanceSubjects = loadLocal("yash_attendance_tracker", defaultAttendanceSubjects);
let sgpaCourses = loadLocal("yash_sgpa_courses", defaultSgpaCourses);
let cgpaSemesters = loadLocal("yash_cgpa_semesters", defaultCgpaSemesters);
let labsData = loadLocal("yash_labs_data", defaultLabsData);

let isOwnerMode = localStorage.getItem("yash_owner_auth") === "true";

// Helper: Escape HTML to prevent XSS
function escapeHtml(str) {
  if (!str) return "";
  return str.toString().replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Helper: Floating Toast Notification
function showToast(msg) {
  const existing = document.querySelector(".site-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "site-toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--neon-lime);"></i> <span>${escapeHtml(msg)}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(25px)";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ================================================================
// 3. APP INITIALIZATION ON DOM READY
// ================================================================
document.addEventListener("DOMContentLoaded", () => {
  initFunModeEngine();        // Global Requirement: Fun Mode Toggle & Default Detector
  initThemeEngine();          // Feature 5: Dark / Light Mode with Circle Wipe
  initSoundFXEngine();        // Feature 3: Web Audio Sound FX Engine
  initTerminalBootLoader();    // Feature 1: Terminal Boot Loading Screen (2s)
  initScrollProgressBar();    // Feature 8: Fixed Gradient Scroll Progress Bar
  initCustomCursor();         // Feature 4: Custom Animated Cursor & Fading Particle Trail
  initCyberCanvas();
  initTypewriter();
  initScrollRevealAndNav();
  initTiltEffect();           // Feature 2: 3D Tilt Project Cards & Moving Glare
  initFooterClockAndTicker(); // Feature 7: Live Local Timezone Clock & Quotes Ticker
  initSocialLinks();
  initCalculator();           // Feature 6: CGPA Confetti Threshold Crossing
  initAttendanceTracker();    // Feature 6: Attendance 75% Confetti Threshold Crossing
  initNotesHub();
  initLabsHub();
  initStudyHub();
  initTypingBattle();         // Feature #6: 30s Live Cyber Typing Battle
  initFocusAudioEngine();     // Feature #8: Offline Binaural Focus Audio Engine
  initJarvisVoiceHUD();       // Feature #1: Sci-Fi JARVIS / Cyber AI Voice HUD (Web Speech API)
});

// ================================================================
// 4. CUSTOM ANIMATED CURSOR & FADING PARTICLE TRAIL (FEATURE 4)
// ================================================================
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const trailCanvas = document.getElementById("cursorTrailCanvas");
  if (!dot || !ring) return;

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
  if (isTouchDevice || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    dot.style.display = "none";
    ring.style.display = "none";
    if (trailCanvas) trailCanvas.style.display = "none";
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let trailParticles = [];
  const MAX_TRAIL_PARTICLES = 20;

  let ctx = null;
  if (trailCanvas) {
    ctx = trailCanvas.getContext("2d");
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
    window.addEventListener("resize", () => {
      trailCanvas.width = window.innerWidth;
      trailCanvas.height = window.innerHeight;
    });
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    if (isFunMode() && ctx) {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "cyber";
      let colorBase = "rgba(0, 243, 255, ";
      if (currentTheme === "obsidian") colorBase = "rgba(99, 102, 241, ";
      else if (currentTheme === "frost") colorBase = "rgba(56, 189, 248, ";
      else if (currentTheme === "academic") colorBase = "rgba(212, 175, 55, ";
      else if (currentTheme === "light") colorBase = "rgba(2, 132, 199, ";

      trailParticles.push({
        x: mouseX,
        y: mouseY,
        radius: 4,
        alpha: 0.7,
        colorBase: colorBase
      });
      if (trailParticles.length > MAX_TRAIL_PARTICLES) {
        trailParticles.shift();
      }
    }
  });

  function animateCursorAndTrail() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

    if (ctx && isFunMode()) {
      ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
      for (let i = 0; i < trailParticles.length; i++) {
        const p = trailParticles[i];
        p.radius *= 0.93;
        p.alpha *= 0.92;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = p.colorBase + p.alpha + ")";
        ctx.shadowColor = p.colorBase + "0.75)";
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      trailParticles = trailParticles.filter(p => p.alpha > 0.05);
    } else if (ctx) {
      ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
    }

    requestAnimationFrame(animateCursorAndTrail);
  }
  requestAnimationFrame(animateCursorAndTrail);

  const hoverTargets = "a, button, input, select, textarea, .tilt-card, .project-card, .pdf-card, .att-card, .lab-card, .cyber-tab-btn, .filter-pill, .arena-text-display, .audio-mode-btn, .nav-control-pill, .nav-icon-btn, .mobile-control-chip";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove("cursor-hover");
    }
  });
}

// ================================================================
// 5. ANIMATED BACKGROUND CANVAS (FLOATING PARTICLES & CYBER GRID)
// ================================================================
const THEME_CANVAS_PALETTES = {
  cyber: {
    p1: "rgba(0, 243, 255, 0.4)",
    p2: "rgba(255, 0, 127, 0.35)",
    linePrefix: "rgba(0, 243, 255, "
  },
  obsidian: {
    p1: "rgba(99, 102, 241, 0.4)",
    p2: "rgba(16, 185, 129, 0.35)",
    linePrefix: "rgba(99, 102, 241, "
  },
  frost: {
    p1: "rgba(56, 189, 248, 0.45)",
    p2: "rgba(45, 212, 191, 0.4)",
    linePrefix: "rgba(56, 189, 248, "
  },
  academic: {
    p1: "rgba(212, 175, 55, 0.45)",
    p2: "rgba(16, 185, 129, 0.35)",
    linePrefix: "rgba(212, 175, 55, "
  },
  light: {
    p1: "rgba(2, 132, 199, 0.35)",
    p2: "rgba(100, 116, 139, 0.25)",
    linePrefix: "rgba(2, 132, 199, "
  }
};

let currentCanvasThemePalette = THEME_CANVAS_PALETTES.cyber;
let cyberParticlesList = [];

function updateCyberCanvasColors(themeId) {
  currentCanvasThemePalette = THEME_CANVAS_PALETTES[themeId] || THEME_CANVAS_PALETTES.cyber;
  cyberParticlesList.forEach(p => {
    p.color = Math.random() > 0.5 ? currentCanvasThemePalette.p1 : currentCanvasThemePalette.p2;
  });
}

function initCyberCanvas() {
  const canvas = document.getElementById("cyberCanvas");
  if (!canvas) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const curTheme = document.documentElement.getAttribute("data-theme") || "cyber";
  currentCanvasThemePalette = THEME_CANVAS_PALETTES[curTheme] || THEME_CANVAS_PALETTES.cyber;

  const particleCount = Math.min(65, Math.floor((width * height) / 18000));
  cyberParticlesList = [];

  for (let i = 0; i < particleCount; i++) {
    cyberParticlesList.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? currentCanvasThemePalette.p1 : currentCanvasThemePalette.p2
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < cyberParticlesList.length; i++) {
      const p = cyberParticlesList[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.x -= (dx / dist) * 1.2;
        p.y -= (dy / dist) * 1.2;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < cyberParticlesList.length; j++) {
        const p2 = cyberParticlesList[j];
        const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist2 < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `${currentCanvasThemePalette.linePrefix}${0.14 * (1 - dist2 / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

// ================================================================
// 6. TYPEWRITER ANIMATION FOR HERO TITLE
// ================================================================
function initTypewriter() {
  const target = document.getElementById("typingTarget");
  if (!target) return;

  const phrases = PORTFOLIO_CONFIG.typingPhrases || [
    "Hi, I'm Yash · Student · Developer"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 95;

  function typeStep() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      target.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      target.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();
}

// ================================================================
// 7. SCROLL REVEAL & NAVIGATION
// ================================================================
function initScrollRevealAndNav() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.toggle("active", item.getAttribute("href") === `#${currentId}`);
    });
  });

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      mobileDrawer.classList.toggle("open");
    });
  }

  if (drawerCloseBtn && mobileDrawer && hamburgerBtn) {
    drawerCloseBtn.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      mobileDrawer.classList.remove("open");
    });
  }

  // Ensure mobile drawer closes on clicking any nav link or interactive navigation item
  document.querySelectorAll(".mobile-drawer a, .mobile-nav-item").forEach(link => {
    link.addEventListener("click", () => {
      if (hamburgerBtn) hamburgerBtn.classList.remove("active");
      if (mobileDrawer) mobileDrawer.classList.remove("open");
    });
  });

  // Close drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("open")) {
      if (hamburgerBtn) hamburgerBtn.classList.remove("active");
      mobileDrawer.classList.remove("open");
    }
  });
}

// ================================================================
// 8. 3D TILT EFFECT ON CARDS WITH MOVING GLARE (FEATURE 2)
// ================================================================
function initTiltEffect() {
  const cards = document.querySelectorAll(".project-card, .tilt-card");

  cards.forEach(card => {
    // Dynamically insert glare overlay if not present
    let glare = card.querySelector(".card-glare");
    if (!glare) {
      glare = document.createElement("div");
      glare.className = "card-glare";
      card.appendChild(glare);
    }

    let rafId = null;

    card.addEventListener("mousemove", (e) => {
      if (!isFunMode() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        card.style.transform = "none";
        if (glare) glare.style.opacity = "0";
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max ~12 degrees rotation as required
      const maxTilt = 12;
      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        if (glare) {
          glare.style.opacity = "1";
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.32) 0%, transparent 65%)`;
        }
      });
    });

    card.addEventListener("mouseleave", () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        if (glare) glare.style.opacity = "0";
      });
    });
  });
}

// ================================================================
// 9. SOCIAL LINKS & OWNER PROFILE MANAGER
// ================================================================
function initSocialLinks() {
  const heroSocialLinks = document.getElementById("heroSocialLinks");
  const contactGithubBtn = document.getElementById("contactGithubBtn");
  const contactLinkedinBtn = document.getElementById("contactLinkedinBtn");
  const contactEmailBtn = document.getElementById("contactEmailBtn");

  function renderSocialBar() {
    if (heroSocialLinks) {
      let html = "";
      if (socialLinks.github) {
        html += `<a href="${escapeHtml(socialLinks.github)}" target="_blank" class="social-btn github"><i class="fa-brands fa-github"></i> GitHub</a>`;
      }
      if (socialLinks.linkedin) {
        html += `<a href="${escapeHtml(socialLinks.linkedin)}" target="_blank" class="social-btn linkedin"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>`;
      }
      if (socialLinks.instagram) {
        html += `<a href="${escapeHtml(socialLinks.instagram)}" target="_blank" class="social-btn instagram"><i class="fa-brands fa-instagram"></i> Instagram</a>`;
      }
      if (socialLinks.email) {
        html += `<a href="mailto:${escapeHtml(socialLinks.email)}" class="social-btn email"><i class="fa-solid fa-paper-plane"></i> Email Me</a>`;
      }
      if (isOwnerMode) {
        html += `<button type="button" class="social-btn owner-edit-btn" onclick="window.openEditSocialModal()"><i class="fa-solid fa-pen-to-square"></i> Edit Profiles</button>`;
      }
      heroSocialLinks.innerHTML = html;
    }

    if (contactGithubBtn && socialLinks.github) contactGithubBtn.href = socialLinks.github;
    if (contactLinkedinBtn && socialLinks.linkedin) contactLinkedinBtn.href = socialLinks.linkedin;
    if (contactEmailBtn && socialLinks.email) contactEmailBtn.href = `mailto:${socialLinks.email}`;
  }

  const socialModal = document.getElementById("socialModal");
  const closeSocialModalBtn = document.getElementById("closeSocialModalBtn");
  const editSocialForm = document.getElementById("editSocialForm");
  const socialGithubInput = document.getElementById("socialGithubInput");
  const socialLinkedinInput = document.getElementById("socialLinkedinInput");
  const socialInstagramInput = document.getElementById("socialInstagramInput");
  const socialEmailInput = document.getElementById("socialEmailInput");

  window.openEditSocialModal = function() {
    if (!isOwnerMode) {
      alert("Only the verified website owner can edit social profiles.");
      return;
    }
    if (socialGithubInput) socialGithubInput.value = socialLinks.github || "";
    if (socialLinkedinInput) socialLinkedinInput.value = socialLinks.linkedin || "";
    if (socialInstagramInput) socialInstagramInput.value = socialLinks.instagram || "";
    if (socialEmailInput) socialEmailInput.value = socialLinks.email || "";
    if (socialModal) socialModal.classList.add("active");
  };

  if (closeSocialModalBtn && socialModal) {
    closeSocialModalBtn.addEventListener("click", () => socialModal.classList.remove("active"));
  }

  function normalizeUrl(val, platform) {
    let str = (val || "").trim();
    if (!str) return "";
    if (str.startsWith("http://") || str.startsWith("https://")) return str;
    str = str.replace(/^@+/, "");
    if (platform === "instagram") return `https://instagram.com/${str}`;
    if (platform === "github") return `https://github.com/${str}`;
    if (platform === "linkedin") return `https://linkedin.com/in/${str}`;
    return str;
  }

  if (editSocialForm) {
    editSocialForm.addEventListener("submit", (e) => {
      e.preventDefault();
      socialLinks.github = normalizeUrl(socialGithubInput.value, "github");
      socialLinks.linkedin = normalizeUrl(socialLinkedinInput.value, "linkedin");
      socialLinks.instagram = normalizeUrl(socialInstagramInput.value, "instagram");
      socialLinks.email = (socialEmailInput.value || "").trim();

      saveLocal("yash_social_links", socialLinks);
      renderSocialBar();
      if (socialModal) socialModal.classList.remove("active");
      showToast("Social profile links updated successfully!");
    });
  }

  renderSocialBar();
}

// ================================================================
// 10. SGPA & CGPA CALCULATOR WITH ANIMATED COUNTER & EDGE CASES
// ================================================================
function initCalculator() {
  const tabSgpaBtn = document.getElementById("tabSgpaBtn");
  const tabCgpaBtn = document.getElementById("tabCgpaBtn");
  const sgpaTab = document.getElementById("sgpaTab");
  const cgpaTab = document.getElementById("cgpaTab");

  if (tabSgpaBtn && tabCgpaBtn) {
    tabSgpaBtn.addEventListener("click", () => {
      tabSgpaBtn.classList.add("active");
      tabCgpaBtn.classList.remove("active");
      sgpaTab.classList.add("active");
      cgpaTab.classList.remove("active");
    });

    tabCgpaBtn.addEventListener("click", () => {
      tabCgpaBtn.classList.add("active");
      tabSgpaBtn.classList.remove("active");
      cgpaTab.classList.add("active");
      sgpaTab.classList.remove("active");
    });
  }

  const sgpaRowsList = document.getElementById("sgpaRowsList");
  const addSgpaRowBtn = document.getElementById("addSgpaRowBtn");
  const resetSgpaBtn = document.getElementById("resetSgpaBtn");

  const calculatedSgpa = document.getElementById("calculatedSgpa");
  const totalCreditsDisplay = document.getElementById("totalCreditsDisplay");
  const totalPointsDisplay = document.getElementById("totalPointsDisplay");
  const equivalentPercentageDisplay = document.getElementById("equivalentPercentageDisplay");
  const sgpaClassBadge = document.getElementById("sgpaClassBadge");
  const heroSgpaStat = document.getElementById("heroSgpaStat");

  function animateValue(elem, start, end, duration = 600, isDecimal = true) {
    if (!elem) return;
    const startTime = performance.now();
    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const val = start + (end - start) * progress;
      elem.textContent = isDecimal ? val.toFixed(2) : Math.round(val);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        elem.textContent = isDecimal ? end.toFixed(2) : Math.round(end);
      }
    }
    requestAnimationFrame(update);
  }

  function renderSgpaRows() {
    if (!sgpaRowsList) return;

    if (sgpaCourses.length === 0) {
      sgpaRowsList.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-dim);">
          No subjects added. Click <strong>+ Add Subject</strong> below to begin.
        </div>
      `;
      calculateSgpa(true);
      return;
    }

    sgpaRowsList.innerHTML = sgpaCourses.map(c => {
      const pts = gradePointMap[c.grade] ?? 0;
      const earned = (Number(c.credits) || 0) * pts;

      return `
        <div class="calc-row-item" data-id="${c.id}">
          <input type="text" class="calc-input" value="${escapeHtml(c.name)}" placeholder="Course name" onchange="window.updateSgpaField(${c.id}, 'name', this.value)">
          <input type="number" class="calc-input" min="1" max="10" value="${c.credits}" title="Credits" onchange="window.updateSgpaField(${c.id}, 'credits', this.value)">
          <select class="calc-select" onchange="window.updateSgpaField(${c.id}, 'grade', this.value)">
            ${Object.keys(gradePointMap).map(g => `
              <option value="${g}" ${g === c.grade ? 'selected' : ''}>${g} (${gradePointMap[g]} pts)</option>
            `).join("")}
          </select>
          <span class="calc-pts-badge">${earned}</span>
          <button class="btn-del-calc" title="Remove Course" onclick="window.removeSgpaRow(${c.id})">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join("");

    calculateSgpa();
  }

  let prevSgpaVal = 0;

  function calculateSgpa(isEmpty = false) {
    let totalCredits = 0;
    let totalPoints = 0;

    if (!isEmpty) {
      sgpaCourses.forEach(c => {
        const cr = Math.max(1, parseInt(c.credits, 10) || 1);
        const pt = gradePointMap[c.grade] ?? 0;
        totalCredits += cr;
        totalPoints += cr * pt;
      });
    }

    const sgpaNum = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
    const percentage = sgpaNum > 0 ? Math.max(0, (sgpaNum - 0.75) * 10) : 0;

    animateValue(calculatedSgpa, prevSgpaVal, sgpaNum, 500, true);
    prevSgpaVal = sgpaNum;

    if (heroSgpaStat) heroSgpaStat.textContent = sgpaNum > 0 ? sgpaNum.toFixed(2) : "--";
    if (totalCreditsDisplay) totalCreditsDisplay.textContent = totalCredits;
    if (totalPointsDisplay) totalPointsDisplay.textContent = totalPoints;
    if (equivalentPercentageDisplay) equivalentPercentageDisplay.textContent = `${percentage.toFixed(1)}%`;

    if (sgpaClassBadge) {
      if (sgpaNum >= 7.75) {
        sgpaClassBadge.textContent = "First Class with Distinction";
        sgpaClassBadge.style.color = "var(--neon-lime)";
        sgpaClassBadge.style.borderColor = "var(--neon-lime)";
      } else if (sgpaNum >= 6.75) {
        sgpaClassBadge.textContent = "First Class";
        sgpaClassBadge.style.color = "var(--neon-cyan)";
        sgpaClassBadge.style.borderColor = "var(--neon-cyan)";
      } else if (sgpaNum >= 5.75) {
        sgpaClassBadge.textContent = "Higher Second Class";
        sgpaClassBadge.style.color = "var(--neon-amber)";
        sgpaClassBadge.style.borderColor = "var(--neon-amber)";
      } else if (sgpaNum >= 4.00) {
        sgpaClassBadge.textContent = "Pass Class";
        sgpaClassBadge.style.color = "#cbd5e1";
        sgpaClassBadge.style.borderColor = "#94a3b8";
      } else {
        sgpaClassBadge.textContent = "ATKT / Needs Improvement";
        sgpaClassBadge.style.color = "var(--neon-pink)";
        sgpaClassBadge.style.borderColor = "var(--neon-pink)";
      }
    }
  }

  window.updateSgpaField = function(id, field, val) {
    const item = sgpaCourses.find(c => c.id === id);
    if (!item) return;

    if (field === 'credits') {
      item.credits = Math.min(12, Math.max(1, parseInt(val, 10) || 1));
    } else {
      item[field] = val;
    }
    saveLocal("yash_sgpa_courses", sgpaCourses);
    renderSgpaRows();
  };

  window.removeSgpaRow = function(id) {
    sgpaCourses = sgpaCourses.filter(c => c.id !== id);
    saveLocal("yash_sgpa_courses", sgpaCourses);
    renderSgpaRows();
  };

  if (addSgpaRowBtn) {
    addSgpaRowBtn.addEventListener("click", () => {
      sgpaCourses.push({
        id: Date.now(),
        name: "New Engineering Course",
        credits: 3,
        grade: "A"
      });
      saveLocal("yash_sgpa_courses", sgpaCourses);
      renderSgpaRows();
    });
  }

  if (resetSgpaBtn) {
    resetSgpaBtn.addEventListener("click", () => {
      if (confirm("Reset SGPA courses back to Semester 1 IT defaults?")) {
        sgpaCourses = JSON.parse(JSON.stringify(defaultSgpaCourses));
        saveLocal("yash_sgpa_courses", sgpaCourses);
        renderSgpaRows();
        showToast("SGPA reset to defaults");
      }
    });
  }

  renderSgpaRows();

  // --- CGPA Calculator Elements ---
  const cgpaRowsList = document.getElementById("cgpaRowsList");
  const addCgpaRowBtn = document.getElementById("addCgpaRowBtn");
  const resetCgpaBtn = document.getElementById("resetCgpaBtn");

  const calculatedCgpa = document.getElementById("calculatedCgpa");
  const totalSemestersDisplay = document.getElementById("totalSemestersDisplay");
  const totalCgpaCreditsDisplay = document.getElementById("totalCgpaCreditsDisplay");
  const cgpaPercentageDisplay = document.getElementById("cgpaPercentageDisplay");
  const cgpaClassBadge = document.getElementById("cgpaClassBadge");

  let prevCgpaVal = 0;
  let hasCgpaInitialComputed = false;

  function renderCgpaRows() {
    if (!cgpaRowsList) return;

    cgpaRowsList.innerHTML = cgpaSemesters.map(s => {
      const sgpa = Number(s.sgpa) || 0;
      const credits = Number(s.credits) || 0;
      const pts = (sgpa * credits).toFixed(1);

      return `
        <div class="calc-row-item cgpa-row-item" data-id="${s.id}">
          <input type="text" class="calc-input" value="${escapeHtml(s.name)}" placeholder="Semester" onchange="window.updateCgpaField(${s.id}, 'name', this.value)">
          <input type="number" class="calc-input" step="0.01" min="0" max="10" value="${s.sgpa}" placeholder="SGPA" onchange="window.updateCgpaField(${s.id}, 'sgpa', this.value)">
          <input type="number" class="calc-input" min="1" max="50" value="${s.credits}" placeholder="Credits" onchange="window.updateCgpaField(${s.id}, 'credits', this.value)">
          <span class="calc-pts-badge">${pts}</span>
          <button class="btn-del-calc" title="Remove Semester" onclick="window.removeCgpaRow(${s.id})">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join("");

    calculateCgpa();
  }

  function calculateCgpa() {
    let totalCredits = 0;
    let totalWeightedPoints = 0;

    cgpaSemesters.forEach(s => {
      const sgpa = Math.min(10, Math.max(0, parseFloat(s.sgpa) || 0));
      const cr = Math.max(1, parseInt(s.credits, 10) || 1);
      totalCredits += cr;
      totalWeightedPoints += sgpa * cr;
    });

    const cgpaNum = totalCredits > 0 ? (totalWeightedPoints / totalCredits) : 0;
    const percentage = cgpaNum > 0 ? Math.max(0, (cgpaNum - 0.75) * 10) : 0;

    // Feature 6: Confetti burst when calculated CGPA is 9.0 or higher (only once per threshold crossing)
    if (hasCgpaInitialComputed) {
      if (prevCgpaVal < CONFETTI_CONFIG.cgpaThreshold && cgpaNum >= CONFETTI_CONFIG.cgpaThreshold) {
        triggerConfettiBurst("cgpa", cgpaNum.toFixed(2));
        playBleepSound("celebrate");
        showToast(`🎓 Outstanding Academic Goal! CGPA reached ${cgpaNum.toFixed(2)} (>= ${CONFETTI_CONFIG.cgpaThreshold.toFixed(1)})!`);
      }
    } else {
      hasCgpaInitialComputed = true;
    }

    animateValue(calculatedCgpa, prevCgpaVal, cgpaNum, 500, true);
    prevCgpaVal = cgpaNum;

    if (totalSemestersDisplay) totalSemestersDisplay.textContent = cgpaSemesters.length;
    if (totalCgpaCreditsDisplay) totalCgpaCreditsDisplay.textContent = totalCredits;
    if (cgpaPercentageDisplay) cgpaPercentageDisplay.textContent = `${percentage.toFixed(1)}%`;

    if (cgpaClassBadge) {
      if (cgpaNum >= 7.75) {
        cgpaClassBadge.textContent = "First Class with Distinction";
        cgpaClassBadge.style.color = "var(--neon-lime)";
      } else if (cgpaNum >= 6.75) {
        cgpaClassBadge.textContent = "First Class";
        cgpaClassBadge.style.color = "var(--neon-cyan)";
      } else {
        cgpaClassBadge.textContent = "Higher Second / Pass";
        cgpaClassBadge.style.color = "var(--neon-amber)";
      }
    }
  }

  window.updateCgpaField = function(id, field, val) {
    const sem = cgpaSemesters.find(s => s.id === id);
    if (!sem) return;

    if (field === 'sgpa') {
      sem.sgpa = Math.min(10, Math.max(0, parseFloat(val) || 0));
    } else if (field === 'credits') {
      sem.credits = Math.max(1, parseInt(val, 10) || 1);
    } else {
      sem[field] = val;
    }
    saveLocal("yash_cgpa_semesters", cgpaSemesters);
    renderCgpaRows();
  };

  window.removeCgpaRow = function(id) {
    cgpaSemesters = cgpaSemesters.filter(s => s.id !== id);
    saveLocal("yash_cgpa_semesters", cgpaSemesters);
    renderCgpaRows();
  };

  if (addCgpaRowBtn) {
    addCgpaRowBtn.addEventListener("click", () => {
      const nextNum = cgpaSemesters.length + 1;
      cgpaSemesters.push({
        id: Date.now(),
        name: `Semester ${nextNum}`,
        sgpa: 8.50,
        credits: 21
      });
      saveLocal("yash_cgpa_semesters", cgpaSemesters);
      renderCgpaRows();
    });
  }

  if (resetCgpaBtn) {
    resetCgpaBtn.addEventListener("click", () => {
      if (confirm("Reset CGPA semesters back to defaults?")) {
        cgpaSemesters = JSON.parse(JSON.stringify(defaultCgpaSemesters));
        saveLocal("yash_cgpa_semesters", cgpaSemesters);
        renderCgpaRows();
        showToast("CGPA reset to defaults");
      }
    });
  }

  renderCgpaRows();
}

// ================================================================
// 11. ATTENDANCE TRACKER WITH SVG GAUGE & BUNK ADVISOR
// ================================================================
function initAttendanceTracker() {
  const attendanceGrid = document.getElementById("attendanceGrid");
  const overallPercentage = document.getElementById("overallPercentage");
  const overallGaugeFill = document.getElementById("overallGaugeFill");
  const overallClassesCount = document.getElementById("overallClassesCount");
  const overallStatusBadge = document.getElementById("overallStatusBadge");
  const heroAttendanceStat = document.getElementById("heroAttendanceStat");

  const openAddSubjectBtn = document.getElementById("openAddSubjectBtn");
  const closeSubjectModalBtn = document.getElementById("closeSubjectModalBtn");
  const subjectModal = document.getElementById("subjectModal");
  const addSubjectForm = document.getElementById("addSubjectForm");
  const resetAttendanceBtn = document.getElementById("resetAttendanceBtn");

  function renderAttendance() {
    let totalAttended = 0;
    let totalHeld = 0;

    attendanceSubjects.forEach(s => {
      totalAttended += Number(s.attended) || 0;
      totalHeld += Number(s.total) || 0;
    });

    const overallPct = totalHeld > 0 ? Math.round((totalAttended / totalHeld) * 100) : 0;

    if (overallPercentage) overallPercentage.textContent = `${overallPct}%`;
    if (heroAttendanceStat) heroAttendanceStat.textContent = `${overallPct}%`;
    if (overallClassesCount) overallClassesCount.textContent = `${totalAttended} of ${totalHeld} Classes Attended`;

    if (overallGaugeFill) {
      const circ = 314;
      const offset = circ - (overallPct / 100) * circ;
      overallGaugeFill.style.strokeDashoffset = Math.max(0, offset);

      if (overallPct >= 75) {
        overallGaugeFill.style.stroke = "var(--neon-lime)";
      } else if (overallPct >= 65) {
        overallGaugeFill.style.stroke = "var(--neon-amber)";
      } else {
        overallGaugeFill.style.stroke = "var(--neon-pink)";
      }
    }

    if (overallStatusBadge) {
      if (overallPct >= 75) {
        overallStatusBadge.className = "status-pill safe";
        overallStatusBadge.innerHTML = `<i class="fa-solid fa-shield-check"></i> Safe: Above 75% Threshold`;
      } else if (overallPct >= 65) {
        overallStatusBadge.className = "status-pill warning";
        overallStatusBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Warning: Borderline (${overallPct}%)`;
      } else {
        overallStatusBadge.className = "status-pill danger";
        overallStatusBadge.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Shortage Alert: Debarment Risk`;
      }
    }

    if (!attendanceGrid) return;

    if (attendanceSubjects.length === 0) {
      attendanceGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-dim);">
          No subjects added. Click <strong>+ Add Subject</strong> to start monitoring your attendance.
        </div>
      `;
      return;
    }

    attendanceGrid.innerHTML = attendanceSubjects.map(sub => {
      const attended = Number(sub.attended) || 0;
      const total = Number(sub.total) || 0;
      const pct = total > 0 ? Math.round((attended / total) * 100) : 0;

      let statusClass = "safe";
      let advisory = "";

      if (pct >= 75) {
        statusClass = "safe";
        const bunks = Math.floor((attended - 0.75 * total) / 0.75);
        if (bunks > 0) {
          advisory = `<i class="fa-solid fa-circle-check"></i> Safe! You can bunk <strong>${bunks}</strong> more class${bunks > 1 ? 'es' : ''}.`;
        } else {
          advisory = `<i class="fa-solid fa-triangle-exclamation"></i> Exactly on 75% border. Do not miss the next class!`;
        }
      } else {
        const needed = Math.ceil((0.75 * total - attended) / 0.25);
        statusClass = pct >= 65 ? "warning" : "danger";
        advisory = `<i class="fa-solid fa-triangle-exclamation"></i> Shortage! Attend next <strong>${needed}</strong> class${needed > 1 ? 'es' : ''} to reach 75%.`;
      }

      return `
        <div class="att-card" data-id="${sub.id}">
          <div>
            <div class="att-card-top">
              <h4 class="att-title">${escapeHtml(sub.name)}</h4>
              <button class="btn-del-subj" title="Delete Subject" onclick="window.removeAttendanceSubject(${sub.id})">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>

            <div class="att-stats-row">
              <span class="att-pct ${statusClass}">${pct}%</span>
              <span class="att-counts">${attended} / ${total} attended</span>
            </div>

            <div class="att-bar-wrap">
              <div class="att-bar ${statusClass}" style="width: ${Math.min(100, pct)}%;"></div>
            </div>

            <div class="att-advisory ${statusClass}">
              ${advisory}
            </div>
          </div>

          <div class="att-button-group">
            <button class="btn-att btn-present" onclick="window.markAttendance(${sub.id}, 'present')">
              <i class="fa-solid fa-check"></i> Present
            </button>
            <button class="btn-att btn-absent" onclick="window.markAttendance(${sub.id}, 'absent')">
              <i class="fa-solid fa-xmark"></i> Absent
            </button>
            <button class="btn-att btn-undo" title="Undo 1 class" onclick="window.markAttendance(${sub.id}, 'undo')">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  window.markAttendance = function(id, action) {
    const sub = attendanceSubjects.find(s => s.id === id);
    if (!sub) return;

    const prevAttended = Number(sub.attended) || 0;
    const prevTotal = Number(sub.total) || 0;
    const prevPct = prevTotal > 0 ? (prevAttended / prevTotal) * 100 : 0;

    if (action === 'present') {
      sub.attended = (Number(sub.attended) || 0) + 1;
      sub.total = (Number(sub.total) || 0) + 1;
    } else if (action === 'absent') {
      sub.total = (Number(sub.total) || 0) + 1;
    } else if (action === 'undo') {
      if (sub.total > 0) {
        if (sub.attended > 0) sub.attended -= 1;
        sub.total -= 1;
      }
    }

    const newAttended = Number(sub.attended) || 0;
    const newTotal = Number(sub.total) || 0;
    const newPct = newTotal > 0 ? (newAttended / newTotal) * 100 : 0;

    // Feature 6: Confetti burst when subject attendance crosses 75% threshold (from below to above)
    if (prevPct < CONFETTI_CONFIG.attendanceThreshold && newPct >= CONFETTI_CONFIG.attendanceThreshold) {
      triggerConfettiBurst("attendance", sub.name);
      playBleepSound("celebrate");
      showToast(`🎉 Attendance Goal Achieved! ${sub.name} is now ${Math.round(newPct)}% (Above ${CONFETTI_CONFIG.attendanceThreshold}%)!`);
    }

    saveLocal("yash_attendance_tracker", attendanceSubjects);
    renderAttendance();
  };

  window.removeAttendanceSubject = function(id) {
    if (confirm("Remove this subject from attendance monitoring?")) {
      attendanceSubjects = attendanceSubjects.filter(s => s.id !== id);
      saveLocal("yash_attendance_tracker", attendanceSubjects);
      renderAttendance();
    }
  };

  if (openAddSubjectBtn && subjectModal) {
    openAddSubjectBtn.addEventListener("click", () => subjectModal.classList.add("active"));
  }

  if (closeSubjectModalBtn && subjectModal) {
    closeSubjectModalBtn.addEventListener("click", () => subjectModal.classList.remove("active"));
  }

  if (addSubjectForm) {
    addSubjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("newSubjectName").value.trim();
      const attended = parseInt(document.getElementById("newSubjectAttended").value, 10) || 0;
      const total = parseInt(document.getElementById("newSubjectTotal").value, 10) || 0;

      if (!name) return;
      if (attended > total) {
        alert("Attended classes cannot be higher than total classes held!");
        return;
      }

      attendanceSubjects.push({
        id: Date.now(),
        name,
        attended,
        total
      });

      saveLocal("yash_attendance_tracker", attendanceSubjects);
      renderAttendance();
      addSubjectForm.reset();
      subjectModal.classList.remove("active");
      showToast(`Added "${name}" to Attendance Tracker!`);
    });
  }

  if (resetAttendanceBtn) {
    resetAttendanceBtn.addEventListener("click", () => {
      if (confirm("Reset attendance tracker back to 1st-Year IT defaults?")) {
        attendanceSubjects = JSON.parse(JSON.stringify(defaultAttendanceSubjects));
        saveLocal("yash_attendance_tracker", attendanceSubjects);
        renderAttendance();
        showToast("Attendance reset to defaults");
      }
    });
  }

  renderAttendance();
}

// ================================================================
// 12. COLLEGE NOTES HUB & PDF SHELF WITH OWNER PRIVILEGES
// ================================================================
function initNotesHub() {
  const notesSectionsContainer = document.getElementById("notesSectionsContainer");
  const subjectPills = document.getElementById("subjectPills");
  const typePills = document.getElementById("typePills");
  const searchInput = document.getElementById("searchInput");
  const heroNotesCount = document.getElementById("heroNotesCount");

  const toggleOwnerBtn = document.getElementById("toggleOwnerBtn");
  const ownerBtnText = document.getElementById("ownerBtnText");
  const ownerToolbar = document.getElementById("ownerToolbar");
  const lockOwnerBtn = document.getElementById("lockOwnerBtn");
  const openAddPdfGlobalBtn = document.getElementById("openAddPdfGlobalBtn");
  const openAddSectionBtn = document.getElementById("openAddSectionBtn");
  const exportCodeBtn = document.getElementById("exportCodeBtn");

  const addPdfModal = document.getElementById("addPdfModal");
  const closeAddPdfModalBtn = document.getElementById("closeAddPdfModalBtn");
  const addPdfForm = document.getElementById("addPdfForm");
  const pdfSubjectSelect = document.getElementById("pdfSubjectSelect");
  const triggerFilePickBtn = document.getElementById("triggerFilePickBtn");
  const pdfLocalFileInput = document.getElementById("pdfLocalFileInput");
  const pdfLinkInput = document.getElementById("pdfLinkInput");
  const pdfTitleInput = document.getElementById("pdfTitleInput");

  const addSectionModal = document.getElementById("addSectionModal");
  const closeAddSectionModalBtn = document.getElementById("closeAddSectionModalBtn");
  const addSectionForm = document.getElementById("addSectionForm");

  const exportModal = document.getElementById("exportModal");
  const closeExportModalBtn = document.getElementById("closeExportModalBtn");
  const exportCodeTextarea = document.getElementById("exportCodeTextarea");
  const copyExportCodeBtn = document.getElementById("copyExportCodeBtn");

  const pdfViewerModal = document.getElementById("pdfViewerModal");
  const closePdfViewerBtn = document.getElementById("closePdfViewerBtn");
  const pdfViewerTitle = document.getElementById("pdfViewerTitle");
  const pdfViewerFrame = document.getElementById("pdfViewerFrame");
  const pdfViewerExternalBtn = document.getElementById("pdfViewerExternalBtn");
  const pdfFallbackNotice = document.getElementById("pdfFallbackNotice");
  const pdfFallbackLink = document.getElementById("pdfFallbackLink");

  let activeSubjectFilter = "all";
  let activeTypeFilter = "all";
  let searchQuery = "";

  function updateOwnerUI() {
    if (isOwnerMode) {
      if (toggleOwnerBtn) toggleOwnerBtn.classList.add("active");
      if (ownerBtnText) ownerBtnText.textContent = "Owner Logged In";
      if (ownerToolbar) ownerToolbar.style.display = "flex";
    } else {
      if (toggleOwnerBtn) toggleOwnerBtn.classList.remove("active");
      if (ownerBtnText) ownerBtnText.textContent = "Owner Login";
      if (ownerToolbar) ownerToolbar.style.display = "none";
    }
  }

  function renderSubjectPills() {
    if (!subjectPills) return;

    let html = `
      <button class="filter-pill ${activeSubjectFilter === 'all' ? 'active' : ''}" data-subject="all">
        <i class="fa-solid fa-layer-group"></i> All Subjects
      </button>
    `;

    subjectSections.forEach(sec => {
      const isAct = activeSubjectFilter === sec.key ? 'active' : '';
      html += `
        <button class="filter-pill ${isAct}" data-subject="${escapeHtml(sec.key)}">
          <i class="${sec.icon || 'fa-solid fa-book'}"></i> ${escapeHtml(sec.name.split(' (')[0])}
        </button>
      `;
    });

    subjectPills.innerHTML = html;
  }

  function populateSubjectDropdown(selectedKey) {
    if (!pdfSubjectSelect) return;
    pdfSubjectSelect.innerHTML = subjectSections.map(sec => `
      <option value="${escapeHtml(sec.key)}" ${sec.key === selectedKey ? 'selected' : ''}>
        ${escapeHtml(sec.name)}
      </option>
    `).join("");
  }

  function renderNotes() {
    if (heroNotesCount) heroNotesCount.textContent = collegeMaterials.length;
    if (!notesSectionsContainer) return;

    const visibleSections = subjectSections.filter(sec => {
      if (activeSubjectFilter === "all") return true;
      return sec.key.toLowerCase() === activeSubjectFilter.toLowerCase();
    });

    if (visibleSections.length === 0) {
      notesSectionsContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-dim);">
          No subject shelves match the filter.
        </div>
      `;
      return;
    }

    let globalMatchCount = 0;

    const sectionsHtml = visibleSections.map(sec => {
      const secMaterials = collegeMaterials.filter(item => {
        const matchesSubject = item.subject.toLowerCase() === sec.key.toLowerCase();
        const matchesType = (activeTypeFilter === "all") || (item.type.toLowerCase() === activeTypeFilter.toLowerCase());
        const matchesSearch = 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSubject && matchesType && matchesSearch;
      });

      if (searchQuery && secMaterials.length === 0) return "";
      globalMatchCount += secMaterials.length;

      let cardsHtml = "";
      if (secMaterials.length === 0) {
        cardsHtml = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-dim);">
            <p>No documents found in this section.</p>
            ${isOwnerMode ? `
              <button class="cyber-btn cyber-btn-primary btn-sm" style="margin-top: 1rem;" onclick="window.openAddPdfModal('${escapeHtml(sec.key)}')">
                <i class="fa-solid fa-plus"></i> Add PDF to ${escapeHtml(sec.key)}
              </button>
            ` : ''}
          </div>
        `;
      } else {
        cardsHtml = secMaterials.map(item => `
          <div class="pdf-card" data-id="${item.id}">
            <div>
              <div class="pdf-top">
                <span class="pdf-type-badge ${item.type.toLowerCase()}">
                  <i class="fa-solid fa-file-pdf"></i> ${escapeHtml(item.type)}
                </span>
                ${isOwnerMode ? `
                  <button class="btn-card-del" title="Delete PDF" onclick="window.deletePdfItem(${item.id})">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                ` : ''}
              </div>
              <h4 class="pdf-title">${escapeHtml(item.title)}</h4>
              <p class="pdf-desc">${escapeHtml(item.description)}</p>
            </div>
            <div>
              <div class="pdf-meta">
                <i class="fa-regular fa-calendar"></i> ${escapeHtml(item.date || 'Nov 2026')} • ${escapeHtml(item.semester || 'Sem 1')}
              </div>
              <div class="pdf-actions-row">
                <button class="btn-pdf-preview" onclick="window.previewPdf('${escapeHtml(item.link)}', '${escapeHtml(item.title)}')">
                  <i class="fa-solid fa-eye"></i> Preview
                </button>
                <a href="${escapeHtml(item.link)}" target="_blank" class="btn-pdf-download">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Open
                </a>
              </div>
            </div>
          </div>
        `).join("");
      }

      return `
        <div class="subject-shelf" id="shelf-${sec.id}">
          <div class="shelf-header">
            <div class="shelf-title-wrap">
              <div class="shelf-icon" style="background: ${sec.color || 'var(--neon-cyan)'};">
                <i class="${sec.icon || 'fa-solid fa-book'}"></i>
              </div>
              <div>
                <h3 class="shelf-name">${escapeHtml(sec.name)}</h3>
                <span style="font-size: 0.8rem; color: var(--text-dim);">${secMaterials.length} Documents Available</span>
              </div>
            </div>
            <div>
              ${isOwnerMode ? `
                <button class="cyber-btn cyber-btn-ghost btn-sm" onclick="window.openAddPdfModal('${escapeHtml(sec.key)}')">
                  <i class="fa-solid fa-circle-plus"></i> Add PDF to this Section
                </button>
              ` : `
                <span class="table-badge">${secMaterials.length} PDFs</span>
              `}
            </div>
          </div>
          <div class="shelf-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    }).join("");

    if (searchQuery && globalMatchCount === 0) {
      notesSectionsContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--text-dim);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.4;"></i>
          <h3>No study materials found</h3>
          <p>No documents matched "<strong>${escapeHtml(searchQuery)}</strong>" across any subject shelf.</p>
        </div>
      `;
      return;
    }

    notesSectionsContainer.innerHTML = sectionsHtml;
  }

  window.openAddPdfModal = function(subjectKey) {
    populateSubjectDropdown(subjectKey);
    if (pdfLinkInput) pdfLinkInput.value = "";
    if (pdfTitleInput) pdfTitleInput.value = "";
    if (addPdfModal) addPdfModal.classList.add("active");
  };

  window.deletePdfItem = function(id) {
    const item = collegeMaterials.find(m => m.id === id);
    if (!item) return;
    if (confirm(`Delete "${item.title}" from ${item.subject}?`)) {
      collegeMaterials = collegeMaterials.filter(m => m.id !== id);
      saveLocal("yash_college_materials", collegeMaterials);
      renderNotes();
      showToast(`Deleted "${item.title}"`);
    }
  };

  window.previewPdf = function(link, title) {
    if (!pdfViewerModal) return;
    if (pdfViewerTitle) pdfViewerTitle.innerHTML = `<i class="fa-solid fa-file-pdf neon-pink"></i> ${escapeHtml(title)}`;
    if (pdfViewerExternalBtn) pdfViewerExternalBtn.href = link;
    if (pdfFallbackLink) pdfFallbackLink.href = link;

    const isDirectPdf = link.endsWith(".pdf") || link.startsWith("files/") || link.startsWith("data:application/pdf");

    if (isDirectPdf && pdfViewerFrame && pdfFallbackNotice) {
      pdfViewerFrame.style.display = "block";
      pdfFallbackNotice.style.display = "none";
      pdfViewerFrame.src = link;
    } else if (pdfViewerFrame && pdfFallbackNotice) {
      pdfViewerFrame.style.display = "none";
      pdfFallbackNotice.style.display = "block";
    }

    pdfViewerModal.classList.add("active");
  };

  if (toggleOwnerBtn) {
    toggleOwnerBtn.addEventListener("click", () => {
      if (isOwnerMode) {
        showToast("Owner mode is currently active!");
        return;
      }
      const pass = prompt("Enter Website Owner Passcode (Default: yash123):");
      if (pass === PORTFOLIO_CONFIG.ownerPasscode) {
        isOwnerMode = true;
        localStorage.setItem("yash_owner_auth", "true");
        updateOwnerUI();
        initSocialLinks();
        renderNotes();
        showToast("Welcome back, Yash! Owner mode enabled.");
      } else if (pass !== null) {
        alert("Incorrect passcode!");
      }
    });
  }

  if (lockOwnerBtn) {
    lockOwnerBtn.addEventListener("click", () => {
      isOwnerMode = false;
      localStorage.removeItem("yash_owner_auth");
      updateOwnerUI();
      initSocialLinks();
      renderNotes();
      showToast("Owner session locked.");
    });
  }

  if (subjectPills) {
    subjectPills.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;
      activeSubjectFilter = btn.dataset.subject;
      renderSubjectPills();
      renderNotes();
    });
  }

  if (typePills) {
    typePills.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;
      document.querySelectorAll("#typePills .filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTypeFilter = btn.dataset.type;
      renderNotes();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderNotes();
    });
  }

  if (openAddPdfGlobalBtn) {
    openAddPdfGlobalBtn.addEventListener("click", () => window.openAddPdfModal(subjectSections[0]?.key || "Physics"));
  }
  if (closeAddPdfModalBtn && addPdfModal) {
    closeAddPdfModalBtn.addEventListener("click", () => addPdfModal.classList.remove("active"));
  }

  if (triggerFilePickBtn && pdfLocalFileInput) {
    triggerFilePickBtn.addEventListener("click", () => pdfLocalFileInput.click());
    pdfLocalFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        if (pdfLinkInput) pdfLinkInput.value = `files/${file.name}`;
        if (pdfTitleInput && !pdfTitleInput.value) {
          pdfTitleInput.value = file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " ");
        }
        showToast(`Selected "${file.name}"`);
      }
    });
  }

  if (addPdfForm) {
    addPdfForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const subject = pdfSubjectSelect.value;
      const type = document.getElementById("pdfTypeSelect").value;
      const title = pdfTitleInput.value.trim();
      const link = pdfLinkInput.value.trim();
      const semester = document.getElementById("pdfSemesterInput").value.trim() || "Semester 1";
      const date = document.getElementById("pdfDateInput").value.trim() || "Nov 2026";
      const description = document.getElementById("pdfDescInput").value.trim();

      if (!title || !link) return;

      collegeMaterials.unshift({
        id: Date.now(),
        title,
        subject,
        type,
        description,
        semester,
        link,
        date
      });

      saveLocal("yash_college_materials", collegeMaterials);
      renderNotes();
      addPdfForm.reset();
      addPdfModal.classList.remove("active");
      showToast(`Added "${title}" to ${subject}!`);
    });
  }

  if (openAddSectionBtn && addSectionModal) {
    openAddSectionBtn.addEventListener("click", () => addSectionModal.classList.add("active"));
  }
  if (closeAddSectionModalBtn && addSectionModal) {
    closeAddSectionModalBtn.addEventListener("click", () => addSectionModal.classList.remove("active"));
  }
  if (addSectionForm) {
    addSectionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("newSectionName").value.trim();
      const key = document.getElementById("newSectionKey").value.trim();
      const color = document.getElementById("newSectionColor").value;

      if (!name || !key) return;

      subjectSections.push({
        id: key.toLowerCase().replace(/\s+/g, "-"),
        name,
        key,
        icon: "fa-solid fa-folder-bookmark",
        color
      });

      saveLocal("yash_subject_sections", subjectSections);
      renderSubjectPills();
      renderNotes();
      addSectionForm.reset();
      addSectionModal.classList.remove("active");
      showToast(`Created "${name}" section!`);
    });
  }

  if (exportCodeBtn && exportModal && exportCodeTextarea) {
    exportCodeBtn.addEventListener("click", () => {
      const codeOutput = `// Replace defaultCollegeMaterials & defaultSocialLinks with this:\nconst defaultCollegeMaterials = ${JSON.stringify(collegeMaterials, null, 2)};\n\nconst defaultSocialLinks = ${JSON.stringify(socialLinks, null, 2)};`;
      exportCodeTextarea.value = codeOutput;
      exportModal.classList.add("active");
    });
  }
  if (closeExportModalBtn && exportModal) {
    closeExportModalBtn.addEventListener("click", () => exportModal.classList.remove("active"));
  }
  if (copyExportCodeBtn && exportCodeTextarea) {
    copyExportCodeBtn.addEventListener("click", () => {
      exportCodeTextarea.select();
      navigator.clipboard.writeText(exportCodeTextarea.value);
      showToast("Data array copied to clipboard!");
    });
  }

  if (closePdfViewerBtn && pdfViewerModal) {
    closePdfViewerBtn.addEventListener("click", () => {
      pdfViewerModal.classList.remove("active");
      if (pdfViewerFrame) pdfViewerFrame.src = "about:blank";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === addPdfModal) addPdfModal.classList.remove("active");
    if (e.target === addSectionModal) addSectionModal.classList.remove("active");
    if (e.target === exportModal) exportModal.classList.remove("active");
    if (e.target === pdfViewerModal) {
      pdfViewerModal.classList.remove("active");
      if (pdfViewerFrame) pdfViewerFrame.src = "about:blank";
    }
  });

  updateOwnerUI();
  renderSubjectPills();
  renderNotes();
}

// ================================================================
// 13. LABS PRACTICAL HUB (EXPERIMENTS TRACKER WITH DONE/PENDING)
// ================================================================
function initLabsHub() {
  const labsGrid = document.getElementById("labsGrid");
  const totalLabsCount = document.getElementById("totalLabsCount");
  const doneLabsCount = document.getElementById("doneLabsCount");
  const pendingLabsCount = document.getElementById("pendingLabsCount");
  const labStatusFilters = document.getElementById("labStatusFilters");

  const openAddLabBtn = document.getElementById("openAddLabBtn");
  const closeAddLabModalBtn = document.getElementById("closeAddLabModalBtn");
  const addLabModal = document.getElementById("addLabModal");
  const addLabForm = document.getElementById("addLabForm");

  let activeStatusFilter = "all";

  function renderLabs() {
    const doneCount = labsData.filter(l => l.status === "done").length;
    const pendingCount = labsData.filter(l => l.status === "pending").length;

    if (totalLabsCount) totalLabsCount.textContent = labsData.length;
    if (doneLabsCount) doneLabsCount.textContent = doneCount;
    if (pendingLabsCount) pendingLabsCount.textContent = pendingCount;

    if (!labsGrid) return;

    const filtered = labsData.filter(l => {
      if (activeStatusFilter === "all") return true;
      return l.status === activeStatusFilter;
    });

    if (filtered.length === 0) {
      labsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-dim);">
          <i class="fa-solid fa-flask" style="font-size: 2rem; margin-bottom: 0.8rem; opacity: 0.4;"></i>
          <p>No practical experiments matching this status filter.</p>
        </div>
      `;
      return;
    }

    labsGrid.innerHTML = filtered.map(lab => {
      const isDone = lab.status === "done";
      return `
        <div class="lab-card" data-id="${lab.id}">
          <div>
            <div class="lab-card-header">
              <span class="lab-subject-tag">${escapeHtml(lab.subject)}</span>
              <button class="lab-status-toggle-btn ${isDone ? 'done' : 'pending'}" onclick="window.toggleLabStatus(${lab.id})" title="Click to toggle status">
                <i class="fa-solid ${isDone ? 'fa-circle-check' : 'fa-clock'}"></i>
                ${isDone ? 'Done' : 'Pending'}
              </button>
            </div>
            <h4 class="lab-card-title">${escapeHtml(lab.title)}</h4>
            <p class="lab-notes-text">${escapeHtml(lab.notes || 'Lab practical experiment records and expected output verification.')}</p>
          </div>

          <div class="lab-footer-row">
            <span class="lab-date-info"><i class="fa-regular fa-calendar"></i> ${escapeHtml(lab.date || 'Nov 2026')}</span>
            <div class="lab-action-links">
              ${lab.link && lab.link !== '#' ? (
                (lab.link.endsWith('.pdf') || lab.link.startsWith('files/')) ? `
                  <button onclick="window.previewPdf('${escapeHtml(lab.link)}', '${escapeHtml(lab.title)}')" class="cyber-btn cyber-btn-ghost btn-sm" title="Preview Lab Manual PDF">
                    <i class="fa-solid fa-file-pdf neon-pink"></i> View PDF
                  </button>
                  <a href="${escapeHtml(lab.link)}" target="_blank" class="cyber-btn cyber-btn-ghost btn-sm" title="Open in new window">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ` : `
                  <a href="${escapeHtml(lab.link)}" target="_blank" class="cyber-btn cyber-btn-ghost btn-sm">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Manual / Code
                  </a>
                `
              ) : ''}
              <button class="btn-card-del" title="Delete Lab" onclick="window.deleteLabItem(${lab.id})">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  window.toggleLabStatus = function(id) {
    const lab = labsData.find(l => l.id === id);
    if (!lab) return;
    lab.status = lab.status === "done" ? "pending" : "done";
    saveLocal("yash_labs_data", labsData);
    renderLabs();
    showToast(`Marked "${lab.title.substring(0, 24)}..." as ${lab.status.toUpperCase()}!`);
  };

  window.deleteLabItem = function(id) {
    const lab = labsData.find(l => l.id === id);
    if (!lab) return;
    if (confirm(`Remove practical "${lab.title}"?`)) {
      labsData = labsData.filter(l => l.id !== id);
      saveLocal("yash_labs_data", labsData);
      renderLabs();
      showToast("Lab experiment removed");
    }
  };

  if (labStatusFilters) {
    labStatusFilters.addEventListener("click", (e) => {
      const btn = e.target.closest(".lab-filter-btn");
      if (!btn) return;
      document.querySelectorAll(".lab-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeStatusFilter = btn.dataset.filter;
      renderLabs();
    });
  }

  if (openAddLabBtn && addLabModal) {
    openAddLabBtn.addEventListener("click", () => addLabModal.classList.add("active"));
  }
  if (closeAddLabModalBtn && addLabModal) {
    closeAddLabModalBtn.addEventListener("click", () => addLabModal.classList.remove("active"));
  }

  if (addLabForm) {
    addLabForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("labTitleInput").value.trim();
      const subject = document.getElementById("labSubjectInput").value.trim();
      const status = document.getElementById("labStatusInput").value;
      const date = document.getElementById("labDateInput").value.trim() || "Nov 2026";
      const link = document.getElementById("labLinkInput").value.trim() || "#";
      const notes = document.getElementById("labNotesInput").value.trim();

      if (!title || !subject) return;

      labsData.unshift({
        id: Date.now(),
        title,
        subject,
        status,
        date,
        link,
        notes
      });

      saveLocal("yash_labs_data", labsData);
      renderLabs();
      addLabForm.reset();
      addLabModal.classList.remove("active");
      showToast(`Added practical "${title}"!`);
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === addLabModal) addLabModal.classList.remove("active");
  });

  renderLabs();
}

// ================================================================
// 14. STUDY HUB: POMODORO TIMER & FORMULA CHEAT SHEETS
// ================================================================
function initStudyHub() {
  const pomoTimeDisplay = document.getElementById("pomoTimeDisplay");
  const pomoPhaseLabel = document.getElementById("pomoPhaseLabel");
  const pomoCircleFill = document.getElementById("pomoCircleFill");
  const pomoSessionCount = document.getElementById("pomoSessionCount");
  const pomoStartBtn = document.getElementById("pomoStartBtn");
  const pomoStartIcon = document.getElementById("pomoStartIcon");
  const pomoStartText = document.getElementById("pomoStartText");
  const pomoResetBtn = document.getElementById("pomoResetBtn");
  const pomoSoundBtn = document.getElementById("pomoSoundBtn");
  const pomoSubjectSelect = document.getElementById("pomoSubjectSelect");

  const modeDurations = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };

  let currentMode = "pomodoro";
  let totalDuration = modeDurations.pomodoro;
  let secondsRemaining = totalDuration;
  let timerInterval = null;
  let isTimerRunning = false;
  let isSoundActive = true;
  let completedPomodoros = parseInt(localStorage.getItem("yash_pomo_count") || "0", 10);

  if (pomoSessionCount) pomoSessionCount.textContent = completedPomodoros;

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateTimerUI() {
    if (pomoTimeDisplay) pomoTimeDisplay.textContent = formatTime(secondsRemaining);
    if (pomoCircleFill) {
      const circ = 540;
      const elapsed = totalDuration - secondsRemaining;
      const offset = (elapsed / totalDuration) * circ;
      pomoCircleFill.style.strokeDashoffset = offset;

      if (currentMode === "pomodoro") pomoCircleFill.style.stroke = "var(--neon-purple)";
      else if (currentMode === "shortBreak") pomoCircleFill.style.stroke = "var(--neon-lime)";
      else pomoCircleFill.style.stroke = "var(--neon-cyan)";
    }
  }

  function playSynthChime() {
    if (!isSoundActive) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.5);
      });
    } catch (e) {
      console.warn("AudioContext chime error:", e);
    }
  }

  function switchMode(newMode) {
    pauseTimer();
    currentMode = newMode;
    totalDuration = modeDurations[newMode] || 25 * 60;
    secondsRemaining = totalDuration;

    document.querySelectorAll(".pomo-mode-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mode === newMode);
    });

    if (pomoPhaseLabel) {
      if (newMode === "pomodoro") pomoPhaseLabel.textContent = "Focus Session";
      else if (newMode === "shortBreak") pomoPhaseLabel.textContent = "Short Break";
      else pomoPhaseLabel.textContent = "Long Break";
    }

    updateTimerUI();
  }

  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    if (pomoStartIcon) pomoStartIcon.className = "fa-solid fa-pause";
    if (pomoStartText) pomoStartText.textContent = "Pause";

    timerInterval = setInterval(() => {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateTimerUI();
      } else {
        handleTimerEnd();
      }
    }, 1000);
  }

  function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    if (pomoStartIcon) pomoStartIcon.className = "fa-solid fa-play";
    if (pomoStartText) pomoStartText.textContent = "Resume";
  }

  function resetTimer() {
    pauseTimer();
    secondsRemaining = totalDuration;
    if (pomoStartText) pomoStartText.textContent = "Start Focus";
    updateTimerUI();
  }

  function handleTimerEnd() {
    pauseTimer();
    playSynthChime();

    if (currentMode === "pomodoro") {
      completedPomodoros++;
      localStorage.setItem("yash_pomo_count", completedPomodoros);
      if (pomoSessionCount) pomoSessionCount.textContent = completedPomodoros;

      const subj = pomoSubjectSelect ? pomoSubjectSelect.value : "coursework";
      showToast(`🎉 Focus session complete on ${subj}! Take a short break.`);
      switchMode("shortBreak");
    } else {
      showToast("☕ Break finished! Ready to begin next study block.");
      switchMode("pomodoro");
    }
  }

  document.querySelectorAll(".pomo-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
  });

  if (pomoStartBtn) {
    pomoStartBtn.addEventListener("click", () => {
      if (isTimerRunning) pauseTimer();
      else startTimer();
    });
  }

  if (pomoResetBtn) pomoResetBtn.addEventListener("click", resetTimer);

  if (pomoSoundBtn) {
    pomoSoundBtn.addEventListener("click", () => {
      isSoundActive = !isSoundActive;
      pomoSoundBtn.innerHTML = isSoundActive 
        ? `<i class="fa-solid fa-volume-high"></i> Chime ON`
        : `<i class="fa-solid fa-volume-xmark"></i> Chime OFF`;
      showToast(isSoundActive ? "Chimes enabled" : "Chimes muted");
    });
  }

  updateTimerUI();

  // Formula Cheat Sheet Filter & Search
  const cheatItemsList = document.getElementById("cheatItemsList");
  const cheatSearchInput = document.getElementById("cheatSearchInput");
  const cheatTabs = document.getElementById("cheatTabs");

  let activeCheatSubject = "maths";
  let cheatSearchQuery = "";

  function renderCheatList() {
    if (!cheatItemsList) return;

    const list = formulaDatabase[activeCheatSubject] || [];
    const filtered = list.filter(item => {
      if (!cheatSearchQuery) return true;
      const q = cheatSearchQuery.toLowerCase();
      return (
        item.topic.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.notes.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      cheatItemsList.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-dim);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 0.6rem; opacity: 0.4;"></i>
          <p>No formulas matching "<strong>${escapeHtml(cheatSearchQuery)}</strong>".</p>
        </div>
      `;
      return;
    }

    cheatItemsList.innerHTML = filtered.map(item => `
      <div class="cheat-item-card" data-id="${item.id}">
        <div class="cheat-item-top">
          <h4 class="cheat-item-title">${escapeHtml(item.topic)}</h4>
          <span class="cheat-item-tag">${escapeHtml(item.tag)}</span>
        </div>
        <div class="cheat-code-box">
          <div class="cheat-code-text" id="code-${item.id}">${escapeHtml(item.code)}</div>
          <button class="btn-copy-cheat" onclick="window.copyFormula('${item.id}', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <p class="cheat-item-notes">
          <i class="fa-solid fa-lightbulb neon-amber" style="margin-right: 0.3rem;"></i>
          ${escapeHtml(item.notes)}
        </p>
      </div>
    `).join("");
  }

  window.copyFormula = function(id, btn) {
    const codeElem = document.getElementById(`code-${id}`);
    if (!codeElem) return;

    navigator.clipboard.writeText(codeElem.textContent).then(() => {
      const orig = btn.innerHTML;
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
      btn.style.background = "var(--neon-lime)";
      btn.style.color = "#060913";

      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = "";
        btn.style.color = "";
      }, 1800);

      showToast("Formula copied to clipboard!");
    });
  };

  if (cheatTabs) {
    cheatTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".cheat-tab-btn");
      if (!btn) return;
      document.querySelectorAll(".cheat-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCheatSubject = btn.dataset.subject;
      renderCheatList();
    });
  }

  if (cheatSearchInput) {
    cheatSearchInput.addEventListener("input", (e) => {
      cheatSearchQuery = e.target.value.trim();
      renderCheatList();
    });
  }

  renderCheatList();
}

// ================================================================
// 15. FEATURE #6: 30-SECOND CYBER TYPING SPEED ARENA
// ================================================================
function initTypingBattle() {
  const typingTextDisplay = document.getElementById("typingTextDisplay");
  const typingHiddenInput = document.getElementById("typingHiddenInput");
  const typingTimer = document.getElementById("typingTimer");
  const typingLiveWpm = document.getElementById("typingLiveWpm");
  const typingLiveAcc = document.getElementById("typingLiveAcc");
  const typingKeystrokes = document.getElementById("typingKeystrokes");
  const startTypingBattleBtn = document.getElementById("startTypingBattleBtn");
  const resetTypingBattleBtn = document.getElementById("resetTypingBattleBtn");
  const arenaResultBanner = document.getElementById("arenaResultBanner");
  const arenaResultHeadline = document.getElementById("arenaResultHeadline");
  const arenaResultDetail = document.getElementById("arenaResultDetail");
  const arenaResultIcon = document.getElementById("arenaResultIcon");

  if (!typingTextDisplay) return;

  const battleQuotes = [
    "python algorithms and data structures are the foundational bedrock of engineering logic.",
    "helium neon lasers produce coherent monochromatic light with a precise wavelength of 632.8 nm.",
    "matrices and row echelon transformations resolve complex multi variable linear equations.",
    "consistent daily problem solving in clean code and software design builds lasting engineering excellence.",
    "information technology empowers creative developers to craft bold responsive digital experiences.",
    "kirchhoffs laws and thevenin equivalent theorems form the core analytical basis of electrical networks."
  ];

  let currentPhrase = "";
  let charIndex = 0;
  let errorsCount = 0;
  let totalKeystrokes = 0;
  let timeLeft = 30;
  let timerInterval = null;
  let isBattleActive = false;
  let isBattleFinished = false;

  function loadNewPhrase() {
    const randomIdx = Math.floor(Math.random() * battleQuotes.length);
    currentPhrase = battleQuotes[randomIdx];
    charIndex = 0;
    errorsCount = 0;
    totalKeystrokes = 0;
    timeLeft = 30;
    isBattleActive = false;
    isBattleFinished = false;
    clearInterval(timerInterval);

    if (typingTimer) typingTimer.textContent = "30s";
    if (typingLiveWpm) typingLiveWpm.textContent = "0";
    if (typingLiveAcc) typingLiveAcc.textContent = "100%";
    if (typingKeystrokes) typingKeystrokes.textContent = "0";
    if (arenaResultBanner) arenaResultBanner.style.display = "none";
    if (startTypingBattleBtn) startTypingBattleBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start 30s Battle`;

    // Render characters
    typingTextDisplay.innerHTML = currentPhrase.split("").map((c, i) => {
      const cls = i === 0 ? "t-char char-current" : "t-char";
      return `<span class="${cls}" data-idx="${i}">${c === " " ? "&nbsp;" : escapeHtml(c)}</span>`;
    }).join("");
  }

  function startBattleTimer() {
    if (isBattleActive) return;
    isBattleActive = true;
    if (startTypingBattleBtn) startTypingBattleBtn.innerHTML = `<i class="fa-solid fa-bolt"></i> Battle In Progress...`;

    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        if (typingTimer) typingTimer.textContent = `${timeLeft}s`;
        updateLiveStats();
      } else {
        finishBattle();
      }
    }, 1000);
  }

  function updateLiveStats() {
    const elapsedSeconds = 30 - timeLeft;
    const elapsedMinutes = elapsedSeconds / 60;
    const correctChars = Math.max(0, charIndex - errorsCount);

    const wpm = elapsedMinutes > 0 ? Math.round((correctChars / 5) / elapsedMinutes) : 0;
    const acc = totalKeystrokes > 0 ? Math.max(0, Math.round((correctChars / totalKeystrokes) * 100)) : 100;

    if (typingLiveWpm) typingLiveWpm.textContent = wpm;
    if (typingLiveAcc) typingLiveAcc.textContent = `${acc}%`;
    if (typingKeystrokes) typingKeystrokes.textContent = totalKeystrokes;
  }

  function finishBattle() {
    clearInterval(timerInterval);
    isBattleActive = false;
    isBattleFinished = true;

    const elapsedSeconds = Math.max(1, 30 - timeLeft);
    const correctChars = Math.max(0, charIndex - errorsCount);
    const finalWpm = Math.round((correctChars / 5) / (elapsedSeconds / 60));
    const finalAcc = totalKeystrokes > 0 ? Math.max(0, Math.round((correctChars / totalKeystrokes) * 100)) : 100;

    if (typingTimer) typingTimer.textContent = "0s";
    if (typingLiveWpm) typingLiveWpm.textContent = finalWpm;
    if (typingLiveAcc) typingLiveAcc.textContent = `${finalAcc}%`;

    if (arenaResultBanner) {
      arenaResultBanner.style.display = "flex";
      arenaResultBanner.classList.remove("win", "loss");

      if (finalWpm >= 32) {
        arenaResultBanner.classList.add("win");
        if (arenaResultIcon) arenaResultIcon.innerHTML = `<i class="fa-solid fa-trophy neon-lime"></i>`;
        if (arenaResultHeadline) arenaResultHeadline.innerHTML = `👑 RECORD SHATTERED! (${finalWpm} WPM)`;
        if (arenaResultDetail) {
          arenaResultDetail.innerHTML = `Unbelievable speed! You crushed Yash's verified <strong>32 WPM</strong> MonkeyType record with <strong>${finalWpm} WPM</strong> at <strong>${finalAcc}%</strong> accuracy!`;
        }
        showToast(`🏆 Amazing! You beat Yash's 32 WPM record with ${finalWpm} WPM!`);
      } else {
        arenaResultBanner.classList.add("loss");
        const diff = 32 - finalWpm;
        if (arenaResultIcon) arenaResultIcon.innerHTML = `<i class="fa-solid fa-flag-checkered neon-pink"></i>`;
        if (arenaResultHeadline) arenaResultHeadline.innerHTML = `⚡ GREAT BATTLE! (${finalWpm} WPM)`;
        if (arenaResultDetail) {
          arenaResultDetail.innerHTML = `Valiant attempt! You scored <strong>${finalWpm} WPM</strong> (${finalAcc}% accuracy). Yash's 32 WPM benchmark holds by <strong>${diff} WPM</strong>. Try again!`;
        }
      }
    }

    if (startTypingBattleBtn) startTypingBattleBtn.innerHTML = `<i class="fa-solid fa-rotate-right"></i> Play Again`;
  }

  function handleTypingChar(key) {
    if (isBattleFinished) return;
    if (!isBattleActive) startBattleTimer();

    const charSpans = typingTextDisplay.querySelectorAll(".t-char");
    if (!charSpans || charIndex >= currentPhrase.length) {
      finishBattle();
      return;
    }

    totalKeystrokes++;

    if (key === "Backspace") {
      if (charIndex > 0) {
        charSpans[charIndex]?.classList.remove("char-current");
        charIndex--;
        charSpans[charIndex].classList.remove("char-correct", "char-incorrect");
        charSpans[charIndex].classList.add("char-current");
      }
      updateLiveStats();
      return;
    }

    // Only process printable single characters
    if (key.length !== 1) return;

    const expected = currentPhrase[charIndex];
    const span = charSpans[charIndex];

    if (key === expected) {
      span.classList.remove("char-current");
      span.classList.add("char-correct");
    } else {
      errorsCount++;
      span.classList.remove("char-current");
      span.classList.add("char-incorrect");
    }

    charIndex++;
    if (charIndex < currentPhrase.length) {
      charSpans[charIndex].classList.add("char-current");
    } else {
      finishBattle();
    }

    updateLiveStats();
  }

  // Event Listeners
  typingTextDisplay.addEventListener("click", () => {
    if (typingHiddenInput) typingHiddenInput.focus();
    typingTextDisplay.focus();
  });

  window.addEventListener("keydown", (e) => {
    // Only capture when typingArena is in view or active focus
    const arenaRect = typingArena.getBoundingClientRect();
    const inView = arenaRect.top < window.innerHeight && arenaRect.bottom > 0;
    const isInputFocused = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);

    if (inView && !isInputFocused) {
      if (e.key === "Backspace" || e.key.length === 1) {
        e.preventDefault();
        handleTypingChar(e.key);
      }
    }
  });

  if (typingHiddenInput) {
    typingHiddenInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (val) {
        const lastChar = val[val.length - 1];
        handleTypingChar(lastChar);
        typingHiddenInput.value = "";
      }
    });
  }

  if (startTypingBattleBtn) {
    startTypingBattleBtn.addEventListener("click", () => {
      if (isBattleFinished) {
        loadNewPhrase();
      }
      if (typingHiddenInput) typingHiddenInput.focus();
      typingTextDisplay.focus();
      startBattleTimer();
    });
  }

  if (resetTypingBattleBtn) {
    resetTypingBattleBtn.addEventListener("click", () => {
      loadNewPhrase();
      showToast("Loaded new typing challenge quote!");
    });
  }

  loadNewPhrase();
}

// ================================================================
// 16. FEATURE #8: OFFLINE BINAURAL & AMBIENT FOCUS AUDIO ENGINE
// ================================================================
function initFocusAudioEngine() {
  const toggleAudioBtn = document.getElementById("toggleAudioBtn");
  const toggleAudioIcon = document.getElementById("toggleAudioIcon");
  const toggleAudioText = document.getElementById("toggleAudioText");
  const audioStatusPill = document.getElementById("audioStatusPill");
  const audioStatusText = document.getElementById("audioStatusText");
  const cyberEqualizer = document.getElementById("cyberEqualizer");
  const audioVolumeSlider = document.getElementById("audioVolumeSlider");
  const audioModeChips = document.getElementById("audioModeChips");

  let audioCtx = null;
  let masterGain = null;
  let isPlaying = false;
  let currentSound = "rain";
  let activeNodes = [];
  let masterVolume = 0.5;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(masterVolume, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function stopActiveNodes() {
    activeNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    activeNodes = [];
  }

  // 1. Cyber Rain Generator (Filtered Pink Noise with Patter)
  function startRainSound(ctx, dest) {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    for (let i = 0; i < bufferSize; i++) {
      left[i] = (Math.random() * 2 - 1) * 0.45;
      right[i] = (Math.random() * 2 - 1) * 0.45;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    whiteNoise.loop = true;

    // Dual lowpass/bandpass filtering
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(1000, ctx.currentTime);

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(550, ctx.currentTime);
    bandpass.Q.setValueAtTime(1.2, ctx.currentTime);

    whiteNoise.connect(lowpass);
    lowpass.connect(bandpass);
    bandpass.connect(dest);

    whiteNoise.start();
    activeNodes.push(whiteNoise, lowpass, bandpass);
  }

  // 2. 40Hz Gamma Concentration Wave (Binaural Beats)
  function startBinauralSound(ctx, dest) {
    // Carrier oscillator: 210Hz
    const oscLeft = ctx.createOscillator();
    oscLeft.type = "sine";
    oscLeft.frequency.setValueAtTime(210, ctx.currentTime);

    // Modulated oscillator: 250Hz (Creates exactly 40Hz Gamma brainwave beat)
    const oscRight = ctx.createOscillator();
    oscRight.type = "sine";
    oscRight.frequency.setValueAtTime(250, ctx.currentTime);

    // Warm sub-bass drone
    const subOsc = ctx.createOscillator();
    subOsc.type = "sine";
    subOsc.frequency.setValueAtTime(105, ctx.currentTime);

    const waveGain = ctx.createGain();
    waveGain.gain.setValueAtTime(0.28, ctx.currentTime);

    oscLeft.connect(waveGain);
    oscRight.connect(waveGain);
    subOsc.connect(waveGain);
    waveGain.connect(dest);

    oscLeft.start();
    oscRight.start();
    subOsc.start();
    activeNodes.push(oscLeft, oscRight, subOsc, waveGain);
  }

  // 3. Deep Brown Noise Generator (Rumbling Waterfall)
  function startBrownNoise(ctx, dest) {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    let lastOutL = 0.0;
    let lastOutR = 0.0;

    for (let i = 0; i < bufferSize; i++) {
      const whiteL = Math.random() * 2 - 1;
      const whiteR = Math.random() * 2 - 1;
      left[i] = (lastOutL + (0.02 * whiteL)) / 1.02;
      right[i] = (lastOutR + (0.02 * whiteR)) / 1.02;
      lastOutL = left[i];
      lastOutR = right[i];
      left[i] *= 3.5;
      right[i] *= 3.5;
    }

    const brownSource = ctx.createBufferSource();
    brownSource.buffer = buffer;
    brownSource.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, ctx.currentTime);

    brownSource.connect(filter);
    filter.connect(dest);

    brownSource.start();
    activeNodes.push(brownSource, filter);
  }

  // 4. Cosmic Synth Drone (Ambient Space Texture)
  function startCosmicDrone(ctx, dest) {
    const osc1 = ctx.createOscillator();
    osc1.type = "sawtooth";
    osc1.frequency.setValueAtTime(110, ctx.currentTime); // A2

    const osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(110.8, ctx.currentTime); // Slow detune beat

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, ctx.currentTime);
    filter.Q.setValueAtTime(3.5, ctx.currentTime);

    // LFO to sweep filter slowly
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, ctx.currentTime);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(120, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.22, ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(dest);

    osc1.start();
    osc2.start();
    lfo.start();
    activeNodes.push(osc1, osc2, lfo, lfoGain, filter, droneGain);
  }

  function playCurrentSound() {
    const ctx = getAudioContext();
    stopActiveNodes();

    if (currentSound === "rain") {
      startRainSound(ctx, masterGain);
    } else if (currentSound === "binaural") {
      startBinauralSound(ctx, masterGain);
    } else if (currentSound === "brown") {
      startBrownNoise(ctx, masterGain);
    } else if (currentSound === "space") {
      startCosmicDrone(ctx, masterGain);
    }
  }

  function startAudioEngine() {
    isPlaying = true;
    playCurrentSound();

    if (toggleAudioIcon) toggleAudioIcon.className = "fa-solid fa-pause";
    if (toggleAudioText) toggleAudioText.textContent = "Pause Audio";
    if (audioStatusPill) {
      audioStatusPill.classList.add("playing");
      if (audioStatusText) audioStatusText.textContent = "LIVE FOCUS";
    }
    if (cyberEqualizer) cyberEqualizer.classList.add("active");
    showToast(`🎧 Started ${currentSound.toUpperCase()} focus audio`);
  }

  function stopAudioEngine() {
    isPlaying = false;
    stopActiveNodes();

    if (toggleAudioIcon) toggleAudioIcon.className = "fa-solid fa-play";
    if (toggleAudioText) toggleAudioText.textContent = "Start Audio";
    if (audioStatusPill) {
      audioStatusPill.classList.remove("playing");
      if (audioStatusText) audioStatusText.textContent = "STANDBY";
    }
    if (cyberEqualizer) cyberEqualizer.classList.remove("active");
  }

  if (toggleAudioBtn) {
    toggleAudioBtn.addEventListener("click", () => {
      if (isPlaying) stopAudioEngine();
      else startAudioEngine();
    });
  }

  if (audioModeChips) {
    audioModeChips.addEventListener("click", (e) => {
      const btn = e.target.closest(".audio-mode-btn");
      if (!btn) return;

      document.querySelectorAll(".audio-mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSound = btn.dataset.sound;

      if (isPlaying) {
        playCurrentSound();
        showToast(`Switched focus sound to ${currentSound.toUpperCase()}`);
      }
    });
  }

  if (audioVolumeSlider) {
    audioVolumeSlider.addEventListener("input", (e) => {
      masterVolume = parseFloat(e.target.value);
      if (masterGain && audioCtx) {
        masterGain.gain.setValueAtTime(masterVolume, audioCtx.currentTime);
      }
    });
  }
}

// ================================================================
// 17. 🎙️ SCI-FI JARVIS / CYBER AI VOICE HUD (Feature #1)
// Interactive Cyberpunk AI Assistant using native Web Speech API
// SpeechRecognition & SpeechSynthesis + Web Audio Synthesizer (0 External APIs)
// ================================================================
function initJarvisVoiceHUD() {
  const hudRoot = document.getElementById("jarvisVoiceHud");
  const orbBtn = document.getElementById("jarvisOrbBtn");
  const orbWrapper = document.getElementById("jarvisOrbWrapper");
  const hudPanel = document.getElementById("jarvisHudPanel");
  const closeHudBtn = document.getElementById("hudCloseBtn");
  const muteBtn = document.getElementById("hudVoiceMuteBtn");
  const muteIcon = document.getElementById("hudVoiceMuteIcon");
  const listenToggleBtn = document.getElementById("hudListenToggleBtn");
  const listenText = document.getElementById("hudListenText");
  const listenIcon = document.getElementById("hudListenIcon");

  const ledStatus = document.getElementById("hudLedStatus");
  const subState = document.getElementById("hudSubState");
  const statePill = document.getElementById("hudStatePill");
  const beaconDot = document.getElementById("jarvisBeaconDot");
  const beaconText = document.getElementById("jarvisBeaconText");
  const userTranscript = document.getElementById("hudUserTranscript");
  const aiTranscript = document.getElementById("hudAiTranscript");

  const navTrigger = document.getElementById("navJarvisBtn");
  const mobileNavTrigger = document.getElementById("mobileNavJarvisBtn");
  const heroTrigger = document.getElementById("heroJarvisBtn");
  const commandChips = document.querySelectorAll(".hud-command-chip");

  if (!hudRoot || !orbBtn || !hudPanel) return;

  // Speech Recognition & Synthesis Availability
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const hasSpeechRec = !!SpeechRecognition;
  const hasSpeechSynth = "speechSynthesis" in window;

  let recognition = null;
  let isListeningExplicitly = false;
  let isVoiceMuted = localStorage.getItem("yash_jarvis_voice_muted") === "true";
  let jarvisState = "idle"; // 'idle' | 'listening' | 'speaking' | 'processing'
  let cachedVoices = [];

  // Update Mute Button UI
  function updateMuteButtonUI() {
    if (!muteIcon) return;
    if (isVoiceMuted) {
      muteIcon.className = "fa-solid fa-volume-xmark";
      muteIcon.style.color = "var(--neon-pink)";
      if (muteBtn) muteBtn.title = "Unmute Synthetic Voice Audio";
    } else {
      muteIcon.className = "fa-solid fa-volume-high";
      muteIcon.style.color = "var(--neon-cyan)";
      if (muteBtn) muteBtn.title = "Mute Synthetic Voice Audio";
    }
  }
  updateMuteButtonUI();

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      isVoiceMuted = !isVoiceMuted;
      localStorage.setItem("yash_jarvis_voice_muted", isVoiceMuted);
      updateMuteButtonUI();
      if (isVoiceMuted && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      showToast(isVoiceMuted ? "JARVIS Voice Audio Muted" : "JARVIS Voice Audio Online");
    });
  }

  // Load SpeechSynthesis Voices
  function loadVoices() {
    if (hasSpeechSynth) {
      cachedVoices = window.speechSynthesis.getVoices();
    }
  }
  loadVoices();
  if (hasSpeechSynth && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Native Web Audio Synthesizer for Sci-Fi Sound FX (Zero External Files/APIs)
  function playJarvisSound(type) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === "activate") {
        // High-tech sci-fi activation chirp
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.14); // D6
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === "command") {
        // Futuristic acknowledgment triad ping
        [880, 1318.51, 1760].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
          gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.07);
          osc.stop(ctx.currentTime + idx * 0.07 + 0.23);
        });
      } else if (type === "focus") {
        // Deep sub-bass cyber warp drop + resonant chime
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = "sawtooth";
        osc1.frequency.setValueAtTime(160, ctx.currentTime);
        osc1.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.4);
        gain1.gain.setValueAtTime(0.2, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start();
        osc1.stop(ctx.currentTime + 0.46);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(987.77, ctx.currentTime + 0.1);
        gain2.gain.setValueAtTime(0.15, ctx.currentTime + 0.1);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(ctx.currentTime + 0.1);
        osc2.stop(ctx.currentTime + 0.46);
      } else if (type === "error") {
        // Sci-fi warning alert
        [220, 185].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
          gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.15);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.12);
          osc.stop(ctx.currentTime + idx * 0.12 + 0.16);
        });
      }
    } catch (e) {
      console.warn("JARVIS Web Audio effect warning:", e);
    }
  }

  // Update State Machine & Visual HUD Displays
  function setJarvisState(newState) {
    jarvisState = newState;
    hudRoot.setAttribute("data-state", newState);

    if (ledStatus) {
      ledStatus.className = "hud-led-status " + newState;
    }

    if (statePill) {
      statePill.textContent = newState.toUpperCase();
    }

    if (beaconText) {
      if (newState === "listening") beaconText.textContent = "LISTENING...";
      else if (newState === "speaking") beaconText.textContent = "SPEAKING...";
      else if (newState === "processing") beaconText.textContent = "PROCESSING...";
      else beaconText.textContent = "JARVIS AI";
    }

    if (subState) {
      if (newState === "listening") subState.textContent = "MICROPHONE ACTIVE · LISTENING FOR PROTOCOLS...";
      else if (newState === "speaking") subState.textContent = "TRANSMITTING SYNTHETIC AUDIO FEED...";
      else if (newState === "processing") subState.textContent = "EXECUTING SYSTEM PROTOCOL...";
      else subState.textContent = hasSpeechRec ? "SYSTEM ONLINE · VOICE READY" : "AUDIO READY · PROTOCOLS ONLINE";
    }

    if (listenToggleBtn && listenText && listenIcon) {
      if (newState === "listening") {
        listenToggleBtn.classList.add("active");
        listenText.textContent = "Stop Listening";
        listenIcon.className = "fa-solid fa-stop";
      } else if (newState === "idle") {
        listenToggleBtn.classList.remove("active");
        listenText.textContent = "Start Listening";
        listenIcon.className = "fa-solid fa-microphone";
      }
    }
  }

  // Synthetic Sci-Fi Voice Readout (Zero External APIs)
  function speakJarvis(text, onComplete) {
    if (!hasSpeechSynth || isVoiceMuted) {
      if (onComplete) onComplete();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    if (!cachedVoices.length) cachedVoices = window.speechSynthesis.getVoices();

    // Select optimal crisp, robotic / sci-fi English voice
    const preferredVoice = cachedVoices.find(v =>
      v.lang.startsWith("en") && (
        v.name.includes("Google UK English Male") ||
        v.name.includes("Google UK English Female") ||
        v.name.includes("Daniel") ||
        v.name.includes("David") ||
        v.name.includes("George") ||
        v.name.includes("Oliver") ||
        v.name.includes("Zira") ||
        v.name.includes("Samantha") ||
        v.name.includes("Natural")
      )
    ) || cachedVoices.find(v => v.lang.startsWith("en")) || cachedVoices[0];

    if (preferredVoice) utterance.voice = preferredVoice;

    // Pitch & rate tuned for high-tech AI timbre
    utterance.pitch = 1.08;
    utterance.rate = 1.04;

    utterance.onstart = () => {
      setJarvisState("speaking");
    };

    utterance.onend = () => {
      setJarvisState(isListeningExplicitly ? "listening" : "idle");
      if (onComplete) onComplete();
    };

    utterance.onerror = (e) => {
      console.warn("SpeechSynthesis error:", e);
      setJarvisState(isListeningExplicitly ? "listening" : "idle");
      if (onComplete) onComplete();
    };

    window.speechSynthesis.speak(utterance);
  }

  // Update Dialogue Transcript in HUD
  function setHudDialogue(userText, aiText, customHtml = null) {
    if (userTranscript && userText) {
      userTranscript.textContent = `"${userText}"`;
    }
    if (aiTranscript && aiText) {
      aiTranscript.textContent = `"${aiText}"`;
      const existingCards = aiTranscript.parentElement.querySelectorAll(".jarvis-creator-banner, .jarvis-suggestion-card");
      existingCards.forEach(c => c.remove());
      if (customHtml) {
        aiTranscript.parentElement.insertAdjacentHTML("beforeend", customHtml);
      }
    }
  }

  // Open & Close HUD Console
  function openHudPanel() {
    hudPanel.classList.add("active");
    orbBtn.setAttribute("aria-expanded", "true");
  }

  function closeHudPanel() {
    hudPanel.classList.remove("active");
    orbBtn.setAttribute("aria-expanded", "false");
  }

  function toggleHudPanel() {
    if (hudPanel.classList.contains("active")) {
      closeHudPanel();
    } else {
      openHudPanel();
      playJarvisSound("activate");
    }
  }

  // Setup Web Speech Recognition
  if (hasSpeechRec) {
    try {
      recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setJarvisState("listening");
      };

      recognition.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const trans = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += trans;
          } else {
            interimTranscript += trans;
          }
        }

        const candidateText = (finalTranscript || interimTranscript).trim();
        if (candidateText && userTranscript) {
          userTranscript.textContent = `"${candidateText}"`;
        }

        if (finalTranscript) {
          processVoiceCommand(finalTranscript);
        } else if (interimTranscript) {
          // Check for quick keyword matches even on interim results
          const lower = interimTranscript.toLowerCase();
          if (
            lower.includes("calculate attendance") ||
            lower.includes("open python notes") ||
            lower.includes("engage focus mode") ||
            lower.includes("who made this")
          ) {
            processVoiceCommand(interimTranscript);
          }
        }
      };

      recognition.onerror = (event) => {
        console.warn("SpeechRecognition error:", event.error);
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
          isListeningExplicitly = false;
          setJarvisState("idle");
          setHudDialogue(
            "Microphone blocked",
            "Microphone permission is required for live voice. You can still click any protocol chip below to execute commands instantly!"
          );
          showToast("Microphone access denied. Click chips to run commands.");
        } else if (event.error === "no-speech") {
          if (!isListeningExplicitly) {
            setJarvisState("idle");
          }
        }
      };

      recognition.onend = () => {
        // If user wants listening active and we are not speaking, gracefully restart
        if (isListeningExplicitly && jarvisState !== "speaking" && jarvisState !== "processing") {
          setTimeout(() => {
            if (isListeningExplicitly) {
              try {
                recognition.start();
              } catch (e) {
                // already running or transient error
              }
            }
          }, 250);
        } else if (!isListeningExplicitly && jarvisState !== "speaking") {
          setJarvisState("idle");
        }
      };
    } catch (err) {
      console.warn("SpeechRecognition init exception:", err);
    }
  } else {
    // Unsupported browser fallback message
    if (subState) {
      subState.textContent = "BROWSER NOTE: Click chips to run protocols";
    }
  }

  // Toggle Voice Listening Active / Inactive
  function startListening() {
    openHudPanel();
    if (!hasSpeechRec) {
      showToast("Web Speech Recognition requires Chrome/Edge/Safari. Use clickable protocol chips!");
      setHudDialogue(
        "Voice input unsupported in this browser",
        "SpeechRecognition API is not enabled in this browser. Click any of the protocol command chips below to experience JARVIS!"
      );
      playJarvisSound("activate");
      return;
    }

    isListeningExplicitly = true;
    playJarvisSound("activate");
    try {
      recognition.start();
      setJarvisState("listening");
      showToast("🎙️ JARVIS is listening for commands...");
    } catch (e) {
      // If already started, update state
      setJarvisState("listening");
    }
  }

  function stopListening() {
    isListeningExplicitly = false;
    if (recognition) {
      try {
        recognition.stop();
      } catch (e) {}
    }
    setJarvisState("idle");
    showToast("JARVIS voice listening paused");
  }

  function toggleListening() {
    if (isListeningExplicitly && jarvisState === "listening") {
      stopListening();
    } else {
      startListening();
    }
  }

  // ==============================================================
  // PROTOCOL COMMAND EXECUTORS
  // ==============================================================

  // 1. "Hey Yash, calculate attendance" -> Auto-scrolls and highlights the Bunk Advisor
  function executeAttendanceCommand(rawText = "Hey Yash, calculate attendance") {
    setJarvisState("processing");
    playJarvisSound("command");
    openHudPanel();

    const attendanceSec = document.getElementById("attendance");
    const dashboard = document.querySelector(".attendance-dashboard");
    const cards = document.querySelectorAll(".att-card");
    const overallPctElem = document.getElementById("overallPercentage");
    const overallStatusElem = document.getElementById("overallStatusBadge");

    const overallPct = overallPctElem ? overallPctElem.textContent.trim() : "82%";
    const isSafe = !overallStatusElem || overallStatusElem.classList.contains("safe");

    // Auto-scroll to Attendance Section
    if (attendanceSec) {
      attendanceSec.scrollIntoView({ behavior: "smooth", block: "start" });

      // Clean existing target banner if any
      const existingBanner = document.getElementById("jarvisAttTargetBanner");
      if (existingBanner) existingBanner.remove();

      // Inject Cyber HUD Target Banner
      const banner = document.createElement("div");
      banner.id = "jarvisAttTargetBanner";
      banner.className = "jarvis-targeting-banner";
      banner.innerHTML = `<i class="fa-solid fa-crosshairs fa-spin"></i> JARVIS AUDIT: BUNK ADVISOR TARGETED // RECALCULATING ATTENDANCE PARAMETERS`;
      attendanceSec.insertBefore(banner, attendanceSec.querySelector(".section-title-wrap").nextSibling);

      // Add Highlighting Pulse
      if (dashboard) dashboard.classList.add("jarvis-highlight-bunk");
      cards.forEach(card => card.classList.add("jarvis-highlight-card"));

      // Clean up highlights after 6 seconds
      setTimeout(() => {
        if (banner) banner.remove();
        if (dashboard) dashboard.classList.remove("jarvis-highlight-bunk");
        cards.forEach(card => card.classList.remove("jarvis-highlight-card"));
      }, 6000);
    }

    const voiceResponse = isSafe
      ? `Calculating attendance parameters. Bunk advisor online. Current overall attendance is ${overallPct}. Safe bunk thresholds have been targeted and highlighted on your console.`
      : `Calculating attendance parameters. Bunk advisor online. Current attendance is ${overallPct}. Shortage advisory active. Consecutive attendances targeted.`;

    const hudResponse = `Calculating attendance parameters. Bunk advisor online. Overall Attendance: ${overallPct}. Safe bunk margins audited and highlighted on screen.`;

    setHudDialogue(rawText, hudResponse);
    speakJarvis(voiceResponse);
    showToast(`🎯 Bunk Advisor targeted: Overall ${overallPct}`);
  }

  // 2. "Open Python notes" -> Pops up the Python Lab Manual PDF modal
  function executePythonNotesCommand(rawText = "Open Python notes") {
    setJarvisState("processing");
    playJarvisSound("command");
    openHudPanel();

    const pythonManualPath = "files/Python_Programming_Lab_Manual.pdf";
    const pythonManualTitle = "Python Programming Lab Manual - SPPU IT";

    // Launch PDF Modal
    if (typeof window.previewPdf === "function") {
      window.previewPdf(pythonManualPath, pythonManualTitle);
    } else {
      const modal = document.getElementById("pdfViewerModal");
      const frame = document.getElementById("pdfViewerFrame");
      const title = document.getElementById("pdfViewerTitle");
      if (title) title.innerHTML = `<i class="fa-solid fa-file-pdf neon-pink"></i> ${pythonManualTitle}`;
      if (frame) frame.src = pythonManualPath;
      if (modal) modal.classList.add("active");
    }

    const voiceResponse = "Accessing Python notes and lab manual. Holographic document viewer initialized.";
    const hudResponse = "Access granted. Launching Python Programming Lab Manual in holographic document viewer modal.";

    setHudDialogue(rawText, hudResponse);
    speakJarvis(voiceResponse);
    showToast("📘 Opening Python Lab Manual PDF modal");
  }

  // 3. "Engage focus mode" -> Triggers 25-min Pomodoro timer and fires up 40Hz Gamma Focus Audio
  function executeFocusModeCommand(rawText = "Engage focus mode") {
    setJarvisState("processing");
    playJarvisSound("focus");
    openHudPanel();

    const studyHubSec = document.getElementById("study-hub");

    // Auto-scroll to Study Hub
    if (studyHubSec) {
      studyHubSec.scrollIntoView({ behavior: "smooth", block: "start" });

      const existingFocusBanner = document.getElementById("jarvisFocusBanner");
      if (existingFocusBanner) existingFocusBanner.remove();

      const banner = document.createElement("div");
      banner.id = "jarvisFocusBanner";
      banner.className = "jarvis-focus-banner";
      banner.innerHTML = `<i class="fa-solid fa-brain fa-beat"></i> FOCUS MODE ENGAGED // 25:00 POMODORO TIMER + 40Hz GAMMA WAVE ACTIVE`;
      studyHubSec.insertBefore(banner, studyHubSec.querySelector(".study-tools-grid"));

      setTimeout(() => {
        if (banner) banner.remove();
      }, 6000);
    }

    // Step A: Trigger 25-min Pomodoro Timer
    const pomoBtn = document.querySelector('.pomo-mode-btn[data-mode="pomodoro"]');
    if (pomoBtn) pomoBtn.click();

    const pomoStartBtn = document.getElementById("pomoStartBtn");
    const pomoStartText = document.getElementById("pomoStartText");
    if (
      pomoStartBtn &&
      pomoStartText &&
      (pomoStartText.textContent.includes("Start") || pomoStartText.textContent.includes("Resume"))
    ) {
      pomoStartBtn.click();
    }

    // Step B: Fire up 40Hz Gamma Focus Audio
    const gammaBtn = document.querySelector('.audio-mode-btn[data-sound="binaural"]');
    if (gammaBtn) gammaBtn.click();

    const audioStatusPill = document.getElementById("audioStatusPill");
    const toggleAudioBtn = document.getElementById("toggleAudioBtn");
    if (toggleAudioBtn && audioStatusPill && !audioStatusPill.classList.contains("playing")) {
      toggleAudioBtn.click();
    }

    const voiceResponse =
      "Focus mode engaged. 25-minute Pomodoro timer initialized. 40Hz Gamma wave focus audio activated.";
    const hudResponse =
      "Focus mode engaged. 25-min Pomodoro timer running. 40Hz Gamma concentration binaural beat engine online.";

    setHudDialogue(rawText, hudResponse);
    speakJarvis(voiceResponse);
    showToast("⚡ Focus Mode Engaged: 25m Timer + 40Hz Gamma Wave");
  }

  // 4. "Who made this?" -> Synthetic sci-fi voice: "Designed and engineered by Yash, IT Department, DY Patil Akurdi."
  function executeWhoMadeThisCommand(rawText = "Who made this?") {
    setJarvisState("processing");
    playJarvisSound("command");
    openHudPanel();

    const exactResponse = "Designed and engineered by Yash, IT Department, DY Patil Akurdi.";

    const customCard = `
      <div class="jarvis-creator-banner">
        <div class="jarvis-creator-badge"><i class="fa-solid fa-code neon-cyan"></i> Yash · IT Department</div>
        <div class="jarvis-creator-meta">DY Patil College of Engineering, Akurdi · First Year IT Undergraduate</div>
      </div>
    `;

    setHudDialogue(rawText, exactResponse, customCard);

    // Scroll towards Profile Card / About section
    const profileCard = document.getElementById("profileHoloCard") || document.getElementById("about");
    if (profileCard) {
      profileCard.scrollIntoView({ behavior: "smooth", block: "center" });
      profileCard.classList.add("jarvis-highlight-card");
      setTimeout(() => profileCard.classList.remove("jarvis-highlight-card"), 5000);
    }

    speakJarvis(exactResponse);
    showToast("👤 Yash, IT Department, DY Patil Akurdi");
  }

  // Helper Command: Help & Suggestions
  function executeHelpCommand(rawText = "Help / Suggestions") {
    playJarvisSound("command");
    openHudPanel();
    const helpMsg =
      "Active voice protocols: 'Hey Yash, calculate attendance', 'Open Python notes', 'Engage focus mode', or 'Who made this?'. You can also change the website theme anytime: 'Switch theme to Obsidian', 'Nordic Frost', 'Ivy Academic', 'Clean Light', or 'Cyber Neon'.";

    const themeSuggestionsCard = `
      <div class="jarvis-suggestion-card">
        <div class="jarvis-suggestion-title"><i class="fa-solid fa-palette neon-cyan"></i> THEME PALETTE SUGGESTIONS (CLICK TO SWITCH):</div>
        <div class="jarvis-suggestion-chips">
          <button class="hud-command-chip mini" data-command="Switch theme to Obsidian" type="button" title="Switch to Obsidian Tech"><span>🌑</span> Obsidian Tech</button>
          <button class="hud-command-chip mini" data-command="Switch theme to Nordic Frost" type="button" title="Switch to Nordic Frost"><span>🧊</span> Nordic Frost</button>
          <button class="hud-command-chip mini" data-command="Switch theme to Ivy Academic" type="button" title="Switch to Ivy Academic"><span>🏛️</span> Ivy Academic</button>
          <button class="hud-command-chip mini" data-command="Switch theme to Clean Light" type="button" title="Switch to Clean Light"><span>☀️</span> Clean Light</button>
          <button class="hud-command-chip mini" data-command="Switch theme to Cyber Neon" type="button" title="Switch to Cyber Neon"><span>⚡</span> Cyber Neon</button>
        </div>
      </div>
    `;

    setHudDialogue(rawText, helpMsg, themeSuggestionsCard);
    speakJarvis("Active voice protocols online. You can calculate attendance, open notes, engage focus mode, or switch between Obsidian, Nordic Frost, Ivy Academic, Clean Light, and Cyber Neon themes.");
  }

  // Helper Command: Stop Audio
  function executeStopAudioCommand(rawText = "Stop audio") {
    playJarvisSound("command");
    const audioStatusPill = document.getElementById("audioStatusPill");
    const toggleAudioBtn = document.getElementById("toggleAudioBtn");
    if (toggleAudioBtn && audioStatusPill && audioStatusPill.classList.contains("playing")) {
      toggleAudioBtn.click();
    }
    const msg = "Focus audio engine deactivated.";
    setHudDialogue(rawText, msg);
    speakJarvis("Focus audio engines muted.");
    showToast("Focus audio stopped");
  }

  // Master Voice Command Parser
  function processVoiceCommand(rawTranscript) {
    if (!rawTranscript) return;
    const text = rawTranscript.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();

    // 1. Calculate Attendance / Bunk Advisor
    if (
      text.includes("calculate attendance") ||
      text.includes("attendance") ||
      text.includes("bunk advisor") ||
      text.includes("how many bunks") ||
      text.includes("check attendance") ||
      text.includes("bunk")
    ) {
      executeAttendanceCommand(rawTranscript);
    }
    // 2. Open Python Notes / Lab Manual
    else if (
      text.includes("python note") ||
      text.includes("python manual") ||
      text.includes("python handbook") ||
      text.includes("python lab") ||
      text.includes("open python")
    ) {
      executePythonNotesCommand(rawTranscript);
    }
    // 3. Engage Focus Mode / 40Hz Gamma Audio
    else if (
      text.includes("focus mode") ||
      text.includes("engage focus") ||
      text.includes("start focus") ||
      text.includes("pomodoro") ||
      text.includes("gamma focus") ||
      text.includes("gamma wave") ||
      text.includes("gamma")
    ) {
      executeFocusModeCommand(rawTranscript);
    }
    // 4. Who Made This?
    else if (
      text.includes("who made this") ||
      text.includes("who built this") ||
      text.includes("who created this") ||
      text.includes("who developed this") ||
      text.includes("who is yash") ||
      text.includes("who made you") ||
      text.includes("who designed this") ||
      text.includes("creator") ||
      text.includes("author")
    ) {
      executeWhoMadeThisCommand(rawTranscript);
    }
    // Helper: Stop Audio
    else if (
      text.includes("stop audio") ||
      text.includes("pause audio") ||
      text.includes("mute audio") ||
      text.includes("stop music")
    ) {
      executeStopAudioCommand(rawTranscript);
    }
    // Helper: Help / Protocols / Suggestions
    else if (
      text.includes("help") ||
      text.includes("commands") ||
      text.includes("command") ||
      text.includes("suggestion") ||
      text.includes("suggest") ||
      text.includes("what can you do") ||
      text.includes("options") ||
      text.includes("protocols")
    ) {
      executeHelpCommand(rawTranscript);
    }
    // Helper: Scroll to top
    else if (text.includes("scroll to top") || text.includes("go to top") || text.includes("home")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setHudDialogue(rawTranscript, "Navigating to top of workstation console.");
      speakJarvis("Navigating to top of workstation.");
    }
    // Helper: Close modal
    else if (text.includes("close modal") || text.includes("close viewer") || text.includes("close reader")) {
      const pdfModal = document.getElementById("pdfViewerModal");
      if (pdfModal) pdfModal.classList.remove("active");
      setHudDialogue(rawTranscript, "Holographic document viewer closed.");
      speakJarvis("Holographic viewer closed.");
    }
    // 5. Change Theme Palette Voice Protocol
    else if (text.includes("theme") || text.includes("palette")) {
      let matchedTheme = null;
      let matchedName = "";
      if (text.includes("obsidian")) {
        matchedTheme = "obsidian";
        matchedName = "Obsidian Tech";
      } else if (text.includes("frost") || text.includes("ice") || text.includes("nordic")) {
        matchedTheme = "frost";
        matchedName = "Nordic Frost";
      } else if (text.includes("academic") || text.includes("ivy") || text.includes("oxford")) {
        matchedTheme = "academic";
        matchedName = "Ivy Academic";
      } else if (text.includes("light")) {
        matchedTheme = "light";
        matchedName = "Clean Light";
      } else if (text.includes("cyber") || text.includes("neon") || text.includes("dark")) {
        matchedTheme = "cyber";
        matchedName = "Cyber Neon";
      }

      if (matchedTheme && typeof switchThemeWithTransition === "function") {
        switchThemeWithTransition(matchedTheme);
        setHudDialogue(rawTranscript, `Theme successfully switched to ${matchedName}.`);
        speakJarvis(`Theme switched to ${matchedName}, Sir.`);
      } else {
        setHudDialogue(rawTranscript, "Available themes: Cyber Neon, Obsidian Tech, Nordic Frost, Ivy Academic, and Clean Light.");
        speakJarvis("Which theme would you like? You can choose Cyber Neon, Obsidian Tech, Nordic Frost, Ivy Academic, or Clean Light.");
      }
    }
    // Unrecognized Command
    else {
      playJarvisSound("error");
      const unrecMsg =
        "Protocol unrecognized. Try: 'Hey Yash, calculate attendance', 'Open Python notes', 'Engage focus mode', 'Who made this?', or 'Switch theme to Obsidian / Nordic Frost / Ivy Academic / Clean Light / Cyber Neon'.";
      setHudDialogue(rawTranscript, unrecMsg);
      speakJarvis("Command not recognized. Say: calculate attendance, open notes, engage focus mode, who made this, or switch theme.");
    }
  }

  // ==============================================================
  // EVENT LISTENERS & TRIGGERS
  // ==============================================================

  // Central Orb Button Click: Open HUD and Toggle Listening
  orbBtn.addEventListener("click", () => {
    if (!hudPanel.classList.contains("active")) {
      openHudPanel();
      playJarvisSound("activate");
      startListening();
    } else {
      toggleListening();
    }
  });

  // Close HUD Button
  if (closeHudBtn) {
    closeHudBtn.addEventListener("click", () => {
      closeHudPanel();
      if (isListeningExplicitly) stopListening();
    });
  }

  // Listen Toggle Button inside HUD
  if (listenToggleBtn) {
    listenToggleBtn.addEventListener("click", () => {
      toggleListening();
    });
  }

  // Clickable Protocol Command Chips (Event Delegation to support static & suggestion chips)
  hudPanel.addEventListener("click", (e) => {
    const chip = e.target.closest(".hud-command-chip");
    if (!chip) return;
    const cmd = chip.dataset.command;
    if (!cmd) return;
    if (cmd === "Hey Yash, calculate attendance") {
      executeAttendanceCommand(cmd);
    } else if (cmd === "Open Python notes") {
      executePythonNotesCommand(cmd);
    } else if (cmd === "Engage focus mode") {
      executeFocusModeCommand(cmd);
    } else if (cmd === "Who made this?") {
      executeWhoMadeThisCommand(cmd);
    } else {
      processVoiceCommand(cmd);
    }
  });

  // External Navigation & Hero Triggers
  if (navTrigger) {
    navTrigger.addEventListener("click", () => {
      openHudPanel();
      playJarvisSound("activate");
      startListening();
    });
  }

  if (mobileNavTrigger) {
    mobileNavTrigger.addEventListener("click", () => {
      const mobileDrawer = document.getElementById("mobileDrawer");
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      if (mobileDrawer) mobileDrawer.classList.remove("open");
      if (hamburgerBtn) hamburgerBtn.classList.remove("active");
      openHudPanel();
      playJarvisSound("activate");
      startListening();
    });
  }

  if (heroTrigger) {
    heroTrigger.addEventListener("click", () => {
      openHudPanel();
      playJarvisSound("activate");
      startListening();
    });
  }

  // Keyboard Shortcut: Alt + J or Alt + V to toggle Voice HUD
  window.addEventListener("keydown", (e) => {
    if (e.altKey && (e.key === "j" || e.key === "J" || e.key === "v" || e.key === "V")) {
      e.preventDefault();
      toggleHudPanel();
      if (!isListeningExplicitly) startListening();
    }
  });
}

/* ================================================================
   NEW MODULAR FEATURES ADDITIONS
   ----------------------------------------------------------------
   1. GLOBAL REQUIREMENT: FUN MODE CONTROLLER
   2. FEATURE 1: TERMINAL BOOT LOADING SCREEN (2 SECONDS)
   3. FEATURE 3: WEB AUDIO SOUND FX ENGINE (ZERO AUDIO FILES)
   4. FEATURE 5: DARK / LIGHT MODE ENGINE WITH CIRCLE WIPE
   5. FEATURE 6: NATIVE CANVAS CONFETTI ENGINE (GOAL CELEBRATIONS)
   6. FEATURE 7: LIVE LOCAL TIMEZONE CLOCK & QUOTES TICKER (FOOTER)
   7. FEATURE 8: FIXED GRADIENT SCROLL PROGRESS BAR
   ================================================================ */

// ================================================================
// CONFIGURATION CONSTANTS (CUSTOMIZE THRESHOLDS & QUOTES HERE)
// ================================================================

/**
 * 🎯 CONFETTI THRESHOLDS CONFIGURATION
 * Edit these values to adjust when celebrations fire.
 */
const CONFETTI_CONFIG = {
  attendanceThreshold: 75,  // Attendance percentage threshold (default: 75%)
  cgpaThreshold: 9.0,       // CGPA distinction threshold (default: 9.0)
  particleCount: 150,       // Number of confetti particles (default: 150)
  durationMs: 3000          // Duration before canvas disappears (default: 3000ms)
};

/**
 * 💬 MOTIVATIONAL & PROGRAMMING QUOTES LIST (FOOTER TICKER)
 * Edit or add any quotes to this array.
 */
const TICKER_QUOTES = [
  "“Talk is cheap. Show me the code.” — Linus Torvalds",
  "“First, solve the problem. Then, write the code.” — John Johnson",
  "“Consistency in engineering logic transforms curiosity into breakthrough solutions.”",
  "“Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra",
  "“The only way to learn a new programming language is by writing programs in it.” — Dennis Ritchie",
  "“Attendance is the foundation; curiosity is the engine; perseverance is the degree.”",
  "“Code is like humor. When you have to explain it, it’s bad.” — Cory House",
  "“Every great developer was once a beginner who refused to quit.”"
];

// ================================================================
// GLOBAL REQUIREMENT: FUN MODE CONTROLLER
// ================================================================
let isFunModeActive = true;

function initFunModeEngine() {
  const savedState = safeLocalStorageGet("college_hub_fun_mode", null);
  const isMobile = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Defaults: Turn Fun Mode OFF on mobile (< 768px) and on prefers-reduced-motion; ON otherwise
  if (savedState !== null) {
    isFunModeActive = (savedState === true || savedState === "true");
  } else {
    isFunModeActive = !(isMobile || prefersReducedMotion);
  }

  updateFunModeUI(isFunModeActive);

  const funBtn = document.getElementById("funModeToggleBtn");
  const mobileFunBtn = document.getElementById("mobileFunModeToggleBtn");

  function handleFunToggle() {
    isFunModeActive = !isFunModeActive;
    safeLocalStorageSet("college_hub_fun_mode", isFunModeActive);
    updateFunModeUI(isFunModeActive);
    playBleepSound("click");
    showToast(isFunModeActive ? "🚀 Fun Mode Activated! (3D Tilt, SFX & Trails)" : "⚡ Fun Mode Deactivated (Minimal / Accessible UI)");
  }

  if (funBtn) funBtn.addEventListener("click", handleFunToggle);
  if (mobileFunBtn) mobileFunBtn.addEventListener("click", handleFunToggle);

  // Auto-adapt if user resizes across mobile threshold and hasn't saved explicit preference
  window.addEventListener("resize", () => {
    if (safeLocalStorageGet("college_hub_fun_mode", null) === null) {
      const nowMobile = window.innerWidth < 768;
      if (nowMobile && isFunModeActive) {
        isFunModeActive = false;
        updateFunModeUI(false);
      }
    }
  });
}

function isFunMode() {
  return isFunModeActive;
}

function updateFunModeUI(active) {
  document.body.classList.toggle("fun-mode-off", !active);

  const funBtn = document.getElementById("funModeToggleBtn");
  const mobileLabel = document.getElementById("mobileFunModeLabel");

  if (funBtn) {
    funBtn.classList.toggle("active", active);
    funBtn.setAttribute("aria-pressed", active ? "true" : "false");
  }
  if (mobileLabel) {
    mobileLabel.textContent = active ? "Fun: ON" : "Fun: OFF";
  }
}

// ================================================================
// FEATURE 1: FULLSCREEN TERMINAL BOOT LOADER (2 SECONDS)
// ================================================================
function initTerminalBootLoader() {
  const loader = document.getElementById("terminalLoader");
  if (!loader) return;

  const bootAlreadyShown = safeSessionStorageGet("college_hub_boot_shown", false);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Skip loader if Fun Mode is OFF, already shown in this session, or reduced motion
  if (!isFunMode() || bootAlreadyShown || reducedMotion) {
    loader.style.display = "none";
    return;
  }

  safeSessionStorageSet("college_hub_boot_shown", true);

  const historyEl = document.getElementById("terminalHistory");
  const typingEl = document.getElementById("terminalTypingText");
  const skipPrompt = document.getElementById("terminalSkipPrompt");

  const bootLines = [
    "Initializing portfolio...",
    "Loading projects... OK",
    "Loading SGPA engine... OK",
    "Welcome."
  ];

  let currentLineIndex = 0;
  let currentCharIndex = 0;
  let isLoaderFinished = false;

  function dismissLoader() {
    if (isLoaderFinished) return;
    isLoaderFinished = true;
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
    }, 550);
  }

  if (skipPrompt) skipPrompt.addEventListener("click", dismissLoader);
  loader.addEventListener("click", dismissLoader);
  window.addEventListener("keydown", dismissLoader, { once: true });

  function typeBootCharacter() {
    if (isLoaderFinished) return;

    if (currentLineIndex >= bootLines.length) {
      setTimeout(dismissLoader, 350);
      return;
    }

    const currentText = bootLines[currentLineIndex];

    if (currentCharIndex < currentText.length) {
      if (typingEl) typingEl.textContent += currentText.charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeBootCharacter, 20);
    } else {
      // Completed current line
      if (historyEl) {
        const lineRow = document.createElement("div");
        lineRow.className = "terminal-log-line";
        lineRow.innerHTML = `<span class="prompt-green">&gt;</span> ${escapeHtml(currentText)}`;
        historyEl.appendChild(lineRow);
      }
      if (typingEl) typingEl.textContent = "";
      currentLineIndex++;
      currentCharIndex = 0;
      setTimeout(typeBootCharacter, 120);
    }
  }

  // Start typing
  setTimeout(typeBootCharacter, 100);
}

// ================================================================
// FEATURE 3: WEB AUDIO SOUND FX ENGINE (ZERO EXTERNAL AUDIO FILES)
// ================================================================
let webAudioCtx = null;
let isAudioMuted = safeLocalStorageGet("college_hub_sound_muted", false);

function getWebAudioContext() {
  if (!webAudioCtx && (window.AudioContext || window.webkitAudioContext)) {
    const CtxClass = window.AudioContext || window.webkitAudioContext;
    try {
      webAudioCtx = new CtxClass();
    } catch (e) {
      console.warn("Web Audio not supported:", e);
    }
  }
  if (webAudioCtx && webAudioCtx.state === "suspended") {
    webAudioCtx.resume().catch(() => {});
  }
  return webAudioCtx;
}

function playBleepSound(type = "click") {
  if (!isFunMode() || isAudioMuted) return;

  try {
    const ctx = getWebAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "tab" || type === "section") {
      // Gentle twin pitch chime for section/tab switch
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "celebrate" || type === "confetti") {
      // Major chord ascending arpeggio for goal celebrations
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.setValueAtTime(freq, now + idx * 0.06);
        g.gain.setValueAtTime(0.001, now + idx * 0.06);
        g.gain.linearRampToValueAtTime(0.07, now + idx * 0.06 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.2);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(now + idx * 0.06);
        o.stop(now + idx * 0.06 + 0.22);
      });
    } else {
      // High-tech crisp click bleep
      osc.type = "sine";
      osc.frequency.setValueAtTime(680, now);
      osc.frequency.exponentialRampToValueAtTime(1050, now + 0.04);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.055);
    }
  } catch (err) {
    // Non-blocking catch
  }
}

function initSoundFXEngine() {
  updateSoundUI();

  // Unlock AudioContext on first user interaction (browser autoplay rules)
  const unlockAudio = () => {
    getWebAudioContext();
    window.removeEventListener("click", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
  window.addEventListener("click", unlockAudio);
  window.addEventListener("keydown", unlockAudio);

  const soundBtn = document.getElementById("soundToggleBtn");
  const mobileSoundBtn = document.getElementById("mobileSoundToggleBtn");

  function handleSoundToggle() {
    isAudioMuted = !isAudioMuted;
    safeLocalStorageSet("college_hub_sound_muted", isAudioMuted);
    updateSoundUI();
    if (!isAudioMuted) playBleepSound("click");
    showToast(isAudioMuted ? "🔇 Audio Effects Muted" : "🔊 Audio Effects Enabled");
  }

  if (soundBtn) soundBtn.addEventListener("click", handleSoundToggle);
  if (mobileSoundBtn) mobileSoundBtn.addEventListener("click", handleSoundToggle);

  // Global button & tab click sound handler
  document.addEventListener("click", (e) => {
    const tabTarget = e.target.closest(".nav-item, .mobile-nav-item, .cyber-tab-btn, .filter-pill, .cheat-tab-btn");
    const btnTarget = e.target.closest("button, .btn-proj-link, .btn-connect, .hud-command-chip, .audio-mode-btn");

    if (tabTarget) {
      playBleepSound("tab");
    } else if (btnTarget && !btnTarget.closest("#soundToggleBtn, #mobileSoundToggleBtn")) {
      playBleepSound("click");
    }
  });
}

function updateSoundUI() {
  const soundBtn = document.getElementById("soundToggleBtn");
  const soundIcon = document.getElementById("soundIcon");
  const mobileSoundLabel = document.getElementById("mobileSoundLabel");
  const mobileSoundIcon = document.getElementById("mobileSoundIcon");

  if (soundBtn) soundBtn.classList.toggle("muted", isAudioMuted);
  if (soundIcon) soundIcon.className = isAudioMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
  if (mobileSoundLabel) mobileSoundLabel.textContent = isAudioMuted ? "Sound: OFF" : "Sound: ON";
  if (mobileSoundIcon) mobileSoundIcon.className = isAudioMuted ? "fa-solid fa-volume-xmark neon-pink" : "fa-solid fa-volume-high neon-pink";
}

// ================================================================
// FEATURE 5: DYNAMIC MULTI-THEME ENGINE (5 CURATED PALETTES)
// ================================================================
const THEMES_CONFIG = {
  cyber: {
    id: "cyber",
    name: "Cyber Neon",
    emoji: "⚡",
    icon: "fa-solid fa-bolt",
    isLight: false,
    wipeBg: "#060913"
  },
  obsidian: {
    id: "obsidian",
    name: "Obsidian Tech",
    emoji: "🌑",
    icon: "fa-solid fa-cube",
    isLight: false,
    wipeBg: "#090a0f"
  },
  frost: {
    id: "frost",
    name: "Nordic Frost",
    emoji: "🧊",
    icon: "fa-solid fa-snowflake",
    isLight: false,
    wipeBg: "#070e1c"
  },
  academic: {
    id: "academic",
    name: "Ivy Academic",
    emoji: "🏛️",
    icon: "fa-solid fa-landmark-dome",
    isLight: false,
    wipeBg: "#05130d"
  },
  light: {
    id: "light",
    name: "Clean Light",
    emoji: "☀️",
    icon: "fa-solid fa-sun",
    isLight: true,
    wipeBg: "#f8fafc"
  }
};

function initThemeEngine() {
  const savedTheme = safeLocalStorageGet("college_hub_theme", null);
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  let initialTheme = savedTheme || (systemPrefersLight ? "light" : "cyber");
  if (initialTheme === "dark") initialTheme = "cyber";
  if (!THEMES_CONFIG[initialTheme]) initialTheme = "cyber";

  applyTheme(initialTheme, false);

  const themePaletteBtn = document.getElementById("themePaletteBtn");
  const themeDropdownMenu = document.getElementById("themeDropdownMenu");
  const themePaletteWrapper = document.getElementById("themePaletteWrapper");

  // Toggle Dropdown Menu
  if (themePaletteBtn && themeDropdownMenu) {
    themePaletteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isExpanded = themePaletteBtn.getAttribute("aria-expanded") === "true";
      toggleThemeDropdown(!isExpanded);
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (themePaletteWrapper && !themePaletteWrapper.contains(e.target)) {
        toggleThemeDropdown(false);
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleThemeDropdown(false);
      }
    });
  }

  function toggleThemeDropdown(show) {
    if (!themePaletteBtn || !themeDropdownMenu) return;
    themePaletteBtn.setAttribute("aria-expanded", show ? "true" : "false");
    themeDropdownMenu.classList.toggle("show", show);
  }

  // Desktop Dropdown Option Clicks
  const themeOptions = document.querySelectorAll(".theme-option-item");
  themeOptions.forEach(opt => {
    opt.addEventListener("click", (e) => {
      const themeId = opt.getAttribute("data-theme-id");
      if (themeId) {
        toggleThemeDropdown(false);
        switchThemeWithTransition(themeId, e);
      }
    });
  });

  // Mobile Drawer Theme Grid Clicks
  const mobileThemeBtns = document.querySelectorAll(".mobile-theme-btn");
  mobileThemeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const themeId = btn.getAttribute("data-theme-id");
      if (themeId) {
        switchThemeWithTransition(themeId, e);
      }
    });
  });
}

function switchThemeWithTransition(themeId, e = null) {
  if (!THEMES_CONFIG[themeId]) return;
  const currentTheme = document.documentElement.getAttribute("data-theme") || "cyber";
  if (currentTheme === themeId) return;

  const clickX = e ? (e.clientX || window.innerWidth / 2) : window.innerWidth / 2;
  const clickY = e ? (e.clientY || 40) : 40;

  const maxRadius = Math.hypot(
    Math.max(clickX, window.innerWidth - clickX),
    Math.max(clickY, window.innerHeight - clickY)
  );

  playBleepSound("click");

  // Use View Transitions API if supported and Fun Mode is ON and no reduced motion
  if (document.startViewTransition && isFunMode() && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.setProperty("--theme-wipe-x", `${clickX}px`);
    document.documentElement.style.setProperty("--theme-wipe-y", `${clickY}px`);
    document.documentElement.style.setProperty("--theme-wipe-r", `${maxRadius}px`);

    const transition = document.startViewTransition(() => {
      applyTheme(themeId, true);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${clickX}px ${clickY}px)`,
            `circle(${maxRadius}px at ${clickX}px ${clickY}px)`
          ]
        },
        {
          duration: 520,
          easing: "cubic-bezier(0.2, 0, 0, 1)",
          pseudoElement: "::view-transition-new(root)"
        }
      );
    }).catch(() => {
      applyTheme(themeId, true);
    });
  } else {
    triggerCircularWipeFallback(themeId, clickX, clickY, maxRadius);
  }
}

function applyTheme(themeId, save = true) {
  if (themeId === "dark") themeId = "cyber";
  if (!THEMES_CONFIG[themeId]) themeId = "cyber";

  const cfg = THEMES_CONFIG[themeId];
  document.documentElement.setAttribute("data-theme", themeId);
  document.body.classList.toggle("theme-light", cfg.isLight);
  document.body.classList.toggle("cyber-theme", !cfg.isLight);

  // Set theme-* class on body
  Object.keys(THEMES_CONFIG).forEach(t => {
    document.body.classList.toggle(`theme-${t}`, t === themeId);
  });

  // Update navbar button label & icon
  const themeBtnLabel = document.getElementById("themeBtnLabel");
  const themePaletteIcon = document.getElementById("themePaletteIcon");
  if (themeBtnLabel) themeBtnLabel.textContent = `${cfg.emoji} ${cfg.name}`;
  if (themePaletteIcon) {
    themePaletteIcon.className = `${cfg.icon} neon-cyan`;
  }

  // Update active state in desktop dropdown
  document.querySelectorAll(".theme-option-item").forEach(item => {
    const isAct = item.getAttribute("data-theme-id") === themeId;
    item.classList.toggle("active", isAct);
    item.setAttribute("aria-selected", isAct ? "true" : "false");
  });

  // Update active state in mobile drawer
  document.querySelectorAll(".mobile-theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-theme-id") === themeId);
  });

  // Update cyberCanvas particle colors
  if (typeof updateCyberCanvasColors === "function") {
    updateCyberCanvasColors(themeId);
  }

  if (save) {
    safeLocalStorageSet("college_hub_theme", themeId);
    showToast(`Theme switched to ${cfg.emoji} ${cfg.name}`);
  }
}

function triggerCircularWipeFallback(themeId, x, y, radius) {
  if (!isFunMode() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    applyTheme(themeId, true);
    return;
  }

  const cfg = THEMES_CONFIG[themeId] || THEMES_CONFIG.cyber;
  const ripple = document.createElement("div");
  ripple.className = "theme-wipe-overlay";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.width = `${radius * 2}px`;
  ripple.style.height = `${radius * 2}px`;
  ripple.style.background = cfg.wipeBg;
  document.body.appendChild(ripple);

  requestAnimationFrame(() => {
    ripple.classList.add("active");
    setTimeout(() => {
      applyTheme(themeId, true);
      ripple.style.opacity = "0";
      setTimeout(() => ripple.remove(), 350);
    }, 280);
  });
}

// ================================================================
// FEATURE 6: NATIVE CANVAS CONFETTI ENGINE (NO EXTERNAL LIBS)
// ================================================================
function triggerConfettiBurst(type = "goal", detail = "") {
  if (!isFunMode()) return;
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  const colors = ["#00f3ff", "#ff007f", "#39ff14", "#ffaa00", "#9d4edd", "#ffffff", "#ffd700"];
  const particles = [];
  const startX = window.innerWidth / 2;
  const startY = window.innerHeight * 0.35;

  for (let i = 0; i < CONFETTI_CONFIG.particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 11 + 4;
    particles.push({
      x: startX + (Math.random() - 0.5) * 80,
      y: startY + (Math.random() - 0.5) * 40,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5,
      size: Math.random() * 7 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      shape: Math.random() > 0.4 ? "rect" : "circle",
      gravity: 0.26,
      drag: 0.98,
      opacity: 1
    });
  }

  const startTime = performance.now();

  function renderConfetti(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = elapsed / CONFETTI_CONFIG.durationMs;

    if (progress >= 1) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = "none";
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const fade = progress > 0.7 ? (1 - progress) / 0.3 : 1;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity * fade);
      ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    requestAnimationFrame(renderConfetti);
  }

  requestAnimationFrame(renderConfetti);
}

// ================================================================
// FEATURE 7: LIVE LOCAL TIMEZONE CLOCK & MOTIVATIONAL QUOTES TICKER
// ================================================================
function initFooterClockAndTicker() {
  // 1. Live Local Timezone Clock
  function updateLiveClock() {
    const timeEl = document.getElementById("liveClockTime");
    const dateEl = document.getElementById("liveClockDate");
    const tzEl = document.getElementById("liveClockTz");

    const now = new Date();

    const timeStr = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    const dateStr = now.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    });

    // Determine resolved local timezone abbreviation / name
    let tzStr = "";
    try {
      tzStr = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch (e) {}

    if (timeEl) timeEl.textContent = timeStr;
    if (dateEl) dateEl.textContent = dateStr;
    if (tzEl) tzEl.textContent = tzStr;
  }

  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // 2. Horizontally Scrolling Quotes Ticker
  const track = document.getElementById("quoteTickerTrack");
  if (track && TICKER_QUOTES && TICKER_QUOTES.length > 0) {
    // Duplicate quotes array for seamless endless scroll animation
    const duplicatedQuotes = [...TICKER_QUOTES, ...TICKER_QUOTES];
    track.innerHTML = duplicatedQuotes.map(quote => `
      <span class="quote-ticker-item">
        <i class="fa-solid fa-code neon-cyan"></i>
        <span>${escapeHtml(quote)}</span>
      </span>
    `).join("");
  }
}

// ================================================================
// FEATURE 8: FIXED GRADIENT SCROLL PROGRESS BAR
// ================================================================
function initScrollProgressBar() {
  const bar = document.getElementById("scrollProgressBar");
  if (!bar) return;

  let isTicking = false;
  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    bar.style.width = `${scrollPercent.toFixed(2)}%`;
    isTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!isTicking) {
      requestAnimationFrame(updateScrollProgress);
      isTicking = true;
    }
  }, { passive: true });

  updateScrollProgress();
}

