import { React } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Detail = (props) => {
	let { id } = useParams()
	let newShoes = props.shoes.find((x) => x.id == id)

	return (
		<>
			<div className="container" style={{ padding: '50px' }}>
				<div className="row">
					<div className="col-md-6">
						<img
							src={`https://codingapple1.github.io/shop/shoes${
								newShoes.id + 1
							}.jpg`}
							width="100%"
							alt="shoes"
						/>
					</div>
					<div className="col-md-6">
						<h4 className="pt-5">{newShoes.title}</h4>
						<p>{newShoes.content}</p>
						<p>{newShoes.price}</p>
						<button className="btn btn-danger">주문하기</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Detail
