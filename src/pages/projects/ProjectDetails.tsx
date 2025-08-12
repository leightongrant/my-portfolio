import { useParams } from 'react-router'
import PageBanner from '../../components/pagebanner/PageBanner'
import Breadcrumbs from '../../components/breadcrumb'
import { lazy, Suspense, useCallback } from 'react'
import { Loading, ServerError } from '../../components/placeholders'
import { getProject } from '../../lib/firebase'
import { useFirestoreQuery } from '../../hooks/useFirestoreQuery'

const Details = lazy(() => import('./Details'))

function ProjectDetails() {
	const { slug } = useParams()

	// The ID is the last part of the slug, after the last hyphen.
	const id = slug.split('-').pop()

	const fetchProject = useCallback(async () => {
		const projectData = await getProject(id)
		if (!projectData) throw new Error('Project not found')
		return projectData
	}, [id])

	const {
		data: project,
		error,
		loading,
	} = useFirestoreQuery(fetchProject, [id])

	if (loading) {
		return (
			<>
				<PageBanner pageTitle={'Project Details'} />
				<Breadcrumbs />
				<Loading />
			</>
		)
	}

	if (error) {
		return (
			<>
				<PageBanner pageTitle={'Error'} />
				<Breadcrumbs />
				<ServerError />
			</>
		)
	}

	return (
		<>
			<PageBanner pageTitle={project.title} />
			<Breadcrumbs pageTitle={project.title} />
			<Suspense fallback={<Loading />}>
				<Details project={project} />
			</Suspense>
		</>
	)
}

export default ProjectDetails
