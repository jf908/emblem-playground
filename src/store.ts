import { readable } from 'svelte/store';

export const useMediaQuery = (mediaQueryString: string) => {
	const matches = readable<boolean | null>(null, (set) => {
		if (!globalThis.matchMedia) return;
		const m = globalThis.matchMedia(mediaQueryString);
		set(m.matches);
		const el = (e: MediaQueryListEvent) => set(e.matches);
		m.addEventListener('change', el);
		return () => {
			m.removeEventListener('change', el);
		};
	});
	return matches;
};
