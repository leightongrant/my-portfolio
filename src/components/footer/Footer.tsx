import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { GitHub, LinkedIn, Email, Phone } from '../social'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Footer = () => {
	const year = new Date().getFullYear() ?? 2025

	return (
		<footer
			id='footer'
			className='py-3'
			style={{
				backgroundColor: 'var(--lg-dark)',
				color: 'var(--lg-accent)',
			}}
		>
			<Container>
				<Row className='row-cols-1 row-cols-md-2 align-items-baseline g-2'>
					<Col>
						<Stack
							className='copyright fs-6 align-items-center justify-content-center justify-content-md-start flex-wrap'
							direction='horizontal'
							gap={2}
						>
							<small className='fw-thin'>Leighton Grant</small>
							<small> &copy; Copyright {year}</small>
						</Stack>
					</Col>
					<Col>
						<Stack
							direction='horizontal'
							className='flex-grow-1 align-items-center justify-content-center justify-content-md-end'
							gap={2}
						>
							<GitHub className='footer-icon' />
							<LinkedIn className='footer-icon' />
							<Email className='footer-icon' />
							<Phone className='footer-icon' />
						</Stack>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
