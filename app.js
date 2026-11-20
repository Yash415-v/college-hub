// ================================================================
// Yash's College Hub & Portfolio
// DY Patil College of Engineering, Akurdi - Department of IT
// ================================================================

// ----------------------------------------------------------------
// 1. Subject Sections Definition
// ----------------------------------------------------------------
const defaultSubjectSections = [
  { id: "physics", name: "Engineering Physics", key: "Physics", icon: "fa-solid fa-atom", color: "#38bdf8" },
  { id: "python", name: "Programming with Python", key: "Python", icon: "fa-brands fa-python", color: "#a855f7" },
  { id: "maths1", name: "Engineering Mathematics-I", key: "Maths-I", icon: "fa-solid fa-square-root-variable", color: "#f59e0b" },
  { id: "bee", name: "Basic Electrical & Electronics (BEE)", key: "BEE", icon: "fa-solid fa-bolt-lightning", color: "#10b981" },
  { id: "sme", name: "Systems in Mechanical Engg (SME)", key: "SME", icon: "fa-solid fa-gears", color: "#ec4899" },
  { id: "webdev", name: "Web Development & AI", key: "Web Dev", icon: "fa-solid fa-laptop-code", color: "#6366f1" },
  { id: "lab", name: "Lab Manuals & Practical Records", key: "Lab", icon: "fa-solid fa-flask-vial", color: "#14b8a6" }
];

let subjectSections = loadSubjectSections();

function loadSubjectSections() {
  const saved = localStorage.getItem("yash_subject_sections");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading subject sections from localStorage", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultSubjectSections));
}

function saveSubjectSections() {
  localStorage.setItem("yash_subject_sections", JSON.stringify(subjectSections));
}

// ----------------------------------------------------------------
// 2. Curated College Materials (PDFs)
// ----------------------------------------------------------------
const defaultCollegeMaterials = [
  {
    id: 1,
    title: "Engineering Physics - He-Ne Laser Notes",
    subject: "Physics",
    type: "Notes",
    description: "Detailed study notes on Helium-Neon (He-Ne) Laser: principle, energy level diagram, working, and applications.",
    semester: "Semester 1",
    link: "files/HeNe_Laser_Notes.pdf",
    date: "Nov 2026"
  },
  {
    id: 2,
    title: "Python Programming - Basics & Syntax Handout",
    subject: "Python",
    type: "Notes",
    description: "Variables, conditional statements, loops (for/while), functions, and built-in data types.",
    semester: "Semester 1",
    link: "files/HeNe_Laser_Notes.pdf",
    date: "Nov 2026"
  },
  {
    id: 3,
    title: "Python Lab Assignment 1 - Patterns & Logic",
    subject: "Python",
    type: "Assignment",
    description: "Lab problems: Prime numbers, Fibonacci series, and pyramid patterns with clean comments.",
    semester: "Semester 1",
    link: "https://github.com",
    date: "Nov 2026"
  },
  {
    id: 4,
    title: "Engineering Mathematics-I - Matrices & Partial Derivatives",
    subject: "Maths-I",
    type: "Notes",
    description: "Rank of matrix, linear systems of equations, Euler's theorem on homogeneous functions.",
    semester: "Semester 1",
    link: "https://drive.google.com",
    date: "Oct 2026"
  },
  {
    id: 5,
    title: "Basic Electrical & Electronics - KVL, KCL & AC Circuits",
    subject: "BEE",
    type: "Notes",
    description: "Network theorems (Thevenin, Norton), AC fundamentals, and single-phase transformer formulas.",
    semester: "Semester 1",
    link: "https://drive.google.com",
    date: "Oct 2026"
  },
  {
    id: 6,
    title: "Programming with Python - Lab Manual & Viva Questions",
    subject: "Python",
    type: "Lab",
    description: "Complete list of 1st-year IT lab practicals with flowchart, code, and expected outputs.",
    semester: "Semester 1",
    link: "https://drive.google.com",
    date: "Nov 2026"
  },
  {
    id: 7,
    title: "Web Dev & AI - My First Responsive Portfolio Project",
    subject: "Web Dev",
    type: "Assignment",
    description: "Source code submission for personal portfolio, attendance tracker, and CGPA calculator.",
    semester: "Semester 1",
    link: "#",
    date: "Nov 2026"
  }
];

let collegeMaterials = loadCollegeMaterials();

function loadCollegeMaterials() {
  const saved = localStorage.getItem("yash_college_materials");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading materials from localStorage", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultCollegeMaterials));
}

function saveCollegeMaterials() {
  localStorage.setItem("yash_college_materials", JSON.stringify(collegeMaterials));
}

// ----------------------------------------------------------------
// 2b. Social Links (Owner Editable)
// ----------------------------------------------------------------
const defaultSocialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  email: "yash@example.com"
};

let socialLinks = loadSocialLinks();

function loadSocialLinks() {
  const saved = localStorage.getItem("yash_social_links");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading social links from localStorage", e);
    }
  }
  return { ...defaultSocialLinks };
}

function saveSocialLinks() {
  localStorage.setItem("yash_social_links", JSON.stringify(socialLinks));
}

// ----------------------------------------------------------------
// 3. Attendance Tracker State & Defaults
// ----------------------------------------------------------------
const defaultAttendanceSubjects = [
  { id: 1, name: "Engineering Physics", attended: 22, total: 25 },
  { id: 2, name: "Programming with Python", attended: 26, total: 28 },
  { id: 3, name: "Engineering Mathematics-I", attended: 27, total: 32 },
  { id: 4, name: "Basic Electrical & Electronics (BEE)", attended: 19, total: 24 },
  { id: 5, name: "Systems in Mechanical Engg (SME)", attended: 15, total: 18 },
  { id: 6, name: "Python Programming Lab", attended: 11, total: 12 }
];

let attendanceSubjects = loadAttendanceData();

function loadAttendanceData() {
  const saved = localStorage.getItem("yash_attendance_tracker");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading attendance from localStorage", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultAttendanceSubjects));
}

function saveAttendanceData() {
  localStorage.setItem("yash_attendance_tracker", JSON.stringify(attendanceSubjects));
}

// ----------------------------------------------------------------
// 4. CGPA & SGPA Calculator State & Defaults
// ----------------------------------------------------------------
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

let sgpaCourses = loadSgpaData();

function loadSgpaData() {
  const saved = localStorage.getItem("yash_sgpa_courses");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading SGPA courses from localStorage", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultSgpaCourses));
}

function saveSgpaData() {
  localStorage.setItem("yash_sgpa_courses", JSON.stringify(sgpaCourses));
}

const defaultCgpaSemesters = [
  { id: 1, name: "Semester 1", sgpa: 8.85, credits: 21 },
  { id: 2, name: "Semester 2 (Target)", sgpa: 9.00, credits: 21 }
];

let cgpaSemesters = loadCgpaData();

function loadCgpaData() {
  const saved = localStorage.getItem("yash_cgpa_semesters");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading CGPA semesters from localStorage", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultCgpaSemesters));
}

function saveCgpaData() {
  localStorage.setItem("yash_cgpa_semesters", JSON.stringify(cgpaSemesters));
}

