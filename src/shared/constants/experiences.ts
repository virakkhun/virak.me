import type { WorkItem } from '../models/work-item';

export const WORK_ITEM_LIST: WorkItem[] = [
	{
		title: 'Software Engineer',
		company: { name: 'Okoone', link: 'https://okoone.com' },
		projectLinks: [''],
		skills: ['Angular', 'TypeScript', 'Tailwind'],
		timePeriod: 'present',
		isCurrent: true
	},
	{
		title: 'Web Developer',
		company: { name: 'OneSala', link: 'https://onesala.com' },
		projectLinks: [''],
		skills: ['Nuxt', 'Tailwind', 'Expressjs'],
		timePeriod: '2022 ~ 2023',
		isCurrent: false
	}
];
