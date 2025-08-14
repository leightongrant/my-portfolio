import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

type PageBannerProps = {
	pageTitle: string
	bannerBg: string
}

export default function PageBanner({ pageTitle, bannerBg }: PageBannerProps) {
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
			<Stack
				className='banner-padding'
				style={overlay}
			>
				<Container>
					<div className='display-4 text-light text-capitalize banner-title'>
						{pageTitle ? pageTitle : ''}
					</div>
				</Container>
			</Stack>
		</Stack>
	)
}
