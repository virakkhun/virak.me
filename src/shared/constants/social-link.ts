import { SocialLinkTitle, type SocialLinks } from '../models/social-link';

export const LINKEDIN = 'https://www.linkedin.com/in/khun-virak-9025b1210';
export const X = 'https://twitter.com/@virak_dev';
export const GITHUB = 'https://github.com/virakkhun';

export const SOCIAL_LINK_LIST: SocialLinks = [
	{
		link: LINKEDIN,
		title: SocialLinkTitle.LINKEDIN
	},
	{ link: X, title: SocialLinkTitle.X },
	{
		link: GITHUB,
		title: SocialLinkTitle.GITHUB
	}
];
