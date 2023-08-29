export const O = {
	len: <T extends Record<string, unknown>>(o: T): number => (o ? Object.keys(o).length : 0),
	empty: <T extends Record<string, unknown>>(o: T) => {
		if (o) return Object.keys(o).length === 0;
		return !o;
	}
};
