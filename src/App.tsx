import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.js'
import { lazy } from 'react'
import MainLayout from './layout/MainLayout.js'
import { useFirebaseStore } from './lib/zustand.js'
import { getUser } from './lib/firebase.js'

const Projects = lazy(() => import('./pages/projects/Projects'))
const Thanks = lazy(() => import('./pages/thanks/Thanks.js'))
const NotFound = lazy(() => import('./pages/notfound/NotFound.js'))
const ProjectDetails = lazy(() => import('./pages/projects/ProjectDetails.js'))
const Contact = lazy(() => import('./pages/contact/Contact.js'))
const About = lazy(() => import('./pages/about/About.js'))

export default function App() {
	const setUser = useFirebaseStore(state => state.setUser)
	getUser(setUser)

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='projects'
						element={<Projects />}
					/>
					<Route
						path='projects/:slug'
						element={<ProjectDetails />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='thanks'
						element={<Thanks />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
