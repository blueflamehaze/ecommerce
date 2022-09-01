import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import "./Home.css";

const Login = () => {
	const [loginData, setLoginData] = useState({});

	const navigate = useNavigate();

	const handleLoginData = ({ target: { value, name } }) =>{
		setLoginData({...loginData, [name]: value});
	};

	const userLogin = async (e)=>{
		e.preventDefault();
		try {
			const isUserLogged = await axios.post("https://ecomerce-master.herokuapp.com/api/v1/login", loginData);
			if(isUserLogged.status === 200){
				localStorage.setItem("isUserLogged", JSON.stringify({isUserLogged: true, role: isUserLogged.data.role}) );
				alert("Usuario logeado");
				navigate("/");
			} 
		} catch (error){
			console.error(error);
		}
	};
  

	return (
		<>
			<NavbarApp/>
			<h1 className="my-5 home__title">Login</h1>
			<div className="row justify-content-center mx-5">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="card" style={{width: "100%"}}>
						<form onSubmit={userLogin} id="login">
							<p>Por favor completa los datos para iniciar sesión.</p>
							<div className="row justify-content-center my-3">
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<input type="email" className="form-control" placeholder="Email" aria-label="Email" name="email" value={loginData.email || "" } onChange={handleLoginData}/>
								</div>
								<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<input type="password" className="form-control" placeholder="Password" aria-label="Password" name="password" value={loginData.password  || ""} onChange={handleLoginData}/>
								</div>
							</div>
							<div className="row justify-content-center mb-5">
								<div className="col">
									<button type="submit" className="product__btn">Enviar</button>
								</div>
							</div>
						</form >
					</div>
				</div>
			</div>
		
		</>
	);
};

export default Login;