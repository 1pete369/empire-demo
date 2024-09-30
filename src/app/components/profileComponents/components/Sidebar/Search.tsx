"use client"

import React, { Dispatch, SetStateAction } from 'react'
import { FiCommand, FiSearch } from 'react-icons/fi'
import SearchModal from './SearchModal'

export default function Search({ open, setOpen }: {open :boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      <div className='relative flex items-center bg-stone-200 px-2 py-1.5 rounded text-sm mb-4'>
        <span>
          <FiSearch className='mr-2' />
        </span>
        <input
          type="text"
          className='w-full bg-transparent placeholder:text-stone-400 focus:outline-none'
          placeholder='Search'
        />
        <span
          className='flex items-center font-bold bg-stone-50 rounded shadow p-1 text-xs cursor-pointer'
          onClick={() => setOpen(true)}
        >
          <FiCommand />K
        </span>
      </div>
      <SearchModal open={open} setOpen={setOpen} />
    </>
  )
}
