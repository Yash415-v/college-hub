// ================================================================
// Yash's College Materials Data (DY Patil College of Engineering, Akurdi)
// First Year - Information Technology (IT)
// ================================================================

const defaultCollegeMaterials = [
  {
    id: 1,
    title: "Engineering Physics - He-Ne Laser Notes",
    subject: "Physics",
    type: "Notes",
    description: "Detailed study notes on Helium-Neon (He-Ne) Laser: principle, energy level diagram, working, and applications.",
    semester: "Semester 1",
    link: "files/HeNe_Laser_Notes.pdf", // Your newly uploaded PDF file!
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
    title: "Python Lab Assignment 1 - Number Patterns & Loops",
    subject: "Python",
    type: "Assignment",
    description: "Lab problems: Prime numbers, Fibonacci series, and pyramid patterns with clean comments.",
    semester: "Semester 1",
    link: "https://drive.google.com",
    date: "Nov 2026"
  },
  {
    id: 4,
    title: "Engineering Mathematics-I - Matrices & Partial Differentiation",
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
    description: "Source code submission for personal portfolio and student hub with AI learning tracker.",
    semester: "Semester 1",
    link: "#",
    date: "Nov 2026"
  }
];

// Load materials (from localStorage if any custom added, else default)
function getSavedMaterials() {
  const local = localStorage.getItem("yash_college_materials");
  if (local) {
    try {
      const parsed = JSON.parse(local);
      return parsed;
    } catch (e) {
      console.error("Error reading localStorage", e);
    }
  }
  return [...defaultCollegeMaterials];
}

let collegeMaterials = getSavedMaterials();

// DOM Elements
const notesGrid = document.getElementById("notesGrid");
const searchInput = document.getElementById("searchInput");
const filterPills = document.getElementById("filterPills");
const totalNotesCount = document.getElementById("totalNotesCount");

// Modal Elements
const noteModal = document.getElementById("noteModal");
const openAddModalBtn = document.getElementById("openAddModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const addNoteForm = document.getElementById("addNoteForm");

let activeFilter = "all";
let searchQuery = "";

// Initialize
function init() {
  updateCount();
  renderNotes();
  setupEventListeners();
}

function updateCount() {
  if (totalNotesCount) {
    totalNotesCount.textContent = collegeMaterials.length;
  }
}

// Render Cards
function renderNotes() {
  const filtered = collegeMaterials.filter(item => {
    const matchesFilter = (activeFilter === "all") || (item.type.toLowerCase() === activeFilter.toLowerCase());
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    notesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #94a3b8;">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <p>No materials found matching "<strong>${escapeHtml(searchQuery)}</strong>".</p>
      </div>
    `;
    return;
  }

  notesGrid.innerHTML = filtered.map(item => `
    <div class="note-card">
      <div>
        <div class="note-top">
          <span class="badge-subject">${escapeHtml(item.subject)} • ${escapeHtml(item.semester || 'Semester 1')}</span>
          <span class="badge-type ${item.type.toLowerCase()}">${escapeHtml(item.type)}</span>
        </div>
        <h3 class="note-title">${escapeHtml(item.title)}</h3>
        <p class="note-desc">${escapeHtml(item.description)}</p>
      </div>
      <div>
        <div class="note-meta">
          <i class="fa-regular fa-calendar"></i> Added ${escapeHtml(item.date)}
        </div>
        <a href="${item.link}" target="_blank" class="note-action">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Open / Download
        </a>
      </div>
    </div>
  `).join("");
}

// Utility to escape HTML and prevent injection
function escapeHtml(str) {
  if (!str) return "";
  return str.toString().replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Event Listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderNotes();
  });

  // Filter Buttons
  filterPills.addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-btn")) return;
    
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    
    activeFilter = e.target.dataset.filter;
    renderNotes();
  });

  // Modal Open/Close
  if (openAddModalBtn) {
    openAddModalBtn.addEventListener("click", () => {
      noteModal.classList.add("active");
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      noteModal.classList.remove("active");
    });
  }

  // Close modal when clicking on dark backdrop
  window.addEventListener("click", (e) => {
    if (e.target === noteModal) {
      noteModal.classList.remove("active");
    }
  });

  // Handle Form Submit
  if (addNoteForm) {
    addNoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newNote = {
        id: Date.now(),
        title: document.getElementById("formTitle").value.trim(),
        subject: document.getElementById("formSubject").value.trim(),
        type: document.getElementById("formType").value,
        description: document.getElementById("formDesc").value.trim() || "Course notes and study reference material.",
        semester: "Semester 1",
        link: document.getElementById("formLink").value.trim(),
        date: "Nov 2026"
      };

      // Add to top of list
      collegeMaterials.unshift(newNote);
      localStorage.setItem("yash_college_materials", JSON.stringify(collegeMaterials));
      
      updateCount();
      renderNotes();
      
      // Reset & close
      addNoteForm.reset();
      noteModal.classList.remove("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
