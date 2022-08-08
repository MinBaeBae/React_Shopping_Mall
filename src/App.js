import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { NavComponent } from './component'
import { Main, Detail, Error, About } from './pages'
import data from './data'
import { useState } from 'react'

function App() {
	let [shoes] = useState(data)

	return (
		<>
			<NavComponent></NavComponent>

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
				<Route path="/About" element={<About />}>
					<Route />
					<Route />
				</Route>

				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
