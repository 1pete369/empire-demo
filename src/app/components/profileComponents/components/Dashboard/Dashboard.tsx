import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'

export default function Dashboard() {
  return (
    <div className='bg-white shadow rounded-md h-200vh'>
      <TopBar />
      <Grid />
    </div>
  )
}
