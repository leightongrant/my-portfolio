import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useToastStore } from '../../lib/zustand'

function MainToast() {
	const { show, closeToast, result } = useToastStore()

	return (
		<ToastContainer position='bottom-center' className='p-3'>
			<Row>
				<Col>
					<Toast
						onClose={() => closeToast(false)}
						show={show}
						delay={5000}
						autohide
						className={`bg-dark ${
							result.status === 'success' ? 'text-success' : 'text-danger'
						}`}
					>
						<Toast.Header>
							<strong className='me-auto'>
								{result.status === 'success' ? 'Success' : 'Error'}
							</strong>
						</Toast.Header>
						<Toast.Body>{result.message}</Toast.Body>
					</Toast>
				</Col>
			</Row>
		</ToastContainer>
	)
}

export default MainToast
