import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import { loadProfile } from "../../core/profile/storage/loadProfile";
import { saveProfile } from "../../core/profile/storage/saveProfile";
import { resetProfile } from "../../core/profile/storage/resetProfile";
import { exportProfileJson } from "../../core/profile/storage/exportProfileJson";
import { importProfileJson } from "../../core/profile/storage/importProfileJson";
import { suggestKeywordsFromText } from "../../core/profile/suggest/suggestKeywordsFromText";
import type { Profile } from "../../core/profile/types";
import { logger } from "../../core/logging/logger";

interface TagEditorProps {
  label: string;
  field: keyof Profile;
  profile: Profile;
  onAdd: (field: keyof Profile, tag: string) => void;
  onRemove: (field: keyof Profile, tag: string) => void;
}

function TagEditor({ label, field, profile, onAdd, onRemove }: TagEditorProps) {
  return (
    <div className="mb-6">
      <label className="text-[0.625rem] font-bold uppercase tracking-widest text-[var(--color-text-ghost)] mb-2 block">
        {label}
      </label>
      <div className="flex flex-wrap gap-2 mb-3">
        {(profile[field] as string[]).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-[10px] font-bold flex items-center gap-1"
          >
            {tag}
            <button
              onClick={() => onRemove(field, tag)}
              className="hover:text-white transition-colors"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="input !py-2 !text-xs"
          placeholder={`Add ${label.toLowerCase()}...`}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value.trim()) {
              onAdd(field, e.currentTarget.value.trim());
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
}

export function ProfilePage() {
  const [profile, setProfile] = useState<Profile>(loadProfile());
  const [tempText, setTempText] = useState("");
  const [suggestedKws, setSuggestedKws] = useState<string[]>([]);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSave = () => {
    try {
      saveProfile(profile);
      setToast({ message: "Profile saved successfully!", type: "success" });
    } catch (err) {
      logger.error("Profile", "save_failed", { err });
      setToast({ message: "Failed to save profile", type: "error" });
    }
  };

  const handleReset = () => {
    if (window.confirm("Reset to default profile? All changes will be lost.")) {
      resetProfile();
      setProfile(loadProfile());
      setToast({ message: "Profile reset to defaults", type: "success" });
    }
  };

  const handleExport = () => {
    const json = exportProfileJson(profile);
    navigator.clipboard.writeText(json);
    setToast({ message: "Profile JSON copied to clipboard", type: "success" });

    // Also trigger download
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `score_leads_profile_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  const handleImport = () => {
    const json = window.prompt("Paste Profile JSON here:");
    if (!json) return;
    try {
      const newProfile = importProfileJson(json);
      setProfile(newProfile);
      saveProfile(newProfile);
      setToast({ message: "Profile imported successfully!", type: "success" });
    } catch (err) {
      setToast({
        message: err instanceof Error ? err.message : "Invalid JSON",
        type: "error",
      });
    }
  };

  const handleSuggest = () => {
    const kws = suggestKeywordsFromText(tempText);
    setSuggestedKws(kws);
    logger.info("Profile", "suggest_keywords", { count: kws.length });
  };

  const addTag = (field: keyof Profile, tag: string) => {
    const arr = profile[field];
    if (Array.isArray(arr) && !arr.includes(tag)) {
      setProfile({ ...profile, [field]: [...arr, tag] });
    }
  };

  const removeTag = (field: keyof Profile, tag: string) => {
    const arr = profile[field];
    if (Array.isArray(arr)) {
      setProfile({ ...profile, [field]: arr.filter((t) => t !== tag) });
    }
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
            <h1 className="section-title mb-2">My Profile</h1>
            <p className="section-subtitle">
              Define your ICP and offerings to calibrate the scoring engine.
            </p>
          </motion.div>

          <motion.div variants={staggerItem}>
            <GlassPanel className="mb-6 space-y-6">
              <div>
                <label className="text-[0.625rem] font-bold uppercase tracking-widest text-[var(--color-text-ghost)] mb-2 block">
                  Company Basics
                </label>
                <div className="space-y-3">
                  <input
                    className="input"
                    value={profile.companyName}
                    onChange={(e) =>
                      setProfile({ ...profile, companyName: e.target.value })
                    }
                    placeholder="Company Name"
                  />
                  <input
                    className="input"
                    value={profile.website}
                    onChange={(e) =>
                      setProfile({ ...profile, website: e.target.value })
                    }
                    placeholder="Website"
                  />
                </div>
              </div>

              <TagEditor
                label="Our Offerings"
                field="offerings"
                profile={profile}
                onAdd={addTag}
                onRemove={removeTag}
              />
              <TagEditor
                label="Target Regions"
                field="targetRegions"
                profile={profile}
                onAdd={addTag}
                onRemove={removeTag}
              />
              <TagEditor
                label="Target Tech Stack"
                field="targetTech"
                profile={profile}
                onAdd={addTag}
                onRemove={removeTag}
              />
              <TagEditor
                label="Intent Keywords"
                field="intentKeywords"
                profile={profile}
                onAdd={addTag}
                onRemove={removeTag}
              />
              <TagEditor
                label="Exclude Keywords"
                field="excludeKeywords"
                profile={profile}
                onAdd={addTag}
                onRemove={removeTag}
              />
            </GlassPanel>
          </motion.div>

          <motion.div variants={staggerItem}>
            <GlassPanel className="mb-6">
              <label className="text-[0.625rem] font-bold uppercase tracking-widest text-[var(--color-text-ghost)] mb-2 block">
                Extract Keywords from Text
              </label>
              <textarea
                className="input textarea !text-xs mb-3"
                rows={4}
                value={tempText}
                onChange={(e) => setTempText(e.target.value)}
                placeholder="Paste your 'About Us' or 'Services' page text here..."
              />
              <button
                className="btn-secondary w-full !py-2 text-xs"
                onClick={handleSuggest}
              >
                Suggest Keywords
              </button>

              {suggestedKws.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {suggestedKws.map((kw) => (
                      <button
                        key={kw}
                        onClick={() => addTag("intentKeywords", kw)}
                        className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] hover:bg-white/10"
                      >
                        + {kw}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </GlassPanel>
          </motion.div>

          <motion.div variants={staggerItem} className="grid grid-cols-2 gap-3">
            <button className="btn-primary" onClick={handleSave}>
              Save Profile
            </button>
            <button className="btn-secondary" onClick={handleReset}>
              Reset
            </button>
            <button
              className="btn-secondary !bg-white/5"
              onClick={handleExport}
            >
              Export JSON
            </button>
            <button
              className="btn-secondary !bg-white/5"
              onClick={handleImport}
            >
              Import JSON
            </button>
          </motion.div>
        </motion.section>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={`fixed bottom-24 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-xs font-bold z-50 shadow-2xl ${
                toast.type === "success"
                  ? "bg-[var(--color-success)] text-white"
                  : "bg-[var(--color-danger)] text-white"
              }`}
            >
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
