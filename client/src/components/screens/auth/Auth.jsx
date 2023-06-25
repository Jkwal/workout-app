import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Loader } from '../../ui/Loader.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { Field } from '../../ui/field/Field.jsx'

import { Layout } from '../../layout/Layout.jsx'

import styles from './Auth.module.scss'

export const Auth = () => {
	const isLoading = false
	const isLoadingAuth = false

	const [type, setType] = useState('auth')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<>
			<Layout heading="Sign in" bgImage="../../../public/images/auth-bg.png" />

			<div className="wrapper-inner-page">
				{(isLoading || isLoadingAuth) && <Loader />}
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
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
