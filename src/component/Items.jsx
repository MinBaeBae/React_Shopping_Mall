import React from 'react'
import { useNavigate } from 'react-router-dom'

function Item(props, i) {
	let navigate = useNavigate()
	return (
		<div className="col-md-4">
			<img
				src={process.env.PUBLIC_URL + './shoes' + props.id + '.jpg'}
				width="80%"
				style={{ cursor: 'pointer' }}
				alt="shoe[i]"
				onClick={(i) => {
					navigate(`/Detail/${props.id - 1}`)
				}}
			/>
			<h4>{props.shoes.title}</h4>
			<p>{props.shoes.price}원</p>
		</div>
	)
}

export default Item
