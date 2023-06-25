import { FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { IconType } from 'react-icons'
import { SocialLink } from '../models/social-link'

export const SOCIAL_LINK_ICON_MAP: Record<SocialLink, IconType> = {
	twitter: FaTwitter,
	linkedin: FaLinkedin,
}

