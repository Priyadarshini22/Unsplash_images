import React, { useState } from 'react'
import { useGlobalContext } from './Context';

export const SearchForm = () => {

   const {setSearchTerm}=useGlobalContext()
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    const searchValue=e.target.search.value
    console.log(e.target.search.value)
    setSearchTerm(searchValue)
    e.target.search.value=""
  }
  return (
    <>
    <section>
    <form onSubmit={handleSubmit}className='search-form'>
      <input type='text'name='search' placeholder='Enter..' className='form-input search-input' />
      <button type="submit" className='btn'>Submit</button>
    </form>
    </section>
    </>
  )
}
