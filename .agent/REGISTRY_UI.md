# UI Registry — Entry Points & Components

> Lists all UI entry points and component locations.  
> **Update when adding new UI components.**

---

## Entry Points

| Entry      | Location           | Status     | Description                |
| ---------- | ------------------ | ---------- | -------------------------- |
| App Root   | `src/ui/App.tsx`   | 🔲 Planned | Main app component         |
| HTML Entry | `index.html`       | 🔲 Planned | Vite HTML entry point      |
| CSS Entry  | `src/ui/index.css` | 🔲 Planned | Global styles (dark theme) |

---

## Components (Planned)

| Component           | Location                           | Status     | Description                   |
| ------------------- | ---------------------------------- | ---------- | ----------------------------- |
| Lead Input (Single) | `src/ui/components/LeadInput.tsx`  | 🔲 Planned | Single lead entry form        |
| Lead Input (Batch)  | `src/ui/components/BatchInput.tsx` | 🔲 Planned | Batch/table lead entry        |
| Lead Input (Text)   | `src/ui/components/TextInput.tsx`  | 🔲 Planned | Messy text paste area         |
| Score Card          | `src/ui/components/ScoreCard.tsx`  | 🔲 Planned | Individual lead score display |
| Score List          | `src/ui/components/ScoreList.tsx`  | 🔲 Planned | Batch results display         |
| Nav Bar             | `src/ui/components/NavBar.tsx`     | 🔲 Planned | Navigation (mobile-first)     |

---

## Design Rules

- **Mobile-first**: Design for phones first, scale up
- **Dark theme only**: No light mode
- **Vanilla CSS**: No Tailwind unless explicitly requested
- **Glass effects**: Must not reduce readability
- **Micro-animations**: Required for premium feel
