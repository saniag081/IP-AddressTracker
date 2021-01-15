import { combineReducers } from '@reduxjs/toolkit'
import dataApi, { setDataApi } from './reducerDataAPi/index'
import reducerInput, {setDataInput} from './reducersInput/index'

export { setDataApi, setDataInput }

export default combineReducers({
	dataApi,
	reducerInput
})