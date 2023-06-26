import { useProfile } from '../useProfile.js'

import styles from './Statistics.module.scss'

export const Statistics = () => {
	const { data } = useProfile()
	return (
		<div className={styles.wrapper}>
			{data?.statistics?.map(statistic => (
				<div key={statistic.label} className={styles.count}>
					<div className={styles.heading}>{statistic.label}</div>
					<div className={styles.number}>{statistic.value}</div>
				</div>
			))}
		</div>
	)
}
