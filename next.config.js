/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				hostname: 'api.virak.me',
				protocol: 'https',
				port: '',
			},
		],
	},
	experimental: {
		appDir: true,
	},
}

module.exports = nextConfig

