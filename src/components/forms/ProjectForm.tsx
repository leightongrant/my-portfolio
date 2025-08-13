import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import React, { useState, useEffect } from 'react'
import { useModalStore } from '../../lib/zustand'
import { useToastStore } from '../../lib/zustand'
import { addProject, getProject, updateProject } from '../../lib/firebase'

let formDataObj = {
	title: '',
	about: '',
	app_url: '',
	repo_url: '',
	img_url: '',
	description: '',
}

const ProjectForm = () => {
	const [formData, setFormData] = useState(formDataObj)

	const closeModal = useModalStore(state => state.closeModal)
	const showToast = useToastStore(state => state.showToast)
	const setResult = useToastStore(state => state.setResult)
	const projectId = useModalStore(state => state.projectId)
	const mode = useModalStore(state => state.mode)

	useEffect(() => {
		if (mode === 'editProject') {
			getProject(projectId)
				.then(project => {
					if (!project) throw new Error('Project not found')
					setFormData(project)
				})
				.catch(error => {
					console.log(error.message)
				})
		}
	}, [mode, projectId])

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { value, id } = e.target
		if (id === 'title') {
			setFormData(stateObj => ({ ...stateObj, title: value }))
		}
		if (id === 'about') {
			setFormData(stateObj => ({ ...stateObj, about: value }))
		}
		if (id === 'app-url') {
			setFormData(stateObj => ({ ...stateObj, app_url: value }))
		}
		if (id === 'repo-url') {
			setFormData(stateObj => ({ ...stateObj, repo_url: value }))
		}
		if (id === 'screenshot-url') {
			setFormData(stateObj => ({ ...stateObj, img_url: value }))
		}
		if (id === 'description') {
			setFormData(stateObj => ({ ...stateObj, description: value }))
		}
	}

	async function addDocument(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (mode === 'addProject') {
			addProject(formData)
				.then(doc => {
					if (!doc) throw new Error('Problems adding new document')
					setResult({
						message: `Project added successfully - id: ${doc.id}`,
						status: 'success',
					})
					showToast()
					closeModal()
				})
				.catch(error => {
					setResult({
						message: error.message,
						status: 400,
					})
					showToast()
				})
		}

		if (mode === 'editProject') {
			updateProject(projectId, formData).then(() => {
				setResult({
					message: `Project updated successfully`,
					status: 'success',
				})
				showToast()
				closeModal()
			})
		}
	}

	return (
		<Form
			className='fs-6'
			onSubmit={addDocument}
		>
			<FloatingLabel
				className='mb-3'
				label='Title'
				controlId='title'
			>
				<Form.Control
					type='text'
					className='form-control'
					placeholder='Project title'
					required
					value={formData.title}
					onChange={handleChange}
				/>
			</FloatingLabel>

			<FloatingLabel
				className='mb-3'
				label='About'
				controlId='about'
			>
				<Form.Control
					type='text'
					className='form-control '
					placeholder='About project'
					required
					value={formData.about}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel
				className='mb-3'
				label='App URL'
				controlId='app-url'
			>
				<Form.Control
					type='url'
					className='form-control'
					placeholder='App URL'
					required
					value={formData.app_url}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel
				className='mb-3'
				label='Repo URL'
				controlId='repo-url'
			>
				<Form.Control
					type='url'
					className='form-control'
					placeholder='Repo URL'
					required
					value={formData.repo_url}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel
				className='mb-3'
				label='Screenshot URL'
				controlId='screenshot-url'
			>
				<Form.Control
					type='url'
					className='form-control'
					placeholder='Screenshot URL'
					required
					value={formData.img_url}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel
				className='mb-3'
				label='Description'
				controlId='description'
			>
				<Form.Control
					as='textarea'
					className='form-control'
					placeholder='Enter description'
					required
					style={{ minHeight: '150px' }}
					rows={10}
					value={formData.description}
					onChange={handleChange}
				/>
			</FloatingLabel>

			<Button
				type='submit'
				className='add-project-btn float-end'
				data-bs-dismiss='modal'
			>
				{mode === 'addProject' ? 'Add project' : 'Update Project'}
			</Button>
		</Form>
	)
}

export default ProjectForm
