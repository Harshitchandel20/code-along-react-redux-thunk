import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { dataFetching, fetchDataFunction } from './redux/action'


function App() {

const data = useSelector((store)=>store.data)
console.log(data)

const dispatch = useDispatch()

const getData = () =>{
  // axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=> {console.log(res),dispatch(fetchDataFunction(res.data))})
  dispatch(dataFetching())
}

  return (
    <>
    
    {data.map((el)=>{
      return (
      <div key={el.id}> 
        <h2>{el.name}</h2>
        <h4>{el.email}</h4>
        <hr />
      </div>
      )
    })}
        <button onClick={getData}>Get Data</button>

    </>
  )
}

export default App
