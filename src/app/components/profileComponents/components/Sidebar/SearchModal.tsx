"use client"

import React, { Dispatch, SetStateAction } from 'react'

export default function SearchModal({open, setOpen} : { open: boolean, setOpen : Dispatch<SetStateAction<boolean>>}) {
    
  return (
    <>
    {
      open && 
      <div className='fixed inset-0 bg-stone-950/50' onClick={()=>setOpen(false)}>
  <div className='flex flex-col bg-gray-300 max-w-lg w-full mx-auto mt-16 p-4 rounded z-50' onClick={(e)=>e.stopPropagation()}>
    <input type="text" className='w-full bg-transparent p-1 text-md focus:outline-none border-b-2 border-stone-400 placeholder:text-stone-500' placeholder='Type something...'/>
    <ul className='flex p-4 mt-4 flex-col gap-2'>
      <li>Home</li>
      <li>About</li>
      <li>Support</li>
    </ul>
  </div>
</div>
  }
    </>
  )
}
