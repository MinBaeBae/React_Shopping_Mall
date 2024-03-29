import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavComponent = () => {
	let navigate = useNavigate()
	return (
		<>
			<Navbar fixed="top" bg="light" variant="light">
				<Container>
					<Navbar.Brand href="/">
						<img
							src={process.env.PUBLIC_URL + '/Logo.jpg'}
							width="40"
							height="40"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
						Bae Shopping
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link
							onClick={() => {
								navigate('/About')
							}}
						>
							About
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate('/Cart')
							}}
						>
							Cart
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}
export default NavComponent
