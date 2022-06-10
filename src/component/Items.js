import React from "react";

function Item(props, i) {
	return (
		<div className="col-md-4">
			<img
				src={process.env.PUBLIC_URL + "./shoes" + props.id + ".jpg"}
				width="80%"
				alt="shoe[i]"
			/>
			<h4>{props.shoes.title}</h4>
			<p>{props.shoes.price}원</p>
		</div>
	);
}

export default Item;
