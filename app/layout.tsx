import Footer from '../shared/layouts/footer'
import Header from '../shared/layouts/header'
import { ThemeComponent } from '../shared/components/ThemeComponent'
import '../styles/globals.css'
import '../styles/util.css'
import '../styles/animation.css'

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body>
				<ThemeComponent>
					<Header />
					<div className='max-w-7xl md:container mx-auto relative md:px-20 px-4'>
						{children}
					</div>
					<Footer />
				</ThemeComponent>
			</body>
		</html>
	)
}

