<div align="center">
  <img src="https://campus-club-cms.vercel.app/pwa-512x512.png" alt="CAMS Logo" width="120" />
</div>

<h1 align="center">CAMS ⚡ Campus Activity Management System</h1>

<p align="center">
  <strong>The Next-Gen OS for Student Organizations</strong><br>
  A powerful, beautiful, and complete neo-brutalist platform to manage college clubs, automate events, and boost student engagement.
</p>

<p align="center">
  <a href="https://campus-club-cms.vercel.app/"><strong>View Live Demo</strong></a> ·
  <a href="#features"><strong>Explore Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a>
</p>

<br>

<img src="./public/banner.png" alt="CAMS Platform Overview" width="100%" />

---

## ✨ Features That Pop

CAMS breaks free from boring, corporate spreadsheets and gives students a vibrant, gamified, and highly interactive Neo-Pop interface to run their campus life.

### 🎫 Interactive Event E-Tags
Say goodbye to paper tickets. CAMS generates beautiful, flip-card style 3D **E-Tags** with QR codes that live in your pocket. Scan members at the door with zero friction.

### 🛡️ Next-Gen Student E-ID
Your fully verifiable digital identity. Featuring animated biometric themes, role-based access tokens, and a tamper-proof digital signature.

### 🏆 Gamified Experience (XP & Levels)
Climb the campus leaderboard. Students earn XP for attending events, hosting workshops, and completing daily quests. Watch your club’s ranking rise in real-time.

### 🤖 AI-Powered Copilot
Need an event idea? The AI Copilot suggests tailored event concepts, estimates budgets, and generates descriptions based on your club's focus.

### 🌐 15+ Built-In Micro-Apps
Everything you need, directly in the `CAMS OS`:
- **The Treasury**: Visual budget tracker & expense manager.
- **Gear Vault**: Visual inventory tracking for club assets.
- **Venue Booker 3000**: Spin the campus map & book rooms.
- **Auto-Cert**: Generate dynamic participation certificates.
- **Club Wars**: Compare analytics in a fighting-game style VS screen.
- And [10 more advanced apps](./FEATURES.md) built right in!

---

## 🛠️ Technology Stack

Built with cutting-edge tools to ensure blazing-fast performance, beautiful animations, and seamless developer experience.

* **Frontend:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS (with highly custom Neo-Brutalist & Dark Mode utilities)
* **Animations:** Framer Motion, React Three Fiber (for 3D elements)
* **Icons:** Lucide React
* **Charts:** Recharts
* **PWA:** Vite PWA Plugin for offline & mobile installation
* **Database / Auth:** Supabase (Ready for backend integration)

---

## 🚀 Getting Started

Want to run CAMS locally? Follow these steps to spin up your own development server.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/Campus-Club-cms.git
cd Campus-Club-cms
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory based on `.env.example`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
*(Note: The app will run smoothly with placeholder keys for UI demonstration purposes).*

### 4. Start the Development Server
```bash
npm run dev
```
Open **http://localhost:5173** in your browser.

---

## 🎨 Theme & UI Architecture

CAMS employs a completely custom **Neo-Brutalist** design system combined with a sleek Dark Mode.

* **Colors**: High-contrast, vibrant primary colors (Pop-Pink, Pop-Yellow, Pop-Cyan) balanced with deep, rich dark tones (`#071021`).
* **Components**: Thick borders (`border-4`), hard drop shadows (`shadow-[8px_8px_0_#000]`), and uppercase heavy typography.
* **Responsive**: Fully optimized for mobile screens, tablets, and ultra-wide desktop monitors.

---

## 🤝 Contributing

We welcome contributions! Whether you want to fix a bug, add a new micro-app to the ecosystem, or improve the documentation.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

<br>
<p align="center">Made with ❤️ for Students Worldwide.</p>
