import React, {useEffect,useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";

const NavbarApp = ({userLoginState}) => {
	const [isUserLogged, setIsUserLogged] = useState({});

	useEffect(() => {
		const logged = localStorage.getItem("isUserLogged");
		const jsonLogged = JSON.parse(logged);		
		setIsUserLogged(jsonLogged);
	}, []); 
	

	const resetLogin = () =>{
		localStorage.clear();
		setIsUserLogged({});
		userLoginState ({});	
	};
		
	
	return (
		<Navbar className="navbar__bg" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#" className="title">Ecommerce</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0 navbar__center"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link to="/" className="navbar__element">Home</Link>		
						{isUserLogged ? isUserLogged.isUserLogged ? (<>
							<span className="user">{isUserLogged.role}</span> <button onClick={resetLogin} className="logout__btn">Logout</button>
						</>) : (<><Link to="/signup" className="navbar__element">Sign up</Link>
							<Nav.Link href="/login" className="navbar__element">Login</Nav.Link></>) : (<><Link to="/signup" className="navbar__element">Sign up</Link>
							<Nav.Link href="/login" className="navbar__element">Login</Nav.Link></>)}
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button className="search__btn">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarApp;