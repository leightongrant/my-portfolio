import { BsArrowLeft } from 'react-icons/bs'

function Thanks() {
	return (
		<div
			className='thanks-page vh-100 d-flex align-items-center'
			style={{ backgroundColor: '#e8e7e6' }}
		>
			<div className='container d-flex align-items-center justify-content-around'>
				<div className='card shadow' style={{ width: '24rem' }}>
					<div className='card-body'>
						<h4 className='text-dark'>Thank You</h4>
						<p>Your message has been received!</p>

						<a href='/'>
							<BsArrowLeft /> Back to my portfolio
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Thanks
