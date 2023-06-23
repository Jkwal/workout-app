import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

import { useOnClickOutSide } from '../../../hooks/useOnClickOutside.js'

import styles from './Hamburger.module.scss'
import { Menu } from './Menu.jsx'

export const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutSide(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}
