import React from 'react'
import { BiNotification } from 'react-icons/bi'
import { CgNotifications } from 'react-icons/cg'
import { FaFire } from 'react-icons/fa'
import { IoNotifications } from 'react-icons/io5'

export default function TopBar() {
  return (
    <div className="flex border-b border-stone-300 mt-2 mb-4 px-4 pb-4 gap-2 items-center justify-between">
        <div className='flex flex-col gap-0.5'>
        <span className=''>Hey <span className='font-semibold'>Welcome!!</span></span>
        <span className='text-xs text-stone-500 font-semibold'>Monday , Aug 10 2024</span>
        </div>
        <div className='flex gap-2'>
        <div className='flex gap-2 items-center px-2 py-1 bg-stone-100 rounded'>
            <FaFire  className='text-orange-600'/>
            <span className='text-base'>5</span>
        </div>
        <div className='relative flex gap-2 items-center px-3 py-3 bg-stone-100 rounded'>
            <IoNotifications className=' animate-pulse'/>
            <span className='absolute right-1 text-xs font-semibold top-0.5 left-2/3 '>10</span>
        </div>
        </div>
    </div>
  )
}
