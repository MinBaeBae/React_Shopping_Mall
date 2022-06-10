import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Item from "./component/Items";
import { useState } from "react";
import data from "./data";

function App() {
	let [shoes] = useState(data);
	return (
		<div className="App">
			{/* Nav Nar */}
			<Navbar fixed="top" bg="light" variant="light">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src={process.env.PUBLIC_URL + "/Logo.jpg"}
							width="40"
							height="40"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
						Bae Shopping
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Cart</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<div className="main-bg"></div>

			{/* Shopping Items Card */}
			<div className="container">
				<div className="row">
					{shoes.map((a, i) => {
						return <Item shoes={shoes[i]} id={i + 1}></Item>;
					})}

					{/* <div className="col-md-4">
						<img
							src={process.env.PUBLIC_URL + "/shoes1.jpg"}
							width="80%"
							alt="shoe1"
						/>
						<h4>{shoes[0].title}</h4>
						<p>{shoes[0].price}원</p>
					</div>
					<div className="col-md-4">
						<img
							src={process.env.PUBLIC_URL + "/shoes2.jpg"}
							width="80%"
							alt="shoe2"
						/>
						<h4>상품명</h4>
						<p>상품정보</p>
					</div>
					<div className="col-md-4">
						<img
							src={process.env.PUBLIC_URL + "/shoes3.jpg"}
							width="80%"
							alt="shoe3"
						/>
						<h4>상품명</h4>
						<p>상품정보</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default App;
