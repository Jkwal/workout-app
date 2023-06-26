import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import { Hamburger } from '../hamburger/Hamburger.jsx'

import styles from './Header.module.scss'

export const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname !== '/' ? (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
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
					{isAuth && <Hamburger />}
				</>
			)}
		</header>
	)
}
