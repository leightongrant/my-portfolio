import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/contact-bg.webp'
import Container from 'react-bootstrap/Container'
import ContactForm from '../../components/forms/ContactForm'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Stack } from 'react-bootstrap'
import { GitHub, LinkedIn, Email, Phone } from '../../components/social'
import Breadcrumbs from '../../components/breadcrumb'
import Metadata from '../../metadata'

const Contact = () => {
	return (
		<>
			<Metadata
				title='Contact Me'
				description={`Let's connect! Whether you're interested in collaborating on a project, discussing a new idea, or just want to say hello, I'd love to hear from you.`}
				keywords='Contact, Web Developer, Frontend Engineer, Collaboration, Project Inquiry, Career Opportunities, Networking, Get in Touch'
				canonical='https://leightongrant.me/contact'
				image='https://leightongrant.me/og-image.webp'
				imageAlt='Leighton Grant Portfolio'
			/>
			<PageBanner pageTitle='Contact Me' bannerBg={bg} />
			<Breadcrumbs />
			<main className='section-padding px-3'>
				<Container>
					<Row className='row-cols-1 row-cols-lg-2 g-5'>
						<Col>
							<Container>
								<Stack gap={4}>
									<h1 className='fs-2'>Send Me a Message or Inquiry</h1>
									<ContactForm />
								</Stack>
							</Container>
						</Col>
						<Col>
							<Container>
								<Stack gap={4} className='d-inline-flex'>
									<h2 className='fs-2'>Social & Professional Links</h2>
									<Stack gap={2}>
										<GitHub className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											github.com/leightongrant
										</GitHub>
										<LinkedIn className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											linkedin.com/in/leightongrant
										</LinkedIn>
										<Email className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											dev@leightongrant.me
										</Email>
										<Phone className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											+447886028826
										</Phone>
									</Stack>
								</Stack>
							</Container>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	)
}

export default Contact
