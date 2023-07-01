import { Divider } from '@virak.me/ui'
import { FooterComponent } from '../core/components/footer.component'
import { HeaderComponent } from '../core/components/header.component'
import '../assets/styles/globals.css'
import '../assets/styles/util.css'

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body className='bg-dark-gray-0'>
				<div className='md:px-32 px-4'>
					<HeaderComponent />
					{children}
					<Divider />
					<FooterComponent />
				</div>
			</body>
		</html>
	)
}

