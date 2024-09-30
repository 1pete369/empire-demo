import React from 'react'

export default function RegisterWithForm() {
  return (
    <form className='p-4 flex flex-col gap-6 items-center'>
        <div className='flex gap-6 items-center justify-center'>
            <label htmlFor="username" className='hidden'>UserName:</label>
            <input required type="text" id='username' className='rounded-sm border-none outline-none px-3.5 py-2.5 placeholder:text-stone-500 placeholder:font-semibold text-black min-w-60' placeholder='Enter username' />
        </div>
        <div className='flex gap-6 items-center justify-center'>
            <label htmlFor="email" className='hidden'>Email:</label>
            <input required type="text" id='email' className='rounded-sm border-none outline-none px-3.5 py-2.5 placeholder:text-stone-500 placeholder:font-semibold text-black min-w-60' placeholder='Enter email' />
        </div>
        <div className='flex gap-6 items-center justify-center'>
            <label htmlFor="password" className='hidden'>Password:</label>
            <input required type="text" id='password' className='rounded-sm border-none outline-none px-3.5 py-2.5 placeholder:text-stone-500 placeholder:font-semibold text-black min-w-60' placeholder='Enter password' />
        </div>
        <button type='submit' className='rounded-sm bg-sky-500 text-sky-100 px-3.5 py-2.5 flex-1 min-w-60'>
          Register
        </button>
    </form>
  )
}
