import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addCount(state, action) {
			let addCountId = state.findIndex((item) => {
				return item.id == action.payload
			})
			state[addCountId].count++
		},
		minusCount(state, action) {
			let minusCountId = state.findIndex((item) => {
				return item.id == action.payload
			})
			if (state[minusCountId].count > 1) {
				state[minusCountId].count--
			}
		},
		addItem(state, action) {
			state.push(action.payload)
		},
	},
})

export let { addCount, minusCount, addItem } = cart.actions
export default cart
