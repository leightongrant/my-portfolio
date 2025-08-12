import {
	BsEnvelopeFill,
	BsPhoneFill,
	BsFilePdfFill,
	BsDownload,
} from 'react-icons/bs'

import Cv from '../../assets/LeightonGrant.pdf'
import Container from 'react-bootstrap/Container'

const OtherContactInfo = () => {
	return (
		<section id='contact-details' className='padding-lg'>
			<Container>
				<h2 className='section-title'>Other Contact Info</h2>
				<div className='container my-5 contact-info'>
					<div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3  d-flex justify-content-between'>
						<div className='col'>
							<div className='card py-3 shadow'>
								<div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
									<span className='fs-4'>
										<a
											href='mailto:oneal.grant@outlook.com'
											style={{ textDecoration: 'none' }}
										>
											<BsEnvelopeFill />
										</a>
									</span>
									<h6 className='card-title'>EMAIL</h6>
									<div className='border border-top-3 border-secondary w-50'></div>
									<p className='card-text'>
										<a
											href='mailto:dev@leightongrant.me'
											style={{ textDecoration: 'none' }}
										>
											dev@leightongrant.me
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card py-3 shadow'>
								<div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
									<span className='fs-4'>
										<a
											href='tel:07886028826'
											style={{ textDecoration: 'none' }}
										>
											<BsPhoneFill />
										</a>
									</span>
									<h6 className='card-title'>PHONE</h6>
									<div className='border border-top-3 border-secondary w-50'></div>
									<p className='card-text'>
										<a
											href='tel:07886028826'
											style={{ textDecoration: 'none' }}
										>
											+447886028826
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card py-3 shadow'>
								<div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
									<span className='fs-4'>
										<a href={Cv} download style={{ textDecoration: 'none' }}>
											<BsFilePdfFill />
										</a>
									</span>
									<h6 className='card-title'>CV</h6>
									<div className='border border-top-3 border-secondary w-50'></div>
									<p className='card-text'>
										<a href={Cv} download style={{ textDecoration: 'none' }}>
											<BsDownload />
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default OtherContactInfo
