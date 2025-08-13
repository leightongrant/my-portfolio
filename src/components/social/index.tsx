import type React from 'react'
import {
	BsLinkedin,
	BsGithub,
	BsPhoneFill,
	BsEnvelopePaperFill,
} from 'react-icons/bs'
import { Link } from 'react-router'

const linkedin = 'https://www.linkedin.com/in/leightongrant/'
const github = 'https://github.com/leightongrant'

//Types
type SocialProps = {
	className: string
	children?: React.ReactNode
}

function Phone({ className, children }: SocialProps) {
	return (
		<Link
			to='tel:+447886028826'
			className={className}
		>
			<BsPhoneFill /> <span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

function Email({ className, children }: SocialProps) {
	return (
		<Link
			to='mailto:dev@leightongrant.me'
			className={className}
		>
			<BsEnvelopePaperFill />{' '}
			<span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

function LinkedIn({ className, children }: SocialProps) {
	return (
		<Link
			to={linkedin}
			target='_blank'
			className={className}
			rel='noreferrer'
		>
			<BsLinkedin /> <span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

function GitHub({ className, children }: SocialProps) {
	return (
		<Link
			to={github}
			target='_blank'
			className={className}
			rel='noreferrer'
		>
			<BsGithub /> <span className='ms-2 fs-6'>{children}</span>
		</Link>
	)
}

export { LinkedIn, GitHub, Phone, Email }
