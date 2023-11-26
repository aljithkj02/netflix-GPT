import React from 'react'
import { Logo } from '../assets'
import { USER_ICON } from '../utils/constants'
import { useSelector } from 'react-redux'
import { signoutUser } from '../utils/firebase'

export const Header = () => {
  const user = useSelector(store => store.user );
  
  const handleSignOut = () => {
    signoutUser();
  }

  return (
    <div className='z-20 px-20 relative py-2 flex justify-between items-center bg-gradient-to-b from-black to-transparent'>
        <div>
            <img src={Logo} alt="Logo" 
                className='w-44'
            />
        </div>
        { user && <div className='flex items-center gap-5'>
          <p className='font-bold text-white'>{ user.displayName }</p>
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
