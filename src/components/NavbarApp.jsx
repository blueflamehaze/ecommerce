import React, {useEffect,useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";
import personWhite from "../img/person_white_24dp.svg";
import localShipping from "../img/local_shipping_white_24dp.svg";

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
				<Link to="/" className="title navbar__element">
					<img src={localShipping} alt="Logo de carrito de compras" className="navbar__image" />	
					Ecommerce
				</Link>
				{/* <Navbar.Brand href="#" className="title">
				</Navbar.Brand> */}
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0 navbar__center"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link to="/" className="navbar__element">Home</Link>
					</Nav>
					{isUserLogged 
						? isUserLogged.isUserLogged 
							? (<>
								<img src={personWhite} alt="Logo de usuario" />	
								<span className="user">{isUserLogged.role}</span> 
							</>) 
							: (<><Link to="/signup" className="navbar__element">Sign up</Link>
								<Nav.Link href="/login" className="navbar__element">Login</Nav.Link></>) 
						: (<><Link to="/signup" className="navbar__element">Sign up</Link>
							<Nav.Link href="/login" className="navbar__element">Login</Nav.Link></>)
					}
					
					<Form className="d-flex align-items-center">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button className="search__btn">Search</Button>
						{isUserLogged 
							? isUserLogged.isUserLogged 
								? (<>
									<button onClick={resetLogin} className="logout__btn">Logout</button>
								</>) 
								: "" 
							: ""
						}
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarApp;