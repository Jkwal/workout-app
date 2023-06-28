import { Link } from 'react-router-dom'

import { Loader } from '../../ui/Loader.jsx'
import { Alert } from '../../ui/alert/Alert.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { Field } from '../../ui/field/Field.jsx'

import { Layout } from '../../layout/Layout.jsx'

import { SelectExercises } from './SelectExercises.jsx'
import { useNewWorkout } from './useNewWorkout.js'

export const NewWorkout = () => {
	const {
		error,
		isSuccess,
		isLoading,
		control,
		errors,
		handleSubmit,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<>
			<Layout
				bgImage="/images/new-workout-bg.jpg"
				heading="Create new workout"
			/>

			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error} />}
				{isSuccess && <Alert text="Workout created successfully" />}
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

					<Link to="/new-exercise" className="dark-link">
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className="error">{error?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}
