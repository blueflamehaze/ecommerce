import React, {useEffect, useState} from "react";
import NavbarApp from "../components/NavbarApp";
import { useParams } from "react-router-dom";
import axios from "axios";
import noImage from "../img/no-product-image.png";
import { Link } from "react-router-dom";
import "./Home.css";

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
			<h1 className="my-5 home__title">Detalles del producto</h1>
			<div className="row justify-content-center mx-2 mb-5">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
					<div className="card" style={{width: "100%"}}>
						<div className="row align-items-center">
							<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"><img className="card-img-top" src={productInfo.image ? productInfo.image : noImage} alt="Product info"/></div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"><div className="card-body">
								<h5 className="product_title">{productInfo.product_name}</h5>
								<p className="product__description">{productInfo.description}</p>
								<p className="product__price">$ {productInfo.price}</p>
								{ isUserLogged ? isUserLogged.isUserLogged ? (<button className="product__btn">Comprar</button>) :
									(<>
										<button className="product__btn d-block mb-2"><Link to="/login" className="text__white">Login</Link></button>
										<button className="product__btn"><Link to="/signup" className="text__white">Sign up</Link></button>
									</>) : (<>
									<button className="product__btn d-block mb-2"><Link to="/login" className="text__white">Login</Link></button>
									<button className="product__btn"><Link to="/signup" className="text__white">Sign up</Link></button>
								</>) }
				
							</div></div>
						</div>
						
						
					</div>
				</div>
			</div>
			
		</>
	);
};

export default ProductDetail;