export enum SocialLinkTitle {
	X,
	GITHUB,
	LINKEDIN
}

export type SocialLink = {
	title: SocialLinkTitle;
	link: string;
};

export type SocialLinks = Array<SocialLink>;
