# 🏋️‍♂️ Training Load Tracker

A lightweight React + TypeScript application for tracking training sessions and monitoring weekly training load. The app helps users understand **individual session intensity** as well as **overall weekly load**, providing clear visual feedback to avoid under‑ or over‑training.

  <br />
    <p>
      🔗 <strong>Live Demo:</strong> <a href="https://training-load-tracker.vercel.app">Click here to view the app live!</a>
    </p>
  <br />

---

## ✨ Features

- 📅 **Add Training Sessions**

  - Date
  - Type (Run, Strength, Swim)
  - Duration (minutes)
  - Intensity (1–5)

- 📊 **Weekly Load Overview**

  - Automatically calculates total weekly load
  - Displays a clear status badge (Optimal / Moderate / High)
  - Provides recovery guidance based on load

- 🧾 **Recent Sessions List**

  - Shows individual sessions with:

    - Activity emoji
    - Capitalized session type
    - Day of the week (Monday, Tuesday, etc.)
    - Per‑session load
    - Per‑session status badge

- 💾 **Persistent Storage**

  - Sessions are stored in `localStorage`
  - Reloading the page keeps your data

---

## 🧠 Core Concepts

### Session Load

Each training session has its **own load**, calculated from:

```
load = durationMinutes × intensity
```

Session load is used to determine **session-specific status**:

| Load   | Status            |
| ------ | ----------------- |
| < 80   | Optimal (Green)   |
| 80–149 | Moderate (Orange) |
| ≥ 150  | High (Red)        |

### Weekly Load

Weekly load is the **sum of all session loads** in the current week.

Weekly load determines:

- The main status badge
- Recovery guidance text

> ⚠️ Weekly status is **never reused** for individual sessions.

---

## 🧱 Architecture Overview

```
src/
├─ features/
│  └─ sessions/
│     ├─ components/
│     │  ├─ AddSessionCard.tsx
│     │  ├─ RecentSessionsCard.tsx
│     │  └─ WeeklyLoadCard.tsx
│     ├─ hooks/
│     │  ├─ useSessions.ts
│     │  └─ useWeeklyLoad.ts
│     └─ utils/
│        ├─ calculateLoad.ts
│     │  └─ getSessionStatus.ts
│
├─ ui/
│  ├─ layout/
│  ├─ surfaces/
│  ├─ styles/
│  ├─ StatusGuidance.tsx
│  └─ StatusBadge.tsx
│
├─ types/
│  └─ session.ts
└─ App.tsx
```

---

## 🎨 Status Badges

The project intentionally supports **two badge contexts** using a single component:

- **Weekly status badge** (large, prominent)
- **Session status badge** (compact, list‑friendly)

This avoids duplicated components while keeping UX clear and consistent.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Inline‑style design system** (custom Stack, Card, Inline components)
- **LocalStorage** for persistence

---

## 📈 Future Improvements

- Week selector (previous / next weeks)
- Editable & deletable sessions
- Charts for load trends
- Rest day detection
- Unit tests for load calculations

---

## 🧑‍💻 Philosophy

This project is built with:

- Clear separation of concerns
- Predictable state flow
- Explicit load logic (no hidden coupling)

> **Individual sessions describe effort.** > **Weekly load describes accumulated stress.**

Keeping these separate is the foundation of the app.

---

Happy training 💪
