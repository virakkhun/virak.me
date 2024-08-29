import { goto } from '$app/navigation';

const scroll = (offset: number) =>
	window.scrollBy({
		top: offset,
		behavior: 'smooth'
	});

export type KeyPressEvent = Record<
	string,
	{
		func: () => void;
		desc: string;
		type: 'naviation' | 'movement' | 'event';
	}
>;

export const keyPressEventMap: KeyPressEvent = {
	w: {
		func: () => goto('/works'),
		desc: 'go to /works page',
		type: 'naviation'
	},
	b: {
		func: () => goto('/blogs'),
		desc: 'go to /blogs page',
		type: 'naviation'
	},
	h: {
		func: () => goto('/'),
		desc: 'go to / page',
		type: 'naviation'
	},
	j: {
		func: () => scroll(60),
		desc: 'scroll down',
		type: 'movement'
	},
	k: {
		func: () => scroll(-60),
		desc: 'scroll up',
		type: 'movement'
	}
};
