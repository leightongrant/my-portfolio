import 'aos/dist/aos.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import AosProvider from './components/aos/AosProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<AosProvider>
			<App />
		</AosProvider>
	</StrictMode>
)
