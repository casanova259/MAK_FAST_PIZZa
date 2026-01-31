import React from 'react'

export default function Loader() {
  return (
    <div className='flex items-center justify-center absolute inset-0 bg-slate-200/20 backdrop-blur-sm'>
      <div className='loader'></div>
    </div>
  )
}
