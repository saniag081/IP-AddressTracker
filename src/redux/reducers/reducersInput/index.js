import { createSlice } from '@reduxjs/toolkit'

const reducerInput = createSlice({
	name: 'input',
	initialState: {},
	reducers: {
		setDataInput(state, action) {
			return state = action.payload
		}
	}
})

export const { setDataInput } = reducerInput.actions

export default reducerInput.reducer