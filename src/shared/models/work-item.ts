type Company = {
	name: string;
	link: string;
};

export type WorkItem = {
	title: string;
	company: Company;
	timePeriod: string;
	skills: string[];
	projectLinks: string[];
	isCurrent: boolean;
};
