"use client"

import React, { useState } from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import MenuSelect from './MenuSelect'
import BottomPanel from './BottomPanel'
import Navback from './Navback'

export default function Sidebar() {
  const [open, setOpen] = useState(false); // You can pass this to BottomPanel if necessary

  return (
    <div className='relative'>
      <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] pr-2 z-10'>
        <AccountToggle />
        <Search open={open} setOpen={setOpen} />
        <MenuSelect />
        <Navback />
      </div>
      <BottomPanel />
    </div>
  );
}

