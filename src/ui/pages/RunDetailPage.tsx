import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRun } from "../../core/runs/storage/getRun";
import { ResultsPage } from "./ResultsPage";
import type { Run } from "../../core/runs/types";

export function RunDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [run, setRun] = useState<Run | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getRun(id).then((data) => {
        setRun(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading)
    return (
      <div className="page flex items-center justify-center">
        Loading run...
      </div>
    );
  if (!run)
    return (
      <div className="page flex flex-col items-center justify-center gap-4">
        <p>Run not found</p>
        <button className="btn-secondary" onClick={() => navigate("/history")}>
          Back to History
        </button>
      </div>
    );

  // We "proxy" to ResultsPage but pass the run data via props or state mock
  // For v1, we'll just render ResultsPage component but pass the data differently
  return (
    <ResultsPage
      mockData={{
        leads: run.leads.map((l) => ({ ...l.lead, score: l.score })),
        run,
      }}
    />
  );
}
