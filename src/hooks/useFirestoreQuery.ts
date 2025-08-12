import { useState, useEffect } from 'react'

interface FirestoreQueryResult<T> {
	data: T | null
	error: string | null
	loading: boolean
}

type QueryFn<T> = () => Promise<T>

export function useFirestoreQuery<T>(
	queryFn: QueryFn<T>,
	deps: any[] = []
): FirestoreQueryResult<T> {
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		setLoading(true)
		setError(null)

		queryFn()
			.then(result => {
				setData(result)
			})
			.catch(err => {
				console.error(err)
				setError(err.message)
			})
			.finally(() => setLoading(false))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps)

	return { data, error, loading }
}
