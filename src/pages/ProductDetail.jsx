import React, {useEffect, useState} from "react";
import NavbarApp from "../components/NavbarApp";
import { useParams } from "react-router-dom";
import axios from "axios";
import noImage from "../img/no-product-image.png";
import { Link } from "react-router-dom";

const ProductDetail = () => {
	const [productInfo, setproductInfo] = useState({});
	const params = useParams();

	const [isUserLogged, setIsUserLogged] = useState({});

	const userLoginState = (loginState) =>{
		setIsUserLogged(loginState);
	};

	useEffect(() => {
		const logged = localStorage.getItem("isUserLogged");
		const jsonLogged = JSON.parse(logged);		
		setIsUserLogged(jsonLogged);
	}, []); 

	useEffect(() => {
		(async () =>{
			try {
				const {data} = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`);
				setproductInfo(data);
			} catch(error){
				console.error(error);
			}
		}) ();
	}, []);
  
	return (
		<><NavbarApp userLoginState={userLoginState}/>
			<h3 className="my-5">Detalles del producto</h3>
			<div className="card" style={{width: "18rem"}}>
				<img className="card-img-top" src={productInfo.image ? productInfo.image : noImage} alt="Product info"/>
				<div className="card-body">
					<h5 className="card-title">{productInfo.product_name}</h5>
					<p className="card-text">{productInfo.description}</p>
					<p className="card-text">$ {productInfo.price}</p>
					{ isUserLogged ? isUserLogged.isUserLogged ? (<button className="btn btn-primary text-white">Comprar</button>) :
						(<>
							<button className="btn btn-primary text-white"><Link to="/login">Login</Link></button>
							<button className="btn btn-primary text-white"><Link to="/signup">Sign up</Link></button>
						</>) : (<>
						<button className="btn btn-primary text--white"><Link to="/login">Login</Link></button>
						<button className="btn btn-primary text-white"><Link to="/signup">Sign up</Link></button>
					</>) }
				
				</div>
			</div>
		</>
	);
};

export default ProductDetail;