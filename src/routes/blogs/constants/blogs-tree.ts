import { type FsNode, FsType } from '../../../components/fe/entity';

export const BLOGS_TREE: FsNode = {
	label: 'blogs explorer',
	type: FsType.DIR,
	leaf: [
		{
			type: FsType.FILE,
			label: 'basic-commands-in-linux.md',
			link: `/blogs/basic-commands-in-linux`
		},
		{
			type: FsType.FILE,
			label: 'my-2023-stack.md',
			link: `/blogs/my-2023-stack`
		},
		{
			type: FsType.FILE,
			label: 'useful-method-of-array-in-javascript.md',
			link: `/blogs/useful-method-of-array-in-javascript`
		},
		{
			type: FsType.FILE,
			label: 'how-to-git-diff.md',
			link: `/blogs/how-to-git-diff`
		}
	]
};
