import React, {useEffect,useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarApp = () => {
	const [isUserLogged, setIsUserLogged] = useState({});

	useEffect(() => {
		const logged = localStorage.getItem("isUserLogged");
		const jsonLogged = JSON.parse(logged);		
		setIsUserLogged(jsonLogged);
	}, []); 
	

	const resetLogin = () =>{
		localStorage.clear();
		setIsUserLogged({});
	};
		
	
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">Ecommerce</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link to="/">Home</Link>		
						{isUserLogged ? isUserLogged.isUserLogged ? (<>
							<p>{isUserLogged.role}</p> <button onClick={resetLogin}>Logout</button>
						</>) : (<><Link to="/signup">Sign up</Link>
							<Nav.Link href="/login">Login</Nav.Link></>) : (<><Link to="/signup">Sign up</Link>
							<Nav.Link href="/login">Login</Nav.Link></>)}
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarApp;