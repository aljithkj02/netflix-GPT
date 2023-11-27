import React, { useState } from 'react'
import { Logo, Menu } from '../assets'
import { USER_ICON } from '../utils/constants'
import { useSelector } from 'react-redux'
import { signoutUser } from '../utils/firebase'
import { Link } from 'react-router-dom'

export const Header = () => {
  const user = useSelector(store => store.user );
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSignOut = () => {
    setIsOpen(false);
    signoutUser();
  }

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='z-30 px-5 md:px-10 lg:px-16 fixed w-full py-2 flex justify-between items-center bg-gradient-to-b from-black to-transparent'>
        <div>
            <img src={Logo} alt="Logo" 
                className='w-44'
            />
        </div>
        { user && (
          <div className='block md:hidden'>
            <img src={Menu} alt="menu" onClick={handleIsOpen} 
              className='w-8 cursor-pointer'
            />
            { isOpen && <div className='flex flex-col p-5 absolute right-3 bg-black bg-opacity-60 gap-2 rounded-md'>
              <Link to='/browse' onClick={() => setIsOpen(false)} className='text-white'>{ user.displayName }</Link>
              <Link to='/search' onClick={() => setIsOpen(false)} className='text-white'>GPT Search</Link>
              <div>
                <button className='text-white' onClick={handleSignOut}>Sign out</button>
              </div>
            </div> }
          </div>
        )}
        { user && <div className='items-center gap-5 hidden md:flex'>
          <Link to='/browse' className='font-bold text-white'>{ user.displayName }</Link>
          <Link to='/search' className='text-white font-bold'>GPT Search</Link>
          <div>
            <button className='font-bold text-white' onClick={handleSignOut}>Sign out</button>
          </div>
          <img src={USER_ICON} alt="User Icon" 
            className='w-10 cursor-pointer'
          />
        </div> }
    </div>
  )
}