// ----------------------------------------------------------------
// 5. App Initialization
// ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNotesHub();
  initAttendanceTracker();
  initCalculator();
  initStudyHub();
});

// Utility to escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return str.toString().replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Floating Toast Notification
function showToast(msg) {
  const existing = document.querySelector(".site-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "site-toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #34d399;"></i> <span>${escapeHtml(msg)}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ================================================================
// SUBJECT-WISE NOTES HUB & OWNER ADD SYSTEM
// ================================================================
let activeSubjectFilter = "all";
let activeTypeFilter = "all";
let searchQuery = "";
let isOwnerMode = localStorage.getItem("yash_owner_auth") === "true";
let selectedLocalDataUrl = ""; // Staged file data URL if picked from PC

function initNotesHub() {
  const totalNotesCount = document.getElementById("totalNotesCount");
  const notesSectionsContainer = document.getElementById("notesSectionsContainer");
  const subjectPills = document.getElementById("subjectPills");
  const typePills = document.getElementById("typePills");
  const searchInput = document.getElementById("searchInput");

  // Owner Elements
  const toggleOwnerBtn = document.getElementById("toggleOwnerBtn");
  const ownerBtnText = document.getElementById("ownerBtnText");
  const ownerToolbar = document.getElementById("ownerToolbar");
  const lockOwnerBtn = document.getElementById("lockOwnerBtn");
  const openAddPdfGlobalBtn = document.getElementById("openAddPdfGlobalBtn");
  const openAddSectionBtn = document.getElementById("openAddSectionBtn");
  const exportCodeBtn = document.getElementById("exportCodeBtn");

  // Modals
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

  // Social Links Modal Elements
  const openEditSocialBtn = document.getElementById("openEditSocialBtn");
  const socialModal = document.getElementById("socialModal");
  const closeSocialModalBtn = document.getElementById("closeSocialModalBtn");
  const editSocialForm = document.getElementById("editSocialForm");
  const socialGithubInput = document.getElementById("socialGithubInput");
  const socialLinkedinInput = document.getElementById("socialLinkedinInput");
  const socialInstagramInput = document.getElementById("socialInstagramInput");
  const socialEmailInput = document.getElementById("socialEmailInput");

  function renderSocialLinks() {
    const heroSocialLinks = document.getElementById("heroSocialLinks");
    if (!heroSocialLinks) return;

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
      html += `
        <button type="button" class="social-btn owner-edit-btn" onclick="window.openEditSocialModal()" title="Edit Social Links (Owner Only)">
          <i class="fa-solid fa-pen-to-square"></i> Edit Links
        </button>
      `;
    }

    heroSocialLinks.innerHTML = html;
  }

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
    renderSocialLinks();
  }

  function renderSubjectPills() {
    if (!subjectPills) return;

    let html = `
      <button class="filter-btn ${activeSubjectFilter === 'all' ? 'active' : ''}" data-subject="all">
        <i class="fa-solid fa-layer-group"></i> All Subjects
      </button>
    `;

    subjectSections.forEach(sec => {
      const isAct = activeSubjectFilter === sec.key ? 'active' : '';
      html += `
        <button class="filter-btn ${isAct}" data-subject="${escapeHtml(sec.key)}">
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
    if (totalNotesCount) {
      totalNotesCount.textContent = collegeMaterials.length;
    }

    if (!notesSectionsContainer) return;

    // Filter subjects to show
    const visibleSections = subjectSections.filter(sec => {
      if (activeSubjectFilter === "all") return true;
      return sec.key.toLowerCase() === activeSubjectFilter.toLowerCase();
    });

    if (visibleSections.length === 0) {
      notesSectionsContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: #94a3b8;">
          <p>No subject sections match the selected filter.</p>
        </div>
      `;
      return;
    }

    let globalMatchCount = 0;

    const sectionsHtml = visibleSections.map(sec => {
      // Find materials for this subject
      const secMaterials = collegeMaterials.filter(item => {
        const matchesSubject = item.subject.toLowerCase() === sec.key.toLowerCase();
        const matchesType = (activeTypeFilter === "all") || (item.type.toLowerCase() === activeTypeFilter.toLowerCase());
        const matchesSearch = 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSubject && matchesType && matchesSearch;
      });

      // If user is searching and this section has no matches, hide the shelf
      if (searchQuery && secMaterials.length === 0) {
        return "";
      }

      globalMatchCount += secMaterials.length;

      let cardsHtml = "";

      if (secMaterials.length === 0) {
        cardsHtml = `
          <div class="empty-shelf-notice">
            <i class="fa-regular fa-folder-open" style="font-size: 2rem; margin-bottom: 0.8rem; opacity: 0.5;"></i>
            <p>No ${activeTypeFilter !== 'all' ? activeTypeFilter : ''} documents currently in this section.</p>
            ${isOwnerMode ? `
              <button class="btn-action-primary" style="margin-top: 1rem; font-size: 0.85rem;" onclick="window.openAddPdfModal('${escapeHtml(sec.key)}')">
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
                  <div class="pdf-card-controls">
                    <button class="btn-card-del" title="Delete PDF" onclick="window.deletePdfMaterial(${item.id})">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
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
              <div class="shelf-icon" style="background: ${sec.color || '#6366f1'};">
                <i class="${sec.icon || 'fa-solid fa-book'}"></i>
              </div>
              <div>
                <h3 class="shelf-name">${escapeHtml(sec.name)}</h3>
                <span style="font-size: 0.8rem; color: #94a3b8;">${secMaterials.length} Documents Available</span>
              </div>
            </div>

            <div class="shelf-actions">
              ${isOwnerMode ? `
                <button class="btn-shelf-add" onclick="window.openAddPdfModal('${escapeHtml(sec.key)}')">
                  <i class="fa-solid fa-circle-plus"></i> Add PDF to this Section
                </button>
              ` : `
                <span class="shelf-count">${secMaterials.length} PDFs</span>
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
        <div style="text-align: center; padding: 4rem 1rem; color: #94a3b8;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.4;"></i>
          <h3>No study materials found</h3>
          <p>No documents matched "<strong>${escapeHtml(searchQuery)}</strong>" across any subject section.</p>
        </div>
      `;
      return;
    }

    notesSectionsContainer.innerHTML = sectionsHtml;
  }

  // Global methods for inline card button events
  window.openAddPdfModal = function(preselectedSubjectKey) {
    populateSubjectDropdown(preselectedSubjectKey);
    selectedLocalDataUrl = "";
    if (pdfLinkInput) pdfLinkInput.value = "";
    if (pdfTitleInput) pdfTitleInput.value = "";
    if (addPdfModal) addPdfModal.classList.add("active");
  };

  window.deletePdfMaterial = function(id) {
    const item = collegeMaterials.find(m => m.id === id);
    if (!item) return;
    if (confirm(`Are you sure you want to delete "${item.title}" from ${item.subject}?`)) {
      collegeMaterials = collegeMaterials.filter(m => m.id !== id);
      saveCollegeMaterials();
      renderNotes();
      showToast(`Removed "${item.title}"`);
    }
  };

  window.previewPdf = function(link, title) {
    if (!pdfViewerModal) return;
    if (pdfViewerTitle) pdfViewerTitle.innerHTML = `<i class="fa-solid fa-file-pdf" style="color: #ef4444;"></i> ${escapeHtml(title)}`;
    if (pdfViewerExternalBtn) pdfViewerExternalBtn.href = link;
    if (pdfFallbackLink) pdfFallbackLink.href = link;

    // Check if link is an embeddable direct file (local PDF or data URL)
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

  // Setup Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderNotes();
    });
  }

  if (subjectPills) {
    subjectPills.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      document.querySelectorAll("#subjectPills .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSubjectFilter = btn.dataset.subject;
      renderNotes();
    });
  }

  if (typePills) {
    typePills.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      document.querySelectorAll("#typePills .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTypeFilter = btn.dataset.type;
      renderNotes();
    });
  }

  // Owner Authentication Toggle
  if (toggleOwnerBtn) {
    toggleOwnerBtn.addEventListener("click", () => {
      if (isOwnerMode) {
        // Toggle off
        isOwnerMode = false;
        localStorage.setItem("yash_owner_auth", "false");
        updateOwnerUI();
        renderNotes();
        showToast("Exited Owner Mode");
      } else {
        const pass = prompt("Enter Owner Passcode to manage notes & add PDFs (Default: yash123):");
        if (pass === "yash123" || pass === "admin") {
          isOwnerMode = true;
          localStorage.setItem("yash_owner_auth", "true");
          updateOwnerUI();
          renderNotes();
          showToast("Owner Mode Unlocked! You can now add PDFs.");
        } else if (pass !== null) {
          alert("Incorrect passcode! Only the website owner can manage notes.");
        }
      }
    });
  }

  if (lockOwnerBtn) {
    lockOwnerBtn.addEventListener("click", () => {
      isOwnerMode = false;
      localStorage.setItem("yash_owner_auth", "false");
      updateOwnerUI();
      renderNotes();
      showToast("Locked Owner Mode");
    });
  }

  // Modal open buttons
  if (openAddPdfGlobalBtn) {
    openAddPdfGlobalBtn.addEventListener("click", () => {
      window.openAddPdfModal(subjectSections[0]?.key || "Physics");
    });
  }

  if (closeAddPdfModalBtn && addPdfModal) {
    closeAddPdfModalBtn.addEventListener("click", () => {
      addPdfModal.classList.remove("active");
    });
  }

  if (openAddSectionBtn && addSectionModal) {
    openAddSectionBtn.addEventListener("click", () => {
      addSectionModal.classList.add("active");
    });
  }

  if (closeAddSectionModalBtn && addSectionModal) {
    closeAddSectionModalBtn.addEventListener("click", () => {
      addSectionModal.classList.remove("active");
    });
  }

  if (closePdfViewerBtn && pdfViewerModal) {
    closePdfViewerBtn.addEventListener("click", () => {
      pdfViewerModal.classList.remove("active");
      if (pdfViewerFrame) pdfViewerFrame.src = "about:blank";
    });
  }

  // Close modals on dark backdrop click
  window.addEventListener("click", (e) => {
    if (e.target === addPdfModal) addPdfModal.classList.remove("active");
    if (e.target === addSectionModal) addSectionModal.classList.remove("active");
    if (e.target === exportModal) exportModal.classList.remove("active");
    if (e.target === pdfViewerModal) {
      pdfViewerModal.classList.remove("active");
      if (pdfViewerFrame) pdfViewerFrame.src = "about:blank";
    }
  });

  // Local PDF file picker integration
  if (triggerFilePickBtn && pdfLocalFileInput) {
    triggerFilePickBtn.addEventListener("click", () => {
      pdfLocalFileInput.click();
    });

    pdfLocalFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      // Suggest clean title from filename
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
      if (pdfTitleInput && !pdfTitleInput.value) {
        pdfTitleInput.value = cleanName;
      }

      // Set link input
      if (pdfLinkInput) {
        pdfLinkInput.value = `files/${file.name}`;
      }

      // Convert to base64 DataURL so it's viewable offline immediately
      const reader = new FileReader();
      reader.onload = function(evt) {
        selectedLocalDataUrl = evt.target.result;
        showToast(`Loaded ${file.name} for local viewing!`);
      };
      reader.readAsDataURL(file);
    });
  }

  // Handle Add PDF Form Submission
  if (addPdfForm) {
    addPdfForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const subject = pdfSubjectSelect.value;
      const type = document.getElementById("pdfTypeSelect").value;
      const title = pdfTitleInput.value.trim();
      let link = pdfLinkInput.value.trim();
      const semester = document.getElementById("pdfSemesterInput").value.trim() || "Semester 1";
      const date = document.getElementById("pdfDateInput").value.trim() || "Nov 2026";
      const description = document.getElementById("pdfDescInput").value.trim() || "Curated course notes and reference documentation.";

      if (!title || !link) {
        alert("Please provide a title and PDF link/file.");
        return;
      }

      // If user picked a local file from disk, use the DataURL for direct preview if preferred
      if (selectedLocalDataUrl && link.startsWith("files/")) {
        // Keep the files/ path in link, but we can also store the base64 or keep path
      }

      const newMaterial = {
        id: Date.now(),
        title,
        subject,
        type,
        description,
        semester,
        link,
        date
      };

      collegeMaterials.unshift(newMaterial);
      saveCollegeMaterials();

      addPdfForm.reset();
      selectedLocalDataUrl = "";
      addPdfModal.classList.remove("active");

      renderNotes();
      showToast(`Added "${title}" to ${subject} section!`);
    });
  }

  // Handle Add Section Form Submission
  if (addSectionForm) {
    addSectionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("newSectionName").value.trim();
      const key = document.getElementById("newSectionKey").value.trim();
      const color = document.getElementById("newSectionColor").value;

      if (!name || !key) return;

      const newSec = {
        id: key.toLowerCase().replace(/\s+/g, "-"),
        name,
        key,
        icon: "fa-solid fa-folder-bookmark",
        color
      };

      subjectSections.push(newSec);
      saveSubjectSections();

      renderSubjectPills();
      renderNotes();
      addSectionForm.reset();
      addSectionModal.classList.remove("active");
      showToast(`Created "${name}" section!`);
    });
  }

  // Export Code for app.js
  if (exportCodeBtn && exportModal && exportCodeTextarea) {
    exportCodeBtn.addEventListener("click", () => {
      const codeOutput = `// Replace defaultCollegeMaterials and defaultSocialLinks in app.js with this:\nconst defaultCollegeMaterials = ${JSON.stringify(collegeMaterials, null, 2)};\n\nconst defaultSocialLinks = ${JSON.stringify(socialLinks, null, 2)};`;
      exportCodeTextarea.value = codeOutput;
      exportModal.classList.add("active");
    });
  }

  if (closeExportModalBtn && exportModal) {
    closeExportModalBtn.addEventListener("click", () => {
      exportModal.classList.remove("active");
    });
  }

  if (copyExportCodeBtn && exportCodeTextarea) {
    copyExportCodeBtn.addEventListener("click", () => {
      exportCodeTextarea.select();
      navigator.clipboard.writeText(exportCodeTextarea.value);
      showToast("Code copied to clipboard! Ready to paste into app.js.");
    });
  }

  // Social Links Modal Handlers (Owner Only)
  window.openEditSocialModal = function() {
    if (!isOwnerMode) {
      alert("Only the website owner can edit social profiles. Please login first.");
      return;
    }
    if (socialGithubInput) socialGithubInput.value = socialLinks.github || "";
    if (socialLinkedinInput) socialLinkedinInput.value = socialLinks.linkedin || "";
    if (socialInstagramInput) socialInstagramInput.value = socialLinks.instagram || "";
    if (socialEmailInput) socialEmailInput.value = socialLinks.email || "";
    if (socialModal) socialModal.classList.add("active");
  };

  if (openEditSocialBtn) {
    openEditSocialBtn.addEventListener("click", () => {
      window.openEditSocialModal();
    });
  }

  if (closeSocialModalBtn && socialModal) {
    closeSocialModalBtn.addEventListener("click", () => {
      socialModal.classList.remove("active");
    });
  }

  function formatSocialUrl(val, platform) {
    let str = (val || "").trim();
    if (!str) return "";
    if (str.startsWith("http://") || str.startsWith("https://")) return str;

    // Remove leading @
    str = str.replace(/^@+/, "");

    if (platform === "instagram") {
      return `https://instagram.com/${str}`;
    } else if (platform === "github") {
      return `https://github.com/${str}`;
    } else if (platform === "linkedin") {
      return `https://linkedin.com/in/${str}`;
    }
    return str;
  }

  if (editSocialForm) {
    editSocialForm.addEventListener("submit", (e) => {
      e.preventDefault();
      socialLinks.github = formatSocialUrl(socialGithubInput.value, "github");
      socialLinks.linkedin = formatSocialUrl(socialLinkedinInput.value, "linkedin");
      socialLinks.instagram = formatSocialUrl(socialInstagramInput.value, "instagram");
      socialLinks.email = (socialEmailInput.value || "").trim();

      saveSocialLinks();
      renderSocialLinks();
      if (socialModal) socialModal.classList.remove("active");
      showToast("Social profile links updated successfully!");
    });
  }

  // Close modals on dark backdrop click
  window.addEventListener("click", (e) => {
    if (e.target === addPdfModal) addPdfModal.classList.remove("active");
    if (e.target === addSectionModal) addSectionModal.classList.remove("active");
    if (e.target === exportModal) exportModal.classList.remove("active");
    if (e.target === socialModal) socialModal.classList.remove("active");
    if (e.target === pdfViewerModal) {
      pdfViewerModal.classList.remove("active");
      if (pdfViewerFrame) pdfViewerFrame.src = "about:blank";
    }
  });

  // Initial render
  updateOwnerUI();
  renderSocialLinks();
  renderSubjectPills();
  renderNotes();
}

