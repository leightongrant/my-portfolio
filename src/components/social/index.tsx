import {
	BsLinkedin,
	BsGithub,
	BsPhoneFill,
	BsEnvelopePaperFill,
} from 'react-icons/bs'
import { Link } from 'react-router'

const linkedin = 'https://www.linkedin.com/in/leightongrant/'
const github = 'https://github.com/leightongrant'

/**
 * A link to my phone number.
 *
 * @param {Object} props
 * @prop {string} className - a CSS class name to apply to the component.
 * @prop {ReactNode} children - a child component to render inside the link.
 *
 * @returns {ReactElement}
 */
function Phone({ className, children }) {
	return (
		<Link to='tel:+447886028826' className={className}>
			<BsPhoneFill /> <span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

/**
 * A link to my email address.
 *
 * @param {Object} props
 * @prop {string} className - a CSS class name to apply to the component.
 * @prop {ReactNode} children - a child component to render inside the link.
 *
 * @returns {ReactElement}
 */
function Email({ className, children }) {
	return (
		<Link to='mailto:dev@leightongrant.me' className={className}>
			<BsEnvelopePaperFill /> <span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

/**
 * A link to my LinkedIn profile.
 *
 * @param {Object} props
 * @prop {string} className - a CSS class name to apply to the component.
 * @prop {ReactNode} children - a child component to render inside the link.
 *
 * @returns {ReactElement}
 */

function LinkedIn({ className, children }) {
	return (
		<Link to={linkedin} target='_blank' className={className} rel='noreferrer'>
			<BsLinkedin /> <span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

/**
 * A link to my GitHub profile.
 *
 * @param {Object} props
 * @prop {string} className - a CSS class name to apply to the component.
 * @prop {ReactNode} children - a child component to render inside the link.
 *
 * @returns {ReactElement}
 */
function GitHub({ className, children }) {
	return (
		<Link to={github} target='_blank' className={className} rel='noreferrer'>
			<BsGithub /> <span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

export { LinkedIn, GitHub, Phone, Email }
