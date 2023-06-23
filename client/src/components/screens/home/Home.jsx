import { useNavigate } from 'react-router-dom'

import { Button } from '../../ui/button/Button.jsx'

import { useAuth } from '../../../hooks/useAuth.js'

import { Layout } from '../../layout/Layout.jsx'

import styles from './Home.module.scss'

export const Home = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<Layout bgImage="../../../../public/images/home-bg.jpg">
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}
