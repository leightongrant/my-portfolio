import { BsArrowLeft } from 'react-icons/bs'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router'

function Thanks() {
	return (
		<Container className='h-100'>
			<Stack className='h-100 align-items-center justify-content-center'>
				<Card className='shadow p-5'>
					<div className='card-body'>
						<h4 className='text-dark text-center'>Thank You</h4>
						<p className='text-center'>
							Your message has been received!
						</p>

						<Link
							to={{ pathname: '/projects' }}
							className='fs-6 text-decoration-none d-flex justify-content-center align-items-center gap-2'
						>
							<BsArrowLeft /> Back to my portfolio
						</Link>
					</div>
				</Card>
			</Stack>
		</Container>
	)
}

export default Thanks
