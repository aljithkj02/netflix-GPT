import React from 'react'
import { Logo } from '../assets'

export const Header = () => {
  return (
    <div className='z-10 w-10/12 mx-auto relative py-2'>
        <div>
            <img src={Logo} alt="Logo" 
                className='w-44'
            />
        </div>
    </div>
  )
}
