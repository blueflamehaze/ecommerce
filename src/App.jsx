import React, { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {  (
		async () =>{
			try {
				const  {data}  = await axios.get(
					"https://ecomerce-master.herokuapp.com/api/v1/item"
				);
				localStorage.setItem("products", products);	
				const dataCopy= data.slice(1,50);
				setProducts(dataCopy);
			} catch (error){
				console.error(error);
			}
		}
	)();		
	}, []);
	

	return (
		<>
			
			<Routes>
				<Route path="/" element={<Home products={products} />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/product/:id" element={<ProductDetail />}></Route>					
				<Route path="*" element={<h3>Error 404</h3>}></Route>
			</Routes>
		</>
	
		
	);
}

export default App;
