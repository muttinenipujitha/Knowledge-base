# Worcspace – Knowledge Base UI

A pixel-accurate React implementation of the Knowledge Base screen from the Worcspace Figma design assignment.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Installation & Run

```bash


# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in your browser
# http://localhost:5173
```

### Other Scripts

```bash
npm run build    # Production build → /dist
npm run preview  # Preview the production build locally
```

---

## 📁 Project Structure

```
knowledge-base/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx               # App entry point
    ├── App.jsx                # Root component – state & layout
    ├── index.css              # Tailwind directives + global styles
    └── components/
        ├── Icon.jsx           # Reusable inline SVG icon system
        ├── TopBar.jsx         # Top navigation bar
        ├── Sidebar.jsx        # Left navigation sidebar
        ├── KnowledgeCard.jsx  # Individual knowledge base card
        ├── CreateModal.jsx    # Slide-in drawer for creating a new KB
        └── Pagination.jsx     # Bottom pagination bar
```

---

## ✅ Requirements Checklist

### 🔹 UI Implementation
| Requirement | Status |
|---|---|
| Replicate Screen 1 – Knowledge Base home | ✅ Done |
| Replicate Screen 2 – Create New popup | ✅ Done |
| Primary color `#4F46E5` applied | ✅ Done |
| Secondary color `#1E1B4B` applied (top bar) | ✅ Done |
| Proper spacing, typography, alignment | ✅ Done |
| `Create New` button is clickable and opens modal | ✅ Done |
| Remaining sidebar/menu buttons are static | ✅ Done |

### 🔹 Component-Based Architecture
| Component | Responsibility |
|---|---|
| `TopBar` | Global nav, search, workspace selector, avatar |
| `Sidebar` | Section-grouped nav with active state |
| `KnowledgeCard` | Card UI with 3-dot context menu |
| `CreateModal` | Slide-in drawer with controlled form |
| `Pagination` | Row count + page navigation |
| `Icon` | Single reusable SVG icon component |

### 🔹 Code Quality
| Practice | Status |
|---|---|
| Functional components + hooks only | ✅ Done |
| Clean separation of concerns | ✅ Done |
| Consistent naming conventions | ✅ Done |
| Reusable `Icon` component (no icon library dependency) | ✅ Done |
| Props-driven, stateless child components | ✅ Done |

### 🔹 Tech Stack
| Tool | Version |
|---|---|
| React | 18.3.1 |
| Vite | 5.4.10 |
| Tailwind CSS | 3.4.14 |
| PostCSS + Autoprefixer | Latest |

---

## ✨ Features Implemented

- **Live search** – filters cards by title and description in real time
- **Create New modal** – slide-in drawer with form validation (Name is required)
- **Card instantly appears** in the grid after creation with today's date
- **3-dot context menu** on each card (View / Edit / Delete) with click-outside-to-close
- **Empty state** shown when search returns no results
- **Responsive grid** – 1 col on mobile, 2 on tablet, 3 on desktop
- **Smooth animation** – modal slides in from the right

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Primary | `#4F46E5` (indigo) |
| Primary Dark | `#1E1B4B` (deep navy – top bar) |
| Card border | `#E5E7EB` |
| Body text | `#1F2937` |
| Muted text | `#6B7280` |

---

## 👩‍💻 Author

**Muttineni Pujitha**  
[GitHub](#) · [LinkedIn](https://www.linkedin.com/in/pujithamuttineni/) · muttinenipujitha@gmail.com
