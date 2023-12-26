import type { Experience } from '../models/experience';

export const EXPERIENCES: Experience[] = [
	{
		title: 'Software Engineer',
		company: { title: 'Okoone', link: 'https://okoone.com' },
		projectLinks: [''],
		skills: ['Angular', 'TypeScript', 'Tailwind'],
		timePeriod: ['2022', 'Present'],
		workDetail: ``,
		isCurrent: true
	},
	{
		title: 'Web Developer',
		company: { title: 'OneSala', link: 'https://onesala.com' },
		projectLinks: [''],
		skills: ['Nuxt', 'Vue', 'UnoCSS', 'Tailwind'],
		timePeriod: ['2021', '2022'],
		workDetail: ``,
		isCurrent: false
	}
];
