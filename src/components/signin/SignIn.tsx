import Stack from 'react-bootstrap/Stack'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useModalStore } from '../../lib/zustand.js'
import { useFirebaseStore } from '../../lib/zustand.js'
import { BiSolidUser } from 'react-icons/bi'
import Dropdown from 'react-bootstrap/Dropdown'
import { logOut } from '../../lib/firebase.js'
import type React from 'react'

// Types
type UserMenuProps = {
	children: React.ReactNode
	user: any
}

function UserMenu({ children, user }: UserMenuProps) {
	let { email } = user
	return (
		<Dropdown align={{ md: 'end' }}>
			<Dropdown.Toggle variant='transparent'>{children}</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item>User: {email}</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item onClick={logOut}>
					<IconContext.Provider
						value={{ className: 'logoutBtn fs-3 ' }}
					>
						<FaSignOutAlt /> Sign Out
					</IconContext.Provider>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

const SignIn = () => {
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)
	const user = useFirebaseStore(state => state.user)

	async function signInModal() {
		setMode('login')
		showModal()
	}

	const renderTooltip = (props: any) => (
		<Tooltip
			id='tooltip'
			{...props}
		>
			{user ? 'Logout' : 'Login'}
		</Tooltip>
	)

	if (user) {
		return (
			<Stack className='align-items-right justify-content-center'>
				<UserMenu user={user}>
					<IconContext.Provider
						value={{ className: 'logoutBtn fs-3 ' }}
					>
						<BiSolidUser />
					</IconContext.Provider>
				</UserMenu>
			</Stack>
		)
	}

	return (
		<OverlayTrigger
			placement='bottom'
			delay={{ show: 250, hide: 400 }}
			overlay={renderTooltip}
		>
			<Stack className='align-items-right justify-content-center'>
				<IconContext.Provider value={{ className: 'loginBtn fs-3' }}>
					<FaSignInAlt onClick={signInModal} />
				</IconContext.Provider>
			</Stack>
		</OverlayTrigger>
	)
}

export default SignIn
