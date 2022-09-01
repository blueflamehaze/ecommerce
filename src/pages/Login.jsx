import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
		<><h3 className="my-5">Login</h3>
			<form onSubmit={userLogin} id="login">
				<div className="row">
					<div className="col">
						<input type="email" className="form-control" placeholder="Email" aria-label="Email" name="email" value={loginData.email || "" } onChange={handleLoginData}/>
					</div>
					<div className="col">
						<input type="password" className="form-control" placeholder="Password" aria-label="Password" name="password" value={loginData.password  || ""} onChange={handleLoginData}/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<button type="submit">Enviar</button>
					</div>
				</div>
			</form >
		</>
	);
};

export default Login;