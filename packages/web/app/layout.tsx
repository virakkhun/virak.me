import { Divider } from '@virak.me/ui'
import { FooterComponent } from '../modules/core/components/footer.component'
import { HeaderComponent } from '../modules/core/components/header.component'
import '../assets/styles/globals.css'
import '../assets/styles/util.css'

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body className='bg-primary container'>
				<HeaderComponent />
				{children}
				<Divider />
				<FooterComponent />
			</body>
		</html>
	)
}

