import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { addCount, minusCount } from '../store/cartSlice'

const Cart = () => {
	let state = useSelector((state) => state)
	let dispatch = useDispatch()
	return (
		<div style={{ padding: '70px' }}>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
					</tr>
				</thead>
				<tbody>
					{state.cart.map((a, i) => (
						<tr key={i}>
							<td>{state.cart[i].id}</td>
							<td>{state.cart[i].name}</td>
							<td>{state.cart[i].count}</td>
							<td>
								<Button
									variant="outline-danger"
									size="sm"
									style={{ marginRight: '7px' }}
									onClick={() => {
										dispatch(minusCount(state.cart[i].id))
									}}
								>
									-
								</Button>
								<Button
									variant="outline-success"
									size="sm"
									onClick={() => {
										dispatch(addCount(state.cart[i].id))
									}}
								>
									+
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}

export default Cart
