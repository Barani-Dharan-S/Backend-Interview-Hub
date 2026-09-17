import { useEffect, useState } from 'react';

const parseLocation = () => {
  const routeParam = new URLSearchParams(window.location.search).get('__route');
  if (routeParam) {
    const target = new URL(routeParam, window.location.origin);
    window.history.replaceState({}, '', target.pathname + target.search + target.hash);
  }
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const base = '/Backend-Interview-Hub';
  const normalized = path.startsWith(base) ? path.slice(base.length) || '/' : path;
  const params = new URLSearchParams(window.location.search);
  return { path: normalized, params };
};

export const routeForView = view => view === 'roadmap' ? '/' : `/${view}`;

export function useAppRoute() {
  const [location, setLocation] = useState(parseLocation);

  useEffect(() => {
    const onPopState = () => setLocation(parseLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path, options = {}) => {
    const next = path.startsWith('/') ? path : `/${path}`;
    const base = '/Backend-Interview-Hub';
    const url = `${base}${next === '/' ? '/' : next}`;
    if (options.replace) window.history.replaceState({}, '', url);
    else window.history.pushState({}, '', url);
    setLocation(parseLocation());
  };

  return { ...location, navigate };
}

export const viewFromPath = path => {
  const value = path.replace(/^\//, '');
  return value || 'roadmap';
};
