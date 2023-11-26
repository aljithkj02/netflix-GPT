import React from 'react'

export const GptSearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  }
  return (
    <div className='relative z-10'>
      <form onSubmit={handleSearch}>
        <div className='flex w-10/12 lg:w-5/12 mx-auto mt-20'>
            <input type='text' placeholder='What would you like to watch today?'  
              className='w-full p-3 lg:p-4 outline-none rounded-l-md lg:text-md'
            />
            <button className='px-4 lg:px-12 text-white bg-[#E50914] lg:text-xl font-medium rounded-r-md'>
              Search
            </button>
        </div>
      </form>
    </div>
  )
}
