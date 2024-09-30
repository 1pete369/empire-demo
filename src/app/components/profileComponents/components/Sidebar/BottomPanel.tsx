import React from 'react'
import { BiLinkExternal, BiSupport } from 'react-icons/bi'
import { CgSupport } from 'react-icons/cg'
import { FcSupport } from 'react-icons/fc'
import { GrSupport } from 'react-icons/gr'
import { HiSupport } from 'react-icons/hi'
import { LuLogOut } from 'react-icons/lu'
import { MdSupport } from 'react-icons/md'

export default function BottomPanel() {
  return (
    <div className='flex justify-between sticky top-[calc(100vh_-_48px_-_16px)] border-t border-stone-300 pt-4 h-12'>
     <button className='flex p-2 items-center gap-2 bg-stone-200 rounded'>
        <LuLogOut />
        <span>
      Logout
        </span>
     </button>
     <button className='flex p-2 items-center gap-2 bg-stone-200 rounded'>
        <BiLinkExternal />
        <span>
      Support
        </span>
     </button>
    </div>
  )
}