// ================================================================
// ATTENDANCE TRACKER IMPLEMENTATION
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

    attendanceSubjects.forEach(sub => {
      totalAttended += Number(sub.attended) || 0;
      totalHeld += Number(sub.total) || 0;
    });

    const overallPct = totalHeld > 0 ? Math.round((totalAttended / totalHeld) * 100) : 0;

    if (overallPercentage) overallPercentage.textContent = `${overallPct}%`;
    if (heroAttendanceStat) heroAttendanceStat.textContent = `${overallPct}%`;
    if (overallClassesCount) overallClassesCount.textContent = `${totalAttended} of ${totalHeld} Classes Attended`;

    if (overallGaugeFill) {
      const circ = 264;
      const offset = circ - (overallPct / 100) * circ;
      overallGaugeFill.style.strokeDashoffset = Math.max(0, offset);
      if (overallPct >= 75) {
        overallGaugeFill.style.stroke = "#10b981";
      } else if (overallPct >= 65) {
        overallGaugeFill.style.stroke = "#f59e0b";
      } else {
        overallGaugeFill.style.stroke = "#ef4444";
      }
    }

    if (overallStatusBadge) {
      if (overallPct >= 75) {
        overallStatusBadge.className = "status-badge-pill safe";
        overallStatusBadge.innerHTML = `<i class="fa-solid fa-shield-check"></i> Safe: Above 75% Criteria`;
      } else if (overallPct >= 65) {
        overallStatusBadge.className = "status-badge-pill warning";
        overallStatusBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Warning: Borderline (${overallPct}%)`;
      } else {
        overallStatusBadge.className = "status-badge-pill danger";
        overallStatusBadge.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Shortage Alert: Below 75%`;
      }
    }

    if (!attendanceGrid) return;

    if (attendanceSubjects.length === 0) {
      attendanceGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #94a3b8;">
          <p>No subjects added yet. Click <strong>Add Subject</strong> or <strong>Reset Defaults</strong> to get started.</p>
        </div>
      `;
      return;
    }

    attendanceGrid.innerHTML = attendanceSubjects.map(sub => {
      const attended = Number(sub.attended) || 0;
      const total = Number(sub.total) || 0;
      const pct = total > 0 ? Math.round((attended / total) * 100) : 0;

      let statusClass = "safe";
      let advisoryText = "";

      if (pct >= 75) {
        statusClass = "safe";
        const bunks = Math.floor((attended - 0.75 * total) / 0.75);
        if (bunks > 0) {
          advisoryText = `<i class="fa-solid fa-check-circle"></i> You can safely miss <strong>${bunks}</strong> more class${bunks > 1 ? 'es' : ''}.`;
        } else {
          advisoryText = `<i class="fa-solid fa-triangle-exclamation"></i> Exactly on 75% edge. Do not miss next class!`;
        }
      } else {
        const needed = Math.ceil((0.75 * total - attended) / 0.25);
        if (pct >= 65) {
          statusClass = "warning";
        } else {
          statusClass = "danger";
        }
        advisoryText = `<i class="fa-solid fa-triangle-exclamation"></i> Attend next <strong>${needed}</strong> class${needed > 1 ? 'es' : ''} to reach 75%.`;
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
              ${advisoryText}
            </div>
          </div>

          <div class="att-button-group">
            <button class="btn-att btn-present" onclick="window.markAttendance(${sub.id}, 'present')">
              <i class="fa-solid fa-check"></i> Present
            </button>
            <button class="btn-att btn-absent" onclick="window.markAttendance(${sub.id}, 'absent')">
              <i class="fa-solid fa-xmark"></i> Absent
            </button>
            <button class="btn-att btn-undo" title="Undo / Subtract 1 class" onclick="window.markAttendance(${sub.id}, 'undo')">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // Global methods for inline card button events
  window.markAttendance = function(id, type) {
    const sub = attendanceSubjects.find(s => s.id === id);
    if (!sub) return;

    if (type === 'present') {
      sub.attended = (Number(sub.attended) || 0) + 1;
      sub.total = (Number(sub.total) || 0) + 1;
    } else if (type === 'absent') {
      sub.total = (Number(sub.total) || 0) + 1;
    } else if (type === 'undo') {
      if (sub.total > 0) {
        if (sub.attended > 0) {
          sub.attended -= 1;
        }
        sub.total -= 1;
      }
    }
    saveAttendanceData();
    renderAttendance();
  };

  window.removeAttendanceSubject = function(id) {
    if (confirm("Remove this subject from tracker?")) {
      attendanceSubjects = attendanceSubjects.filter(s => s.id !== id);
      saveAttendanceData();
      renderAttendance();
    }
  };

  if (openAddSubjectBtn && subjectModal) {
    openAddSubjectBtn.addEventListener("click", () => {
      subjectModal.classList.add("active");
    });
  }

  if (closeSubjectModalBtn && subjectModal) {
    closeSubjectModalBtn.addEventListener("click", () => {
      subjectModal.classList.remove("active");
    });
  }

  if (addSubjectForm) {
    addSubjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("newSubjectName").value.trim();
      const attended = parseInt(document.getElementById("newSubjectAttended").value, 10) || 0;
      const total = parseInt(document.getElementById("newSubjectTotal").value, 10) || 0;

      if (!name) return;
      if (attended > total) {
        alert("Attended classes cannot be greater than total classes!");
        return;
      }

      attendanceSubjects.push({
        id: Date.now(),
        name,
        attended,
        total
      });

      saveAttendanceData();
      renderAttendance();
      addSubjectForm.reset();
      subjectModal.classList.remove("active");
      showToast(`Added ${name} to Attendance Tracker`);
    });
  }

  if (resetAttendanceBtn) {
    resetAttendanceBtn.addEventListener("click", () => {
      if (confirm("Reset attendance tracker back to First Year IT defaults?")) {
        attendanceSubjects = JSON.parse(JSON.stringify(defaultAttendanceSubjects));
        saveAttendanceData();
        renderAttendance();
        showToast("Attendance reset to defaults");
      }
    });
  }

  renderAttendance();
}

// ================================================================
// CGPA & MARKS CALCULATOR IMPLEMENTATION
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

  // --- SGPA CALCULATOR ---
  const sgpaRowsList = document.getElementById("sgpaRowsList");
  const addSgpaRowBtn = document.getElementById("addSgpaRowBtn");
  const resetSgpaBtn = document.getElementById("resetSgpaBtn");

  const calculatedSgpa = document.getElementById("calculatedSgpa");
  const totalCreditsDisplay = document.getElementById("totalCreditsDisplay");
  const totalPointsDisplay = document.getElementById("totalPointsDisplay");
  const equivalentPercentageDisplay = document.getElementById("equivalentPercentageDisplay");
  const sgpaClassBadge = document.getElementById("sgpaClassBadge");
  const heroSgpaStat = document.getElementById("heroSgpaStat");

  function renderSgpaRows() {
    if (!sgpaRowsList) return;

    sgpaRowsList.innerHTML = sgpaCourses.map((c) => {
      const gradePts = gradePointMap[c.grade] ?? 0;
      const creditPts = (Number(c.credits) || 0) * gradePts;

      return `
        <div class="calc-row" data-id="${c.id}">
          <input type="text" value="${escapeHtml(c.name)}" placeholder="Course name" onchange="window.updateSgpaCourse(${c.id}, 'name', this.value)">
          <input type="number" min="1" max="10" value="${c.credits}" title="Course Credits" onchange="window.updateSgpaCourse(${c.id}, 'credits', this.value)">
          <select onchange="window.updateSgpaCourse(${c.id}, 'grade', this.value)">
            ${Object.keys(gradePointMap).map(g => `
              <option value="${g}" ${g === c.grade ? 'selected' : ''}>${g} (${gradePointMap[g]} pts)</option>
            `).join("")}
          </select>
          <span class="calc-point-display">${creditPts}</span>
          <button class="btn-del-row" title="Remove Course" onclick="window.removeSgpaCourse(${c.id})">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `;
    }).join("");

    calculateSgpa();
  }

  function calculateSgpa() {
    let totalCredits = 0;
    let totalEarnedPoints = 0;

    sgpaCourses.forEach(c => {
      const cr = Number(c.credits) || 0;
      const pt = gradePointMap[c.grade] ?? 0;
      totalCredits += cr;
      totalEarnedPoints += cr * pt;
    });

    const sgpa = totalCredits > 0 ? (totalEarnedPoints / totalCredits).toFixed(2) : "0.00";
    const numSgpa = parseFloat(sgpa);
    let approxPct = numSgpa > 0 ? Math.max(0, ((numSgpa - 0.75) * 10)).toFixed(1) : "0.0";

    if (calculatedSgpa) calculatedSgpa.textContent = sgpa;
    if (heroSgpaStat) heroSgpaStat.textContent = sgpa;
    if (totalCreditsDisplay) totalCreditsDisplay.textContent = totalCredits;
    if (totalPointsDisplay) totalPointsDisplay.textContent = totalEarnedPoints;
    if (equivalentPercentageDisplay) equivalentPercentageDisplay.textContent = `${approxPct}%`;

    if (sgpaClassBadge) {
      if (numSgpa >= 7.75) {
        sgpaClassBadge.textContent = "First Class with Distinction";
        sgpaClassBadge.style.color = "#34d399";
        sgpaClassBadge.style.background = "rgba(16, 185, 129, 0.15)";
      } else if (numSgpa >= 6.75) {
        sgpaClassBadge.textContent = "First Class";
        sgpaClassBadge.style.color = "#818cf8";
        sgpaClassBadge.style.background = "rgba(99, 102, 241, 0.15)";
      } else if (numSgpa >= 5.75) {
        sgpaClassBadge.textContent = "Higher Second Class";
        sgpaClassBadge.style.color = "#fbbf24";
        sgpaClassBadge.style.background = "rgba(245, 158, 11, 0.15)";
      } else if (numSgpa >= 4.00) {
        sgpaClassBadge.textContent = "Pass Class";
        sgpaClassBadge.style.color = "#cbd5e1";
        sgpaClassBadge.style.background = "rgba(255, 255, 255, 0.1)";
      } else {
        sgpaClassBadge.textContent = "Needs Improvement (ATKT / Fail)";
        sgpaClassBadge.style.color = "#f87171";
        sgpaClassBadge.style.background = "rgba(239, 68, 68, 0.15)";
      }
    }
  }

  window.updateSgpaCourse = function(id, field, value) {
    const course = sgpaCourses.find(c => c.id === id);
    if (!course) return;

    if (field === 'credits') {
      course.credits = Math.max(1, parseInt(value, 10) || 1);
    } else {
      course[field] = value;
    }
    saveSgpaData();
    renderSgpaRows();
  };

  window.removeSgpaCourse = function(id) {
    sgpaCourses = sgpaCourses.filter(c => c.id !== id);
    saveSgpaData();
    renderSgpaRows();
  };

  if (addSgpaRowBtn) {
    addSgpaRowBtn.addEventListener("click", () => {
      sgpaCourses.push({
        id: Date.now(),
        name: "New Course Subject",
        credits: 3,
        grade: "A"
      });
      saveSgpaData();
      renderSgpaRows();
    });
  }

  if (resetSgpaBtn) {
    resetSgpaBtn.addEventListener("click", () => {
      if (confirm("Reset SGPA courses back to Semester 1 IT defaults?")) {
        sgpaCourses = JSON.parse(JSON.stringify(defaultSgpaCourses));
        saveSgpaData();
        renderSgpaRows();
        showToast("SGPA reset to defaults");
      }
    });
  }

  renderSgpaRows();

  // --- CUMULATIVE CGPA CALCULATOR ---
  const cgpaRowsList = document.getElementById("cgpaRowsList");
  const addCgpaRowBtn = document.getElementById("addCgpaRowBtn");
  const resetCgpaBtn = document.getElementById("resetCgpaBtn");

  const calculatedCgpa = document.getElementById("calculatedCgpa");
  const totalSemestersDisplay = document.getElementById("totalSemestersDisplay");
  const totalCgpaCreditsDisplay = document.getElementById("totalCgpaCreditsDisplay");
  const cgpaPercentageDisplay = document.getElementById("cgpaPercentageDisplay");
  const cgpaClassBadge = document.getElementById("cgpaClassBadge");

  function renderCgpaRows() {
    if (!cgpaRowsList) return;

    cgpaRowsList.innerHTML = cgpaSemesters.map(s => {
      const sgpa = Number(s.sgpa) || 0;
      const credits = Number(s.credits) || 0;
      const pts = (sgpa * credits).toFixed(1);

      return `
        <div class="calc-row cgpa-row" data-id="${s.id}">
          <input type="text" value="${escapeHtml(s.name)}" placeholder="Semester name" onchange="window.updateCgpaSemester(${s.id}, 'name', this.value)">
          <input type="number" step="0.01" min="0" max="10" value="${s.sgpa}" placeholder="SGPA" onchange="window.updateCgpaSemester(${s.id}, 'sgpa', this.value)">
          <input type="number" min="1" max="40" value="${s.credits}" placeholder="Credits" onchange="window.updateCgpaSemester(${s.id}, 'credits', this.value)">
          <span class="calc-point-display">${pts}</span>
          <button class="btn-del-row" title="Remove Semester" onclick="window.removeCgpaSemester(${s.id})">
            <i class="fa-solid fa-xmark"></i>
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
      const sgpa = Number(s.sgpa) || 0;
      const cr = Number(s.credits) || 0;
      totalCredits += cr;
      totalWeightedPoints += sgpa * cr;
    });

    const cgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : "0.00";
    const numCgpa = parseFloat(cgpa);
    const approxPct = numCgpa > 0 ? Math.max(0, ((numCgpa - 0.75) * 10)).toFixed(1) : "0.0";

    if (calculatedCgpa) calculatedCgpa.textContent = cgpa;
    if (totalSemestersDisplay) totalSemestersDisplay.textContent = cgpaSemesters.length;
    if (totalCgpaCreditsDisplay) totalCgpaCreditsDisplay.textContent = totalCredits;
    if (cgpaPercentageDisplay) cgpaPercentageDisplay.textContent = `${approxPct}%`;

    if (cgpaClassBadge) {
      if (numCgpa >= 7.75) {
        cgpaClassBadge.textContent = "First Class with Distinction";
        cgpaClassBadge.style.color = "#34d399";
        cgpaClassBadge.style.background = "rgba(16, 185, 129, 0.15)";
      } else if (numCgpa >= 6.75) {
        cgpaClassBadge.textContent = "First Class";
        cgpaClassBadge.style.color = "#818cf8";
        cgpaClassBadge.style.background = "rgba(99, 102, 241, 0.15)";
      } else if (numCgpa >= 5.75) {
        cgpaClassBadge.textContent = "Higher Second Class";
        cgpaClassBadge.style.color = "#fbbf24";
        cgpaClassBadge.style.background = "rgba(245, 158, 11, 0.15)";
      } else {
        cgpaClassBadge.textContent = "Pass Class";
        cgpaClassBadge.style.color = "#cbd5e1";
        cgpaClassBadge.style.background = "rgba(255, 255, 255, 0.1)";
      }
    }
  }

  window.updateCgpaSemester = function(id, field, value) {
    const sem = cgpaSemesters.find(s => s.id === id);
    if (!sem) return;

    if (field === 'sgpa') {
      sem.sgpa = Math.min(10, Math.max(0, parseFloat(value) || 0));
    } else if (field === 'credits') {
      sem.credits = Math.max(1, parseInt(value, 10) || 1);
    } else {
      sem[field] = value;
    }
    saveCgpaData();
    renderCgpaRows();
  };

  window.removeCgpaSemester = function(id) {
    cgpaSemesters = cgpaSemesters.filter(s => s.id !== id);
    saveCgpaData();
    renderCgpaRows();
  };

  if (addCgpaRowBtn) {
    addCgpaRowBtn.addEventListener("click", () => {
      const nextSemNum = cgpaSemesters.length + 1;
      cgpaSemesters.push({
        id: Date.now(),
        name: `Semester ${nextSemNum}`,
        sgpa: 8.50,
        credits: 21
      });
      saveCgpaData();
      renderCgpaRows();
    });
  }

  if (resetCgpaBtn) {
    resetCgpaBtn.addEventListener("click", () => {
      if (confirm("Reset CGPA semesters back to defaults?")) {
        cgpaSemesters = JSON.parse(JSON.stringify(defaultCgpaSemesters));
        saveCgpaData();
        renderCgpaRows();
        showToast("CGPA reset to defaults");
      }
    });
  }

  renderCgpaRows();
}

