import React from 'react'
import API_KEY from './Keys'
import { useState, useEffect } from 'react'

const CONTEXT_KEY="93e70643b7ccb4240";

 //MAKING CUSTOM HOOK 
const useGoogleSearch = (term) => {
  const [data,setData]=useState(null);

  //whenever term gets changed we need to fire out this useEffect(this useEffect gives all the results related to the input and gives the result)
  useEffect(()=>{
    const fetchData=async()=>{
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        .then(response=>response.json())
        .then(result=>{
          setData(result)
        })
    }

    fetchData();

  },[term])
  return {data} //returning data as object
}

export default useGoogleSearch
