'use client'

import { ThemeProvider } from 'next-themes'

interface Props {
	children: React.ReactNode
}

export const ThemeComponent = ({ children }: Props) => {
	return (
		<ThemeProvider
			attribute='class'
			enableSystem={true}
			themes={['dark', 'light', 'system']}
			defaultTheme='dark'
		>
			{children}
		</ThemeProvider>
	)
}

