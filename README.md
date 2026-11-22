# Yash's Futuristic Student Portfolio & College Hub ⚡
**Department of Information Technology (IT) • DY Patil College of Engineering, Akurdi**

A bold, cyber-themed student portfolio and academic operating system with a dark futuristic aesthetic, neon accents (electric cyan, hot pink, and lime), glassmorphism cards, interactive background particles, animated custom cursor, and comprehensive academic tools.

---

## 🚀 Sections Overview

0. **🎙️ Sci-Fi JARVIS / Cyber AI Voice HUD (Zero External APIs)**:
   - **Interactive Cyberpunk Voice HUD:** Floating glowing holographic orb in the bottom-right corner with multi-layered rotating radar rings and animated sound wave ripples.
   - **Zero External APIs:** Built 100% with the browser's native Web Speech API (`SpeechRecognition` & `SpeechSynthesis`) and offline Web Audio synthesizer. No paid API keys or external servers required.
   - **Voice Commands Supported:**
     - 🎯 *"Hey Yash, calculate attendance"* → Smoothly auto-scrolls to the Attendance Tracker, triggers live recalculation, and highlights the Bunk Advisor with an animated cyber HUD target reticle.
     - 📘 *"Open Python notes"* → Pops up the authentic Python Lab Manual (`files/Python_Programming_Lab_Manual.pdf`) in the holographic in-page PDF reader modal.
     - ⚡ *"Engage focus mode"* → Auto-scrolls to the Study Hub, triggers the 25-minute Pomodoro timer countdown, and fires up the synthesized 40Hz Gamma Focus Audio engine.
     - 👤 *"Who made this?"* → Answers with a synthetic sci-fi AI voice: *"Designed and engineered by Yash, IT Department, DY Patil Akurdi."*
   - **Microphone & Click Protocols:** Includes 1-click fallback chips in the HUD console so all protocols run instantly in any environment or browser.
   - **Pure Web Audio Sound Effects:** Synthesized sci-fi activation chirp, protocol execution chime, and focus warp sound.
   - **Keyboard Shortcut:** `Alt + J` or `Alt + V` toggles JARVIS HUD instantly.

1. **👨‍💻 Portfolio (Hero, About Me, Skills, Projects, Contact)**:
   - **Animated Cyber Typewriter:** Dynamic title cycling ("Hi, I'm Yash · Student · Developer", "First Year IT @ DY Patil Akurdi", etc.).
   - **Hologram Profile Visual:** Interactive 3D tilt card with live stats (Total Notes, Attendance %, Current SGPA, and verified MonkeyType 32 WPM benchmark).
   - **Interactive Terminal Bio:** Bash terminal shell (`cat bio.txt`, `./check_interests.sh`) documenting IT coursework, languages, and benchmarks.
   - **Core Skills Arsenal:** Animated neon progress bars (Python 75%, Web Dev 70%, AI Workflows 65%, Engineering 80%) plus glowing technology chips.
   - **Project Grid with Hover Previews:** Cards for College Hub OS, Smart Attendance & Bunk Advisor, Engineering Focus Timer, and Python Practical Repository with live demo and GitHub buttons.
   - **Connect & Social Profiles:** Dynamic links with owner-controlled profile editor.

2. **🧮 SGPA & Cumulative CGPA Calculator**:
   - **Semester 1 SGPA Table:** Real-time credit-weighted calculation using SPPU grading scale ($O: 10, A+: 9, A: 8, B+: 7, B: 6, C: 5, P: 4, F: 0$).
   - **Animated Result Counter:** Numbers smoothly count up into position.
   - **Color-Coded Badges:** Distinction (Neon Lime), First Class (Cyan), Higher Second (Amber), Pass (Slate), and ATKT Alert (Hot Pink).
   - **Instant Percentage Conversion:** $\text{Percentage} = (\text{SGPA} - 0.75) \times 10$.
   - **Cumulative CGPA (Multi-Sem):** Weighted grade point accumulation across degree semesters.
   - **Auto-Persisted:** Saved automatically in `localStorage`.

