import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { useState } from 'react'
import Fade from 'react-bootstrap/Fade'
import { useModalStore } from '../../lib/zustand.js'
import { logIn } from '../../lib/firebase.js'

const SignInForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const closeModal = useModalStore(state => state.closeModal)

	const handleLogin = async e => {
		e.preventDefault()
		const err = await logIn(email, password)
		if (err) {
			setError(err.message)
		} else {
			closeModal()
		}
	}

	const handleChange = e => {
		const { type, value } = e.target
		if (type === 'email') {
			setEmail(value)
		} else if (type === 'password') {
			setPassword(value)
		}
	}

	return (
		<Container>
			<Form onSubmit={handleLogin}>
				<Stack gap={3}>
					<Form.Group
						className='mb-3'
						controlId='formEmail'
					>
						<Form.Label className='fs-6'>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={handleChange}
							required
						/>
					</Form.Group>

					<Form.Group
						className='mb-3'
						controlId='formPassword'
					>
						<Form.Label className='fs-6'>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							value={password}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Button
						variant='secondary'
						type='submit'
						disabled={!email || !password}
						style={{ backgroundColor: 'hsla(240, 15%, 19%, 1)' }}
						className='sign-in-btn'
					>
						Sign In
					</Button>
				</Stack>
				<Stack className='mt-3'>
					<Fade in={!!error}>
						<small className='text-danger text-center'>
							{error}
						</small>
					</Fade>
				</Stack>
			</Form>
		</Container>
	)
}

export default SignInForm
