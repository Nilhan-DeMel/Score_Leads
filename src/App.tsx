import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { AppShell } from "./ui/layout/AppShell";
import { HomePage } from "./ui/pages/HomePage";
import { LeadInputPage } from "./ui/pages/LeadInputPage";
import { ResultsPage } from "./ui/pages/ResultsPage";
import { ProfilePage } from "./ui/pages/ProfilePage";

export default function App() {
  const location = useLocation();

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/input" element={<LeadInputPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  );
}
