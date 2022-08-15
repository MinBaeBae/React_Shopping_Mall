import React from 'react'
import { useState, useEffect } from 'react'
import Item from '../component/Items'
import data from '../data'
import axios from 'axios'
import bgImage from '../img/bg.png'
import { useNavigate } from 'react-router-dom'
import {
	Toast,
	ToastContainer,
	Col,
	Row,
	Button,
	Image,
	Container,
	Badge,
} from 'react-bootstrap'

const Main = () => {
	let [shoes, setShoes] = useState(data)
	let [itemCount, setItemCount] = useState(0)

	let saveItem = JSON.parse(localStorage.getItem('recentItem'))
	let navigate = useNavigate()

	useEffect(() => {
		if (saveItem === undefined) {
			localStorage.setItem('recentItem', JSON.stringfy([]))
		} else return undefined
	}, [])

	return (
		<>
			<Image
				style={{ width: '100%' }}
				src={bgImage}
				alt={'backgroundImage'}
			></Image>

			<ToastContainer
				position="top-end"
				className="p-3"
				style={{ margin: '60px 0' }}
			>
				<Row mt-5>
					<Col xs={5} md={{ span: 5, offset: 6 }}>
						{saveItem !== null ? (
							<Badge className="mb-2" bg="light" text="dark">
								Recently Viewed
							</Badge>
						) : (
							<></>
						)}

						<Toast>
							{saveItem !== null
								? saveItem.map((a, i) => {
										return (
											<>
												<Image
													thumbnail
													width={'100%'}
													alt="recent item picture"
													src={`https://codingapple1.github.io/shop/shoes${
														saveItem[i] + 1
													}.jpg`}
													onClick={() => {
														navigate(`/Detail/${[a]}`)
													}}
												/>
											</>
										)
								  })
								: null}
						</Toast>
					</Col>
				</Row>
			</ToastContainer>

			<Container fluid>
				<div className="row">
					{shoes.map((a, i) => {
						return <Item shoes={shoes[i]} id={i} />
					})}
				</div>
			</Container>
			<div className="d-grid gap-2">
				{itemCount < 2 ? (
					<Button
						variant="secondary"
						size="lg"
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
						More SHOES For Meeeeeee
					</Button>
				) : null}
			</div>
		</>
	)
}

export default Main
