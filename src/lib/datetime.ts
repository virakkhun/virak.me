const { timeZone, locale, numberingSystem } = Intl.DateTimeFormat().resolvedOptions();

export const datetime = {
	parse: (date: string) =>
		new Date(date).toLocaleDateString(locale, {
			dateStyle: 'medium',
			numberingSystem,
			timeZone: timeZone,
			formatMatcher: 'best fit'
		}),
	diff: (date: string, today = new Date().toString()) => {
		const todayTime = new Date(today).getTime();
		const pastTime = new Date(date).getTime();
		const diffTime = todayTime - pastTime;
		const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		const hours = Math.floor(diffTime / (1000 * 60 * 60));
		const minutes = Math.floor(diffTime / (1000 * 60));
		const weeks = Math.floor(days / 7);
		const months = Math.floor(weeks / 4);

		if (weeks >= 4) return `${months} months ago`;
		if (days >= 7) return `${weeks} weeks ago`;
		if (hours >= 24) return `${days} days ago`;
		if (minutes >= 60) return `${hours} hours ago`;
		return `${minutes} minutes ago`;
	}
};
