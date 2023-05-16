import { useQuery } from '@tanstack/react-query'
import React, { memo } from 'react'
import customFetch from './utils'
import { useGlobalContext } from './Context'
import axios from "axios";
export const url=`https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`
export const Gallery = () => {
 
  const {searchTerm}=useGlobalContext()
  console.log(searchTerm)
  const response=useQuery(
    {
      queryKey:['search',searchTerm],
      queryFn:async()=> {
        if(searchTerm!=undefined)
        {
          const result = await axios.get(`${url}&query=${searchTerm}`);
          return result.data
      }
      }
    }
  )

 console.log(response)
 if (response.isLoading) {
  return (
    <section className='image-container'>
      <h4>Loading...</h4>
    </section>
  );
}
if (response.isError) {
  return (
    <section className='image-container'>
    {searchTerm ?   <h4>There was an error...</h4> : <h4>Enter something</h4>}
    </section>
  );
}

  const results=response.data.results
  if(results.length<1)
  {
    return  <section className='image-container'>
    <h4>No results found</h4>
    </section>
  }
 
  return (
    <>
    <section className='image-container'>
    { response.data && response.data.results.map((image)=>
      {
      return   <img src={image.urls.regular} className='img' alt="search"/>
      }) }
      </section>
      </>
  )
}

  