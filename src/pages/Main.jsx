import React from 'react'
import { useState } from 'react'
import Item from '../component/Items'
import data from '../data'
import axios from 'axios'

const Main = () => {
	let [shoes, setShoes] = useState(data)
	let [itemCount, setItemCount] = useState(0)

	return (
		<>
			<div className="main-bg"></div>

			<div className="container">
				<div className="row">
					{shoes.map((a, i) => {
						return <Item shoes={shoes[i]} id={i} />
					})}
				</div>
			</div>
			{itemCount < 2 ? (
				<button
					onClick={() => {
						if (itemCount === 0) {
							axios
								.get('https://codingapple1.github.io/shop/data2.json')
								.then((res) => {
									let newShoes = [...shoes, ...res.data]
									setShoes(newShoes)
									setItemCount(1)
								})
						} else if (itemCount === 1) {
							axios
								.get('https://codingapple1.github.io/shop/data3.json')
								.then((res) => {
									let newShoes2 = [...shoes, ...res.data]
									setShoes(newShoes2)
									setItemCount(2)
								})
						}
					}}
				>
					더 보기
				</button>
			) : null}
		</>
	)
}

export default Main
