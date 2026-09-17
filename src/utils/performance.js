const enabled = () => import.meta.env.DEV && new URLSearchParams(window.location.search).get('perf') === '1';

export const perfEnabled = enabled;

export function mark(name) {
  if (!enabled() || !window.performance?.mark) return;
  window.performance.mark(name);
}

export function measure(name, startMark, endMark) {
  if (!enabled() || !window.performance?.measure) return null;
  try {
    const entry = window.performance.measure(name, startMark, endMark);
    return entry.duration;
  } catch {
    return null;
  }
}

export function logMeasure(name, startMark, endMark) {
  const duration = measure(name, startMark, endMark);
  if (duration != null) console.info(`[perf] ${name}: ${duration.toFixed(2)} ms`);
  return duration;
}

export function startRuntimeObservers() {
  if (!enabled() || !window.PerformanceObserver) return () => {};
  const observers = [];

  try {
    const paintObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.info(`[perf] First Contentful Paint: ${entry.startTime.toFixed(2)} ms`);
        }
      }
    });
    paintObserver.observe({ type: 'paint', buffered: true });
    observers.push(paintObserver);
  } catch {}

  try {
    const longTaskObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        console.info(`[perf] Long task: ${entry.duration.toFixed(2)} ms at ${entry.startTime.toFixed(2)} ms`);
      }
    });
    longTaskObserver.observe({ type: 'longtask', buffered: true });
    observers.push(longTaskObserver);
  } catch {}

  return () => observers.forEach(observer => observer.disconnect());
}

export function logResourceSummary() {
  if (!enabled() || !window.performance?.getEntriesByType) return;
  const resources = performance.getEntriesByType('resource')
    .filter(entry => entry.initiatorType === 'script' || entry.initiatorType === 'fetch')
    .map(entry => ({
      name: entry.name.split('/').pop(),
      type: entry.initiatorType,
      durationMs: Number(entry.duration.toFixed(2)),
      transferBytes: entry.transferSize || 0,
      decodedBytes: entry.decodedBodySize || 0
    }))
    .sort((a, b) => b.transferBytes - a.transferBytes);
  console.table(resources);
}
