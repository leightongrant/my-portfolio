import { ProjectCard } from './ProjectCard'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { MdAdd } from 'react-icons/md'
import Button from 'react-bootstrap/Button'
import { useFirebaseStore, useModalStore } from '../../lib/zustand'
import { useToastStore } from '../../lib/zustand'
import { getProjects } from '../../lib/firebase'
import { useFirestoreQuery } from '../../hooks/useFirestoreQuery'
import { lazy } from 'react'

const ServerError = lazy(() =>
	import('../../components/placeholders/ServerError').then(module => ({
		default: module.ServerError,
	}))
)
const ProjectsSkeleton = lazy(() =>
	import('../../components/placeholders/ProjectsSkeleton').then(module => ({
		default: module.ProjectsSkeleton,
	}))
)

const BootcampProjects = () => {
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)
	const result = useToastStore(state => state.result)
	const user = useFirebaseStore(state => state.user)

	const handleAddProject = () => {
		setMode('addProject')
		showModal()
	}

	const {
		data: firestoreData,
		error,
		loading,
	} = useFirestoreQuery(getProjects, [result])

	if (error) {
		return <ServerError />
	}

	if (loading) {
		return <ProjectsSkeleton />
	}

	return (
		<main
			id='skills-bootcamp'
			className='section-padding px-3'
		>
			<Container>
				<Row>
					<h1 className='title-padding text-center display-5'>
						Skills Bootcamp Projects
					</h1>
				</Row>
				<Row className='justify-content-center'>
					{user && (
						<Button
							onClick={handleAddProject}
							className='add-project-btn mb-5 w-25'
						>
							Add a new project <MdAdd />
						</Button>
					)}
				</Row>
				<Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
					{firestoreData?.map(project => {
						const { title, img_url, about, app_url, repo_url, id } =
							project
						if (!id) {
							console.log('Id not found')
							return
						}
						return (
							<ProjectCard
								title={title}
								img={img_url}
								about={about}
								app_url={app_url}
								repo_url={repo_url}
								key={id}
								id={id}
							/>
						)
					})}
				</Row>
			</Container>
		</main>
	)
}

export default BootcampProjects
