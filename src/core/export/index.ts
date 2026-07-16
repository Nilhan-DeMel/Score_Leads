import Papa from "papaparse";
import { logger } from "../logging/logger";

/**
 * Exports data to a CSV file.
 */
export function exportToCsv(
  data: Array<Record<string, unknown>>,
  filename: string,
): void {
  try {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    logger.info("Export", "csv_export_success", {
      filename,
      rowCount: data.length,
    });
  } catch (err) {
    logger.error("Export", "csv_export_failed", { err });
  }
}

/**
 * Exports data to a JSON file.
 */
export function exportToJson(data: unknown, filename: string): void {
  try {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    logger.info("Export", "json_export_success", { filename });
  } catch (err) {
    logger.error("Export", "json_export_failed", { err });
  }
}
