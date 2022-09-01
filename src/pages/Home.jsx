import React from "react";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import NavbarApp from "../components/NavbarApp";
import { Link } from "react-router-dom";

const Home = ({products}) => {
	return (
		<>
			<NavbarApp/>
			<h1 className="my-5 home__title">Productos</h1> 		
			<div className="row justify-content-center">
				{products.map((value, index) => {
					const productInfo={name: value.product_name, price: value.price, image: value.image};
					return (
						<div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" ><Link to={`/product/${value._id}`}><Card productInfo={productInfo} /></Link></div>			
					);
				})}
			</div>		
			
		</>
	);
};

export default Home;