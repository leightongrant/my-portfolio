const Metadata = ({
	title,
	description,
	keywords,
	canonical,
	imageAlt,
	image,
}) => (
	<>
		<title>{`Leighton Grant's Portfolio | ${title}`}</title>
		<link rel='canonical' href={canonical} />
		<meta name='description' content={description} />
		<meta name='keywords' content={keywords} />
		<meta property='og:title' content={title} />
		<meta property='og:image' content={image} />
		<meta property='og:url' content={canonical} />
		<meta property='og:image:alt' content={imageAlt} />
		<meta property='og:description' content={description} />
		<meta property='og:locale' content='en_GB' />
		<meta property='og:type' content='website' />
		<meta property='og:site_name' content='Leighton Grant Portfolio' />
		<meta name='twitter:site' content='@misterouija' />
		<meta name='twitter:creator' content='@misterouija' />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:title' content={title} />
		<meta name='twitter:description' content={description} />
		<meta name='twitter:image' content={image} />
		<meta name='twitter:image:alt' content={imageAlt} />
		<meta name='robots' content='index, follow' />
	</>
)

export default Metadata
