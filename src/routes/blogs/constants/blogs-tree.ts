import { base } from '$app/paths';
import { type FsNode, FsType } from '../../../components/fe/entity';

export const BLOGS_TREE: FsNode = {
	label: 'blogs explorer',
	type: FsType.DIR,
	leaf: [
		{
			type: FsType.FILE,
			label: 'basic-commands-in-linux.md',
			link: `${base}/blogs/basic-commands-in-linux`
		},
		{
			type: FsType.FILE,
			label: 'my-2023-stack.md',
			link: `${base}/blogs/my-2023-stack`
		},
		{
			type: FsType.FILE,
			label: 'useful-method-of-array-in-javascript.md',
			link: `${base}/blogs/useful-method-of-array-in-javascript`
		},
		{
			type: FsType.FILE,
			label: 'how-to-git-diff.md',
			link: `${base}/blogs/how-to-git-diff`
		}
	]
};
