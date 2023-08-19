const { timeZone, locale, numberingSystem } = Intl.DateTimeFormat().resolvedOptions();

export const DT = {
	parse: (date: string) =>
		new Date(date).toLocaleDateString(locale, {
			dateStyle: 'medium',
			numberingSystem,
			timeZone: timeZone,
			formatMatcher: 'best fit'
		}),
	diff: (date: string) => {
		const todayTime = new Date().getTime();
		const pastTime = new Date(date).getTime();
		const diffTime = todayTime - pastTime;
		const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		const hours = Math.floor(diffTime / (1000 * 60 * 60));
		const minutes = Math.floor(diffTime / (1000 * 60));
		const weeks = Math.floor(days / 7);
		const months = Math.floor(weeks / 4);

		if (minutes > 60) return `${hours}h ago`;
		if (hours > 24) return `${days}d ago`;
		if (days > 7) return `${weeks}w ago`;
		if (weeks >= 4) `${months}s ago`;
		return `${minutes}min ago`;
	}
};
