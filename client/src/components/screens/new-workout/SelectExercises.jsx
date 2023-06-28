import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Loader } from '../../ui/Loader.jsx'

import { useListExercises } from './useListExercises.js'

export const SelectExercises = ({ control }) => {
	const { data, isLoading } = useListExercises()

	if (isLoading) return <Loader />

	return (
		<Controller
			control={control}
			name="exerciseIds"
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					classNamePrefix="select2-selection"
					placeholder="Exercises..."
					title="Exercises"
					isMulti
					value={value}
					onChange={onChange}
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
				/>
			)}
		/>
	)
}
