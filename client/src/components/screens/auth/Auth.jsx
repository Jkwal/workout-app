import { Loader } from '../../ui/Loader.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { Field } from '../../ui/field/Field.jsx'

import { Layout } from '../../layout/Layout.jsx'

import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage.js'

export const Auth = () => {
	const { onSubmit, isLoading, handleSubmit, errors, register, setType } =
		useAuthPage()

	return (
		<>
			<Layout heading="Sign in" bgImage="../../../public/images/auth-bg.png" />

			<div className="wrapper-inner-page">
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						type="text"
						name="email"
						register={register}
						placeholder="Enter email"
						error={errors?.email?.message}
						options={{
							required: 'Email is required'
						}}
					/>
					<Field
						type="password"
						name="password"
						register={register}
						placeholder="Enter password"
						error={errors?.password?.message}
						options={{
							required: 'Password is required'
						}}
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
