import React from 'react'
import { useState } from 'react'
import Item from '../component/Items'
import data from '../data'

const Main = () => {
	let [shoes] = useState(data)
	return (
		<>
			<div className="main-bg"></div>

			<div className="container">
				<div className="row">
					{shoes.map((a, i) => {
						return <Item shoes={shoes[i]} id={i + 1}></Item>
					})}

					<div className="col-md-4">
						<img
							src={process.env.PUBLIC_URL + '/shoes1.jpg'}
							width="80%"
							alt="shoe1"
						/>
						<h4>{shoes[0].title}</h4>
						<p>{shoes[0].price}원</p>
					</div>
					<div className="col-md-4">
						<img
							src={process.env.PUBLIC_URL + '/shoes2.jpg'}
							width="80%"
							alt="shoe2"
						/>
						<h4>상품명</h4>
						<p>상품정보</p>
					</div>
					<div className="col-md-4">
						<img
							src={process.env.PUBLIC_URL + '/shoes3.jpg'}
							width="80%"
							alt="shoe3"
						/>
						<h4>상품명</h4>
						<p>상품정보</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
