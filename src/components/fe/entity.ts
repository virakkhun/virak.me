export enum FsType {
	DIR,
	FILE
}

export interface FsNode {
	label: string;
	type: FsType;
	link?: string;
	path?: string;
	leaf?: FsNode[];
}

export type FsTree = FsNode;
