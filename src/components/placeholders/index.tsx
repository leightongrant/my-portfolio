import { LuServerOff } from 'react-icons/lu'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'
import Col from 'react-bootstrap/Col'

export const ServerError = () => {
	return (
		<section className='section-padding'>
			<Container>
				<Row className='h-75 flex-column align-items-center justify-content-center gap-5'>
					<LuServerOff style={{ fontSize: '4em' }} />
					<h6
						style={{ textWrap: 'balance' }}
						className='text-center display-6 fs-6'
					>
						There was a problem with the server. Please try again later.
					</h6>
				</Row>
			</Container>
		</section>
	)
}

export const Loading = () => {
	return (
		<section className='section-padding'>
			<Container>
				<Row className='align-items-center justify-content-center'>
					<Spinner animation='border' variant='secondary' />
				</Row>
			</Container>
		</section>
	)
}

export function ProjectsSkeleton() {
	return (
		<section className='section-padding'>
			<Container>
				<Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
					{Array.from({ length: 8 }).map((_, index) => (
						<Col key={index}>
							<Card>
								<Card.Body>
									<Placeholder as={Card.Title} animation='glow'>
										<Placeholder xs={6} />
									</Placeholder>
									<Placeholder as={Card.Text} animation='glow'>
										<Placeholder xs={7} /> <Placeholder xs={4} />{' '}
										<Placeholder xs={4} /> <Placeholder xs={6} />{' '}
										<Placeholder xs={8} />
									</Placeholder>
									<Placeholder.Button variant='secondary' xs={6} />
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	)
}
