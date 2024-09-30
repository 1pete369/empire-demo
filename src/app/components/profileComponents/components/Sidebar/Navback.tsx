import Link from 'next/link'
import React from 'react'

export default function Navback() {
  return (
    <div className='px-3 py-4 mt-4 border-t border-stone-300'>
      <Link href={"/main"} className=' text-sky-500 bg-sky-100 px-3 py-2 rounded'>Home page</Link>
    </div>
  )
}
