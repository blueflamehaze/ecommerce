import React from "react";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = ({products}) => {
	return (
		<>
			<h1 className="my-5">Productos</h1> 		
			<div className="row justify-content-center">
				{products.map((value, index) => {
					const productInfo={name: value.product_name, price: value.price, image: value.image};
					return (
						<div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" ><Card  productInfo={productInfo}/></div>			
					);
				})}
			</div>		
			
		</>
	);
};

export default Home;