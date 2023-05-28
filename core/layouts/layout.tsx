import Footer from './footer'
import Header from './header'
interface Props {
	children: JSX.Element | React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<html>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

export default Layout

