import { useNavigate } from 'react-router'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const ContactForm = () => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		try {
			const myForm = e.target as HTMLFormElement
			if (!myForm) {
				throw new Error('No form found.')
			}

			const formData = new FormData(myForm)
			const formValues = {
				'form-name': formData.get('form-name'),
				name: formData.get('name'),
				email: formData.get('email'),
				message: formData.get('message'),
			}

			const formDataString = new URLSearchParams(
				formValues as Record<string, string>
			)

			fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formDataString.toString(),
			})
				.then(response => {
					if (response.ok) {
						navigate('/thanks')
					} else {
						throw new Error('Network response was not OK.')
					}
				})
				.catch(error => {
					console.error('Error:', error?.message)
					alert(error?.message)
				})
		} catch (error) {
			console.log(error)
			alert(error)
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name: inputName, value } = e.target
		if (inputName === 'name') {
			setName(value)
		} else if (inputName === 'email') {
			setEmail(value)
		} else if (inputName === 'message') {
			setMessage(value)
		}
	}

	return (
		<Form
			name='contact'
			method='POST'
			onSubmit={handleSubmit}
			data-netlify={true}
		>
			<Stack gap={4}>
				<input
					type='hidden'
					name='form-name'
					value='contact'
				/>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter your name'
						name='name'
						pattern='[A-Za-z ]*'
						required
						className='form-control'
						value={name}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter your email'
						name='email'
						pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
						required
						className='form-control'
						value={email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='message'>
					<Form.Label>Message</Form.Label>
					<Form.Control
						as='textarea'
						placeholder='Enter your message'
						name='message'
						rows={5}
						pattern='^(?!\s*$).+'
						required
						className='form-control'
						value={message}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button
					className='btn rounded border-0'
					style={{ backgroundColor: 'var(--lg-dark)' }}
					type='submit'
				>
					Send Message
				</Button>
			</Stack>
		</Form>
	)
}
export default ContactForm
