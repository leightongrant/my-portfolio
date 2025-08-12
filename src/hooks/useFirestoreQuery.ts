import { useState, useEffect } from 'react'

/**
 * A custom hook to fetch data from Firestore and handle loading/error states.
 * @param {Function} queryFn - The async function that performs the Firestore query.
 * @param {Array} deps - The dependency array for the useEffect hook.
 * @returns {{data: any, error: string|null, loading: boolean}}
 */
export function useFirestoreQuery(queryFn, deps = []) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

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
