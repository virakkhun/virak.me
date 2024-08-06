import DirOpen from '../assets/icons/dir-open.svg';
import Rss from '../assets/icons/rss.svg';

export enum FsType {
	DIR = 'dir',
	FILE = 'file'
}

export interface File {
	type: FsType;
	label: string;
	link: string;
	dirs?: Dir[];
}

export interface Dir {
	type: FsType;
	label: string;
	files: File[];
}

export const FsIcons: Record<FsType, string> = {
	[FsType.DIR]: DirOpen,
	[FsType.FILE]: Rss
};

const blogs: Dir[] = [
	{
		type: FsType.DIR,
		label: 'blogs explorer...',
		files: [
			{
				type: FsType.FILE,
				label: 'basic-commands-in-linux.md',
				link: '/blogs/basic-commands-in-linux'
			},
			{
				type: FsType.FILE,
				label: 'my-2023-stack.md',
				link: '/blogs/my-2023-stack'
			},
			{
				type: FsType.FILE,
				label: 'useful-method-of-array-in-javascript.md',
				link: '/blogs/useful-method-of-array-in-javascript'
			}
		]
	}
];

export default blogs;
