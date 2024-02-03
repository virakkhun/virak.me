import type { WorkItem } from '../models/work-item';

export const WORK_ITEM_LIST: WorkItem[] = [
	{
		title: 'Software Engineer',
		company: { name: 'Okoone', link: 'https://okoone.com' },
		projectLinks: [''],
		skills: ['Angular', 'TypeScript', 'Tailwind'],
		timePeriod: 'present',
		workDetail: ``,
		isCurrent: true
	},
	{
		title: 'Web Developer',
		company: { name: 'OneSala', link: 'https://onesala.com' },
		projectLinks: [''],
		skills: ['Nuxt', 'Vue', 'UnoCSS', 'Tailwind'],
		timePeriod: '2022 ~ 2023',
		workDetail: ``,
		isCurrent: false
	}
];
