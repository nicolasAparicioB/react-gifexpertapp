import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'
export const useFetchGifs = (category) => {
   const [state, setState] = useState({
       images:[],
       loading:true
   });
  useEffect(()=>{
    getGifs(category)
    .then(imgs=>{
        setTimeout(()=>{
            setState({
                images:imgs,
                loading:false   
               }) 
        },1000)

    })
  },[category])

   return state;
}