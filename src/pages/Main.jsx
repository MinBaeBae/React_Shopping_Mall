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
						return (
							<Item shoes={shoes[i]} id={i + 1}  />
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Main
