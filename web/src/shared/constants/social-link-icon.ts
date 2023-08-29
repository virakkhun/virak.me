import LinkedInIcon from '../../assets/icons/linkedin.svg';
import GithubIcon from '../../assets/icons/github.svg';
import XIcon from '../../assets/icons/x.svg';
import { SocialLinkTitle } from '../models/social-link';

export const SOCIAL_LINK_ICON: Record<SocialLinkTitle, string> = {
	[SocialLinkTitle.LINKEDIN]: LinkedInIcon,
	[SocialLinkTitle.GITHUB]: GithubIcon,
	[SocialLinkTitle.X]: XIcon
};
