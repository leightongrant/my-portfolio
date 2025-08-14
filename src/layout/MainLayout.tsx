import { Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const MainModal = lazy(() => import('../components/modals/Modals'))
const MainToast = lazy(() => import('../components/toasts/Toasts'))
const Footer = lazy(() => import('../components/footer/Footer'))
const Header = lazy(() => import('../components/header/Header'))

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
			<Suspense fallback={<p>...Loading</p>}>
				<MainModal />
			</Suspense>
			<Suspense fallback={<p>...Loading</p>}>
				<MainToast />
			</Suspense>
		</>
	)
}

export default MainLayout
