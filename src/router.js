import { useSyncExternalStore } from 'react';

// Minimal history-based routing: the URL is the single source of truth for
// which view is open, so every case study has a shareable link.
const listeners = new Set();

function getPath() {
  const path = window.location.pathname;
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener('popstate', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('popstate', listener);
  };
}

export function navigate(path, { replace = false } = {}) {
  if (path === getPath()) return;
  window.history[replace ? 'replaceState' : 'pushState'](null, '', path);
  listeners.forEach((listener) => listener());
}

export function usePath() {
  return useSyncExternalStore(subscribe, getPath);
}
