import { Routes, Route } from "react-router-dom";
import { AppShell } from "./ui/layout/AppShell";
import { HomePage } from "./ui/pages/HomePage";
import { LeadInputPage } from "./ui/pages/LeadInputPage";
import { ResultsPage } from "./ui/pages/ResultsPage";
import { ProfilePage } from "./ui/pages/ProfilePage";
import { HistoryPage } from "./ui/pages/HistoryPage";
import { RunDetailPage } from "./ui/pages/RunDetailPage";

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/score" element={<LeadInputPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/run/:id" element={<RunDetailPage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
