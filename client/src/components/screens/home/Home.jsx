import { useNavigate } from 'react-router-dom'

import { Button } from '../../ui/button/Button.jsx'

import { Layout } from '../../layout/Layout.jsx'
import { Statistics } from '../profile/statistics/Statistics.jsx'

import styles from './Home.module.scss'

export const Home = () => {
	const navigate = useNavigate()
	return (
		<Layout bgImage="../../../../public/images/home-bg.jpg">
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}
