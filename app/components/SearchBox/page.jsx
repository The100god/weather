import { cn } from '@/utils/cn'
import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBox = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={cn(' flex relative items-center justify-center h-10', props.className)}>
      <input type="text" placeholder='Search Location...' className=' px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full' 
        onChange={props.onChange}
        value={props.value}
      />
      <button className='px-4 py-[9px] bg-[#18afba] text-white rounded-r-md focus:outline-none hover:bg-[#18afba]-600 whitespace-nowrap h-full'>
        <MdSearch />
      </button>
    </form>
  )
}

export default SearchBox
