import { combineReducers } from '@reduxjs/toolkit'
import dataApi, { setDataApi } from './reducerDataAPi/index'

export { setDataApi }

export default combineReducers({
	dataApi,
})