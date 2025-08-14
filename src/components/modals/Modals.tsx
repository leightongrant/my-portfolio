import Modal from 'react-bootstrap/Modal'
import { useModalStore } from '../../lib/zustand'
import ProjectForm from '../forms/ProjectForm'
import SignInForm from '../forms/SignInForm'
import { Confirm } from '../../pages/projects/ProjectCard'

function MainModal() {
	const show = useModalStore(state => state.show)
	const closeModal = useModalStore(state => state.closeModal)
	const mode = useModalStore(state => state.mode)

	return (
		<Modal show={show} onHide={closeModal} centered>
			<Modal.Header closeButton>
				<Modal.Title as={'h6'}>
					{mode === 'addProject' && 'Add Project'}
					{mode === 'editProject' && 'Edit Project'}
					{mode === 'login' && 'Login'}
					{mode === 'deleteProject' && 'Confirm Delete'}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='bg-light'>
				{mode === 'addProject' && <ProjectForm />}
				{mode === 'editProject' && <ProjectForm />}
				{mode === 'login' && <SignInForm />}
				{mode === 'deleteProject' && <Confirm />}
			</Modal.Body>
		</Modal>
	)
}

export default MainModal
