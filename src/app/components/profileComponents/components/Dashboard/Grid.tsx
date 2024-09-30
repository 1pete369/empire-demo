import React from 'react'
import { FaFire } from 'react-icons/fa'

export default function Grid() {

    const cardsData = [{
        name : "Reddy pro",
        email : "kureddy095@gmail.com",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis minima temporibus",
        streak : 3
    },{
        name : "Itachi",
        email : "itachir34ever@gmail.com",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis minima temporibus",
        streak : 2
    },{
        name : "Sasuke",
        email : "sasuke095@gmail.com",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis minima temporibus",
        streak : 9
    },{
        name : "Minato",
        email : "Minatokage@gmail.com",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis minima temporibus",
        streak : 11
    }]

  return (
    <div className='grid grid-cols-12 gap-4 p-4'>
        {
            cardsData.map(data=>{
                return <Card name={data.name} email={data.email} bio={data.bio} streak={data.streak} />
            })
        }
    </div>
  )
}

const Card =({name, email, bio, streak} : {name: string, email : string, bio: string , streak : number
})=>{
    return <div className='lg:col-span-4  col-span-12 sm:col-span-6 border border-stone-300 p-4 rounded'>

        <div className='flex flex-wrap items-center justify-between overflow-hidden mb-8 gap-2'>
            <div>
            <h1 className='font-medium text-base'>{name}</h1>
            <p className='text-sm text-stone-500'>{email}</p>
            </div>
            <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Buster"
          alt="avatar"
          className="size-8 bg-sky-500 rounded-sm"
        />
        <div className='text-stone-700'>
            {bio}
        </div>
        </div>
        <div className='flex justify-between items-center'>
            <button className='px-2 py-1.5 bg-sky-100 text-sky-500 rounded border border-stone-300'>view profile</button>
            <p className='flex items-center gap-2 px-2 py-1.5 rounded border border-stone-300'><FaFire className='text-orange-500'/>{streak}</p>
        </div>
    </div>
}