import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
/**
 * PageBanner renders a banner with a title and background image.
 *
 * @param {{ pageTitle: string, bannerBg: string }} props
 * @prop {string} [pageTitle] Title to render in the banner. If not provided, no title is rendered.
 * @prop {string} [bannerBg] URL of the background image for the banner. If not provided,
 * a default gradient is used.
 * @returns {JSX.Element}
 */
export default function PageBanner({ pageTitle, bannerBg }) {
	const bgImage = {
		backgroundImage: bannerBg
			? `url(${bannerBg})`
			: `linear-gradient(to left,var(--lg-light), var(--lg-dark))`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
		marginTop: 61,
	}
	const overlay = {
		backgroundColor: 'var(--lg-dark-75)',
	}
	return (
		<Stack style={bgImage}>
			<Stack className='banner-padding' style={overlay}>
				<Container>
					<div className='display-4 text-light text-capitalize banner-title'>
						{pageTitle ? pageTitle : ''}
					</div>
				</Container>
			</Stack>
		</Stack>
	)
}
