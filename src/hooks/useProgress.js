import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "backend-interview-progress-v1";

function readProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) return { completed: parsed, completionTimes: {} };
    return { completed: Array.isArray(parsed.completed) ? parsed.completed : [], completionTimes: parsed.completionTimes || {} };
  } catch {
    return { completed: [], completionTimes: {} };
  }
}

export function useProgress() {
  const [state, setState] = useState(readProgress);
  const { completed, completionTimes } = state;

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ completed, completionTimes })); } catch {}
  }, [completed, completionTimes]);

  const isComplete = useCallback(id => completed.includes(id), [completed]);
  const toggleComplete = useCallback(id => {
    setState(current => {
      const exists = current.completed.includes(id);
      if (exists) {
        const nextTimes = { ...current.completionTimes };
        delete nextTimes[id];
        return { completed: current.completed.filter(item => item !== id), completionTimes: nextTimes };
      }
      return { completed: [...current.completed, id], completionTimes: { ...current.completionTimes, [id]: Date.now() } };
    });
  }, []);
  const resetProgress = useCallback(() => setState({ completed: [], completionTimes: {} }), []);

  return useMemo(() => ({ completed, completionTimes, isComplete, toggleComplete, resetProgress }), [completed, completionTimes, isComplete, toggleComplete, resetProgress]);
}

export function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem("backend-theme") !== "light");
  useEffect(() => localStorage.setItem("backend-theme", dark ? "dark" : "light"), [dark]);
  return [dark, setDark];
}
