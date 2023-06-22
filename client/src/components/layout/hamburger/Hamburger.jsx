import styles from './Hamburger.module.scss'
import { Menu } from './Menu.jsx'
import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

export const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <CgMenuRight color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}