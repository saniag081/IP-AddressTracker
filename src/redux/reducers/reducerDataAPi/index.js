
import { createSlice } from '@reduxjs/toolkit'

const dataApi = createSlice({
	name: 'dataApi',
	initialState: [],
	reducers: {
		setDataApi(state, action) {
			return state.push(action.payload)
		}
	},
})

export const { setDataApi } = dataApi.actions

export default dataApi.reducer