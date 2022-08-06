import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { NavComponent } from './component/NavComponent'
import { Main, Detail } from './pages'

function App() {
	return (
		<>
			<NavComponent></NavComponent>

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/detail" element={<Detail />} />
			</Routes>
		</>
	)
}

export default App
