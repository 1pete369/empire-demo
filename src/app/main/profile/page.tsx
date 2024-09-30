"use client"

import Dashboard from '@/app/components/profileComponents/components/Dashboard/Dashboard'
import Sidebar from '@/app/components/profileComponents/components/Sidebar/Sidebar'
import React from 'react'

export default function page() {
  return (
    <div className="bg-stone-100 relative grid grid-cols-[240px,_1fr] gap-4 p-4 h-100vh">
    <Sidebar />
    <Dashboard />
  </div>
  )
}
