import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { lazy } from 'react'
import Header from '../components/header/Header'

const MainModal = lazy(() => import('../components/modals/Modals'))
const MainToast = lazy(() => import('../components/toasts/Toasts'))

function MainLayout() {
	return (
		<>
			<Header />
			<div
				style={{
					display: 'grid',
					gridTemplateRows: '1fr auto',
					minHeight: '100dvh',
				}}
			>
				<div>
					<Outlet />
				</div>
				<Footer />
			</div>
			<MainModal />
			<MainToast />
		</>
	)
}

export default MainLayout