// ================================================================
// STUDY HUB: POMODORO TIMER & FORMULA CHEAT SHEETS
// ================================================================
const formulaDatabase = {
  maths: [
    {
      id: "m1",
      topic: "Rank of Matrix (Row Echelon Form)",
      tag: "Unit 1: Linear Algebra",
      code: "Rank(A) = Count of non-zero rows in Echelon form\nNormal Form: [I_r  0 ;  0  0] where r = rank",
      notes: "Perform elementary row transformations (R_i -> R_i - k*R_j). Column transformations are allowed only when converting to Normal Form."
    },
    {
      id: "m2",
      topic: "System of Linear Equations (AX = B)",
      tag: "Unit 1: Linear Algebra",
      code: "Rank(A) == Rank(A|B) == n  => Unique Solution\nRank(A) == Rank(A|B) < n   => Infinitely Many Solutions\nRank(A) != Rank(A|B)       => Inconsistent (No Solution)",
      notes: "For homogeneous equations AX = 0: If Rank(A) = n, only trivial solution (X=0). If Rank(A) < n, there exist (n - r) linearly independent non-trivial solutions."
    },
    {
      id: "m3",
      topic: "Cayley-Hamilton Theorem & Inverse",
      tag: "Unit 2: Matrices",
      code: "|A - λI| = 0  =>  A^n + c_{n-1}*A^{n-1} + ... + c_0*I = 0\nA^-1 = (-1 / c_0) * (A^{n-1} + c_{n-1}*A^{n-2} + ... + c_1*I)",
      notes: "Every square matrix satisfies its own characteristic polynomial equation. Very useful for computing A^4, A^5, and A^-1 in SPPU exams."
    },
    {
      id: "m4",
      topic: "Eigenvalues & Eigenvectors",
      tag: "Unit 2: Matrices",
      code: "Sum of Eigenvalues = Trace(A) = a_11 + a_22 + a_33\nProduct of Eigenvalues = Det(A) = |A|\nCharacteristic Eq (3x3): λ³ - S1*λ² + S2*λ - |A| = 0",
      notes: "S1 = trace(A), S2 = sum of minors of leading diagonal elements, |A| = determinant. If λ=0 is an eigenvalue, the matrix is singular."
    },
    {
      id: "m5",
      topic: "Euler's Theorem for Homogeneous Functions",
      tag: "Unit 4: Partial Derivatives",
      code: "x*(∂u/∂x) + y*(∂u/∂y) = n * u(x, y)\nx²*(∂²u/∂x²) + 2xy*(∂²u/∂x∂y) + y²*(∂²u/∂y²) = n*(n-1)*u",
      notes: "If u = f(z) where z is homogeneous of degree n, then x*(∂u/∂x) + y*(∂u/∂y) = n * (f(z) / f'(z))."
    },
    {
      id: "m6",
      topic: "Maxima & Minima of Two Variables",
      tag: "Unit 5: Applications",
      code: "r = ∂²f/∂x²,  s = ∂²f/∂x∂y,  t = ∂²f/∂y²\nΔ = rt - s²\n• Δ > 0 and r < 0 => Local Maximum\n• Δ > 0 and r > 0 => Local Minimum\n• Δ < 0          => Saddle Point (Neither)",
      notes: "Step 1: Solve ∂f/∂x = 0 and ∂f/∂y = 0 simultaneously to find stationary points (a, b). Step 2: Test rt - s² at each point."
    }
  ],

  physics: [
    {
      id: "p1",
      topic: "He-Ne Laser System Parameters",
      tag: "Unit 3: Lasers",
      code: "Gas Mixture: He : Ne = 10 : 1\nWavelength:  λ = 632.8 nm (Red Visible Light)\nTransition:  3s -> 2p of Neon atom\nPumping:     Electric discharge (Electron impact)",
      notes: "He atoms are excited to metastable states (20.61 eV & 19.82 eV) and transfer energy resonantly to Ne atoms (20.66 eV & 19.78 eV) via collisions."
    },
    {
      id: "p2",
      topic: "Einstein's Coefficients & Population Inversion",
      tag: "Unit 3: Lasers",
      code: "A_21 / B_21 = (8 * π * h * ν³) / c³\nB_12 = B_21 (Stimulated Absorption = Stimulated Emission)\nPopulation Ratio: N2 / N1 = exp(-hν / (k_B * T))",
      notes: "Population inversion (N2 > N1) requires an active medium, a pump source, and a metastable state with a relatively long lifetime (~10⁻³ s)."
    },
    {
      id: "p3",
      topic: "Interference in Thin Films (Reflected Light)",
      tag: "Unit 1: Wave Optics",
      code: "Bright Fringes (Maxima): 2*μ*t*cos(r) = (2n - 1) * (λ / 2)\nDark Fringes (Minima):   2*μ*t*cos(r) = n * λ\nPath Diff Phase Correction = λ / 2 (Stokes' Relation)",
      notes: "Reflection from a denser medium introduces an extra path difference of λ/2 (phase change of π radians)."
    },
    {
      id: "p4",
      topic: "Newton's Rings Fringe Diameters",
      tag: "Unit 1: Wave Optics",
      code: "Dark Rings:   D_n² = 4 * n * R * λ\nBright Rings: D_n² = 2 * (2n - 1) * R * λ\nWavelength:   λ = (D_{n+p}² - D_n²) / (4 * p * R)",
      notes: "D_n is directly proportional to √n for dark rings. Center is always dark in reflected light. In transmitted light, the center is bright."
    },
    {
      id: "p5",
      topic: "de Broglie Wavelength & Dual Nature",
      tag: "Unit 2: Quantum Physics",
      code: "λ = h / p = h / (m * v) = h / √(2 * m * E)\nFor Accelerated Electron: λ = 12.27 / √V  (in Ångströms, Å)",
      notes: "E is kinetic energy in Joules, V is accelerating voltage in Volts. Validated experimentally by the Davisson-Germer diffraction experiment."
    },
    {
      id: "p6",
      topic: "Heisenberg's Uncertainty Principle",
      tag: "Unit 2: Quantum Physics",
      code: "Δx * Δp_x ≥ ℏ / 2  (where ℏ = h / 2π)\nΔE * Δt   ≥ ℏ / 2",
      notes: "Shows that electrons cannot exist inside the atomic nucleus (calculated minimum energy would exceed observed beta particle energies)."
    }
  ],

  python: [
    {
      id: "py1",
      topic: "List Comprehension with Conditions",
      tag: "Data Structures",
      code: "# Syntax: [expression for item in iterable if condition]\nevens = [x**2 for x in range(10) if x % 2 == 0]\n# Result: [0, 4, 16, 36, 64]",
      notes: "Significantly faster and more pythonic than creating an empty list and calling .append() inside a for-loop."
    },
    {
      id: "py2",
      topic: "String Slicing & Quick Reverse",
      tag: "Strings & Sequences",
      code: "s = \"Engineering\"\nreversed_s = s[::-1]     # \"gnireenignE\"\nsub = s[0:8:2]           # \"Egne\" (start:stop:step)",
      notes: "Negative step (-1) traverses the sequence backwards. Slice never throws IndexError if indices are out of range."
    },
    {
      id: "py3",
      topic: "Dictionary Comprehension & Inversion",
      tag: "Dictionaries",
      code: "scores = {'Maths': 90, 'Physics': 85, 'Python': 95}\n# Invert keys and values\ninv = {val: key for key, val in scores.items()}",
      notes: "Dictionary keys must be immutable (str, int, tuple). Lookup and insertion average time complexity is O(1)."
    },
    {
      id: "py4",
      topic: "Lambda, Filter, and Map Combinations",
      tag: "Functional Python",
      code: "nums = [1, 2, 3, 4, 5, 6, 7, 8]\neven_cubes = list(map(lambda x: x**3, filter(lambda x: x % 2 == 0, nums)))\n# Result: [8, 64, 216, 512]",
      notes: "lambda arguments: expression creates anonymous functions without def syntax."
    },
    {
      id: "py5",
      topic: "Safe File I/O with Context Managers",
      tag: "File Handling",
      code: "# Automatically closes file stream even if an error occurs\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    lines = [line.strip() for line in f if line.strip()]",
      notes: "Always specify encoding='utf-8' for cross-platform compatibility across Windows and Linux."
    },
    {
      id: "py6",
      topic: "Object-Oriented Class Template (OOP)",
      tag: "Object Oriented",
      code: "class Student:\n    def __init__(self, name, roll_no):\n        self.name = name\n        self.roll_no = roll_no\n\n    def get_details(self):\n        return f\"{self.name} (Roll: {self.roll_no})\"",
      notes: "__init__ is the initializer constructor; self refers to the instance of the object being created."
    }
  ],

  bee: [
    {
      id: "b1",
      topic: "Kirchhoff's Laws (KVL & KCL)",
      tag: "Unit 1: DC Circuits",
      code: "KCL (Current Law at Node): Σ I_in = Σ I_out\nKVL (Voltage Law in Loop): Σ V_sources - Σ (I * R) = 0",
      notes: "KCL represents conservation of electric charge. KVL represents conservation of energy in a closed loop."
    },
    {
      id: "b2",
      topic: "Thevenin's Equivalent Circuit",
      tag: "Unit 1: Network Theorems",
      code: "I_L = V_th / (R_th + R_L)\nV_L = I_L * R_L\nP_L = I_L² * R_L",
      notes: "V_th is the open-circuit voltage across the load terminals. R_th is the equivalent resistance with all independent voltage sources shorted and current sources opened."
    },
    {
      id: "b3",
      topic: "Maximum Power Transfer Theorem",
      tag: "Unit 1: Network Theorems",
      code: "Condition for Max Power: R_L = R_th\nP_max = V_th² / (4 * R_th)",
      notes: "At maximum power transfer, efficiency is exactly 50%. The remaining 50% is lost across the internal source resistance R_th."
    },
    {
      id: "b4",
      topic: "Series R-L-C AC Circuit & Resonance",
      tag: "Unit 2: AC Fundamentals",
      code: "Z = √(R² + (X_L - X_C)²)\nX_L = 2*π*f*L,   X_C = 1 / (2*π*f*C)\nResonant Frequency: f_r = 1 / (2 * π * √(L * C))\nPower Factor: cos(φ) = R / Z (Unity = 1 at resonance)",
      notes: "At resonance: X_L = X_C, Impedance Z is purely resistive and minimum (Z = R), and current is maximum."
    },
    {
      id: "b5",
      topic: "Single-Phase Transformer Formulas",
      tag: "Unit 3: Transformers",
      code: "Transformation Ratio: K = E2/E1 = N2/N1 = I1/I2\nEMF Equation: E = 4.44 * f * N * Φ_m",
      notes: "Where f is supply frequency in Hz, N is number of turns, and Φ_m is peak magnetic flux in Webers. Frequency remains unchanged."
    }
  ]
};

