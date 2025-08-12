import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import { useResolvedPath } from 'react-router'
import { GoHomeFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const BreadcrumbItem = ({ children, href, active }) => {
	return (
		<li className='breadcrumb-item'>
			<Link
				to={active ? '#' : href}
				className={active ? 'active-breadcrumb' : ''}
			>
				{children}
			</Link>
		</li>
	)
}

function Breadcrumbs({ pageTitle }) {
	const path = useResolvedPath().pathname
	const paths = path.split('/').filter(pth => pth)

	const crumbs = paths.map((pth, i) => {
		const isLast = i === paths.length - 1
		// Build the full path for the current crumb for a correct href
		const href = `/${paths.slice(0, i + 1).join('/')}`
		// Use the pageTitle for the last crumb if it exists, otherwise format the path segment.
		const crumbText =
			isLast && pageTitle
				? pageTitle
				: pth.charAt(0).toUpperCase() +
				  pth.slice(1).replaceAll('-', ' ')
		return (
			<BreadcrumbItem
				key={i}
				href={href}
				active={isLast}
			>
				{crumbText}
			</BreadcrumbItem>
		)
	})

	return (
		<section className='bg-light p-1'>
			<Container>
				<Breadcrumb>
					<BreadcrumbItem href={'/'}>
						<GoHomeFill />
					</BreadcrumbItem>
					{crumbs}
				</Breadcrumb>
			</Container>
		</section>
	)
}

export default Breadcrumbs
