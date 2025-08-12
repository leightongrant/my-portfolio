import { TbError404 } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router'
import { IoIosArrowRoundBack } from 'react-icons/io'
export default function NotFound() {
	return (
		<main className='d-flex align-items-center justify-content-center h-100'>
			<Container>
				<Stack gap={3}>
					<h4 className='text-center'>Oops! page not found</h4>
					<IconContext.Provider
						value={{
							color: '#292b3a',
							className: 'global-class-name text-center',
							size: '10em',
						}}
					>
						<TbError404 className='mt-0 mx-auto' />
					</IconContext.Provider>
					<p className='fs-5 text-capitalize text-center'>
						I'm sorry but the page you requested was not found
					</p>
					<Link
						to='/'
						className='btn mx-auto'
						style={{
							backgroundColor: 'var(--lg-dark)',
							color: 'var(--lg-light)',
						}}
					>
						<IoIosArrowRoundBack /> Back to Home
					</Link>
				</Stack>
			</Container>
		</main>
	)
}
