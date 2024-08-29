import { goto } from '$app/navigation';

const scroll = (offset: number) =>
	window.scrollBy({
		top: offset,
		behavior: 'smooth'
	});

export const keyPressEventMap: Record<string, (callback: () => void) => void> = {
	w: () => goto('/works'),
	b: () => goto('/blogs'),
	h: () => goto('/'),
	j: () => scroll(60),
	k: () => scroll(-60)
};
