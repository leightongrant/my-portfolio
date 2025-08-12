import { initializeApp } from 'firebase/app'

import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	doc,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APPID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Caching for auth instance to avoid re-initialization
let authInstance
const getAuthInstance = async () => {
	if (!authInstance) {
		const { getAuth } = await import('firebase/auth')
		authInstance = getAuth(app)
	}
	return authInstance
}

// Database
const db = getFirestore(app)

// Functions

/**
 * Get all Documents from firestore
 *
 * @async
 * @returns {Promise<Array|null>}
 */
async function getProjects() {
	try {
		const projects = await getDocs(collection(db, 'projects'))
		const data = []
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

/**
 * Get a project by project id
 *
 * @async
 * @param {string} id - projectId
 * @returns {Promise<Object|null>}
 */
async function getProject(id) {
	try {
		const docRef = doc(db, 'projects', id)
		const document = await getDoc(docRef)
		return {
			id: document.id,
			title: document.data().title,
			img_url: document.data().img_url,
			description: document.data().description,
			about: document.data().about,
			app_url: document.data().app_url,
			repo_url: document.data().repo_url,
		}
	} catch (error) {
		console.log(error)
		return null
	}
}

/**
 * function to add a new document to firestore
 *
 * @async
 * @param {Object} document
 * @param {string} document.title
 * @param {string} document.img_url
 * @param {string} document.description
 * @param {string} document.about
 * @param {string} document.app_url
 * @param {string} document.repo_url
 * @returns {Promise<void>}
 */
async function addProject(document) {
	try {
		const { addDoc } = await import('firebase/firestore')
		return await addDoc(collection(db, 'projects'), document)
	} catch (error) {
		console.log(error)
		return null
	}
}

/**
 * Update a document on firestore
 *
 * @async
 * @param {string} id - project id
 * @param {Object} updatedDocument
 * @param {string} updatedDocument.title
 * @param {string} updatedDocument.img_url
 * @param {string} updatedDocument.description
 * @param {string} updatedDocument.about
 * @param {string} updatedDocument.app_url
 * @param {string} updatedDocument.repo_url
 * @returns {Promise<Object|null>}
 */
async function updateProject(id, updatedDocument) {
	try {
		const { setDoc } = await import('firebase/firestore')
		const docRef = doc(db, 'projects', id)
		return await setDoc(docRef, updatedDocument)
	} catch (error) {
		console.log(error)
		return null
	}
}

/**
 * Delete a document from firestore
 *
 * @async
 * @param {string} id - project id
 * @returns {Promise<void>}
 */
async function deleteProject(id) {
	try {
		const { deleteDoc } = await import('firebase/firestore')
		const docRef = doc(db, 'projects', id)
		await deleteDoc(docRef)
	} catch (error) {
		console.log(error)
	}
}

async function logIn(email, password) {
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

async function getUser(setUser) {
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
	app,
	getUser,
	getProject,
	getProjects,
	addProject,
	updateProject,
	deleteProject,
}
