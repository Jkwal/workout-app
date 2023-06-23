import { IoMdArrowBack } from 'react-icons/io'

import { useAuth } from '../../../hooks/useAuth.js'

import { Hamburger } from '../hamburger/Hamburger.jsx'

import styles from './Header.module.scss'

export const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack fill="#fff" fontSize={29} />
			</button>
			<Hamburger />
		</header>
	)
}
