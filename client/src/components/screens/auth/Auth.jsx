import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Loader } from '../../ui/Loader.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { Field } from '../../ui/field/Field.jsx'

import AuthService from '../../../services/auth.service.js'
import { Layout } from '../../layout/Layout.jsx'

import styles from './Auth.module.scss'

export const Auth = () => {
	const [type, setType] = useState('login')

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				alert('success')
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
		reset()
	}
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
