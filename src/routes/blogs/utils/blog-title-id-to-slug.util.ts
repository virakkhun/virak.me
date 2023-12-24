export const blogTitleIdToSlug = (title: string, id: number) => {
	const parsedTitle = title.replaceAll(/\s+/g, '~').toLowerCase();
	const stringId = btoa(id.toString());

	return `${parsedTitle}~~${stringId}`;
};
