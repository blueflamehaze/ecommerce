import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import "./Home.css";



const SignUp = () => {
	const [userData, setUserData] = useState({});

	const navigate = useNavigate();

	const handleUserData = ({ target: { value, name } }) =>{
		setUserData({...userData, [name]: value});
	};

	const registerUser = async (e) =>{
		e.preventDefault();
		try {
			const isUserRegistered = await axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", userData);
			if(isUserRegistered.status == 200){
				alert("Usuario registrado");
				navigate("/login");
			} 
		} catch (error){
			console.error(error);
		}
		setUserData({});
	};

	
	return (
		<>
			<NavbarApp/>
			<h1 className="my-5 home__title">Sign up</h1>
			<div className="row justify-content-center mx-5">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="card" style={{width: "100%"}}>
						<form onSubmit={registerUser} id="registerUserData"> 
							<p>Por favor completa los datos para registrarte:</p>
							<div className="row justify-content-center my-3">
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" name="first_name" value={userData.first_name || ""} onChange={handleUserData}/>
								</div>
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"> 
									<input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" name="last_name" value={userData.last_name || ""} onChange={handleUserData}/>
								</div>
				
							</div>
							<div className="row justify-content-center mb-3">
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<input type="date" className="form-control" placeholder="Fecha de nacimiento" aria-label="Fecha de nacimiento" name="birth_date" value={userData.birth_date || ""} onChange={handleUserData}/>
								</div>
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
									<select className="form-select" id="gender" name="gender" value={userData.gender || ""} onChange={handleUserData}>
										<option defaultValue>Elige...</option>
										<option value="M">Masculino</option>
										<option value="F">Femenino</option>
									</select>
								</div>
							</div>
							<div className="row justify-content-center mb-5">
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<input type="email" className="form-control" placeholder="Email" aria-label="Email" name="email" value={userData.email || ""} onChange={handleUserData}/>
								</div>
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<input type="password" className="form-control" placeholder="Password" aria-label="Password" name="password" value={userData.password || ""} onChange={handleUserData}/>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<button type="submit" className="product__btn">Enviar</button>
								</div>
							</div></form >
					</div>
					
				</div>
			</div>
		
		
		</>
	);
};

export default SignUp;