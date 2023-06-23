import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import { Hamburger } from '../hamburger/Hamburger.jsx'

import styles from './Header.module.scss'

export const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()

	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<IoMdArrowBack fill="#fff" fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<SlUser fill="#fff" fontSize={27} />
				</button>
			)}
			<Hamburger />
		</header>
	)
}
