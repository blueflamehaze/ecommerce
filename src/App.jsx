import React, { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {  (
		async () =>{
			try {
				const  {data}  = await axios.get(
					"https://ecomerce-master.herokuapp.com/api/v1/item"
				);	
				const dataCopy= data.slice(1,50);
				setProducts(dataCopy);
			} catch (error){
				console.error(error);
			}
		}
	)();		
	}, []);

	/* 	useEffect(() => {
		console.log(products);
	}, [products]);
 */

  

	return (
		<div className="App">
			<Home products={products}/>
		</div>
	);
}

export default App;
