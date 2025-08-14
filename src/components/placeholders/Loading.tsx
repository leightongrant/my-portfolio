import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'

export const Loading = () => {
	return (
		<section className='section-padding'>
			<Container>
				<Row className='align-items-center justify-content-center'>
					<Spinner
						animation='border'
						variant='secondary'
					/>
				</Row>
			</Container>
		</section>
	)
}
