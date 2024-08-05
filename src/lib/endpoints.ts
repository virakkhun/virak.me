const GITHUB_STATIC_CONTENT =
	'https://raw.githubusercontent.com/virakkhun/virak.me/main/static/blogs';

export const buildGithubEndpoint = (filename: string) =>
	[GITHUB_STATIC_CONTENT, filename].join('/');
