import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import { Loader } from '../../ui/Loader.jsx'
import { Alert } from '../../ui/alert/Alert.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { Field } from '../../ui/field/Field.jsx'

import ExerciseService from '../../../services/exercise/exercise.service.js'
import { Layout } from '../../layout/Layout.jsx'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util.js'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

export const NewExercise = () => {
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout
				bgImage="/images/new-exercise-bg.jpg"
				heading="Create new exercise"
				backLink="/new-workout"
			/>

			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error} />}
				{isSuccess && <Alert text="Exercise created" />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						type="text"
						name="name"
						register={register}
						placeholder="Enter name"
						error={errors?.name?.message}
						options={{
							required: 'Email is required'
						}}
					/>
					<Field
						name="times"
						register={register}
						placeholder="Enter times"
						error={errors?.times?.message}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
					/>

					<Controller
						control={control}
						name="iconPath"
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}/${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height="45"
									/>
								))}
							</div>
						)}
					/>
					{errors?.iconPath && (
						<div className="error">{error?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}
