import 'aos/dist/aos.css'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import AosProvider from './components/aos/AosProvider'

const rootElement = document.getElementById('root') as HTMLDivElement
const root = ReactDOM.createRoot(rootElement)
root.render(
	<StrictMode>
		<AosProvider>
			<App />
		</AosProvider>
	</StrictMode>
)
