import profile from '../../assets/profile_thumb.webp'
import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/about-bg.webp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import keySkills from '../../../src/assets/key-skills.webp'
import ListGroup from 'react-bootstrap/ListGroup'
import Breadcrumbs from '../../components/breadcrumb/breadcrumb'
import Metadata from '../../metadata/SiteMetadata'

function About() {
	return (
		<>
			<Metadata
				title='About'
				description='As a highly motivated and detail-oriented frontend web developer, I specialize in crafting modern web solutions that deliver exceptional user experiences.'
				keywords='Frontend Web Developer, Web Developer, HTML, CSS, JavaScript, React, Responsive Web Design,Problem-Solving, Nodejs, Git, GitHub'
				canonical='https://leightongrant.me/about'
				image='https://leightongrant.me/og-image.webp'
				imageAlt='Leighton Grant Portfolio'
			/>
			<PageBanner
				pageTitle='About me'
				bannerBg={bg}
			/>
			<Breadcrumbs />
			<main
				className='about-page section-padding px-3'
				id='about-me'
			>
				<Container>
					<h1
						className='text-center title-padding display-5'
						style={{ textWrap: 'balance' }}
					>
						Passionate Frontend Web Developer Crafting Modern Web
						Solutions
					</h1>
					<Row className='row-cols-1 row-cols-lg-2 g-5'>
						<Col>
							<Image
								className='img-fluid rounded'
								src={profile}
								alt='Leighton Grant Frontend Web Developer'
								title='Leighton Grant Frontend Web Developer'
								loading='eager'
								width={800}
								height={800}
							/>
						</Col>

						<Col className=' about-info'>
							<p className='lead'>
								Hi, I'm Leighton Grant, a passionate Frontend
								Web Developer based in the UK. I specialise in
								building modern, responsive websites and web
								applications using HTML, CSS, JavaScript, and
								React. My goal is to create seamless and
								intuitive user experiences that meet the needs
								of both businesses and their users.
							</p>
							<p>
								My journey into web development began with a
								personal passion for coding, which I pursued for
								over five years in my spare time. This passion
								led me to pursue formal training through EdX, a
								reputable online learning platform created by
								Harvard and MIT, where I gained a comprehensive
								understanding of web development principles and
								best practices.
							</p>
							<p>
								Before transitioning to web development, I
								worked as an electronics technician. This
								experience equipped me with valuable
								problem-solving skills and a meticulous
								attention to detail, which I now apply to my
								work as a developer.
							</p>
							<p>
								I'm excited to collaborate with forward-thinking
								teams and contribute to projects that push the
								boundaries of web development. I am eager to use
								my skills and passion to create innovative
								solutions.
							</p>
						</Col>
					</Row>
				</Container>
			</main>

			<section
				id='key-skills'
				className='section-padding px-3'
				style={{ backgroundColor: 'var(--lg-light)' }}
			>
				<Container>
					<h2 className='text-center title-padding display-5'>
						Key Skills
					</h2>
					<Row className='row-cols-1 row-cols-lg-2 g-5'>
						<Col>
							<ListGroup>
								<ListGroup.Item
									active
									style={{
										fontWeight: 'bold',
										backgroundColor: 'var(--lg-dark)',
										textAlign: 'center',
										border: 'none',
									}}
									as={'h3'}
									className='fs-4'
								>
									My Skills
								</ListGroup.Item>
								<ListGroup.Item>
									Proficient in HTML, CSS, JavaScript,
									TypeScript, React, Nodejs
								</ListGroup.Item>
								<ListGroup.Item>
									Strong understanding of responsive web
									design techniques
								</ListGroup.Item>
								<ListGroup.Item>
									An understanding of version control systems
									such as Git/GitHub
								</ListGroup.Item>
								<ListGroup.Item>
									Knowledge of performance testing frameworks
									including Vite and Jest
								</ListGroup.Item>
								<ListGroup.Item>
									Experience working with APIs, including
									integrating and utilising them effectively
									in projects.
								</ListGroup.Item>
								<ListGroup.Item>
									Experience with browser-based debugging and
									performance testing software
								</ListGroup.Item>
								<ListGroup.Item>
									Excellent problem-solving skills
								</ListGroup.Item>
								<ListGroup.Item>
									Strong verbal and written communication
									skills
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col>
							<Image
								src={keySkills}
								alt='Frontend Web Developer'
								width={800}
								height={800}
								title='Frontend Web Developer'
								loading='lazy'
								className='img-fluid rounded'
							/>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default About
