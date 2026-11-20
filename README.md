# Yash's College Hub & Portfolio
**Department of Information Technology (IT) • DY Patil College of Engineering, Akurdi**

A modern, responsive, and feature-rich portfolio and student companion web app with subject-wise PDF notes shelves, a Pomodoro study focus timer, engineering formula cheat sheets, college attendance tracking, SPPU CGPA calculation, and an owner-controlled social media profile manager.

---

## ✨ Features

1. **🔗 Owner-Controlled Social Media Manager (Instagram, LinkedIn, GitHub, Email)**:
   - **Owner-Only Customization:** Only the authenticated website owner (using the Owner Login passcode) can edit or configure the profile links.
   - **Supports Multiple Platforms:**
     - 📸 **Instagram:** Handle (`@username`) or direct URL.
     - 💼 **LinkedIn:** Full profile URL or username.
     - 🐙 **GitHub:** Repository profile link or username.
     - ✉️ **Contact Email:** Address for the "Email Me" button.
   - **Smart URL Normalizer:** Type `@your_handle` or just your username and the system automatically converts it into a full clickable link (`https://instagram.com/your_handle`).
   - Regular visitors see your active, branded buttons with smooth hover effects.

2. **🍅 Pomodoro Study Timer & Engineering Formula Cheat Sheets**:
   - **Focus Timer**: 25m Focus, 5m Short Break, and 15m Long Break intervals with an animated circular progress ring.
   - **Synthesized Melodic Chime**: Offline Web Audio API bell alert when the timer ends.
   - **Session Goal Tracking**: Select the subject you are studying (e.g. *Python, Physics, Maths*) and set your goal.
   - **Formula & Syntax Cheat Sheets**:
     - 📐 **Maths-I**: Rank of matrix, system of equations ($AX=B$), Cayley-Hamilton theorem, eigenvalues, Euler's theorem, and maxima/minima.
     - ⚛️ **Physics**: He-Ne laser parameters, Einstein coefficients, thin-film interference, Newton's rings, de Broglie wavelength, and uncertainty principle.
     - 🐍 **Python**: List/dict comprehensions, slicing tricks, lambda/filter/map, safe file I/O, and OOP class templates.
     - ⚡ **BEE**: KVL/KCL, Thevenin theorem, maximum power transfer, R-L-C AC resonance, and transformer formulas.
   - Instant live search and 1-click **Copy Formula** buttons.

3. **Subject-Wise PDF Notes Shelves & Curated Library**:
   - Each college subject has its own dedicated shelf section:
     - ⚛️ **Engineering Physics**
     - 🐍 **Programming with Python**
     - 📐 **Engineering Mathematics-I**
     - ⚡ **Basic Electrical & Electronics (BEE)**
     - ⚙️ **Systems in Mechanical Engg (SME)**
     - 💻 **Web Development & AI**
     - 🧪 **Lab Manuals & Practical Records**
   - In-page **PDF Viewer Modal** for fast preview without leaving the site.
   - Jump directly to any subject using the top filter pills, or filter by document type (Notes, Assignments, Lab Manuals, PYQs).

4. **Easy Owner PDF Adder System (Protected & Separate)**:
   - **Discreet Owner Mode:** Click **"Owner Login"** (Passcode: `yash123`) to unlock management controls.
   - **Dedicated `+ Add PDF to this Section` button** on every subject shelf.
   - **One-Click File Picker:** Pick any PDF from your computer; title and path auto-fill.
   - **Add New Subject Sections:** Easily create new shelves for electives or future semesters.
   - **Export for `app.js`:** 1-click button to copy the updated JavaScript data array for permanent GitHub/Vercel deployment.
   - Public visitors only see clean, read-only PDF shelves with preview & download.

5. **College Attendance Tracker**:
   - Subject-wise attendance tracking (Classes attended vs. held).
   - Radial gauge and overall status indicator.
   - **Smart Bunk & Shortage Advisory:** Instantly calculates how many classes you can safely miss while staying above 75%, or how many consecutive classes you must attend to overcome a shortage.
   - Quick `+ Present`, `+ Absent`, and `Undo` buttons.
   - Saves progress automatically in your browser's local storage.

6. **SGPA & Cumulative CGPA Calculator**:
   - **Semester SGPA**: Credit-weighted calculation using SPPU grading ($O: 10, A+: 9, A: 8, B+: 7, B: 6, C: 5, P: 4, F: 0$).
   - Real-time percentage conversion: $\text{Percentage} = (\text{SGPA} - 0.75) \times 10$.
   - **Cumulative CGPA (Multi-Sem)**: Weighted average across multiple semesters.

7. **Personal Portfolio & Speed Benchmarks**:
   - Verified **MonkeyType Benchmark**: 32 WPM, 86% Accuracy, 35 Raw WPM, 68% Consistency.

---

## 🔒 How to Edit Your Social Links (Owner Only)

1. Open **`index.html`** in your browser.
2. Scroll to the **College Notes** section and click **"Owner Login"** on the right (Passcode: `yash123`).
3. You can edit your social profiles in two ways:
   * Click **"Edit Social Links"** in the green Owner Toolbar.
   * Or look at the top hero section: an inline **"✏️ Edit Links"** button is now visible next to your profile buttons.
4. Enter your Instagram handle (e.g. `@your_insta`), LinkedIn URL, GitHub username, and Email.
5. Click **"Save Social Links"** — they update instantly across the entire website!

---

## 🌐 How to Publish Online for FREE

### Option 1: GitHub Pages (Recommended)
1. Go to [GitHub.com](https://github.com) and create a repository named `college-hub`.
2. Push or upload `index.html`, `style.css`, `app.js`, and the `files/` folder.
3. Go to **Settings** > **Pages** > Select `main` branch and click **Save**.
4. Your site will be live at `https://<your-username>.github.io/college-hub/`!

### Option 2: Vercel
1. Go to [Vercel.com](https://vercel.com) and drag-and-drop the `college-hub` folder.
2. Click **Deploy** for an instant custom URL.
