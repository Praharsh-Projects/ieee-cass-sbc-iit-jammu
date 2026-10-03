# IEEE CASS SBC IIT Jammu — Official Chapter Website

Official, production-grade website for the **IEEE Circuits and Systems Society (IEEE CASS) Student Branch Chapter** at the **Indian Institute of Technology Jammu (IIT Jammu)**.

- **Chapter Code**: `SBC11545F`
- **Region**: `Region 10`
- **Section**: `IEEE Delhi Section`
- **Live Local URL**: **[http://localhost:3000](http://localhost:3000)**

---

## 🏛️ Website Structure (Exact 6 Primary Pages)

1. **HOME** (`#home`):
   - Hero banner with Chapter Code `SBC11545F`, Region 10, and CTAs ("Explore Events", "Meet Our Team").
   - **Section A**: About IEEE CASS (VLSI, Edge AI, Bioelectronics, Signal Processing).
   - **Section B**: About the Chapter (Charter history, Jagti campus node).
   - **Section C**: Chapter at a Glance (Animated verified stats: 30 members, 6 activities in 2025, Region 10, SBC11545F).
   - **Section D**: Featured Activities (Selected cards from 2025 report).
   - **Section E**: Leadership Preview (Faculty Advisor & Student Chairs with link to Members).
   - **Section F**: Gallery Archive Preview (Selection with link to Gallery).
   - **Section G**: Final CTA ("Be part of the IEEE CASS community at IIT Jammu.").

2. **MEMBERS** (`#members`):
   - **Section 1 (Current Leadership)**:
     - Prominent card for **Dr. Ambika Prasad Shah** (*Faculty Advisor*).
     - Student Executive Committee:
       - **Aryan Kannaujiya** (*Chair*)
       - **Shivam Bhardwaj** (*Vice Chair*, with election note from AGM)
       - **Susmita Ghanta** (*Secretary*)
       - **Hemanth Teeda** (*Webmaster*)
       - **Abhay Gupta** (*Treasurer*)
   - **Section 2 (Previous Leadership)**:
     - Visually distinct archived card for the Inaugural Chapter Formation Body (2024).
   - **Privacy Protection**: Strict compliance hiding private phone numbers and IEEE Member IDs.

3. **EVENTS** (`#events`):
   - **PAST EVENTS & UPCOMING EVENTS** visual toggle.
   - Real-time search bar across titles, speakers, and topics.
   - Filter pills by Event Type: `All`, `AGM`, `Distinguished Lecture`, `Expert Talk`, `Workshop`.
   - Year filter: `All`, `2025`, `2024`.
   - Chronological sorting toggle (`Newest First` / `Oldest First`).
   - Detailed modal preserving verbatim source text, attendance breakdown, and speaker affiliations.

4. **CONTACT** (`#contact`):
   - **Left**: Chapter contact details, Pushkar Bhawan venue, working hours, and coordinates.
   - **Right**: Modern contact form (Full Name, Email, Phone Number, Membership ID, Message) with real-time validation and backend architecture notice.
   - **Location**: IIT Jammu address with direct link to Google Maps.

5. **ABOUT US** (`#about-us`):
   - **Section 1**: About IEEE CASS (Theory, design, analog/digital, AI hardware, bioelectronics).
   - **Section 2**: About IEEE Student Branch Chapter at IIT Jammu.
   - **Section 3**: Chapter Information (`SBC11545F`, Region 10, IIT Jammu).
   - **Section 4**: Chapter at a Glance (30 members, 6 documented activities in 2025).
   - **Section 5**: Research Ecosystem & Collaboration with **IC-ResQ Lab**.

6. **GALLERY** (`#gallery`):
   - Responsive masonry/grid grouped by the 6 exact activities:
     - *AI Hardware: Architectures and Design*
     - *Next-gen VLSI Ed-tech*
     - *Idea to Impact*
     - *Reconfigurable Nanotechnologies*
     - *Cyber-Secure Biological Systems*
     - *Other chapter activities*
   - Interactive Lightbox with **Next / Previous navigation**, keyboard arrow keys (`←`, `→`), and `Esc` close.

---

## 🎨 Theme & Visual Identity

- **Colors**: Direct match to the official **IIT Jammu Logo**:
  - Primary Surface: Pure White (`#FFFFFF`) and Clean Off-White (`#F8FAFC`).
  - Signature Sky Blue: `#009FE3` / `#38BDF8`.
  - Deep Navy Typography: `#003366`.
  - Soft Sky Tints: `#F0F9FF` & `#E0F2FE`.
- **Logos & Emblems**: Official IIT Jammu emblem embedded across Header, Hero, Cards, and Footer.

---

## 💻 Running Locally

```bash
cd /Users/pullaharshith/.gemini/antigravity/scratch/ieee-cass-iit-jammu

# Start Vite Development Server
npm run dev

# Build for Production
npm run build

# Start Production Preview Server
npm run preview
```

---

## 📂 Centralized Data Files

- [`src/data/site.ts`](file:///Users/pullaharshith/.gemini/antigravity/scratch/ieee-cass-iit-jammu/src/data/site.ts): Central site metadata (code SBC11545F, Region 10, IC-ResQ Lab).
- [`src/data/events.ts`](file:///Users/pullaharshith/.gemini/antigravity/scratch/ieee-cass-iit-jammu/src/data/events.ts): Authoritative dataset for all 6 documented activities.
- [`src/data/members.ts`](file:///Users/pullaharshith/.gemini/antigravity/scratch/ieee-cass-iit-jammu/src/data/members.ts): Current and previous leadership rosters.
- [`src/data/gallery.ts`](file:///Users/pullaharshith/.gemini/antigravity/scratch/ieee-cass-iit-jammu/src/data/gallery.ts): Gallery items categorized by event groups.
- [`src/data/stats.ts`](file:///Users/pullaharshith/.gemini/antigravity/scratch/ieee-cass-iit-jammu/src/data/stats.ts): Strict verified metrics (30 members, 6 activities, Region 10, SBC11545F).
