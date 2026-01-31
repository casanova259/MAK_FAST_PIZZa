import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'


export default function Header() {
  return (
    // <h1 >THE FAST PIZZA CO.</h1>
    <header className="flex font-Pizza items-center justify-between bg-yellow-300  uppercase px-4 py-3 border-b border-stone-200 sm:px-6">

      <Link to="/" className='tracking-widest'>The Fast Pizza Co.</Link>
      <SearchOrder />
      <UserName/>
    </header>
  )
}
