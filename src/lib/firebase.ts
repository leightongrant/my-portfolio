import type { Project } from '../types'

// Caching for auth instance to avoid re-initialization
let authInstance: import('firebase/auth').Auth | undefined
const getAuthInstance = async () => {
	if (!authInstance) {
		const { getAuth } = await import('firebase/auth')
		const { app } = await import('./firebaseInit')
		authInstance = getAuth(app)
	}
	return authInstance
}

// Functions
async function getProjects() {
	try {
		const { collection, getDocs } = await import('firebase/firestore')
		const { db } = await import('./firebaseInit')
		const projects = await getDocs(collection(db, 'projects'))
		const data: Project[] = []
		projects.forEach(doc => {
			data.push({
				id: doc.id,
				title: doc.data().title,
				img_url: doc.data().img_url,
				description: doc.data().description,
				about: doc.data().about,
				app_url: doc.data().app_url,
				repo_url: doc.data().repo_url,
			})
		})

		return data
	} catch (error) {
		console.log(error)
		return null
	}
}

async function getProject(id: string) {
	try {
		const { getDoc, doc } = await import('firebase/firestore')
		const { db } = await import('./firebaseInit')
		const docRef = doc(db, 'projects', id)
		const document = await getDoc(docRef)
		const project: Project = {
			id: document.id,
			title: document.data()?.title,
			img_url: document.data()?.img_url,
			description: document.data()?.description,
			about: document.data()?.about,
			app_url: document.data()?.app_url,
			repo_url: document.data()?.repo_url,
		}
		return project
	} catch (error) {
		console.log(error)
		return null
	}
}

async function addProject(document: Project) {
	try {
		const { addDoc, collection } = await import('firebase/firestore')
		const { db } = await import('./firebaseInit')
		return await addDoc(collection(db, 'projects'), document)
	} catch (error) {
		console.log(error)
		return null
	}
}

async function updateProject(id: string, updatedDocument: Project) {
	try {
		const { setDoc, doc } = await import('firebase/firestore')
		const { db } = await import('./firebaseInit')
		const docRef = doc(db, 'projects', id)
		return await setDoc(docRef, updatedDocument)
	} catch (error) {
		console.log(error)
		return null
	}
}

async function deleteProject(id: string) {
	try {
		const { deleteDoc, doc } = await import('firebase/firestore')
		const { db } = await import('./firebaseInit')
		const docRef = doc(db, 'projects', id)
		await deleteDoc(docRef)
	} catch (error) {
		console.log(error)
	}
}

async function logIn(email: string, password: string) {
	try {
		const auth = await getAuthInstance()
		const { signInWithEmailAndPassword } = await import('firebase/auth')
		await signInWithEmailAndPassword(auth, email, password)
	} catch (error) {
		console.log(error)
		return new Error('Invalid Email or Password')
	}
}

async function logOut() {
	try {
		const auth = await getAuthInstance()
		const { signOut } = await import('firebase/auth')
		await signOut(auth)
	} catch (error) {
		console.log(error)
	}
}

async function getUser(setUser: any) {
	const auth = await getAuthInstance()
	const { onAuthStateChanged } = await import('firebase/auth')
	onAuthStateChanged(auth, user => {
		if (user) {
			setUser(user)
			return
		}
		setUser(null)
	})
}

export {
	logIn,
	logOut,
	getUser,
	getProject,
	getProjects,
	addProject,
	updateProject,
	deleteProject,
}
