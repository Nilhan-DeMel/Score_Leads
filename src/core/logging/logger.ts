/** Score_Leads — Structured Logger (Frontend)
 *
 * Micro-module: provides structured JSON logging for frontend events.
 * Fields: run_id, view, action, ts, level, data
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogEntry {
  run_id: string;
  view: string;
  action: string;
  ts: string;
  level: LogLevel;
  data?: Record<string, unknown>;
}

// Generate a unique run ID per browser session
const RUN_ID = crypto.randomUUID?.() ?? `run-${Date.now()}`;

function emit(entry: LogEntry) {
  const line = JSON.stringify(entry);
  switch (entry.level) {
    case "error":
      console.error(line);
      break;
    case "warn":
      console.warn(line);
      break;
    case "debug":
      console.debug(line);
      break;
    default:
      console.log(line);
  }
}

function createEntry(
  level: LogLevel,
  view: string,
  action: string,
  data?: Record<string, unknown>,
): LogEntry {
  return {
    run_id: RUN_ID,
    view,
    action,
    ts: new Date().toISOString(),
    level,
    ...(data ? { data } : {}),
  };
}

export const logger = {
  debug: (view: string, action: string, data?: Record<string, unknown>) =>
    emit(createEntry("debug", view, action, data)),

  info: (view: string, action: string, data?: Record<string, unknown>) =>
    emit(createEntry("info", view, action, data)),

  warn: (view: string, action: string, data?: Record<string, unknown>) =>
    emit(createEntry("warn", view, action, data)),

  error: (view: string, action: string, data?: Record<string, unknown>) =>
    emit(createEntry("error", view, action, data)),

  /** Get the current run ID */
  getRunId: () => RUN_ID,
};
