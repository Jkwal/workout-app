import { Auth } from '../components/screens/auth/Auth.jsx'
import { Home } from '../components/screens/home/Home.jsx'
import { NewWorkout } from '../components/screens/new-workout/NewWorkout.jsx'
import { Profile } from '../components/screens/profile/Profile.jsx'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	}
]
