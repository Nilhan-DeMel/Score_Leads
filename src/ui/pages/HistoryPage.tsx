import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import { HistoryIcon, ChevronRightIcon, ResultsIcon } from "../icons/NavIcons";
import { listRuns } from "../../core/runs/storage/listRuns";
import { deleteRun } from "../../core/runs/storage/deleteRun";
import type { Run } from "../../core/runs/types";

export function HistoryPage() {
  const navigate = useNavigate();
  const [runs, setRuns] = useState<Partial<Run>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadInitialRuns = async () => {
      const data = await listRuns();
      if (!cancelled) {
        setRuns(data);
        setLoading(false);
      }
    };

    void loadInitialRuns();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm("Delete this run from history?")) {
      await deleteRun(id);
      setRuns(await listRuns());
    }
  };

  const handleOpen = (id: string) => {
    navigate(`/run/${id}`);
  };

  return (
    <PageTransition>
      <div className="page pb-24">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem} className="pt-4 pb-6">
            <h1 className="section-title mb-2">Run History</h1>
            <p className="section-subtitle">
              Browse and reopen your previous lead scoring sessions.
            </p>
          </motion.div>

          <motion.div variants={staggerItem}>
            {loading ? (
              <div className="flex justify-center p-12 opacity-50">
                Loading history...
              </div>
            ) : runs.length === 0 ? (
              <GlassPanel className="p-12 text-center">
                <HistoryIcon size={48} className="mx-auto mb-4 opacity-10" />
                <p className="text-sm text-[var(--color-text-ghost)]">
                  No history found yet.
                </p>
                <button
                  className="btn-secondary mt-4"
                  onClick={() => navigate("/score")}
                >
                  Start Scoring
                </button>
              </GlassPanel>
            ) : (
              <div className="space-y-3">
                {runs.map((run) => (
                  <motion.div
                    key={run.runId}
                    variants={staggerItem}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleOpen(run.runId!)}
                    data-testid="history-item"
                  >
                    <GlassPanel className="!p-4 flex items-center gap-4 cursor-pointer hover:border-white/20 transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--color-accent)]">
                        <ResultsIcon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold truncate">
                          {run.name}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] text-[var(--color-text-ghost)] uppercase tracking-tight">
                            {new Date(run.createdAt!).toLocaleDateString()}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-[var(--color-text-secondary)]">
                            {run.inputMeta?.leadCount} leads
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleDelete(e, run.runId!)}
                        className="p-2 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      >
                        ×
                      </button>
                      <ChevronRightIcon size={18} className="opacity-30" />
                    </GlassPanel>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
