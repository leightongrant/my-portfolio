import { create } from 'zustand'
interface ModalStore {
	show: boolean
	mode: string
	projectId: string
	setProjectId: (id: string) => void
	setMode: (m: string) => void
	showModal: () => void
	closeModal: () => void
	toggle: () => void
}

export const useModalStore = create<ModalStore>(set => ({
	show: false,
	mode: '',
	projectId: '',
	setProjectId: (id: string) => set({ projectId: id }),
	setMode: (m: string) => set({ mode: m }),
	showModal: () => set({ show: true }),
	closeModal: () => set({ show: false }),
	toggle: () => set(state => ({ show: !state.show })),
}))

interface ToastResult {
	message: string
	status: string | number
}

interface ToastStore {
	show: boolean
	result: ToastResult
	setResult: (result: ToastResult) => void
	showToast: () => void
	closeToast: () => void
	toggle: () => void
}

export const useToastStore = create<ToastStore>(set => ({
	show: false,
	result: { message: '', status: '' },
	setResult: (result: ToastResult) => set({ result }),
	showToast: () => set({ show: true }),
	closeToast: () => set({ show: false }),
	toggle: () => set(state => ({ show: !state.show })),
}))

interface AuthStore {
	session: any // Replace 'any' with a more specific type if available
	setSession: (session: any) => void // Replace 'any' with a more specific type if available
}

export const useAuthStore = create<AuthStore>(set => ({
	session: null,
	setSession: (session: any) => set({ session }),
}))

interface FirebaseUser {
	// Add properties as needed, e.g.:
	uid?: string
	email?: string
	// You can extend this interface based on your Firebase user object
}

interface FirebaseStore {
	user: FirebaseUser | null
	setUser: (user: FirebaseUser | null) => void
}

export const useFirebaseStore = create<FirebaseStore>(set => ({
	user: null,
	setUser: (user: FirebaseUser | null) => set({ user }),
}))
