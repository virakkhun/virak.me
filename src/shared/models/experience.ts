type Company = {
	title: string;
	link: string;
};

export type Experience = {
	title: string;
	company: Company;
	timePeriod: [string, string];
	skills: string[];
	projectLinks: string[];
	workDetail: string;
	isCurrent: boolean;
};