function initStudyHub() {
  // --------------------------------------------------------------
  // 1. Pomodoro Timer
  // --------------------------------------------------------------
  const pomoTimeDisplay = document.getElementById("pomoTimeDisplay");
  const pomoPhaseLabel = document.getElementById("pomoPhaseLabel");
  const pomoCircleFill = document.getElementById("pomoCircleFill");
  const pomoSessionCount = document.getElementById("pomoSessionCount");
  const pomoStartBtn = document.getElementById("pomoStartBtn");
  const pomoStartIcon = document.getElementById("pomoStartIcon");
  const pomoStartText = document.getElementById("pomoStartText");
  const pomoResetBtn = document.getElementById("pomoResetBtn");
  const pomoSoundBtn = document.getElementById("pomoSoundBtn");
  const pomoSoundIcon = document.getElementById("pomoSoundIcon");
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

  if (pomoSessionCount) {
    pomoSessionCount.textContent = completedPomodoros;
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateTimerDisplay() {
    if (pomoTimeDisplay) {
      pomoTimeDisplay.textContent = formatTime(secondsRemaining);
    }

    if (pomoCircleFill) {
      const circ = 540; // 2 * PI * 86
      const elapsed = totalDuration - secondsRemaining;
      const offset = (elapsed / totalDuration) * circ;
      pomoCircleFill.style.strokeDashoffset = offset;

      if (currentMode === "pomodoro") {
        pomoCircleFill.style.stroke = "#a855f7";
      } else if (currentMode === "shortBreak") {
        pomoCircleFill.style.stroke = "#10b981";
      } else {
        pomoCircleFill.style.stroke = "#38bdf8";
      }
    }
  }

  function playChimeSound() {
    if (!isSoundActive) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.45);
      });
    } catch (e) {
      console.warn("AudioContext error", e);
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

    updateTimerDisplay();
  }

  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    if (pomoStartIcon) pomoStartIcon.className = "fa-solid fa-pause";
    if (pomoStartText) pomoStartText.textContent = "Pause";

    timerInterval = setInterval(() => {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateTimerDisplay();
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
    updateTimerDisplay();
  }

  function handleTimerEnd() {
    pauseTimer();
    playChimeSound();

    if (currentMode === "pomodoro") {
      completedPomodoros++;
      localStorage.setItem("yash_pomo_count", completedPomodoros);
      if (pomoSessionCount) pomoSessionCount.textContent = completedPomodoros;

      const subj = pomoSubjectSelect ? pomoSubjectSelect.value : "your subject";
      showToast(`🎉 Focus session complete on ${subj}! Take a 5-minute break.`);
      switchMode("shortBreak");
    } else {
      showToast("☕ Break over! Time to start another focus session.");
      switchMode("pomodoro");
    }
  }

  // Setup Pomodoro Event Listeners
  document.querySelectorAll(".pomo-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchMode(btn.dataset.mode);
    });
  });

  if (pomoStartBtn) {
    pomoStartBtn.addEventListener("click", () => {
      if (isTimerRunning) {
        pauseTimer();
      } else {
        startTimer();
      }
    });
  }

  if (pomoResetBtn) {
    pomoResetBtn.addEventListener("click", resetTimer);
  }

  if (pomoSoundBtn) {
    pomoSoundBtn.addEventListener("click", () => {
      isSoundActive = !isSoundActive;
      if (isSoundActive) {
        pomoSoundBtn.innerHTML = `<i class="fa-solid fa-volume-high" id="pomoSoundIcon"></i> Sound ON`;
        showToast("Chime sounds enabled");
      } else {
        pomoSoundBtn.innerHTML = `<i class="fa-solid fa-volume-xmark" id="pomoSoundIcon"></i> Sound OFF`;
        showToast("Chime sounds muted");
      }
    });
  }

  updateTimerDisplay();

  // --------------------------------------------------------------
  // 2. Formula Cheat Sheets
  // --------------------------------------------------------------
  const cheatItemsList = document.getElementById("cheatItemsList");
  const cheatSearchInput = document.getElementById("cheatSearchInput");
  const cheatTabs = document.getElementById("cheatTabs");

  let activeCheatSubject = "maths";
  let cheatSearchQuery = "";

  function renderCheatSheets() {
    if (!cheatItemsList) return;

    const items = formulaDatabase[activeCheatSubject] || [];
    const filtered = items.filter(item => {
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
        <div style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 0.6rem; opacity: 0.4;"></i>
          <p>No formulas found matching "<strong>${escapeHtml(cheatSearchQuery)}</strong>".</p>
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
          <button class="btn-copy-cheat" onclick="window.copyCheatFormula('${item.id}', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <p class="cheat-item-notes">
          <i class="fa-solid fa-lightbulb" style="color: #fbbf24; margin-right: 0.3rem;"></i>
          ${escapeHtml(item.notes)}
        </p>
      </div>
    `).join("");
  }

  window.copyCheatFormula = function(id, btnElem) {
    const codeElem = document.getElementById(`code-${id}`);
    if (!codeElem) return;

    navigator.clipboard.writeText(codeElem.textContent).then(() => {
      const originalHtml = btnElem.innerHTML;
      btnElem.innerHTML = `<i class="fa-solid fa-check" style="color: #34d399;"></i> Copied!`;
      btnElem.style.background = "rgba(16, 185, 129, 0.25)";
      btnElem.style.color = "#34d399";

      setTimeout(() => {
        btnElem.innerHTML = originalHtml;
        btnElem.style.background = "";
        btnElem.style.color = "";
      }, 2000);

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
      renderCheatSheets();
    });
  }

  if (cheatSearchInput) {
    cheatSearchInput.addEventListener("input", (e) => {
      cheatSearchQuery = e.target.value.trim();
      renderCheatSheets();
    });
  }

  renderCheatSheets();
}

