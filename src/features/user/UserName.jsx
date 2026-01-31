import React from 'react'
import { useSelector } from 'react-redux'

export default function UserName() {

  //getting the state using the useSelector hook
  const username=useSelector((state)=>state.user.username)

  if(!username) return

  return (
    <div className='text-sm font-semibold hidden md:block'>{username}</div>
  )
}
