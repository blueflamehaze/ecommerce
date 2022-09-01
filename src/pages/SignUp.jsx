import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";



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
			<h3 className="my-5">Sign up</h3>
			<form onSubmit={registerUser} id="registerUserData"> 
				<div className="row">
					<div className="col">
						<input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" name="first_name" value={userData.first_name || ""} onChange={handleUserData}/>
					</div>
					<div className="col"> 
						<input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" name="last_name" value={userData.last_name || ""} onChange={handleUserData}/>
					</div>
				
				</div>
				<div className="row">
					<div className="col">
						<input type="date" className="form-control" placeholder="Fecha de nacimiento" aria-label="Fecha de nacimiento" name="birth_date" value={userData.birth_date || ""} onChange={handleUserData}/>
					</div>
					<div className="col">
						<label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
						<select className="form-select" id="gender" name="gender" value={userData.gender || ""} onChange={handleUserData}>
							<option defaultValue>Elige...</option>
							<option value="M">Masculino</option>
							<option value="F">Femenino</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<input type="email" className="form-control" placeholder="Email" aria-label="Email" name="email" value={userData.email || ""} onChange={handleUserData}/>
					</div>
					<div className="col">
						<input type="password" className="form-control" placeholder="Password" aria-label="Password" name="password" value={userData.password || ""} onChange={handleUserData}/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<button type="submit">Enviar</button>
					</div>
				</div></form >
		
		</>
	);
};

export default SignUp;