import { useNavigate } from 'react-router'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
/**
 * A component that renders a contact form with fields for name, email, and
 * message. The form is submitted to the root URL of the site.
 *
 * @return {ReactElement} A React component that renders a contact form.
 */
const ContactForm = () => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	/**
	 * Submits the contact form to the root URL of the site.
	 *
	 * @function
	 * @param {Event} e - The event that triggered the form submission.
	 *
	 * @returns {Promise<void>} - A promise that the form submission has been
	 *   handled.
	 */
	function handleSubmit(e) {
		e?.preventDefault()

		try {
			const myForm = e?.target
			if (!myForm) {
				throw new Error('No form found.')
			}

			const formData = new FormData(myForm)
			const formDataString = new URLSearchParams(formData).toString()

			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formDataString,
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
			console.error('Error:', error?.message)
			alert(error?.message)
		}
	}

	const handleChange = e => {
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
		<Form name='contact' method='POST' onSubmit={handleSubmit}>
			<Stack gap={4}>
				<input type='hidden' name='form-name' value='contact' />
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
