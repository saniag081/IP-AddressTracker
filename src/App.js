import './App.css';
import { useEffect } from 'react'
import Map from './component/Map/Map'
import Header from './component/Header'
import useRequest from './hooks/useRequest'
import { setDataApi } from './redux/reducers'
import { useDispatch } from 'react-redux'

function App() {
  const response = useRequest()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDataApi(response))
  }, [response, dispatch])

  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default App;
