import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { TabContent } from '../component'
import { addItem } from './../store/cartSlice'
import { useDispatch } from 'react-redux'

const Detail = (props) => {
	let { id } = useParams()
	let newShoes = props.shoes.find((x) => x.id == id)
	let [tab, setTab] = useState(0)
	let dispatch = useDispatch()

	useEffect(() => {
		let saveItem = localStorage.getItem('recentItem')
		if (saveItem == null) {
			saveItem = []
		} else {
			saveItem = JSON.parse(saveItem)
		}

		saveItem.push(newShoes.id)
		saveItem = new Set(saveItem)
		saveItem = Array.from(saveItem)
		localStorage.setItem('recentItem', JSON.stringify(saveItem))
	})

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
						<button
							className="btn btn-danger"
							onClick={() => {
								dispatch(
									addItem({
										id: `${newShoes.id}`,
										name: `${newShoes.title}`,
										count: 1,
									})
								)
							}}
						>
							주문하기
						</button>
					</div>
				</div>
				<Nav variant="tabs" defaultActiveKey="link0">
					<Nav.Item>
						<Nav.Link
							eventKey="link0"
							onClick={() => {
								setTab(0)
							}}
						>
							버튼0
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="link1"
							onClick={() => {
								setTab(1)
							}}
						>
							버튼1
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="link2"
							onClick={() => {
								setTab(2)
							}}
						>
							버튼2
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<TabContent tab={tab} />
			</div>
		</>
	)
}

export default Detail
