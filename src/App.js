import './App.css';
import Map from './component/Map/Map'
import Header from './component/Header'
import useRequest from './hooks/useRequest'

function App() {
  const response = useRequest()
  console.log(response)
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default App;
