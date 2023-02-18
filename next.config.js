/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				hostname: 'cms-service-1e6h.onrender.com',
				protocol: 'https',
				port: '',
			},
		],
	},
}

module.exports = nextConfig

