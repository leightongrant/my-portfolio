import logo from '../../assets/lg-logo.png'
import SignIn from '../signin'
import { useResolvedPath } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { SiTrueup } from 'react-icons/si'

const Header = () => {
	const path = useResolvedPath().pathname
	const [expanded, setExpanded] = useState(false)

	const navRef = useRef(null)
	const buttonRef = useRef(null)

	const navBarToggleStyle = {
		backgroundColor: 'transparent',
		border: 'none',
		color: '#292b3a',
		fontSize: '2em',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	return (
		<Navbar
			id='main-nav'
			as={'header'}
			fixed='top'
			expand='md'
			className='shadow-sm'
			bg={path === '/' ? 'transparent' : 'light'}
			expanded={expanded}
			onToggle={expanded => setExpanded(expanded)}
			style={{
				backdropFilter: 'blur(10px)',
			}}
		>
			<Container fluid>
				<Navbar.Brand>
					<Link to='/' onClick={() => setExpanded(false)}>
						<Image
							src={logo}
							width={53}
							height={35}
							alt='leightongrant.me logo'
							title='leightongrant.me logo'
							loading='eager'
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='navbar-nav'
					children={expanded ? <HiOutlineX /> : <HiMenu />}
					onClick={() => setExpanded(!expanded)}
					bsPrefix='navbar-toggler-custom'
					className='d-md-none'
					style={navBarToggleStyle}
					ref={buttonRef}
				/>
				<Navbar.Collapse
					id='navbar-nav'
					className='justify-content-center text-uppercase fs-6'
					ref={navRef}
				>
					<Nav className='gap-3'>
						<Link
							to='/'
							className={`nav-link ${path === '/' && 'active'}`}
							onClick={() => setExpanded(false)}
						>
							Home
						</Link>
						<Link
							to='/about'
							className={`nav-link ${/about/.test(path) && 'active'}`}
							onClick={() => setExpanded(false)}
						>
							About
						</Link>

						<Link
							to='/projects'
							className={`nav-link ${/projects/.test(path) && 'active'}`}
							onClick={() => setExpanded(false)}
						>
							Projects
						</Link>

						<Link
							to='/contact'
							className={`nav-link ${/contact/.test(path) && 'active'}`}
							onClick={() => setExpanded(false)}
						>
							Contact
						</Link>
					</Nav>
					<div className='d-md-none'>
						<hr />
						<SignIn />
					</div>
				</Navbar.Collapse>
				<div className='d-none d-md-block'>
					<SignIn />
				</div>
			</Container>
		</Navbar>
	)
}

export default Header
