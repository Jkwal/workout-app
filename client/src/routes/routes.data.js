import { Auth } from '../components/screens/auth/Auth.jsx'
import { Home } from '../components/screens/home/Home.jsx'
import { NewExercise } from '../components/screens/new-exercise/NewExercise.jsx'
import { NewWorkout } from '../components/screens/new-workout/NewWorkout.jsx'
import { Profile } from '../components/screens/profile/Profile.jsx'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
	},

	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	}
]
