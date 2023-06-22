import { Header } from './header/Header.jsx'

export const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}
