import React from 'react'
import { Logo } from '../assets'
import { USER_ICON } from '../utils/constants'
import { useSelector } from 'react-redux'
import { signoutUser } from '../utils/firebase'
import { Link } from 'react-router-dom'

export const Header = () => {
  const user = useSelector(store => store.user );
  
  const handleSignOut = () => {
    signoutUser();
  }

  return (
    <div className='z-30 px-20 fixed w-full py-2 flex justify-between items-center bg-gradient-to-b from-black to-transparent'>
        <div>
            <img src={Logo} alt="Logo" 
                className='w-44'
            />
        </div>
        { user && <div className='flex items-center gap-5'>
          <Link to='/browse' className='font-bold text-white'>{ user.displayName }</Link>
          <Link to='/search' className='text-white font-bold'>GPT Search</Link>
          <div>
            <button className='font-bold text-white' onClick={handleSignOut}>Sign out</button>
          </div>
          <img src={USER_ICON} alt="User Icon" 
            className='w-10'
          />
        </div> }
    </div>
  )
}
