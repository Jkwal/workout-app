import { useAuth } from '../../../hooks/useAuth.js'
import { Hamburger } from '../hamburger/Hamburger.jsx'
import styles from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'

export const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft />
			</button>
			<Hamburger />
		</header>
	)
}
