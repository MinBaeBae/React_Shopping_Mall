import React from 'react'
import { useNavigate } from 'react-router-dom'

function Item({ shoes }, i) {
	let navigate = useNavigate()
	return (
		<div className="col-md-4">
			<img
				src={`https://codingapple1.github.io/shop/shoes${shoes.id + 1}.jpg`}
				width="80%"
				style={{ cursor: 'pointer' }}
				alt={'Some Kinda Shoes'}
				onClick={(i) => {
					navigate(`/Detail/${shoes.id}`)
				}}
			/>
			<h4>{shoes.title}</h4>
			<p>{shoes.price}원</p>
		</div>
	)
}

export default Item