3. **📊 College Attendance Tracker & Bunk Advisor**:
   - **Circular SVG Progress Ring:** Smooth animated stroke showing overall academic percentage.
   - **Threshold Warning:** Visual alerts if below the university 75% threshold.
   - **Smart Mathematical Bunk Advisory:**
     - Safe: Shows exact number of classes you can safely miss while remaining $\ge 75\%$.
     - Shortage: Shows exact number of consecutive classes required to recover to $75\%$.
   - **Quick Actions:** `+ Present`, `+ Absent`, and `Undo` (decrement).
   - **Add / Remove Subjects:** Full management with data saved to `localStorage`.

4. **📚 Subject-Wise College Notes & PDF Shelf (11 Authentic PDFs Included)**:
   - Shelves for **Engineering Physics**, **Programming with Python**, **Maths-I**, **BEE**, **SME**, **Web Dev**, and **Lab Manuals**.
   - Includes 11 authentic academic lecture note PDFs and manuals downloaded directly from university repositories into `files/`:
     - **Engineering Mathematics-I:** `Maths1_Matrices_Calculus_Notes.pdf` (Matrices, rank, linear systems, eigenvalues, Taylor series, Euler's theorem).
     - **Engineering Physics:** `Engineering_Physics_Comprehensive_Notes.pdf`, `HeNe_Laser_Notes.pdf`, and `Laser_Lecture1_Revision.pdf`.
     - **Basic Electrical Engineering:** `BEE_Circuits_and_Theorems_Notes.pdf` (KVL, KCL, Thevenin, Norton, single-phase transformers).
     - **Systems in Mechanical Engg:** `SME_Thermodynamics_Notes.pdf` (Laws of thermodynamics, Otto/Diesel cycles, 2/4-stroke IC engines).
     - **Programming with Python:** `The Ultimate Python Handbook.pdf` (51MB complete handbook) and `Python_Programming_Lab_Manual.pdf`.
     - **Web Technologies:** `Web_Technologies_Complete_Notes.pdf` (HTML5 semantic markup, CSS3 Grid/Flexbox, ES6+ JS).
   - In-page **PDF Viewer Modal**: Click "View PDF" on any card to read directly on-page, or open in a new tab.
   - Filter pills by Subject and Material Type (Notes, Assignments, Lab Manuals, PYQs) with live instant search.
   - **Owner Mode (`Passcode: yash123`):** Add new PDFs, create subject shelves, edit social links, and export data.

5. **🧪 Labs & Practical Hub (With Direct PDF Manual Previews)**:
   - Dedicated practical cards with experiment title, course name, date, and notes.
   - **1-Click In-Page PDF Manual Preview:** Each lab card features a **"View PDF"** button connecting directly to the corresponding lab manual:
     - `Python_Programming_Lab_Manual.pdf` for Python coding experiments.
     - `Physics_Lab_Manual_Experiments.pdf` for Newton's rings & He-Ne laser wavelength experiments.
     - `Basic_Electrical_Lab_Manual.pdf` for Thevenin's theorem & transformer tests.
     - `SME_Thermodynamics_Notes.pdf` for IC engine cut-section practicals.
   - **Interactive Status Toggle:** 1-click toggle between **Done** (Neon Lime) and **Pending** (Hot Pink).
   - **Filter Pills:** Filter by All Labs, Completed (Done), or Pending.
   - Add new lab practicals and link submission repositories or PDF records.

6. **⚡ Live 30-Second Cyber Typing Battle Arena**:
   - Challenge visitors to beat Yash's verified MonkeyType record (32 WPM)!
   - Real-time countdown timer, dynamic WPM calculation, and accuracy percentage tracking.
   - Interactive character highlight (green for correct, red with shake for mistakes).
   - Instant cyber rank badge generation: Cyber Legend (60+ WPM), Code Ninja (45+ WPM), Yash Slayer (>32 WPM), or Terminal Apprentice.

7. **🍅 Study Hub & Engineering Formula Vault**:
   - **Pomodoro Timer:** 25m Focus, 5m Short Break, and 15m Long Break intervals with SVG progress circle.
   - **Melodic Synth Chime:** Offline Web Audio API bell alert when interval finishes.
   - **Formula & Syntax Cheat Sheets:** Quick reference for Maths-I, Physics, Python, and BEE with 1-click copy buttons.

8. **🎧 Offline Binaural & Focus Audio Engine (Web Audio API)**:
   - 100% offline procedural ambient audio generator — zero external audio files or MP3 downloads needed.
   - **40Hz Gamma Focus Wave:** Binaural beat (200Hz carrier + 240Hz right ear) for hyper-focus and memory retention.
   - **Cyber Rain:** Filtered procedural noise generator simulating steady rain on glass.
   - **Deep Brown Noise:** Low-pass acoustic masking for blocking background distractions.
   - **Cosmic Synth Drone:** Dual detuned oscillators with harmonic resonance.
   - Master volume slider and interactive animated sound equalizer bars.

9. **🎬 CyberReel AI Studio (100% Free 9:16 Video Generator)**:
   - Accessible via [`reel_studio.html`](reel_studio.html).
   - Generates automated viral Instagram Reels/TikToks with zero Canva Pro subscription needed!
   - Loaded with all 30 storytelling scripts from `reels_30_viral_scripts.csv`.
   - Real-time 1080x1920 mobile canvas rendering with kinetic captions (Hormozi/MrBeast style word highlights).
   - Dynamic animated backgrounds (Matrix Code Rain, Cyber Grid, Deep Galaxy, Dark Horizon).
   - Built-in speech synthesis engine with natural voice and speed tuning.
   - 1-click **Record & Download Reel (.webm/.mp4)** using native browser `MediaRecorder`.

---

## 🎨 How to Customize

All files use plain HTML, CSS, and JavaScript with **zero build tools** required.

### 1. Dynamic Multi-Theme Switcher (5 Curated Themes)
The site includes an on-the-fly **Theme Palette Switcher** in the top navbar and mobile drawer with smooth View Transitions API / circle wipe animation:
1. ⚡ **Cyber Neon:** Original sci-fi dark neon with cyan `#00f3ff`, pink `#ff007f`, lime `#39ff14`, and Orbitron typography.
2. 🌑 **Obsidian Tech:** Linear / Vercel modern developer aesthetic with deep obsidian `#090a0f`, electric indigo `#6366f1`, emerald `#10b981`, and Inter typography.
3. 🧊 **Nordic Frost:** Arctic icy aesthetic with glacial blue `#38bdf8`, mint aquamarine `#2dd4bf`, and deep arctic navy `#070e1c`.
4. 🏛️ **Ivy Academic:** Prestigious university library aesthetic with deep forest green `#05130d`, antique gold `#d4af37`, and Cinzel editorial serif typography.
5. ☀️ **Clean Light:** Crisp high-contrast daylight mode with royal blue `#0284c7`, rose `#e11d48`, and clean slate background `#f8fafc`.

*Voice Command Support:* You can also say *"Switch theme to Obsidian"* or *"Change theme to Nordic Frost"* directly into the JARVIS HUD!

### 2. Customize Name, College, and Typing Phrases
Open **`script.js`** and modify the `PORTFOLIO_CONFIG` block at lines 12–30:
```javascript
const PORTFOLIO_CONFIG = {
  name: "Yash",
  role: "Student · Developer",
  college: "DY Patil College of Engineering, Akurdi",
  department: "Department of Information Technology (IT) • 1st Year",
  email: "yash@example.com",
  
  // Hero Typing Animation Phrases (Add or edit phrases here)
  typingPhrases: [
    "Hi, I'm Yash · Student · Developer",
    "First Year IT @ DY Patil Akurdi",
    "Python Enthusiast & Web Developer",
    "Building Cool Student Tech & AI Tools"
  ],

  // Passcode for Owner Mode
  ownerPasscode: "yash123"
};
```

### 3. Customize Projects
In **`index.html`**, scroll to `<div class="projects-grid" id="projectsGrid">` (around line 240) to edit project titles, descriptions, tags, and GitHub links.

---

## 🌐 How to Run & Deploy

1. **Run Locally:** Simply double-click **`index.html`** or open it in any modern browser (Chrome, Edge, Firefox, Safari).
2. **Deploy on GitHub Pages for Free:**
   - Create a repository named `college-hub` on [GitHub](https://github.com).
   - Push `index.html`, `style.css`, `script.js`, and the `files/` folder.
   - In repository settings: **Settings > Pages > Branch: main > Save**.
   - Your website will be live at `https://<your-username>.github.io/college-hub/`.
