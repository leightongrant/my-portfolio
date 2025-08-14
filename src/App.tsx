import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.js'
import { lazy, Suspense } from 'react'
import MainLayout from './layout/MainLayout.js'
import { useFirebaseStore } from './lib/zustand.js'
import { getUser } from './lib/firebase.js'
import { Loading } from './components/placeholders/Loading.js'

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
						element={
							<Suspense fallback={<Loading />}>
								<About />
							</Suspense>
						}
					/>
					<Route
						path='projects'
						element={
							<Suspense fallback={<Loading />}>
								<Projects />
							</Suspense>
						}
					/>
					<Route
						path='projects/:slug'
						element={
							<Suspense fallback={<Loading />}>
								<ProjectDetails />
							</Suspense>
						}
					/>
					<Route
						path='contact'
						element={
							<Suspense fallback={<Loading />}>
								<Contact />
							</Suspense>
						}
					/>
					<Route
						path='thanks'
						element={
							<Suspense fallback={<Loading />}>
								<Thanks />
							</Suspense>
						}
					/>
					<Route
						path='*'
						element={
							<Suspense fallback={<Loading />}>
								<NotFound />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
