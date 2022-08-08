import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { NavComponent } from './component'
import { Main, Detail, Error, About, Cart } from './pages'
import data from './data'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
	let [shoes] = useState(data)
	let [allShoes, setAllShoes] = useState([])

	useEffect(() => {
		axios
			.all([
				axios.get('https://codingapple1.github.io/shop/data2.json'),
				axios.get('https://codingapple1.github.io/shop/data3.json'),
			])
			.then(
				axios.spread((res1, res2) => {
					const addShoes = shoes.concat(res1.data, res2.data)
					setAllShoes(addShoes)
				})
			)
	}, [shoes])

	return (
		<>
			<NavComponent></NavComponent>

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/detail/:id" element={<Detail shoes={allShoes} />} />
				<Route path="/About" element={<About />}>
					<Route />
					<Route />
				</Route>
				<Route path="/Cart" element={<Cart />} />

				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
