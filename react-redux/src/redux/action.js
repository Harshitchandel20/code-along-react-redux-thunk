
import axios from "axios";
import { fetchData } from "./actionType";

export const dataFetching = ()=>(dispatch) =>{

        axios.get("https://jsonplaceholder.typicode.com/users")
          .then((res)=> {console.log(res),dispatch(fetchDataFunction(res.data))})
          .catch((err)=>console.log(err))
      
}

export const fetchDataFunction = (payload)=>{

    return{type:fetchData, payload}

}
