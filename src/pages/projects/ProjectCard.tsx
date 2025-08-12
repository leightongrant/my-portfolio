import { RiExternalLinkFill } from 'react-icons/ri'
import { HiLink } from 'react-icons/hi'
import slugify from '../../utils/slugify'
import { useNavigate } from 'react-router'
import { useFirebaseStore, useModalStore } from '../../lib/zustand'
import { useToastStore } from '../../lib/zustand'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'
import { RiDeleteBinFill, RiEdit2Fill } from 'react-icons/ri'
import { deleteProject } from '../../lib/firebase'

export const Confirm = () => {
	const closeModal = useModalStore(state => state.closeModal)
	const projectId = useModalStore(state => state.projectId)
	const showToast = useToastStore(state => state.showToast)
	const setResult = useToastStore(state => state.setResult)

	async function handleDelete(id) {
		deleteProject(id)
			.then(() => {
				setResult({
					message: `Project deleted successfully`,
					status: 'success',
				})
				closeModal()
				showToast()
			})
			.catch(error => {
				setResult({ message: error.message, status: 404 })
				showToast()
			})
	}

	return (
		<Stack className='flex-row gap-2'>
			<Button
				variant='danger'
				className='margin-auto'
				onClick={() => handleDelete(projectId)}
			>
				Confirm
			</Button>
			<Button
				variant='secondary'
				className='margin-auto'
				onClick={closeModal}
			>
				Cancel
			</Button>
		</Stack>
	)
}

function ProjectCard({ title, img, about, app_url, repo_url, id }) {
	const navigate = useNavigate()
	const user = useFirebaseStore(state => state.user)

	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)
	const setProjectId = useModalStore(state => state.setProjectId)

	const handleConfirm = () => {
		setProjectId(id)
		setMode('deleteProject')
		showModal()
	}

	async function handleEdit(_, id) {
		setMode('editProject')
		setProjectId(id)
		showModal()
	}

	return (
		<Col className='mb-4'>
			<Card className='shadow bg-light project-card'>
				<Card.Img
					src={img}
					className='card-img-top'
					alt={title}
					loading='eager'
					title={title}
					width={259}
					height={194}
					style={{ objectFit: 'cover', objectPosition: '0 0' }}
				/>
				<Card.Body>
					<Card.Title
						as={'h2'}
						className='display-6 fs-5'
					>
						{title}
					</Card.Title>
					<Card.Text className='card-text fs-6'>{about}</Card.Text>
				</Card.Body>
				<Card.Footer className='card-footer py-3'>
					<Stack
						direction='horizontal'
						gap={2}
						className='justify-content-center'
					>
						<Link
							to={app_url}
							target='_blank'
							rel='noreferrer'
							className='btn btn-sm projectBtn flex-grow-1 border-0'
						>
							App <RiExternalLinkFill />
						</Link>
						<Link
							to={repo_url}
							target='_blank'
							rel='noreferrer'
							className='btn btn-sm projectBtn flex-grow-1 border-0'
						>
							Repo <RiExternalLinkFill />
						</Link>
						<Button
							type='button'
							className='btn btn-sm projectBtn flex-grow-1 border-0'
							onClick={e => {
								e.preventDefault()
								const slug = slugify(title)
								navigate(`/projects/${slug}-${id}`)
							}}
						>
							Details <HiLink />
						</Button>
					</Stack>
					{user && (
						<Stack
							className='justify-content-center mt-2'
							gap={2}
						>
							<Button
								type='button'
								className='btn btn-danger btn-sm'
								onClick={handleConfirm}
							>
								Delete Project <RiDeleteBinFill />
							</Button>

							<Button
								type='button'
								className='btn btn-warning btn-sm'
								onClick={e => handleEdit(e, id)}
							>
								Edit Project <RiEdit2Fill />
							</Button>
						</Stack>
					)}
				</Card.Footer>
			</Card>
		</Col>
	)
}

export { ProjectCard }
