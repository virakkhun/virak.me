import type { WorkItem } from '../models/work-item';

export const WORK_ITEM_LIST: WorkItem[] = [
	{
		title: 'Software Engineer',
		company: { name: 'Okoone', link: 'https://okoone.com' },
		projectLinks: [''],
		skills: ['Angular', 'TypeScript', 'Tailwind'],
		timePeriod: 'present',
		workDetail: `
			<ul class="text-text-secondary list-disc pl-6">
				<li>
					<span>working on</span>
					<a href="https://iqair.com" target="_blank" class="text-accent hover:text-primary">iqair.com</a>
					<span>&</span>
					<a href="https://dashboard.iqair.com" target="_blank" class="text-accent hover:text-primary">dashboard.iqair.com</a>
				</li>
				<li>focus on building, integrating new feature, and maintaining both platform with an amazing team.</li>
				<li>my daily basis, morning stum, PR review, read docs(feature requirements) and build thing.</li>
			</ul>
		`,
		isCurrent: true
	},
	{
		title: 'Web Developer',
		company: { name: 'OneSala', link: 'https://onesala.com' },
		projectLinks: [''],
		skills: ['Nuxt', 'Tailwind', 'Expressjs'],
		timePeriod: '2022 ~ 2023',
		workDetail: `
			<ul class="text-text-secondary list-disc pl-6">
				<li>
					<span>building and maintaining</span>
					<a href="https://onesala.com/" target="_blank" class="text-accent hover:text-primary">onesala.com</a>
				</li>
				<li>
					crafting from zero to live authentication system for OneSala platform
					<a href="https://oneaccount.onesala.com/" target="_blank" class="text-accent hover:text-primary">oneaccount.onesala.com</a>
				</li>
				<li>
					building a dedicate backend service for serving OneSala website streaming a video using <a href="https://expressjs.com/" target="_blank" class="text-accent hover:text-primary">expressjs</a>
				</li>
				<li>collaborating with team to build related project</li>
			</ul>
		`,
		isCurrent: false
	}
];
