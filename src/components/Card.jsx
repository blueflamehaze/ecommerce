import React from "react";
import "./style.css";
import noImage from "../img/no-product-image.png";


const Card = ({productInfo: {name, price, image}}) => {
	return <div className="bg"><h3>{name}</h3>
		<img src={image ? image : noImage} className="card__img" />
		<p className="price">$ {price}</p>
	</div>;
};

export default Card;
