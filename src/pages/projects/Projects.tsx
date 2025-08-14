import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/projects-bg.webp'
import Breadcrumbs from '../../components/breadcrumb/breadcrumb'
import Metadata from '../../metadata/SiteMetadata'
import { lazy } from 'react'
const BootcampProjects = lazy(() => import('./BootcampProjects'))

const Projects = () => {
	return (
		<>
			<Metadata
				title='Projects'
				description='Explore my portfolio of projects, showcasing my expertise in frontend web development with React.'
				keywords='Frontend Web Development, React, JavaScript, HTML, CSS, Responsive Design, User Experience (UX), Web Applications, Portfolio, Web Developer, Project Showcase'
				canonical='https://leightongrant.me/projects'
				image='https://leightongrant.me/og-image.webp'
				imageAlt='Leighton Grant Portfolio'
			/>
			<PageBanner
				pageTitle='My Projects'
				bannerBg={bg}
			/>
			<Breadcrumbs />
			<BootcampProjects />
		</>
	)
}

export default Projects
